"use client"

import { useEffect } from "react"

export function ScrollNav() {
  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector(".site-nav")
      if (!nav) return
      if (window.scrollY > 60) {
        nav.classList.add("scrolled")
      } else {
        nav.classList.remove("scrolled")
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return null
}
