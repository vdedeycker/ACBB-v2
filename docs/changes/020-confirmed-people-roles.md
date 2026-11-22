# Change 020: Confirmed People Roles

## Date

2026-11-22


## Objective

Complete the confirmed public operational roles for Kevin Brouillard,
Sébastien Colmant-Midol, and Vincent Dedeycker.


## Changes

Added `Entraîneur` to Kevin and Sébastien's operational responsibilities
and `Web` to Vincent's. PersonCard now presents governance roles and
operational responsibilities together on one comma-separated public role
line.

Stable identities and all coaching, contact, portrait, and other people
data remain unchanged.


## Files Affected

### Created

- `docs/changes/020-confirmed-people-roles.md`

### Modified

- `src/data/people.ts`
- `src/components/PersonCard.astro`

### Deleted

None.


## Technical Implementation

Governance roles and operational responsibilities remain separate fields
in the shared people data. PersonCard combines those fields only for
committee-context presentation, joining them with `, `. No layout or style
changes were made.


## Validation

- `npm run build` completed successfully.
