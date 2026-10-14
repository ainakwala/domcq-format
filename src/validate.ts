import type { z } from "zod";
import { parseText, trimStrings } from "./parse.js";
import { envelopeSchema, questionSchema, LETTERS, type DomcqFile, type Question } from "./schema.js";
import { defaultModules, generic, type ModuleConfig, type ModuleRegistry } from "./module.js";
import { moduleErrors, moduleWarnings } from "./rules.js";
import { fingerprint as fingerprintOf, normaliseText } from "./duplicates.js";
import { fixRequest } from "./fix-request.js";
import { messages, type ValidationError, type ValidationWarning } from "./errors.js";

export interface ValidateOptions {
  /** Modules this installation knows, keyed by id. Default: Generic only. */
  modules?: ModuleRegistry;
  /**
   * Fingerprints of questions the student already has (see `fingerprint()`).
   * A match produces warning W001 rather than an error, so the app can offer
   * to skip the duplicate.
   */
  existingFingerprints?: Iterable<string> | ((fingerprint: string) => boolean);
}

export interface ValidationSuccess {
  ok: true;
  /** The parsed, trimmed file. */
  file: DomcqFile;
  /** The module the file was validated against. */
  module: ModuleConfig;
  /** One fingerprint per question, in file order. */
  fingerprints: string[];
  warnings: ValidationWarning[];
  errors: [];
  /** Whether the input arrived inside a code fence. */
  fenced: boolean;
}

export interface ValidationFailure {
  ok: false;
  /** File-level errors first, then by question number. */
  errors: ValidationError[];
  warnings: ValidationWarning[];
  /** The block the student pastes back to their AI. */
  fixRequest: string;
  /** The module, when `exam` resolved to one. */
  module?: ModuleConfig;
  fenced: boolean;
}

export type ValidationResult = ValidationSuccess | ValidationFailure;

type Issue = z.core.$ZodIssue;

/**
 * Validate pasted text as a domcq/1 file. Deterministic: the same input and
 * options always give the same result. Reports every error it can find in one
 * pass so the student makes one round trip to their AI, not ten.
 */
