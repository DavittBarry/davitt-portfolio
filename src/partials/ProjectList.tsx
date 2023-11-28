import { ColorTags, GradientText, Section } from 'astro-boilerplate-components';

import CustomProject from './CustomProject';
import CustomTag from './CustomTag';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <CustomProject
        name="Job Advertisement App"
        description="A job posting platform, built on top of Vue.js, MongoDB, and Tailwind CSS. The application offers features such as real-time job postings, advanced search filters, as well as employer and employee user accounts."
        githubLink="https://github.com/DavittBarry/job-advertisement-app"
        previewLink="https://bucolic-hamster-c91ee3.netlify.app/"
        img={{
          src: '/assets/images/classified.png',
          alt: 'Job Advertisement App',
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
      <CustomProject
        name="Weather App"
        description="A simple weather app that provides accurate and up-to-date weather forecasts. The application is built using React.js, Node.js, Express.js, SASS, and API technologies. "
        githubLink="https://github.com/DavittBarry/weather-app"
        previewLink="https://marvelous-hamster-87b7aa.netlify.app"
        img={{ src: '/assets/images/sun.png', alt: 'Weather App' }}
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
              url="https://en.wikipedia.org/wiki/API"
            >
              APIs
            </CustomTag>
            <CustomTag color={ColorTags.PINK} url="https://sass-lang.com">
              SASS
            </CustomTag>
          </>
        }
      />
      <CustomProject
        name="'Helsinkey' music store"
        description="An e-commerce platform to sell music and musical instruments with a theme made from stratch. Built using WordPress, Docker, Tailwind, MySQL, PHP, WooCommerce and ACF. If you see on the live preview page a language selection list (Install page), then that means the max number of connections (15) has been exceeded. Visit again in 1 hour!"
        githubLink="https://github.com/DavittBarry/wp-helsinkey-ecommerce"
        previewLink="https://wp-helsinkey-ecommerce-7e342ea96f2a.herokuapp.com/?page_id=267&lang=en"
        img={{
          src: '/assets/images/icons8-music-512.png',
          alt: 'WP Helsinki E-commerce',
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
      <CustomProject
        name="Portfolio"
        description="Personal portfolio website built with Astro, Tailwind, and TypeScript. This site will feature a selection of my projects to come and a blog for sharing thoughts on tech."
        githubLink="https://github.com/DavittBarry/davitt-portfolio"
        previewLink="https://davittportfolio.com/"
        img={{ src: '/assets/images/profile.png', alt: 'Portfolio website' }}
        category={
          <>
            <CustomTag color={ColorTags.FUCHSIA} url="https://astro.build">
              Astro.js
            </CustomTag>
            <CustomTag
              color={ColorTags.LIME}
              url="https://en.wikipedia.org/wiki/Web_design"
            >
              Web design
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

export { ProjectList };
