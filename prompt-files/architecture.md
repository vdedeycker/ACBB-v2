# Technical Architecture

## Core Stack

Use:

- Astro
- Tailwind CSS
- static generation by default
- minimal native client-side JavaScript
- Git / GitHub

TypeScript may be used where it improves correctness and maintainability.


## Architectural Goal

The ACBB website is primarily a static informational website.

Optimize for:

1. simplicity
2. performance
3. maintainability
4. accessibility
5. responsive behavior
6. clear separation between content and presentation


## Rendering Strategy

Prefer static rendering.

Do not introduce:

- server-side rendering
- a backend
- a database
- authentication
- a client-side application framework

unless a future requirement explicitly needs it and the user approves
the architectural change.


## JavaScript Policy

Use client-side JavaScript only when it provides necessary interactive
behavior.

Prefer:

1. HTML
2. CSS / Tailwind
3. Astro
4. native JavaScript

Do not introduce React, Vue, Svelte or another UI framework merely for
basic interface components.


## Components

Use reusable Astro components when UI elements or patterns are shared.

Examples may include:

- Header
- Footer
- Button
- Section
- CoachCard
- EventCard
- TrainingSchedule
- DocumentLink

Do not create abstractions solely for the sake of abstraction.

A component should improve reuse, readability, consistency, or
maintainability.


## Suggested Source Structure

src/
  components/
  data/
  layouts/
  pages/
  styles/

public/
  images/
  documents/


## Content Separation

Frequently updated club information should be separated from visual
components when practical.

Examples:

- coaches
- committee members
- training schedules
- competitions
- events
- clothing
- useful links
- downloadable documents

Prefer structured data files for this information.

Components should primarily define presentation and behavior.

Data files should primarily contain content.


## Performance

Keep the website lightweight.

Avoid:

- unnecessary JavaScript bundles
- heavy animation libraries
- unnecessary fonts
- oversized images
- duplicated libraries
- unnecessary client hydration

Use Astro's recommended image optimization capabilities where
appropriate.


## Accessibility

Use semantic HTML.

Ensure:

- keyboard navigation
- visible focus states
- appropriate heading hierarchy
- useful alternative text
- sufficient color contrast
- properly associated form labels
- accessible navigation
- understandable links and buttons


## SEO

Pages should support:

- meaningful page titles
- useful meta descriptions
- semantic HTML
- appropriate Open Graph metadata where relevant
- descriptive URLs
- accessible image alternative text


## Dependencies

Every new dependency must solve a concrete problem.

Before adding one, consider whether Astro, Tailwind CSS, browser APIs,
or a small amount of native JavaScript already solves the need.