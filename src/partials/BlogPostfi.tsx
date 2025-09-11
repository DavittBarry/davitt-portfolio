import type { IFrontmatter } from 'astro-boilerplate-components';
import { PostContent, PostHeader, Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPostfi = (props: IBlogPostProps) => {
  let innerHTML: string | null = null;

  if (typeof props.children === 'object' && props.children !== null) {
    const value = (props.children as any).props?.value?.default;

    if (value && typeof value !== 'string') {
      innerHTML = value.toString();
    } else if (typeof value === 'string') {
      innerHTML = value;
    }
  }

  return (
    <Section>
      <PostHeader content={props.frontmatter} author={AppConfig.author} />
      <PostContent content={props.frontmatter}>
        {innerHTML && (
          <div
            className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-neutral-300 prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent/80 prose-strong:text-white"
            dangerouslySetInnerHTML={{
              __html: innerHTML,
            }}
          />
        )}
      </PostContent>
    </Section>
  );
};

export { BlogPostfi };
