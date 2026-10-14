import type { ValidationError } from "./errors.js";

/**
 * The "fix request": a block the student copies and pastes to the AI that
 * wrote the file. It lists every error and asks for the complete corrected
 * JSON back. DoMcq never fixes anything itself; this is the whole of its help.
 */
export function fixRequest(errors: readonly ValidationError[], options: { schemaUrl?: string; siteUrl?: string } = {}): string {
  const site = options.siteUrl ?? "https://domcq.com";
  const schema = options.schemaUrl ?? "https://domcq.com/schema/v1";
  const lines = errors.map((e, i) => `${i + 1}. ${e.message}`);
  const count = errors.length === 1 ? "the error" : `all ${errors.length} errors`;

  return [
    `The DoMcq validator (${site}) rejected the domcq/1 question file you produced. Please fix ${count} listed below and return the complete corrected file as a single JSON object inside one \`\`\`json code block, with no commentary before or after it.`,
    "",
    "Rules:",
    "- Keep every question that is not mentioned exactly as it is, in the same order.",
    "- Do not add any field that is not part of the domcq/1 format.",
    `- The format is described at ${schema}.`,
    "",
    "Errors:",
    ...lines,
  ].join("\n");
}
