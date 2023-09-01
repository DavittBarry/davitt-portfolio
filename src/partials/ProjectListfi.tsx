import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectListfi = () => (
  <Section
    title={
      <>
        Viimeaikaiset <GradientText>Projektit</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Portfolio"
        description="Henkilökohtainen portfoliosivusto, rakennettu Astro, Tailwind ja TypeScript -tekniikoilla. Tältä sivustolta löydät valikoiman tulevia projektejani sekä blogeja."
        link="https://github.com/DavittBarry/davitt-portfolio"
        img={{
          src: '/assets/images/profile.png',
          alt: 'Portfolioprojekti',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.LIME}>Verkkosuunnittelu</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Sääsovellus (kehityksessä)"
        description="Yksinkertainen sääsovellus, joka tarjoaa tarkkoja ja ajantasaisia sääennusteita. Sovellus on rakennettu käyttäen React.js, Node.js, Express.js, SASS ja API-teknologioita."
        link="https://github.com/DavittBarry/weather-app"
        img={{ src: '/assets/images/sun.png', alt: 'Sääsovellus' }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>React.js</Tags>
            <Tags color={ColorTags.GREEN}>Node.js</Tags>
            <Tags color={ColorTags.GRAY}>Express</Tags>
            <Tags color={ColorTags.EMERALD}>MongoDB</Tags>
            <Tags color={ColorTags.YELLOW}>API:t</Tags>
            <Tags color={ColorTags.PINK}>SASS</Tags>
          </>
        }
      />
      <Project
        name="Työpaikkailmoitussovellus (kehityksessä)"
        description="Työpaikkailmoitusalusta, rakennettu Vue.js:n, MongoDB:n ja Tailwind CSS:n päälle. Sovellus tarjoaa ominaisuuksia kuten reaaliaikaiset työpaikkailmoitukset, edistyneet hakusuodattimet sekä työnantaja- ja työntekijäkäyttäjätilit."
        link="https://github.com/DavittBarry/job-advertisement-app"
        img={{
          src: '/assets/images/classified.png',
          alt: 'Työpaikkailmoitussovellus',
        }}
        category={
          <>
            <Tags color={ColorTags.GREEN}>Vue.js</Tags>
            <Tags color={ColorTags.EMERALD}>MongoDB</Tags>
            <Tags color={ColorTags.BLUE}>Tailwind</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectListfi };
