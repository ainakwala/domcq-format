# The `domcq/1` format

**Status: final.** Version 1 is frozen as of 2026-10-14. Changes go in `domcq/2`.

`domcq/1` is a JSON format for a set of multiple-choice questions written by a student's own AI (ChatGPT, Claude, Gemini or any other) and imported into a practice system such as [DoMcq](https://domcq.com). It carries questions, answers and explanations, and nothing else: no scores, no attempts, no settings. The reference validator in this repository is strict and deterministic, and the JSON Schema is published at `https://domcq.com/schema/v1`.

## 1. Shape

```json
{
  "format": "domcq/1",
  "exam": "pmp",
  "set": "People domain – Conflict & team leadership",
  "questions": [
    {
      "stem": "Two senior developers disagree publicly about the architecture in a sprint review. The project manager should FIRST:",
      "options": [
        "Escalate to the sponsor for a decision.",
        "Meet both developers privately to understand the underlying concerns.",
        "Choose the architecture proposed by the more experienced developer.",
        "Add the item to the risk register and continue the review."
      ],
      "answer": "B",
      "explanation": "Conflict is addressed early, directly and collaboratively. Understanding each party's concerns comes before any decision or escalation.",
      "rationales": {
        "A": "Escalating first skips the project manager's own responsibility to manage team conflict.",
        "C": "Seniority is not a basis for resolving a technical disagreement.",
        "D": "Logging a risk does not address an active conflict."
      },
      "topic": "People",
      "subtopic": "Manage conflict",
      "difficulty": "medium",
      "source": "ECO 2026, People domain, Task 1"
    }
  ]
}
```

## 2. Fields

All strings are trimmed before any check (section 5). Lengths are counted in Unicode code points after trimming (an emoji is one character, as in JSON Schema's `minLength`/`maxLength`).

### Top level

| Field | Required | Rule |
|---|---|---|
| `format` | yes | Exactly `"domcq/1"`. |
| `exam` | no | A module id: lowercase letters, digits and single hyphens, 1–40 characters (`pmp`, `cfa-l1`, `aws-saa`). When absent, the Generic module's rules apply. When present, that module's rules apply (section 4). An id the validator does not know is an error. |
| `set` | yes | 1–120 characters. The name the set is shown under. |
| `questions` | yes | An array of 1–500 questions. |
| `exported_at` | no | ISO 8601 date (`2026-10-14`) or date-time with a `Z` or `±hh:mm` offset (`2026-10-14T09:30:00Z`, `2026-10-14T11:30:00+02:00`). Written by an exporter; an import may omit it. |

No other top-level field is allowed.

### Per question

| Field | Required | Rule |
|---|---|---|
| `stem` | yes | 10–2000 characters. The question text, including any vignette. |
| `options` | yes | An array of 2–6 strings, each 1–500 characters, all different from one another (compared after the normalisation in section 6). Modules may narrow the count. |
| `answer` | yes | One or more capital letters `A`–`F`, in ascending order, no repeats, each naming a correct option by position (`A` is the first option): `"B"`, `"BD"`. Every letter must name an existing option. At least one option must remain incorrect. Modules may forbid more than one letter. |
| `explanation` | yes | 1–3000 characters. Why the correct answer is correct. |
| `rationales` | no | An object keyed by option letter (`A`–`F`), any subset of the question's letters, each value 1–1000 characters: why that option is right or wrong. `{"A": "...", "C": "..."}`. |
| `topic` | yes | 1–80 characters. With `exam` set, must name a topic in that module's taxonomy (compared after the normalisation in section 6; the student's text is kept as written). Without `exam`, free text. |
| `subtopic` | no | 1–120 characters. Free text. Modules that list subtopics may warn when it is not among them; it is never an error. |
| `difficulty` | no | One of `easy`, `medium`, `hard`. |
| `source` | no | 1–200 characters. A reference the student can check in their own materials. |
| `id` | no | 1–64 characters from letters, digits, `_`, `-`, `.`, `:`. Unique within the file. Assigned by whatever exported the file, so that re-importing can reattach history; never produced by a generation prompt. An importer that does not recognise an id ignores it. |

No other question field is allowed.

## 3. Rules the schema cannot express

These are enforced by the validator and are part of the format, even though a JSON Schema checker will not catch them:

1. `answer` letters are strictly ascending with no repeats (`"BD"`, never `"DB"` or `"BB"`).
2. Every `answer` letter and every `rationales` key names an option that exists (a 4-option question has `A`–`D` only).
3. `answer` does not mark every option as correct.
4. `options` are unique within a question.
5. `id` values are unique within a file.
6. No two questions in a file are the same question (section 6).

## 4. Module rules

A module is a data file, not code. It describes the shape of one exam and contains no questions. The fields the validator uses:

| Module field | Effect |
|---|---|
| `id`, `display_name` | Matched against `exam`; the display name appears in error messages. |
| `options.min`, `options.max` | Allowed option count, inclusive, within 2–6. |
| `multi_select` | When `false`, `answer` must be a single letter. |
| `taxonomy` | Topic → subtopics. When present and non-empty, `topic` must match a topic. When absent or empty, topics are free text. |
| `banned_option_text` | Option texts rejected outright: the whole option, after the normalisation in section 6 and with trailing `.`, `!`, `?` removed, equals a banned phrase (for example `"all of the above"`). |

The **Generic** module is always available and is used when `exam` is absent: no taxonomy, 2–6 options, multi-select allowed, nothing banned. The full module config schema (timing, weights, disclaimer, outline verification and so on) is in `src/module.ts`; only the fields above affect validation.

