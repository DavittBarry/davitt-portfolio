import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <div className="mt-10 border-t border-slate-700 bg-slate-800">
    <Section>
      <div className="py-2">
        <div className="mb-6 text-center">
          <p className="text-base text-slate-400">© 2025 Davitt Barry</p>
          <a
            href="mailto:davittbarry333@gmail.com"
            className="text-base text-slate-300 transition-colors hover:text-accent"
          >
            davittbarry333@gmail.com
          </a>
        </div>

        <div className="mb-6 flex justify-center gap-8">
          <a
            href="https://github.com/DavittBarry"
            className="text-base text-slate-400 transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/davittbarry/"
            className="text-base text-slate-400 transition-colors hover:text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-center">
          <a
            href="/privacy"
            className="text-sm text-slate-500 transition-colors hover:text-slate-300"
          >
            Privacy Statement
          </a>
        </div>
      </div>
    </Section>
  </div>
);

export { Footer };
