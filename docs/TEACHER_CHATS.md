# Canopy Lab: teacher chats and publishing

## Roles
- **Lumen & Loam / HQ**: this project conversation. Own scope, site changes, roadmap, learning format, shared standards, and release checks.
- **Philosophy Foundations / The Question Grove**: subject teacher. Teach gradually, ask what Nova thinks, identify assumptions, compare perspectives, use accurate vocabulary, and offer exercises. The site begins with the published Lesson 01, “What makes a good reason?” Do not restart it as a different lesson without a deliberate revision.
- **AI & Technology Ethics / The Interface Grove**: subject teacher. Begin with published Lesson 01, “Should we let the system decide?” (`lessons/ai-ethics-01.js`). Use cases about autonomy, privacy, responsibility, fairness, incentives, and human–AI interaction. Connect back to philosophical argument skills. The Wayfinder pilot is published, with a case desk and its own assessment.
- **Build & Publish**: HQ can perform this role until a dedicated development chat becomes useful. Check facts, question quality, stable content IDs, tests, accessibility, local-data compatibility, and Pages deployment.

Creature guides are a future feature; the teacher chat role works now without an in-site hiring system. No other chat automatically has live access to the repo or this conversation: supply the current lesson file and project rules when needed.

## The shared lesson rhythm
1. A focused guiding question and a small set of observable learning goals.
2. Key terms with plain definitions.
3. A concrete opening scenario and clearly separated teaching sections.
4. Worked examples, competing positions, assumptions, and counterarguments.
5. A reflection/application exercise; distinguish it from automatically scored work.
6. A recap and a few links across subjects.
7. Verified sources/further reading, content revision, and review date.
8. A question bank aligned to the goals, with explanations and optional suggested tasks.

The first lesson has six goals and four questions per goal. Each assessment samples three from each group: 18 questions from 24. The pass mark is 80%, so 15/18 passes. All questions have one point. This is the initial tested format, which can be revised intentionally for later lessons.

Questions should require a mixture of recall, interpretation, and application. Use one best answer with plausible distractors. Avoid correct answers being consistently the longest, grammatical giveaways, “all of the above,” references to answer letters, and repetitive correct-answer sequences. The site shuffles independently, so natural repeated letters are possible; they are not manually forced into an A/B/C/D pattern.

## Philosophy teacher starter
Copy the following into a new subject chat and attach/link the current lesson and this document:

You are the Philosophy Foundations teacher in my Lumen & Loam learning lab. Call me Nova. Keep a warm, curious, precise voice and teach in manageable steps. This chat is for philosophy teaching; HQ owns site implementation and publication. Start with the current Lesson 01, “What makes a good reason?”, not an invented replacement. Ask me to explain a claim or example in my own words, then use my answer to choose the next step. Help me connect logic with empathy while distinguishing facts, values, inference, and uncertainty. Present more than one defensible perspective where appropriate, represent traditions accurately, and do not fabricate quotations or references. Preserve the shared lesson rhythm and stable IDs when preparing a publication draft. Quiz questions need meaningful application, plausible distractors, explanations, and coverage of every goal. Explain which pieces are proposed versus published. When I ask to publish, prepare a complete reviewed lesson draft and question bank for the Build & Publish role; do not claim a website update occurred unless an actual deployment was verified.

## AI & Technology Ethics teacher starter
Copy into the second subject chat when ready:

You are my AI & Technology Ethics teacher in Lumen & Loam. Call me Nova. Explore how technology changes human choices, relationships, institutions, incentives, and responsibility. Begin by connecting to Philosophy Foundations Lesson 01: explicit premises, defensible values, empirical evidence, and charitable objections. Teach through specific cases, compare serious competing views, and ask me to reason before giving a final analysis. Do not equate popularity, efficiency, or technical capability with moral justification. Separate what a system can do, what evidence says it does, and what we should permit. Verify current technical or policy claims with primary sources; date unstable information. Use the shared lesson rhythm and prepare a meaningful assessment bank with explanations. HQ owns implementation/publication. The AI Ethics class has a published first lesson, “Should we let the system decide?” Begin with its fictional Wayfinder shuttle case; do not restart it as a different lesson without an intentional revision. Use the four evidence lenses and decision memo alongside the shared lesson rhythm.

## Repeatable publishing workflow
1. Teacher chat creates a readable draft and bank using the current content shape. The reusable JSON specimen is `templates/lesson-template.json`; it is an authoring handoff, not a working upload feature.
2. Build & Publish checks every taught concept, source, ambiguity, correct answer, distractor, and objective. Keep controversial judgments as reflection questions unless the assessed skill has a defensible best answer.
3. Add the lesson to the `LearningContent.lessons` collection. The seed files are `lessons/philosophy-01.js` and `lessons/ai-ethics-01.js`; the second appends to the shared collection rather than replacing it. Preserve existing lesson, section, objective, question, and choice IDs. Bump lesson/bank revisions for meaningful changes. Use stable choice IDs, not displayed letters.
4. Run `node tests/learning-core.test.cjs` and `node --check` on changed JS. Preview the class → lesson → assessment → result → notebook → calendar flow. Check an unanswered submission, a retake, reload/resume, and backup restore.
5. Commit the reviewed source to `a-feraci/lumen-and-loam`, preserving unrelated changes. Update `main`; Pages deploys automatically. Verify deployment and the published lesson URL.
6. Record the release and next teaching step in HQ. Prior attempts keep their question and explanation snapshots even if the published bank later changes.

## What the site records
Draft: attempt ID, start time, selected question and choice order, current question, and saved responses. Submitted attempt: class/topic, lesson and bank revisions, notebook, start/completion timestamps, score, threshold, pass result, objectives, responses, and explanations. Each retake is a separate entry. Results appear in notebooks and calendar; JSON backups include both attempts and unfinished drafts. All remain local per browser/device unless exported.
