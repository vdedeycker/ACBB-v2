# Change 008: Club Page, Committee and Coaches

## Date

2026-11-22

## Objective

Create the public Club page and present the confirmed committee and coaching
staff with a shared, maintainable people model.

## Changes

Created `/le-club` with a concise introduction, committee hierarchy and
coaching staff. Activated the shared Header and Footer links for the Club
route.

Added one shared identity for every person, allowing committee and coaching
roles to coexist without duplicate identities or portraits.

Governance roles, operational responsibilities, commission memberships and
coaching assignments remain separate fields. No commission membership,
responsibility or unconfirmed organization chart information was invented.

Committee public emails and permitted public phones were added. Jean-Paul
Wiseur's supplied shared email `breuwis@skynet.be` is published exactly as
provided and remains to be reconfirmed.

## Files Affected

### Created

- `src/pages/le-club.astro`
- `src/data/people.ts`
- `src/components/PersonCard.astro`
- `public/images/ui/person-placeholder.svg`
- `public/images/people/daniel-brocsko.png`
- `public/images/people/anne-breuse.png`
- `public/images/people/kevin-brouillard.png`
- `public/images/people/martine-boonaert.png`
- `public/images/people/nicolas-libbrecht.png`
- `public/images/people/jean-paul-wiseur.png`
- `docs/changes/008-club-page-committee-and-coaches.md`

### Modified

- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/data/training-sessions.ts`
- `src/components/TrainingFinder.astro`
- `src/pages/entrainements.astro`
- `src/styles/global.css`
- `docs/decisions/content-management.md`

### Deleted

None.

The six confirmed portrait files were moved from `incoming-assets/` to
`public/images/people/`; `incoming-assets/` became empty and was removed.
No unrelated incoming asset was deleted.

## Technical Implementation

`src/data/people.ts` stores one identity per person and supports optional
portraits, public email, public phones, governance roles, operational
responsibilities, commissions and coaching assignments.

`PersonCard.astro` supplies the neutral fallback when no portrait exists.
In committee context it displays governance roles, public email and public
phone values only when permitted. In coach context it displays one identity
with one or more coaching assignments and never coach phone numbers.

The committee hierarchy is grouped as Président, Vice-président, Secrétaire,
Trésorier and Administrateurs. The visual Committee section is unified:
all members appear in one responsive grid and their role remains displayed
on each person card. The coaching staff is grouped by person.

Person cards use a restrained neutral border, rounded corners and balanced
padding for both committee and coaching contexts. Coaching assignments are
presented with a training-domain label, subordinate category information and
a separate secondary assignment line when applicable. Public emails remain
separate from coaching assignments.

Training session data now uses stable person IDs instead of duplicated
coaching names. `TrainingFinder.astro` and `entrainements.astro` resolve those
IDs to display names. Training schedules, categories, birth-year mappings,
DLTA mappings and Finder behavior were not changed.

## Portrait Mapping

- `boonaert_m.png` → `martine-boonaert.png`
- `breuse_a.png` → `anne-breuse.png`
- `brocsko_d.png` → `daniel-brocsko.png`
- `brouillard_k.png` → `kevin-brouillard.png`
- `libbrecht_n.png` → `nicolas-libbrecht.png`
- `wiseur_jp.png` → `jean-paul-wiseur.png`

The remaining committee and coach identities use the shared neutral fallback.
This fallback is stored once under `public/images/ui/person-placeholder.svg`
and is selected by `PersonCard.astro`.

## Contact Publication Policy

All confirmed committee emails are public and render as `mailto:` links.

Public phones are limited to:

- Daniel Brocsko: mobile and landline
- Kévin Brouillard: mobile
- Anne Breuse: mobile and landline

No phone is displayed for Grégory Depauw or the Administrateurs. Kévin
Brouillard's phone is published through his Vice-président governance role
and is not duplicated in coaching data. No coach phone number is inferred.

No personal postal address is published.

## Validation

- `npm run build` completed successfully.
- Astro generated `/le-club/index.html` and `/entrainements/index.html`.
- The Header and Footer link to `/le-club/` and the Club route is marked active.
- The generated Club page contains every confirmed committee identity once in
  the committee section and every confirmed coach identity once in the coach
  section.
- Kévin Brouillard has one shared person record and appears in the committee
  and coaching sections without duplicate identity data.
- Confirmed portrait URLs return HTTP 200 in the local preview.
- Confirmed committee emails and permitted phones are present in the generated
  HTML. No phone is rendered in coaching context.
- HTTP preview checks confirmed `/le-club/` and `/entrainements/` return 200.
- `PersonCard.astro` now uses restrained neutral containers for committee and
  coaching members, with consistent portrait sizing and wrapped content.
- The Committee section has one unified responsive grid instead of role
  subsections.
- Coaching assignments use domain headings, subordinate category lines and
  separate secondary assignments.
- The layout remains one-column below 1024px and uses two columns at 1024px
  and wider. This keeps 768px tablets in a comfortable single-column layout.
- Manual visual review at 390px, 768px and 1280px remains required.
