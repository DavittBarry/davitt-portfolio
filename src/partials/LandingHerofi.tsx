import { Section } from 'astro-boilerplate-components';
import { useState } from 'react';

const LandingHerofi = () => {
  const [imageExpanded, setImageExpanded] = useState(false);

  return (
    <Section>
      <style>{`
        .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          cursor: pointer;
        }
        .image-modal img {
          width: auto;
          height: auto;
          max-width: 80%;
          max-height: 80vh;
          object-fit: contain;
          border: 2px solid #404040;
        }
      `}</style>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <img
          src="/assets/images/avatar.jpg"
          alt="Davitt Barry"
          className="mb-8 w-80 cursor-pointer border-2 border-neutral-800 object-cover object-center transition-all duration-500 hover:scale-105 hover:border-accent md:w-96"
          onClick={() => setImageExpanded(true)}
        />

        {imageExpanded && (
          <div className="image-modal" onClick={() => setImageExpanded(false)}>
            <img src="/assets/images/avatar.jpg" alt="Davitt Barry" />
          </div>
        )}

        <h1 className="mb-6 text-6xl font-light text-white md:text-7xl">
          Davitt Barry
        </h1>

        <p className="mb-2 text-xl font-light text-neutral-400 md:text-2xl">
          IT-ammattilainen • Muusikko • Ääniteknikko
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-neutral-500">
          <span className="border-l-2 border-accent pl-3">
            Full-Stack kehittäjä
          </span>
          <span className="border-l-2 border-cyan-400 pl-3">
            Musiikin tuottaja
          </span>
          <span className="border-l-2 border-emerald-400 pl-3">
            Miksaus & masterointi
          </span>
        </div>

        <p className="mt-8 max-w-2xl px-4 text-neutral-400">
          Monitaitoinen luova ammattilainen Helsingistä. Yhdistän teknisen IT-
          ja web-kehitysosaamisen taiteelliseen näkemykseen musiikin tuotannossa
          ja äänitekniikassa. Yli 15 vuoden kokemus teknologian ja luovien
          alojen parissa.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="https://github.com/DavittBarry"
            className="block border border-neutral-700 p-3 transition-all duration-200 hover:scale-110 hover:border-accent hover:bg-accent/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/github-mark-white.svg"
              alt="GitHub"
              className="h-5 w-5"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/davittbarry/"
            className="block border border-neutral-700 p-3 transition-all duration-200 hover:scale-110 hover:border-accent hover:bg-accent/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/square-linkedin-512.webp"
              alt="LinkedIn"
              className="h-5 w-5"
            />
          </a>
        </div>
      </div>
    </Section>
  );
};

export { LandingHerofi };
