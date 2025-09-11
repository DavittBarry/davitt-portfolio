import { Section } from 'astro-boilerplate-components';

const ServicesGridfi = () => (
  <Section>
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
      {/* Web Development Card */}
      <a
        href="/fi/dev"
        className="group relative border border-neutral-800 bg-dark-100 p-8 transition-all duration-300 hover:border-accent/50"
      >
        <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100"></div>

        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-light text-white transition-colors group-hover:text-accent">
            Web-kehitys
          </h2>
          <span className="font-mono text-2xl text-accent">&lt;/&gt;</span>
        </div>

        <p className="mb-6 text-neutral-400">
          Full-stack kehityspalvelut responsiivisista verkkosivuista
          monimutkaisiin web-sovelluksiin. Erikoistunut moderneihin
          JavaScript-kehyksiin, WordPressiin ja räätälöityihin ratkaisuihin.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            React
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Vue
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Node.js
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            WordPress
          </span>
        </div>

        <div className="mt-6 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
          Näytä portfolio & CV →
        </div>
      </a>

      {/* Music Production Card */}
      <a
        href="/fi/musiikki"
        className="group relative border border-neutral-800 bg-dark-100 p-8 transition-all duration-300 hover:border-cyan-400/50"
      >
        <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-y-100"></div>

        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-light text-white transition-colors group-hover:text-cyan-400">
            Musiikin tuotanto
          </h2>
          <span className="text-2xl text-cyan-400">♪</span>
        </div>

        <p className="mb-6 text-neutral-400">
          Alkuperäinen musiikkisävellys, tuotanto ja äänisuunnittelu. Luon
          ainutlaatuisia äänimaisemia artisteille, elokuville ja kaupallisille
          projekteille.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Sävellys
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Äänisuunnittelu
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Elektroninen
          </span>
        </div>

        <div className="mt-6 text-sm text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
          Kuuntele & tutustu →
        </div>
      </a>

      {/* Mixing & Mastering Card */}
      <a
        href="/fi/audio"
        className="group relative border border-neutral-800 bg-dark-100 p-8 transition-all duration-300 hover:border-emerald-400/50"
      >
        <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-emerald-400 transition-transform duration-300 group-hover:scale-y-100"></div>

        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-light text-white transition-colors group-hover:text-emerald-400">
            Miksaus & masterointi
          </h2>
          <span className="text-2xl text-emerald-400">⚡</span>
        </div>

        <p className="mb-6 text-neutral-400">
          Ammattimaiset äänen miksaus- ja masterointipalvelut. Tuon selkeyttä,
          syvyyttä ja kaupallista kiillotusta kappaleisiisi.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Miksaus
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Masterointi
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Äänen restaurointi
          </span>
        </div>

        <div className="mt-6 text-sm text-emerald-400 opacity-0 transition-opacity group-hover:opacity-100">
          Palvelut & hinnat →
        </div>
      </a>

      {/* Contact/About Card */}
      <div className="group relative border border-neutral-800 bg-dark-100 p-8 transition-all duration-300 hover:border-neutral-600">
        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-light text-white">Ota yhteyttä</h2>
          <span className="text-2xl text-neutral-400">@</span>
        </div>

        <p className="mb-6 text-neutral-400">
          Sijainti Turku, Suomi. Käytettävissä etätöihin maailmanlaajuisesti ja
          paikan päällä tehtäviin projekteihin Pohjoismaissa.
        </p>

        <div className="space-y-2">
          <a
            href="mailto:davittbarry333@gmail.com"
            className="block text-neutral-400 transition-colors hover:text-accent"
          >
            davittbarry333@gmail.com
          </a>
          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/DavittBarry"
              className="text-neutral-400 transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/davittbarry/"
              className="text-neutral-400 transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { ServicesGridfi };