export function validate(input: string | unknown, options: ValidateOptions = {}): ValidationResult {
  const modules = options.modules ?? defaultModules;
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];
  let fenced = false;

  // 1. Text → JSON value.
  let raw: unknown;
  if (typeof input === "string") {
    const parsed = parseText(input);
    if (!parsed.ok) {
      const error: ValidationError =
        parsed.reason === "empty"
          ? { code: "E001", message: messages.E001() }
          : { code: "E002", message: messages.E002(parsed.detail) };
      return fail([error], warnings, undefined, fenced);
    }
    raw = parsed.value;
    fenced = parsed.fenced;
  } else {
    raw = input;
  }

  // 2. Whitespace rule, then the envelope.
  const value = trimStrings(raw);
  const envelope = envelopeSchema.safeParse(value);
  let fatal = false;
  if (!envelope.success) {
    for (const issue of envelope.error.issues) {
      const mapped = mapEnvelopeIssue(issue, value);
      errors.push(mapped);
      if (mapped.code === "E003" || mapped.code === "E007") fatal = true;
    }
  }
  const obj = (value !== null && typeof value === "object" && !Array.isArray(value) ? value : {}) as Record<string, unknown>;

  // 3. Resolve the module. Unknown module: report it, keep going without module rules.
  let module: ModuleConfig | undefined;
  const exam = obj["exam"];
  if (exam === undefined) {
    module = modules["generic"] ?? generic;
  } else if (typeof exam === "string" && !errors.some((e) => e.code === "E008")) {
    module = modules[exam];
    if (module === undefined) {
      errors.push({ code: "E009", field: "exam", message: messages.E009(exam, Object.keys(modules)) });
    }
  }

  if (fatal) return fail(errors, warnings, module, fenced);

  // 4. Each question: structure, cross-field rules, module rules.
  const rawQuestions = obj["questions"] as unknown[];
  const questions: (Question | undefined)[] = [];
  rawQuestions.forEach((rawQuestion, i) => {
    const n = i + 1;
    const parsed = questionSchema.safeParse(rawQuestion);
    if (!parsed.success) {
      const seen = new Set<string>();
      for (const issue of parsed.error.issues) {
        const mapped = mapQuestionIssue(n, issue, rawQuestion);
        const key = `${mapped.code}:${mapped.field ?? ""}`;
        if (!seen.has(key)) {
          seen.add(key);
          errors.push(mapped);
        }
      }
      questions.push(undefined);
      return;
    }

    const question = parsed.data;
    const before = errors.length;
    errors.push(...crossFieldErrors(n, question));
    if (errors.length > before) {
      questions.push(undefined);
      return;
    }

    if (module) {
      errors.push(...moduleErrors(n, question, module));
      warnings.push(...moduleWarnings(n, question, module));
    }
    questions.push(question);
  });

  // 5. Duplicates, across structurally valid questions only.
  const fingerprints: string[] = [];
  const seenIds = new Map<string, number>();
  const seenFingerprints = new Map<string, number>();
  const existing = toPredicate(options.existingFingerprints);
  questions.forEach((question, i) => {
    if (!question) {
      fingerprints.push("");
      return;
    }
    const n = i + 1;
    if (question.id !== undefined) {
      const earlier = seenIds.get(question.id);
      if (earlier !== undefined) {
        errors.push({ code: "E119", question: n, field: "id", message: messages.E119(n, earlier, question.id) });
      } else {
        seenIds.set(question.id, n);
      }
    }
    const fp = fingerprintOf(question);
    fingerprints.push(fp);
    const earlier = seenFingerprints.get(fp);
    if (earlier !== undefined) {
      errors.push({ code: "E120", question: n, message: messages.E120(n, earlier) });
    } else {
      seenFingerprints.set(fp, n);
      if (existing(fp)) warnings.push({ code: "W001", question: n, message: messages.W001(n) });
    }
  });

  sortByQuestion(errors);
  sortByQuestion(warnings);

  if (errors.length > 0 || !envelope.success || module === undefined) {
    return fail(errors, warnings, module, fenced);
  }

  const file: DomcqFile = {
    format: envelope.data.format,
    set: envelope.data.set,
    questions: questions as Question[],
  };
  if (envelope.data.exam !== undefined) file.exam = envelope.data.exam;
  if (envelope.data.exported_at !== undefined) file.exported_at = envelope.data.exported_at;

  return { ok: true, file, module, fingerprints, warnings, errors: [], fenced };
}

function fail(errors: ValidationError[], warnings: ValidationWarning[], module: ModuleConfig | undefined, fenced: boolean): ValidationFailure {
  const result: ValidationFailure = { ok: false, errors, warnings, fixRequest: fixRequest(errors), fenced };
  if (module) result.module = module;
  return result;
}

function toPredicate(existing: ValidateOptions["existingFingerprints"]): (fp: string) => boolean {
  if (existing === undefined) return () => false;
  if (typeof existing === "function") return existing;
  const set = existing instanceof Set ? existing : new Set(existing);
  return (fp) => set.has(fp);
}

function sortByQuestion<T extends { question?: number; code: string }>(items: T[]): void {
  items.sort((a, b) => (a.question ?? 0) - (b.question ?? 0) || a.code.localeCompare(b.code));
}

/** Rules the schema cannot express: letters against the option count, uniqueness. */
function crossFieldErrors(n: number, q: Question): ValidationError[] {
  const errors: ValidationError[] = [];
  const count = q.options.length;

  // Options must differ (compared normalised, so "True" and "true" clash).
  const seen = new Map<string, number>();
  q.options.forEach((option, i) => {
    const key = normaliseText(option);
    const first = seen.get(key);
    if (first !== undefined) {
      errors.push({ code: "E106", question: n, field: `options[${i}]`, message: messages.E106(n, first, i, option) });
    } else {
      seen.set(key, i);
    }
  });

  // Answer letters: ascending, no repeats, within range, not all of them.
  const letters = q.answer.split("");
  const ascending = letters.every((l, i) => i === 0 || l > (letters[i - 1] as string));
  if (!ascending) {
    errors.push({ code: "E107", question: n, field: "answer", message: messages.E107(n, q.answer) });
  } else {
    const outOfRange = letters.find((l) => LETTERS.indexOf(l as (typeof LETTERS)[number]) >= count);
    if (outOfRange !== undefined) {
      errors.push({ code: "E108", question: n, field: "answer", message: messages.E108(n, q.answer, outOfRange, count) });
    } else if (letters.length >= count) {
      errors.push({ code: "E109", question: n, field: "answer", message: messages.E109(n, q.answer) });
    }
  }

  // Rationale keys must name existing options.
  if (q.rationales) {
    for (const key of Object.keys(q.rationales)) {
      if (LETTERS.indexOf(key as (typeof LETTERS)[number]) >= count) {
        errors.push({ code: "E116", question: n, field: `rationales.${key}`, message: messages.E116(n, key, count) });
      }
    }
  }

  return errors;
}

