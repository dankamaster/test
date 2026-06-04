# COI Report SEO/PWA Test Assignment

Standalone static SEO/PWA article page for the test assignment:

**How to Prepare a Country of Origin Information Report for a US Asylum Case**

Positioning: attorney-facing guide for law firms, immigration attorneys, paralegals, and legal teams preparing COI reports, country conditions packets, and expert documentation for attorney review.

## Final URL

https://ai-cpc.ru/test/

The canonical URL, sitemap URL, and final URL are aligned to this folder route for the test assignment.

## Start here

1. `index.html` — final article page.
2. `docs-index.html` — reviewer documentation center.
3. `SUBMISSION_PACK.md` — reviewer summary, live URL, key links, Lighthouse screenshots, and known production limitations.
4. `docs/seo-research.md` — SEO research document.
5. `docs/competitor-teardown.md` — competitor/SERP teardown.
6. `docs/distribution-plan.md` — LinkedIn/Facebook/Instagram distribution plan with two example posts, paid layer, metrics, and outreach email.
7. `docs/ai-prompts.md` — key AI prompts and workflow prompts.
8. `docs/time-log.md` — time log by assignment part.
9. `docs/claim-source-map.md` — claim-to-source traceability layer.
10. `research.html`, `model.html`, `model-architecture.html`, `codex-review.html` — internal reviewer evidence pages.

## Stack

- Plain HTML/CSS/JS
- No framework
- PWA basics: manifest + service worker + offline page + install prompt handling
- JSON-LD structured data
- Open Graph and Twitter Card metadata
- Cookie preference UI
- Privacy-safe legal documentation request form
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

## Lighthouse screenshots

Lighthouse/PageSpeed screenshots are committed in the repository and referenced from `SUBMISSION_PACK.md`:

- `docs/docs/assets/lighthouse/mobile.JPG`
- `docs/docs/assets/lighthouse/pk.JPG`

Assignment-critical scores satisfy the brief requirement of Performance >= 90 and Accessibility >= 90.

## Internal review artifacts

The following files/pages are evidence artifacts for test-assignment review, not intended as production SEO landing pages:

- `docs-index.html`
- `research.html`
- `model.html`
- `model-architecture.html`
- `codex-review.html`
- `serp-analysis.html`
- `pdf-analysis.html`
- `keyword-analysis.html`
- `legal-framework.html`
- `/docs/`
- `/research_outputs/`
- `/patches/`

`robots.txt` blocks these review artifacts when deployed under `/test/`.

## Distribution plan

The final first-wave distribution plan focuses on:

- LinkedIn — primary professional B2B/legal channel;
- Facebook — community/resource distribution channel;
- Instagram — visual repurposing channel.

The plan includes platform-specific post mechanics, UTM links, hashtags, first comments, two example posts, LinkedIn Ads and Meta Ads test layers, 30-day metrics, 90-day metrics, and an outreach email.

## Legal/YMYL boundary

This project does not provide legal advice, does not create an attorney-client relationship, and does not claim to determine asylum eligibility or case strategy.

Attorney-controlled workflow is mandatory:

- counsel determines case strategy;
- counsel determines relevance and final use of evidence;
- the documentation team supports source organization and draft materials for attorney review.

The legal documentation request form does not include a marketing opt-in and warns users not to send privileged, confidential, identifying, or case-specific facts by unsecured email.

## Known production limitations

Before real production publication, replace prototype placeholders with:

- real brand/contact details;
- named author;
- qualified legal reviewer, if available;
- last-reviewed date;
- production privacy policy URL;
- monitored production inbox instead of `test@test.com`;
- production-ready icons and stronger PWA validation if required.
