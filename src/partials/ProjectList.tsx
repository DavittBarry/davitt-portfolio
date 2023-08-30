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
        link="/"
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
        description="A simple weather app to provide accurate, up-to-date forecasts. Built with React.js, Node.js and Express.js for API handling."
        link="/"
        img={{ src: '/assets/images/sun.png', alt: 'Weather App' }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>React.js</Tags>
            <Tags color={ColorTags.GREEN}>Node.js</Tags>
            <Tags color={ColorTags.GRAY}>Express</Tags>
          </>
        }
      />
      <Project
        name="Job Advertisement App (in development)"
        description="A job listing platform built on Laravel and MySQL, this application offers features like real-time job postings, advanced search filters, and employer/employee dashboards."
        link="/"
        img={{
          src: '/assets/images/classified.png',
          alt: 'Job Advertisement App',
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

export { ProjectList };
