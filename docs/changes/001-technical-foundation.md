# Technical Foundation

## Date

2026-11-16

## Objective

Initialize the minimum technical foundation needed to develop, run, and
build the ACBB website with Astro and Tailwind CSS.

## Changes

Added an Astro static-site project setup with Tailwind CSS through its
Vite plugin, npm development/build/preview scripts, a minimal root page,
and the required TypeScript and generated-file configuration.

## Files Affected

### Created

- `package.json`
- `package-lock.json`
- `astro.config.mjs`
- `tsconfig.json`
- `.gitignore`
- `src/pages/index.astro`
- `src/styles/global.css`
- `docs/changes/001-technical-foundation.md`

### Modified

None.

### Deleted

None.

## Technical Implementation

Astro uses static generation by default. Tailwind CSS is integrated with
the current `@tailwindcss/vite` plugin, and its stylesheet is imported
by the empty root page. No UI components, site content, or additional
integrations were introduced.
