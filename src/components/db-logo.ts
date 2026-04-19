const SVG_NS = 'http://www.w3.org/2000/svg';

class DBLogo extends HTMLElement {
  private built = false;
  private wave: SVGPathElement | null = null;
  private viewW = 96;
  private viewH = 40;
  private hero = false;
  private amp = 1;
  private targetAmp = 1;
  private t0 = 0;
  private raf = 0;

  connectedCallback() {
    if (this.built) return;
    this.built = true;

    const size = parseInt(this.getAttribute('size') || '40', 10);
    this.hero = this.hasAttribute('hero');

    const W = this.hero ? 600 : 96;
    const H = this.hero ? 220 : 40;
    this.viewW = W;
    this.viewH = H;

    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('width', this.hero ? '100%' : String(size * 2.4));
    svg.setAttribute('height', this.hero ? 'auto' : String(size));
    svg.style.overflow = 'visible';
    svg.style.display = 'block';

    const uid = Math.random().toString(36).slice(2, 7);
    const defs = document.createElementNS(SVG_NS, 'defs');
    defs.innerHTML = `
      <filter id="g-${uid}" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="${this.hero ? 2.4 : 1}" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>`;
    svg.appendChild(defs);

    const base = document.createElementNS(SVG_NS, 'line');
    base.setAttribute('x1', '0');
    base.setAttribute('x2', String(W));
    base.setAttribute('y1', String(H / 2));
    base.setAttribute('y2', String(H / 2));
    base.setAttribute('stroke', 'currentColor');
    base.setAttribute('stroke-opacity', '0.12');
    base.setAttribute('stroke-dasharray', '2 4');
    svg.appendChild(base);

    const top = H * 0.1;
    const xTop = H * 0.38;
    const bot = H * 0.9;
    const sw = this.hero ? 3 : 1.8;

    const bowlR = (bot - xTop) / 2;
    const dCx = W * 0.15;
    const dCy = xTop + bowlR;
    const dStemX = dCx + bowlR;

    const g = document.createElementNS(SVG_NS, 'g');
    g.setAttribute('filter', `url(#g-${uid})`);
    g.setAttribute('stroke', 'var(--color-accent)');
    g.setAttribute('stroke-width', String(sw));
    g.setAttribute('stroke-linecap', 'round');
    g.setAttribute('fill', 'none');
    svg.appendChild(g);

    const dBowl = document.createElementNS(SVG_NS, 'circle');
    dBowl.setAttribute('cx', String(dCx));
    dBowl.setAttribute('cy', String(dCy));
    dBowl.setAttribute('r', String(bowlR));
    g.appendChild(dBowl);

    const dStem = document.createElementNS(SVG_NS, 'line');
    dStem.setAttribute('x1', String(dStemX));
    dStem.setAttribute('x2', String(dStemX));
    dStem.setAttribute('y1', String(top));
    dStem.setAttribute('y2', String(bot));
    g.appendChild(dStem);

    const bStemX = W * 0.48;
    const bH = bot - top;
    const junction = top + bH * 0.52;
    const bumpW = this.hero ? bH * 0.44 : bH * 0.48;

    const bStem = document.createElementNS(SVG_NS, 'line');
    bStem.setAttribute('x1', String(bStemX));
    bStem.setAttribute('x2', String(bStemX));
    bStem.setAttribute('y1', String(top));
    bStem.setAttribute('y2', String(bot));
    g.appendChild(bStem);

    const upperRx = bumpW * 0.88;
    const upper = document.createElementNS(SVG_NS, 'path');
    upper.setAttribute(
      'd',
      `M ${bStemX} ${top} ` +
        `C ${bStemX + upperRx * 1.15} ${top}, ` +
        `  ${bStemX + upperRx * 1.15} ${junction}, ` +
        `  ${bStemX} ${junction}`,
    );
    g.appendChild(upper);

    const lowerRx = bumpW * 1.1;
    const lower = document.createElementNS(SVG_NS, 'path');
    lower.setAttribute(
      'd',
      `M ${bStemX} ${junction} ` +
        `C ${bStemX + lowerRx * 1.15} ${junction}, ` +
        `  ${bStemX + lowerRx * 1.15} ${bot}, ` +
        `  ${bStemX} ${bot}`,
    );
    g.appendChild(lower);

    const wave = document.createElementNS(SVG_NS, 'path');
    wave.setAttribute('fill', 'none');
    wave.setAttribute('stroke', 'var(--color-accent)');
    wave.setAttribute('stroke-width', String(this.hero ? 1.8 : 1.1));
    wave.setAttribute('stroke-linecap', 'round');
    wave.setAttribute('opacity', String(this.hero ? 0.8 : 0.65));
    g.appendChild(wave);
    this.wave = wave;

    const tickL = document.createElementNS(SVG_NS, 'line');
    tickL.setAttribute('x1', '2');
    tickL.setAttribute('x2', '2');
    tickL.setAttribute('y1', String(H * 0.28));
    tickL.setAttribute('y2', String(H * 0.72));
    tickL.setAttribute('stroke', 'var(--color-accent)');
    tickL.setAttribute('opacity', '0.6');
    svg.appendChild(tickL);
    const tickR = tickL.cloneNode() as SVGLineElement;
    tickR.setAttribute('x1', String(W - 2));
    tickR.setAttribute('x2', String(W - 2));
    svg.appendChild(tickR);

    this.appendChild(svg);

    this.t0 = performance.now();
    this.addEventListener('mouseenter', this.onEnter);
    this.addEventListener('mouseleave', this.onLeave);
    this.raf = requestAnimationFrame(this.tick);
  }

  disconnectedCallback() {
    cancelAnimationFrame(this.raf);
    this.removeEventListener('mouseenter', this.onEnter);
    this.removeEventListener('mouseleave', this.onLeave);
  }

  private onEnter = () => {
    this.targetAmp = 2.6;
  };
  private onLeave = () => {
    this.targetAmp = 1;
  };

  private tick = (now: number) => {
    if (!this.wave) return;
    const t = (now - this.t0) / 1000;
    this.amp += (this.targetAmp - this.amp) * 0.08;
    const userAmpRaw = getComputedStyle(document.documentElement).getPropertyValue(
      '--logo-amp',
    );
    const userAmp = parseFloat(userAmpRaw) || 1;
    const A = (this.hero ? 14 : 4) * this.amp * userAmp;
    const W = this.viewW;
    const H = this.viewH;
    const cy = H / 2;
    let d = '';
    const N = this.hero ? 160 : 60;
    for (let i = 0; i <= N; i++) {
      const x = (i / N) * W;
      const env = Math.sin((i / N) * Math.PI);
      const y =
        cy +
        env *
          (A * Math.sin((i / N) * Math.PI * 5 + t * 2.2) +
            A * 0.45 * Math.sin((i / N) * Math.PI * 13 - t * 3.1) +
            A * 0.22 * Math.sin((i / N) * Math.PI * 25 + t * 5.3));
      d += (i ? 'L' : 'M') + x.toFixed(2) + ' ' + y.toFixed(2) + ' ';
    }
    this.wave.setAttribute('d', d);
    this.raf = requestAnimationFrame(this.tick);
  };
}

if (
  typeof window !== 'undefined' &&
  typeof customElements !== 'undefined' &&
  !customElements.get('db-logo')
) {
  customElements.define('db-logo', DBLogo);
}

export {};
