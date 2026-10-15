---
title: "Profil Baja WF vs H-Beam: Penentuan Momen Kolom & Balok Gudang"
category: "baja"
publishedAt: "Oktober 2026"
readingTimeMinutes: 8
isDraftEducational: false
sniReference: "SNI 2052:2017 / ASTM A36 / AISC 360"
summary: "Kajian rekayasa penentuan profil Wide Flange (WF) dan H-Beam: analisis rasio inersia sumbu X-Y, fenomena tekuk torsi lateral (LTB), studi kasus keruntuhan kolom gudang di Cikarang, dan prosedur inspeksi QC ketebalan web-flens."
actionBadge: "LAYANAN PENGADAAN BAJA STRUKTUR"
actionHeadline: "Konsultasikan Kebutuhan Baja WF & H-Beam Proyek Anda Bersama Niaga Jaya"
actionDetails: "Dapatkan kepastian spesifikasi baja profil WF dan H-Beam standar SNI 2052:2017 & ASTM A36 lengkap dengan mill certificate resmi pabrik. CV. Serba Niaga Jaya siap membantu perhitungan estimasi tonase, pemotongan presisi sesuai gambar kerja (cut-to-length), dan pengiriman langsung via armada trailer ke lokasi proyek Jabodetabek & Karawang."
actionCtaText: "Konsultasikan Kebutuhan Baja Struktur"
---

## 1. Pendahuluan & Prinsip Mekanika Profil Struktur Baja

Dalam perancangan struktur baja portal kaku (*rigid frame*) untuk pergudangan, pabrik manufaktur, dan mezanin gedung bertingkat, pemilihan penampang profil struktural memegang peranan krusial terhadap efisiensi volume tonase baja dan stabilitas bangunan terhadap deformasi batas layan (*serviceability limit state*).

Dua penampang struktural gilas panas (*hot-rolled structural sections*) yang paling umum diperdebatkan di lapangan adalah **Wide Flange (WF / IWF)** dan **H-Beam**. Meskipun sepintas memiliki bentuk penampang serupa menyerupai huruf kapital 'H' atau 'I', perbedaan geometri rasio lebar terhadap tinggi penampang menghasilkan sifat mekanis yang sangat kontras dalam memikul kombinasi gaya dalam (aksial tekan, geser, momen lentur uniaksial, dan momen torsi).

---

## 2. Tabel Komparasi Teknis Geometri & Kapasitas Penampang

Berdasarkan rujukan SNI 2052:2017, ASTM A36, dan standar desain AISC 360-16, berikut adalah komparasi analitis sifat mekanis kedua penampang:

| Parameter Rekayasa | Wide Flange (WF / IWF) | H-Beam (Equal Flange) |
| :--- | :--- | :--- |
| **Rasio Dimensi Penampang** | Rasio H/B ≈ 1,5 - 2,0 (Tinggi web jauh melampaui lebar flens) | Rasio H/B ≈ 1,0 (Tinggi penampang sama atau hampir setara lebar flens) |
| **Karakteristik Inersia Lentur** | Inersia sumbu kuat (Ix) sangat tinggi, namun sumbu lemah (Iy) rendah | Inersia sumbu Ix dan Iy seimbang, menghasilkan kapasitas dwisumbu optimal |
| **Jari-Jari Girasi (ry)** | Relatif kecil terhadap tinggi penampang | Besar, memberikan faktor kelangsingan kolom yang rendah |
| **Ketahanan Tekuk Torsi Lateral** | Rentan terhadap tekuk puntir lateral bila tanpa balok pengaku | Sangat kokoh menahan puntiran torsi dan tekuk elastis kolom langsing |
| **Fungsi Ideal Struktur** | **Balok Pemikul (Beam / Rafter), Balok Mezanin, Girder Lantai** | **Kolom Utama Gedung, Tiang Pancang Baja (H-Piles), Tiang Crane** |
| **Efisiensi Tonase Baja** | Sangat hemat bobot untuk memikul beban gravitasi vertikal satu arah | Lebih berat per meter lari jika hanya difungsikan sebagai balok biasa |

---

## 3. Analisis Mekanika: Mengapa WF Tidak Boleh Menggantikan Kolom H-Beam Tanpa Bracing?

Perbedaan mendasar yang sering diabaikan pelaksana lapangan terletak pada fenomena **kelangsingan kolom** (*column slenderness ratio*). 

Kapasitas daya dukung nominal tekan aksial kolom ditentukan oleh konsep tekuk Euler:

> **Rumus Daya Dukung Kritis Tekuk Kolom:**
> **Pe = (π² × E × I) / (k × L)²**
>
> **Keterangan Variabel:**
> - **Pe** = Beban kritis tekuk aksial (Kapasitas pikul kolom sebelum meliuk)
> - **E** = Modulus Elastisitas Baja (200.000 MPa)
> - **I** = Momen Inersia penampang minimum (Nilai terendah antara Ix dan Iy)
> - **k × L** = Panjang tekuk bebas efektif kolom tanpa pengekang lateral

