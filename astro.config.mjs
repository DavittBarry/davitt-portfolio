import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { astroImageTools } from 'astro-imagetools';

export default defineConfig({
  site: 'https://davittbarry.net/',

  routes: {
    '/': { page: '/index.astro' },
    '/fi/': { page: '/fi/index.astro' },
    '/about': { page: '/about.astro' },
    '/fi/about': { page: '/about-fi.astro' },
    '/fi/posts/forth-postfi': { page: '/posts-fi/forth-postfi.astro' },
  },

  markdown: {
    shikiConfig: {
      theme: 'monokai',
    },
  },

  integrations: [
    react(),
    tailwind({}),
    sitemap(),
    robotsTxt(),
    astroImageTools,
  ],
});
