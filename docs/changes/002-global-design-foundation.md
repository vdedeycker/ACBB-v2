# Global Design Foundation

## Date

2026-11-17

## Objective

Establish reusable global visual, layout, responsive, and accessibility
foundations for the ACBB website before building its pages.

## Changes

Added ACBB color and typography tokens, responsive container and section
spacing primitives, base typography and accessible interactive states,
and a shared Astro layout. The index page is a temporary visual specimen
only; it does not contain homepage or club business content.

## Files Affected

### Created

- `src/layouts/BaseLayout.astro`
- `docs/changes/002-global-design-foundation.md`

### Modified

- `src/styles/global.css`
- `src/pages/index.astro`

### Deleted

None.

## Technical Implementation

Tailwind CSS v4 theme variables expose the documented ACBB palette and
system font stack as utilities. Global CSS provides responsive container
and section spacing, semantic base typography, visible keyboard focus,
and a reduced-motion-aware button primitive.

The primary red remains unchanged. The darker documented red is used for
small foreground text and the filled button to maintain contrast. The
shared Astro layout owns document metadata and the main landmark, without
adding header, footer, or navigation.
