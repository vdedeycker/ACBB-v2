# Content Management Decisions

## Status

Active


## Principle

Separate frequently updated club information from presentation whenever
this improves maintainability.


## Structured Content Candidates

Structured data should be considered for:

- training schedules
- coaches
- committee members
- competitions
- ACBB events
- clothing
- documents
- announcements
- partners
- Club Life

The V1 content architecture must also support distinct season and
event-specific partner relationships. A partner identity and logo should
be reusable across both relationship types.


## Structured People

Coaches and committee members must use separate structured records from
presentation components.

Coach records may assign a person to multiple groups or disciplines.
Committee records must support a role or function and optional public
contact information.

Missing person portraits must use a project-owned neutral fallback image.
Individual records must not duplicate fallback paths.


## Assets

`public/images/` is the location for website-displayable static assets.
`public/documents/` is the location for downloadable or reference
documents.

Do not create empty directories solely for anticipated asset domains.
Do not maintain generated `dist/` assets manually.

Future project-managed asset names should be lowercase, descriptive,
and hyphen-separated.

## Public People and Contact Information

People use one shared identity across committee, coaching and future
organizational roles.

Governance roles, operational responsibilities, commission memberships and
coaching assignments remain distinct fields. Public committee emails may be
displayed. Public phone numbers are permitted only for the Président,
Vice-président and Secrétaire. Coach phone numbers must not be inferred from
committee roles or other public identities.


## Pending Content

Missing club facts must remain pending until confirmed. Do not hardcode
placeholder business facts, schedules, prices, stock, people, partners,
procedures, or institutional details as if they were authoritative.


## Presentation

Astro components consume structured content and determine how it is
displayed.

Avoid embedding duplicate content directly in multiple components.


## Editing

Content changes should not require redesigning components.


## Future Evolution

A CMS is not currently required.

If maintaining structured files becomes difficult for club
administrators, a CMS may be evaluated later.

Do not introduce one preemptively.