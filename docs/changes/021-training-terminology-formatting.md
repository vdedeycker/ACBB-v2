# Change 021: Training Terminology Formatting

## Date

2026-11-22


## Objective

Normalize slash spacing in two current public training labels.


## Changes

Updated the active terminology to `Sprint/haies/sauts` and
`Perfectionnement/musculation` in shared people/training data and the
current grouping, ordering, and homepage label references.

Training schedules, categories, coach assignments, identities, page layouts,
and historical Change documentation were not changed.


## Files Affected

### Created

- `docs/changes/021-training-terminology-formatting.md`

### Modified

- `src/data/people.ts`
- `src/data/training-sessions.ts`
- `src/components/PersonCard.astro`
- `src/pages/entrainements.astro`
- `src/pages/index.astro`

### Deleted

None.


## Technical Implementation

The shared people and training-session data remain authoritative. Active
PersonCard matching and Entraînements ordering references use the corrected
Sprint label, and the Homepage uses the same public wording. No display
replacement logic was added.


## Validation

- `npm run build` completed successfully.
