import fs from 'node:fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('app.js', 'utf8');
const htmlLower = html.toLowerCase();
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
  'sensitive personal identifiers',
  'confidential client details',
  'reject non-essential',
  'customize',
  'accept all',
  'essential cookies',
  'analytics cookies',
  'marketing cookies'
];

for (const phrase of requiredPhrases) {
  if (!htmlLower.includes(phrase)) errors.push(`Missing privacy phrase: ${phrase}`);
}

if (!js.includes('cookieConsent')) errors.push('app.js does not persist cookieConsent.');
if (!js.includes('leadModalClosed')) errors.push('app.js does not persist lead modal dismissal.');
if ($('input[name="updates"][checked]').length) errors.push('Marketing updates checkbox must not be pre-checked.');

if (errors.length) {
  console.error('Privacy UI QA failed:\n' + errors.map((e) => `- ${e}`).join('\n'));
  process.exit(1);
}

console.log('Privacy UI QA passed.');
