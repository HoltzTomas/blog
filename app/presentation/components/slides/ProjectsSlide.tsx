"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    num: "01",
    title: "Belo",
    description: "Crypto wallet app used by thousands across Latin America",
    tags: ["React Native", "Node.js", "Web3"],
  },
  {
    num: "02",
    title: "Suku",
    description: "Supply chain transparency platform for global brands",
    tags: ["Next.js", "Blockchain", "TypeScript"],
  },
  {
    num: "03",
    title: "Personal Blog",
    description: "The site you might have seen - built with Next.js and Three.js",
    tags: ["Next.js", "Three.js", "MDX"],
  },
];

export function ProjectsSlide() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide slide-projects">
      <div className={`slide-projects-content ${isVisible ? "visible" : ""}`}>
        <span className="slide-section-tag">What I&apos;ve Built</span>

        <h2 className="slide-projects-title">
          Real <span className="accent-text">Projects</span>
        </h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={project.num}
              className={`project-row ${expandedProject === project.num ? "expanded" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() =>
                setExpandedProject(expandedProject === project.num ? null : project.num)
              }
            >
              <div className="project-row-main">
                <span className="project-num">{project.num}</span>
                <span className="project-title">{project.title}</span>
                <span className="project-expand-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </div>
              <div className="project-details">
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="projects-cta">Click on any project to learn more</p>
      </div>
    </div>
  );
}
