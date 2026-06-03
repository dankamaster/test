# Manual Patch: Cookie UI + FAQ Schema

The GitHub API rejected a large direct `index.html` update, so this patch records the exact required manual fix.

## 1. Add FAQPage schema

In `index.html`, update the JSON-LD `@graph` to include `FAQPage` because the visible page has a FAQ section.

Add this node after `BreadcrumbList`:

```json
{
  "@type": "FAQPage",
  "@id": "https://ai-cpc.ru/test/coi-report-us-asylum-case/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is a COI report legal advice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A COI report should support attorney review and legal analysis; it should not replace counsel."
      }
    },
    {
      "@type": "Question",
      "name": "Who is this guide for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Law firms, immigration attorneys, paralegals, nonprofit legal teams, and documentation teams."
      }
    },
    {
      "@type": "Question",
      "name": "Can country conditions evidence guarantee an asylum outcome?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. It may support or contextualize a case, but outcomes depend on law, facts, procedure, and adjudication."
      }
    }
  ]
}
```

## 2. Add visible cookie banner and preferences modal

Insert this block after `</div>` for `#lead-modal` and before `<footer>`:

```html
<section id="cookieBanner" class="cookie-banner" aria-label="Cookie preferences" hidden>
  <div>
    <strong>Cookie preferences</strong>
    <p>We use essential cookies to make this page work. With your consent, we may use analytics or marketing cookies. This test page does not load non-essential tracking until consent is given.</p>
  </div>
  <div class="cookie-actions">
    <button class="button ghost" type="button" data-cookie="reject">Reject non-essential</button>
    <button class="button ghost" type="button" data-cookie="customize">Customize</button>
    <button class="button" type="button" data-cookie="accept">Accept all</button>
  </div>
</section>

<div id="cookieModal" class="modal" hidden>
  <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
    <button class="close" type="button" data-close-cookie aria-label="Close cookie preferences">×</button>
    <h2 id="cookie-title">Customize cookie preferences</h2>
    <p>Essential cookies are required. Analytics and marketing cookies remain off unless you choose them.</p>
    <label class="checkbox"><input type="checkbox" checked disabled> Essential cookies — always active</label>
    <label class="checkbox"><input type="checkbox" id="analyticsConsent"> Analytics cookies</label>
    <label class="checkbox"><input type="checkbox" id="marketingConsent"> Marketing cookies</label>
    <button class="button" type="button" id="saveCookiePrefs">Save preferences</button>
  </div>
</div>
```

## 3. Why this matters

The current `app.js` already expects:

- `#cookieBanner`
- `#cookieModal`
- `#saveCookiePrefs`
- `[data-cookie="accept"]`
- `[data-cookie="reject"]`
- `[data-cookie="customize"]`

Without this HTML, the cookie layer is not real and `npm run test:privacy` should fail.
