# Fixtures

`manifest.json` is the contract: each entry names a file and the error codes (and warning codes) the validator must report for it, as a sorted list of unique codes. An empty `errors` list means the file is valid.

- `valid/` — files that import cleanly: the smallest possible file, one using every optional field including `rationales` and a select-two answer, the same inside a ```` ```json ```` fence (`.md`), files for the two fictional modules, and an exported file with `exported_at` and `id`s. Files named `<module>-<ai>-<n>.json` are prompt-test outputs: what that AI returned, unedited, for the module's prompt from domcq.com (`generic-chatgpt-1.json` and `generic-gemini-1.json` are the base prompt's own test, 2026-10-15, both valid first time). When the AI's reply carried its own ```` ```json ```` fence, the reply is kept as it came, fence included, as `<module>-<ai>-<n>.md`. `pmp-claude-1.md` to `pmp-claude-4.md` are the PMP prompt's Claude runs (2026-10-15; 1–3 with the page defaults, 4 with per-option rationales on) and `pmp-chatgpt-1.json` is its ChatGPT run (2026-10-15, page defaults); all five valid first time.
- `invalid/` — one file per error code in SPEC.md §7, plus files that carry several errors at once to show that everything is reported in one pass. Non-JSON inputs are `.txt` or `.md`.
- `warnings/` — valid files that produce warnings.
- `modules/` — the fictional "Example Exam" (4 options, single answer, taxonomy, banned text) and "Example Cloud Associate" (4–5 options, multi-select) module configs. Real modules are added here, without the app-only fields, as their prompt-test outputs arrive: `pmp.json` is DoMcq's PMP module (PMI's July 2026 Examination Content Outline).

Other implementations of `domcq/1` are welcome to run these; `test/fixtures.test.ts` shows how the manifest is consumed. Module threads in DoMcq add their prompt-test outputs here as further `valid/` fixtures.
