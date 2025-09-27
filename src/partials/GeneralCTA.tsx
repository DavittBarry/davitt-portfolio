import { GradientText, Section } from 'astro-boilerplate-components';

const GeneralCTA = () => (
  <Section>
    <div className="mx-auto max-w-4xl">
      <div className="border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 text-center">
        <h2 className="mb-4 text-3xl font-light text-white">
          Let's create something <GradientText>together</GradientText>
        </h2>
        <p className="mb-8 text-lg text-neutral-400">
          Whether you need a skilled developer for your next project,
          professional audio engineering services, or original music
          compositions, I'm here to help bring your vision to life.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="inline-block border border-emerald-400 px-6 py-3 text-emerald-400 transition-all hover:bg-emerald-400/10"
          >
            Get in touch →
          </a>
          <a
            href="mailto:davittbarry333@gmail.com?subject=Project Inquiry"
            className="inline-block border border-cyan-400 px-6 py-3 text-cyan-400 transition-all hover:bg-cyan-400/10"
          >
            Email directly →
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 text-sm text-neutral-500 md:grid-cols-3">
          <div>
            <span className="text-emerald-400">•</span> Full-Stack Development
          </div>
          <div>
            <span className="text-cyan-400">•</span> Audio Mixing & Mastering
          </div>
          <div>
            <span className="text-purple-400">•</span> Music Production
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { GeneralCTA };
