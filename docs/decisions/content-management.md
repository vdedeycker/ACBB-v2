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
- useful links
- documents


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