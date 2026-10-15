---
name: niga-jaya-portal
description: Specialized skill for engineering, designing, and maintaining CV. Serba Niaga Jaya portal using Astro, Tailwind CSS, TypeScript, and Content Collections according to PRD v3.1 (Dual Mode Light/Dark, Slot Foto System, Center Hero, 10-Section Home Layout).
---

# Skill: Portal CV. Serba Niaga Jaya (v3.1)

Gunakan skill ini untuk merancang, mengimplementasikan, dan mengaudit portal CV. Serba Niaga Jaya sesuai PRD v3.1.

## 1. Sistem Tema Dual (CSS Variables Light & Dark Mode)

```css
:root {
  /* Mode Terang (Default) */
  --color-surface: #FFFFFF;
  --color-surface-soft: #F5F8F2;
  --color-green-dark: #14532D;
  --color-green-primary: #15803D;
  --color-green-light: #E8F4EB;
  --color-yellow-safety: #FACC15;
  --color-yellow-dark: #CA8A04;
  --color-yellow-light: #FEF9C3;
  --color-ink: #0F1A13;
  --color-border: #E2E8DD;
  --color-panel-feature: #14532D;

  --dur-instant: 100ms;
  --dur-fast: 150ms;
  --dur-base: 220ms;
  --dur-slow: 450ms;
  --ease-out-spec: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out-spec: cubic-bezier(0.65, 0, 0.35, 1);
}

html.dark {
  /* Mode Gelap */
  --color-surface: #0D1510;
  --color-surface-soft: #121C15;
  --color-green-dark: #BFE8C9;
  --color-green-primary: #4ADE80;
  --color-green-light: #173222;
  --color-yellow-safety: #FACC15;
  --color-yellow-dark: #CA8A04;
  --color-yellow-light: #3A3410;
  --color-ink: #EEF3EC;
  --color-border: #243228;
  --color-panel-feature: #1F3526;
}
```

---

## 2. Pola Komponen & Slot Foto (Rasio Aspek Terkunci)

Setiap slot foto diwajibkan menggunakan pembungkus rasio aspek tetap untuk mencegah pergeseran tata letak (CLS):
```html
<!-- Slot Foto Rasio 3:4 dengan Placeholder Jujur -->
<div class="aspect-[3/4] rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] relative overflow-hidden flex flex-col items-center justify-center p-4 text-center">
  <svg class="w-8 h-8 text-[var(--color-green-primary)] mb-2 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
  </svg>
  <span class="text-xs font-semibold text-[var(--color-green-dark)]">Foto dokumentasi menyusul</span>
  <span class="text-[10px] font-mono text-[var(--color-ink)] opacity-70 mt-1">Beton Siap Pakai SNI</span>
</div>
```

---

## 3. Komponen Akordeon FAQ Presisi

```html
<details class="group border border-[var(--color-border)] rounded-[8px] bg-[var(--color-surface)] p-4 transition-colors">
  <summary class="flex items-center justify-between font-bold text-sm text-[var(--color-green-dark)] cursor-pointer list-none select-none">
    <span>Apa saja informasi yang perlu disiapkan saat menghubungi kami?</span>
    <span class="w-6 h-6 flex items-center justify-center rounded-full bg-[var(--color-green-light)] text-[var(--color-green-primary)] font-mono text-base transition-transform duration-200 group-open:rotate-45">+</span>
  </summary>
  <p class="text-xs sm:text-sm text-[var(--color-ink)] opacity-85 mt-3 leading-relaxed border-t border-[var(--color-border)] pt-3">
    Cukup informasikan lokasi proyek Anda (kecamatan/kota), spesifikasi material yang dibutuhkan (contoh: K-300 atau TS 420), estimasi volume/kebutuhan, dan jadwal pengiriman yang diinginkan.
  </p>
</details>
```

---

## 4. Checklist Audit PRD v3.1

Sebelum menganggap pekerjaan selesai:
1. [ ] **Dual Theme**: Apakah toggle mode terang/gelap berfungsi, tersimpan di `localStorage`, dan memenuhi kontras WCAG AAA?
2. [ ] **10 Seksi Beranda v3.1**: Lengkap (Hero terpusat, Strip 5 foto 3:4, Strip komitmen, 4 kategori asimetris, Cara pemesanan foto+4 step, Panel presisi gelap, Panduan teknik, FAQ 6 butir, Banner penutup berfoto)?
3. [ ] **Bebas Seksi Armada & Alamat di Beranda**: Apakah seksi armada/gudang dan alamat kantor sudah bersih dari Beranda?
4. [ ] **Larangan Kata "Divisi"**: Apakah teks antarmuka bebas dari kata "divisi"?
5. [ ] **Hard Constraints**: Tidak ada form isian `<form>`, tidak ada iframe peta, tidak ada angka metrik fiktif.
