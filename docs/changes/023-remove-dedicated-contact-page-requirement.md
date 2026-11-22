# Change 023: Remove the Dedicated Contact Page Requirement

## Date

2026-11-22


## Objective

Remove the planned dedicated `/contact` page from the current ACBB V1
architecture. Contact information is now intentionally contextualized across
the pages and activities that require it.


## Changes

Updated the current requirements and content-management decisions to state
that contextual contacts replace a dedicated generic Contact page.

Removed only the obsolete non-functional `Contact` placeholder from the
Footer. Existing functional Footer links and contextual contacts remain
unchanged.


## Files Affected

### Created

- `docs/changes/023-remove-dedicated-contact-page-requirement.md`

### Modified

- `docs/requirements.md`
- `docs/decisions/content-management.md`
- `src/components/Footer.astro`

### Deleted

None.


## Technical Implementation

No Contact route or page was created. No contact data was moved, duplicated
or changed.

The Footer entry was removed from its existing `Le club` group. The Footer
was otherwise left unchanged, preserving links for Le club, Vie du club,
Partenaires, Facebook, internal regulations, the LBFA ethical charter and the
General Assembly minutes.

The requirements now retain the need for appropriate contextual contacts
while explicitly removing the dedicated page from V1.


## Validation

- `npm run build` completed successfully.
- Current requirements no longer require a dedicated `/contact` page.
- Contextual contacts remain documented for club, affiliation, youth,
  Handisport, sponsorship, competition and event contexts.
- The obsolete Footer `Contact` placeholder was removed.
- No `/contact` page was created.
- Existing contextual contact information and functional Footer links were
  preserved.
