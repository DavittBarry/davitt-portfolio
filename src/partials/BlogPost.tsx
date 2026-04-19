import type { IFrontmatter } from '@/components/boilerplate';
import { PostContent, PostHeader, Section } from '@/components/boilerplate';
import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  html: string;
};

const BlogPost = ({ frontmatter, html }: IBlogPostProps) => (
  <Section>
    <div className="m-12">
      <a
        href="/dev"
        className="inline-flex items-center border border-neutral-700 px-12 py-4 text-sm text-neutral-400 transition-colors hover:border-accent hover:text-accent"
      >
        ← Back to Development
      </a>
    </div>
    <PostHeader content={frontmatter} author={AppConfig.author} />
    <PostContent content={frontmatter}>
      <div
        className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-neutral-300 prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent/80 prose-strong:text-white"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </PostContent>
    <div className="m-12">
      <a
        href="/dev"
        className="inline-flex items-center border border-neutral-700 px-12 py-4 text-sm text-neutral-400 transition-colors hover:border-accent hover:text-accent"
      >
        ← Back to Development
      </a>
    </div>
  </Section>
);

export { BlogPost };
