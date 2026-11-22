# Change 022: Club Life and Announcements

## Date

2026-11-22


## Objective

Add a lightweight Club Life area and a reusable structured announcement
architecture. The first real announcement concerns the ACBB recruitment of
coaches for the handisport section and a throws coach for an initiation group.


## Changes

Created a `/vie-du-club/` page backed by structured announcement data.
Published one active and featured coach-recruitment announcement using the
approved poster and the confirmed recruitment phone number. Added a concise
announcement preview to the Homepage and activated the existing Footer link.

The announcement remains active until its structured record is changed.
It has no publication date or expiration date in the source data.


## Files Affected

### Created

- `src/data/announcements.ts`
- `src/components/AnnouncementCard.astro`
- `src/pages/vie-du-club.astro`
- `public/images/club-life/recrutement-entraineurs-acbb.jpg`
- `docs/changes/022-club-life-and-announcements.md`

### Modified

- `src/pages/index.astro`
- `src/components/Footer.astro`

### Deleted

None.

The temporary `incoming-assets/recherche-entraineur.jpg` source was moved,
not copied, to its permanent Club Life asset location.


## Technical Implementation

The `Announcement` interface provides a stable id and slug, French
announcement type, optional publication and expiration dates, active and
featured flags, short description, structured content sections, optional
poster, contact and external link.

`activeAnnouncements` filters public announcements at build time.
The Homepage selects an active featured item from the same source as the
Club Life page. No active featured announcement would leave no Homepage
highlight; no fake empty-state announcement is rendered.

`src/components/AnnouncementCard.astro` is presentation-only. It accepts
generic announcement data and contains no recruitment-specific content or
contact information.

The recruitment record contains:

- `active: true`
- `featured: true`
- `publicationDate: null`
- `expirationDate: null`
- the two approved recruitment sections
- the confirmed phone number `0497 19 95 44`
- the permanent poster reference

Important poster information is reproduced in accessible French HTML.
The poster is a complementary visual and is not required to understand the
recruitment requirements or action.

Future content changes require only a data update: set `active` to `false`
to remove an announcement, set `featured` to `true` or `false` to control
Homepage preview, or add a record and optional poster.


## Validation

- `npm run build` completed successfully.
- `/vie-du-club/` was generated.
- The recruitment announcement appears once on `/vie-du-club/`.
- The Homepage renders the featured recruitment preview from the same
  structured data source.
- The Footer links to `/vie-du-club/`.
- The poster uses
  `/images/club-life/recrutement-entraineurs-acbb.jpg`.
- The temporary poster is no longer present in `incoming-assets/`.
- The recruitment phone matches `0497 19 95 44` and
  `tel:+32497199544`.
- No publication or expiration date was invented.
- No additional dependency or client-side JavaScript was added.
- At 390px, 768px and 1280px, document widths remained within the
  corresponding viewport widths.
- The Club Life page and Homepage were checked without horizontal overflow
  at all three viewport widths.
- Manual visual review by the user remains required before acceptance.