function mapEnvelopeIssue(issue: Issue, value: unknown): ValidationError {
  const obj = (value !== null && typeof value === "object" && !Array.isArray(value) ? value : {}) as Record<string, unknown>;
  const head = issue.path[0];
  if (issue.path.length === 0) {
    if (issue.code === "unrecognized_keys") return { code: "E005", message: messages.E005(issue.keys) };
    return { code: "E003", message: messages.E003(value) };
  }
  switch (head) {
    case "format":
      return { code: "E004", field: "format", message: messages.E004(obj["format"]) };
    case "set":
      return { code: "E006", field: "set", message: messages.E006(obj["set"]) };
    case "questions":
      return { code: "E007", field: "questions", message: messages.E007(obj["questions"]) };
    case "exam":
      return { code: "E008", field: "exam", message: messages.E008(obj["exam"]) };
    case "exported_at":
      return { code: "E010", field: "exported_at", message: messages.E010(obj["exported_at"]) };
    default:
      return { code: "E005", message: messages.E005([String(head)]) };
  }
}

function mapQuestionIssue(n: number, issue: Issue, raw: unknown): ValidationError {
  const obj = (raw !== null && typeof raw === "object" && !Array.isArray(raw) ? raw : {}) as Record<string, unknown>;
  const [head, second] = issue.path;

  if (issue.path.length === 0) {
    if (issue.code === "unrecognized_keys") {
      return { code: "E102", question: n, message: messages.E102(n, issue.keys) };
    }
    return { code: "E101", question: n, message: messages.E101(n, raw) };
  }

  switch (head) {
    case "stem":
      return { code: "E103", question: n, field: "stem", message: messages.E103(n, obj["stem"]) };
    case "options": {
      if (typeof second === "number") {
        const options = Array.isArray(obj["options"]) ? (obj["options"] as unknown[]) : [];
        return { code: "E105", question: n, field: `options[${second}]`, message: messages.E105(n, second, options[second]) };
      }
      return { code: "E104", question: n, field: "options", message: messages.E104(n, obj["options"]) };
    }
    case "answer":
      return { code: "E107", question: n, field: "answer", message: messages.E107(n, obj["answer"]) };
    case "explanation":
      return { code: "E110", question: n, field: "explanation", message: messages.E110(n, obj["explanation"]) };
    case "topic":
      return { code: "E111", question: n, field: "topic", message: messages.E111(n, obj["topic"]) };
    case "subtopic":
      return { code: "E112", question: n, field: "subtopic", message: messages.E112(n, obj["subtopic"]) };
    case "difficulty":
      return { code: "E113", question: n, field: "difficulty", message: messages.E113(n, obj["difficulty"]) };
    case "source":
      return { code: "E114", question: n, field: "source", message: messages.E114(n, obj["source"]) };
    case "rationales": {
      if (typeof second === "string") {
        const rationales = obj["rationales"] as Record<string, unknown> | undefined;
        return { code: "E117", question: n, field: `rationales.${second}`, message: messages.E117(n, second, rationales?.[second]) };
      }
      const badKeys = issue.code === "unrecognized_keys" ? issue.keys : [];
      return { code: "E115", question: n, field: "rationales", message: messages.E115(n, obj["rationales"], badKeys) };
    }
    case "id":
      return { code: "E118", question: n, field: "id", message: messages.E118(n, obj["id"]) };
    default:
      return { code: "E102", question: n, message: messages.E102(n, [String(head)]) };
  }
}
