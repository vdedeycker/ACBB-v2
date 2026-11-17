# ACBB Content Architecture

## Date

2026-11-18

## Objective

Document the future ACBB V1 requirements and content architecture before
navigation, pages, components, structured data, and business content are
implemented.

## Changes

Added a consolidated V1 requirements reference covering navigation,
homepage orientation, training, people, affiliation, clothing,
Handisport, competitions, events, Club Life, announcements, partners,
contact, social media, institutional documents, asset strategy,
structured content, pending information, and Phase 2 club records.

Extended the active content-management decision with approved V1
structured-content domains, person-record fallback rules, asset locations,
and pending-content constraints.

No website implementation or business placeholder content was added.

## Files Affected

### Created

- `docs/requirements.md`
- `docs/changes/003-acbb-content-architecture.md`

### Modified

- `docs/decisions/content-management.md`

### Deleted

None.

## Technical Implementation

The implementation is documentation-only.

`docs/requirements.md` is the consolidated functional and content
architecture reference for V1. It distinguishes confirmed decisions from
pending club information and records Club records as a Phase 2 feature.

`docs/decisions/content-management.md` records the currently valid
structured-content approach: frequently changing club information should
remain separate from presentation, person records should provide reusable
identity and assignments, fallback portraits should be centralized, and
static assets should follow the public directory strategy.

No JSON, TypeScript, Astro, CSS, JavaScript, page, component, directory,
or dependency changes were made.
