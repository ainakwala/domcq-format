import { sha256Hex } from "./sha256.js";

/**
 * Text normalisation used for duplicate detection and option uniqueness only.
 * It never changes what is stored: Unicode NFC, lower-case, whitespace runs
 * collapsed to one space, trimmed.
 */
export function normaliseText(text: string): string {
  return text.normalize("NFC").toLowerCase().replace(/\s+/g, " ").trim();
}

/**
 * The canonical key of a question: normalised stem, then the normalised options
 * sorted, joined by newlines. Two questions with the same key are the same
 * question, whatever the option order, casing or spacing.
 */
export function canonicalKey(question: { stem: string; options: readonly string[] }): string {
  const options = question.options.map(normaliseText).sort();
  return [normaliseText(question.stem), ...options].join("\n");
}

/**
 * SHA-256 (hex) of the canonical key. This is what DoMcq stores per question
 * and what `validate()` compares against `existingFingerprints`. Computable
 * anywhere: Postgres gives the same value with
 * `encode(sha256(convert_to(key, 'UTF8')), 'hex')`.
 */
export function fingerprint(question: { stem: string; options: readonly string[] }): string {
  return sha256Hex(canonicalKey(question));
}
