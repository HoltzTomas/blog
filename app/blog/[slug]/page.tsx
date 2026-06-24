import { basehub } from "basehub"
import { RichText } from "basehub/react-rich-text"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { RichTextComponents } from "../../components/RichTextComponents"
import { SiteFooter } from "../../components/SiteFooter"
import { ViewTracker } from "../../components/ViewTracker"

export const revalidate = 60

interface PageProps {
  params: {
    slug: string
  }
}

async function getPost(slug: string) {
  const data = await basehub({
    draft: false,
    cache: "no-store",
  }).query({
    posts: {
      __args: {
        filter: {
          slug: {
            eq: slug,
          },
        },
      },
      items: {
        _id: true,
        _title: true,
        slug: true,
        content: {
          json: {
            content: true,
          },
        },
        excerpt: true,
        publishedAt: true,
        author: true,
        series: true,
        metaDescription: true,
        coverImage: {
          url: true,
          alt: true,
        },
      },
    },
  })

  return data.posts.items[0] || null
}

function getSeriesLabel(series: string): string {
  if (series === "side-projects") return "Side Projects"
  if (series === "mi-camino-como-programador") return "Mi camino como programador"
  return series
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug)

  if (!post) {
    return { title: "Post not found" }
  }

  return {
    title: post._title,
    description: post.metaDescription || post.excerpt || "",
    metadataBase: new URL("https://tomasholtz.com"),
    openGraph: {
      title: post._title,
      description: post.metaDescription || post.excerpt || "",
      url: `https://tomasholtz.com/blog/${post.slug}`,
      siteName: "Tomas Holtz",
      type: "article",
      images: post.coverImage?.url
        ? [
            {
              url: post.coverImage.url,
              width: 1200,
              height: 630,
              alt: post.coverImage.alt || post._title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      site: "@tomasholtz_",
      creator: "@tomasholtz_",
      title: post._title,
      description: post.metaDescription || post.excerpt || "",
      images: post.coverImage?.url
        ? [
            {
              url: post.coverImage.url,
              alt: post.coverImage.alt || post._title,
            },
          ]
        : undefined,
    },
  }
}

export default async function PostPage({ params }: PageProps) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <ViewTracker />
      <div className="post-page">
        <Link href="/blog" className="post-back">
          &larr; Back to Blog
        </Link>

        <div className="post-meta-row">
          {post.series && (
            <span className="post-category-badge">{getSeriesLabel(post.series)}</span>
          )}
        </div>

        <h1 className="post-title" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
          {post._title}
        </h1>

        <div className="post-body blog-page">
          <RichText components={RichTextComponents}>
            {post.content.json.content}
          </RichText>
        </div>
      </div>

      <SiteFooter />
    </>
  )
}

export async function generateStaticParams() {
  const data = await basehub({
    draft: false,
    cache: "no-store",
  }).query({
    posts: {
      items: {
        slug: true,
      },
    },
  })

  return data.posts.items.map((post) => ({
    slug: post.slug,
  }))
}
