import { Section } from 'astro-boilerplate-components';

const ServicesGridfi = () => (
  <Section>
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-3xl font-light text-white">
        Ammatti<span className="text-accent">palvelut</span>
      </h2>
      <p className="mx-auto max-w-2xl text-neutral-400">
        Yhdistän teknisen osaamisen luovaan näkemykseen kolmella erikoisalalla
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* IT & Kehitys */}
      <a
        href="/fi/dev"
        className="group block cursor-pointer border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 transition-all hover:border-accent/50"
      >
        <div className="mb-4 font-mono text-4xl text-accent">{'</>'}</div>
        <h3 className="mb-3 text-xl font-medium text-white transition-colors group-hover:text-accent">
          IT & Kehitys
        </h3>
        <p className="mb-6 text-neutral-400">
          Full-stack web-kehityspalvelut responsiivisista verkkosivustoista
          monimutkaisiin sovelluksiin. Erikoistunut moderneihin
          JavaScript-frameworkeihin, WordPressiin ja räätälöityihin
          ratkaisuihin.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-accent">▸</span>
            React, Vue, Node.js
          </div>
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-accent">▸</span>
            WordPress, Laravel
          </div>
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-accent">▸</span>
            Tietokanta & API-suunnittelu
          </div>
        </div>
        <div className="mt-6 inline-block text-sm text-accent transition-colors group-hover:text-accent/80">
          Näytä portfolio →
        </div>
      </a>

      {/* Musiikin tuotanto */}
      <a
        href="/fi/musiikki"
        className="group block cursor-pointer border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 transition-all hover:border-emerald-400/50"
      >
        <div className="mb-4 text-4xl text-emerald-400">♪</div>
        <h3 className="mb-3 text-xl font-medium text-white transition-colors group-hover:text-emerald-400">
          Musiikki
        </h3>
        <p className="mb-6 text-neutral-400">
          Alkuperäisiä sävellyksiä ja tuotantoja eri genreissä. Alkuperäisestä
          konseptista valmiiseen masterointiin, tuoden taiteellisen vision eloon
          äänen kautta.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-emerald-400">▸</span>
            Alkuperäiset sävellykset
          </div>
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-emerald-400">▸</span>
            Sovitus & orkestraatio
          </div>
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-emerald-400">▸</span>
            Monipuolinen tuotanto
          </div>
        </div>
        <div className="mt-6 inline-block text-sm text-emerald-400 transition-colors group-hover:text-emerald-400/80">
          Kuuntele musiikkia →
        </div>
      </a>

      {/* Äänitekniikka */}
      <a
        href="/fi/audiopalvelut"
        className="group block cursor-pointer border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 transition-all hover:border-cyan-400/50"
      >
        <div className="mb-4 text-4xl text-cyan-400">⚡</div>
        <h3 className="mb-3 text-xl font-medium text-white transition-colors group-hover:text-cyan-400">
          Äänitekniikka
        </h3>
        <p className="mb-6 text-neutral-400">
          Ammattimaiset miksaus- ja masterointipalvelut. Raaka-äänityksistä
          kaupalliseen laatuun, varmistaen että kappaleesi kuulostavat parhailta
          kaikilla alustoilla.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-cyan-400">▸</span>
            Miksaus & masterointi
          </div>
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-cyan-400">▸</span>
            Äänen restaurointi
          </div>
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-cyan-400">▸</span>
            Podcast-tuotanto
          </div>
        </div>
        <div className="mt-6 inline-block text-sm text-cyan-400 transition-colors group-hover:text-cyan-400/80">
          Näytä palvelut →
        </div>
      </a>
    </div>

    <div className="mt-12 text-center">
      <p className="text-sm text-neutral-500">
        Sijainti Helsinki, Suomi • Saatavilla etä- ja paikan päällä
        -projekteihin
      </p>
    </div>
  </Section>
);

export { ServicesGridfi };
