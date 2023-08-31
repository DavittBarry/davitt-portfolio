import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Herofi = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hei, olen <GradientText>Davitt</GradientText> 👋
        </>
      }
      description={
        <>
          Keskittynyt ja omistautunut tietotekniikan ammattilainen, jolla on
          myös yli 15 vuoden kokemus musiikkialalta. Siirtynyt takaisin{' '}
          <a className="text-cyan-400">IT-/web-kehitykseen</a> neljä vuotta
          sitten ja etsii nyt mahdollisuuksia hyödyntää monipuolista osaamistaan
          verkkosivujen hallinnassa ja luomisessa, palvelupöydän teknisessä
          tuessa sekä erilaisissa{' '}
          <a className="text-cyan-400">ohjelmointikielissä.</a>{' '}
        </>
      }
      avatar={
        <img
          className="mt-8 h-80 w-80 rounded-3xl"
          src="/assets/images/avatar.png"
          alt="Avatar-kuva"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/" className="h-full w-20">
            <HeroSocial
              src="/assets/images/github-mark-white.svg"
              alt="GitHub-kuvake"
            />
          </a>
          <a href="/" className="h-full w-full">
            <HeroSocial
              src="/assets/images/square-linkedin-512.webp"
              alt="LinkedIn-kuvake"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Herofi };
