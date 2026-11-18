# ACBB Homepage

## Date

2026-11-18


## Objective

Replace the temporary visual specimen homepage with the first real ACBB
homepage. The page must provide a concise orientation to training, youth
athletics, Handisport, competitions and ACBB-organized events while preserving
the existing shared Header and Footer.

The post-review corrections increase the Header logo presence, preserve the
complete youth group photograph, normalize French usage of “handisport”, and
verify the Competition and ACBB Event image paths.


## Changes

Added a French, responsive homepage with a strong Hero and alternating
beige-and-white sections. Added permanent, domain-organized copies of the
approved photography for the homepage.

Future destinations remain intentionally non-interactive. Active
announcements, Club Life, sponsors and partners are not rendered because
authoritative content is not available.


## Files Affected

### Created

- `public/images/home/acbb-young-athlete-hero.jpg`
- `public/images/training/track-training-session.jpg`
- `public/images/training/youth-athletics-group.jpg`
- `public/images/handisport/handisport-athletes.jpg`
- `public/images/competitions/competition-start.jpg`
- `public/images/events/acbb-event-athletes.webp`
- `docs/changes/005-acbb-homepage.md`

### Modified

- `src/pages/index.astro`
- `src/styles/global.css`
- `src/components/Header.astro`
- `prompt-files/content.md`

### Deleted

None.

The source photographs were moved from `incoming-assets/` into their permanent
domain directories.


## Technical Implementation

The homepage is a static Astro page built with semantic sections and the
existing `BaseLayout`, `Header`, `Footer`, Tailwind theme and global primitives.
It uses no new component, dependency or client-side JavaScript.

The section architecture is:

1. Hero using the young ACBB athlete competing.
2. Training and youth athletics, combining training and club community
   photography.
3. Major Handisport image-and-text section.
4. Concise competition showcase.
5. ACBB-organized events showcase.

The static images are organized by represented content domain:
`home/`, `training/`, `handisport/`, `competitions/` and `events/`.
Filenames are lowercase and hyphen-separated. This organization supports later
reuse by other pages without coupling asset names to their current homepage
role.

Native responsive `<img>` elements use intrinsic width and height attributes,
`aspect-*` classes and `object-cover` positioning. The Hero is prioritized;
below-the-fold photographs use lazy loading and asynchronous decoding.
No source image is manually resized or distorted. The 720-pixel-wide event
photograph remains its original resolution and is not enlarged beyond its
available width.

The training-session photograph uses a 4/3 container with an intentional
center crop on the Training section. The youth-group photograph remains in
its permanent asset location but is not rendered by the Homepage.

The ACBB Header logo is displayed at a moderately larger, proportional
80-pixel square size on mobile and desktop; the source logo file is unchanged.

At narrow mobile widths, the Header uses reduced inter-item gaps and horizontal
padding on its CTA and menu trigger so all three items fit within the shared
container. The mobile menu remains anchored to the menu trigger and uses its
fixed 18rem width rather than a viewport-width calculation. Tablet and desktop
spacing remains unchanged.

French public-facing copy uses “Handisport” at the beginning of headings or
sentences, as a standalone category or UI label, and “handisport” within
sentences. This convention is recorded in `prompt-files/content.md`.

The Competition and ACBB Event images were checked against their actual files.
They remain at the existing valid paths:
`/images/competitions/competition-start.jpg` and
`/images/events/acbb-event-athletes.webp`.

Future-page actions are visual, non-interactive labels rather than links.
This follows the Change 004 rule for destinations that are not implemented.
No fake routes or unavailable-link affordances are created.

Accessibility choices include:

- one `h1` followed by descriptive `h2` section headings;
- French alternative text for meaningful photography;
- explicit French section names;
- the existing keyboard focus system for the shared interactive shell;
- semantic lists for the training domains;
- no information communicated solely through images.

Dynamic announcements, Club Life, season partners and sponsor logos are
intentionally omitted. Their data is pending and the homepage does not render
empty placeholders for those areas.

Pending content remains limited to final training details, Handisport details,
competition calendars, event facts and future announcement or partner data.
No schedules, dates, prices, results, people or institutional claims were
invented.


## Validation

Performed validation:

- `npm run build` completed successfully.
- Desktop at 1280px, tablet at 768px, and mobile at 375px and 390px were
  checked.
- No horizontal overflow was detected at 1280px, 768px, 375px or 390px.
- The shared Header and Footer remain present and the native mobile menu
  disclosure remains usable.
- The semantic heading hierarchy is `h1` then `h2` section headings.
- Meaningful photography has French alternative text.
- The ACBB logo is larger but remains proportionate and does not overflow the
  mobile Header.
- The youth-group photograph remains in the permanent Training asset directory
  but is not displayed by the Homepage.
- Competition and ACBB Event image paths were checked against the actual files.
- French usage of “Handisport” and “handisport” was reviewed on the Homepage.
- The post-review `npm run build` completed successfully.
- The Homepage and all Homepage image URLs returned HTTP 200 in preview,
  including Competition and ACBB Event photography.
- Desktop at 1280px and mobile at 390px showed no horizontal overflow.
- The 80-pixel ACBB logo remained proportionate and fit the mobile Header.
- Header children fit within the shared mobile container at 375px and 390px.
- No horizontal overflow was detected at 375px, 390px, 768px or 1280px.
- The Training section was rechecked with the single main photograph in a
  balanced 4/3 desktop and mobile presentation.
- The standalone Training category label uses “Handisport”.
- A manual visual review by the user remains required before acceptance.
