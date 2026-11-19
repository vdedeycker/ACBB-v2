# Change 006: Training Page and Training Finder

## Date

2026-11-19

## Objective

Implement the real ACBB Training page, combine a birth-year orientation finder
with a complete responsive schedule view, and activate the existing Training
navigation and homepage actions.

## Changes

Created a static `/entrainements/` page, structured season category data,
structured training-session data, and a native-JavaScript birth-year finder.
The finder and complete schedule both consume the same session data.

The page includes:

- a birth-year selector and accessible result area;
- the season 2026-2027 LBFA category mapping;
- standard ACBB schedules from the supplied club information;
- a Junior orientation note without an arbitrary group choice;
- no automatic recommendation of the conditional Sunday session;
- concise domain-level DLTA context;
- a reference to the official LBFA category PDF;
- an explicit pending Handisport schedule notice.

Existing Header, Footer and Homepage Training destinations now lead to the
real Training route.

## Files Affected

### Created

- `src/pages/entrainements.astro`
- `src/components/TrainingFinder.astro`
- `src/data/training-seasons.ts`
- `src/data/training-sessions.ts`
- `public/documents/lbfa-categories-saison-2026-2027.pdf`
- `docs/changes/006-training-page-and-training-finder.md`

### Modified

- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/pages/index.astro`
- `src/styles/global.css`

### Deleted

None.

The official PDF was moved from `incoming-assets/` to
`public/documents/`. The DLTA source and LBFA screenshot remain in
`incoming-assets/` as extraction sources and are not displayed as primary
public website material.

## Technical Implementation

`training-seasons.ts` identifies the applicable LBFA season and separates
category-to-birth-year mapping from presentation. The category overlap years
2005 and 1992 are represented as possible matches across their relevant
categories rather than silently choosing one category. The Masters rule uses
the 1992 boundary and earlier birth years.

The seasonal data keeps the official LBFA category records (`lbfaLabel`,
`birthYears`, and the Masters boundary) separate from the ACBB
`publicCategories` mapping. The public mapping uses inclusive seasonal
birth-year ranges. It contains Kangourous, Benjamins, Pupilles, Minimes,
Cadets, Scolaires, Juniors, Seniors and Masters. The Seniors range is
1993–2007; Masters starts at the 1992 birth-year boundary and is displayed as
`à partir de 35 ans`. The official U16, U18, U20, U23 and Espoirs terminology
remains in the LBFA source records only and is not rendered publicly.

The shared `getPublicTrainingCategories()` helper derives the display label
from the structured public range or age rule. The Finder matches its selected
birth year against these public ranges, and the complete schedule uses the
same derived labels. This preserves the LBFA source data while ensuring every
birth year from 1993 through 2007 resolves to Seniors.

`training-sessions.ts` stores each group, discipline, category, schedule,
location, coach, standard/conditional status and optional note. The Sunday
preparation session remains `standard: false` and is excluded from finder
results.

`TrainingFinder.astro` uses an associated native `<select>`, derives matching
categories and standard sessions from the structured data, and exposes updates
through `aria-live`. Junior birth years return both Kevin and Sébastien
middle-distance alternatives and explain that final orientation requires
coach discussion.

The complete Training view uses responsive content blocks rather than a wide
table. It derives each domain and schedule from `training-sessions.ts`.
Public copy remains in French, and the page preserves the shared site gutter
and accessibility behavior.

## LBFA and DLTA Source Interpretation

The LBFA source is `Categories_saison_2026-2027.pdf`, retained for public
reference. The extracted mapping is:

- Kangourous: 2021, 2020
- Benjamins: 2019, 2018
- Pupilles: 2017, 2016
- Minimes: 2015, 2014
- Cadets U16: 2013, 2012
- Scolaires U18: 2011, 2010
- Juniors U20: 2009, 2008
- Espoirs U23: 2007, 2006, 2005
- Seniors: 2005 and 1992
- Masters: 1992 at/after the 35th birthday and earlier

The screenshot was used as an extraction aid only. The PDF remains the
traceable official reference.

The DLTA source provided concise stage terminology: “S’amuser grâce au
sport”, “Apprendre à s’entraîner”, “S’entraîner à s’entraîner”, “S’entraîner
à la compétition”, “S’entraîner à gagner” and “Vie active”. It also describes
foundational factors including health, movement fundamentals, specialisation,
development, recovery and training organisation. The group mappings preserve all official age-range overlaps:

- Youth athletics school — Kangourous, Benjamins and Pupilles:
  “S’amuser grâce au sport” and “Apprendre à s’entraîner”.
- Minimes: “Apprendre à s’entraîner” and “S’entraîner à s’entraîner”.
- Middle-distance — Cadets, Scolaires and Juniors:
  “S’entraîner à s’entraîner”, “S’entraîner à la compétition” and
  “S’entraîner à gagner”.
- Middle-distance — Juniors, Seniors and Masters:
  “S’entraîner à la compétition” and “S’entraîner à gagner”.
- Sprint, hurdles and jumps: “S’entraîner à s’entraîner”,
  “S’entraîner à la compétition” and “S’entraîner à gagner”.
- Conditional preparation/musculation for Cadets and Scolaires:
  “S’entraîner à s’entraîner” and “S’entraîner à la compétition”.

“Vie active” is presented only in the general DLTA section. No custom
pedagogical prose was invented for the training groups.

## Validation

Run the Astro build and manually verify the finder for representative youth,
Cadet, Junior, boundary, Master and out-of-range birth years. Confirm that
Junior results show both middle-distance alternatives, the Sunday conditional
session is never automatically listed, and no Handisport facts are invented.
