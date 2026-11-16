# Development Workflow Rules

These rules define how AI-assisted development must be performed
in this repository.

They apply to source code, configuration, documentation,
project instructions, assets, and project structure.


## 1. Approval Before Editing Files

Never create, edit, delete, move, rename, or overwrite repository files
without explicit approval from the user.

Before modifying any file:

1. Analyze the user's request.
2. Inspect the relevant existing files and project documentation.
3. Explain briefly what you intend to change.
4. List the files that will be:
   - created
   - modified
   - deleted
   - moved or renamed
5. Explain the purpose of these changes.
6. Wait for explicit user approval.

Do not interpret a discussion, recommendation, question, code example,
or architectural suggestion as authorization to modify files.

Once the user approves a clearly defined change, all files included
in the approved scope may be modified without requesting approval
again for each individual file.


## 2. Ask Before Assuming

If a request is ambiguous, incomplete, or could reasonably be
implemented in significantly different ways, do not make an arbitrary
decision.

Ask concise clarification questions before proposing the implementation.

Clarification is especially required when uncertainty affects:

- architecture
- dependencies
- project structure
- data structure
- component responsibilities
- navigation
- responsive behavior
- accessibility
- visual design
- content organization
- user experience

Prefer one or two precise questions over making assumptions.

Do not ask questions when the existing project documentation already
provides a clear answer.


## 3. Read Existing Project Context

Before proposing a change, identify the part of the project affected
by the request.

Read the relevant documentation before making technical decisions.

Relevant context may include:

- `README.md`
- `prompt-files/rules.md`
- `prompt-files/design.md`
- `prompt-files/architecture.md`
- `prompt-files/content.md`
- relevant files in `docs/decisions/`
- relevant files in `docs/changes/`
- the current source code

Do not automatically read every historical change document.

Read only the documents relevant to the feature or technical area
being modified.

When modifying an existing feature, inspect its implementation and
relevant change history before proposing a solution.


## 4. Respect Existing Decisions

Existing documented architecture, design, accessibility, responsive,
and content-management decisions must be respected.

Do not silently override an existing decision.

If the user's request conflicts with a documented decision:

1. identify the conflict
2. explain it briefly
3. explain the consequences of changing the decision
4. ask the user how to proceed

If the user approves the new direction, update the relevant
documentation as part of the approved change.


## 5. Official Documentation

Follow the current official documentation and recommended practices for:

- Astro
- Tailwind CSS

Official references:

- https://docs.astro.build/
- https://tailwindcss.com/docs

Do not rely on:

- deprecated APIs
- legacy configuration patterns
- outdated tutorials
- unsupported workarounds

when an officially supported solution exists.

Before introducing a configuration, API, integration, or pattern,
ensure that it is compatible with the versions installed in the project.

Prefer the simplest officially supported implementation.


## 6. Dependency Management

Do not introduce a new:

- framework
- package
- library
- Astro integration
- JavaScript dependency
- third-party service

without explaining why it is necessary and obtaining explicit approval.

Prefer solutions in this order:

1. Astro native capabilities
2. semantic HTML
3. CSS / Tailwind CSS
4. native browser capabilities
5. minimal native JavaScript
6. external dependencies only when justified

Do not introduce React, Vue, Svelte, or another client-side UI framework
for functionality that can reasonably be implemented using Astro,
HTML, CSS, and native JavaScript.


## 7. Keep Changes Focused

Only modify files that are necessary for the approved task.

Do not perform unrelated:

- refactoring
- redesign
- file reorganization
- dependency updates
- renaming
- formatting changes

while implementing another request.

Prefer the smallest clean change that correctly satisfies the approved
requirement.

If an unrelated issue is discovered, inform the user separately rather
than silently fixing it.


## 8. Instruction Files

Files located in `prompt-files/` are part of the project.

They are project instructions, but they are not immutable.

They may be modified when explicitly requested by the user.

Changes to instruction files must always be considered repository
changes because they may affect future AI-assisted development.

Before modifying a file in `prompt-files/`:

1. Explain which instruction will change.
2. Explain how the change may affect future development.
3. List the instruction files affected.
4. Request explicit approval.

After approval:

1. update the instruction file
2. update implementation files only if they were included in the
   approved scope
3. create the corresponding change document in `docs/changes/`
4. update `docs/decisions/` when a persistent project decision changes


## 9. Validate Implementations

After implementing an approved change, validate the result when
applicable.

Check:

- Astro builds successfully
- no obvious runtime errors were introduced
- responsive behavior remains valid
- accessibility is not degraded
- existing functionality remains operational
- no unnecessary JavaScript was introduced
- no unnecessary dependency was introduced
- the implementation respects the documented architecture and design

Implementation errors directly caused by the approved change may be
fixed as part of that change.

Do not use validation as permission to expand the approved scope.


## 10. Change Documentation

Every approved repository modification must generate exactly one
change document in:

`docs/changes/`

The change document is part of the implementation.

The approved task is not considered complete until the change document
has been created.

Follow all rules defined in:

`docs/changes/README.md`

One approved task corresponds to one change document, regardless of
how many project files were modified.

Do not generate one change document per modified source file.


## 11. Current Decisions

`docs/changes/` records what happened historically.

`docs/decisions/` records important decisions that are currently valid.

If an approved change introduces, replaces, or invalidates a persistent
decision concerning:

- architecture
- responsive behavior
- accessibility
- content management
- design
- dependencies
- project structure

update the relevant document in `docs/decisions/` as part of the same
approved task.

If necessary, propose the creation of a new decision document.


## 12. Response Efficiency

Keep responses concise and action-oriented.

Optimize responses for low token usage while preserving technical
correctness and project consistency.

When proposing a change, provide only:

1. A short summary of the proposed approach.
2. The files that will be created, modified, moved, or deleted.
3. Important technical or architectural decisions, only when relevant.
4. Clarification questions, only when necessary.
5. A request for approval.

Do not:

- repeat project rules already documented
- restate the user's request
- provide long explanations unless requested
- reproduce source code before approval
- explain standard Astro, Tailwind CSS, Git, or HTML concepts unless needed
- list irrelevant alternatives
- repeat information available in existing project documentation

After implementation, provide only:

- a short summary of what changed
- validation result
- change documentation created
- important warnings, if any

Conciseness must never override:
- correctness
- security
- accessibility
- architectural consistency
- required clarification
- required change documentation