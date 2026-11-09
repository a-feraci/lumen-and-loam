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

## Two-class pilot: AI & Technology Ethics

November 9, 2026.

- Syntax checks passed for the changed app, learning UI, and new lesson.
- The assessment suite runs 500 samples for **each** class (1,000 total), including balanced coverage, distinct shuffles, all four answer positions, grading thresholds, missing-answer rejection, preserved result snapshots, retakes, and JSON-restored drafts. Added a two-course check for independent draft IDs/answers and noncolliding questions; ethics sections resolve their source IDs and teach all six goals.
- Browser preview: AI class and published lesson load; model/data evidence lenses reveal the corresponding text; a provisional decision carries into an editable memo; saving routes the memo to the AI notebook. Replanting suggested tasks reports they already exist.
- Incomplete assessment submission is blocked. A selected answer and its choice order survive reload. Opening a Philosophy draft does not replace the existing Ethics draft or its answer.
- Completed an 18-question Ethics attempt and a separate retake through the UI. Both dated results, their distinct scores, responses, and explanations persist after reload in the Ethics notebook. The Philosophy notebook does not show them. The calendar contains both result links.
- Pilot feedback opens an editable class-specific note with prompts for clarity, repetition, differences between topics, and ideas to grow next.
- A 390px preview frame (375px content width after scrollbar) shows the lesson without horizontal overflow; the case panel fits at 313px and its data lens responds. Inspected Day Canopy and StarFern. This is layout QA rather than a physical-phone test.
- Content review: scenario and numerical evidence are explicitly fictional; accuracy figures recompute to 90%, 50%, and 83.3% overall. Policy verdicts remain ungraded. NIST/OECD primary references were opened and checked; the named NIST 1.0 edition and revision-in-progress status are disclosed. Philosophy text and question-bank IDs are unchanged.

Preview study records are test data on the preview origin. They are not committed or transferred to the public site. Existing browser-local records and export/restore format are preserved.
