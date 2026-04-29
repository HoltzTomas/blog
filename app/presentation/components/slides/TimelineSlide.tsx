"use client";

import { useEffect, useState } from "react";

const timeline = [
  {
    year: "2018",
    title: "First Line of Code",
    description: "Started learning Python in high school",
    icon: "rocket",
  },
  {
    year: "2020",
    title: "University",
    description: "Began Computer Science at ITBA",
    icon: "graduation",
  },
  {
    year: "2022",
    title: "First Job",
    description: "Joined Belo as a developer",
    icon: "briefcase",
  },
  {
    year: "2024",
    title: "Growing",
    description: "Building products, writing, teaching",
    icon: "star",
  },
];

const icons: Record<string, JSX.Element> = {
  rocket: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  graduation: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  ),
  briefcase: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  star: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

export function TimelineSlide() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeYear, setActiveYear] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide slide-timeline">
      <div className={`slide-timeline-content ${isVisible ? "visible" : ""}`}>
        <span className="slide-section-tag">My Journey</span>

        <h2 className="slide-timeline-title">
          The <span className="accent-text">Path</span> So Far
        </h2>

        <div className="timeline-container">
          <div className="timeline-line" />

          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`timeline-item ${activeYear === item.year ? "active" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveYear(item.year)}
              onMouseLeave={() => setActiveYear(null)}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">{icons[item.icon]}</div>
              </div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
