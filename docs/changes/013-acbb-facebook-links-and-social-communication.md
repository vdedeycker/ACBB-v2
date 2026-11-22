# Change 013: ACBB Facebook Links and Social Communication

## Date

2026-11-22


## Objective

Integrate the confirmed public ACBB Facebook Page and private École des
jeunes Facebook group in their relevant public contexts without introducing
Facebook content embeds or tracking.


## Changes

Added the public ACBB Facebook Page link to the shared Footer and contextual
links to the private Youth School Facebook group on the Training and
Competitions pages.

The public link uses the existing project-owned Facebook icon and visible
"Facebook" text. The private group is explained as a practical
parent-and-coach communication channel and is not presented as an official
competition source.


## Files Affected

### Created

- `docs/changes/013-acbb-facebook-links-and-social-communication.md`

### Modified

- `src/components/Footer.astro`
- `src/pages/entrainements.astro`
- `src/pages/competitions.astro`

### Deleted

None.


## Technical Implementation

The Footer reuses `public/images/logo_facebook.png` as a decorative icon next
to the visible "Facebook" label. The public Page link opens with
`target="_blank"` and `rel="noopener noreferrer"` and uses the French
accessible label "Suivre l’ACBB sur Facebook".

The public destination is
`https://www.facebook.com/profile.php?id=100057181820430`.

The Training page adds a concise École des jeunes aside beside the existing
youth-training schedule content. The link opens the confirmed private group
in a new tab and explicitly describes the group as private.

The Competitions page keeps official schedule and registration guidance in
the existing practical-information aside. A separate, secondary aside explains
that ACBB-specific meeting and organization information for the École des
jeunes is communicated through the private group. It does not replace the
organizing club or Belgian Athletics as the source of official details.

The private destination is
`https://www.facebook.com/groups/ecoledesjeunesacbb`.

No Facebook/Meta SDK, embed, post, widget, Pixel, tracking, login, scraping,
or visitor-state detection was introduced. No new dependency or homepage
section was added.


## Validation

Validate with:

- `npm run build`
- Public and private URLs confirmed exactly
- Footer icon and visible label, new-tab behavior and keyboard focus
- Training contextual private-group link and private status
- Competitions practical-parent block alongside unchanged official guidance
- No Facebook/Meta JavaScript or embedded content
- No horizontal overflow at 390px, 768px and 1280px
