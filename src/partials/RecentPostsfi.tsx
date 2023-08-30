import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import {
  BlogGallery,
  GradientText,
  Section,
} from 'astro-boilerplate-components';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPostsfi = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Viimeisimmät <GradientText>artikkelit</GradientText>
        </div>
        {/* <div className="text-sm">
          <a href="/posts/">Näytä kaikki artikkelit →</a>
        </div> */}
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPostsfi };
