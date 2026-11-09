# Lumen & Loam

A cozy forest learning lab with a luminous StarFern night mode. A portfolio project by Alexa Feraci.

## Run

Open `index.html` in Chrome. No install or build step is needed. Google Fonts is optional; system fonts work if offline. Data is saved per browser and website origin, so a local preview and the hosted site have separate study records.

## Publish on GitHub Pages

In this repository, open **Settings → Pages**. Choose **Deploy from a branch**, then **main** and **/(root)**, and save. The `.nojekyll` file keeps this a plain static site. Push updates to `main` to publish them.

## Working features

- Class atlas with 19 starting subjects and saved stars/highlights on orientation cards.
- Editable task garden, completion timestamps, dated notes, custom notebooks, and task links.
- Persistent focus timer with configurable 25/5/15/4 defaults.
- Month, week, and hourly day calendar; completed tasks and saved notes appear automatically.
- Browser-generated ambient soundscapes and JSON export/import.
- Saved StarFern theme, layered glass, animated dimensional vines, and motion controls.
- Mossling grove that grows leaves as tasks are completed.
- Eight Glimmermoth memory levels, three Hushhare pair gardens, Dewfawn’s lost-seed clue trail, and a connected secret clearing; records included in backups.
- Desktop compact icon rail and mobile hamburger navigation.
- Clear spiral-textured timer plus matching transparent Hushhare and Dewfawn artwork.
- A readable Field Guide and printable design guide.

## Content and data

Philosophy Foundations and AI & Technology Ethics each have a published first lesson and assessment. Other class pages begin with orientation prompts for future lessons. Tasks, notes, timer state, and discoveries live in localStorage. No server, account system, telemetry, or automatic cloud sync is included. Export before clearing browser data. Never commit personal study exports into this public repository.

The original private study edition is maintained separately. The public starter contains no personal notes or task history.

## Next

See `ROADMAP.md` for the creature system, lesson publishing, and forest discovery plans.

## Clear-glass visual release

The forest now uses matching generated day/night scenery, a transparent Mossling illustration, unblurred reflective glass surfaces, a top-positioned moon toggle, and a higher Field Guide link. The Field Guide now covers the purpose, subjects, core workflows, backups, and the creature trails and saved discovery system. See `ASSETS.md` for the image briefs.

See `LEARNING_PACK_SPEC.md` for the draft quiz, flashcard, class-import and creature-teacher requirements. These are planned features, not live learning tools yet.

## First learning release
Philosophy Foundations now has a published lesson at `#lesson/philosophy-01` with a balanced 18-question assessment from a 24-question bank. Responses and unfinished drafts save locally; every submitted attempt and retake keeps its own dated notebook entry and review snapshot. Assessment results also appear in the calendar and JSON backup. See `docs/TEACHER_CHATS.md` for starter prompts and publication steps, and `docs/PHILOSOPHY_FOUNDATIONS.md` for the course outline. Run the assessment checks with `node tests/learning-core.test.cjs`.

`templates/lesson-template.json` is a future authoring handoff. File upload/import for lessons, flashcards, and teacher hiring are still planned. The former visible game hub has become a sequence of subtle creature sightings, with prior discoveries preserved.

## Two-class pilot
- Philosophy: `#lesson/philosophy-01` — What makes a good reason?
- AI & Technology Ethics: `#lesson/ai-ethics-01` — Should we let the system decide?

Both use shared lessons, independently sampled assessments, separate class notebooks, dated retakes, and resumable per-lesson drafts. Ethics adds a fictional Wayfinder case desk, a decision memo, and proposed future-lesson seeds. Field-note prompts in both lessons support format testing. Run `node tests/learning-core.test.cjs` for both banks and cross-course draft checks.

## Open study desk
The bottom study toolbar opens a nonblocking notebook, timer, sounds, and discovered paths. Keep notes open during a lesson, browse old notes, and return to unfinished page drafts. Notes can float or dock beside the lesson on a wide display. Games also use independent windows. New StarFern creature artwork follows night mode. See `docs/STUDY_DESK.md` for behavior, draft storage, and checks.

## Collectible forest places
Use Places in the study toolbar to preview or select a forest. The three creature trials reveal Rosepetal Glade; the lantern-letter trail reveals Snowglass Forest. Each includes a complete interface palette and matching creature illustrations. Collect a location at its discovery, then revisit anytime. Earlier discoveries are preserved. See `docs/FOREST_PLACES.md`; run `node tests/forest-places.test.cjs` for state and migration checks.
