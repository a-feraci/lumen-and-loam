# Collectible forest places

November 9, 2026.

Open **Places** in the persistent study toolbar. Day Canopy and StarFern remain available from the start. Each collected location changes the scene, interface palette, and the four creature illustrations. Selection is remembered; it does not replace study records.

## Rosepetal Glade
A pink fairy clearing with flower-covered trees, pink mushrooms, sparkles, and matching pink fairy creatures. Complete the three existing creature trials, follow their shared invitation, then use **Collect & enter Rosepetal Glade**. Being eligible alone does not silently collect it. Earlier saved visits to the old quiet clearing are honored as already collected.

## Snowglass Forest
A snow-covered forest with a partially frozen stream, icy plants, pearl-white and pale-blue creatures, and a matching frost palette. The existing four-fragment lantern-letter trail reveals this place. Collect it from the letter's ending. Earlier completed letter trails are honored on migration.

## Previews and return visits
An undiscovered place has a clearly marked temporary preview. A preview changes only the visible appearance: it does not grant a place, change the saved selection, or advance a game or riddle. End preview returns to the saved forest; reload does too. An already collected place can be selected anytime. The original moon button keeps its day/night shortcut in the two home modes; in a collected location it opens the place picker.

## Persistence
`data.forestPlaces` version 1 holds `collected` records and `selected`. Existing discovery data determines eligibility. One-time migration credits earlier clearing/letter discoveries. Collection timestamps are not overwritten by repeat visits. The current JSON export/import includes this additive state; old backups still work. The existing appearance preference is retained as the initial selection when valid. A theme missing from the collection falls back safely to an available home forest.

Notes, draft pages, assessments, timer, game progress, and sound controls retain their existing storage and behavior. Theme switching paints the existing page rather than re-rendering its lesson or quiz. This is local cosmetic progression, not a security boundary.

## Artwork and behavior
Two original generated scene illustrations and eight transparent creature variants are optimized as WebP. The four existing creatures keep their identities. The pink versions have pink coats, flowers, sparkle details, and fairy wings; winter versions have pearly coats, frost, and icy dew. A small decorative sparkle/snow layer respects Forest motion and reduced-motion preferences. These remain individual creature illustrations, not pose-frame animations.

## Validation
- Pure-state tests cover locked themes, eligibility versus collection, repeated collection timestamps, selection, legacy discoveries, backup roundtrips, invalid-theme fallback, and preserved notes/quiz drafts.
- Existing notebook and both learning assessment suites pass.
- Browser: previewing the locked pink theme did not collect it and reload returned to StarFern. An older completed letter trail was credited; selecting Snowglass persisted after reload.
- Browser: completed the visible memory, matching, and seed trials, opened their invitation, collected Rosepetal, and confirmed it remained selected and collected after reload.
- Both full palettes and creature-image swaps were visually inspected. Preview QA progress is confined to the preview origin and is not repository content.
- A 390px preview frame (375px content width after its scrollbar) has no horizontal page overflow. The place picker fits within the viewport, and a saved note draft remains available in the Snowglass notebook. This is responsive-layout QA, not a physical-phone test.
