import { Section } from 'astro-boilerplate-components';

const ServicesGrid = () => (
  <Section>
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-3xl font-light text-white">
        Professional <span className="text-accent">Services</span>
      </h2>
      <p className="mx-auto max-w-2xl text-neutral-400">
        Combining technical expertise with creative vision across three
        specialized fields
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* IT & Development */}
      <a
        href="/dev"
        className="group block cursor-pointer border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 transition-all hover:border-accent/50"
      >
        <div className="mb-4 font-mono text-4xl text-accent">{'</>'}</div>
        <h3 className="mb-3 text-xl font-medium text-white transition-colors group-hover:text-accent">
          IT & Development
        </h3>
        <p className="mb-6 text-neutral-400">
          Full-stack web development services from responsive websites to
          complex applications. Specialized in modern JavaScript frameworks,
          WordPress, and custom solutions.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-accent">▸</span>
            React, Vue, Node.js
          </div>
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-accent">▸</span>
            WordPress, Laravel
          </div>
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-accent">▸</span>
            Database & API Design
          </div>
        </div>
        <div className="mt-6 inline-block text-sm text-accent transition-colors group-hover:text-accent/80">
          View Portfolio →
        </div>
      </a>

      {/* Music Production */}
      <a
        href="/music"
        className="group block cursor-pointer border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 transition-all hover:border-emerald-400/50"
      >
        <div className="mb-4 text-4xl text-emerald-400">♪</div>
        <h3 className="mb-3 text-xl font-medium text-white transition-colors group-hover:text-emerald-400">
          Music Production
        </h3>
        <p className="mb-6 text-neutral-400">
          Original compositions and productions across multiple genres. From
          initial concept to final master, bringing artistic vision to life
          through sound.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-emerald-400">▸</span>
            Original Compositions
          </div>
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-emerald-400">▸</span>
            Arrangement & Orchestration
          </div>
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-emerald-400">▸</span>
            Multi-Genre Production
          </div>
        </div>
        <div className="mt-6 inline-block text-sm text-emerald-400 transition-colors group-hover:text-emerald-400/80">
          Listen to Music →
        </div>
      </a>

      {/* Audio Engineering */}
      <a
        href="/audio-services"
        className="group block cursor-pointer border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 transition-all hover:border-cyan-400/50"
      >
        <div className="mb-4 text-4xl text-cyan-400">⚡</div>
        <h3 className="mb-3 text-xl font-medium text-white transition-colors group-hover:text-cyan-400">
          Audio Engineering
        </h3>
        <p className="mb-6 text-neutral-400">
          Professional mixing and mastering services. From raw recordings to
          commercial-ready polish, ensuring your tracks sound their best across
          all platforms.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-cyan-400">▸</span>
            Mixing & Mastering
          </div>
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-cyan-400">▸</span>
            Audio Restoration
          </div>
          <div className="flex items-center text-neutral-500">
            <span className="mr-2 text-cyan-400">▸</span>
            Podcast Production
          </div>
        </div>
        <div className="mt-6 inline-block text-sm text-cyan-400 transition-colors group-hover:text-cyan-400/80">
          View Services →
        </div>
      </a>
    </div>

    <div className="mt-12 text-center">
      <p className="text-sm text-neutral-500">
        Based in Helsinki, Finland • Available for remote and on-site projects
      </p>
    </div>
  </Section>
);

export { ServicesGrid };