How a multi-answer question is scored is not part of the format; it is a rule of the practice system and its modules. (DoMcq scores multi-select all-or-nothing, as most real exams do.) A multi-answer stem should say how many options to choose ("Choose TWO"), as the real exams do; the generation prompt requires this, the validator does not check wording.

## 5. Parsing

The validator is deterministic. No AI, no heuristics, no repair.

1. A leading UTF-8 byte-order mark is removed.
2. One surrounding Markdown code fence (` ``` ` or ` ```json `, on its own lines) is removed, because every AI emits one. Nothing else is tolerated: text before or after the JSON, two fences, a fence that is not closed, or a trailing comma all fail as "not valid JSON".
3. The remainder must parse as JSON and be an object.
4. Every string value is trimmed; keys are not. Length checks apply to the trimmed value, so a value of spaces is empty. The JSON Schema describes the file *after* this step: `" B "` passes the validator and is stored as `"B"`, while a bare JSON Schema checker would reject it.
5. Unknown fields are rejected, not ignored, at the top level and in questions. This stops a drifting prompt from silently producing data the practice system never sees.
6. All errors are reported in one pass, file-level first, then in question order, so the student makes one round trip to their AI. Every rule runs on whichever fields passed their own structural check: a question with a bad `difficulty` still has its `answer`, `topic`, module rules and duplicates checked. A rule whose input failed structurally (an `answer` check when `options` is not an array) is skipped for that question, since it could only produce a misleading second error.

## 6. Duplicate detection

Two questions are the same question when their **canonical key** matches:

```
normalise(stem) + "\n" + sorted(normalise(option) for option in options).join("\n")
```

where `normalise` is Unicode NFC, lower-case (`toLowerCase`), whitespace runs collapsed to one space, trimmed, and `sorted` orders the normalised options by UTF-16 code units (JavaScript's default `Array.prototype.sort`). The same normalisation is used wherever this specification says two texts are compared: option uniqueness, taxonomy matching, banned option text. Option order, casing and spacing do not matter to the key; the explanation and the answer do not take part.

The **fingerprint** is the SHA-256 of the canonical key, as 64 lowercase hex characters. It is what a practice system stores per question and compares on import. Within a file a duplicate is an error; against the student's existing questions it is a warning, so the import can skip the duplicate and carry on.

## 7. Errors

Errors are coded and numbered by question, and each message is one or two sentences written so that a student can paste it straight back to their AI: it names the field, what was found and what is required. The reference validator also produces a **fix request**, a block listing every error and asking the AI to return the complete corrected file, with no commentary, as a single JSON object in one code fence. (E002 quotes the JSON parser's own message, which is the one part of any message that varies by browser.)

| Code | Meaning |
|---|---|
| E001 | The input is empty. |
| E002 | The input is not valid JSON. |
| E003 | The top level is not a JSON object. |
| E004 | `format` is missing or is not "domcq/1". |
| E005 | Unknown top-level field. |
| E006 | `set` is missing or has the wrong length. |
| E007 | `questions` is missing, not an array, empty, or has more than 500 items. |
| E008 | `exam` is not a valid module id. |
| E009 | `exam` names a module this validator does not know. |
| E010 | `exported_at` is not an ISO 8601 date or date-time. |
| E101 | The question is not a JSON object. |
| E102 | Unknown field in a question. |
| E103 | `stem` is missing, not a string, or outside 10–2000 characters. |
| E104 | `options` is missing, not an array, or has fewer than 2 or more than 6 items. |
| E105 | An option is not a string, is empty, or is longer than 500 characters. |
| E106 | Two options have the same text. |
| E107 | `answer` is missing or is not one or more capital letters A–F in ascending order without repeats. |
| E108 | `answer` names a letter the question has no option for. |
| E109 | `answer` marks every option as correct. |
| E110 | `explanation` is missing, not a string, or outside 1–3000 characters. |
| E111 | `topic` is missing, not a string, or outside 1–80 characters. |
| E112 | `subtopic` is not a string or is outside 1–120 characters. |
| E113 | `difficulty` is not one of easy, medium, hard. |
| E114 | `source` is not a string or is outside 1–200 characters. |
| E115 | `rationales` is not an object keyed by option letters A–F. |
| E116 | A `rationales` key names a letter the question has no option for. |
| E117 | A rationale is not a string or is outside 1–1000 characters. |
| E118 | `id` is not a string of 1–64 letters, digits, `_`, `-`, `.` or `:`. |
| E119 | Two questions have the same `id`. |
| E120 | Two questions have the same stem and options. |
| E201 | The question's option count is outside the module's allowed range. |
| E202 | The question has more than one correct answer in a single-answer module. |
| E203 | `topic` is not in the module's taxonomy. |
| E204 | An option uses text the module bans (for example "all of the above"). |
| W001 | *(warning)* The question duplicates one already in the student's account. |
| W201 | *(warning)* `subtopic` is not in the module's taxonomy for that topic. |

A code is reported at most once per field per question. E1xx, E2xx, W2xx and duplicate checks all run in the same pass (section 5, rule 6).

## 8. Export

An export is a `domcq/1` file: one file per set, the same shape as an import, plus `exported_at` at the top level and `id` on each question. Everything a student imported comes back out unchanged. Attempts, bookmarks and notes are not part of this format; a practice system that exports them uses its own format and links to questions by `id`.

## 9. Versioning

`format` is the version. A validator for `domcq/1` rejects any other value. A future `domcq/2` will be a separate schema at `https://domcq.com/schema/v2`; a practice system may accept both, but a file is one or the other.

## 10. Licence

This specification, the JSON Schema and the reference validator are MIT-licensed. Anyone may read or write `domcq/1` files; naming the format in another product is welcome. "DoMcq" is the name of the practice system at domcq.com.
