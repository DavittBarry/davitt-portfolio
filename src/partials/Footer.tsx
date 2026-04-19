import type { Locale } from '@/utils/i18n';

type Props = { locale: Locale };

const labels = {
  en: {
    tagline: 'Based in Helsinki, Finland. Available for remote and on-site projects worldwide.',
    practice: 'Practice',
    connect: 'Connect',
    info: 'Info',
    privacy: 'Privacy Statement',
    privacyHref: '/privacy',
    contact: 'Contact',
    contactHref: '/contact',
    dev: 'IT & Development',
    devHref: '/dev',
    music: 'Music',
    musicHref: '/music',
    audio: 'Audio Engineering',
    audioHref: '/audio-services',
    rights: (y: number) => `© ${y} Davitt Barry — all signals preserved`,
  },
  fi: {
    tagline: 'Tukikohta Helsingissä. Etä- ja paikan päällä toteutettavia projekteja maailmanlaajuisesti.',
    practice: 'Työkenttä',
    connect: 'Yhteydet',
    info: 'Tiedot',
    privacy: 'Tietosuojaseloste',
    privacyHref: '/tietosuoja',
    contact: 'Yhteystiedot',
    contactHref: '/fi/yhteystiedot',
    dev: 'IT & Kehitys',
    devHref: '/fi/dev',
    music: 'Musiikki',
    musicHref: '/fi/musiikki',
    audio: 'Äänitekniikka',
    audioHref: '/fi/audiopalvelut',
    rights: (y: number) => `© ${y} Davitt Barry — kaikki signaalit tallessa`,
  },
} as const;

const Footer = ({ locale }: Props) => {
  const t = labels[locale];
  const year = new Date().getFullYear();
  return (
    <footer className="site">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <div className="mb-3.5 flex items-center gap-3.5">
              <db-logo size="36"></db-logo>
              <span className="mono" style={{ fontSize: '12px', letterSpacing: '0.14em', color: 'var(--color-text-dim)' }}>
                DAVITT&nbsp;BARRY — STUDIO
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-text-dim)', maxWidth: '36ch', margin: '0 0 18px' }}>
              {t.tagline}
            </p>
            <a
              href="mailto:davittbarry333@gmail.com"
              className="mono"
              style={{ color: 'var(--color-accent)', fontSize: '12px', letterSpacing: '0.08em' }}
            >
              davittbarry333@gmail.com →
            </a>
          </div>

          <div>
            <h4>{t.practice}</h4>
            <a href={t.devHref}>{t.dev}</a>
            <a href={t.musicHref}>{t.music}</a>
            <a href={t.audioHref}>{t.audio}</a>
          </div>

          <div>
            <h4>{t.connect}</h4>
            <a href="https://github.com/DavittBarry" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/davittbarry/" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href={t.contactHref}>{t.contact}</a>
          </div>

          <div>
            <h4>{t.info}</h4>
            <a href={t.privacyHref}>{t.privacy}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.rights(year)}</span>
          <span>V.{year} · BUILT IN HELSINKI · 60°10′N 24°56′E</span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
