import { Section } from 'astro-boilerplate-components';

const CVDownloadfi = () => (
  <Section>
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-8 text-3xl font-semibold">Lataa CV:ni</h2>
      <div className="mb-8">
        <a
          href="/polku/cv-in-english.pdf"
          download
          className="mr-4 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        >
          Lataa englanniksi
        </a>
        <a
          href="/polku/cv-in-finnish.pdf"
          download
          className="rounded-full bg-green-500 px-4 py-2 text-white hover:bg-green-700"
        >
          Lataa suomeksi
        </a>
      </div>
    </div>
  </Section>
);

export { CVDownloadfi };
