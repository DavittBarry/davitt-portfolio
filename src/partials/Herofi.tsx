import { HeroAvatar, Section } from 'astro-boilerplate-components';

const Herofi = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          <style>{`
            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0; }
            }
            .cursor-blink {
              animation: blink 1s step-end infinite;
            }
          `}</style>
          <span className="font-light">Hei, olen </span>
          <span className="font-normal text-accent">Davitt</span>
          <span className="cursor-blink ml-1 text-accent">_</span>
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
        <img
          className="w-56 border-2 border-neutral-800 object-cover object-center transition-all duration-500 hover:border-accent"
          src="/assets/images/avatar.jpg"
          alt="Avatar-kuva"
          loading="lazy"
        />
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
