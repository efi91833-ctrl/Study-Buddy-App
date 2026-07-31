# Study Buddy

A personal, offline-first medical study platform built as a single-page React app. Designed for a medical student studying Histology, Anatomy, Embryology, Czech language, and Radiography — all from one interface.

## Features

- Multiple subjects: Histology, Anatomy, Embryology, Czech, Radiography, and more
- Per-subject exam banks with A/B/C/D multiple-choice questions
- Submit button reveals scores, correct answers (green), wrong answers (red), and unanswered questions (grey, not penalized)
- Explanations shown only after submission
- Weak-area tracking by topic and subtopic
- Next exams automatically focus on weak areas
- Already-mastered questions are not repeated
- Works offline as a PWA — installable on iPad

## Structure

- `index.html` — the entire app (React via Babel, no build step)
- `progress.js` — attempt history, mastery, and weak-area tracking (plain JS, loaded before the app)
- `histology-questions.js` — Histology exam banks (GIT, Cardiovascular, Respiratory, Skin, Embryology, Cell Biology, etc.)
- `anatomy-questions.js`, `embryo-questions.js`, `czech-questions.js`, etc. — per-subject question data
- `vendor/` — local copies of React, ReactDOM, Babel, and PDF.js for offline use
- `test/smoke.js` — headless test suite (`npm test`)

## How progress tracking works

Every answered question is recorded in `localStorage` under `sb_progress_v2`, along
with its topic and subtopic. From that history the app derives:

- **Mastery** — one correct answer retires a question from new exams
  (`MASTERY_STREAK` in `progress.js`). Retired questions become eligible again
  after `RESURFACE_AFTER_DAYS` (default 30) so nothing is lost to a lucky guess.
- **Weak areas** — subtopics with at least `MIN_ATTEMPTS_FOR_WEAKNESS` attempts
  and accuracy at or below `WEAK_THRESHOLD`. Shown on the exam picker and after
  every submit.
- **Weak-area exams** — "Practise Weak Areas" draws up to `WEAK_FOCUS_SIZE`
  questions weighted by how badly each one is going, skipping mastered ones.

Skipped questions are never recorded, so leaving a question blank costs nothing.

Records are keyed by a hash of the question text, not by question id. Ids from
`tag(prefix, array)` are positional, so inserting a question mid-array would
otherwise silently reassign every id after it and corrupt the history.

## Answer options

Options are shuffled on every render. The displayed letter is positional (the
first option shown is always A) while the stored answer keeps the question's
original letter, so scoring and explanations are unaffected. Do not write
explanations that refer to an option by letter — refer to its content instead.

## Adding Questions

To add a new exam, edit only the relevant `*-questions.js` file — never `index.html`. Register the exam via `window.histoExtraExams` (or the equivalent for other subjects) using the `tag(prefix, array)` helper to ensure every question gets a unique ID.

Every question should carry `topic` and `subtopic` — weak-area tracking groups by
them, and an untagged question is reported as "Untagged".

## Running

Open `index.html` in a browser, or use the included `Start Study Buddy.command` launcher on macOS.

## Tests

```
npm install
npm test
```

`test/smoke.js` compiles the app, boots it in jsdom, and asserts the exam builder,
mastery rules, weak-area weighting, option shuffling, scoring, and the results UI.
