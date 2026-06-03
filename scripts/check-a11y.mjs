import fs from 'node:fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);
const errors = [];
const warnings = [];

if (!$('.skip-link').length) errors.push('Missing skip link.');
if (!$('main#main').length) errors.push('Missing main landmark.');
if ($('button[aria-label]').length === 0) warnings.push('Few aria-labels found on interactive controls.');

$('img').each((_, img) => {
  if (!$(img).attr('alt')) errors.push('Image missing alt attribute.');
});

$('.modal').each((_, modal) => {
  if ($(modal).find('[role="dialog"]').length === 0) {
    errors.push('Modal missing dialog role.');
  }
});

$('table').each((_, table) => {
  const hasCaption = $(table).find('caption').length > 0;
  if (!hasCaption) warnings.push('Table missing caption.');
});

if (errors.length) {
  console.error('Accessibility QA failed:\n' + errors.map((e) => `- ${e}`).join('\n'));
  if (warnings.length) console.warn('Warnings:\n' + warnings.map((w) => `- ${w}`).join('\n'));
  process.exit(1);
}

if (warnings.length) console.warn('Accessibility warnings:\n' + warnings.map((w) => `- ${w}`).join('\n'));
console.log('Accessibility smoke checks passed.');
