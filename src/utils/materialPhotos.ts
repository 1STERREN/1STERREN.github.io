/**
 * Pemetaan foto material dan artikel autentik CV. Serba Niaga Jaya
 * Menggunakan aset dokumentasi riil dari folder Serba beton, Serba Besi, serba aspal, dan Serba batuan.
 */

export const articlePhotoMap: Record<string, string> = {
  'bata-ringan-hebel-vs-bata-merah-jumbo': '/images/Serba batuan/foto-bata-hebel.jpg',
  'batu-split-dan-agregat-base-course-standar-sni': '/images/Serba batuan/Batu splite.JPG',
  'besi-beton-ulir-bjts-420b-vs-polos-tp280': '/images/foto-rebar-mat.jpg',
  'karakteristik-pasir-cor-pasang-urug': '/images/foto-pasir-dump-truck.jpg',
  'metode-pengaspalan-hotmix-acwc-acbc': '/images/serba aspal/Aspal AC WC.png',
  'panduan-mutu-beton-ready-mix-k225-k500': '/images/Serba beton/foto-cor-slab.jpg',
  'precast-u-ditch-vs-batu-kali': '/images/Serba beton/Uditch.JPG',
  'profil-baja-wf-vs-h-beam': '/images/Serba Besi/Besi wf.JPG',
  'sistem-atap-alderon-upvc-vs-spandek-galvalum': '/images/Serba Besi/Alderon.JPG',
};

export const categoryDefaultPhotos: Record<string, string> = {
  beton: '/images/foto-cor-mixer-chute.jpg',
  baja: '/images/Serba Besi/Besi wf.JPG',
  aspal: '/images/serba aspal/Aspal AC WC.png',
  batuan: '/images/foto-pasir-dump-truck.jpg',
};

/**
 * Mencocokkan foto material paling presisi sesuai nama spesifik produk
 */
