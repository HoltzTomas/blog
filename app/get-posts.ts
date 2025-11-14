import { basehub } from "basehub";
import redis from "./redis";
import commaNumber from "comma-number";

export type Post = {
  id: string;
  title: string;
  series: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  metaDescription: string;
  views: number;
  viewsFormatted: string;
  coverImage?: {
    url: string;
    alt: string | null;
  } | null;
};

// shape of the HSET in redis
type Views = {
  [key: string]: string;
};

export const getPosts = async () => {
  const allViews: null | Views = await redis.hgetall("views");
  
  // Query posts from BaseHub
  const data = await basehub({ 
    draft: false,
    cache: 'no-store' // Force fresh data for production builds
  }).query({
    posts: {
      items: {
        _id: true,
        _title: true,
        slug: true,
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

  const posts = data.posts.items.map((post): Post => {
    const views = Number(allViews?.[post.slug] ?? 0);
    return {
      id: post.slug, // Using slug as ID for compatibility
      title: post._title,
      series: post.series || "",
      slug: post.slug,
      excerpt: post.excerpt || "",
      publishedAt: post.publishedAt,
      author: post.author,
      metaDescription: post.metaDescription || "",
      views,
      viewsFormatted: commaNumber(views),
      coverImage: post.coverImage,
    };
  });
  
  return posts;
};