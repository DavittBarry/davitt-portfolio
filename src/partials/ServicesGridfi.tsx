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

      {/* Audio Services Card */}
      <a
        href="/fi/audiopalvelut"
        className="group relative border border-neutral-800 bg-dark-100 p-8 transition-all duration-300 hover:border-cyan-400/50"
      >
        <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-y-100"></div>

        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-light text-white transition-colors group-hover:text-cyan-400">
            Audiopalvelut
          </h2>
          <span className="text-2xl text-cyan-400">♪</span>
        </div>

        <p className="mb-6 text-neutral-400">
          Ammattimaiset musiikin tuotanto-, miksaus- ja masterointipalvelut.
          Alkuperäisistä sävellyksistä kaupalliseen kiillotukseen.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Tuotanto
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Miksaus
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Masterointi
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Äänisuunnittelu
          </span>
        </div>

        <div className="mt-6 text-sm text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
          Palvelut & hinnat →
        </div>
      </a>

      {/* Original Music Card */}
      <a
        href="/fi/musiikki"
        className="group relative border border-neutral-800 bg-dark-100 p-8 transition-all duration-300 hover:border-emerald-400/50"
      >
        <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-emerald-400 transition-transform duration-300 group-hover:scale-y-100"></div>

        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-light text-white transition-colors group-hover:text-emerald-400">
            Oma musiikki
          </h2>
          <span className="text-2xl text-emerald-400">⚡</span>
        </div>

        <p className="mb-6 text-neutral-400">
          Omat sävellykseni ja julkaisuni. Elektronista, ambient- ja kokeellista
          musiikkia äänirajojen tutkimiseen.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Elektroninen
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Ambient
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Kokeellinen
          </span>
        </div>

        <div className="mt-6 text-sm text-emerald-400 opacity-0 transition-opacity group-hover:opacity-100">
          Kuuntele & tutustu →
        </div>
      </a>

      {/* Contact Card */}
      <a
        href="/fi/yhteystiedot"
        className="group relative border border-neutral-800 bg-dark-100 p-8 transition-all duration-300 hover:border-neutral-600"
      >
        <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-neutral-400 transition-transform duration-300 group-hover:scale-y-100"></div>

        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-light text-white transition-colors group-hover:text-neutral-300">
            Ota yhteyttä
          </h2>
          <span className="text-2xl text-neutral-400">@</span>
        </div>

        <p className="mb-6 text-neutral-400">
          Sijainti Helsinki, Suomi. Käytettävissä etätöihin maailmanlaajuisesti
          ja paikan päällä tehtäviin projekteihin Pohjoismaissa.
        </p>

        <div className="space-y-2">
          <p className="text-neutral-400">Keskustellaan projektistasi</p>
        </div>

        <div className="mt-6 text-sm text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100">
          Yhteystiedot →
        </div>
      </a>
    </div>
  </Section>
);

export { ServicesGridfi };
