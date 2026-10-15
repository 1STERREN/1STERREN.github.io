import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function getFiles(dir: string, ext: string): string[] {
  let files: string[] = [];
  try {
    readdirSync(dir).forEach((file: string) => {
      const fullPath = join(dir, file);
      if (statSync(fullPath).isDirectory()) {
        files = files.concat(getFiles(fullPath, ext));
      } else if (file.endsWith(ext)) {
        files.push(fullPath);
      }
    });
  } catch (e) {
    // skip
  }
  return files;
}

describe('Audit Kepatuhan Mutlak PRD v3.1', () => {
  const astroFiles = getFiles('src', '.astro');

  it('DILARANG MEMILIKI TAG <form> PUBLIK', () => {
    astroFiles.forEach(file => {
      const content = readFileSync(file, 'utf-8');
      expect(content).not.toMatch(/<form\b[^>]*>/i);
    });
  });

  it('DILARANG MEMILIKI IFRAME PETA GOOGLE MAPS', () => {
    astroFiles.forEach(file => {
      const content = readFileSync(file, 'utf-8');
      expect(content).not.toMatch(/<iframe\b[^>]*>/i);
    });
  });

  it('DILARANG MEMILIKI KATA "divisi" PADA ANTARMUKA', () => {
    astroFiles.forEach(file => {
      const content = readFileSync(file, 'utf-8');
      expect(content).not.toMatch(/\bdivisi\b/i);
    });
  });

  it('DILARANG MEMILIKI KLAIM ANGKA STATISTIK FIKTIF', () => {
    astroFiles.forEach(file => {
      const content = readFileSync(file, 'utf-8');
      expect(content).not.toMatch(/1000\+\s*Proyek|99%\s*Klien\s*Puas/i);
    });
  });
});
