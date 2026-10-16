/**
 * Pemetaan foto material dan artikel autentik CV. Serba Niaga Jaya
 * Seluruh aset berasal dari dokumentasi lapangan pengadaan material konstruksi riil.
 */

export const articlePhotoMap: Record<string, string> = {
  'bata-ringan-hebel-vs-bata-merah-jumbo': '/images/foto-bata-hebel.jpg',
  'batu-split-dan-agregat-base-course-standar-sni': '/images/foto-batu-split-pondasi.jpg',
  'besi-beton-ulir-bjts-420b-vs-polos-tp280': '/images/foto-rebar-mat.jpg',
  'karakteristik-pasir-cor-pasang-urug': '/images/foto-pasir-dump-truck.jpg',
  'metode-pengaspalan-hotmix-acwc-acbc': '/images/foto-aspal-hotmix.jpg',
  'panduan-mutu-beton-ready-mix-k225-k500': '/images/foto-cor-slab.jpg',
  'precast-u-ditch-vs-batu-kali': '/images/foto-box-culvert.jpg',
  'profil-baja-wf-vs-h-beam': '/images/foto-baja-wf.jpg',
  'sistem-atap-alderon-upvc-vs-spandek-galvalum': '/images/foto-hollow-galvanis.jpg',
};

export const categoryDefaultPhotos: Record<string, string> = {
  beton: '/images/foto-cor-mixer-chute.jpg',
  baja: '/images/foto-baja-wf.jpg',
  aspal: '/images/foto-aspal-hotmix.jpg',
  batuan: '/images/foto-pasir-dump-truck.jpg',
};

/**
 * Mencocokkan foto material paling presisi sesuai nama spesifik produk
 */
export function getMaterialPhoto(category: string, materialName: string): string {
  const n = materialName.toLowerCase();
  const cat = category.toLowerCase();

  if (cat === 'beton') {
    if (n.includes('u-ditch') || n.includes('buis') || n.includes('kanstin')) {
      return '/images/foto-precast-uditch.jpg';
    }
    if (n.includes('box culvert') || n.includes('cover')) {
      return '/images/foto-box-culvert.jpg';
    }
    if (n.includes('pompa') || n.includes('concrete pump')) {
      return '/images/foto-cor-mixer-chute.jpg';
    }
    if (n.includes('k-350') || n.includes('k-400') || n.includes('k-500') || n.includes('rigid') || n.includes('jalan')) {
      return '/images/foto-cor-pavement.jpg';
    }
    if (n.includes('kolom') || n.includes('balok') || n.includes('struktural')) {
      return '/images/foto-cor-kolom.jpg';
    }
    if (n.includes('slump') || n.includes('uji')) {
      return '/images/foto-uji-slump.jpg';
    }
    if (n.includes('paving') || n.includes('batako')) {
      return '/images/foto-batako.jpg';
    }
    return '/images/foto-cor-slab.jpg';
  }

  if (cat === 'baja') {
    if (n.includes('wiremesh')) {
      if (n.includes('m6') || n.includes('rol')) return '/images/foto-wiremesh-rol.jpg';
      return '/images/foto-wiremesh-road.jpg';
    }
    if (n.includes('ulir') || n.includes('bjts')) {
      return '/images/foto-rebar-mat.jpg';
    }
    if (n.includes('polos') || n.includes('tp 280') || n.includes('tp280')) {
      return '/images/foto-rebar-bundle.jpg';
    }
    if (n.includes('wf') || n.includes('i-beam') || n.includes('h-beam') || n.includes('wide flange')) {
      if (n.includes('armada') || n.includes('trailer')) return '/images/foto-trailer-wf.jpg';
      return '/images/foto-baja-wf.jpg';
    }
    if (n.includes('hollow') || n.includes('galvanis') || n.includes('pipa kotak')) {
      return '/images/foto-hollow-galvanis.jpg';
    }
    if (n.includes('kanal c') || n.includes('c-channel') || n.includes('cnp')) {
      return '/images/foto-c-channel.jpg';
    }
    if (n.includes('pipa') || n.includes('pvc')) {
      return '/images/foto-pipa-pvc.jpg';
    }
    if (n.includes('alderon') || n.includes('spandek') || n.includes('atap')) {
      return '/images/foto-hollow-galvanis.jpg';
    }
    return '/images/foto-baja-wf.jpg';
  }

  if (cat === 'aspal') {
    if (n.includes('drum') || n.includes('pen 60/70') || n.includes('curah')) {
      return '/images/foto-aspal-drum.jpg';
    }
    if (n.includes('tack coat') || n.includes('emulsi css-1h')) {
      return '/images/foto-tack-coat.jpg';
    }
    if (n.includes('prime coat')) {
      return '/images/foto-prime-coat.jpg';
    }
    if (n.includes('sprayer') || n.includes('distributor') || n.includes('jasa')) {
      return '/images/foto-aspal-sprayer.jpg';
    }
    if (n.includes('tangki') || n.includes('amp') || n.includes('storage')) {
      return '/images/foto-aspal-tank-amp.jpg';
    }
    if (n.includes('core drill') || n.includes('uji') || n.includes('laboratorium')) {
      return '/images/foto-aspal-core-drill.jpg';
    }
    return '/images/foto-aspal-hotmix.jpg';
  }

  if (cat === 'batuan') {
    if (n.includes('hebel') || n.includes('bata ringan')) {
      return '/images/foto-bata-hebel.jpg';
    }
    if (n.includes('bata merah') || n.includes('merah jumbo')) {
      return '/images/foto-bata-merah.jpg';
    }
    if (n.includes('batako') || n.includes('paving')) {
      return '/images/foto-batako.jpg';
    }
    if (n.includes('pasir')) {
      return '/images/foto-pasir-dump-truck.jpg';
    }
    if (n.includes('batu kali') || n.includes('batu belah') || n.includes('pondasi batu')) {
      return '/images/foto-batu-kali-truck.jpg';
    }
    if (n.includes('split') || n.includes('makadam') || n.includes('agregat') || n.includes('base course') || n.includes('sirdam')) {
      return '/images/foto-batu-split-pondasi.jpg';
    }
    return '/images/foto-pasir-dump-truck.jpg';
  }

  return categoryDefaultPhotos[cat] || '/images/foto-cor-mixer-chute.jpg';
}
