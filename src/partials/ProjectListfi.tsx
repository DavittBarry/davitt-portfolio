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
        description="Yksinkertainen sääsovellus tarjoamaan tarkkoja ja ajantasaisia sääennusteita. Rakennettu React.js, Node.js ja Express.js -teknologioilla."
        link="https://github.com/DavittBarry"
        img={{ src: '/assets/images/sun.png', alt: 'Sääsovellus' }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>React.js</Tags>
            <Tags color={ColorTags.GREEN}>Node.js</Tags>
            <Tags color={ColorTags.GRAY}>Express</Tags>
          </>
        }
      />
      <Project
        name="Työpaikkailmoitussovellus (kehityksessä)"
        description="Työpaikkailmoitusalusta, rakennettu Laravelin ja MySQL:n päälle. Sovellus tarjoaa ominaisuuksia kuten reaaliaikaiset työpaikkailmoitukset, edistyneet hakusuodattimet sekä työnantaja- ja työntekijäkojetaulut."
        link="https://github.com/DavittBarry"
        img={{
          src: '/assets/images/classified.png',
          alt: 'Työpaikkailmoitussovellus',
        }}
        category={
          <>
            <Tags color={ColorTags.RED}>Laravel</Tags>
            <Tags color={ColorTags.BLUE}>MySQL</Tags>
            <Tags color={ColorTags.PURPLE}>PHP</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectListfi };
