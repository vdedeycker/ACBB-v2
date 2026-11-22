# Change 010: ACBB Events and Souper ACBB 2027

## Date

2026-11-22

## Objective

Add a reusable ACBB event architecture and publish the confirmed Souper de
l'ACBB 2027 event. Connect the global Events page and Homepage to the same
structured event source without duplicating event facts in page markup.

## Changes

Created `/evenements/` and `/evenements/souper-acbb-2027/`.

Added the confirmed Souper 2027 data, including the 6 March 2027 date,
18:30 start time, Salle de l'Amitié location, menu, prices, 22 February 2027
registration deadline, external Google Forms registration URL and payment
information.

Activated the shared Header and Footer Events links and replaced the Homepage
Events placeholder with a shared event preview.

## Files Affected

### Created

- `src/data/events.ts`
- `src/components/EventCard.astro`
- `src/pages/evenements.astro`
- `src/pages/evenements/souper-acbb-2027.astro`
- `docs/changes/010-acbb-events-and-souper-acbb-2027.md`

### Modified

- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/pages/index.astro`
- `src/styles/global.css`

Following the visual review adjustment, the dedicated Souper page uses a
compact event-specific `event-detail-space` utility rather than the larger
showcase-oriented `section-space` utility. Internal fact, menu, price,
registration and dessert gaps were reduced while preserving alternating
section backgrounds and readable vertical separation.

### Deleted

None.

## Technical Implementation

`src/data/events.ts` is the structured source for ACBB events. The model
contains stable IDs, slugs, titles, ISO dates, optional start and end times,
locations, descriptions, optional posters and hero images, menu, prices,
registration deadlines and URLs, payment information, distances, schedules,
regulations, GPX routes, sponsors, results, reports, galleries and public
Facebook links.

The Souper 2027 record sets `poster: null`. No fake or placeholder poster is
rendered. Adding a real poster later requires only an asset and a data update.

`EventCard.astro` renders concise event previews for both the global Events
page and Homepage. The dedicated Souper page consumes the same event record
for date, time, location, menu, prices, deadline, URL, payment note and dessert
participation. Event facts are not repeated in dedicated-page markup.

The dedicated external registration action opens Google Forms in a new tab and
includes a descriptive French accessible label. The page does not collect
personal data or duplicate registration fields.

The primary registration action also appears directly below the event date,
time and location in the Hero, as well as near the registration deadline.
Both actions use the same structured registration URL, primary-button style,
external-link behavior and French accessible label.

Standalone formatted event dates capitalize the weekday initial; date
references in sentence copy retain normal French sentence casing.

The same event URL remains suitable for pre-event and future post-event
updates. Optional future fields are not rendered for the Souper when absent.

## Validation

- `npm run build` completed successfully and generated `/evenements/` and
  `/evenements/souper-acbb-2027/`.
- Both Events routes returned HTTP 200 in local preview after the compact
  dedicated-page spacing update.
- The dedicated page renders two registration links, both using the structured
  registration URL, opening in a new tab with `noopener noreferrer` and the
  same accessible French label.
- The top registration CTA follows the date, time and location facts and uses
  the existing primary button style without adding sticky or floating UI.
- The dedicated-page source contains no duplicated Souper date, time, location,
  menu, price, deadline or registration URL values.
- The structured record is the source for the Souper title, date, time,
  location, menu, prices, deadline, URL and payment note.
- Header and Footer Events links point to `/evenements/`.
- Manual responsive validation remains required at 375px, 390px, 768px and
  1280px.
