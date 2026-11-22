# Change 009: Competitions Page and Seasonal Competition Calendar

## Date

2026-11-22

## Objective

Create the real ACBB Competitions page and publish the supplied 2026-2027
Cross and Indoor winter calendar. Preserve the flyer as complementary
reference content while using structured competition data for the public
calendar and the Homepage preview.

## Changes

Created `/competitions/` with a seasonal introduction, chronological Cross
and Indoor sections, official external-source links and a complementary flyer
reference.

Added 21 distinct competition entries: 9 Cross entries and 12 entries in the
winter Indoor section, including the separately identified 13/02/2027 Outdoor
meeting. Chronological ordering is shared between the Competitions page and
Homepage preview.

Activated the shared Header and Footer competition links and replaced the
Homepage Competition placeholder action with a link and concise structured
preview.

Preserved source emphasis only as internal competition metadata:

- 31/01/2027 — Championnats provinciaux de cross
- 09/01/2027 — Championnats provinciaux du Hainaut indoor

All competitions have `featured: false` and `clubSupport: false`. Source
styling was not converted into ACBB promotion or planned club support.

Added a concise visitor-facing practical-information rule about detailed
schedules, registrations and possible last-minute changes. The rule directs
athletes to verify the official organizer communications before each
competition.

## Files Affected

### Created

- `src/pages/competitions.astro`
- `src/components/CompetitionCard.astro`
- `src/data/competitions.ts`
- `public/images/competitions/calendrier-hivernal-2026-2027.jpg`
- `docs/changes/009-competitions-page-and-seasonal-calendar.md`

### Modified

- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/pages/index.astro`
- `src/styles/global.css`

### Deleted

None.

The supplied `incoming-assets/calendrier-cross.jpg` was moved to
`public/images/competitions/calendrier-hivernal-2026-2027.jpg`.

## Technical Implementation

`src/data/competitions.ts` is the structured source for the winter calendar.
Each competition supports a stable ID, name, ISO date, discipline, location,
organizer, optional verified `organizerUrl`, season, source metadata, featured
status and club-support status. The model also reserves optional categories,
official and registration links, results, support notes, past-event reports,
selected results, gallery references and public Facebook posts.

No organizer URL is populated for the initial 21 records. The competition
card renders "Informations de l'organisateur" only when `organizerUrl` is
provided, avoiding links inferred from organizer codes or unsupported URL
construction.

No future post-event content was fabricated. No categories, registrations,
deadlines, participation, coaches or club support were invented.

`CompetitionCard.astro` renders a responsive date/name/details entry. Featured
and support states are representable in structured data and use text labels;
color is not the sole communication mechanism.

The page groups Cross entries separately and presents Indoor plus the
distinct Outdoor 13/02/2027 meeting within the winter Indoor/Outdoor section.
Normal entries use border-separated blocks rather than a desktop table.

Official external resources are linked directly:

- Belgian Athletics calendar
- Athlétisme.app
- Challenge des jeunes Facebook page

The winter flyer remains complementary and is also available as a
full-resolution reference link. It is not the only public source for the
calendar.

The Homepage consumes `sortedCompetitions` for a concise preview of upcoming
entries. The preview requires no separate competition facts in Homepage
markup.

## Validated Source Data

### Cross — 9 competitions

- 08/11/2026 — Cross de Dour Sports — Dour — DS
- 15/11/2026 — Grand Prix Bruno Marchetti — La Louvière — ACLO
- 21/11/2026 — Cross national de la Rusta — Stade de la Rusta — USTA
- 29/11/2026 — Cross de l'OSGA — Parc de Baudour, 7331 Baudour — OSGA
- 12/12/2026 — 23e Cross de l'Amitié — Stade Jonet, Obourg — GOSP
- 10/01/2027 — Cross du MOHA — Stade Haulet, Obourg — MOHA
- 16/01/2027 — Cross de Lessines — Site du Caillou Hubert, Lessines — ACLE
- 31/01/2027 — Championnats provinciaux de cross — Stade du Taillis Pré — UAC
- 07/02/2027 — Cross FLEU — Fleurus — FLEU

### Indoor/Outdoor winter entries — 12 competitions

- 05/12/2026 — Meeting des jeunes — Dour — DS — Indoor
- 05/12/2026 — Indoor BPM et TC — Dour — DS — Indoor
- 13/12/2026 — Compétition indoor — Stade Haulet, Obourg — MOHA — Indoor
- 09/01/2027 — Championnats provinciaux du Hainaut indoor — Louvain-la-Neuve — CPH — Indoor
- 09/01/2027 — Triathlon BPM et Masters — Dour — DS — Indoor
- 17/01/2027 — 7e indoor — Salle de la Rusta — USTA — Indoor
- 24/01/2027 — Compétition indoor du MOHA TC — Stade Haulet, Obourg — MOHA — Indoor
- 30/01/2027 — Fête du sprint — Dour — DS — Indoor
- 06/02/2027 — Compétition indoor du MOHA (BPM) — Stade Haulet, Obourg — MOHA — Indoor
- 13/02/2027 — Meeting de concours et de lancers longs hivernaux (Indoor) — Stade de la Rusta — USTA — Indoor
- 13/02/2027 — Meeting concours et lancers longs hivernaux (Outdoor) — Stade de la Rusta — USTA — Outdoor
- 07/03/2027 — Compétition indoor du MOHA BPM + Cadets, Scolaires, Seniors (hors U23) et Masters — Stade Haulet, Obourg — MOHA — Indoor

## Validation

- `npm run build` completed successfully and generated `/competitions/`.
- The structured data contains 21 dated competition records: 9 Cross and 12
  winter Indoor/Outdoor entries.
- Both 13/02/2027 entries remain separate, one Indoor and one Outdoor.
- Chronological ordering is generated from the shared ISO date values.
- No `featured: true` or `clubSupport: true` value exists in the competition
  source.
- The Belgian Athletics, Athlétisme.app and Challenge des jeunes links are
  present on `/competitions/`.
- The Header and Footer competition links point to `/competitions/`.
- `/competitions/` and the permanent flyer asset return HTTP 200 in local
  preview.
- The practical schedule and registration notice is present on
  `/competitions/`.
- No `organizerUrl` value is populated, and no organizer action is rendered
  from organizer codes.
- The updated Astro build completed successfully.
- Manual visual review at 375px, 390px, 768px and 1280px remains required.
