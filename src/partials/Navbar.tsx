import type { Locale } from '@/utils/i18n';

type Props = {
  locale: Locale;
  currentPath?: string;
};

type NavItem = {
  href: string;
  label: string;
  num: string;
};

const labels = {
  en: {
    menuAria: 'Toggle navigation menu',
    homeAria: 'Davitt Barry — Home',
    items: [
      { href: '/', label: 'Home', num: '01' },
      { href: '/dev', label: 'IT & Development', num: '02' },
      { href: '/music', label: 'Music', num: '03' },
      { href: '/audio-services', label: 'Audio Engineering', num: '04' },
      { href: '/contact', label: 'Contact', num: '05' },
    ] as NavItem[],
  },
  fi: {
    menuAria: 'Avaa navigointivalikko',
    homeAria: 'Davitt Barry — Etusivu',
    items: [
      { href: '/fi/', label: 'Etusivu', num: '01' },
      { href: '/fi/dev', label: 'IT & Kehitys', num: '02' },
      { href: '/fi/musiikki', label: 'Musiikki', num: '03' },
      { href: '/fi/audiopalvelut', label: 'Äänitekniikka', num: '04' },
      { href: '/fi/yhteystiedot', label: 'Yhteystiedot', num: '05' },
    ] as NavItem[],
  },
} as const;

const normalize = (p: string) => (p.length > 1 ? p.replace(/\/$/, '') : p);

const isActive = (itemHref: string, currentPath?: string) => {
  if (!currentPath) return false;
  const a = normalize(itemHref);
  const b = normalize(currentPath);
  return a === b;
};

const Navbar = ({ locale, currentPath }: Props) => {
  const t = labels[locale];
  const homeHref = locale === 'fi' ? '/fi/' : '/';
  return (
    <header className="topnav">
      <div className="shell topnav__inner">
        <a href={homeHref} className="logo" aria-label={t.homeAria}>
          <db-logo className="logo__mark" size="40"></db-logo>
          <span className="logo__wordmark">DAVITT&nbsp;BARRY</span>
        </a>

        <div className="topnav__links">
          {t.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-num={item.num}
              className={isActive(item.href, currentPath) ? 'is-active' : ''}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="topnav__right">
          <div className="vumeter" aria-hidden="true"></div>
          <div className="lang-toggle" role="group" aria-label="Language">
            <a
              href="#"
              data-lang="en"
              className={`lang-switch ${locale === 'en' ? 'is-active' : ''}`}
            >
              EN
            </a>
            <a
              href="#"
              data-lang="fi"
              className={`lang-switch ${locale === 'fi' ? 'is-active' : ''}`}
            >
              FI
            </a>
          </div>

          <button
            className="topnav__burger p-2 text-[color:var(--color-text-dim)] hover:text-[color:var(--color-accent)]"
            id="mobile-menu-button"
            type="button"
            aria-label={t.menuAria}
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mobile-drawer" id="mobile-menu">
        <div className="mobile-drawer__inner">
          {t.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-num={item.num}
              className={isActive(item.href, currentPath) ? 'is-active' : ''}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              var btn = document.getElementById('mobile-menu-button');
              var menu = document.getElementById('mobile-menu');
              if (btn && menu) {
                btn.addEventListener('click', function () {
                  var open = menu.classList.toggle('is-open');
                  btn.setAttribute('aria-expanded', String(open));
                });
              }

              var vumeter = document.querySelector('.topnav .vumeter');
              if (vumeter && !vumeter.dataset.built) {
                vumeter.dataset.built = '1';
                var N = 5;
                for (var i = 0; i < N; i++) {
                  var s = document.createElement('span');
                  s.style.height = '6px';
                  vumeter.appendChild(s);
                }
                var bars = vumeter.querySelectorAll('span');
                var t0 = performance.now();
                function tick(now) {
                  var t = (now - t0) / 1000;
                  bars.forEach(function (b, i) {
                    var v = 0.4 + 0.6 * Math.abs(Math.sin(t * 2.4 + i * 0.7) + 0.3 * Math.sin(t * 5.1 + i));
                    var hi = i >= 3;
                    b.style.height = (4 + v * 16).toFixed(1) + 'px';
                    b.style.background = v > 0.8 && hi
                      ? 'var(--color-accent)'
                      : v > 0.55
                        ? 'oklch(from var(--color-accent) l c h / 0.6)'
                        : 'var(--color-line)';
                    b.style.boxShadow = (v > 0.8 && hi) ? '0 0 6px var(--color-accent)' : 'none';
                  });
                  requestAnimationFrame(tick);
                }
                requestAnimationFrame(tick);
              }

              var langMap = {
                '/': '/fi/',
                '/dev': '/fi/dev',
                '/audio-services': '/fi/audiopalvelut',
                '/music': '/fi/musiikki',
                '/contact': '/fi/yhteystiedot',
                '/privacy': '/tietosuoja',
                '/privacy/': '/tietosuoja',
                '/fi/': '/',
                '/fi/dev': '/dev',
                '/fi/audiopalvelut': '/audio-services',
                '/fi/musiikki': '/music',
                '/fi/yhteystiedot': '/contact',
                '/tietosuoja': '/privacy',
                '/tietosuoja/': '/privacy'
              };

              document.querySelectorAll('.lang-switch').forEach(function (link) {
                link.addEventListener('click', function (e) {
                  e.preventDefault();
                  var targetLang = e.currentTarget.dataset.lang;
                  var currentPath = window.location.pathname;
                  var newPath = currentPath;

                  if (currentPath.includes('/posts/') || currentPath.includes('/posts-fi/')) {
                    newPath = targetLang === 'fi' ? '/fi/' : '/';
                  } else if (currentPath === '/tietosuoja' || currentPath === '/tietosuoja/') {
                    newPath = targetLang === 'en' ? '/privacy' : '/tietosuoja';
                  } else if (currentPath === '/privacy' || currentPath === '/privacy/') {
                    newPath = targetLang === 'fi' ? '/tietosuoja' : '/privacy';
                  } else if (targetLang === 'fi' && !currentPath.startsWith('/fi')) {
                    newPath = langMap[currentPath] || '/fi' + currentPath;
                  } else if (targetLang === 'en' && currentPath.startsWith('/fi')) {
                    newPath = langMap[currentPath] || currentPath.replace('/fi', '');
                  }

                  window.location.href = newPath + window.location.hash;
                });
              });
            })();
          `,
        }}
      />
    </header>
  );
};

export { Navbar };
