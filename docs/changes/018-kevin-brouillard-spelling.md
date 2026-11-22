# Change 018: Kevin Brouillard Spelling

## Date

2026-11-22


## Objective

Correct the confirmed spelling of the existing coach and committee member's
name from “Kévin Brouillard” to “Kevin Brouillard” in active website content.


## Changes

Corrected Kevin's shared first name and the active Training Finder fallback.
His stable person ID and existing governance, coaching, contact, portrait,
and training relationships remain unchanged.


## Files Affected

### Created

- `docs/changes/018-kevin-brouillard-spelling.md`

### Modified

- `src/data/people.ts`
- `src/components/TrainingFinder.astro`

### Deleted

None.


## Technical Implementation

The shared `kevin-brouillard` identity remains authoritative. Training
continues to resolve the name through this stable ID; only the fallback
string was corrected. Historical Change documentation was not modified.


## Validation

- `npm run build` completed successfully.
