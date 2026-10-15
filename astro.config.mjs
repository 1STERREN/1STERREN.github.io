import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://1sterren.github.io',
  base: '/',
  integrations: [tailwind({ applyBaseStyles: false })],
  compressHTML: true
});
