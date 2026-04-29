"use client";

import commaNumber from "comma-number";
import { useEffect, useState } from "react";

type PostViewsProps = {
  slug: string;
  initialViews: number;
};

export function PostViews({ slug, initialViews }: PostViewsProps) {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/view?incr=1&slug=${encodeURIComponent(slug)}`)
      .then((response) => response.json())
      .then((payload) => {
        if (!cancelled && typeof payload.views === "number") {
          setViews(payload.views);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setViews(initialViews);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [initialViews, slug]);

  return <span className="post-views">{commaNumber(views)} views</span>;
}
