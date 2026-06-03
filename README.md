# COI Report SEO/PWA Test Assignment

Standalone static SEO/PWA article page for the test assignment:

**How to Prepare a Country of Origin Information Report for a US Asylum Case**

Positioning: attorney-facing guide for law firms, immigration attorneys, paralegals, and legal teams preparing COI reports, country conditions packets, and expert documentation for attorney review.

## Final URL

https://ai-cpc.ru/test/

The canonical URL, sitemap URL, and final URL are aligned to this folder route for the test assignment.

## Start here

1. `index.html` — final article page.
2. `SUBMISSION_PACK.md` — reviewer summary and known production limitations.
3. `docs/claim-source-map.md` — claim-to-source traceability layer.
4. `docs/final-url-indexing-strategy.md` — URL and indexing strategy.
5. `research.html`, `model.html`, `codex-review.html` — internal reviewer evidence pages.

## Stack

- Plain HTML/CSS/JS
- No framework
- PWA basics: manifest + service worker + offline page
- JSON-LD structured data
- Cookie preference UI
- No analytics/tracking cookies by default
- GitHub Actions QA workflow

Why: the assignment asks for a standalone HTML page, high Lighthouse scores, clean semantics, and visible AI workflow. A static stack is faster, easier to audit, and safer for accessibility/performance.

## QA

Run locally:

```bash
npm install
npm test
```

The automated QA suite checks:

- required repository files;
- HTML SEO basics;
- single H1;
- schema validity;
- visible FAQ and FAQPage schema alignment;
- internal file links;
- privacy UI markup;
- accessibility smoke checks.

GitHub Actions runs the same QA suite on push and pull request.

## Internal review artifacts

The following files/pages are evidence artifacts for test-assignment review, not intended as production SEO landing pages:

- `research.html`
- `model.html`
- `codex-review.html`
- `docs-index.html`
- `serp-analysis.html`
- `pdf-analysis.html`
- `keyword-analysis.html`
- `legal-framework.html`
- `/docs/`
- `/research_outputs/`
- `/patches/`

`robots.txt` blocks these review artifacts when deployed under `/test/`.

## Legal/YMYL boundary

This project does not provide legal advice, does not create an attorney-client relationship, and does not claim to determine asylum eligibility or case strategy.

Attorney-controlled workflow is mandatory:

- counsel determines case strategy;
- counsel determines relevance and final use of evidence;
- the documentation team supports source organization and draft materials for attorney review.

## Known production limitations

Before real production publication, replace prototype placeholders with:

- real brand/contact details;
- named author;
- qualified legal reviewer, if available;
- last-reviewed date;
- production privacy policy URL;
- deployment Lighthouse screenshots;
- production-ready icons and stronger PWA validation.
