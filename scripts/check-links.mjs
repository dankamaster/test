import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const htmlFiles = fs.readdirSync('.').filter((file) => file.endsWith('.html'));
const errors = [];
const ignored = ['http://', 'https://', 'mailto:', '#'];

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const $ = cheerio.load(html);

  $('a[href], link[href], script[src]').each((_, element) => {
    const attr = element.name === 'script' ? 'src' : 'href';
    const value = $(element).attr(attr);
    if (!value) return;
    if (ignored.some((prefix) => value.startsWith(prefix))) return;
    if (value.startsWith('#')) return;

    const clean = value.split('#')[0].split('?')[0];
    if (!clean) return;

    const resolved = path.normalize(path.join(path.dirname(file), clean));
    if (!fs.existsSync(resolved)) {
      errors.push(`${file}: missing linked file ${value}`);
    }
  });
}

if (errors.length) {
  console.error('Link QA failed:\n' + errors.map((e) => `- ${e}`).join('\n'));
  process.exit(1);
}

console.log(`Link QA passed for ${htmlFiles.length} HTML files.`);