export function getMaterialPhoto(category: string, materialName: string): string {
  const n = materialName.toLowerCase();
  const cat = category.toLowerCase();

  if (cat === 'beton') {
    if (n.includes('cover')) {
      return '/images/Serba beton/Cover uditch.JPG';
    }
    if (n.includes('u-ditch')) {
      return '/images/Serba beton/Uditch.JPG';
    }
    if (n.includes('buis')) {
      return '/images/Serba beton/Buis beton.JPG';
    }
    if (n.includes('kanstin') || n.includes('kansteen')) {
      return '/images/Serba beton/Kansteen.WEBP';
    }
    if (n.includes('box culvert') || n.includes('box')) {
      return '/images/Serba beton/Box cluivert.PNG';
    }
    if (n.includes('paving')) {
      return '/images/Serba beton/Paving block.WEBP';
    }
    if (n.includes('pompa mini')) {
      return '/images/Serba beton/Pompa Beton Mini di Lokasi Konstruksi.png';
    }
    if (n.includes('pompa longboom') || n.includes('longboom')) {
      return '/images/Serba beton/Pompa Beton Longboom di Lokasi Proyek.png';
    }
    if (n.includes('pompa kodok') || n.includes('portable')) {
      return '/images/Serba beton/Pompa Beton Kodok_ Ringan dan Andal.png';
    }
    if (n.includes('pompa')) {
      return '/images/foto-cor-mixer-chute.jpg';
    }
    if (n.includes('k-100') || n.includes('k-125') || n.includes('k-175') || n.includes('k-200') || n.includes('kelas i')) {
      return '/images/foto-cor-pavement.jpg';
    }
    if (n.includes('k-350') || n.includes('k-400') || n.includes('k-450') || n.includes('k-500') || n.includes('kelas iii') || n.includes('kolom')) {
      return '/images/foto-cor-kolom.jpg';
    }
    if (n.includes('fly ash')) {
      return '/images/foto-cor-mixer-chute.jpg';
    }
    return '/images/Serba beton/foto-cor-slab.jpg';
  }

  if (cat === 'baja') {
    if (n.includes('brc') || n.includes('pagar')) {
      return '/images/Serba Besi/Brc.jpg';
    }
    if (n.includes('wiremesh')) {
      return '/images/Serba Besi/Wiremesh.JPG';
    }
    if (n.includes('alderon')) {
      return '/images/Serba Besi/Alderon.JPG';
    }
    if (n.includes('polycarbonate')) {
      return '/images/Serba Besi/Polycarbonate.WEBP';
    }
    if (n.includes('spandek') || n.includes('galvalum')) {
      return '/images/Serba Besi/Spandek.WEBP';
    }
    if (n.includes('genteng metal') || n.includes('baja ringan') || n.includes('atap metal')) {
      return '/images/Serba Besi/Atap Metal.JPG';
    }
    if (n.includes('aluminium') || n.includes('alumunium')) {
      return '/images/Serba Besi/Plat alumunium.JPG';
    }
    if (n.includes('plat')) {
      return '/images/Serba Besi/Plat besi.JPG';
    }
    if (n.includes('pipa galvanis') || n.includes('pipa hitam') || n.includes('gip')) {
      return '/images/Serba Besi/Pipa galvanis.WEBP';
    }
    if (n.includes('hollow')) {
      return '/images/Serba Besi/foto-hollow-galvanis.jpg';
    }
    if (n.includes('cnp') || n.includes('unp') || n.includes('canal') || n.includes('c-channel')) {
      return '/images/Serba Besi/Canal c.JPG';
    }
    if (n.includes('siku')) {
      return '/images/Serba Besi/Besi siku.AVIF';
    }
    if (n.includes('wf') || n.includes('h-beam') || n.includes('wide flange')) {
      return '/images/Serba Besi/Besi wf.JPG';
    }
    if (n.includes('ulir') || n.includes('ts 420') || n.includes('ts 280') || n.includes('bjts')) {
      return '/images/foto-rebar-mat.jpg';
    }
    if (n.includes('polos') || n.includes('tp 280') || n.includes('rebar')) {
      return '/images/foto-baja-rebar.jpg';
    }
    if (n.includes('seamless') || n.includes('pipa')) {
      return '/images/foto-pipa-pvc.jpg';
    }
    return '/images/Serba Besi/Besi wf.JPG';
  }

  if (cat === 'aspal') {
    if (n.includes('ac-wc') || n.includes('wearing course')) {
      return '/images/serba aspal/Aspal AC WC.png';
    }
    if (n.includes('ac-bc') || n.includes('binder course')) {
      return '/images/serba aspal/Aspal AC-BC.png';
    }
    if (n.includes('ac-base') || n.includes('fondasi')) {
      return '/images/serba aspal/Aspal AC-Base_ Fondasi Jalan Tangguh.png';
    }
    if (n.includes('hrs') || n.includes('rolled sheet')) {
      return '/images/serba aspal/Aspal HRS.png';
    }
    if (n.includes('lataston')) {
      return '/images/serba aspal/Aspal Lataston_ Lapisan Tipis Efisien.png';
    }
    if (n.includes('drum') || n.includes('pen 60/70') || n.includes('penetrasi') || n.includes('curah')) {
      return '/images/serba aspal/foto-aspal-drum.jpg';
    }
    if (n.includes('sprayer') || n.includes('distributor') || n.includes('jasa')) {
      return '/images/serba aspal/foto-aspal-sprayer.jpg';
    }
    if (n.includes('tack coat')) {
      return '/images/foto-tack-coat.jpg';
    }
    if (n.includes('prime coat')) {
      return '/images/foto-prime-coat.jpg';
    }
    return '/images/serba aspal/Aspal AC WC.png';
  }

  if (cat === 'batuan') {
    if (n.includes('paket dinding') || (n.includes('merah') && n.includes('hebel'))) {
      return '/images/Serba batuan/Bata merah dan hebel.WEBP';
    }
    if (n.includes('hebel') || n.includes('bata ringan') || n.includes('aac')) {
      return '/images/Serba batuan/foto-bata-hebel.jpg';
    }
    if (n.includes('bata merah') || n.includes('merah jumbo')) {
      return '/images/Serba batuan/foto-bata-merah.jpg';
    }
    if (n.includes('split') || n.includes('batu pecah')) {
      return '/images/Serba batuan/Batu splite.JPG';
    }
    if (n.includes('makadam') || n.includes('sirdam') || n.includes('base course') || n.includes('agregat')) {
      return '/images/foto-batu-split-pondasi.jpg';
    }
    if (n.includes('batu kali') || n.includes('batu belah') || n.includes('pondasi')) {
      return '/images/Serba batuan/foto-batu-kali-truck.jpg';
    }
    if (n.includes('pasir cor') || n.includes('rangkas') || n.includes('cilegon')) {
      return '/images/foto-pasir-dump-truck.jpg';
    }
    if (n.includes('pasir pasang') || n.includes('pasir urug') || n.includes('pasir')) {
      return '/images/foto-batuan-agregat.jpg';
    }
    return '/images/foto-pasir-dump-truck.jpg';
  }

  return categoryDefaultPhotos[cat] || '/images/foto-cor-mixer-chute.jpg';
}
