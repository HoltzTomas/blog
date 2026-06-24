"use client"

import { useEffect, useRef } from "react"

interface ExperienceItemData {
  year: string
  role: string
  company: string
  desc: string
}

const experiences: ExperienceItemData[] = [
  {
    year: "2023 \u2192",
    role: "Founding Engineer",
    company: "Belo \u00B7 Crypto wallet",
    desc: "Joined at 18 while still in high school. Built core product features for Argentina\u2019s leading crypto wallet. Learned what it means to ship real software under pressure.",
  },
  {
    year: "2022",
    role: "Full Stack Engineer",
    company: "Suku \u00B7 Supply chain Web3",
    desc: "Built supply-chain traceability tools on top of blockchain infrastructure. Worked across the full stack with a distributed team.",
  },
  {
    year: "2021\u2013now",
    role: "CS & Engineering Student",
    company: "ITBA \u00B7 Buenos Aires",
    desc: "Studying Computer Science and Engineering while shipping products. Simultaneously building side projects, learning, and writing about it all.",
  },
  {
    year: "Ongoing",
    role: "Side Projects",
    company: "Haciendo videos educativos con AI \u00B7 Note Studio: AI Students OS",
    desc: "Building tools I wish existed. Currently exploring AI-assisted education and note-taking for students.",
  },
]

export function ExperienceList() {
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!listRef.current) return
    const items = listRef.current.querySelectorAll(".experience-item")
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.15 }
    )
    items.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="experience-list" ref={listRef}>
      {experiences.map((exp, i) => (
        <div key={i} className="experience-item">
          <div className="exp-year">{exp.year}</div>
          <div>
            <div className="exp-role">{exp.role}</div>
            <div className="exp-company">{exp.company}</div>
            <div className="exp-desc">{exp.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
