import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hello, I'm <GradientText>Davitt</GradientText> 👋
        </>
      }
      description={
        <>
          A focused and dedicated ICT professional with also a background in
          music spanning over 15 years. Transitioned back into{' '}
          <a className="text-cyan-400">IT/web development</a> four years ago,
          seeking opportunities to leverage a diverse skill set in website
          management/creation, service desk technical help, and various{' '}
          <a className="text-cyan-400">programming languages.</a>{' '}
        </>
      }
      avatar={
        <img
          className="mt-8 h-80 w-80 rounded-3xl"
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/DavittBarry" className="h-full w-20">
            <HeroSocial
              src="/assets/images/github-mark-white.svg"
              alt="GitHub icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/davittbarry/"
            className="h-full w-full"
          >
            <HeroSocial
              src="/assets/images/square-linkedin-512.webp"
              alt="LinkedIn icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
