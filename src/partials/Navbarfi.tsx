import { Section } from 'astro-boilerplate-components';

const Navbarfi = () => {
  return (
    <div className="border-b border-neutral-900 bg-neutral-950">
      <Section>
        <div className="flex items-center justify-between py-4">
          <a
            href="/fi/"
            className="text-xl font-medium text-white transition-colors hover:text-accent"
          >
            dB
          </a>

          <nav className="flex items-center">
            {/* Desktop Menu */}
            <div className="hidden items-center gap-6 md:flex">
              <a
                href="/fi/"
                className="text-base font-normal text-neutral-400 transition-colors hover:text-cyan-400"
              >
                Etusivu
              </a>
              <a
                href="/fi/dev"
                className="text-base font-normal text-neutral-400 transition-colors hover:text-accent"
              >
                IT & Kehitys
              </a>
              <a
                href="/fi/musiikki"
                className="text-base font-normal text-neutral-400 transition-colors hover:text-emerald-400"
              >
                Musiikki
              </a>
              <a
                href="/fi/audiopalvelut"
                className="text-base font-normal text-neutral-400 transition-colors hover:text-cyan-400"
              >
                Äänitekniikka
              </a>
              <a
                href="/fi/yhteystiedot"
                className="text-base font-normal text-neutral-400 transition-colors hover:text-neutral-300"
              >
                Yhteystiedot
              </a>
              <div className="ml-4 flex items-center space-x-2 border border-neutral-800 bg-neutral-900/50 px-3 py-1 transition-colors hover:border-accent">
                <a
                  href="#"
                  data-lang="en"
                  className="lang-switch text-sm text-neutral-400 hover:text-accent"
                >
                  EN
                </a>
                <span className="text-sm text-neutral-600">/</span>
                <a
                  href="#"
                  data-lang="fi"
                  className="lang-switch text-sm text-neutral-400 hover:text-accent"
                >
                  FI
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="text-neutral-400 hover:text-accent md:hidden"
              id="mobile-menu-button"
            >
              <svg
                className="h-6 w-6"
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
          <div className="flex flex-col gap-4 border-t border-neutral-800 py-4 text-center">
            <a
              href="/fi/"
              className="py-2 text-neutral-400 transition-colors hover:text-cyan-400"
            >
              Etusivu
            </a>
            <a
              href="/fi/dev"
              className="py-2 text-neutral-400 transition-colors hover:text-accent"
            >
              IT & Kehitys
            </a>
            <a
              href="/fi/musiikki"
              className="py-2 text-neutral-400 transition-colors hover:text-emerald-400"
            >
              Musiikki
            </a>
            <a
              href="/fi/audiopalvelut"
              className="py-2 text-neutral-400 transition-colors hover:text-cyan-400"
            >
              Äänitekniikka
            </a>
            <a
              href="/fi/yhteystiedot"
              className="py-2 text-neutral-400 transition-colors hover:text-neutral-300"
            >
              Yhteystiedot
            </a>
            <div className="mt-2 flex justify-center gap-4 border-t border-neutral-800 pb-2 pt-4">
              <button
                data-lang="en"
                className="lang-switch rounded bg-neutral-900 px-4 py-2 text-neutral-400 transition-all hover:text-accent"
              >
                English
              </button>
              <button
                data-lang="fi"
                className="lang-switch rounded bg-neutral-900 px-4 py-2 text-neutral-400 transition-all hover:text-accent"
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
              '/privacy': '/fi/tietosuoja',
              '/fi/': '/',
              '/fi/dev': '/dev',
              '/fi/audiopalvelut': '/audio-services',
              '/fi/musiikki': '/music',
              '/fi/yhteystiedot': '/contact',
              '/fi/tietosuoja': '/privacy'
            };

            document.querySelectorAll('.lang-switch').forEach(link => {
              link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetLang = e.currentTarget.dataset.lang;
                const currentPath = window.location.pathname;
                
                let newPath = currentPath;
                if (targetLang === 'fi' && !currentPath.startsWith('/fi')) {
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
