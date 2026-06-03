# COI Report SEO/PWA Test Assignment

Standalone static SEO/PWA article page for the test assignment:

**How to Prepare a Country of Origin Information Report for a US Asylum Case**

Positioning: attorney-facing guide for law firms, immigration attorneys, paralegals, and legal teams preparing COI reports, country conditions packets, and expert documentation for attorney review.

## Start here

Open `SUBMISSION_PACK.md` first. It explains the live URL, repository URL, included deliverables, known limitations, and final QA status.

## Stack decision

- Plain HTML/CSS/JS
- No framework
- Static PWA basics: manifest + service worker + offline page
- JSON-LD structured data
- Cookie preference UI
- Email-first CTA flow
- No analytics/tracking cookies by default

Why: the assignment asks for a standalone HTML page, high Lighthouse scores, clean semantics, and visible AI workflow. A static stack is faster, easier to audit, and safer for accessibility/performance.

## Local development

```bash
npm install
npm run serve
```

Then open:

```text
http://127.0.0.1:4173/
```

## Automated QA

Run:

```bash
npm test
```

The QA suite checks:

- repository structure;
- HTML SEO basics;
- one H1;
- required legal/YMYL copy blocks;
- structured data / JSON-LD;
- FAQPage schema when visible FAQ exists;
- privacy/cookie UI markup;
- lead popup privacy wording;
- accessibility smoke checks.

Current scripts:

```text
scripts/check-repo-structure.mjs
scripts/check-html.mjs
scripts/check-schema.mjs
scripts/check-privacy-ui.mjs
scripts/check-a11y.mjs
```

## Privacy and analytics

The page includes a cookie preference UI. Non-essential analytics and marketing cookies are not loaded by default.

A future GA4 implementation should follow `docs/analytics-event-plan.md` and must load analytics only after analytics consent.

No email addresses, free-text message content, client facts, protected-ground details, or sensitive asylum case information should be sent to analytics tools.

## Legal/YMYL boundary

This project is educational only and does not provide legal advice.

The attorney-controlled workflow is mandatory:

- counsel determines strategy, protected ground, relevance, filing choices, and final use of evidence;
- the documentation team supports research, source organization, citations, and draft materials for attorney review;
- the page must not imply guaranteed outcomes or legal representation.

See:

- `docs/editorial-policy.md`
- `docs/source-methodology.md`
- `docs/source-validation-matrix.md`

## Research and SEO deliverables

Core documents:

```text
docs/seo-research.md
docs/competitor-teardown.md
docs/pdf-source-library.md
docs/source-validation-matrix.md
docs/conversion-privacy-plan.md
docs/analytics-event-plan.md
docs/ai-prompts.md
docs/distribution-plan.md
docs/time-log.md
```

Research outputs are stored in `research_outputs/`.

## Lighthouse

Lighthouse must be run after deployment. Scores and screenshots should be added to `docs/lighthouse-notes.md`.

Do not fabricate Lighthouse screenshots or scores.

## Known production replacements

Before production use, replace:

- `test@test.com` with the real company inbox;
- placeholder internal links with specified company URLs;
- prototype editorial team with real author/reviewer details;
- test deployment URL if the final page URL changes.
