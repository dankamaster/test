# Final URL and Indexing Strategy

## Final test URL

The assignment is deployed under:

https://ai-cpc.ru/test/

This is a dedicated test folder on the candidate's domain.

## Canonical strategy

For this test assignment, the canonical URL should match the deployed folder URL:

https://ai-cpc.ru/test/

A future production release may use a cleaner article route such as `/coi-report-us-asylum-case/`, but that route is not assumed for this test deployment.

## Public vs internal pages

### Public test page

- `index.html`
- final URL: `https://ai-cpc.ru/test/`

### Internal submission/review artifacts

These pages are intended for reviewer inspection and assignment evidence, not public SEO indexing:

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

## Robots strategy

`robots.txt` should allow the public test page and disallow internal review artifacts.

`/docs/` and `/research_outputs/` should also be treated as internal review artifacts if deployed.

## Sitemap strategy

`sitemap.xml` should include only the public test URL:

https://ai-cpc.ru/test/
