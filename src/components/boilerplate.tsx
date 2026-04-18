import type { MarkdownInstance, Page } from 'astro';
import { format } from 'date-fns';
import type { ReactNode } from 'react';

export interface IFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
  draft: boolean;
}

export type { MarkdownInstance } from 'astro';
export type FrontmatterPage = Page<MarkdownInstance<IFrontmatter>>;

type SectionProps = { title?: ReactNode; children: ReactNode };
export const Section = ({ title, children }: SectionProps) => (
  <div className="mx-auto max-w-screen-lg px-3 py-6">
    {title && <div className="mb-6 text-2xl font-bold">{title}</div>}
    {children}
  </div>
);

export const GradientText = ({ children }: { children: ReactNode }) => (
  <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
    {children}
  </span>
);

type HeroAvatarProps = {
  title: ReactNode;
  description: ReactNode;
  avatar: ReactNode;
  socialButtons: ReactNode;
};
export const HeroAvatar = ({
  title,
  description,
  avatar,
  socialButtons,
}: HeroAvatarProps) => (
  <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-6 text-xl leading-9">{description}</p>
      <div className="mt-3 flex gap-1">{socialButtons}</div>
    </div>
    <div className="shrink-0">{avatar}</div>
  </div>
);

export const ColorTags = {
  SLATE: 'SLATE',
  GRAY: 'GRAY',
  ZINC: 'ZINC',
  NEUTRAL: 'NEUTRAL',
  STONE: 'STONE',
  RED: 'RED',
  ORANGE: 'ORANGE',
  AMBER: 'AMBER',
  YELLOW: 'YELLOW',
  LIME: 'LIME',
  GREEN: 'GREEN',
  EMERALD: 'EMERALD',
  TEAL: 'TEAL',
  CYAN: 'CYAN',
  SKY: 'SKY',
  BLUE: 'BLUE',
  INDIGO: 'INDIGO',
  VIOLET: 'VIOLET',
  PURPLE: 'PURPLE',
  FUCHSIA: 'FUCHSIA',
  PINK: 'PINK',
  ROSE: 'ROSE',
} as const;

type PostContentProps = { content: IFrontmatter; children: ReactNode };
export const PostContent = ({ content, children }: PostContentProps) => (
  <div className="mx-auto mt-5 max-w-prose">
    <div className="aspect-h-2 aspect-w-3">
      <img
        className="h-full w-full rounded-lg object-cover object-center"
        src={content.imgSrc}
        alt={content.imgAlt}
        loading="lazy"
      />
    </div>
    <div className="prose prose-invert mt-8 prose-img:rounded-lg">
      {children}
    </div>
  </div>
);

type PostHeaderProps = { content: IFrontmatter; author: string };
export const PostHeader = ({ content, author }: PostHeaderProps) => (
  <>
    <h1 className="text-center text-3xl font-bold">{content.title}</h1>
    <div className="mt-2 text-center text-sm text-gray-400">
      By {author} on {format(new Date(content.pubDate), 'LLL d, yyyy')}
    </div>
  </>
);

const BlogCard = ({
  instance,
}: {
  instance: MarkdownInstance<IFrontmatter>;
}) => (
  <a className="hover:translate-y-1" href={instance.url}>
    <div className="overflow-hidden rounded-md bg-slate-800">
      <div className="aspect-h-2 aspect-w-3">
        <img
          className="h-full w-full object-cover object-center"
          src={instance.frontmatter.imgSrc}
          alt={instance.frontmatter.imgAlt}
          loading="lazy"
        />
      </div>
      <div className="px-3 pb-6 pt-4 text-center">
        <h2 className="text-xl font-semibold">{instance.frontmatter.title}</h2>
        <div className="mt-1 text-xs text-gray-400">
          {format(new Date(instance.frontmatter.pubDate), 'LLL d, yyyy')}
        </div>
        <div className="mt-2 text-sm">{instance.frontmatter.description}</div>
      </div>
    </div>
  </a>
);

type BlogGalleryProps = { postList: MarkdownInstance<IFrontmatter>[] };
export const BlogGallery = ({ postList }: BlogGalleryProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {postList.map((elt) => (
      <BlogCard instance={elt} key={elt.url} />
    ))}
  </div>
);

export const NewerOlderPagination = ({ page }: { page: FrontmatterPage }) => (
  <div className="flex justify-center gap-8">
    {page.url.prev && <a href={page.url.prev}>← Newer Posts</a>}
    {page.url.next && <a href={page.url.next}>Older Posts →</a>}
  </div>
);

type PaginationHeaderProps = { title: string; description: string };
export const PaginationHeader = ({
  title,
  description,
}: PaginationHeaderProps) => (
  <div className="text-center">
    <h1 className="text-3xl font-bold">{title}</h1>
    <div className="mt-3 text-gray-200">{description}</div>
  </div>
);
