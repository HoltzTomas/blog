"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function AboutSlide() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide slide-about">
      <div className={`slide-about-grid ${isVisible ? "visible" : ""}`}>
        <div className="slide-about-left">
          <div className="about-image-wrapper">
            <Image
              src="/retrato.jpeg"
              alt="Tomas Holtz"
              width={300}
              height={300}
              className="about-image"
            />
            <div className="about-image-frame" />
          </div>

          <div className="about-stats">
            <div className="about-stat">
              <span className="stat-number">22</span>
              <span className="stat-label">Years Old</span>
            </div>
            <div className="about-stat">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Coding</span>
            </div>
            <div className="about-stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>

        <div className="slide-about-right">
          <span className="slide-section-tag">Who Am I?</span>

          <h2 className="slide-about-title">
            Hey, I&apos;m <span className="accent-text">Tomas</span>
          </h2>

          <div className="slide-about-text">
            <p>
              Computer Science student at ITBA, Buenos Aires. I love building
              things that are both technically solid and genuinely pleasurable to use.
            </p>
            <p>
              I&apos;ve worked at startups like Belo and Suku, shipping real products
              that thousands of people use every day.
            </p>
          </div>

          <div className="about-highlight-box">
            <div className="highlight-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <strong>My Philosophy:</strong> Great software is where engineering meets design.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
