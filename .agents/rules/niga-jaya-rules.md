# Rules: CV. Serba Niaga Jaya Portal (v3.1)

## 1. Prinsip Utama & Karakter Proyek
- **Karakter**: White-Dominant Industrial Engineering Specification Sheet. Terang, lapang, presisi, fungsional, dan jujur seperti lembar spesifikasi teknik konstruksi.
- **Dukungan Tema Dual (Terang & Gelap)**:
  - **Mode Terang (Utama)**: 85% Putih & Netral Terang (`#FFFFFF`, `#F5F8F2`), 10% Hijau Struktural (`#14532D`, `#15803D`), 5% Kuning Safety (`#FACC15`).
  - **Mode Gelap**: Permukaan gelap teknis (`#0D1510`, `#121C15`), teks terang kontras tinggi (`#EEF3EC`), aksen hijau cerah (`#4ADE80`), aksen kuning safety (`#FACC15`).
  - Panel Presisi Spesifikasi: Menggunakan `#14532D` di mode terang dan `#1F3526` di mode gelap (tetap berkarakter gelap di kedua mode).
- **Anti-AI-Slop & Integritas**:
  - Dilarang gradien ungu-biru, glassmorphism glossy, neon glow, atau partikel loop.
  - Dilarang ikon emoji 3D atau ikon tebal generik. Gunakan stroke garis 1.5px monoline (Lucide/Tabler) atau foto asli.
  - Dilarang deretan "3 kartu identik + angka metrik besar fiktif".
  - Gunakan dokumentasi lapangan asli. Jika belum ada, gunakan placeholder jujur *"Foto dokumentasi menyusul"* dengan ikon kamera garis 1.5px.
  - **Kata "divisi" DILARANG MUNCUL pada teks antarmuka mana pun**.

## 2. Batasan Mutlak PRD (Hard Constraints)
1. **Tanpa Statistik Fiktif**: Dilarang menampilkan angka klaim palsu ("1000+ Proyek", "99% Puas"), counter animatif, atau count-up script.
2. **Tanpa Form Isian**: Dilarang membuat tag `<form>` publik atau field input pengiriman formulir. Konversi dilakukan via WhatsApp pre-filled resmi PRD atau `mailto:` BoQ resmi.
3. **Tanpa Embed Peta**: Dilarang menyematkan iframe Google Maps. Gunakan teks alamat terperinci dan tombol keluar ke aplikasi peta (`target="_blank"`).
4. **Tanpa Scan Dokumen Mentah**: Dilarang memajang scan berkas tender/izin mentah. Cantumkan nama dokumen yang dapat diverifikasi secara resmi via email.
5. **Beranda Bebas Seksi Armada/Gudang/Alamat**: Seksi armada, gudang, dan lokasi pengiriman dihapus dari Beranda. Alamat kantor dipusatkan di halaman Kontak.

## 3. Sistem Desain & Token Warna (Industrial Forest & Warm Ochre)
- **Mode Terang**:
  - Permukaan: `#FFFFFF` (Latar utama)
  - Permukaan Lembut: `#F6F8F5` (Seksi selang-seling, latar FAQ)
  - Hijau Tua: `#0F3822` (Hijau Pinus Pekat sesuai logo, judul H1/H2, teks tombol kuning)
  - Hijau Utama: `#1B5E38` (Hijau Hutan Elegan untuk tautan, ikon, status, border hover)
  - Hijau Muda: `#EBF3ED` (Chip kode, zebra tabel, latar banner)
  - Kuning Safety: `#EAB308` (Warm Ochre / Kuning Kunyit Hangat untuk tombol aksi utama, penanda aktif, reading progress bar)
  - Kuning Tua: `#CA8A04` (Hover tombol aksi)
  - Kuning Muda: `#FEF9C3` (Latar catatan teknis & alert)
  - Tinta: `#0E1A13` (Teks paragraf WCAG AAA)
  - Garis: `#DDE5DC` (Border 1px)
- **Mode Gelap**:
  - Permukaan: `#0A140E`
  - Permukaan Lembut: `#111D16`
  - Hijau Tua: `#C4ECD2` (Teks judul di mode gelap)
  - Hijau Utama: `#34D399` (Tautan & border di mode gelap)
  - Hijau Muda: `#14281E` (Chip kode & sorot tabel gelap)
  - Tinta: `#EFF5F0` (Teks isi mode gelap)
  - Garis: `#1E3326` (Border 1px gelap)
  - Kuning Safety: `#FACC15` (Kuning Ochre Emas)

> **Aturan Kontras Mutlak**: Tombol kuning `#EAB308` WAJIB memakai teks Hijau Pinus Pekat `#0F3822` (rasio ~8.5:1, WCAG AAA). Dilarang menulis teks kuning di atas permukaan putih.

## 4. Pola Layout Beranda v3.1 (10 Seksi Terpadu)
1. **Hero Terpusat**: Badge wilayah, H1 terpusat, subjudul, 2 tombol aksi, strip chip mutu teknis.
2. **Strip Foto Lebar Penuh**: 5 slot foto rasio 3:4 dengan caption lencana material.
3. **Strip Komitmen 4 Butir**: 4 pernyataan singkat tanpa angka dan tanpa klaim fiktif.
4. **Empat Kategori Material**: 1 kartu unggulan besar berfoto (Beton) + 3 kartu kecil (Baja, Aspal, Batuan).
5. **Cara Pemesanan**: Foto 4:5 di kiri + 4 langkah bernomor di kanan.
6. **Panel Presisi Spesifikasi**: Panel melengkung hijau gelap (`#14532D` / `#1F3526`) dengan foto 4:5 di kiri dan 3 baris spesifikasi (Mutu, Standar, Dokumen) di kanan.
7. **Panduan Teknis**: 3 kartu artikel edukasi rujukan SNI (rasio foto 16:9).
8. **Tim (Opsional)**: Hanya jika data terverifikasi dan berizin tertulis (jika belum, lewati seksi).
9. **FAQ**: Akordeon 2 kolom, 6 pertanyaan alur proses transparan (persiapan, harga, jadwal ritase, mutu, tender, wilayah).
10. **Banner Penutup Berfoto**: Panel hijau dengan tombol WA/Email di kiri dan 1 slot foto tim di kanan.

## 5. Motion Presisi v3.1
- **Theme Toggle**: Rotasi ikon 500ms, transisi fade silang.
- **Scroll Progress Bar**: Garis kuning safety 3px di paling atas layar.
- **Garis Judul Seksi Tumbuh**: Garis kuning 4px tumbuh di bawah judul saat masuk viewport.
- **FAQ Akordeon**: Transisi tinggi 240ms, ikon plus berputar 45° menjadi silang.
- **Mobile Bottom Bar**: Menyembunyikan diri saat scroll turun, muncul saat scroll naik.
- **prefers-reduced-motion**: Matikan translasi, skala, dan rotasi; fallback ke fade 100ms.
