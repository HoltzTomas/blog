import Image from "next/image";
import Link from "next/link";

import { getPosts } from "../get-posts";
import { formatDisplayDate, getSeriesMeta, sortByPublishedDate, talks } from "../components/site-data";

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  const groupedPosts = sortByPublishedDate(posts).reduce<Record<string, typeof posts>>((groups, post) => {
    const key = post.series || "notes";
    groups[key] ??= [];
    groups[key].push(post);
    return groups;
  }, {});

  const orderedGroups = Object.entries(groupedPosts).sort(([leftKey], [rightKey]) => {
    return getSeriesMeta(leftKey).order - getSeriesMeta(rightKey).order;
  });

  return (
    <div className="page-shell">
      <section className="blog-header">
        <h1 className="blog-header-title">Blog</h1>
        <p className="blog-header-sub">
          Writing about code, products, failures, side projects, and whatever else seems worth
          documenting.
        </p>
      </section>

      <div className="blog-content">
        {orderedGroups.map(([series, seriesPosts]) => {
          const meta = getSeriesMeta(series);

          return (
            <section key={series} id={series} className="blog-category">
              <div className="blog-category-title">
                <span>{meta.label}</span>
                <span>Views</span>
              </div>

              <div>
                {seriesPosts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={`blog-post-row reveal-item ${index < 5 ? "" : "is-revealed"}`.trim()}
                    data-reveal={index < 5 ? "true" : undefined}
                    data-cursor="hover"
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    <div>
                      <div className="blog-post-title-wrap">
                        <span className="blog-post-title">{post.title}</span>
                      </div>
                      <div className="blog-post-date">
                        {formatDisplayDate(post.publishedAt) ?? "Sin fecha"} · {meta.badge}
                      </div>
                    </div>
                    <div className="blog-post-views">{post.viewsFormatted}</div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="talks-section">
        <h2 className="talks-title">Talks</h2>

        <div className="talks-grid">
          {talks.map((talk) => (
            <a
              key={talk.id}
              href={talk.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="talk-card"
              data-cursor="hover"
            >
              <div className="talk-thumbnail">
                <Image
                  src={`https://i.ytimg.com/vi/${talk.youtubeId}/hqdefault.jpg`}
                  alt={talk.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="talk-play" aria-hidden="true">
                  <div className="talk-play-btn">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="talk-info">
                <div className="talk-label">{talk.label}</div>
                <div className="talk-name">{talk.title}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
