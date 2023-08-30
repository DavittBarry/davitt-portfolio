import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Davitt Barry</p>
        <p>
          <strong>Email: </strong>
          <a
            href="mailto:davittbarry333@gmail.com"
            className="hover:text-cyan-400"
          >
            davittbarry333@gmail.com
          </a>
        </p>
      </div>
      <div className="flex space-x-8">
        <a href="/posts/" className="hover:text-cyan-400">
          Blogs
        </a>
        <a
          href="https://github.com/DavittBarry"
          className="hover:text-cyan-400"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/davittbarry/"
          className="hover:text-cyan-400"
        >
          LinkedIn
        </a>
      </div>
      <div>
        <a href="/privacy" className="hover:text-cyan-400">
          Privacy Statement
        </a>
      </div>
    </div>
  </Section>
);

export { Footer };
