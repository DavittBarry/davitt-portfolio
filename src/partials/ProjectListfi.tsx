import { ColorTags, GradientText, Section } from 'astro-boilerplate-components';

import CustomProject from './CustomProject';
import CustomProjectfi from './CustomProjectfi';
import CustomTag from './CustomTag';

const ProjectListfi = () => (
  <Section
    title={
      <>
        Viimeaikaiset <GradientText>Projektit</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <CustomProjectfi
        name="Portfolio"
        description="Henkilökohtainen portfoliosivusto, rakennettu Astro, Tailwind ja TypeScript -tekniikoilla. Tältä sivustolta löydät valikoiman tulevia projektejani sekä blogeja."
        githubLink="https://github.com/DavittBarry/davitt-portfolio"
        previewLink="https://davittportfolio.com/fi"
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
              Tailwind.css
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
      <CustomProjectfi
        name="Sääsovellus"
        description="Yksinkertainen sääsovellus, joka tarjoaa tarkkoja ja ajantasaisia sääennusteita. Sovellus on rakennettu käyttäen React.js, Node.js, Express.js, SASS, ja API-teknologioita."
        githubLink="https://github.com/DavittBarry/weather-app"
        previewLink="https://marvelous-hamster-87b7aa.netlify.app"
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
      <CustomProject
        name="'Helsinkey' musiikkiverkkokauppa (kehityksessä)"
        description="Verkkokauppa-alusta musiikin ja soittimien myymiseen, rakennettu käyttäen WordPress, Docker, MySQL, PHP ja ACF -teknologioita."
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
            <CustomTag color="GREEN" url="https://www.advancedcustomfields.com">
              ACF
            </CustomTag>
          </>
        }
      />
      <CustomProjectfi
        name="Työpaikkailmoitussovellus (kehityksessä)"
        description="Työpaikkailmoitusalusta, rakennettu Vue.js:n, MongoDB:n ja Tailwind CSS:n päälle. Sovellus tarjoaa ominaisuuksia kuten reaaliaikaiset työpaikkailmoitukset, edistyneet hakusuodattimet sekä työnantaja- ja työntekijäkäyttäjätilit."
        githubLink="https://github.com/DavittBarry/job-advertisement-app"
        img={{
          src: '/assets/images/classified.png',
          alt: 'Työpaikkailmoitussovellus',
        }}
        category={
          <>
            <CustomTag color={ColorTags.GREEN} url="https://vuejs.org">
              Vue.js
            </CustomTag>
            <CustomTag color={ColorTags.EMERALD} url="https://www.mongodb.com">
              MongoDB
            </CustomTag>
            <CustomTag color={ColorTags.BLUE} url="https://tailwindcss.com">
              Tailwind
            </CustomTag>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectListfi };
