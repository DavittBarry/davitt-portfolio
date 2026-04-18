import { GradientText, Section } from '@/components/boilerplate';
import type { Locale } from '@/utils/i18n';

type Props = { locale: Locale };

const labels = {
  en: {
    headingPre: "Let's create something ",
    headingEm: 'together',
    body: "Whether you need a skilled developer for your next project, professional audio engineering services, or original music compositions, I'm here to help bring your vision to life.",
    contactHref: '/contact',
    contact: 'Get in touch →',
    emailSubject: 'Project Inquiry',
    email: 'Email directly →',
    dev: 'Full-Stack Development',
    audio: 'Audio Mixing & Mastering',
    music: 'Music Production',
  },
  fi: {
    headingPre: 'Luodaan jotain ',
    headingEm: 'yhdessä',
    body: 'Tarvitsetpa osaavaa kehittäjää seuraavaan projektiisi, ammattimaisia äänenmuokkauspalveluita tai alkuperäisiä musiikkisävellyksiä, olen täällä auttamassa visiosi toteuttamisessa.',
    contactHref: '/fi/contact',
    contact: 'Ota yhteyttä →',
    emailSubject: 'Projektikysely',
    email: 'Lähetä sähköpostia →',
    dev: 'Full-Stack kehitys',
    audio: 'Äänen miksaus & masterointi',
    music: 'Musiikin tuotanto',
  },
} as const;

const GeneralCTA = ({ locale }: Props) => {
  const t = labels[locale];
  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <div className="border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 text-center">
          <h2 className="mb-4 text-3xl font-light text-white">
            {t.headingPre}
            <GradientText>{t.headingEm}</GradientText>
          </h2>
          <p className="mb-8 text-lg text-neutral-400">{t.body}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={t.contactHref}
              className="inline-block border border-emerald-400 px-6 py-3 text-emerald-400 transition-all hover:bg-emerald-400/10"
            >
              {t.contact}
            </a>
            <a
              href={`mailto:davittbarry333@gmail.com?subject=${encodeURIComponent(
                t.emailSubject
              )}`}
              className="inline-block border border-cyan-400 px-6 py-3 text-cyan-400 transition-all hover:bg-cyan-400/10"
            >
              {t.email}
            </a>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 text-sm text-neutral-500 md:grid-cols-3">
            <div>
              <span className="text-emerald-400">•</span> {t.dev}
            </div>
            <div>
              <span className="text-cyan-400">•</span> {t.audio}
            </div>
            <div>
              <span className="text-purple-400">•</span> {t.music}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { GeneralCTA };