Pada penampang WF (sebagai contoh WF 300×150), nilai momen inersia sumbu lemah (Iy) hanya berkisar antara **10% hingga 15%** dari nilai momen inersia sumbu kuatnya (Ix). Akibatnya, ketika kolom WF dibebani gaya tekan vertikal dari lantai atas sekaligus menerima gaya lateral (angin atau dorongan gempa), kolom tersebut akan melengkung dan terpelintir ke arah sumbu lemahnya (*out-of-plane buckling*).

Sebaliknya, pada H-Beam 250×250, flens selebar 250 mm memberikan nilai inersia sumbu lemah yang masif, sehingga kapasitas penahan tekuk dari segala arah menjadi kokoh dan simetris tanpa harus menambahkan terlalu banyak batang pengaku (*bracing*).

---

## 4. Studi Kasus Lapangan: Keruntuhan Tekuk Kolom Gudang Logistik Cikarang

### Latar Belakang Proyek:
Pada pembangunan kompleks pergudangan logistik seluas 2.400 m² di kawasan industri Jababeka Cikarang, gambar perencanaan arsitektural dan struktur mensyaratkan kolom utama menggunakan **H-Beam 250×250×9×14 mm** dengan bentang portal antar-kolom 24 meter dan tinggi kolom bebas 7,2 meter.

### Modifikasi Tanpa Koordinasi Konsultan:
Demi menekan biaya pengadaan material di awal, pihak pemborong mengganti profil kolom dengan **WF 300×150×6.5×9 mm** dengan alasan bobot per meter lari WF 300×150 adalah 36,7 kg/m, sedangkan H-Beam 250×250 adalah 72,4 kg/m (hemat tonase hampir 50%).

### Bencana Rekayasa:
Ketika atap spandek selesai terpasang dan sistem pendingin serta crane *overhead monorail* dipasang di struktur portal, terjadi hembusan angin kencang pada ketinggian dinding gudang. Profil kolom WF mengalami deformasi torsi puntir sebesar 48 mm ke arah samping luar (*lateral-torsional buckling*). Sambungan baut pengikat flens di pelat landasan (*base plate*) mulai mengalami dislokasi dan meretakkan *pedestal* beton cor.

### Solusi Perbaikan & Biaya Pembengkakan:
1. Proyek dihentikan total oleh konsultan manajemen konstruksi selama 18 hari kerja.
2. Pihak kontraktor diwajibkan melakukan perkuatan struktur (*retrofitting*) dengan mengelas pelat pengaku (*stiffener plates*) interval 1,2 meter di sepanjang badan kolom serta menambahkan portal ikatan angin horizontal ganda (*fly bracing*).
3. Biaya pengelasan posisi sulit (*overhead welding*), sewa alat angkat *boom lift*, dan denda keterlambatan serah terima proyek menelan biaya 3,2 kali lipat lebih tinggi dibandingkan selisih harga awal material H-Beam.

---

## 5. Prosedur Quality Control (QC) & Penerimaan Material Baja di Lapangan

Sebelum menurunkan profil baja WF maupun H-Beam dari armada trailer di lokasi proyek, tim *Quality Control* (QC) pelaksana wajib melakukan verifikasi berikut:

1. **Pemeriksaan Cap Timbul (Marking Emboss Pabrik)**:
   - Pastikan terdapat cap timbul asli produsen baja terverifikasi (misalnya: PT. Krakatau Steel / PT. Gunung Garuda) yang mencantumkan ukuran dimensi nominal, nomor peleburan (*heat number*), dan standar SNI.
2. **Pemeriksaan Toleransi Dimensi Sesuai SNI 2052 / SNI 0329**:
   - Toleransi tinggi penampang (H): Maksimal deviasi ± 2,0 mm untuk tinggi di bawah 400 mm.
   - Toleransi tebal sayap (tf) dan badan (tw): Maksimal variasi ketebalan di bawah ± 0,7 mm (hindari baja banci non-standar).
3. **Pencocokan Mill Certificate Pabrik**:
   - Cek nilai kuat leleh (fy ≥ 240 MPa untuk mutu BJ 37 / ASTM A36) dan kuat tarik (fu ≥ 370 MPa) pada sertifikat uji laboratorium pabrik asli yang menyertai surat jalan.
4. **Inspeksi Kelurusan Batang (Sweep & Camber)**:
   - Batang baja tidak boleh melengkung melebihi batas kelurusan L/1000 akibat kesalahan ikatan sling pengangkut selama perjalanan ekspedisi.

---

## 6. Rekomendasi Aplikasi Struktural Terbaik

- **Gunakan H-Beam**: Untuk kolom utama bertingkat, tiang penyangga crane pabrik, kolom mezanin beban forklift, dan struktur dinding penahan tanah (*soldier pile*).
- **Gunakan WF**: Untuk balok induk (*girder*), balok anak lantai komposit, rafter kuda-kuda lengkung atau pelana bentang 12 hingga 36 meter, dan balok konsol kantilever.
