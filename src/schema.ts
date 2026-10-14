import { z } from "zod";

/** The one and only format id this validator accepts. */
export const FORMAT_ID = "domcq/1" as const;

/** Numeric limits of domcq/1. Frozen with the format. */
export const LIMITS = Object.freeze({
  questionsPerFile: { min: 1, max: 500 },
  set: { min: 1, max: 120 },
  stem: { min: 10, max: 2000 },
  options: { min: 2, max: 6 },
  option: { min: 1, max: 500 },
  explanation: { min: 1, max: 3000 },
  rationale: { min: 1, max: 1000 },
  topic: { min: 1, max: 80 },
  subtopic: { min: 1, max: 120 },
  source: { min: 1, max: 200 },
  id: { min: 1, max: 64 },
  exam: { min: 1, max: 40 },
});

/** Option letters, in order. Six because `options` holds at most six. */
export const LETTERS = ["A", "B", "C", "D", "E", "F"] as const;
export type Letter = (typeof LETTERS)[number];

export const difficultyValues = ["easy", "medium", "hard"] as const;

const str = (lim: { min: number; max: number }) => z.string().min(lim.min).max(lim.max);

/**
 * One question. Structural rules only; cross-field rules (answer letters within
 * range, unique options, rationale keys) and module rules are applied by the
 * validator, where they can be reported with question numbers and module names.
 */
export const questionSchema = z.strictObject({
  /** Identifier assigned by whatever exported this file. Never produced by a prompt. */
  id: z.string().min(LIMITS.id.min).max(LIMITS.id.max).regex(/^[A-Za-z0-9_.:-]+$/).optional(),
  stem: str(LIMITS.stem),
  options: z.array(str(LIMITS.option)).min(LIMITS.options.min).max(LIMITS.options.max),
  /** One or more capital letters A–F, each indexing `options`, ascending, no repeats: "B", "BD". */
  answer: z.string().regex(/^[A-F]+$/),
  explanation: str(LIMITS.explanation),
  topic: str(LIMITS.topic),
  subtopic: str(LIMITS.subtopic).optional(),
  difficulty: z.enum(difficultyValues).optional(),
  source: str(LIMITS.source).optional(),
  /** Per-option rationale keyed by option letter; any subset of the question's letters. */
  rationales: z.partialRecord(z.enum(LETTERS), str(LIMITS.rationale)).optional(),
});

export type Question = z.infer<typeof questionSchema>;

/** Everything in a file except the questions themselves. */
export const envelopeSchema = z.strictObject({
  format: z.literal(FORMAT_ID),
  exam: z.string().min(LIMITS.exam.min).max(LIMITS.exam.max).regex(/^[a-z0-9]+(-[a-z0-9]+)*$/).optional(),
  set: str(LIMITS.set),
  questions: z.array(z.unknown()).min(LIMITS.questionsPerFile.min).max(LIMITS.questionsPerFile.max),
  /** Set by an exporter; ISO 8601 date or date-time. Imports may omit it. */
  exported_at: z.iso.datetime({ offset: true }).or(z.iso.date()).optional(),
});

/**
 * A complete domcq/1 file. This is the schema published as JSON Schema at
 * https://domcq.com/schema/v1 and in schema/v1.json.
 */
export const domcqFileSchema = envelopeSchema.extend({
  questions: z.array(questionSchema).min(LIMITS.questionsPerFile.min).max(LIMITS.questionsPerFile.max),
});

export type DomcqFile = z.infer<typeof domcqFileSchema>;
