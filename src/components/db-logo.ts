class DBLogo extends HTMLElement {
  private built = false;

  connectedCallback() {
    if (this.built) return;
    this.built = true;

    const size = parseInt(this.getAttribute('size') || '40', 10);
    const hero = this.hasAttribute('hero');

    const root = document.createElement('span');
    root.className = hero ? 'db-mark db-mark--hero' : 'db-mark';
    root.setAttribute('aria-hidden', 'true');

    const px = hero ? Math.max(size, 160) : size;
    root.style.setProperty('--db-size', `${px}px`);

    const d = document.createElement('span');
    d.className = 'db-mark__d';
    d.textContent = 'd';

    const b = document.createElement('span');
    b.className = 'db-mark__b';
    b.textContent = 'B';

    root.appendChild(d);
    root.appendChild(b);
    this.appendChild(root);
  }
}

if (
  typeof window !== 'undefined' &&
  typeof customElements !== 'undefined' &&
  !customElements.get('db-logo')
) {
  customElements.define('db-logo', DBLogo);
}

export {};
