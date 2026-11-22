# Change 015: Transparent ACBB Header Logo

## Date

2026-11-22


## Objective

Replace the previous ACBB Header logo with the supplied transparent PNG so
the club identity integrates naturally into the shared Header and has
appropriate visual presence.


## Changes

Moved the supplied logo to the permanent branding asset location, updated
the Header to use it, and removed the previous JPEG and the empty temporary
asset directory.

The logo displays at 80px wide on mobile and 96px from the `sm` breakpoint,
while preserving its natural aspect ratio. Existing Header navigation,
Facebook action, Join ACBB CTA, menu behavior, and accessible club identity
remain unchanged.


## Files Affected

### Created

- `docs/changes/015-transparent-acbb-header-logo.md`

### Modified

- `src/components/Header.astro`

### Moved

- `incoming-assets/logo_acbb.jpg - Modifié.png` to
  `public/images/branding/logo-acbb.png`

### Deleted

- `public/images/logo_acbb.jpg`
- `incoming-assets/` (empty directory)


## Technical Implementation

The PNG source is 1037×803 pixels. Its explicit intrinsic dimensions and
responsive width classes (`w-20 sm:w-24`) with automatic height preserve
the source aspect ratio and reserve a stable image box. At 96px wide, the
logo is approximately 74px high, and the Header remains 99px high at
1280px; the Header does not grow unnecessarily.

The old logo was referenced by the Header and mentioned in the historical
Change 004 record. The Header now points to the new asset; the historical
record remains unchanged.


## Validation

- `npm run build` completed successfully.
- Browser checks at 375px, 390px, 768px, and 1280px found no horizontal
  overflow. The logo loaded at 80×62px on mobile and 96×74px from `sm`.
- The Facebook action remained 44×44px; the Join ACBB label fit; and the
  44px-high Menu opened and closed at 375px. Keyboard focus remained visible.
- At 1280px, primary navigation, Facebook utility action, and Join ACBB CTA
  remained in the intended order. The transparent logo rendered against the
  Header background without a white rectangle.
