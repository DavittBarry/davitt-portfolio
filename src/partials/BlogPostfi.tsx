import type { IFrontmatter } from 'astro-boilerplate-components';
import { PostContent, PostHeader, Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPostfi = (props: IBlogPostProps) => {
  // console.log('Props in BlogPost:', props);

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
            className="text-cyan-400"
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
