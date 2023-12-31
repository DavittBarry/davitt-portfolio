import { Section } from 'astro-boilerplate-components';

const CVDownload = () => (
  <Section>
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-8 text-3xl font-semibold">Download My CV</h2>
      <div className="mb-8 flex flex-col lg:flex-row">
        <a
          href="/Davitt-Barry-CV-English.pdf"
          download
          className="mb-4 rounded-full bg-blue-500 px-4 py-2 text-center text-white hover:bg-blue-700 lg:mb-0 lg:mr-4"
        >
          Download in English
        </a>
        <a
          href="/Davitt-Barry-CV-Suomeksi.pdf"
          download
          className="mb-4 rounded-full bg-green-500 px-4 py-2 text-center text-white hover:bg-green-700 lg:mb-0 lg:mr-4"
        >
          Lataa suomeksi
        </a>
      </div>
    </div>
  </Section>
);

export { CVDownload };
