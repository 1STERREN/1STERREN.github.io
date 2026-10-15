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
