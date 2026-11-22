# Change 016: Confirmed Coaching Contact Details

## Date

2026-11-22


## Objective

Complete the confirmed full identity for coach Alissa and publish the
confirmed email addresses for the four coaches through the shared people
data.


## Changes

Updated Alissa's existing record to display Alissa Soubbotina and added the
confirmed public emails for Alissa, Corentin Campener, Nicolas Libbrecht,
and Victor Libbrecht.

Alissa's stable `alissa` ID and existing `Sprint / haies / sauts` coaching
assignment were preserved. No phone numbers or duplicate identities were
added.


## Files Affected

### Created

- `docs/changes/016-coaching-contact-details.md`

### Modified

- `src/data/people.ts`

### Deleted

None.


## Technical Implementation

`src/data/people.ts` remains the authoritative source for each person's
identity and public email. The Club page and `PersonCard.astro` already
render this shared data; Training's stable coach IDs and presentation data
were not changed.

Confirmed emails:

- Alissa Soubbotina: `alissa.soubbotina@hotmail.com`
- Corentin Campener: `corentin.campener@hotmail.be`
- Nicolas Libbrecht: `libbrecht.nicolas@outlook.com`
- Victor Libbrecht: `libbrecht.victor@outlook.com`


## Validation

- `npm run build` completed successfully.
- The generated Club page contains all four email addresses.
- The shared data contains one `alissa` record with the existing coaching
  assignment and no coach phone numbers were added.
