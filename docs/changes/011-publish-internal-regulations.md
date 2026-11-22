# Change 011: Publish the ACBB Internal Regulations

## Date

2026-11-22

## Objective

Publish the supplied official ACBB internal regulations PDF and make it
directly accessible from the shared Footer.

## Changes

Moved the supplied PDF unchanged to
`public/documents/club/reglement-ordre-interieur-acbb.pdf` and activated the
Footer link with the French label “Règlement d’ordre intérieur”.

The official PDF remains the source of truth. Its contents were not
transcribed or summarized, and no custom PDF viewer or Documents page was
created.

## Files Affected

### Created

- `public/documents/club/reglement-ordre-interieur-acbb.pdf` (moved from the
  incoming source)
- `docs/changes/011-publish-internal-regulations.md`

### Modified

- `src/components/Footer.astro`

### Deleted

- `incoming-assets/Reglement_ROI.pdf` (source path removed after the move)

The now-empty `incoming-assets/` directory was removed. It contained no other
assets.

## Technical Implementation

The Footer link points to the permanent PDF URL and opens it in a new tab with
`target="_blank"` and `rel="noopener noreferrer"`. Its French accessible name
is “Consulter le règlement d’ordre intérieur de l’ACBB au format PDF”.

The existing Footer layout, 44px minimum link height and global visible focus
style are preserved. The browser serves the PDF as `application/pdf` without
a forced-download disposition, leaving the browser to display it.

Astro generates the deployment copy in `dist/`; it was not copied there
manually. No PDF dependency, custom viewer, iframe, JavaScript, or backend was
introduced.

## Validation

- `npm run build` completed successfully.
- The PDF is present at the permanent public path and is served with HTTP 200
  as `application/pdf`.
- The generated Footer link targets the PDF, opens in a new tab with safe
  attributes, and exposes the descriptive French accessible name.
- The user manually confirmed the Footer link is visible, opens the correct
  PDF successfully, and the website renders correctly.
- The built PDF matches the permanent source; only one matching PDF exists in
  `public/documents/`. The source path and now-empty incoming folder are gone.
- Browser checks at 390px, 768px and 1280px found no horizontal overflow.
  Footer columns display as one, two and three columns respectively.
- The link retains its 44px touch height and a visible 3px keyboard-focus
  outline.
- No custom PDF viewer, download attribute or PDF dependency was added.
