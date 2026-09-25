// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://danatcomputers.com',
  output: 'static',
  integrations: [
    // /lab-3d is an internal prototype, not a page of the site.
    sitemap({ filter: (page) => !page.includes('/lab-3d') }),
  ],
  image: {
    // AVIF/WebP generation happens at build time via sharp.
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
