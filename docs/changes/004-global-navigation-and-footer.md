# Global Navigation and Footer

## Date

2026-11-18


## Objective

Add the shared ACBB website shell before implementing homepage and business
page content, following the approved V1 navigation and existing design,
responsive, and accessibility foundations.


## Changes

Added a shared Header and Footer and integrated them into `BaseLayout`.
The existing index specimen remains unchanged; no business pages or
placeholder routes were created. All public-facing labels in the shared
shell are French, consistent with the new active language decision.


## Files Affected

### Created

- `src/components/Header.astro`
- `src/components/Footer.astro`
- `docs/decisions/language.md`
- `docs/changes/004-global-navigation-and-footer.md`

### Modified

- `src/layouts/BaseLayout.astro`

### Deleted

None.


## Technical Implementation

The Header uses the existing ACBB logo at `/images/logo_acbb.jpg` without
moving, renaming, or altering it. It displays the approved primary
destinations in French: Accueil, Entraînements, Le club, Compétitions, and
Événements ACBB. Accueil links to `/` and is marked current there;
destinations without implemented routes are plain text with no link
semantics, hover styles, focus states, or clickable affordances. Rejoindre
l'ACBB retains its prominent visual treatment as plain text until its
destination exists.

On narrow screens, a native `<details>/<summary>` disclosure provides the
mobile menu and its expanded/collapsed state without client-side JavaScript.
At large-screen widths, the primary navigation is shown inline. The same
navigation data supplies both layouts. The existing global focus style
applies to interactive elements, and a skip link provides direct keyboard
access to the main landmark.

The Footer groups the approved En pratique, Le club, and Informations sections.
The Footer labels and skip-link and navigation landmark accessible names
are French. Until routes exist, destination labels remain plain text rather
than links. Social links are omitted until the public Facebook URL is
confirmed; the private youth group is not exposed in a global footer. The
Footer includes ACBB identity and a current-year copyright line without
unconfirmed business or legal claims.

A persistent project language requirement is recorded in
`docs/decisions/language.md`: all public-facing website content and UI
labels must be in French unless explicitly decided otherwise. No
dependency was added, and the logo asset was not moved.


## Validation

- `npm run build` completed successfully.
- Browser checks confirmed French Header/Footer labels and no horizontal
  overflow at 375px, 390px, 768px, and 1280px.
- The native mobile menu opened and closed by click and keyboard, and
  keyboard navigation reached the skip link and menu trigger.
