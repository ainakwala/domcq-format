import { LIMITS } from "./schema.js";
import type { ModuleConfig } from "./module.js";

/**
 * The error catalogue. Every message is written for one reader: the student's
 * AI, when the student pastes the error list back and says "fix these". So each
 * one names the question, the field, what was found and what is required.
 *
 * E0xx  file-level errors (no question number)
 * E1xx  question-level structural errors
 * E2xx  module-rule errors
 * W0xx  file-level warnings (import may proceed)
 * W2xx  module-rule warnings
 */
export type ErrorCode =
  | "E001" | "E002" | "E003" | "E004" | "E005" | "E006" | "E007" | "E008" | "E009" | "E010"
  | "E101" | "E102" | "E103" | "E104" | "E105" | "E106" | "E107" | "E108" | "E109" | "E110"
  | "E111" | "E112" | "E113" | "E114" | "E115" | "E116" | "E117" | "E118" | "E119" | "E120"
  | "E201" | "E202" | "E203" | "E204";

export type WarningCode = "W001" | "W201";

export interface ValidationError {
  code: ErrorCode;
  /** 1-based question number; absent for file-level errors. */
  question?: number;
  /** The field concerned, when there is one: "answer", "options[2]". */
  field?: string;
  /** Complete, display-ready sentence, including the "Question N:" prefix. */
  message: string;
}

export interface ValidationWarning {
  code: WarningCode;
  question?: number;
  field?: string;
  message: string;
}

/** One line of documentation per code, used by the README and the tests. */
export const catalogue: Readonly<Record<ErrorCode | WarningCode, string>> = Object.freeze({
  E001: "The input is empty.",
  E002: "The input is not valid JSON.",
  E003: "The top level is not a JSON object.",
  E004: "`format` is missing or is not \"domcq/1\".",
  E005: "Unknown top-level field.",
  E006: "`set` is missing or has the wrong length.",
  E007: "`questions` is missing, not an array, empty, or has more than 500 items.",
  E008: "`exam` is not a valid module id.",
  E009: "`exam` names a module this validator does not know.",
  E010: "`exported_at` is not an ISO 8601 date or date-time.",
  E101: "The question is not a JSON object.",
  E102: "Unknown field in a question.",
  E103: "`stem` is missing, not a string, or outside 10–2000 characters.",
  E104: "`options` is missing, not an array, or has fewer than 2 or more than 6 items.",
  E105: "An option is not a string, is empty, or is longer than 500 characters.",
  E106: "Two options have the same text.",
  E107: "`answer` is missing or is not one or more capital letters A–F in ascending order without repeats.",
  E108: "`answer` names a letter the question has no option for.",
  E109: "`answer` marks every option as correct.",
  E110: "`explanation` is missing, not a string, or outside 1–3000 characters.",
  E111: "`topic` is missing, not a string, or outside 1–80 characters.",
  E112: "`subtopic` is not a string or is outside 1–120 characters.",
  E113: "`difficulty` is not one of easy, medium, hard.",
  E114: "`source` is not a string or is outside 1–200 characters.",
  E115: "`rationales` is not an object keyed by option letters A–F.",
  E116: "A `rationales` key names a letter the question has no option for.",
  E117: "A rationale is not a string or is outside 1–1000 characters.",
  E118: "`id` is not a string of 1–64 letters, digits, `_`, `-`, `.` or `:`.",
  E119: "Two questions have the same `id`.",
  E120: "Two questions have the same stem and options.",
  E201: "The question's option count is outside the module's allowed range.",
  E202: "The question has more than one correct answer in a single-answer module.",
  E203: "`topic` is not in the module's taxonomy.",
  E204: "An option uses text the module bans (for example \"all of the above\").",
  W001: "The question duplicates one already in the student's account.",
  W201: "`subtopic` is not in the module's taxonomy for that topic.",
});

const q = (n: number) => `Question ${n}:`;
const quote = (s: string) => `"${s.length > 80 ? s.slice(0, 77) + "..." : s}"`;
const range = (lim: { min: number; max: number }, unit = "characters") => `${lim.min}–${lim.max} ${unit}`;

/** How a value was found: the type word used in messages. */
function found(value: unknown): string {
  if (value === undefined) return "missing";
  if (value === null) return "null";
  if (Array.isArray(value)) return `an array of ${value.length}`;
  if (typeof value === "string") return `a string of ${value.length} characters`;
  return `a ${typeof value}`;
}

