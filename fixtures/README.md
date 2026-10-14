# Fixtures

`manifest.json` is the contract: each entry names a file and the error codes (and warning codes) the validator must report for it, as a sorted list of unique codes. An empty `errors` list means the file is valid.

- `valid/` — files that import cleanly: the smallest possible file, one using every optional field including `rationales` and a select-two answer, the same inside a ```` ```json ```` fence (`.md`), files for the two fictional modules, and an exported file with `exported_at` and `id`s.
- `invalid/` — one file per error code in SPEC.md §7, plus files that carry several errors at once to show that everything is reported in one pass. Non-JSON inputs are `.txt` or `.md`.
- `warnings/` — valid files that produce warnings.
- `modules/` — the fictional "Example Exam" (4 options, single answer, taxonomy, banned text) and "Example Cloud Associate" (4–5 options, multi-select) module configs.

Other implementations of `domcq/1` are welcome to run these; `test/fixtures.test.ts` shows how the manifest is consumed. Module threads in DoMcq add their prompt-test outputs here as further `valid/` fixtures.
