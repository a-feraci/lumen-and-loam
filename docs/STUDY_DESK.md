# The modular study desk

November 9, 2026.

The lesson is the reading surface. Notebook, timer, sounds, and discovered games are independent tools above it. Opening a notebook or game does not add a backdrop, trap focus, or make the lesson inert.

## Notebook
- The study toolbar stays available across routes. Notes opened from lessons, tasks, saved notes, case memos, and pilot feedback use the same notebook window.
- Float and resize it, move its title bar with a pointer or arrow keys, minimize it, or close it. On wide displays, the arrow button docks it beside the lesson while preserving the study rail. Small displays use a fitted panel with minimize/close controls and the persistent toolbar.
- Open pages have separate tabs. Browse saved notebooks, search titles and bodies, and open an older note without overwriting an unfinished page.
- Input is stored in `data.noteDrafts` as a local draft. Save page explicitly creates or updates a notebook entry; saved notes keep their original creation time. Closing/minimizing the window or setting a page aside retains its draft. A successful save leaves the page open.
- Templates use stable keys and reuse an existing unfinished page instead of replacing its text. Memo and feedback editors no longer share form IDs with task/settings dialogs.
- `data.workspace` holds open-page and layout preferences. Both new keys are additive to the existing export/restore shape; old backups still open. Settings, task, and calendar forms retain their ordinary short dialogs.

## Other tools
Timer and sound controls move into their own windows; the actual controls and event listeners are reused. Closing returns them to the rail. Their existing state remains shared with the lesson and notebook. Game windows have independent close cleanup for their pending timers. Navigation does not close a running game; a full reload restarts the current round, while completed progress remains saved.

Recess lists only games already discovered or recorded in prior saved progress. It does not publish a list of undiscovered creatures. The three main games and their connected bonus clearing remain. A new optional four-fragment letter trail crosses familiar site spaces; hints are voluntary, checkpoints are saved, and the final fictional letter can be copied into a notebook draft. The trail does not gate lessons or replace game unlocks.

## Creature art
Glimmermoth now has illustrated day and StarFern art matching the other creatures. Mossling, Hushhare, and Dewfawn have separate StarFern variants with dark coats and luminous details. Theme changes select the appropriate artwork in the hero, grove, sightings, Field Guide, and game headings. Glows strengthen on hover. These are still individual illustrations; blink/wing/paw animation frames are a future enhancement, not a claimed feature.

## Checks
- `node tests/desk-core.test.cjs`: separate class drafts, nonoverwriting templates, draft JSON roundtrip, explicit saves, edit-in-place IDs/timestamps, immutable saved pages, reopening old notes, invalid-save rejection.
- Existing learning suite still passes for both classes.
- Browser: note editor remains open during lesson evidence changes, timer use, rain sound, and a nonmodal game. Old-note opening, route changes, and reload retain a second unfinished page. Saving uses the right notebook. Game completion still records progress and appears in Recess. The complete letter trail and its final state survive reload.
- A 390px preview frame has 375px of document content after the scrollbar; the page has no horizontal overflow. Notebook minimization and the sound window remain accessible. This is responsive preview QA, not a physical-device test.

Records are local to the browser/device and can be exported. Preview QA records are not included in source or transferred to the public site.
