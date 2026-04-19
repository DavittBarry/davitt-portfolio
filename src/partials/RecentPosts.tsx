import type { MarkdownInstance } from 'astro';
import { useState } from 'react';

import type { IFrontmatter } from '@/components/boilerplate';
import { Section } from '@/components/boilerplate';
import type { Locale } from '@/utils/i18n';

type Props = {
  postList: MarkdownInstance<IFrontmatter>[];
  locale: Locale;
};

const labels = {
  en: {
    headingPre: 'Recent ',
    headingEm: 'Posts',
    dateLocale: 'en-US',
    showLess: '← Show Less',
    showAll: (n: number) => `View All Posts (${n})`,
  },
  fi: {
    headingPre: 'Viimeisimmät ',
    headingEm: 'artikkelit',
    dateLocale: 'fi-FI',
    showLess: '← Näytä vähemmän',
    showAll: (n: number) => `Näytä kaikki artikkelit (${n})`,
  },
} as const;

const RecentPosts = ({ postList, locale }: Props) => {
  const t = labels[locale];
  const [showAll, setShowAll] = useState(false);

  const sortedPosts = [...postList].sort((a, b) => {
    const dateA = new Date(a.frontmatter.pubDate).getTime();
    const dateB = new Date(b.frontmatter.pubDate).getTime();
    return dateB - dateA;
  });

  const displayedPosts = showAll ? sortedPosts : sortedPosts.slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(t.dateLocale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Section>
      <div className="mb-6 text-3xl font-light text-white">
        {t.headingPre}
        <span className="text-cyan-400">{t.headingEm}</span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {displayedPosts.map((post) => {
          const postUrl = post.url?.startsWith('/') ? post.url : `/${post.url}`;
          const href = locale === 'fi' ? postUrl.replace('/fi/', '/') : postUrl;
          return (
            <a
              href={href}
              key={href}
              className="group block border border-neutral-800 bg-linear-to-br from-dark-100 to-dark-200 p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              {post.frontmatter.imgSrc && (
                <img
                  src={post.frontmatter.imgSrc}
                  alt={post.frontmatter.imgAlt || post.frontmatter.title}
                  loading="lazy"
                  className="mb-4 h-48 w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
              )}
              <h3 className="mb-2 text-xl font-light text-white transition-colors group-hover:text-cyan-400">
                {post.frontmatter.title}
              </h3>
              <p className="mb-3 text-sm text-neutral-500">
                {formatDate(post.frontmatter.pubDate)}
              </p>
              <p className="line-clamp-3 text-sm text-neutral-400">
                {post.frontmatter.description}
              </p>
            </a>
          );
        })}
      </div>

      {sortedPosts.length > 3 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center border border-neutral-700 px-4 py-2 text-neutral-400 transition-colors hover:border-accent hover:text-accent"
          >
            {showAll ? t.showLess : t.showAll(sortedPosts.length)}
          </button>
        </div>
      )}
    </Section>
  );
};

export { RecentPosts };
