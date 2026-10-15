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
