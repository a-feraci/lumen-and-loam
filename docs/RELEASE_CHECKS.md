# Philosophy pilot: release checks

November 9, 2026.

- `node --check` for app, learning core, learning UI, lesson content and forest game changes.
- `node tests/learning-core.test.cjs`: 500 assessments, each 18 unique questions and three per objective; independently shuffled options, all four keyed positions used, distinct sampled orders, correct grading at 15/18 pass and 14/18 fail, incomplete answers rejected, immutable review snapshots, JSON draft restore and distinct retake IDs.
- Cloud-browser local preview: class → published lesson → assessment, source links, suggested tasks added once even after a second click, incomplete submission feedback, chosen answer and choice order preserved after reload, complete 18/18 result and separate 0/18 retake, two notebook entries after reload, and two calendar grade links.
- Notebook grid/back navigation and calendar result links were checked; opening a grade does not open the study-block editor. Long lesson-task names fit inside the study rail.
- Export/import of the preview's test data preserved both submitted attempts.
- A 390px-wide preview frame: lesson layout and four quiz choices, answer selection, next-question control, saved answer count, and persistent mobile header. This is responsive-layout QA, not a physical phone test.
- Hidden discovery chain: no public creature directory; three Glimmermoth levels revealed the petal-eared visitor, the next creature stayed hidden, and the first unlock persisted after reload.
- Question-bank review: all six objectives are taught before assessment. Correct options are not consistently the longest (4 of 24 are longest). Application and reasoning questions mix with concept checks.

Personal study records are stored in each browser; the test records are confined to the local preview origin and are not source content. Locally graded assessments support learning and are not tamper-proof credentials.
