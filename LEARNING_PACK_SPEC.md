# Learning packs — draft for the next milestone

Status: requirements and proposed contract only. The Philosophy pilot now has a quiz engine with notebook/calendar results, retained retakes and resumable drafts. A learning-pack uploader and creature hiring UI are still planned. The pilot establishes an initial lesson format; the external pack schema remains a draft.

## User journey
Download a template and its instructions → ask a teacher chat to fill it with a chosen topic → upload the JSON → inspect validation and a preview → add the personal class/lesson, quiz bank, flashcards and optional tasks. A full site backup is a separate restore operation, never confused with a pack import. A personal upload must never publish itself to GitHub.

## Proposed entities
- Pack: schemaVersion, stable id, title, description, authorship/source notes, revision, createdAt, classes/lessons/quizBanks/decks/taskTemplates.
- Class: id, title, umbrella/topic group, color, emoji, description, ordered lesson IDs, notebook association, teacherCreature {speciesId, nickname}. Reuse the existing roster before supporting custom image files.
- Lesson: id, classId, revision, title, objectives, guidingQuestion, keyTerms, sections (stable id + structured text), examples, competingViews, exercise, recap, sources, quizBankId, deckIds, suggestedTaskIds.
- Question: id, kind, prompt, choices [{id, text}], correctChoiceIds, explanation, objectiveId, difficulty, source references. Answer IDs are authoritative; display letters are temporary. Avoid answer text revealing the correct choice by length or style.
- Deck/card: stable deck/card IDs, front, back, optional tags, topic/color inheritance, lesson/source reference. Preserve review history separately from source cards.
- Task template: id, title, topic/classId, color, emoji, estimatedMinutes, linked lesson/deck/quiz. Add only when selected; prevent duplicate planting unless explicitly requested.
- Quiz attempt: id, startedAt, completedAt (ISO timestamps, displayed locally), classId/topic, lessonId/revision, bankRevision, selectedQuestionIds, displayed choice order, submitted answer IDs, score, maxScore, passMark, passed, mode, notebookId, per-question feedback. Immutable attempt history, with deletion controls.

## Assessment behavior
Use unbiased Fisher–Yates shuffling for questions and each question's choices. Sample enough questions from a larger bank; cover objectives with balanced sampling. Correct answer position must not depend on question number or follow an A/B/C/D cycle. Randomization can naturally repeat a letter; do not force artificial alternation. Support fixed-position exceptions for logically ordered choices through explicit metadata, or avoid such questions initially.

Proposed pilot target: at least 24 reviewed questions in a bank and 15–20 per assessment, with application/scenario questions mixed with concept checks. Exact pass mark and counts to be agreed. Practice can explain each answer immediately; assessment shows review after submission. Save a dated notebook result and calendar entry with a stable link to the attempt. Retakes are separate records. Locally graded static quizzes are personal learning tools, not tamper-proof credentials.

## Safe, recoverable imports
Validate schema version, size/count limits, types, required IDs, duplicate IDs, references, valid colors, and allowed creature IDs. Show actionable errors and imported counts before changing data. Parse text as text; never execute uploaded JS, HTML, CSS, script URLs or executable content. Use structured text initially. External links should use allowed protocols and safe new-tab attributes.

Class-pack import should support adding alongside existing material and explicit conflict choices; preserve existing notes, grades, and review history. Keep import atomic and provide a pre-import backup/undo path. Migrate older versions deliberately. Full-data exports should include custom lessons, quiz attempts, flashcard progress, creature assignments and game discoveries once those features exist.

## Teacher chat and publishing decisions to make
Agree consistent lesson length, objectives, examples, source expectations, question counts, grading, and practice versus assessment behavior. Establish one project HQ and distinct subject teacher chats, with reusable starter prompts. Teacher outputs should include a validated pack plus readable lesson text. Publishing a canonical public lesson is an explicit reviewed repo update; importing one's own pack is local by default.
