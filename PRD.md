# Product Requirement Document (PRD) & Project Brief
## Portal Web CV. Serba Niaga Jaya (Material & Infrastruktur Terpadu)
**Versi 3.1 (Referensi Layout, Mode Terang/Gelap) | Status: Living Specification | Tanggal: Oktober 2026 | Pengganti: v3.0**

---

## 1. Ringkasan Eksekutif & Identitas Proyek
- **Nama Perusahaan**: CV. Serba Niaga Jaya
- **Sektor Industri**: Pengadaan bahan bangunan, material konstruksi sipil, dan produk infrastruktur terpadu (pemasok B2B dan B2C).
- **Wilayah Operasional**: Jabodetabek (DKI Jakarta, Bogor, Depok, Tangerang Raya, Bekasi) serta Kawasan Industri Cikarang dan Karawang.
- **Target Audiens**: Kontraktor umum dan spesialis, pengembang properti, instansi BUMN/Dinas PU, mandor proyek, serta pemilik bangunan komersial dan residensial.
- **Tujuan Utama**: Menyajikan etalase digital profesional yang menyatukan empat kategori pasokan konstruksi (Beton, Baja, Aspal, Batuan) dalam satu pintu, memfasilitasi konversi pesanan via WhatsApp tanpa friksi, serta menegakkan transparansi legalitas dan standar mutu SNI tanpa manipulasi data.

### Perubahan Utama dari v3.0 ke v3.1:
1. **Layout Beranda Referensi Baru**: Hero terpusat, strip foto lebar penuh (5 slot 3:4), strip komitmen 4 butir, 4 kategori material (1 kartu unggulan besar berfoto + 3 kartu kecil), panel gelap presisi spesifikasi, alur pemesanan (foto di kiri + 4 langkah bernomor di kanan), FAQ akordeon 6 butir, dan banner penutup berfoto.
2. **Dual Theme (Mode Terang & Gelap)**: Arah visual putih dominan di mode terang dan palet gelap industrial di mode gelap. Tombol toggle tema di header dengan rotasi ikon 500ms dan persistensi `localStorage`.
3. **Penyempurnaan Penataan Halaman**: Seksi armada, gudang, dan lokasi pengiriman dihapus dari Beranda. Alamat kantor dipusatkan di halaman Kontak dengan pola kartu alamat di atas foto kantor.
4. **Sistem Slot Foto Terstruktur (Bagian 5.9)**: Rasio aspek tetap (3:4, 16:9, 4:5, 4:3, 1:1), dengan placeholder jujur *"Foto dokumentasi menyusul"* berkamera monoline jika foto fisik belum tersedia.
5. **Spesifikasi Motion Presisi Diperluas**: Garis judul seksi tumbuh 4px kuning, strip foto hero clip-path menyingkap berurutan, scroll reading progress bar 3px kuning, FAQ expand 240ms + rotate plus 45°, tombol WhatsApp pre-filled resmi PRD.

---

## 2. Pilar Strategis & Brand Architecture

### A. Visi
Menjadi penyedia material konstruksi dan infrastruktur yang terpercaya dan lengkap, dimulai dari Jabodetabek, melalui produk berkualitas, layanan profesional, dan distribusi yang handal.

### B. Misi (4 Pilar)
1. **Standar SNI & Harga Kompetitif**: Menyediakan material bangunan standar SNI dengan harga kompetitif.
2. **Unit Bisnis Terspesialisasi**: Mengembangkan unit bisnis terspesialisasi untuk keahlian dan kepuasan pelanggan di tiap lini produk.
3. **Rantai Pasok & Distribusi Efisien**: Membangun rantai pasok dan armada distribusi yang efisien agar pengiriman tepat waktu.
4. **Kemitraan & Integritas Terbuka**: Mengedepankan kemitraan jangka panjang berbasis transparansi, integritas, dan pelayanan profesional.

