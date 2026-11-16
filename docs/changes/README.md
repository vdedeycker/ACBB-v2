# Change Documentation Rules

This directory contains the historical development memory of the ACBB
website.

Its primary purpose is to provide structured, targeted context for
future AI-assisted development.

Each approved repository modification must generate exactly one change
document in this directory.


## 1. Core Rule

One approved task = one change document.

This rule applies regardless of the number of files affected.

For example:

A request to create a Training Schedule page may result in:

- a new Astro page
- a new Astro component
- a new data file
- a navigation update
- a documentation update

These changes belong to a single approved task and therefore generate
a single change document.


## 2. Changes That Must Be Documented

A change document is required for every approved repository
modification, including:

- source code changes
- new pages
- page modifications
- component changes
- content structure changes
- data structure changes
- configuration changes
- dependency changes
- navigation changes
- design system changes
- architecture changes
- responsive behavior changes
- accessibility changes
- project structure changes
- instruction file changes
- modifications to files in `prompt-files/`

Minor related corrections performed during the same approved task
belong to the same change document.


## 3. Naming Convention

Use:

`NNN-short-description.md`

Examples:

- `001-project-initialization.md`
- `002-global-layout.md`
- `003-header-navigation.md`
- `004-homepage-hero.md`
- `005-training-schedule.md`

Use a zero-padded sequential number.

Do not reuse an existing number.

The description should be:

- short
- lowercase
- descriptive
- separated with hyphens


## 4. Purpose

Change documents should allow a future AI assistant to quickly
understand:

- why the change was requested
- what was implemented
- which files were affected
- how the implementation works
- which decisions were made
- why important decisions were made
- which constraints must be preserved
- how the change relates to previous work

The documentation should capture context and reasoning that cannot
easily be understood from the source code alone.


## 5. Required Template

Every change document must follow this structure:


# Change Title

## Date

YYYY-MM-DD


## Objective

Explain why the user requested this change.

Describe the user-facing or technical problem being solved.


## Changes

Describe what was implemented.

Keep this section concise but sufficiently precise for a future AI
assistant to understand the scope.


## Files Affected

Group files when useful.

Example:

### Created

- `src/pages/entrainements.astro`
- `src/components/TrainingSchedule.astro`
- `src/data/training.json`

### Modified

- `src/components/Header.astro`

### Deleted

None.


## Technical Implementation

Explain the relevant implementation approach.

Document things such as:

- component responsibilities
- data flow
- rendering approach
- responsive implementation
- JavaScript behavior