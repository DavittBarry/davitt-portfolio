import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <div className="mt-20 border-t border-neutral-900 bg-neutral-950">
    <Section>
      <div className="pb-8 pt-16">
        <div className="mb-8 text-center">
          <p className="text-sm text-neutral-500">© 2025 Davitt Barry</p>
          <a
            href="mailto:davittbarry333@gmail.com"
            className="text-sm text-neutral-400 transition-colors hover:text-accent"
          >
            davittbarry333@gmail.com
          </a>
        </div>

        <div className="mb-8 flex justify-center gap-8">
          <a
            href="https://github.com/DavittBarry"
            className="text-neutral-500 transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/davittbarry/"
            className="text-neutral-500 transition-colors hover:text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-center">
          <a
            href="/privacy"
            className="text-xs text-neutral-600 transition-colors hover:text-neutral-400"
          >
            Privacy Statement
          </a>
        </div>
      </div>
    </Section>
  </div>
);

export { Footer };
