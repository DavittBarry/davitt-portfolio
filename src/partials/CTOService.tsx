import { Section } from 'astro-boilerplate-components';

const CTOService = () => {
  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-light text-white">
          Need a website or web application?
        </h2>
        <div className="border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8">
          <p className="mb-6 text-neutral-400">
            Looking to build a new website, modernize your existing platform, or
            develop a custom web application? I offer comprehensive web
            development services tailored to your needs.
          </p>

          <div className="mb-8 space-y-4">
            <div className="flex gap-4">
              <div className="text-cyan-400">▸</div>
              <div>
                <h3 className="mb-2 text-lg text-white">
                  Custom Web Development
                </h3>
                <p className="text-sm text-neutral-400">
                  Full-stack development using modern technologies like React,
                  Next.js, Node.js, and TypeScript.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-cyan-400">▸</div>
              <div>
                <h3 className="mb-2 text-lg text-white">
                  E-commerce Solutions
                </h3>
                <p className="text-sm text-neutral-400">
                  Build online stores with secure payment processing, inventory
                  management, and user-friendly interfaces.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-cyan-400">▸</div>
              <div>
                <h3 className="mb-2 text-lg text-white">
                  Website Modernization
                </h3>
                <p className="text-sm text-neutral-400">
                  Update legacy websites with modern design, improved
                  performance, and mobile responsiveness.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-cyan-400">▸</div>
              <div>
                <h3 className="mb-2 text-lg text-white">
                  Technical Consultation
                </h3>
                <p className="text-sm text-neutral-400">
                  Architecture planning, technology stack selection, and
                  development strategy for your project.
                </p>
              </div>
            </div>
          </div>

          <p className="mb-8 text-neutral-400">
            Every project is unique, and pricing depends on scope, complexity,
            and timeline. I offer competitive rates for both one-time projects
            and ongoing development partnerships. Contact me with your project
            details for a personalized quote.
          </p>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-block border border-cyan-400 px-6 py-3 text-cyan-400 transition-all hover:bg-cyan-400/10"
            >
              Get a quote for your project →
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { CTOService };
