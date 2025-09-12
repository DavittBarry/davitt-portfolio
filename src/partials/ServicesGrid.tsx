import { Section } from 'astro-boilerplate-components';

const ServicesGrid = () => (
  <Section>
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
      {/* Web Development Card */}
      <a
        href="/dev"
        className="group relative border border-neutral-800 bg-dark-100 p-8 transition-all duration-300 hover:border-accent/50"
      >
        <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100"></div>

        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-light text-white transition-colors group-hover:text-accent">
            Web Development
          </h2>
          <span className="font-mono text-2xl text-accent">&lt;/&gt;</span>
        </div>

        <p className="mb-6 text-neutral-400">
          Full-stack development services, from responsive websites to complex
          web applications. Specialized in modern JavaScript frameworks,
          WordPress, and custom solutions.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            React
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Vue
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Node.js
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            WordPress
          </span>
        </div>

        <div className="mt-6 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
          View Portfolio & CV →
        </div>
      </a>

      {/* Audio Services Card */}
      <a
        href="/audio-services"
        className="group relative border border-neutral-800 bg-dark-100 p-8 transition-all duration-300 hover:border-cyan-400/50"
      >
        <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-y-100"></div>

        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-light text-white transition-colors group-hover:text-cyan-400">
            Audio Services
          </h2>
          <span className="text-2xl text-cyan-400">♪</span>
        </div>

        <p className="mb-6 text-neutral-400">
          Professional music production, mixing, and mastering services. From
          original compositions to commercial-ready polish for your tracks.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Production
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Mixing
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Mastering
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Sound Design
          </span>
        </div>

        <div className="mt-6 text-sm text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
          Services & Rates →
        </div>
      </a>

      {/* Original Music Card */}
      <a
        href="/music"
        className="group relative border border-neutral-800 bg-dark-100 p-8 transition-all duration-300 hover:border-emerald-400/50"
      >
        <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-emerald-400 transition-transform duration-300 group-hover:scale-y-100"></div>

        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-light text-white transition-colors group-hover:text-emerald-400">
            Original Music
          </h2>
          <span className="text-2xl text-emerald-400">⚡</span>
        </div>

        <p className="mb-6 text-neutral-400">
          My original compositions and releases. Electronic, ambient, and
          experimental music exploring sonic boundaries.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Electronic
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Ambient
          </span>
          <span className="border border-neutral-700 px-2 py-1 text-xs text-neutral-500">
            Experimental
          </span>
        </div>

        <div className="mt-6 text-sm text-emerald-400 opacity-0 transition-opacity group-hover:opacity-100">
          Listen & Explore →
        </div>
      </a>

      {/* Contact Card */}
      <a
        href="/contact"
        className="group relative border border-neutral-800 bg-dark-100 p-8 transition-all duration-300 hover:border-neutral-600"
      >
        <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-neutral-400 transition-transform duration-300 group-hover:scale-y-100"></div>

        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-light text-white transition-colors group-hover:text-neutral-300">
            Get In Touch
          </h2>
          <span className="text-2xl text-neutral-400">@</span>
        </div>

        <p className="mb-6 text-neutral-400">
          Based in Helsinki, Finland. Available for remote work globally and
          on-site projects in the Nordic region.
        </p>

        <div className="space-y-2">
          <p className="text-neutral-400">Let's discuss your project</p>
        </div>

        <div className="mt-6 text-sm text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100">
          Contact Information →
        </div>
      </a>
    </div>
  </Section>
);

export { ServicesGrid };
