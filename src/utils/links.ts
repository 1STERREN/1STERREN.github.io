export const OFFICIAL_PHONE = "628212226175";
export const OFFICIAL_PHONE_DISPLAY = "0821-2226-175";
export const OFFICIAL_EMAIL = "cvserbaniagajaya@gmail.com";
export const OFFICIAL_ADDRESS = "Jl. Raya Lenteng Agung Blok Anyar No.48, RT.7/RW.2, Lenteng Agung, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12630";


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
