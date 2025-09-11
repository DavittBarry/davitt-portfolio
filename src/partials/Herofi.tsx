import { HeroAvatar, Section } from 'astro-boilerplate-components';

const Herofi = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          <span className="font-light">Hei, olen </span>
          <span className="font-normal text-accent">Davitt</span>
          <span className="ml-2 animate-pulse-slow">_</span>
        </>
      }
      description={
        <div className="leading-relaxed text-neutral-400">
          Työlleen omistautunut ja innostunut tietotekniikan ammattilainen,
          jolla on myös yli 15:n vuoden kokemus musiikkialalta. Siirtynyt
          takaisin IT-/web-kehitykseen neljä vuotta sitten ja etsii nyt
          mahdollisuuksia hyödyntää monipuolista osaamistaan verkkosivujen
          hallinnassa ja luomisessa, erilaisissa ohjelmointikielissä ja teknisen
          tuen tarjoamisessa asiakkaille.
        </div>
      }
      avatar={
        <div className="group relative">
          <img
            className="mt-8 w-64 border-2 border-neutral-800 object-cover object-center transition-all duration-500 hover:border-accent"
            src="/assets/images/avatar.jpg"
            alt="Avatar-kuva"
            loading="lazy"
          />
        </div>
      }
      socialButtons={
        <div className="flex gap-4">
          <a
            href="https://github.com/DavittBarry"
            className="block border border-neutral-700 p-2.5 transition-all duration-200 hover:scale-110 hover:border-accent hover:bg-accent/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/github-mark-white.svg"
              alt="GitHub"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/davittbarry/"
            className="block border border-neutral-700 p-2.5 transition-all duration-200 hover:scale-110 hover:border-accent hover:bg-accent/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/square-linkedin-512.webp"
              alt="LinkedIn"
              className="h-6 w-6"
            />
          </a>
        </div>
      }
    />
  </Section>
);

export { Herofi };
