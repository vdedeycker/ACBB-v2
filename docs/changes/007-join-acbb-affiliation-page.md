# Change 007: Join ACBB / Affiliation Page

## Date

2026-11-22

## Objective

Create the public `/rejoindre` page for first affiliation, re-affiliation,
suspension and resignation. Activate existing Join ACBB links in the Header,
Footer and Homepage.

## Changes

Added a French, static Astro page with:

- an accessible five-step first-affiliation journey;
- a link to the existing Training page;
- a separate 2026-2027 re-affiliation section;
- structured seasonal fees and payment details;
- downloadable affiliation documents;
- restrained adult and minor resignation document links.

The first-affiliation step combines trial sessions and training orientation.
It links to the stable Training Finder anchor
`/entrainements#trouver-entrainement` and includes the supplied
trial-session poster as complementary visual support.

The 2025-2026 new-affiliation letter is not published as a current
document. After extracting its durable rules, it was removed from
`incoming-assets/`.

## Files Affected

### Created

- `src/pages/rejoindre.astro`
- `src/data/affiliation.ts`
- `public/documents/affiliation/certificat-medical.pdf`
- `public/documents/affiliation/fiche-renseignements-athlete-acbb.pdf`
- `public/documents/affiliation/lettre-reaffiliation-2026-2027.pdf`
- `public/documents/affiliation/modele-resiliation-adulte-2025.doc`
- `public/documents/affiliation/modele-resiliation-mineure-2025.doc`
- `public/images/training/acbb-affiche-seances-dessai.jpg`
- `docs/changes/007-join-acbb-affiliation-page.md`

### Modified

- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/pages/index.astro`
- `src/styles/global.css`
- `src/pages/entrainements.astro`

### Deleted

- `incoming-assets/lettre nouvelle affiliation 2025-2026.pdf`

## Source-Document Authority

The 2026-2027 re-affiliation letter is authoritative for current season,
fees, payment instructions, Twizzit/LBFA confirmation and resignation
timing.

The 2025-2026 new-affiliation letter was used only to extract durable
procedure. The website does not publish it and does not present its
seasonal values as current.

## First-Affiliation Journey

The durable procedure extracted from the 2025-2026 letter is:

1. come and try ACBB, for up to two trial sessions;
2. find the appropriate training group through `/entrainements`;
3. complete the athlete information form;
4. obtain a completed medical certificate where required;
5. submit documents to the club secretariat;
6. pay the membership fee;
7. complete or confirm LBFA affiliation through Twizzit.

The public first-affiliation journey presents these rules in five visitor
steps:

1. come and try ACBB and find the appropriate training through the existing
   Training Finder;
2. prepare the dossier;
3. transmit the dossier;
4. pay the membership fee;
5. complete affiliation.

The first step explains that up to two trial sessions are available and that
the visitor does not need prior knowledge of athletics categories. It provides
a single CTA to `/entrainements#trouver-entrainement`.

The Training Finder is identified by `id="trouver-entrainement"` for direct
navigation.

## Trial-Session Poster

The supplied portrait poster is stored unchanged at
`public/images/training/acbb-affiche-seances-dessai.jpg`.

It supplements the first affiliation step without being an authoritative
source for trial dates or schedules. The HTML text and the Training page
remain responsible for the accessible, current procedure and practical
orientation.

On desktop, the poster appears beside the first-step text. On mobile, the
text and single action remain before the poster.

The exact 2026-2027 first-affiliation fee, deadline, submission timing,
affiliation-card rule and complete Twizzit sequence remain pending.
The Monday/Wednesday submission detail from the 2025-2026 letter is not
presented as current because it was not confirmed for the current season.

## Re-Affiliation Journey

The current season is 2026-2027, from 1 November 2026 to 31 October 2027.
Payment is due before 15 October 2026 to ASBL ACBB, IBAN
`BE78 0014 7512 6486`.

Fees are represented in `src/data/affiliation.ts`:

- first athlete: 135 €;
- second athlete: 125 €;
- third athlete and following: 110 €.

The family discount applies to athletes domiciled at the same address.
The page uses the payment communication
`Affiliation 2026-2027 + nom de l'athlète`, and adds `+ DOSSARD` for a
competition-bib request.

After payment, the athlete must validate re-affiliation through the LBFA
Twizzit confirmation email.

## Document Purposes

The athlete information form collects identity, sex, birth date, address,
contact details and declarations, and also requires minor athletes and
their parents to acknowledge the internal regulations.

The medical certificate is intended to be completed by a doctor and submitted
with the affiliation documents where required. No eligibility rule or
medical requirement is inferred beyond the supplied source.

## Suspension and Resignation

A one-year suspension requires no action described in the supplied source.
Disaffiliation requires an adult or minor resignation template to be sent
to the LBFA and notice to be given to the club secretariat.

The two templates remain downloadable `.doc` files. Their contents were not
rewritten or parsed.

## Seasonal Structured Data

The current re-affiliation values are stored in
`src/data/affiliation.ts`, outside the page markup, so season, deadline,
bank details and communication formats can be updated without redesign.

Obsolete 2025-2026 prices and payment communication are not represented
by this data.

## Unresolved Requirements

The declaration/attestation on honour remains unresolved for the current
implementation. It is mentioned only by the source form and is not presented
as a confirmed new-affiliation requirement.

The exact current first-affiliation fee and submission procedure remain
pending and are not invented.

## Privacy and Scope

The page provides only static procedural information and document downloads.
It does not collect medical or personal information, accept uploads or create
backend submissions.

Clothing information was intentionally omitted; it remains deferred to a
dedicated Clothing implementation.

## Validation

Validated:

- `npm run build` completed successfully;
- `/rejoindre/index.html` is generated;
- `/entrainements#trouver-entrainement` has a stable Finder anchor;
- the trial-session poster is published as a complementary image;
- all five published affiliation document files exist;
- first-affiliation and re-affiliation source separation is preserved;
- 2026-2027 fee and payment values are sourced from the current letter;
- adult/minor resignation links target separate documents;
- Header, Footer and Homepage Join ACBB links target `/rejoindre/`;
- no personal/medical data collection or document upload was added;
- no clothing catalogue was added.
