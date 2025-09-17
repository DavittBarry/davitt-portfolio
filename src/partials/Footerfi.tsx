import { Section } from 'astro-boilerplate-components';

const Footerfi = () => (
  <div className="mt-20 border-t border-slate-700 bg-slate-800">
    <Section>
      <div className="pb-8 pt-16">
        <div className="mb-8 text-center">
          <p className="text-sm text-slate-400">© 2025 Davitt Barry</p>
          <a
            href="mailto:davittbarry333@gmail.com"
            className="text-sm text-slate-300 transition-colors hover:text-accent"
          >
            davittbarry333@gmail.com
          </a>
        </div>

        <div className="mb-8 flex justify-center gap-8">
          <a
            href="https://github.com/DavittBarry"
            className="text-slate-400 transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/davittbarry/"
            className="text-slate-400 transition-colors hover:text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-center">
          <a
            href="/fi/tietosuoja"
            className="text-xs text-slate-500 transition-colors hover:text-slate-300"
          >
            Tietosuojaseloste
          </a>
        </div>
      </div>
    </Section>
  </div>
);

export { Footerfi };