### C. Batasan Mutlak Brand & Konten (Hard Constraints)
- **Tanpa data fiktif**: Dilarang mencantumkan statistik buatan (misalnya "1000+ Proyek Selesai" atau "99% Klien Puas"), testimoni rekayasa, atau logo klien yang belum terverifikasi. Tidak ada animasi count-up dan tidak ada blok angka besar.
- **Transparansi dokumen terkendali**: Tidak menampilkan scan dokumen mentah ke publik. Verifikasi berkas asli melalui permohonan resmi via email (`mailto:`).
- **Akurasi nomenklatur teknis**: Spesifikasi wajib mengikuti nomenklatur baku SNI/Kementerian PUPR (K-100 s.d. K-500 / f'c, TP 280 / TS 420, AC-WC / AC-BC, Pen 60/70).
- **Tanpa form isian dan tanpa embed peta**: Jalur kontak hanya direct-to-WhatsApp dan email terverifikasi. Alamat kantor ditampilkan sebagai teks dengan tautan keluar biasa ke aplikasi peta.
- **Foto jujur**: Memakai dokumentasi lapangan asli. Bila belum tersedia, tampilkan placeholder *"Foto dokumentasi menyusul"*, bukan foto stok asing.
- **Kata "divisi" tidak boleh muncul pada antarmuka**.

---

## 3. Desain Sistem "Industrial Integrity" & Palet Warna (Dual Theme)

### A. Token Warna Presisi (Sesuai Permintaan)

| Token | Nilai Hex | Pemakaian |
| :--- | :--- | :--- |
| **Teks Utama** | `#111111` | Hitam tegas untuk SEMUA judul (H1, H2, H3) dan seluruh teks isi paragraf |
| **Kuning Aksi** | `#FFC700` | Kuning hangat & lebih terang untuk tombol aksi utama dan latar nomor langkah pemesanan |
| **Kuning Hover** | `#E5B300` | Hover tombol aksi |
| **Hijau Rimba** | `#0F7B3F` | Panel presisi spesifikasi dan lencana utama |
| **Hijau Segar** | `#12A150` | Tautan, ikon aktif, dan border hover kartu |
| **Hijau Muda** | `#E5F6E8` | Latar chip kode spesifikasi dan latar banner penutup |
| **Latar Utama** | `#FFFFFF` | Putih bersih untuk latar dasar dan kartu |
| **Latar Selang-seling**| `#F3F8EE` | Hijau pucat lembut untuk seksi bergantian, tanpa blok hitam |
| **Garis Border** | `#DDE8D9` | Border presisi 1px |

*Aturan Kontras*: Tombol kuning `#FFC700` menggunakan teks hitam `#111111` (rasio kontras tinggi, sangat terbaca). Judul tidak lagi memakai warna hijau, melainkan hitam tegas `#111111`.

### B. Tipografi
- **Headline & Body**: *Plus Jakarta Sans* (800 Headline, 600 Subjudul, 400/500 Body).
- **Kode Teknis / Mutu Material**: *JetBrains Mono* atau *IBM Plex Mono* dalam chip kecil berlatar Hijau Muda dengan teks Hijau Tua. (e.g. `K-300`, `TP 280`, `TS 420`, `AC-WC`, `AC-BC`, `Pen 60/70`, `f'c 25 MPa`).

---

## 4. Struktur Beranda v3.1 (10 Seksi Terpadu)

1. **Hero Terpusat**: Lencana wilayah distribusi (Jabodetabek, Cikarang, Karawang), H1 besar *"Material konstruksi lengkap, satu pintu."*, subjudul satu kalimat, tombol kuning *"Konsultasi via WhatsApp"* dan tombol berbingkai *"Lihat Katalog Spesifikasi"*, chip kode mutu di bawah tombol.
2. **Strip Foto Lebar Penuh (5 Slot 3:4)**: Lima foto lapangan sejajar beresolusi tajam tepat di bawah hero. Kedua tepi sengaja terpotong rapi agar terasa berlanjut (tanpa auto-scroll mengganggu). Masing-masing slot membawa lencana kecil ("Beton siap pakai", "Baja ulir SNI", "Hotmix jalan", "Pasir cor", "Uji slump").
3. **Strip Komitmen Empat Butir**: 4 pernyataan pendek tanpa angka: Rujukan SNI di setiap spesifikasi, Jadwal ritase dikonfirmasi per pesanan, Penawaran tertulis via email, Distribusi Jabodetabek, Cikarang & Karawang.
4. **Empat Kategori Material (Asimetris)**: 1 kartu unggulan besar berfoto (Beton Ready Mix & Precast) bersama 3 kartu lebih kecil (Baja, Aspal, Batuan). Tiap kartu memuat ikon garis, deskripsi dua kalimat, chip mutu mono, dan tombol *"Lihat kategori"*.
5. **Cara Pemesanan**: Foto besar di kiri (rasio 4:5), 4 langkah bernomor bergaris pemisah tipis di kanan: (01) Tanya via WhatsApp, (02) Konfirmasi spesifikasi & ritase, (03) Penawaran resmi via email, (04) Pengiriman sesuai jadwal.
6. **Panel Presisi Spesifikasi**: Panel melengkung hijau gelap (`#14532D`) dengan foto di kiri (4:5) dan 3 baris berlabel di kanan: Mutu (nomenklatur baku SNI/PUPR), Standar (rujukan SNI dan Bina Marga), Dokumen (verifikasi berkas asli via email). Panel tetap berkarakter gelap di kedua mode tema.
7. **Panduan Teknis**: 3 kartu artikel berfoto 16:9 dengan pill kategori dan estimasi baca.
8. **Tim (Opsional)**: Hanya tampil jika ada data terverifikasi dan izin tertulis. Jika belum ada, seksi dilewati tanpa placeholder.
9. **FAQ (Akordeon 2 Kolom, 6 Butir)**: Penjelasan alur proses pengadaan: persiapan saat menghubungi, cara mendapat harga, penjadwalan ritase armada, verifikasi standar mutu, penawaran tender, dan jangkauan wilayah.
10. **Banner Penutup Berfoto**: Panel hijau dengan teks, tombol WhatsApp kuning dan tombol email BoQ berbingkai di kiri, serta 1 slot foto tim lapangan di kanan.

---

## 5. Sistem Slot Foto (Bagian 5.9)

| Lokasi | Jumlah | Rasio Aspek | Isi Disarankan |
| :--- | :--- | :--- | :--- |
| Beranda: Strip Hero | 5 | 3:4 | Beton, baja, aspal, batuan, kegiatan lapangan |
| Beranda: Kartu Kategori | 4 | 16:9 & 4:3 | 1 foto utama per kategori |
| Beranda: Cara Pemesanan | 1 | 4:5 | Komunikasi dengan tim lapangan |
| Beranda: Panel Presisi | 1 | 4:5 | Pemeriksaan mutu / uji lab / silinder beton |
| Beranda & Indeks Artikel | 3 s.d 9 | 16:9 | Dokumentasi teknis sesuai topik |
| Beranda: Banner Penutup | 1 | 4:3 | Tim operasional lapangan |
| Halaman Kategori: Hero & Varian | 1 + 1/varian | 16:9 & 1:1 | Foto produk material spesifik |
| Kontak: Kartu Alamat | 1 | 16:9 | Foto kantor operasional |

- Bila foto lapangan fisik belum tersedia, slot diisi placeholder jujur berlabel *"Foto dokumentasi menyusul"* dengan ikon kamera monoline stroke 1.5px.
- Rasio aspek dikunci dalam CSS agar tata letak (CLS) tidak bergeser ketika foto dimuat.

---

## 6. Spesifikasi Motion & Interaksi v3.1

- **Toggle Mode Terang/Gelap**: Ikon matahari dan bulan berputar dan bertukar (500ms), transisi warna permukaan halus.
- **Scroll Reading Progress Bar**: Garis kuning safety 3px di bagian paling atas layar yang memanjang sesuai rasio scroll.
- **Strip Foto Hero Reveal**: Foto menyingkap dari kiri ke kanan dengan `clip-path` berurutan saat halaman dimuat.
- **Garis Judul Seksi Tumbuh**: Garis aksen kuning 4px tumbuh di bawah setiap judul seksi saat elemen memasuki viewport.
- **Cara Pemesanan**: Nomor langkah terisi hijau saat alur scroll tercapai.
- **FAQ Akordeon**: Membuka dengan transisi tinggi 240ms (`ease-out`) dan ikon plus berputar 45° menjadi silang.
- **Mobile Bottom Bar**: Menyembunyikan diri saat scroll turun dan muncul kembali saat scroll naik.
- **Spec Chip**: Mengklik kode spesifikasi menyalin teks ke clipboard dan menampilkan toast konfirmasi 2,5 detik.
- **prefers-reduced-motion**: Mematikan semua geser, skala, dan stagger; hanya mempertahankan fade 100ms.
