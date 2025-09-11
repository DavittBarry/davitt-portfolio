import { Section } from 'astro-boilerplate-components';

const Footerfi = () => (
  <Section>
    <div className="mt-16 border-t border-neutral-800 pt-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="text-center text-neutral-500">
          <p className="font-light">
            &copy; {new Date().getFullYear()} Davitt Barry
          </p>
          <p className="mt-2">
            <a
              href="mailto:davittbarry333@gmail.com"
              className="font-mono text-sm text-neutral-400 transition-colors hover:text-accent"
            >
              davittbarry333@gmail.com
            </a>
          </p>
        </div>
        <div className="flex space-x-8 text-sm">
          <a
            href="https://github.com/DavittBarry"
            className="text-neutral-500 transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/davittbarry/"
            className="text-neutral-500 transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href="/tietosuoja"
            className="text-xs text-neutral-600 transition-colors hover:text-accent"
          >
            Tietosuojakäytäntö
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export { Footerfi };
