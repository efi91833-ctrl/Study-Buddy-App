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
- `histology-questions.js` — Histology exam banks (GIT, Cardiovascular, Respiratory, Skin, Embryology, Cell Biology, etc.)
- `anatomy-questions.js`, `embryo-questions.js`, `czech-questions.js`, etc. — per-subject question data
- `vendor/` — local copies of React, ReactDOM, Babel, and PDF.js for offline use

## Adding Questions

To add a new exam, edit only the relevant `*-questions.js` file — never `index.html`. Register the exam via `window.histoExtraExams` (or the equivalent for other subjects) using the `tag(prefix, array)` helper to ensure every question gets a unique ID.

## Running

Open `index.html` in a browser, or use the included `Start Study Buddy.command` launcher on macOS.
