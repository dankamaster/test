import fs from 'node:fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('app.js', 'utf8');
const $ = cheerio.load(html);
const errors = [];

const requiredSelectors = [
  '#lead-modal',
  '#cookieBanner',
  '#cookieModal',
  '#saveCookiePrefs',
  '[data-cookie="accept"]',
  '[data-cookie="reject"]',
  '[data-cookie="customize"]'
];

for (const selector of requiredSelectors) {
  if (!$(selector).length) errors.push(`Missing privacy UI element: ${selector}`);
}

const requiredPhrases = [
  'Do not include sensitive personal identifiers',
  'confidential client details',
  'Reject non-essential',
  'Customize',
  'Accept all',
  'Essential cookies',
  'Analytics cookies',
  'Marketing cookies'
];

for (const phrase of requiredPhrases) {
  if (!html.includes(phrase)) errors.push(`Missing privacy phrase: ${phrase}`);
}

if (!js.includes('cookieConsent')) errors.push('app.js does not persist cookieConsent.');
if (!js.includes('leadModalClosed')) errors.push('app.js does not persist lead modal dismissal.');
if ($('input[name="updates"][checked]').length) errors.push('Marketing updates checkbox must not be pre-checked.');

if (errors.length) {
  console.error('Privacy UI QA failed:\n' + errors.map((e) => `- ${e}`).join('\n'));
  process.exit(1);
}

console.log('Privacy UI QA passed.');
