// Fails if banned absolute/unsupported claims reappear in site source.
// Audit: D:\00_MATRIX\docs\research\ERCUMENTERDEN_CLAIMS_2026-11-08.md
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const BANNED = [
  { re: /0%\s*cloud/i, name: '0% cloud' },
  { re: /\$\s*122\.8\s*M/i, name: '$122.8M' },
  { re: /370\s*\+|370'in üzerinde/i, name: '370+' },
  { re: /28\s+Autonomous/i, name: '28 Autonomous' },
  { re: /28\s+Otonom/i, name: '28 Otonom' },
  { re: /SOVEREIGN-ED25519/i, name: 'SOVEREIGN-ED25519' },
  { re: /Zero[\s-]+Idea[\s-]*Theft/i, name: 'Zero Idea-Theft' },
  { re: /<\s*100\s*µs|&lt;\s*100\s*µs/i, name: '<100µs' },
  { re: /Musa\s+Aygül|Rıfat\s+Albuz/i, name: 'named third parties without consent' },
];

const root = fileURLToPath(new URL('../src/', import.meta.url));
const EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.md', '.mdx']);
const hits = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p);
    else if (EXT.has(extname(p))) {
      readFileSync(p, 'utf8').split(/\r?\n/).forEach((line, i) => {
        for (const b of BANNED) if (b.re.test(line)) hits.push(`${p}:${i + 1}: banned claim "${b.name}"`);
      });
    }
  }
}

walk(root);
if (hits.length) {
  console.error(hits.join('\n'));
  console.error(`\ncheck-claims FAILED: ${hits.length} banned claim(s).`);
  process.exit(1);
}
console.log('check-claims OK: no banned claims in src/');
