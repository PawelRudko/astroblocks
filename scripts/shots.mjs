// Auto-miniaturki: odwiedza /preview/<id> i zapisuje zrzut do public/thumbs/<id>.webp
// Uruchom: 1) `npm run dev` w drugim terminalu, 2) `node scripts/shots.mjs`
// Wymaga: `npm i -D playwright` + `npx playwright install chromium`
//
// Dzięki temu miniaturki NIGDY się nie starzeją — generują się z żywego komponentu.

import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { registry } from '../src/data/sections.ts';

const BASE = process.env.BASE_URL || 'http://localhost:4322';
const OUT = new URL('../public/thumbs/', import.meta.url);

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });

for (const s of registry) {
  const url = `${BASE}/preview/${s.id}`;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400); // dociągnij fonty/motion
  const el = await page.$('.stage > *');
  const target = el || page;
  await target.screenshot({ path: new URL(`${s.id}.webp`, OUT).pathname, type: 'webp', quality: 82 });
  console.log(`✓ thumb: ${s.id}.webp`);
}

await browser.close();
console.log(`Gotowe — ${registry.length} miniaturek w public/thumbs/`);
