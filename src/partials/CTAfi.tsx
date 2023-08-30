import { GradientText, Section } from 'astro-boilerplate-components';

const CTAfi = () => (
  <Section>
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-4 text-3xl font-semibold">
        Avoin uusille mahdollisuuksille{' '}
        <GradientText>työskennellä yhdessä!</GradientText>
      </h2>
      <p className="mb-8 text-lg">
        Jos etsit sitoutunutta kehittäjää seuraavaan projektiin tai tiimiisi,
        olen valmis keskustelemaan siitä miten voisin olla avuksi.
      </p>
      <a
        href="mailto:davittbarry333@gmail.com?subject=Yhteistyömahdollisuus"
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Ota yhteyttä
      </a>
    </div>
  </Section>
);

export { CTAfi };
