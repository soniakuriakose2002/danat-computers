// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://danatcomputers.com',
  output: 'static',
  integrations: [
    // The /lab-* routes are internal prototypes, not pages of the site.
    sitemap({ filter: (page) => !page.includes('/lab-') }),
  ],
  image: {
    // AVIF/WebP generation happens at build time via sharp.
    responsiveStyles: true,
  },
  /* The concept page is a standalone file in public/, not an Astro
     page. It lives at /concept.html rather than /concept/index.html
     because `astro dev` does not resolve a directory to its index the
     way the built site does — and redirecting /concept/ AT that
     directory collides with the file itself, which Astro warns will
     become a hard error. A flat file collides with nothing. */
  redirects: {
    '/concept': '/concept.html',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    optimizeDeps: {
      /* three's jsm helpers are deep ESM paths. Vite only pre-bundles
         what it finds by crawling entry points at boot, so a dev server
         that was already running when three was installed — or one
         started before /lab-3d is ever visited — serves that route with
         a module that never evaluates, and the canvas stays blank with
         no error on the page. Naming them here makes it deterministic. */
      include: [
        'three',
        'three/examples/jsm/geometries/RoundedBoxGeometry.js',
        'three/examples/jsm/environments/RoomEnvironment.js',
      ],
    },
  },
});
