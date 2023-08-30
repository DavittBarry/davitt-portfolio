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
  site: 'https://davittportfolio.com/',

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
