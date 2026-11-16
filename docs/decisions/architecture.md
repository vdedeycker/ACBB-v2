# Current Architecture Decisions

## Status

Active


## Static-first architecture

ACBB is an informational website.

Static generation is the default architecture.


## UI framework

No client-side UI framework is currently required.

Astro components are the preferred component model.


## Styling

Tailwind CSS is the primary styling solution.

Avoid adding parallel styling frameworks.


## JavaScript

Client-side JavaScript is intentionally minimized.

Interactive behavior should use native browser capabilities where
reasonable.


## Content

Frequently changing club information should be separated from
presentation when practical.


## Backend

No backend or database is currently required.


## Changing these decisions

These decisions may evolve if project requirements change.

Do not change an architectural decision silently.

Explain the reason and impact and obtain user approval first.