import {
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/" className="group flex items-center">
        <span className="text-xl font-light text-white">Davitt Barry</span>
      </a>

      <NavMenu>
        <div className="p-2">
          <NavMenuItem href="https://github.com/DavittBarry">
            GitHub
          </NavMenuItem>
        </div>
        <div className="p-2">
          <NavMenuItem href="https://www.linkedin.com/in/davittbarry/">
            LinkedIn
          </NavMenuItem>
        </div>
        <div className="flex items-center space-x-2 border border-neutral-700 px-3 py-1 transition-colors hover:border-accent">
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
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
