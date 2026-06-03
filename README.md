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