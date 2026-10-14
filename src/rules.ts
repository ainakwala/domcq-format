import type { ModuleConfig } from "./module.js";
import type { Question } from "./schema.js";
import { normaliseText } from "./duplicates.js";
import { messages, type ValidationError, type ValidationWarning } from "./errors.js";

/**
 * The module-rules layer. Runs against the module the file belongs to, on
 * whichever fields of a question passed their structural check (a question
 * with a bad `difficulty` still has its option count and topic checked).
 * Everything here is data-driven from the module config; nothing is specific
 * to any exam.
 */

/** Option text comparison for bans: normalised, trailing punctuation dropped. */
function bannable(text: string): string {
  return normaliseText(text).replace(/[.!?]+$/, "");
}

/** Find the taxonomy topic a `topic` value refers to, or undefined. */
export function matchTopic(topic: string, module: ModuleConfig): string | undefined {
  const taxonomy = module.taxonomy;
  if (!taxonomy || Object.keys(taxonomy).length === 0) return undefined;
  const wanted = normaliseText(topic);
  return Object.keys(taxonomy).find((t) => normaliseText(t) === wanted);
}

/** Module-rule errors for one question. */
export function moduleErrors(n: number, question: Partial<Question>, module: ModuleConfig): ValidationError[] {
  const errors: ValidationError[] = [];

  if (question.options !== undefined) {
    const count = question.options.length;
    if (count < module.options.min || count > module.options.max) {
      errors.push({ code: "E201", question: n, field: "options", message: messages.E201(n, count, module) });
    }
    const banned = (module.banned_option_text ?? []).map(bannable);
    if (banned.length > 0) {
      question.options.forEach((option, i) => {
        if (banned.includes(bannable(option))) {
          errors.push({ code: "E204", question: n, field: `options[${i}]`, message: messages.E204(n, i, option, module) });
        }
      });
    }
  }

  if (question.answer !== undefined && !module.multi_select && question.answer.length > 1) {
    errors.push({ code: "E202", question: n, field: "answer", message: messages.E202(n, question.answer, module) });
  }

  const hasTaxonomy = module.taxonomy !== undefined && Object.keys(module.taxonomy).length > 0;
  if (question.topic !== undefined && hasTaxonomy && matchTopic(question.topic, module) === undefined) {
    errors.push({ code: "E203", question: n, field: "topic", message: messages.E203(n, question.topic, module) });
  }

  return errors;
}

/** Module-rule warnings for one question: things kept as written but worth flagging. */
export function moduleWarnings(n: number, question: Partial<Question>, module: ModuleConfig): ValidationWarning[] {
  const warnings: ValidationWarning[] = [];
  if (question.subtopic === undefined || question.topic === undefined) return warnings;

  const topic = matchTopic(question.topic, module);
  if (topic === undefined) return warnings;

  const subtopics = module.taxonomy?.[topic] ?? [];
  if (subtopics.length === 0) return warnings;

  const wanted = normaliseText(question.subtopic);
  if (!subtopics.some((s) => normaliseText(s) === wanted)) {
    warnings.push({ code: "W201", question: n, field: "subtopic", message: messages.W201(n, question.subtopic, topic, module) });
  }
  return warnings;
}
