// Removed edge runtime as BaseHub requires Node.js runtime

import redis from "@/app/redis";
import { basehub } from "basehub";
import commaNumber from "comma-number";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug") ?? null;

  if (slug === null) {
    return NextResponse.json(
      {
        error: {
          message: 'Missing "slug" query',
          code: "MISSING_SLUG",
        },
      },
      { status: 400 }
    );
  }

  // Check if post exists in BaseHub
  const data = await basehub({ draft: false }).query({
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
      },
    },
  });

  const post = data.posts.items[0];

  if (!post) {
    return NextResponse.json(
      {
        error: {
          message: "Unknown post",
          code: "UNKNOWN_POST",
        },
      },
      { status: 400 }
    );
  }

  if (url.searchParams.get("incr") != null) {
    const views = await redis.hincrby("views", slug, 1);
    return NextResponse.json({
      ...post,
      views,
      viewsFormatted: commaNumber(views),
    });
  } else {
    const views = (await redis.hget("views", slug)) ?? 0;
    return NextResponse.json({
      ...post,
      views,
      viewsFormatted: commaNumber(Number(views)),
    });
  }
}