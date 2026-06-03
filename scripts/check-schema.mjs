import fs from 'node:fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);
const errors = [];
const warnings = [];

const blocks = $('script[type="application/ld+json"]')
  .map((_, el) => $(el).text())
  .get();

if (!blocks.length) errors.push('Missing JSON-LD structured data.');

let graph = [];
for (const block of blocks) {
  try {
    const parsed = JSON.parse(block);
    graph = graph.concat(parsed['@graph'] || [parsed]);
  } catch (error) {
    errors.push(`Invalid JSON-LD: ${error.message}`);
  }
}

const types = new Set(graph.map((node) => node['@type']));
for (const required of ['Organization', 'Person', 'WebPage', 'Article', 'BreadcrumbList']) {
  if (!types.has(required)) errors.push(`Missing schema type: ${required}`);
}

if ($('#faq').length && !types.has('FAQPage')) {
  errors.push('Visible FAQ exists but FAQPage schema is missing.');
}

if ($('.video-placeholder').length && types.has('VideoObject')) {
  errors.push('VideoObject schema must not be used while video is only a placeholder.');
}

const article = graph.find((node) => node['@type'] === 'Article');
if (article) {
  if (!article.headline) errors.push('Article schema missing headline.');
  if (!article.author) errors.push('Article schema missing author.');
  if (!article.publisher) errors.push('Article schema missing publisher.');
  if (!article.mainEntityOfPage) errors.push('Article schema missing mainEntityOfPage.');
  if (!article.dateModified) warnings.push('Article schema missing dateModified.');
  if (!article.description) warnings.push('Article schema missing description.');
}

if (errors.length) {
  console.error('Schema QA failed:\n' + errors.map((e) => `- ${e}`).join('\n'));
  if (warnings.length) console.warn('Warnings:\n' + warnings.map((w) => `- ${w}`).join('\n'));
  process.exit(1);
}

if (warnings.length) console.warn('Schema QA warnings:\n' + warnings.map((w) => `- ${w}`).join('\n'));
console.log('Schema QA passed.');
