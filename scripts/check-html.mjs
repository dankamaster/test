import fs from 'node:fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);
const errors = [];
const warnings = [];

const title = $('title').text().trim();
const metaDescription = $('meta[name="description"]').attr('content') || '';
const h1Count = $('h1').length;
const h2Count = $('h2').length;
const bodyText = $('body').text().replace(/\s+/g, ' ').trim().toLowerCase();

if (!title) errors.push('Missing <title>.');
if (title.length > 70) warnings.push(`Title length is ${title.length}; target <= 70 if possible.`);
if (!metaDescription) errors.push('Missing meta description.');
if (metaDescription.length > 170) warnings.push(`Meta description length is ${metaDescription.length}; consider shortening.`);
if (h1Count !== 1) errors.push(`Expected exactly one H1, found ${h1Count}.`);
if (h2Count < 8) warnings.push(`Expected deep guide structure with at least 8 H2s, found ${h2Count}.`);

const requiredVisible = [
  'Country of Origin Information report',
  'country conditions evidence',
  'attorney review',
  'Educational information only',
  'AI-assisted note',
  'Cookie preferences'
];

for (const phrase of requiredVisible) {
  if (!html.includes(phrase)) errors.push(`Missing visible required phrase/block: ${phrase}`);
}

if (!bodyText.includes('country of origin information report asylum')) {
  warnings.push('Exact primary keyword "country of origin information report asylum" is absent. Add it naturally once in body/FAQ/meta where readable.');
}

const table = $('table').first();
if (table.length && !table.find('caption').length) warnings.push('First table has no caption.');
if ($('a[href^="mailto:test@test.com"]').length < 2) warnings.push('Expected multiple email-first CTAs.');

if (errors.length) {
  console.error('HTML QA failed:\n' + errors.map((e) => `- ${e}`).join('\n'));
  if (warnings.length) console.warn('Warnings:\n' + warnings.map((w) => `- ${w}`).join('\n'));
  process.exit(1);
}

if (warnings.length) console.warn('HTML QA warnings:\n' + warnings.map((w) => `- ${w}`).join('\n'));
console.log('HTML QA passed.');
