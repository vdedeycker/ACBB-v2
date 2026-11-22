# Change 017: Compact Committee Phone Links

## Date

2026-11-22


## Objective

Present existing public committee phone numbers more compactly on the Club
page without changing which numbers are published.


## Changes

Removed the visible “Mobile” and “Fixe” labels from person cards. Phone
numbers now appear as separate clickable links with a subtle `·` separator
between them and wrap naturally when needed.


## Files Affected

### Created

- `docs/changes/017-compact-committee-phone-links.md`

### Modified

- `src/components/PersonCard.astro`

### Deleted

None.


## Technical Implementation

Each existing public phone remains its own `tel:` link. Its accessible name
includes the phone type, person's name, and number; the visual separator is
hidden from assistive technology. Existing contact-publication rules and
phone data were not changed.


## Validation

- `npm run build` completed successfully.
- Browser checks at 390px and 1280px found no horizontal overflow.
- Type labels are not visible; each phone remains a distinct `tel:` link.
- Pairs of phone numbers display on one line at both checked widths.
