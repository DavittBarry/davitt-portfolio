import { ColorTags, Section } from 'astro-boilerplate-components';

import CustomProjectfi from './CustomProjectfi';
import CustomTag from './CustomTag';

const ProjectListfi = () => (
  <Section
    title={
      <div className="text-3xl font-light text-white">
        Viimeaikaiset <span className="text-cyan-400">Projektit</span>
      </div>
    }
  >
    <div className="flex flex-col gap-4">
      <CustomProjectfi
        name="CBTJournal"
        description="Yksityisyyteen keskittyvä kognitiivisen käyttäytymisterapian päiväkirjasovellus. Seuraa ajatuksia, tunnista kognitiivisia vääristymiä, harjoita kiitollisuutta ja seuraa mielialaa Burns-masennustarkistuksella. Rakennettu Reactilla, TypeScriptillä ja Capacitorilla web- ja mobiilialustoille. Kaikki data tallennetaan paikallisesti laitteelle."
        githubLink="https://github.com/DavittBarry/CBTJournal/tree/main"
        appLink="https://cbtjournal.app/"
        img={{ src: '/assets/images/cbtjournal-icon.png', alt: 'CBTJournal' }}
        category={
          <>
            <CustomTag color={ColorTags.BLUE} url="https://reactjs.org">
              React
            </CustomTag>
            <CustomTag
              color={ColorTags.ROSE}
              url="https://www.typescriptlang.org"
            >
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
        }
      />
      <CustomProjectfi
        name="Sääsovellus"
        description="Yksinkertainen sääsovellus, joka tarjoaa tarkkoja ja ajantasaisia sääennusteita. Sovellus on rakennettu käyttäen React.js, Node.js, Express.js, SASS, ja API-teknologioita. Huom: Kirjautuminen ja rekisteröityminen ovat toistaiseksi pois käytöstä, koska backend-palvelin on offline-tilassa."
        githubLink="https://github.com/DavittBarry/weather-app"
        appLink="https://marvelous-hamster-87b7aa.netlify.app/"
        img={{ src: '/assets/images/sun.png', alt: 'Sääsovellus' }}
        category={
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
            <CustomTag
              color={ColorTags.YELLOW}
              url="https://fi.wikipedia.org/wiki/Ohjelmointirajapinta"
            >
              API:t
            </CustomTag>
            <CustomTag color={ColorTags.PINK} url="https://sass-lang.com">
              SASS
            </CustomTag>
          </>
        }
      />
      <CustomProjectfi
        name="Työpaikkailmoitussovellus"
        description="Työpaikkailmoitusalusta, rakennettu Vue.js:n, MongoDB:n ja Tailwind CSS:n päälle. Sovellus tarjoaa ominaisuuksia kuten reaaliaikaiset työpaikkailmoitukset, edistyneet hakusuodattimet sekä työnantaja- ja työntekijäkäyttäjätilit."
        githubLink="https://github.com/DavittBarry/job-advertisement-app"
        img={{
          src: '/assets/images/classified.png',
          alt: 'Työpaikkailmoitussovellus',
        }}
        category={
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
            <CustomTag
              color={ColorTags.YELLOW}
              url="https://fi.wikipedia.org/wiki/Ohjelmointirajapinta"
            >
              API:t
            </CustomTag>
            <CustomTag color={ColorTags.PINK} url="https://sass-lang.com">
              SASS
            </CustomTag>
          </>
        }
      />
      <CustomProjectfi
        name="'Helsinkey' musiikkiverkkokauppa"
        description="Musiikin ja soittimien myyntialusta, jossa on alusta asti itse tehty teema. Rakennettu käyttäen WordPress, Docker, Tailwind, MySQL, PHP, WooCommerce ja ACF -teknologioita. Jos näet live-esikatselusivulla kielivalikko (asennussivu), se tarkoittaa että suurin sallittu yhteyksien määrä (15) on ylitetty. Käy uudelleen tunnin kuluttua!"
        githubLink="https://github.com/DavittBarry/wp-helsinkey-ecommerce"
        img={{
          src: '/assets/images/icons8-music-512.png',
          alt: 'Helsinkey musiikkiverkkokauppa',
        }}
        category={
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
        }
      />
      <CustomProjectfi
        name="Portfolio"
        description="Henkilökohtainen portfoliosivusto, rakennettu Astro, Tailwind ja TypeScript -tekniikoilla. Tältä sivustolta löydät valikoiman tulevia projektejani sekä blogeja."
        githubLink="https://github.com/DavittBarry/davitt-portfolio"
        img={{ src: '/assets/images/profile.png', alt: 'Portfolioprojekti' }}
        category={
          <>
            <CustomTag color={ColorTags.FUCHSIA} url="https://astro.build">
              Astro.js
            </CustomTag>
            <CustomTag
              color={ColorTags.LIME}
              url="https://fi.wikipedia.org/wiki/Verkkosivujen_suunnittelu"
            >
              Verkkosuunnittelu
            </CustomTag>
            <CustomTag color={ColorTags.SKY} url="https://tailwindcss.com">
              Tailwind
            </CustomTag>
            <CustomTag
              color={ColorTags.ROSE}
              url="https://www.typescriptlang.org"
            >
              TypeScript
            </CustomTag>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectListfi };
