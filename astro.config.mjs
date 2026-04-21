import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://davittbarry.com/',

  markdown: {
    shikiConfig: {
      theme: 'monokai',
    },
  },

  integrations: [sitemap(), robotsTxt()],

  vite: {
    plugins: [tailwindcss()],
  },
});
