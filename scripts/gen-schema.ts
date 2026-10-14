/**
 * Generate schema/v1.json from the Zod schema. Run with `npm run schema`.
 * The JSON Schema carries the structural rules; cross-field rules (answer
 * letters within range, unique options, rationale keys) and module rules are
 * only enforced by the validator and are listed in SPEC.md.
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { z } from "zod";
import { domcqFileSchema } from "../src/schema.js";

const generated = z.toJSONSchema(domcqFileSchema, { target: "draft-2020-12", unrepresentable: "any" }) as Record<string, unknown>;

const schema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://domcq.com/schema/v1",
  title: "domcq/1 question set",
  description:
    "A set of multiple-choice questions in the domcq/1 format, as produced by a student's own AI from the DoMcq prompt and imported into DoMcq (https://domcq.com). Structural rules only; see https://github.com/kamranrashid-com/domcq-format/blob/main/SPEC.md for the cross-field and module rules the reference validator also applies.",
  ...stripSchemaKey(generated),
};

const out = resolve(import.meta.dirname, "..", "schema", "v1.json");
writeFileSync(out, JSON.stringify(schema, null, 2) + "\n");
console.log(`wrote ${out}`);

function stripSchemaKey(obj: Record<string, unknown>): Record<string, unknown> {
  const { $schema: _ignored, ...rest } = obj;
  return rest;
}
