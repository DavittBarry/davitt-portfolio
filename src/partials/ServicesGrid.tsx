import { Section } from '@/components/boilerplate';
import type { Locale } from '@/utils/i18n';

type Props = { locale: Locale };

const labels = {
  en: {
    headingPre: 'Professional ',
    headingEm: 'Services',
    intro:
      'Combining technical expertise with creative vision across three specialized fields',
    devTitle: 'IT & Development',
    devHref: '/dev',
    devBody:
      'Full-stack web development services from responsive websites to complex applications. Specialized in modern JavaScript frameworks, WordPress, and custom solutions.',
    devTags: [
      'React, Vue, Node.js',
      'WordPress, Laravel',
      'Database & API Design',
    ],
    devCta: 'View Portfolio →',
    musicTitle: 'Music',
    musicHref: '/music',
    musicBody:
      'Original compositions and productions across multiple genres. From initial concept to final master, bringing artistic vision to life through sound.',
    musicTags: [
      'Original Compositions',
      'Arrangement & Orchestration',
      'Multi-Genre Production',
    ],
    musicCta: 'Listen to Music →',
    audioTitle: 'Audio Engineering',
    audioHref: '/audio-services',
    audioBody:
      'Professional mixing and mastering services. From raw recordings to commercial-ready polish, ensuring your tracks sound their best across all platforms.',
    audioTags: [
      'Mixing & Mastering',
      'Audio Restoration',
      'Podcast Production',
    ],
    audioCta: 'View Services →',
    footer:
      'Based in Helsinki, Finland • Available for remote and on-site projects',
  },
  fi: {
    headingPre: 'Ammatti',
    headingEm: 'palvelut',
    intro:
      'Yhdistän teknisen osaamisen luovaan näkemykseen kolmella erikoisalalla',
    devTitle: 'IT & Kehitys',
    devHref: '/fi/dev',
    devBody:
      'Full-stack web-kehityspalvelut responsiivisista verkkosivustoista monimutkaisiin sovelluksiin. Erikoistunut moderneihin JavaScript-frameworkeihin, WordPressiin ja räätälöityihin ratkaisuihin.',
    devTags: [
      'React, Vue, Node.js',
      'WordPress, Laravel',
      'Tietokanta & API-suunnittelu',
    ],
    devCta: 'Näytä portfolio →',
    musicTitle: 'Musiikki',
    musicHref: '/fi/musiikki',
    musicBody:
      'Alkuperäisiä sävellyksiä ja tuotantoja eri genreissä. Alkuperäisestä konseptista valmiiseen masterointiin, tuoden taiteellisen vision eloon äänen kautta.',
    musicTags: [
      'Alkuperäiset sävellykset',
      'Sovitus & orkestraatio',
      'Monipuolinen tuotanto',
    ],
    musicCta: 'Kuuntele musiikkia →',
    audioTitle: 'Äänitekniikka',
    audioHref: '/fi/audiopalvelut',
    audioBody:
      'Ammattimaiset miksaus- ja masterointipalvelut. Raaka-äänityksistä kaupalliseen laatuun, varmistaen että kappaleesi kuulostavat parhailta kaikilla alustoilla.',
    audioTags: [
      'Miksaus & masterointi',
      'Äänen restaurointi',
      'Podcast-tuotanto',
    ],
    audioCta: 'Näytä palvelut →',
    footer:
      'Sijainti Helsinki, Suomi • Saatavilla etä- ja paikan päällä -projekteihin',
  },
} as const;

const ServicesGrid = ({ locale }: Props) => {
  const t = labels[locale];
  return (
    <Section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-light text-white">
          {t.headingPre}
          <span className="text-accent">{t.headingEm}</span>
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-400">{t.intro}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <a
          href={t.devHref}
          className="group block cursor-pointer border border-neutral-800 bg-linear-to-br from-neutral-900 to-neutral-800 p-8 transition-all hover:border-accent/50"
        >
          <div className="mb-4 font-mono text-4xl text-accent">{'</>'}</div>
          <h3 className="mb-3 text-xl font-medium text-white transition-colors group-hover:text-accent">
            {t.devTitle}
          </h3>
          <p className="mb-6 text-neutral-400">{t.devBody}</p>
          <div className="space-y-2 text-sm">
            {t.devTags.map((tag) => (
              <div key={tag} className="flex items-center text-neutral-500">
                <span className="mr-2 text-accent">▸</span>
                {tag}
              </div>
            ))}
          </div>
          <div className="mt-6 inline-block text-sm text-accent transition-colors group-hover:text-accent/80">
            {t.devCta}
          </div>
        </a>

        <a
          href={t.musicHref}
          className="group block cursor-pointer border border-neutral-800 bg-linear-to-br from-neutral-900 to-neutral-800 p-8 transition-all hover:border-emerald-400/50"
        >
          <div className="mb-4 text-4xl text-emerald-400">♪</div>
          <h3 className="mb-3 text-xl font-medium text-white transition-colors group-hover:text-emerald-400">
            {t.musicTitle}
          </h3>
          <p className="mb-6 text-neutral-400">{t.musicBody}</p>
          <div className="space-y-2 text-sm">
            {t.musicTags.map((tag) => (
              <div key={tag} className="flex items-center text-neutral-500">
                <span className="mr-2 text-emerald-400">▸</span>
                {tag}
              </div>
            ))}
          </div>
          <div className="mt-6 inline-block text-sm text-emerald-400 transition-colors group-hover:text-emerald-400/80">
            {t.musicCta}
          </div>
        </a>

        <a
          href={t.audioHref}
          className="group block cursor-pointer border border-neutral-800 bg-linear-to-br from-neutral-900 to-neutral-800 p-8 transition-all hover:border-cyan-400/50"
        >
          <div className="mb-4 text-4xl text-cyan-400">⚡</div>
          <h3 className="mb-3 text-xl font-medium text-white transition-colors group-hover:text-cyan-400">
            {t.audioTitle}
          </h3>
          <p className="mb-6 text-neutral-400">{t.audioBody}</p>
          <div className="space-y-2 text-sm">
            {t.audioTags.map((tag) => (
              <div key={tag} className="flex items-center text-neutral-500">
                <span className="mr-2 text-cyan-400">▸</span>
                {tag}
              </div>
            ))}
          </div>
          <div className="mt-6 inline-block text-sm text-cyan-400 transition-colors group-hover:text-cyan-400/80">
            {t.audioCta}
          </div>
        </a>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-neutral-500">{t.footer}</p>
      </div>
    </Section>
  );
};

export { ServicesGrid };
