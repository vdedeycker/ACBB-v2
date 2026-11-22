# Change 012: Publish the LBFA Ethical Charter and General Assembly Minutes

## Date

2026-11-22

## Objective

Publish the supplied official LBFA ethical charter and ACBB General Assembly
minutes from 27 May 2026, with direct access from the shared Footer.

## Changes

Moved both official PDFs unchanged to their permanent public paths and added
direct links in the Footer’s Information area. The existing Internal
Regulations link remains unchanged. The non-link “Documents du club”
placeholder was removed; no generic Documents page was created.

## Files Affected

### Created

- `public/documents/ethics/charte-ethique-lbfa.pdf` (moved from
  `incoming-assets/Charte_ethique_LBFA.pdf`)
- `public/documents/governance/pv-assemblee-generale-2026-05-27.pdf` (moved
  from `incoming-assets/PV AG du 27 mai 2026 (1).pdf`)
- `docs/changes/012-publish-ethical-charter-and-general-assembly-minutes.md`

### Modified

- `src/components/Footer.astro`

### Deleted

- `incoming-assets/Charte_ethique_LBFA.pdf` (source removed by move)
- `incoming-assets/PV AG du 27 mai 2026 (1).pdf` (source removed by move)
- `incoming-assets/` (removed after it became empty)

## Technical Implementation

The Footer links use the French labels “Charte éthique LBFA” and “PV de
l’Assemblée générale 2026”. Each links directly to its PDF, opens in a new
tab with `target="_blank"` and `rel="noopener noreferrer"`, and provides
descriptive French accessible text. The existing semantic links, minimum
touch height, and global visible focus style are preserved.

The minutes use a date-specific filename so future annual minutes can be
published as separate historical PDFs. The official PDFs remain the source
of truth: their content was not extracted, parsed, summarized, or transcribed.
No archive or generic Documents page, custom viewer, forced download,
dependency, or manually copied `dist/` file was added. Astro serves its
generated static copies from `public/documents/`.

## Validation

- The Astro production build completed successfully.
- Each moved file was checked as a non-empty PDF by its file signature and
  end marker only; no document content was inspected.
- The user manually confirmed that both PDF links open correctly, the
  Internal Regulations link still works, and the Footer presentation is
  correct.
