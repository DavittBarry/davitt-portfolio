import { Section } from 'astro-boilerplate-components';

const CVDownloadfi = () => (
  <Section>
    <div className="flex flex-col items-center justify-center py-8">
      <h2 className="mb-8 text-3xl font-light text-white">
        Lataa <span className="text-cyan-400">CV:ni</span>
      </h2>
      <div className="flex flex-col gap-4 lg:flex-row">
        <a
          href="/Davitt-Barry-CV-English.pdf"
          download
          className="group relative overflow-hidden border border-cyan-500 px-6 py-3 text-center text-cyan-400 transition-all duration-300 hover:text-dark"
        >
          <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-500 transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="relative font-light">Lataa englanniksi</span>
        </a>
        <a
          href="/Davitt-Barry-CV-Suomeksi.pdf"
          download
          className="group relative overflow-hidden border border-emerald-500 px-6 py-3 text-center text-emerald-400 transition-all duration-300 hover:text-dark"
        >
          <span className="absolute inset-0 origin-left scale-x-0 bg-emerald-500 transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="relative font-light">Lataa suomeksi</span>
        </a>
      </div>
    </div>
  </Section>
);

export { CVDownloadfi };
