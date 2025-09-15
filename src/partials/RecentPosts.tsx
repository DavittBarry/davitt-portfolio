import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import { Section } from 'astro-boilerplate-components';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section>
    <div className="mb-6 flex items-baseline justify-between">
      <div className="text-3xl font-light text-white">
        Recent <span className="text-cyan-400">Posts</span>
      </div>
      <a
        href="/"
        className="border border-neutral-700 px-3 py-1 text-sm text-neutral-400 transition-colors hover:border-accent hover:text-accent"
      >
        ← Back to Home
      </a>
    </div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {props.postList.map((post) => (
        <a
          href={post.url}
          key={post.url}
          className="group block border border-neutral-800 bg-gradient-to-br from-dark-100 to-dark-200 p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10"
        >
          {post.frontmatter.imgSrc && (
            <img
              src={post.frontmatter.imgSrc}
              alt={post.frontmatter.imgAlt || post.frontmatter.title}
              className="mb-4 h-48 w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
            />
          )}
          <h3 className="mb-2 text-xl font-light text-white transition-colors group-hover:text-cyan-400">
            {post.frontmatter.title}
          </h3>
          <p className="mb-3 text-sm text-neutral-500">
            {post.frontmatter.pubDate}
          </p>
          <p className="line-clamp-3 text-sm text-neutral-400">
            {post.frontmatter.description}
          </p>
        </a>
      ))}
    </div>
  </Section>
);

export { RecentPosts };
