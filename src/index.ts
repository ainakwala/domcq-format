/**
 * domcq-format — the `domcq/1` question-set format.
 *
 * Specification: SPEC.md. JSON Schema: schema/v1.json (served at
 * https://domcq.com/schema/v1). This package is the reference validator:
 * strict, deterministic, no AI, no network.
 *
 *   import { validate } from "domcq-format";
 *   const result = validate(pastedText, { modules });
 *   if (!result.ok) show(result.errors, result.fixRequest);
 */
export { validate, type ValidateOptions, type ValidationResult, type ValidationSuccess, type ValidationFailure } from "./validate.js";
export {
  FORMAT_ID,
  LIMITS,
  LETTERS,
  difficultyValues,
  domcqFileSchema,
  questionSchema,
  envelopeSchema,
  type DomcqFile,
  type Question,
  type Letter,
} from "./schema.js";
export { moduleConfigSchema, parseModuleConfig, generic, defaultModules, type ModuleConfig, type ModuleRegistry } from "./module.js";
export { catalogue, messages, letterAt, type ErrorCode, type WarningCode, type ValidationError, type ValidationWarning } from "./errors.js";
export { fixRequest } from "./fix-request.js";
export { parseText, stripFence, trimStrings, type ParseResult } from "./parse.js";
export { canonicalKey, fingerprint, normaliseText } from "./duplicates.js";
export { matchTopic, moduleErrors, moduleWarnings } from "./rules.js";
export { sha256Hex } from "./sha256.js";
