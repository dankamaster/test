# GA4 Analytics Event Plan

## Purpose

Plan measurement for the COI report SEO/PWA page without loading non-essential analytics by default.

This document defines the future GA4 event taxonomy for evaluating SEO engagement, attorney-facing conversion intent, and documentation request quality.

## Privacy principle

GA4 or any analytics script must not load before analytics consent is granted.

Default state:

- essential functionality only;
- no analytics cookies;
- no marketing cookies;
- no third-party tracking scripts.

If GA4 is implemented later, load it only after the user accepts analytics cookies in the cookie preferences UI.

## Core events

| Event name | Trigger | Purpose | Parameters |
|---|---|---|---|
| `page_view_article` | Article page load after analytics consent | Basic page measurement | `page_type`, `topic`, `audience` |
| `toc_or_nav_click` | Documentation/menu link click | Measure navigation intent | `link_text`, `link_url`, `nav_type` |
| `email_cta_click` | Any mailto CTA click | Primary conversion intent | `cta_location`, `cta_text`, `document_type` |
| `lead_popup_open` | Lead popup opens | Measure popup exposure | `trigger_type`, `scroll_depth`, `time_on_page` |
| `lead_popup_close` | Lead popup dismissed | Measure friction | `close_method`, `time_on_page` |
| `lead_form_submit_intent` | User submits mailto form | High-intent lead action | `document_needed`, `has_deadline` |
| `cookie_accept_all` | Accept all clicked | Consent measurement | `consent_choice` |
| `cookie_reject_nonessential` | Reject clicked | Consent measurement | `consent_choice` |
| `cookie_save_preferences` | Custom preferences saved | Consent measurement | `analytics`, `marketing` |
| `faq_interaction` | FAQ anchor/click if expandable later | Content usefulness | `question_text` |
| `source_section_view` | User reaches sources section | Trust/content depth | `scroll_depth` |
| `checklist_view` | User reaches checklist section | Practical value | `scroll_depth` |
| `video_placeholder_view` | User reaches video placeholder | Future multimedia interest | `scroll_depth` |

## Recommended GA4 event parameter rules

Do not send:

- names;
- client facts;
- asylum narratives;
- protected-ground details;
- country-specific sensitive context from the form;
- free-text message content;
- email addresses.

Allowed parameters:

- CTA location;
- document type selection;
- boolean deadline presence;
- consent choice;
- page type;
- broad audience label.

## Funnel definition

1. Organic or referral session lands on article.
2. User reaches source/checklist section.
3. User clicks email CTA or opens lead popup.
4. User submits mailto intent.
5. User reviews cookie preferences and optionally grants analytics consent.

## Primary KPIs

- organic sessions;
- engaged sessions;
- scroll depth to checklist;
- scroll depth to source section;
- email CTA click rate;
- lead popup open-to-submit intent rate;
- documentation request intent count;
- cookie consent acceptance rate.

## Secondary KPIs

- docs navigation clicks;
- FAQ interactions;
- distribution/referral traffic;
- returning visitors;
- source section view rate;
- checklist view rate.

## Future implementation note

Use a small wrapper such as `trackEvent(eventName, params)` in `app.js`.

Before analytics consent, the wrapper should no-op or queue only non-sensitive local events without transmission.

After analytics consent, it may call:

```js
gtag('event', eventName, params);
```

Only if GA4 has been loaded after consent.
