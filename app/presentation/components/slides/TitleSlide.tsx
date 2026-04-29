"use client";

import { useEffect, useState } from "react";

export function TitleSlide() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide slide-title">
      <div className="slide-title-bg-pattern" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="pattern-line" style={{ top: `${i * 5}%`, animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>

      <div className={`slide-title-content ${isVisible ? "visible" : ""}`}>
        <div className="slide-title-eyebrow">
          <span className="eyebrow-line" />
          <span>Marcos Juárez 2026</span>
        </div>

        <h1 className="slide-title-heading">
          <span className="title-line">
            <span>Guía para</span>
          </span>
          <span className="title-line accent">
            <span>crear tu carrera</span>
          </span>
        </h1>

        <p className="slide-title-sub">
          O por qué el mejor plan de carrera
          <br />
          es no tener ninguno.
        </p>

        <div className="slide-title-cta">
          <span className="cta-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </span>
          <span>Usá las flechas para navegar</span>
        </div>
      </div>

      <div className="slide-title-decoration">
        <div className="decoration-circle" />
        <div className="decoration-circle small" />
      </div>
    </div>
  );
}
