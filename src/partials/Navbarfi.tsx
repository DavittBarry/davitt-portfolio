import {
  NavbarTwoColumns,
  NavMenu,
  Section,
} from 'astro-boilerplate-components';

const Navbarfi = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/fi/" className="group flex items-center">
        <span className="text-base text-neutral-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400">
          Davitt Barry
        </span>
      </a>

      <NavMenu>
        <div className="flex items-center gap-6 text-base">
          <a
            href="/fi/"
            className="group relative text-neutral-400 transition-all duration-300 hover:text-cyan-400"
          >
            <span>Etusivu</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/fi/dev"
            className="group relative text-neutral-400 transition-all duration-300 hover:text-accent"
          >
            <span>Kehitys</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/fi/audiopalvelut"
            className="group relative text-neutral-400 transition-all duration-300 hover:text-cyan-400"
          >
            <span>Audio</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/fi/musiikki"
            className="group relative text-neutral-400 transition-all duration-300 hover:text-emerald-400"
          >
            <span>Musiikki</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/fi/yhteystiedot"
            className="group relative text-neutral-400 transition-all duration-300 hover:text-neutral-300"
          >
            <span>Yhteystiedot</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-neutral-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <div className="ml-4 flex items-center space-x-2 border border-neutral-700 px-3 py-1 transition-all duration-300 hover:border-accent">
            <a
              href="/"
              className="font-mono text-sm text-neutral-400 hover:text-accent"
            >
              EN
            </a>
            <span className="text-sm text-neutral-600">/</span>
            <a
              href="/fi/"
              className="font-mono text-sm text-neutral-400 hover:text-accent"
            >
              FI
            </a>
          </div>
        </div>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbarfi };
