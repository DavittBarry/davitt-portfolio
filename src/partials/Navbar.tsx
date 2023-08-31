import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <rect x="3" y="12" width="6" height="8" rx="1"></rect>
              <rect x="9" y="8" width="6" height="12" rx="1"></rect>
              <rect x="15" y="4" width="6" height="16" rx="1"></rect>
              <path d="M4 20h14"></path>
            </svg>
          }
          name="Davitt's portfolio"
        />
      </a>

      <NavMenu>
        <div className="p-3">
          <NavMenuItem href="https://github.com/DavittBarry">
            GitHub
          </NavMenuItem>
        </div>
        <div className="p-3">
          <NavMenuItem href="https://www.linkedin.com/in/davittbarry/">
            LinkedIn
          </NavMenuItem>
        </div>
        <div className="flex items-center space-x-2 rounded bg-blue-500 px-3 py-2 hover:bg-blue-600">
          <a href="/" className="text-lg text-white hover:text-cyan-400">
            EN
          </a>
          <span className="text-lg text-white">|</span>
          <a href="/fi/" className="text-lg text-white hover:text-cyan-400">
            FI
          </a>
        </div>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
