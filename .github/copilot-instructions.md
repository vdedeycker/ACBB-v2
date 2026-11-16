# ACBB Website - Copilot Instructions

Before working on this repository, read and follow:

- `prompt-files/rules.md`
- `prompt-files/architecture.md`
- `prompt-files/design.md`
- `prompt-files/content.md`

Also consult the relevant current decisions in:

- `docs/decisions/`

When modifying an existing feature, consult the relevant historical
documentation in:

- `docs/changes/`

## Mandatory workflow

Always follow the approval workflow defined in:

`prompt-files/rules.md`

Do not create, modify, delete, move, or rename project files
before explicit user approval.

Before making changes:

1. Analyze the request.
2. Read the relevant project documentation.
3. Inspect the relevant existing implementation.
4. Ask questions if meaningful ambiguity exists.
5. Propose an implementation plan.
6. List all files that will be created, modified, deleted, moved,
   or renamed.
7. Wait for explicit user approval.

After approval:

1. Implement only the approved scope.
2. Validate the implementation.
3. Create exactly one corresponding change document in
   `docs/changes/`.
4. Update `docs/decisions/` when a persistent project decision changes.

One approved repository change equals one change document.

Never silently override existing project decisions.

Keep responses concise and action-oriented according to the Response Efficiency rules in `prompt-files/rules.md`.