"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function ViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const slug = pathname.split("/")[2]
    const isBlogPost = pathname.startsWith("/blog/") && slug

    if (!isBlogPost) return

    const url = "/api/view?incr=1&slug=" + encodeURIComponent(slug)

    fetch(url)
      .then((res) => res.json())
      .catch(console.error)
  }, [pathname])

  return null
}
