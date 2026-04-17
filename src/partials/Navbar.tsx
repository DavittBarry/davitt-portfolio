import { Section } from 'astro-boilerplate-components';

import type { Locale } from '@/utils/i18n';

type Props = { locale: Locale };

type NavItem = {
  href: string;
  label: string;
  hover: string;
};

const labels = {
  en: {
    menuAria: 'Toggle navigation menu',
    items: [
      { href: '/', label: 'Home', hover: 'hover:text-cyan-400' },
      { href: '/dev', label: 'IT & Development', hover: 'hover:text-accent' },
      { href: '/music', label: 'Music', hover: 'hover:text-emerald-400' },
      {
        href: '/audio-services',
        label: 'Audio Engineering',
        hover: 'hover:text-cyan-400',
      },
      { href: '/contact', label: 'Contact', hover: 'hover:text-neutral-300' },
    ] as NavItem[],
  },
  fi: {
    menuAria: 'Avaa navigointivalikko',
    items: [
      { href: '/fi/', label: 'Etusivu', hover: 'hover:text-cyan-400' },
      { href: '/fi/dev', label: 'IT & Kehitys', hover: 'hover:text-accent' },
      {
        href: '/fi/musiikki',
        label: 'Musiikki',
        hover: 'hover:text-emerald-400',
      },
      {
        href: '/fi/audiopalvelut',
        label: 'Äänitekniikka',
        hover: 'hover:text-cyan-400',
      },
      {
        href: '/fi/yhteystiedot',
        label: 'Yhteystiedot',
        hover: 'hover:text-neutral-300',
      },
    ] as NavItem[],
  },
} as const;

const Navbar = ({ locale }: Props) => {
  const t = labels[locale];
  return (
    <div className="border-b border-slate-700 bg-slate-800">
      <Section>
        <div className="flex items-center justify-between p-4 md:px-0">
          <a
            href={locale === 'fi' ? '/fi/' : '/'}
            className="text-3xl font-medium text-white transition-colors hover:text-accent md:text-2xl"
          >
            dB
          </a>

          <nav className="flex items-center">
            <div className="hidden items-center gap-6 md:flex">
              {t.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-base font-normal text-slate-300 transition-colors ${item.hover} lg:text-lg`}
                >
                  {item.label}
                </a>
              ))}
              <div className="ml-4 flex items-center space-x-2 border border-slate-600 bg-slate-700/50 px-3 py-1 transition-colors hover:border-accent lg:px-4 lg:py-1.5">
                <a
                  href="#"
                  data-lang="en"
                  className="lang-switch text-sm text-slate-300 hover:text-accent lg:text-base"
                >
                  EN
                </a>
                <span className="text-sm text-slate-500 lg:text-base">/</span>
                <a
                  href="#"
                  data-lang="fi"
                  className="lang-switch text-sm text-slate-300 hover:text-accent lg:text-base"
                >
                  FI
                </a>
              </div>
            </div>

            <button
              className="p-2 text-slate-300 hover:text-accent md:hidden"
              id="mobile-menu-button"
              type="button"
              aria-label={t.menuAria}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </div>

        <div className="hidden md:hidden" id="mobile-menu">
          <div className="flex flex-col gap-4 border-t border-slate-600 py-4 text-center">
            {t.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`py-2 text-slate-300 transition-colors ${item.hover}`}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex justify-center gap-4 border-t border-slate-600 pb-2 pt-4">
              <button
                data-lang="en"
                className="lang-switch rounded bg-slate-700 px-4 py-2 text-slate-300 transition-all hover:text-accent"
              >
                English
              </button>
              <button
                data-lang="fi"
                className="lang-switch rounded bg-slate-700 px-4 py-2 text-slate-300 transition-all hover:text-accent"
              >
                Suomi
              </button>
            </div>
          </div>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Mobile menu toggle
            document.getElementById('mobile-menu-button')?.addEventListener('click', (e) => {
              const btn = e.currentTarget;
              const menu = document.getElementById('mobile-menu');
              const isHidden = menu?.classList.toggle('hidden');
              btn.setAttribute('aria-expanded', String(!isHidden));
            });

            // Language switching with page preservation
            const langMap = {
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

            document.querySelectorAll('.lang-switch').forEach(link => {
              link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetLang = e.currentTarget.dataset.lang;
                const currentPath = window.location.pathname;

                let newPath = currentPath;

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
          `,
          }}
        />
      </Section>
    </div>
  );
};

export { Navbar };
