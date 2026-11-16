# Project Documentation

This directory contains the long-term technical memory of the ACBB
website.

It exists primarily to provide useful context for future AI-assisted
development.


## decisions/

Contains important decisions that are currently valid.

Read relevant decision documents before making architectural,
responsive, accessibility, or content-structure changes.


## changes/

Contains individual records of significant implementations.

Use these records to understand:

- why something was implemented
- what constraints existed
- what files were affected
- which technical decisions were made


## Important distinction

`decisions/` describes the current rules and decisions.

`changes/` describes historical development events.

Git contains the exact source-code history.


## AI Usage

Do not automatically read every historical change file.

Identify the feature being worked on and read the relevant change
documents.

When a new implementation contradicts an existing decision, raise the
conflict with the user before editing the project.