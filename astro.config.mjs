import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { astroImageTools } from 'astro-imagetools';

export default defineConfig({
  // Base path for the site. Useful if deploying to a subdirectory.
  // base: '.',

  // The actual URL of the deployed site
  site: 'http://localhost:3000/',

  routes: {
    '/': { page: '/index.astro' },
    '/fi/': { page: '/fi/index.astro' },
    '/about': { page: '/about.astro' },
    '/fi/about': { page: '/about-fi.astro' },
    '/fi/posts/forth-postfi': { page: '/posts-fi/forth-postfi.astro' },
  },

  // Markdown settings
  markdown: {
    // Syntax highlighting theme
    shikiConfig: {
      theme: 'monokai',
    },
  },

  // Integrations and plugins
  integrations: [
    react(),
    tailwind({}),
    sitemap(),
    robotsTxt(),
    astroImageTools,
  ],
});
