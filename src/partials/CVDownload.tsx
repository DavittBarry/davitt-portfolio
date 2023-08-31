import { Section } from 'astro-boilerplate-components';

const CVDownload = () => (
  <Section>
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-8 text-3xl font-semibold">Download My CV</h2>
      <div className="mb-8">
        <a
          href="/Davitt-Barry-CV-English-2023.pdf"
          download
          className="mr-4 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        >
          Download in English
        </a>
        <a
          href="/Davitt-Barry-CV-Suomeksi-2023.pdf"
          download
          className="rounded-full bg-green-500 px-4 py-2 text-white hover:bg-green-700"
        >
          Lataa suomeksi
        </a>
      </div>
    </div>
  </Section>
);

export { CVDownload };
