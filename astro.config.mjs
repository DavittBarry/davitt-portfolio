import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://davittbarry.com/',

  markdown: {
    shikiConfig: {
      theme: 'monokai',
    },
  },

  integrations: [react(), tailwind({}), sitemap(), robotsTxt()],
});
