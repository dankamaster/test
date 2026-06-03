import fs from 'node:fs';

const required = [
  'index.html',
  'styles.css',
  'app.js',
  'manifest.webmanifest',
  'service-worker.js',
  'offline.html',
  'favicon.svg',
  'og-image.svg',
  'AGENTS.md',
  'README.md',
  'SUBMISSION_PACK.md',
  'docs/seo-research.md',
  'docs/competitor-teardown.md',
  'docs/pdf-source-library.md',
  'docs/source-validation-matrix.md',
  'docs/conversion-privacy-plan.md',
  'docs/ai-prompts.md',
  'docs/distribution-plan.md',
  'docs/time-log.md'
];

const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length) {
  console.error('Missing required files:\n' + missing.map((file) => `- ${file}`).join('\n'));
  process.exit(1);
}

console.log(`Repo structure OK: ${required.length} required files found.`);
