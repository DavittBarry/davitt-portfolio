import { Section } from 'astro-boilerplate-components';

const Navbarfi = () => {
  return (
    <div className="border-b border-slate-700 bg-slate-800">
      <Section>
        <div className="flex items-center justify-between p-4 md:px-0">
          <a
            href="/fi/"
            className="text-3xl font-medium text-white transition-colors hover:text-accent md:text-2xl"
          >
            dB
          </a>

          <nav className="flex items-center">
            {/* Desktop Menu */}
            <div className="hidden items-center gap-6 md:flex">
              <a
                href="/fi/"
                className="text-base font-normal text-slate-300 transition-colors hover:text-cyan-400 lg:text-lg"
              >
                Etusivu
              </a>
              <a
                href="/fi/dev"
                className="text-base font-normal text-slate-300 transition-colors hover:text-accent lg:text-lg"
              >
                IT & Kehitys
              </a>
              <a
                href="/fi/musiikki"
                className="text-base font-normal text-slate-300 transition-colors hover:text-emerald-400 lg:text-lg"
              >
                Musiikki
              </a>
              <a
                href="/fi/audiopalvelut"
                className="text-base font-normal text-slate-300 transition-colors hover:text-cyan-400 lg:text-lg"
              >
                Äänitekniikka
              </a>
              <a
                href="/fi/yhteystiedot"
                className="text-base font-normal text-slate-300 transition-colors hover:text-neutral-300 lg:text-lg"
              >
                Yhteystiedot
              </a>
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

            {/* Mobile Menu Button */}
            <button
              className="p-2 text-slate-300 hover:text-accent md:hidden"
              id="mobile-menu-button"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

        {/* Mobile Menu */}
        <div className="hidden md:hidden" id="mobile-menu">
          <div className="flex flex-col gap-4 border-t border-slate-600 py-4 text-center">
            <a
              href="/fi/"
              className="py-2 text-slate-300 transition-colors hover:text-cyan-400"
            >
              Etusivu
            </a>
            <a
              href="/fi/dev"
              className="py-2 text-slate-300 transition-colors hover:text-accent"
            >
              IT & Kehitys
            </a>
            <a
              href="/fi/musiikki"
              className="py-2 text-slate-300 transition-colors hover:text-emerald-400"
            >
              Musiikki
            </a>
            <a
              href="/fi/audiopalvelut"
              className="py-2 text-slate-300 transition-colors hover:text-cyan-400"
            >
              Äänitekniikka
            </a>
            <a
              href="/fi/yhteystiedot"
              className="py-2 text-slate-300 transition-colors hover:text-neutral-300"
            >
              Yhteystiedot
            </a>
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
            document.getElementById('mobile-menu-button')?.addEventListener('click', () => {
              document.getElementById('mobile-menu')?.classList.toggle('hidden');
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
                
                // Check if we're on tietosuoja page specifically
                if (currentPath === '/tietosuoja' || currentPath === '/tietosuoja/') {
                  newPath = targetLang === 'en' ? '/privacy' : '/tietosuoja';
                } else if (currentPath === '/privacy' || currentPath === '/privacy/') {
                  newPath = targetLang === 'fi' ? '/tietosuoja' : '/privacy';
                } else if (targetLang === 'fi' && !currentPath.startsWith('/fi')) {
                  newPath = langMap[currentPath] || '/fi' + currentPath;
                } else if (targetLang === 'en' && currentPath.startsWith('/fi')) {
                  newPath = langMap[currentPath] || currentPath.replace('/fi', '');
                }
                
                window.location.href = newPath;
              });
            });
          `,
          }}
        />
      </Section>
    </div>
  );
};

export { Navbarfi };
