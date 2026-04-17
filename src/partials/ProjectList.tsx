import { ColorTags, Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

import type { Locale } from '@/utils/i18n';

import CustomProject from './CustomProject';
import CustomTag from './CustomTag';

type Props = { locale: Locale };

type ProjectEntry = {
  name: string;
  description: string;
  githubLink?: string;
  appLink?: string;
  img: { src: string; alt: string };
  category: ReactNode;
};

const makeCategories = (locale: Locale) => {
  const apisUrl =
    locale === 'fi'
      ? 'https://fi.wikipedia.org/wiki/Ohjelmointirajapinta'
      : 'https://en.wikipedia.org/wiki/API';
  const apisLabel = locale === 'fi' ? 'API:t' : 'APIs';
  const webDesignUrl =
    locale === 'fi'
      ? 'https://fi.wikipedia.org/wiki/Verkkosivujen_suunnittelu'
      : 'https://en.wikipedia.org/wiki/Web_design';
  const webDesignLabel = locale === 'fi' ? 'Verkkosuunnittelu' : 'Web design';

  return {
    cbtJournal: (
      <>
        <CustomTag color={ColorTags.BLUE} url="https://reactjs.org">
          React
        </CustomTag>
        <CustomTag color={ColorTags.ROSE} url="https://www.typescriptlang.org">
          TypeScript
        </CustomTag>
        <CustomTag color={ColorTags.SKY} url="https://tailwindcss.com">
          Tailwind
        </CustomTag>
        <CustomTag color={ColorTags.PURPLE} url="https://capacitorjs.com">
          Capacitor
        </CustomTag>
        <CustomTag
          color={ColorTags.EMERALD}
          url="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"
        >
          IndexedDB
        </CustomTag>
      </>
    ),
    weatherOrJob: (
      <>
        <CustomTag color={ColorTags.BLUE} url="https://reactjs.org">
          React.js
        </CustomTag>
        <CustomTag color={ColorTags.GREEN} url="https://nodejs.org">
          Node.js
        </CustomTag>
        <CustomTag color={ColorTags.GRAY} url="https://expressjs.com">
          Express
        </CustomTag>
        <CustomTag color={ColorTags.EMERALD} url="https://www.mongodb.com">
          MongoDB
        </CustomTag>
        <CustomTag color={ColorTags.YELLOW} url={apisUrl}>
          {apisLabel}
        </CustomTag>
        <CustomTag color={ColorTags.PINK} url="https://sass-lang.com">
          SASS
        </CustomTag>
      </>
    ),
    helsinkey: (
      <>
        <CustomTag color="BLUE" url="https://wordpress.org">
          WordPress
        </CustomTag>
        <CustomTag color="LIGHTBLUE" url="https://www.docker.com">
          Docker
        </CustomTag>
        <CustomTag color="ORANGE" url="https://www.mysql.com">
          MySQL
        </CustomTag>
        <CustomTag color="PURPLE" url="https://www.php.net">
          PHP
        </CustomTag>
        <CustomTag color={ColorTags.SKY} url="https://tailwindcss.com">
          Tailwind
        </CustomTag>
        <CustomTag color="GREEN" url="https://www.advancedcustomfields.com">
          ACF
        </CustomTag>
        <CustomTag color="PURPLE" url="https://woocommerce.com/">
          WooCommerce
        </CustomTag>
      </>
    ),
    portfolio: (
      <>
        <CustomTag color={ColorTags.FUCHSIA} url="https://astro.build">
          Astro.js
        </CustomTag>
        <CustomTag color={ColorTags.LIME} url={webDesignUrl}>
          {webDesignLabel}
        </CustomTag>
        <CustomTag color={ColorTags.SKY} url="https://tailwindcss.com">
          Tailwind
        </CustomTag>
        <CustomTag color={ColorTags.ROSE} url="https://www.typescriptlang.org">
          TypeScript
        </CustomTag>
      </>
    ),
  };
};

const labels = {
  en: {
    headingPre: 'Recent ',
    headingEm: 'Projects',
    projects: (c: ReturnType<typeof makeCategories>): ProjectEntry[] => [
      {
        name: 'CBTJournal',
        description:
          'A privacy-focused cognitive behavioral therapy journaling app. Track thoughts, identify cognitive distortions, practice gratitude, and monitor mood with the Burns Depression Checklist. Built with React, TypeScript, and Capacitor for web and mobile. All data stored locally on device.',
        githubLink: 'https://github.com/DavittBarry/CBTJournal/tree/main',
        appLink: 'https://cbtjournal.app/',
        img: { src: '/assets/images/cbtjournal-icon.png', alt: 'CBTJournal' },
        category: c.cbtJournal,
      },
      {
        name: 'Weather App',
        description:
          'A simple weather app that provides accurate and up-to-date weather forecasts. The application is built using React.js, Node.js, Express.js, SASS, and API technologies. Note: Login and registration are currently disabled as the backend is offline.',
        githubLink: 'https://github.com/DavittBarry/weather-app',
        appLink: 'https://marvelous-hamster-87b7aa.netlify.app/',
        img: { src: '/assets/images/sun.png', alt: 'Weather App' },
        category: c.weatherOrJob,
      },
      {
        name: 'Job Advertisement App',
        description:
          'A job posting platform, built on top of Vue.js, MongoDB, and Tailwind CSS. The application offers features such as real-time job postings, advanced search filters, as well as employer and employee user accounts.',
        githubLink: 'https://github.com/DavittBarry/job-advertisement-app',
        img: {
          src: '/assets/images/classified.png',
          alt: 'Job Advertisement App',
        },
        category: c.weatherOrJob,
      },
      {
        name: "'Helsinkey' music store",
        description:
          'An e-commerce platform to sell music and musical instruments with a theme made from stratch. Built using WordPress, Docker, Tailwind, MySQL, PHP, WooCommerce and ACF. If you see on the live preview page a language selection list (Install page), then that means the max number of connections (15) has been exceeded. Visit again in 1 hour!',
        githubLink: 'https://github.com/DavittBarry/wp-helsinkey-ecommerce',
        img: {
          src: '/assets/images/icons8-music-512.png',
          alt: 'WP Helsinki E-commerce',
        },
        category: c.helsinkey,
      },
      {
        name: 'Portfolio',
        description:
          'Personal portfolio website built with Astro, Tailwind, and TypeScript. This site will feature a selection of my projects to come and a blog for sharing thoughts on tech.',
        githubLink: 'https://github.com/DavittBarry/davitt-portfolio',
        img: { src: '/assets/images/profile.png', alt: 'Portfolio website' },
        category: c.portfolio,
      },
    ],
  },
  fi: {
    headingPre: 'Viimeaikaiset ',
    headingEm: 'Projektit',
    projects: (c: ReturnType<typeof makeCategories>): ProjectEntry[] => [
      {
        name: 'CBTJournal',
        description:
          'Yksityisyyteen keskittyvä kognitiivisen käyttäytymisterapian päiväkirjasovellus. Seuraa ajatuksia, tunnista kognitiivisia vääristymiä, harjoita kiitollisuutta ja seuraa mielialaa Burns-masennustarkistuksella. Rakennettu Reactilla, TypeScriptillä ja Capacitorilla web- ja mobiilialustoille. Kaikki data tallennetaan paikallisesti laitteelle.',
        githubLink: 'https://github.com/DavittBarry/CBTJournal/tree/main',
        appLink: 'https://cbtjournal.app/',
        img: { src: '/assets/images/cbtjournal-icon.png', alt: 'CBTJournal' },
        category: c.cbtJournal,
      },
      {
        name: 'Sääsovellus',
        description:
          'Yksinkertainen sääsovellus, joka tarjoaa tarkkoja ja ajantasaisia sääennusteita. Sovellus on rakennettu käyttäen React.js, Node.js, Express.js, SASS, ja API-teknologioita. Huom: Kirjautuminen ja rekisteröityminen ovat toistaiseksi pois käytöstä, koska backend-palvelin on offline-tilassa.',
        githubLink: 'https://github.com/DavittBarry/weather-app',
        appLink: 'https://marvelous-hamster-87b7aa.netlify.app/',
        img: { src: '/assets/images/sun.png', alt: 'Sääsovellus' },
        category: c.weatherOrJob,
      },
      {
        name: 'Työpaikkailmoitussovellus',
        description:
          'Työpaikkailmoitusalusta, rakennettu Vue.js:n, MongoDB:n ja Tailwind CSS:n päälle. Sovellus tarjoaa ominaisuuksia kuten reaaliaikaiset työpaikkailmoitukset, edistyneet hakusuodattimet sekä työnantaja- ja työntekijäkäyttäjätilit.',
        githubLink: 'https://github.com/DavittBarry/job-advertisement-app',
        img: {
          src: '/assets/images/classified.png',
          alt: 'Työpaikkailmoitussovellus',
        },
        category: c.weatherOrJob,
      },
      {
        name: "'Helsinkey' musiikkiverkkokauppa",
        description:
          'Musiikin ja soittimien myyntialusta, jossa on alusta asti itse tehty teema. Rakennettu käyttäen WordPress, Docker, Tailwind, MySQL, PHP, WooCommerce ja ACF -teknologioita. Jos näet live-esikatselusivulla kielivalikko (asennussivu), se tarkoittaa että suurin sallittu yhteyksien määrä (15) on ylitetty. Käy uudelleen tunnin kuluttua!',
        githubLink: 'https://github.com/DavittBarry/wp-helsinkey-ecommerce',
        img: {
          src: '/assets/images/icons8-music-512.png',
          alt: 'Helsinkey musiikkiverkkokauppa',
        },
        category: c.helsinkey,
      },
      {
        name: 'Portfolio',
        description:
          'Henkilökohtainen portfoliosivusto, rakennettu Astro, Tailwind ja TypeScript -tekniikoilla. Tältä sivustolta löydät valikoiman tulevia projektejani sekä blogeja.',
        githubLink: 'https://github.com/DavittBarry/davitt-portfolio',
        img: { src: '/assets/images/profile.png', alt: 'Portfolioprojekti' },
        category: c.portfolio,
      },
    ],
  },
} as const;

const ProjectList = ({ locale }: Props) => {
  const t = labels[locale];
  const categories = makeCategories(locale);
  const projects = t.projects(categories);

  return (
    <Section
      title={
        <div className="text-3xl font-light text-white">
          {t.headingPre}
          <span className="text-cyan-400">{t.headingEm}</span>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <CustomProject
            key={p.name}
            name={p.name}
            description={p.description}
            githubLink={p.githubLink}
            appLink={p.appLink}
            img={p.img}
            category={p.category}
            locale={locale}
          />
        ))}
      </div>
    </Section>
  );
};

export { ProjectList };