/** Builders for every message. Kept in one place so wording stays consistent. */
export const messages = {
  E001: (): string => "The input is empty. Paste the complete JSON your AI produced.",
  E002: (detail: string | undefined): string =>
    `The input is not valid JSON${detail ? ` (${detail})` : ""}. The import must be a single JSON object, optionally inside one \`\`\`json code fence. Remove any text before or after the JSON and check for a missing comma, bracket or quote.`,
  E003: (value: unknown): string =>
    `The top level is ${found(value)} but must be a JSON object with \`format\`, \`set\` and \`questions\`.`,
  E004: (value: unknown): string =>
    value === undefined
      ? `\`format\` is missing. Add "format": "domcq/1" at the top level.`
      : `\`format\` is ${typeof value === "string" ? quote(value) : found(value)} but must be exactly "domcq/1".`,
  E005: (keys: string[]): string =>
    `Unknown top-level field${keys.length > 1 ? "s" : ""} ${keys.map((k) => `\`${k}\``).join(", ")}. Allowed: \`format\`, \`exam\`, \`set\`, \`questions\`, \`exported_at\`. Remove the rest.`,
  E006: (value: unknown): string =>
    `\`set\` is ${found(value)} but must be a string of ${range(LIMITS.set)} naming the set.`,
  E007: (value: unknown): string =>
    `\`questions\` is ${found(value)} but must be an array of ${range(LIMITS.questionsPerFile, "questions")}.`,
  E008: (value: unknown): string =>
    `\`exam\` is ${typeof value === "string" ? quote(value) : found(value)} but must be a lowercase module id such as "pmp" or "cfa-l1" (letters, digits and hyphens, ${range(LIMITS.exam)}). Remove it to use the Generic module.`,
  E009: (value: string, known: string[]): string =>
    `\`exam\` is ${quote(value)}, which is not a known module. Known modules: ${known.map((k) => `"${k}"`).join(", ")}. Use one of these or remove \`exam\` to use the Generic module.`,
  E010: (value: unknown): string =>
    `\`exported_at\` is ${typeof value === "string" ? quote(value) : found(value)} but must be an ISO 8601 date ("2026-10-14") or date-time ("2026-10-14T09:30:00Z"). It is only set by an exporter; remove it if you wrote it yourself.`,

  E101: (n: number, value: unknown): string =>
    `${q(n)} the question is ${found(value)} but must be a JSON object with \`stem\`, \`options\`, \`answer\`, \`explanation\` and \`topic\`.`,
  E102: (n: number, keys: string[]): string =>
    `${q(n)} unknown field${keys.length > 1 ? "s" : ""} ${keys.map((k) => `\`${k}\``).join(", ")}. Allowed fields: \`stem\`, \`options\`, \`answer\`, \`explanation\`, \`topic\`, \`subtopic\`, \`difficulty\`, \`source\`, \`rationales\`, \`id\`. Remove the rest.`,
  E103: (n: number, value: unknown): string =>
    `${q(n)} \`stem\` is ${found(value)} but must be a string of ${range(LIMITS.stem)}.`,
  E104: (n: number, value: unknown): string =>
    `${q(n)} \`options\` is ${found(value)} but must be an array of ${range(LIMITS.options, "strings")}.`,
  E105: (n: number, index: number, value: unknown): string =>
    `${q(n)} option ${letterAt(index)} is ${found(value)} but every option must be a non-empty string of at most ${LIMITS.option.max} characters.`,
  E106: (n: number, first: number, second: number, text: string): string =>
    `${q(n)} options ${letterAt(first)} and ${letterAt(second)} are both ${quote(text)}. Every option must be different.`,
  E107: (n: number, value: unknown): string =>
    `${q(n)} \`answer\` is ${typeof value === "string" ? quote(value) : found(value)} but must be one or more capital letters A–F in ascending order without repeats, each naming a correct option: "B" or "BD".`,
  E108: (n: number, value: string, letter: string, count: number): string =>
    `${q(n)} \`answer\` ${quote(value)} includes ${letter} but the question has only ${count} options (A–${letterAt(count - 1)}).`,
  E109: (n: number, value: string): string =>
    `${q(n)} \`answer\` ${quote(value)} marks every option as correct. At least one option must be incorrect.`,
  E110: (n: number, value: unknown): string =>
    `${q(n)} \`explanation\` is ${found(value)} but must be a string of ${range(LIMITS.explanation)} explaining why the correct answer is correct.`,
  E111: (n: number, value: unknown): string =>
    `${q(n)} \`topic\` is ${found(value)} but must be a string of ${range(LIMITS.topic)}.`,
  E112: (n: number, value: unknown): string =>
    `${q(n)} \`subtopic\` is ${found(value)} but must be a string of ${range(LIMITS.subtopic)}, or omitted.`,
  E113: (n: number, value: unknown): string =>
    `${q(n)} \`difficulty\` is ${typeof value === "string" ? quote(value) : found(value)} but must be "easy", "medium" or "hard", or omitted.`,
  E114: (n: number, value: unknown): string =>
    `${q(n)} \`source\` is ${found(value)} but must be a string of ${range(LIMITS.source)}, or omitted.`,
  E115: (n: number, value: unknown, badKeys: string[]): string =>
    badKeys.length > 0
      ? `${q(n)} \`rationales\` has key${badKeys.length > 1 ? "s" : ""} ${badKeys.map((k) => quote(k)).join(", ")} but keys must be option letters A–F.`
      : `${q(n)} \`rationales\` is ${found(value)} but must be an object keyed by option letter, for example {"A": "...", "C": "..."}, or omitted.`,
  E116: (n: number, letter: string, count: number): string =>
    `${q(n)} \`rationales\` has a key ${letter} but the question has only ${count} options (A–${letterAt(count - 1)}).`,
  E117: (n: number, letter: string, value: unknown): string =>
    `${q(n)} the rationale for ${letter} is ${found(value)} but must be a string of ${range(LIMITS.rationale)}.`,
  E118: (n: number, value: unknown): string =>
    `${q(n)} \`id\` is ${typeof value === "string" ? quote(value) : found(value)} but must be a string of ${range(LIMITS.id)} using letters, digits, "_", "-", "." or ":". Ids are set by an exporter; remove it if you wrote it yourself.`,
  E119: (n: number, earlier: number, id: string): string =>
    `${q(n)} \`id\` ${quote(id)} is the same as question ${earlier}'s. Ids must be unique within a file.`,
  E120: (n: number, earlier: number): string =>
    `${q(n)} duplicate of question ${earlier} (same stem and options). Remove one of them, or change the stem so the two questions differ.`,

  E201: (n: number, count: number, module: ModuleConfig): string =>
    `${q(n)} has ${count} options but ${module.display_name} questions must have ${optionRule(module)}.`,
  E202: (n: number, value: string, module: ModuleConfig): string =>
    `${q(n)} \`answer\` is ${quote(value)} but ${module.display_name} questions have exactly one correct answer. Rewrite the question so that one option is correct.`,
  E203: (n: number, value: string, module: ModuleConfig): string =>
    `${q(n)} \`topic\` ${quote(value)} is not in the ${module.display_name} taxonomy. Valid topics: ${Object.keys(module.taxonomy ?? {}).map((t) => `"${t}"`).join(", ")}.`,
  E204: (n: number, index: number, text: string, module: ModuleConfig): string =>
    `${q(n)} option ${letterAt(index)} is ${quote(text)}, which ${module.display_name} questions must not use. Replace it with a specific, plausible option.`,

  W001: (n: number): string =>
    `${q(n)} is the same as a question already in your account (same stem and options). It will be skipped unless you choose to import it again.`,
  W201: (n: number, value: string, topic: string, module: ModuleConfig): string =>
    `${q(n)} \`subtopic\` ${quote(value)} is not listed under "${topic}" in the ${module.display_name} taxonomy. It will be kept as written; expected subtopics: ${(module.taxonomy?.[topic] ?? []).map((s) => `"${s}"`).join(", ")}.`,
} as const;

/** "A" for 0, "B" for 1, ... */
export function letterAt(index: number): string {
  return String.fromCharCode(65 + index);
}

function optionRule(module: ModuleConfig): string {
  const { min, max } = module.options;
  return min === max ? `exactly ${min}` : `between ${min} and ${max} options`;
}
