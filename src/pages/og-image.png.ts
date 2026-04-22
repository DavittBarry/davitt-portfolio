import type { APIRoute } from 'astro';
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#5ec9ef" stop-opacity="0.18"/>
      <stop offset="60%" stop-color="#5ec9ef" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#5ec9ef" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5ec9ef" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
    <filter id="dGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="#111317"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#5ec9ef" stroke-opacity="0.22" stroke-width="1"/>

  <g transform="translate(60 80)">
    <text x="0" y="0" font-family="'JetBrains Mono', ui-monospace, monospace" font-size="16" letter-spacing="2" fill="#5ec9ef">● 00 / PORTFOLIO</text>
  </g>
  <g transform="translate(1140 96)" text-anchor="end">
    <text font-family="'JetBrains Mono', ui-monospace, monospace" font-size="14" letter-spacing="2" fill="#8a8e96">EST. 2005 · HELSINKI</text>
  </g>

  <g transform="translate(210 360)">
    <text x="0" y="0" font-family="'Instrument Serif', Georgia, serif" font-style="italic" font-size="260" fill="#5ec9ef" filter="url(#dGlow)">d</text>
    <text x="140" y="0" font-family="'Instrument Serif', Georgia, serif" font-style="italic" font-size="260" fill="#f2ede4">B</text>
    <line x1="340" y1="-180" x2="340" y2="10" stroke="#3a3d44" stroke-width="1.5"/>
    <text x="380" y="-40" font-family="'JetBrains Mono', ui-monospace, monospace" font-size="54" letter-spacing="6" fill="#f2ede4">DAVITT</text>
    <text x="380" y="20" font-family="'JetBrains Mono', ui-monospace, monospace" font-size="54" letter-spacing="6" fill="#f2ede4">BARRY</text>
  </g>

  <g transform="translate(60 540)">
    <text font-family="'JetBrains Mono', ui-monospace, monospace" font-size="18" letter-spacing="3" fill="#c9cdd4">IT &amp; DEVELOPMENT · MUSIC · AUDIO ENGINEERING</text>
  </g>
  <g transform="translate(1140 560)" text-anchor="end">
    <text font-family="'JetBrains Mono', ui-monospace, monospace" font-size="16" letter-spacing="2" fill="#5ec9ef">davittbarry.dev ↗</text>
  </g>
</svg>`;

export const GET: APIRoute = async () => {
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), {
    headers: {
      'content-type': 'image/png',
      'cache-control': 'public, max-age=31536000, immutable',
    },
  });
};
