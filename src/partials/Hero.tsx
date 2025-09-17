import { HeroAvatar, Section } from 'astro-boilerplate-components';
import { useState } from 'react';

const Hero = () => {
  const [imageExpanded, setImageExpanded] = useState(false);

  return (
    <Section>
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
        .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
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
      <HeroAvatar
        title={
          <>
            <span className="font-light">Hello, I'm </span>
            <span className="font-normal text-accent">Davitt</span>
            <span className="cursor-blink ml-1 text-accent">_</span>
          </>
        }
        description={
          <div className="leading-relaxed text-neutral-400">
            A focused and dedicated ICT professional with also a background in
            music spanning over 15 years. Transitioned back into IT/web
            development four years ago, seeking opportunities to leverage a
            diverse skill set in website management/creation, service desk
            technical help, and various programming languages.
          </div>
        }
        avatar={
          <div className="flex flex-col items-center">
            <img
              className="w-80 cursor-pointer border-2 border-neutral-800 object-cover object-center transition-all duration-500 hover:scale-105 hover:border-accent md:w-96"
              src="/assets/images/cv-shot.jpg"
              alt="Davitt Barry"
              loading="lazy"
              onClick={() => setImageExpanded(true)}
            />
            {imageExpanded && (
              <div
                className="image-modal"
                onClick={() => setImageExpanded(false)}
              >
                <img src="/assets/images/cv-shot.jpg" alt="Davitt Barry" />
              </div>
            )}
            <div className="mt-6 flex gap-4">
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
          </div>
        }
        socialButtons={<></>}
      />
    </Section>
  );
};

export { Hero };
