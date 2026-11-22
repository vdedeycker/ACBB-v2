# Change 014: Become an ACBB Partner

## Date

2026-11-22

## Objective

Create a public partnership invitation page for businesses, organizations and
other potential supporters while avoiding sponsor claims or empty sponsor
content when no partner records are confirmed.

## Changes

Created `/partenaires/` with:

- an introduction inviting potential supporters to start a conversation;
- the three partnership possibilities: season, event and material or service
  support;
- a concise explanation of the club activities a partnership may support;
- a clear CTA toward confirmed public club contacts.

Added "Partenaires" to the shared Footer. The primary Header navigation remains
unchanged.

No partner records, logos, sponsor statistics, sponsorship PDF or empty
sponsor area were added. No Homepage sponsor area was implemented.

## Files Affected

### Created

- `src/pages/partenaires.astro`
- `docs/changes/014-become-an-acbb-partner.md`

### Modified

- `src/components/Footer.astro`

### Deleted

None.

## Technical Implementation

The page uses `BaseLayout`, semantic sections and the existing Tailwind-based
ACBB visual primitives. It remains entirely static and adds no JavaScript or
dependency.

The three opportunities use a simple three-column desktop layout that naturally
collapses to one column on smaller screens. Their heading and numbered labels
keep the distinctions understandable without relying on color.

No structured partner data source was created because no confirmed partner
records currently exist and an empty data file would provide no implementation
benefit.

The future partner model will use one reusable partner identity with stable ID,
name, optional logo and website, active status, optional description and
relationship flags or references for season and event partnerships. One partner
must be reusable across the full season and one or several events without
duplicating identity or logo.

The existing event model remains suitable for future event-specific partner
relationships. Event data was not changed. Season partners may later be added
to a Homepage partner area only when confirmed records exist.

The partnership contact is loaded from the shared `src/data/people.ts` people
record. The page identifies Grégory Depauw by his confirmed Treasurer role and
public email. The visible contact and direct `mailto:` CTA both use this shared
record, so no separate sponsorship-contact identity or independent email source
was created.

No phone number or postal address is displayed.

No sponsorship document is displayed. The page is ready for a future approved
document action, but no PDF was created.

## Validation

Validation performed after implementation:

- `npm run build` completed successfully.
- `/partenaires/` generated successfully.
- The page presents all three approved partnership possibilities.
- No partner identity, logo, sponsor count or sponsor statistic was invented.
- No empty partner gallery or Homepage sponsor area was rendered.
- No fake sponsorship PDF was created.
- The Footer contains a link to `/partenaires/`.
- The direct "Contacter le trésorier" CTA uses the confirmed Treasurer
  `mailto:` destination.
- The visible contact identity uses the shared people record and does not
  display a phone number or postal address.
- The responsive layout was checked at 390px, 768px and 1280px.
- No horizontal overflow was observed.
