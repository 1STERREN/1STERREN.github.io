import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://serbaniagajaya.co.id',
  integrations: [tailwind({ applyBaseStyles: false })],
  compressHTML: true
});
