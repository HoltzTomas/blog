import { basehub } from "basehub";
import { RichText } from "basehub/react-rich-text";
import { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PostViews } from "../../components/PostViews";
import { RichTextComponents } from "../../components/RichTextComponents";
import { formatDisplayDate, getSeriesMeta } from "../../components/site-data";
import redis from "../../redis";

const PostWaveCanvas = dynamic(() => import("../../components/three/PostWaveCanvas"), {
  ssr: false,
});

export const revalidate = 60;

interface PageProps {
  params: {
    slug: string;
  };
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
  });

  return data.posts.items[0] || null;
}

async function getInitialViews(slug: string) {
  const views = (await redis.hget("views", slug)) ?? 0;
  return Number(views);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post not found",
    };
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
  };
}

export default async function PostPage({ params }: PageProps) {
  const [post, initialViews] = await Promise.all([getPost(params.slug), getInitialViews(params.slug)]);

  if (!post) {
    notFound();
  }

  const seriesMeta = getSeriesMeta(post.series || "");
  const publishedLabel = formatDisplayDate(post.publishedAt);

  return (
    <article className="page-shell">
      <div className="post-page">
        <Link href="/blog" className="post-back" data-cursor="hover">
          ← Back to Blog
        </Link>

        <div className="post-meta-row">
          <span className="post-category-badge">{seriesMeta.badge}</span>
          <PostViews slug={post.slug} initialViews={initialViews} />
        </div>

        <h1 className="post-title">{post._title}</h1>

        {post.coverImage?.url ? (
          <div className="post-cover-wrap">
            <Image
              src={post.coverImage.url}
              alt={post.coverImage.alt || post._title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 820px"
            />
          </div>
        ) : (
          <div className="post-canvas-wrap">
            <PostWaveCanvas />
          </div>
        )}

        {publishedLabel || post.author ? (
          <div className="post-meta-line">
            {[publishedLabel, post.author].filter(Boolean).join(" · ")}
          </div>
        ) : null}

        <div className="article-richtext">
          <RichText components={RichTextComponents}>{post.content.json.content}</RichText>
        </div>
      </div>
    </article>
  );
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
  });

  return data.posts.items.map((post) => ({
    slug: post.slug,
  }));
}
