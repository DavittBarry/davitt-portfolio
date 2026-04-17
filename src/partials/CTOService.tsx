import { Section } from 'astro-boilerplate-components';

import type { Locale } from '@/utils/i18n';

type Props = { locale: Locale };

type Item = { title: string; body: string };

type Bundle = {
  heading: string;
  intro: string;
  items: Item[];
  pricing: string;
  ctaHref: string;
  cta: string;
};

const labels: Record<Locale, Bundle> = {
  en: {
    heading: 'Need a website or web application?',
    intro:
      'Looking to build a new website, modernize your existing platform, or develop a custom web application? I offer comprehensive web development services tailored to your needs.',
    items: [
      {
        title: 'Custom Web Development',
        body: 'Full-stack development using modern technologies like React, Next.js, Node.js, and TypeScript.',
      },
      {
        title: 'E-commerce Solutions',
        body: 'Build online stores with secure payment processing, inventory management, and user-friendly interfaces.',
      },
      {
        title: 'Website Modernization',
        body: 'Update legacy websites with modern design, improved performance, and mobile responsiveness.',
      },
      {
        title: 'Technical Consultation',
        body: 'Architecture planning, technology stack selection, and development strategy for your project.',
      },
    ],
    pricing:
      'Every project is unique, and pricing depends on scope, complexity, and timeline. I offer competitive rates for both one-time projects and ongoing development partnerships. Contact me with your project details for a personalized quote.',
    ctaHref: '/contact',
    cta: 'Get a quote for your project →',
  },
  fi: {
    heading: 'Tarvitsetko verkkosivut tai verkkosovelluksen?',
    intro:
      'Haluatko rakentaa uudet verkkosivut, modernisoida nykyisen alustasi tai kehittää räätälöidyn verkkosovelluksen? Tarjoan kattavia web-kehityspalveluita tarpeisiisi sopivasti.',
    items: [
      {
        title: 'Räätälöity web-kehitys',
        body: 'Full-stack kehitystä moderneilla teknologioilla kuten React, Next.js, Node.js ja TypeScript.',
      },
      {
        title: 'Verkkokaupparatkaisut',
        body: 'Verkkokauppojen rakentaminen turvallisilla maksujärjestelmillä, varastonhallinnalla ja käyttäjäystävällisillä käyttöliittymillä.',
      },
      {
        title: 'Verkkosivujen modernisointi',
        body: 'Vanhojen verkkosivujen päivitys modernilla suunnittelulla, paremmalla suorituskyvyllä ja mobiiliresponsiivisuudella.',
      },
      {
        title: 'Tekninen konsultointi',
        body: 'Arkkitehtuurin suunnittelu, teknologiapinon valinta ja kehitysstrategia projektillesi.',
      },
    ],
    pricing:
      'Jokainen projekti on ainutlaatuinen, ja hinnoittelu riippuu laajuudesta, monimutkaisuudesta ja aikataulusta. Tarjoan kilpailukykyisiä hintoja sekä kertaluontoisille projekteille että jatkuville kehityskumppanuuksille. Ota yhteyttä projektisi tiedoilla saadaksesi henkilökohtaisen tarjouksen.',
    ctaHref: '/fi/yhteystiedot',
    cta: 'Pyydä tarjous projektillesi →',
  },
};

const CTOService = ({ locale }: Props) => {
  const t = labels[locale];
  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-light text-white">{t.heading}</h2>
        <div className="border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8">
          <p className="mb-6 text-neutral-400">{t.intro}</p>

          <div className="mb-8 space-y-4">
            {t.items.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="text-cyan-400">▸</div>
                <div>
                  <h3 className="mb-2 text-lg text-white">{item.title}</h3>
                  <p className="text-sm text-neutral-400">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-8 text-neutral-400">{t.pricing}</p>

          <div className="text-center">
            <a
              href={t.ctaHref}
              className="inline-block border border-cyan-400 px-6 py-3 text-cyan-400 transition-all hover:bg-cyan-400/10"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { CTOService };
