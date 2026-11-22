# Change 019: People Portrait Completion

## Date

2026-11-22


## Objective

Replace the shared fallback portraits for seven existing ACBB people with
their confirmed supplied portraits.


## Changes

Moved seven portrait files into `public/images/people/` and updated only
the corresponding `photo` references in the existing shared people records.
Stable identities and all non-photo data remain unchanged.


## Files Affected

### Created

- `docs/changes/019-people-portrait-completion.md`

### Modified

- `src/data/people.ts`

### Moved

- `incoming-assets/alissa-soubbotina.png` →
  `public/images/people/alissa-soubbotina.png` (`alissa`)
- `incoming-assets/corentin-campener.jpg` →
  `public/images/people/corentin-campener.jpg` (`corentin-campener`)
- `incoming-assets/gregory-depauw.jpg` →
  `public/images/people/gregory-depauw.jpg` (`gregory-depauw`)
- `incoming-assets/sebastien-colmant.png` →
  `public/images/people/sebastien-colmant-midol.png`
  (`sebastien-colmant-midol`)
- `incoming-assets/victor-libbrecht.jpeg` →
  `public/images/people/victor-libbrecht.jpeg` (`victor-libbrecht`)
- `incoming-assets/vincent-dedeycker.jpg` →
  `public/images/people/vincent-dedeycker.jpg` (`vincent-dedeycker`)
- `incoming-assets/xavier-flameng.jpg` →
  `public/images/people/xavier-flameng.jpg` (`xavier-flameng`)

### Deleted

- `incoming-assets/` (empty directory after the seven moves)


## Technical Implementation

Portraits were matched to existing person records by their unambiguous
filenames. Sébastien's portrait uses the existing
`sebastien-colmant-midol` identity. No duplicate person records were added.

The shared neutral fallback asset remains in place. All current committee
members and coaches now have a real portrait, so none currently use it.


## Validation

- `npm run build` completed successfully.
