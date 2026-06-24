"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

interface WorkItemData {
  num: string
  title: string
  meta: string
  label: string
  href?: string
}

const items: WorkItemData[] = [
  { num: "01", title: "Belo", meta: "2023 \u00B7 Product Eng.", label: "Crypto wallet \u00B7 Mobile", href: "https://www.belo.app/" },
  { num: "02", title: "Suku", meta: "2022 \u00B7 Full Stack", label: "Supply chain \u00B7 Web3", href: "https://www.suku.world/" },
  { num: "03", title: "Side Projects", meta: "Ongoing \u00B7 Various", label: "Personal project \u00B7 OSS" },
  { num: "04", title: "Blog", meta: "2022\u2013Now \u00B7 Writing", label: "Writing & thoughts", href: "/blog" },
]

const previewColors = ["#4770FF", "#3A5FE0", "#5B8AFF", "#2D4FCC", "#6B9AFF"]

export function WorkList() {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewText, setPreviewText] = useState("")
  const [previewColor, setPreviewColor] = useState("")
  const previewRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (previewRef.current) {
        previewRef.current.style.left = (e.clientX + 20) + "px"
        previewRef.current.style.top = (e.clientY - 80) + "px"
      }
    }
    document.addEventListener("mousemove", onMouseMove)
    return () => document.removeEventListener("mousemove", onMouseMove)
  }, [])

  useEffect(() => {
    if (!listRef.current) return
    const workItems = listRef.current.querySelectorAll(".work-item")
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = e.target as HTMLElement
            target.style.opacity = "1"
            target.style.transform = "translateY(0)"
          }
        })
      },
      { threshold: 0.1 }
    )
    workItems.forEach((item, i) => {
      const el = item as HTMLElement
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = `opacity .5s ${i * 0.1}s, transform .5s ${i * 0.1}s`
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div
        ref={previewRef}
        className={`preview-img ${previewVisible ? "visible" : ""}`}
        style={{ background: previewColor }}
      >
        {previewText}
      </div>
      <ul className="work-list" ref={listRef} style={{ maxWidth: 1200, margin: "0 auto" }}>
        {items.map((item, i) => {
          const inner = (
            <>
              <span className="work-num">{item.num}</span>
              <span className="work-title">{item.title}</span>
              <span className="work-meta">{item.meta}</span>
              <span className="work-arrow">&rarr;</span>
            </>
          )

          const commonProps = {
            className: "work-item",
            onMouseEnter: () => {
              setPreviewText(item.label)
              setPreviewColor(previewColors[i % previewColors.length])
              setPreviewVisible(true)
            },
            onMouseLeave: () => setPreviewVisible(false),
          }

          if (item.href?.startsWith("/")) {
            return (
              <li key={item.num}>
                <Link href={item.href} {...commonProps}>
                  {inner}
                </Link>
              </li>
            )
          }

          if (item.href) {
            return (
              <li key={item.num}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" {...commonProps}>
                  {inner}
                </a>
              </li>
            )
          }

          return (
            <li key={item.num}>
              <div {...commonProps}>
                {inner}
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
