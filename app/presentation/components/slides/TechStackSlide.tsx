"use client";

import { useEffect, useState } from "react";

const technologies = [
  { name: "React", category: "Frontend", icon: "R", color: "#61DAFB" },
  { name: "Next.js", category: "Framework", icon: "N", color: "#000000" },
  { name: "TypeScript", category: "Language", icon: "TS", color: "#3178C6" },
  { name: "Node.js", category: "Backend", icon: "N", color: "#339933" },
  { name: "Python", category: "Language", icon: "Py", color: "#3776AB" },
  { name: "PostgreSQL", category: "Database", icon: "PG", color: "#4169E1" },
];

export function TechStackSlide() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide slide-tech">
      <div className={`slide-tech-content ${isVisible ? "visible" : ""}`}>
        <span className="slide-section-tag">My Toolkit</span>

        <h2 className="slide-tech-title">
          Technologies I <span className="accent-text">Love</span>
        </h2>

        <p className="slide-tech-subtitle">
          Click on any technology to learn more about it
        </p>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <button
              key={tech.name}
              className={`tech-card ${hoveredTech === tech.name ? "hovered" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              onClick={() => window.open(`https://www.google.com/search?q=${tech.name}+programming`, "_blank")}
            >
              <div
                className="tech-icon"
                style={{ backgroundColor: tech.color }}
              >
                {tech.icon}
              </div>
              <div className="tech-info">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-category">{tech.category}</span>
              </div>
              <div className="tech-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        <div className="tech-hint">
          <span className="hint-dot" />
          Hover over cards to explore
        </div>
      </div>
    </div>
  );
}
