import { GradientText, Section } from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-4 text-3xl font-semibold">
        Open for <GradientText>new opportunities!</GradientText>
      </h2>
      <p className="mb-8 text-lg">
        If you're seeking a passionate developer for your next project or team,
        I'd be excited to discuss how I can contribute.
      </p>
      <a
        href="mailto:davittbarry333@gmail.com?subject=Opportunity for Collaboration"
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Contact Me
      </a>
    </div>
  </Section>
);

export { CTA };
