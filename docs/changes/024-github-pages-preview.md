# Change 024: GitHub Pages Preview Deployment

## Date

2026-11-27


## Objective

Make the static ACBB website publicly testable at the repository-based GitHub
Pages preview URL without changing the existing production website or domain.


## Changes

Added a GitHub Actions deployment for the public repository
`vdedeycker/ACBB-v2` on `main`. Pushes to `main` deploy automatically, and
`workflow_dispatch` supports manual runs.

The preview URL is:

`https://vdedeycker.github.io/ACBB-v2/`

No custom domain, CNAME, DNS, Combell, or production website configuration
was added or changed.


## Files Affected

### Created

- `.github/workflows/deploy.yml`
- `src/utils/sitePath.ts`
- `docs/changes/024-github-pages-preview.md`

### Modified

- `astro.config.mjs`
- `src/components/AnnouncementCard.astro`
- `src/components/CompetitionCard.astro`
- `src/components/EventCard.astro`
- `src/components/Footer.astro`
- `src/components/Header.astro`
- `src/components/PersonCard.astro`
- `src/pages/competitions.astro`
- `src/pages/entrainements.astro`
- `src/pages/index.astro`
- `src/pages/le-club.astro`
- `src/pages/rejoindre.astro`

### Deleted

None.


## Technical Implementation

`astro.config.mjs` is the authoritative deployment configuration. It sets
`site` to `https://vdedeycker.github.io` and selects `/ACBB-v2` only when
`ASTRO_DEPLOY_TARGET=github-pages`; otherwise `base` is `/`. The workflow sets
that variable for its build job, leaving ordinary local development at the
root URL.

The workflow uses `actions/checkout@v7`, Astro's official
`withastro/action@v6`, and `actions/deploy-pages@v5`. The Astro action detects
the existing `package-lock.json` and uses npm. Build permissions are limited
to repository read access; the deploy job receives `pages: write` and
`id-token: write`. No secrets or third-party deployment service are required.

`sitePath.ts` prefixes root-relative local URLs with Astro's
`import.meta.env.BASE_URL`. Components and pages use this helper for local
routes, images, portraits, and documents. Structured content retains its
existing root-relative paths, and no component or page contains the
`/ACBB-v2` literal. External URLs, protocol URLs, and fragments are passed
through unchanged.

The existing `public/` assets are copied by Astro into the generated build;
no files are copied manually into `dist/`. `dist/` remains ignored by
`.gitignore`. No package manifest or lockfile changes were needed.

Future custom-domain migration remains deferred for a separately approved
production change. It will require changing the centralized `site` and `base`
configuration (and its deployment-target selection as needed), without
rewriting component or structured-content paths.

The repository's GitHub Pages source setting must be GitHub Actions for the
workflow to deploy. This repository setting is not changed by these files.


## Validation

- `npm run build` succeeded with the normal local configuration and generated
  all nine routes.
- The production build with `ASTRO_DEPLOY_TARGET=github-pages` succeeded and
  generated all nine routes.
- A Node.js standard-library check confirmed all nine expected route files.
- All 43 local generated `href`/`src` URLs were prefixed with `/ACBB-v2` and
  resolved to generated files; this included 23 image/asset URLs and nine
  document URLs.
- Affiliation documents, the LBFA category PDF, internal regulations,
  ethical charter, and General Assembly minutes resolved in the build output.
- Facebook and Google Forms URLs remained unchanged.
- No root-relative internal URL bypassed the GitHub Pages base.
- `.gitignore` already excludes `dist/`; the generated output remains
  untracked.
- No custom-domain, DNS, CNAME, or production setting was modified.
