/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          50: '#141414',
          100: '#1a1a1a',
          200: '#262626',
          300: '#333333',
          400: '#404040',
        },
        accent: {
          DEFAULT: '#f97316',
          hover: '#fb923c',
          muted: '#ea580c',
        },
        neon: {
          green: '#39ff14',
          yellow: '#ffff00',
          pink: '#ff006e',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
