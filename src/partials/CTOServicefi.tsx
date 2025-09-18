import { Section } from 'astro-boilerplate-components';

const CTOServicefi = () => {
  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-light text-white">
          Tarvitsetko verkkosivut tai verkkosovelluksen?
        </h2>
        <div className="border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8">
          <p className="mb-6 text-neutral-400">
            Haluatko rakentaa uudet verkkosivut, modernisoida nykyisen alustasi
            tai kehittää räätälöidyn verkkosovelluksen? Tarjoan kattavia
            web-kehityspalveluita tarpeisiisi sopivasti.
          </p>

          <div className="mb-8 space-y-4">
            <div className="flex gap-4">
              <div className="text-cyan-400">▸</div>
              <div>
                <h3 className="mb-2 text-lg text-white">
                  Räätälöity web-kehitys
                </h3>
                <p className="text-sm text-neutral-400">
                  Full-stack kehitystä moderneilla teknologioilla kuten React,
                  Next.js, Node.js ja TypeScript.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-cyan-400">▸</div>
              <div>
                <h3 className="mb-2 text-lg text-white">
                  Verkkokaupparatkaisut
                </h3>
                <p className="text-sm text-neutral-400">
                  Verkkokauppojen rakentaminen turvallisilla
                  maksujärjestelmillä, varastonhallinnalla ja
                  käyttäjäystävällisillä käyttöliittymillä.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-cyan-400">▸</div>
              <div>
                <h3 className="mb-2 text-lg text-white">
                  Verkkosivujen modernisointi
                </h3>
                <p className="text-sm text-neutral-400">
                  Vanhojen verkkosivujen päivitys modernilla suunnittelulla,
                  paremmalla suorituskyvyllä ja mobiiliresponsiivisuudella.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-cyan-400">▸</div>
              <div>
                <h3 className="mb-2 text-lg text-white">
                  Tekninen konsultointi
                </h3>
                <p className="text-sm text-neutral-400">
                  Arkkitehtuurin suunnittelu, teknologiapinon valinta ja
                  kehitysstrategia projektillesi.
                </p>
              </div>
            </div>
          </div>

          <p className="mb-8 text-neutral-400">
            Jokainen projekti on ainutlaatuinen, ja hinnoittelu riippuu
            laajuudesta, monimutkaisuudesta ja aikataulusta. Tarjoan
            kilpailukykyisiä hintoja sekä kertaluontoisille projekteille että
            jatkuville kehityskumppanuuksille. Ota yhteyttä projektisi tiedoilla
            saadaksesi henkilökohtaisen tarjouksen.
          </p>

          <div className="text-center">
            <a
              href="/fi/yhteystiedot"
              className="inline-block border border-cyan-400 px-6 py-3 text-cyan-400 transition-all hover:bg-cyan-400/10"
            >
              Pyydä tarjous projektillesi →
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { CTOServicefi };
