import Link from "next/link"
import { Post, getPosts } from "../get-posts"
import { SiteFooter } from "../components/SiteFooter"

export const revalidate = 60

const talks = [
  {
    id: 1,
    title: "COMO TENER UNA VIDA MUY DIVERTIDA E INTERESANTE | Tom\u00e1s Holtz",
    label: "Provocaci\u00f3n Live 2025",
    youtubeId: "lqC3jkrk_eE",
  },
  {
    id: 2,
    title: "Di una CHARLA SOBRE MI VIDA para +600 PERSONAS | Nodo Tech Week 2024",
    label: "Nodo Tech Week 2024",
    youtubeId: "RSeqn85Crfo",
  },
]

function getPostEmoji(title: string): string {
  const lower = title.toLowerCase()
  if (lower.includes("video") || lower.includes("ai")) return "\uD83E\uDD16"
  if (lower.includes("note studio")) return "\uD83D\uDCDD"
  if (lower.includes("belo")) return "\uD83C\uDFE6"
  if (lower.includes("primer trabajo") || lower.includes("trabajo")) return "\uD83D\uDCBC"
  if (lower.includes("cdp") || lower.includes("agtech")) return "\uD83C\uDF3E"
  if (lower.includes("club") || lower.includes("barrio")) return "\u26BD"
  if (lower.includes("basq")) return "\uD83D\uDCA1"
  return "\uD83D\uDCC4"
}

export default async function BlogPage() {
  const posts = await getPosts()

  const myPathPosts = posts.filter((post) => post.series === "mi-camino-como-programador").reverse()
  const sideProjectsPosts = posts.filter((post) => post.series === "side-projects")

  return (
    <>
      {/* HEADER */}
      <div className="blog-header" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
        <h1 className="blog-header-title">Blog</h1>
        <p className="blog-header-sub">
          Writing about code, products, failures, and whatever else seems interesting.
        </p>
      </div>

      {/* POSTS */}
      <div className="blog-content">
        {/* Side Projects */}
        <div className="blog-category">
          <div className="blog-category-title">
            <span>Side Projects</span>
            <span>Views</span>
          </div>
          {sideProjectsPosts.map((post: Post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="blog-post-row"
              prefetch
            >
              <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
                <span className="blog-post-emoji">{getPostEmoji(post.title)}</span>
                <span className="blog-post-title">{post.title}</span>
              </div>
              <div className="blog-post-views">{post.viewsFormatted ?? "0"}</div>
            </Link>
          ))}
        </div>

        {/* Mi camino como programador */}
        <div className="blog-category">
          <div className="blog-category-title">
            <span>Mi camino como programador</span>
            <span>Views</span>
          </div>
          {myPathPosts.map((post: Post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="blog-post-row"
              prefetch
            >
              <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
                <span className="blog-post-emoji">{getPostEmoji(post.title)}</span>
                <span className="blog-post-title">{post.title}</span>
              </div>
              <div className="blog-post-views">{post.viewsFormatted ?? "0"}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* TALKS */}
      <div className="talks-section">
        <h2 className="talks-title" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
          Talks
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {talks.map((talk) => (
            <div key={talk.id} className="talk-card">
              <div className="talk-thumbnail">
                <iframe
                  src={`https://www.youtube.com/embed/${talk.youtubeId}`}
                  title={talk.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="talk-info">
                <div className="talk-label">{talk.label}</div>
                <div className="talk-name" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
                  {talk.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </>
  )
}
