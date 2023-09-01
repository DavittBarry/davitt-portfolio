import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Portfolio"
        description=" Personal portfolio website built with Astro, Tailwind, and TypeScript. This site will feature a selection of my projects to come and a blog for sharing thoughts on tech."
        link="https://github.com/DavittBarry/davitt-portfolio"
        img={{
          src: '/assets/images/profile.png',
          alt: 'Portfolio website',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Weather App (in development)"
        description="A simple weather app that provides accurate and up-to-date weather forecasts. The application is built using React.js, Node.js, Express.js, SASS, and API technologies."
        link="https://github.com/DavittBarry"
        img={{ src: '/assets/images/sun.png', alt: 'Weather App' }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>React.js</Tags>
            <Tags color={ColorTags.GREEN}>Node.js</Tags>
            <Tags color={ColorTags.GRAY}>Express</Tags>
            <Tags color={ColorTags.EMERALD}>MongoDB</Tags>
            <Tags color={ColorTags.YELLOW}>APIs</Tags>
            <Tags color={ColorTags.PINK}>SASS</Tags>
          </>
        }
      />
      <Project
        name="Job Advertisement App (in development)"
        description="A job posting platform, built on top of Vue.js, MongoDB, and Tailwind CSS. The application offers features such as real-time job postings, advanced search filters, as well as employer and employee user accounts."
        link="https://github.com/DavittBarry"
        img={{
          src: '/assets/images/classified.png',
          alt: 'Job Advertisement App',
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

export { ProjectList };
