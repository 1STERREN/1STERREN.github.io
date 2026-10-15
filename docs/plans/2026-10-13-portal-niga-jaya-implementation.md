# Implementation Plan Portal CV. Serba Niaga Jaya (PRD v3.1 Presisi)

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Membangun portal resmi CV. Serba Niaga Jaya berbasis Astro, Tailwind CSS, TypeScript, dan Astro Content Collections sesuai PRD v3.1 dengan palet warna presisi (Teks Hitam #111111, Kuning Hangat #FFC700, Hijau Rimba #0F7B3F, Hijau Segar #12A150, Hijau Muda #E5F6E8, Latar Putih & Hijau Pucat #F3F8EE tanpa blok hitam), 10 seksi Beranda referensi, sistem slot foto terkunci rasio, dan kepatuhan mutlak PRD (tanpa form, tanpa embed peta, tanpa statistik fiktif, tanpa scan dokumen mentah, tanpa kata "divisi").

**Architecture:** SSG (Static Site Generation) berbasis Astro Islands yang ultra-ringan di HP Android kelas menengah lapangan. Data produk dan artikel dikelola melalui Astro Content Collections dengan skema Zod ketat. Styling menggunakan Tailwind CSS dengan CSS variables tokens terpusat. Navigasi mobile memadukan hamburger drawer di atas dan sticky bottom bar dua tombol di bawah yang adaptif terhadap scroll.

**Tech Stack:** Astro v5, Tailwind CSS, TypeScript, @fontsource/plus-jakarta-sans, @fontsource/jetbrains-mono, Zod, Lucide Icons (SVG inline), Vitest.

---

### Task 1: Inisialisasi Proyek Astro, TypeScript & Tailwind CSS dengan Palet Presisi

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `tailwind.config.mjs`
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`

**Step 1: Buat package.json**
```json
{
  "name": "niga-jaya-portal",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "test": "vitest run",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.4",
    "@astrojs/tailwind": "^5.1.5",
    "@fontsource/jetbrains-mono": "^5.2.7",
    "@fontsource/plus-jakarta-sans": "^5.2.7",
    "astro": "^5.4.2",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.2"
  },
  "devDependencies": {
    "vitest": "^3.0.7"
  }
}
```

**Step 2: Buat astro.config.mjs & tsconfig.json**
`astro.config.mjs`:
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://serbaniagajaya.co.id',
  integrations: [tailwind({ applyBaseStyles: false })],
  compressHTML: true
});
```

`tsconfig.json`:
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

**Step 3: Definisikan Token CSS & Tailwind Config**
`src/styles/tokens.css`:
```css
:root {
  --color-surface: #FFFFFF;
  --color-surface-soft: #F3F8EE;
  --color-green-dark: #0F7B3F;
  --color-green-primary: #12A150;
  --color-green-light: #E5F6E8;
  --color-yellow-safety: #FFC700;
  --color-yellow-dark: #E5B300;
  --color-yellow-light: #FFF7CC;
  --color-ink: #111111;
  --color-border: #DDE8D9;
  --color-panel-feature: #0F7B3F;

  --dur-instant: 100ms;
  --dur-fast: 150ms;
  --dur-base: 220ms;
  --dur-slow: 450ms;
  --ease-out-spec: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out-spec: cubic-bezier(0.65, 0, 0.35, 1);
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

`tailwind.config.mjs`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'surface': 'var(--color-surface)',
        'surface-soft': 'var(--color-surface-soft)',
        'green-dark': 'var(--color-green-dark)',
        'green-primary': 'var(--color-green-primary)',
        'green-light': 'var(--color-green-light)',
        'yellow-safety': 'var(--color-yellow-safety)',
        'yellow-dark': 'var(--color-yellow-dark)',
        'yellow-light': 'var(--color-yellow-light)',
        'ink': 'var(--color-ink)',
        'border-base': 'var(--color-border)',
        'panel-feature': 'var(--color-panel-feature)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
};
```

`src/styles/global.css`:
```css
@import '@fontsource/plus-jakarta-sans/400.css';
@import '@fontsource/plus-jakarta-sans/500.css';
@import '@fontsource/plus-jakarta-sans/600.css';
@import '@fontsource/plus-jakarta-sans/700.css';
@import '@fontsource/plus-jakarta-sans/800.css';
@import '@fontsource/jetbrains-mono/500.css';
@import '@fontsource/jetbrains-mono/700.css';
@import './tokens.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: var(--color-surface);
  color: var(--color-ink);
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}
```

**Step 4: Jalankan instalasi dependensi**
Run: `npm install`
Expected: Dependensi terpasang tanpa error.

---

### Task 2: Utility WhatsApp Pre-filled & Email BoQ (TDD)

**Files:**
- Create: `src/utils/links.test.ts`
- Create: `src/utils/links.ts`

**Step 1: Tulis unit test untuk generator WhatsApp pre-filled & BoQ mailto**
`src/utils/links.test.ts`:
```typescript
import { describe, it, expect } from 'vitest';
import { createWhatsAppUrl, createBoQMailtoUrl, OFFICIAL_PHONE, OFFICIAL_EMAIL } from './links';

describe('PRD Official Links Generator', () => {
  it('harus menghasilkan URL WhatsApp dengan nomor dan template pesan resmi PRD', () => {
    const url = createWhatsAppUrl('Beton Ready Mix K-300');
    expect(url).toBe(`https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent('Halo CV. Serba Niaga Jaya, saya ingin menanyakan ketersediaan dan penawaran harga untuk produk: Beton Ready Mix K-300.')}`);
  });

  it('harus menghasilkan URL WhatsApp umum jika argumen kosong', () => {
    const url = createWhatsAppUrl();
    expect(url).toContain('CV.%20Serba%20Niaga%20Jaya');
  });

  it('harus menghasilkan URL Mailto dengan subjek dan rincian parameter BoQ', () => {
    const url = createBoQMailtoUrl('Proyek Gudang Cikarang');
    expect(url).toContain(`mailto:${OFFICIAL_EMAIL}`);
    expect(url).toContain('Permintaan%20Penawaran%20Resmi%20%26%20Verifikasi%20BoQ');
    expect(url).toContain('Lokasi%20Proyek');
  });
});
```

**Step 2: Jalankan test dan pastikan gagal**
Run: `npx vitest run src/utils/links.test.ts`
Expected: FAIL (file `src/utils/links.ts` belum ada).

**Step 3: Tulis implementasi src/utils/links.ts**
```typescript
export const OFFICIAL_PHONE = "6281288889999";
export const OFFICIAL_PHONE_DISPLAY = "+62 812-8888-9999";
export const OFFICIAL_EMAIL = "penawaran@serbaniagajaya.co.id";

export function createWhatsAppUrl(productOrSpec: string = "Material Konstruksi"): string {
  const text = `Halo CV. Serba Niaga Jaya, saya ingin menanyakan ketersediaan dan penawaran harga untuk produk: ${productOrSpec}.`;
  return `https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent(text)}`;
}

export function createBoQMailtoUrl(projectName: string = ""): string {
  const subject = projectName 
    ? `Permintaan Penawaran Resmi & Verifikasi BoQ - ${projectName}`
    : `Permintaan Penawaran Resmi & Verifikasi BoQ - CV. Serba Niaga Jaya`;
  
  const body = `Halo Tim Estimator CV. Serba Niaga Jaya,

Mohon informasi penawaran harga resmi dan ketersediaan ritase armada untuk kebutuhan material berikut:
- Lokasi Proyek: 
- Jenis & Spesifikasi Material: 
- Estimasi Volume / Kebutuhan: 
- Jadwal Pengiriman yang Diinginkan: 

Data Pendukung (BoQ/RAB terlampir jika ada).

Terima kasih.`;

  return `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
```

**Step 4: Jalankan test kembali dan pastikan lulus**
Run: `npx vitest run src/utils/links.test.ts`
Expected: PASS (Semua tes hijau).

---

### Task 3: Content Collections Schema (Produk & Artikel)

**Files:**
- Create: `src/content/config.ts`
- Create: `src/content/products/beton.json`
- Create: `src/content/products/baja.json`
- Create: `src/content/products/aspal.json`
- Create: `src/content/products/batuan.json`
- Create: `src/content/articles/precast-u-ditch-vs-batu-kali.md`
- Create: `src/content/articles/profil-baja-wf-vs-h-beam.md`
- Create: `src/content/articles/karakteristik-pasir-cor-pasang-urug.md`

**Step 1: Definisikan skema Zod di src/content/config.ts**
```typescript
import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.enum(['beton', 'baja', 'aspal', 'batuan']),
    categoryName: z.string(),
    standardReference: z.string(),
    description: z.string(),
    featuredSpec: z.string(),
    items: z.array(z.object({
      id: z.string(),
      name: z.string(),
      grade: z.string(),
      unit: z.string(),
      application: z.string(),
    }))
  })
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['beton', 'baja', 'aspal', 'batuan']),
    publishedAt: z.string(),
    readingTimeMinutes: z.number(),
    isDraftEducational: z.boolean().default(true),
    sniReference: z.string(),
    summary: z.string(),
  })
});

export const collections = { products, articles };
```

**Step 2: Isi data produk resmi SNI**
- `beton.json`: Ready mix K-100 s.d K-500, U-Ditch saluran, Box Culvert.
- `baja.json`: Besi beton polos TP 280, ulir TS 420B, Wiremesh M6–M10, profil WF & H-Beam.
- `aspal.json`: Hotmix AC-WC, AC-BC, Pen 60/70, Prime Coat, Tack Coat.
- `batuan.json`: Pasir cor cuci, pasir pasang, batu split 1/2, batu split 2/3, batu kali belah.

**Step 3: Isi 3 artikel rujukan SNI awal**
Tulis artikel komparatif teknis di folder `src/content/articles/` lengkap dengan metadata SNI dan waktu baca.

---

### Task 4: Komponen Primitif UI & Desain Sistem

**Files:**
- Create: `src/components/ui/Button.astro`
- Create: `src/components/ui/SpecChip.astro`
- Create: `src/components/ui/PhotoSlot.astro`
- Create: `src/components/ui/Toast.astro`

**Step 1: Implementasikan Button.astro**
Tombol aksi utama berlatar kuning `#FFC700` dengan teks hitam `#111111`.
```astro
---
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  target?: string;
  class?: string;
  id?: string;
}
const { variant = 'primary', href, target, class: className = '', id } = Astro.props;

const baseStyles = "inline-flex items-center justify-center gap-2 font-bold text-sm px-5 py-3 rounded-[6px] transition-all duration-150 active:scale-[0.98] select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FFC700] focus:ring-offset-2";
const variants = {
  primary: "bg-[#FFC700] hover:bg-[#E5B300] text-[#111111] shadow-sm",
  secondary: "bg-surface hover:bg-[#E5F6E8] text-[#111111] border border-[#12A150]",
  ghost: "bg-transparent text-[#12A150] hover:underline"
};
const combinedClass = `${baseStyles} ${variants[variant]} ${className}`;
---
{href ? (
  <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} class={combinedClass} id={id}>
    <slot />
  </a>
) : (
  <button type="button" class={combinedClass} id={id}>
    <slot />
  </button>
)}
```

**Step 2: Implementasikan SpecChip.astro**
Chip spesifikasi dengan font mono JetBrains Mono, latar Hijau Muda `#E5F6E8`, teks `#111111`, dan fitur copy-to-clipboard.

**Step 3: Implementasikan PhotoSlot.astro**
Komponen rasio aspek terkunci (3:4, 16:9, 4:5, 4:3) dengan placeholder jujur *"Foto dokumentasi menyusul"* berkamera monoline 1.5px.

**Step 4: Implementasikan Toast.astro**
Wadah toast konfirmasi salin teks di pojok bawah layar.

---

### Task 5: Komponen Navigasi & Tata Letak Global

**Files:**
- Create: `public/logo.png` (disalin dari root)
- Create: `src/components/layout/Header.astro`
- Create: `src/components/layout/MobileDrawer.astro`
- Create: `src/components/layout/MobileBottomBar.astro`
- Create: `src/components/layout/Footer.astro`
- Create: `src/layouts/Layout.astro`

**Step 1: Setup aset logo resmi**
Salin `logo.png` ke `public/logo.png`.

**Step 2: Implementasikan Header.astro & MobileDrawer.astro**
- Desktop: Logo resmi SNJ di kiri, tautan menu bergaris kuning aktif, tombol WhatsApp kuning `#FFC700` teks hitam `#111111` di kanan.
- Mobile: Tombol hamburger ikonik yang membuka drawer menu navigasi.

**Step 3: Implementasikan MobileBottomBar.astro**
Sticky bottom bar mengambang dua tombol (WhatsApp Kuning & Email BoQ) yang otomatis menyembunyikan diri saat scroll turun dan muncul kembali saat scroll naik.

**Step 4: Implementasikan Footer.astro**
Latar `#F3F8EE` dengan garis atas hijau 2px, logo resmi, 4 kolom informasi, dan baris pernyataan integritas standar SNI/PUPR.

**Step 5: Susun Base Layout.astro**
Membungkus halaman dengan meta tags, safe padding `pb-24 md:pb-0`, header, footer, bottom bar mobile, dan toast container.

---

### Task 6: Implementasi 10 Seksi Beranda Sesuai PRD v3.1 (`src/pages/index.astro`)

**Files:**
- Create: `src/components/home/HeroCenter.astro`
- Create: `src/components/home/PhotoStrip.astro`
- Create: `src/components/home/CommitmentStrip.astro`
- Create: `src/components/home/AsymmetricCategories.astro`
- Create: `src/components/home/OrderSteps.astro`
- Create: `src/components/home/PrecisionSpecPanel.astro`
- Create: `src/components/home/TechnicalArticles.astro`
- Create: `src/components/home/FAQAccordion.astro`
- Create: `src/components/home/ClosingPhotoBanner.astro`
- Create: `src/pages/index.astro`

**Step 1: Hero Terpusat & Strip Foto Lebar Penuh**
- Hero terpusat dengan badge wilayah, H1 teks hitam *"Material konstruksi lengkap, satu pintu."*, tombol WhatsApp & Katalog, chip mutu.
- Strip 5 foto rasio 3:4 dengan lencana material di bawahnya.

**Step 2: Strip Komitmen & 4 Kategori Asimetris**
- Strip 4 komitmen SNI tanpa klaim angka fiktif.
- 1 kartu unggulan besar berfoto (Beton) + 3 kartu kecil (Baja, Aspal, Batuan).

**Step 3: Cara Pemesanan & Panel Presisi Spesifikasi**
- Foto 4:5 di kiri + 4 langkah bernomor latar kuning `#FFC700` dengan teks hitam di kanan.
- Panel presisi hijau rimba `#0F7B3F` dengan 3 baris spesifikasi (Mutu, Standar, Dokumen) dan tombol verifikasi via email.

**Step 4: Panduan Teknis, FAQ 6 Butir & Banner Penutup Berfoto**
- 3 kartu artikel edukasi rujukan SNI.
- Akordeon FAQ 2 kolom, 6 pertanyaan proses transparan dengan rotasi ikon plus 45°.
- Banner penutup hijau muda `#E5F6E8` dengan tombol ganda di kiri dan slot foto 4:3 di kanan.

---

### Task 7: Implementasi Hub Katalog (`/produk`) & Halaman Kategori (`/produk/[kategori]`)

**Files:**
- Create: `src/components/catalog/SpecTable.astro`
- Create: `src/components/catalog/ProductCard.astro`
- Create: `src/pages/produk/index.astro`
- Create: `src/pages/produk/[kategori].astro`

**Step 1: Buat rute dinamis kategori (/produk/[kategori].astro)**
- Membaca data dari collections `products` untuk menghasilkan `/produk/beton`, `/produk/baja`, `/produk/aspal`, `/produk/batuan`.
- Tabel spesifikasi cepat zebra `#F3F8EE`, font mono untuk mutu, tombol WhatsApp pre-filled per baris.
- Akordeon panduan memilih *"Kapan pakai apa"* yang menautkan ke artikel terkait.

**Step 2: Buat Hub Katalog (/produk/index.astro)**
- Navigasi tab 4 kategori dengan scroll-spy.
- Kolom pencarian instan nama produk/kode mutu di sisi klien.

---

### Task 8: Implementasi Indeks Artikel (`/artikel`) & Detail Panduan Teknis (`/artikel/[slug]`)

**Files:**
- Create: `src/pages/artikel/index.astro`
- Create: `src/pages/artikel/[slug].astro`

**Step 1: Indeks Artikel (/artikel/index.astro)**
- Filter chip kategori (Semua, Beton, Baja, Aspal, Batuan).
- Kartu artikel unggulan horizontal + grid 3 kolom artikel rujukan SNI.
- Kartu "Segera hadir" berborder putus-putus untuk artikel batch lanjutan.

**Step 2: Detail Artikel (/artikel/[slug].astro)**
- Reading progress bar kuning 3px di bawah header.
- Box Catatan Teknis kuning muda `#FFF7CC` bergaris kiri kuning tua.
- Nomor bab hitam berangka tebal, lebar baris baca ideal 68–72 karakter.
- Tombol salin tautan dengan toast konfirmasi.

---

### Task 9: Implementasi Halaman Profil Tentang (`/tentang`) & Kontak (`/kontak`)

**Files:**
- Create: `src/pages/tentang.astro`
- Create: `src/pages/kontak.astro`
- Create: `src/pages/404.astro`

**Step 1: Halaman Tentang (/tentang.astro)**
- Profil usaha, 4 pilar misi bernomor besar 01–04.
- Akordeon verifikasi izin dokumen tender via email resmi tanpa memajang scan mentah publik.

**Step 2: Halaman Kontak (/kontak.astro)**
- Dua kartu sejajar: WhatsApp Official & Email BoQ resmi.
- Box template pesan WhatsApp siap-salin dengan tombol "Salin Template".
- Kartu alamat kantor di atas slot foto kantor dengan tautan keluar ke aplikasi peta.

**Step 3: Halaman 404 (/pages/404.astro)**
- Tampilan ramah dan tombol kembali ke katalog.

---

### Task 10: Pengujian Otomatis Kepatuhan PRD & Verifikasi Build Statis

**Files:**
- Create: `tests/prd-compliance.test.ts`

**Step 1: Tulis tes kepatuhan PRD mutlak**
`tests/prd-compliance.test.ts`:
```typescript
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function getFiles(dir: string, ext: string): string[] {
  let files: string[] = [];
  readdirSync(dir).forEach(file => {
    const fullPath = join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      files = files.concat(getFiles(fullPath, ext));
    } else if (file.endsWith(ext)) {
      files.push(fullPath);
    }
  });
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
```

**Step 2: Jalankan pengujian kepatuhan**
Run: `npm test`
Expected: PASS (Semua pemeriksaan kepatuhan PRD hijau).

**Step 3: Jalankan verifikasi build statis**
Run: `npm run build`
Expected: Folder `dist/` ter-generate tanpa error TypeScript atau layout breaking.

---

## Execution Handoff

Plan complete and saved to `docs/plans/2026-10-13-portal-niga-jaya-implementation.md`. Two execution options:

**1. Subagent-Driven (this session)** - I dispatch fresh subagent per task, review between tasks, fast iteration.

**2. Parallel Session (separate)** - Open new session with `executing-plans`, batch execution with checkpoints.

**Which approach?**
