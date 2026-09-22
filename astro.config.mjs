// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://danatcomputers.com',
  output: 'static',
  integrations: [sitemap()],
  image: {
    // AVIF/WebP generation happens at build time via sharp.
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
