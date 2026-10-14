/**
 * Turning pasted text into a JSON value. Deterministic; the only tolerance is
 * a single surrounding Markdown code fence, because every AI emits one.
 */

export type ParseResult =
  | { ok: true; value: unknown; fenced: boolean }
  | { ok: false; reason: "empty" | "not_json"; detail?: string };

const FENCE = /^\s*```[A-Za-z0-9_-]*[ \t]*\r?\n([\s\S]*?)\r?\n[ \t]*```\s*$/;

/**
 * Strip a UTF-8 BOM and one surrounding ``` fence (with or without a language
 * tag). Anything else, such as prose before or after the JSON, is left in place
 * and fails JSON parsing on purpose: the student's AI must emit JSON only.
 */
export function stripFence(text: string): { body: string; fenced: boolean } {
  const noBom = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  const m = FENCE.exec(noBom);
  if (m) return { body: m[1] ?? "", fenced: true };
  return { body: noBom, fenced: false };
}

/** Parse pasted text to a JSON value, stripping one fence first. */
export function parseText(text: string): ParseResult {
  const { body, fenced } = stripFence(text);
  if (body.trim() === "") return { ok: false, reason: "empty" };
  try {
    return { ok: true, value: JSON.parse(body), fenced };
  } catch (err) {
    // The parser's own message, on one line. Its wording varies by JavaScript engine.
    const detail = (err instanceof Error ? err.message : String(err)).replace(/\s+/g, " ").trim();
    return { ok: false, reason: "not_json", detail };
  }
}

/**
 * Trim every string value in a JSON tree (keys untouched). This is the
 * whitespace rule of the spec: trimming happens before length checks, so a
 * value of spaces is empty, not three characters.
 */
export function trimStrings(value: unknown): unknown {
  if (typeof value === "string") return value.trim();
  if (Array.isArray(value)) return value.map(trimStrings);
  if (value !== null && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      // defineProperty so a key spelled "__proto__" stays an own key (and is then reported as unknown).
      Object.defineProperty(out, k, { value: trimStrings(v), enumerable: true, writable: true, configurable: true });
    }
    return out;
  }
  return value;
}
