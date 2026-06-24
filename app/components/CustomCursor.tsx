"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    }

    document.addEventListener("mousemove", onMouseMove)

    const hoverables = document.querySelectorAll("a, button, .work-item, .tag, .blog-post-row, .talk-card")
    const onEnter = () => cursor.classList.add("hover")
    const onLeave = () => cursor.classList.remove("hover")

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
    }
  }, [])

  return <div className="cursor" ref={cursorRef} />
}
