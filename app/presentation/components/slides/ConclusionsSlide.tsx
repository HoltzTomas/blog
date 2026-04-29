"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const conclusions = [
  {
    number: "01",
    title: "La vida es un juego de volumen",
    subtitle: "Actuá, generá info e iterá",
  },
  {
    number: "02",
    title: "El miedo y la vergüenza se entrenan",
    subtitle: "Sí, se puede. Como un músculo.",
  },
  {
    number: "03",
    title: "Mantenete ágil y divertite",
    subtitle: "No te tomes todo tan en serio.",
  },
  {
    number: "04",
    title: "Agency",
    subtitle: "El término de Silicon Valley que no tiene traducción.",
  },
];

export function ConclusionsSlide() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide slide-conclusions">
      <div className={`slide-conclusions-content ${isVisible ? "visible" : ""}`}>
        <span className="slide-section-tag">Conclusiones</span>

        <h2 className="slide-conclusions-title">
          Lo que <span className="accent-text">aprendí</span>
        </h2>

        <div className="conclusions-list">
          {conclusions.map((item, index) => (
            <div
              key={item.number}
              className={`conclusion-item ${hoveredIndex === index ? "active" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="conclusion-number">{item.number}</div>
              <div className="conclusion-content">
                <h3 className="conclusion-title">{item.title}</h3>
                <p className="conclusion-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="conclusions-footer">
          <div className="footer-line" />
          <p className="footer-text">Gracias por escuchar</p>
          <div className="footer-line" />
        </div>

        <div className="conclusions-cta">
          <Link href="/" className="back-to-site-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Volver al sitio
          </Link>
        </div>
      </div>
    </div>
  );
}
