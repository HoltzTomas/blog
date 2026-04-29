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
              <span className="stat-label">Años</span>
            </div>
            <div className="about-stat">
              <span className="stat-number">MJ</span>
              <span className="stat-label">Origen</span>
            </div>
            <div className="about-stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Años código</span>
            </div>
          </div>
        </div>

        <div className="slide-about-right">
          <span className="slide-section-tag">Quién carajo soy</span>

          <h2 className="slide-about-title">
            Soy <span className="accent-text">Tomas Holtz</span>
          </h2>

          <div className="slide-about-text">
            <p>
              Me crié acá en Marcos Juárez. Hice el primario en el Bernardino Rivadavia
              y el secundario en IMI. Pasé casi todas las tardes de mi adolescencia
              en el Club Argentino, jugando básquet, tenis y fútbol.
            </p>
            <p>
              Todos con escaso talento, pueden preguntarle a Lamber si no.
            </p>
          </div>

          <div className="about-highlight-box">
            <div className="highlight-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <div>
              <strong>Disclaimer:</strong> Critiquen todo lo que voy a decir.
              Estar en un escenario no me hace tener la verdad.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
