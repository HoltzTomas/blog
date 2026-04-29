"use client";

import { useEffect, useState } from "react";

export function UnexpectedSlide() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide slide-unexpected">
      <div className={`slide-unexpected-content ${isVisible ? "visible" : ""}`}>
        <span className="slide-section-tag">Lo inesperado</span>

        <h2 className="slide-unexpected-title">
          Nadie puede <span className="accent-text">planear</span> esto
        </h2>

        <div className="unexpected-story">
          <div className="story-path">
            <div className="path-node start">
              <div className="node-dot" />
              <div className="node-content">
                <span className="node-year">2021</span>
                <p>Empecé un podcast fallido</p>
              </div>
            </div>

            <div className="path-line" />

            <div className="path-node">
              <div className="node-dot" />
              <div className="node-content">
                <span className="node-year">Invité a Mati</span>
                <p>Para ser parte del podcast</p>
              </div>
            </div>

            <div className="path-line" />

            <div className="path-node">
              <div className="node-dot" />
              <div className="node-content">
                <span className="node-year">Proyecto</span>
                <p>Software para jugadores de básquet (fracasó rotundamente)</p>
              </div>
            </div>

            <div className="path-line" />

            <div className="path-node end">
              <div className="node-dot accent" />
              <div className="node-content">
                <span className="node-year">Años después</span>
                <p>Mati me invitó a Flow Bien Básquetbol</p>
              </div>
            </div>
          </div>
        </div>

        <div className="unexpected-result">
          <div className="result-players">
            <span className="player-tag">Duki</span>
            <span className="player-tag">Alan Gómez</span>
            <span className="player-tag">Pepe Sánchez</span>
            <span className="player-tag">Facu Campazzo</span>
            <span className="player-tag">TikTokers</span>
          </div>

          <div className="result-message">
            <p>
              Esto <strong>jamás</strong> lo hubiese podido planear.
              <br />
              Era imposible &ldquo;verla&rdquo; o planificarla.
            </p>
          </div>
        </div>

        <div className="spoiler-box">
          <div className="spoiler-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <p>
            <strong>Spoiler:</strong> Nadie la ve. Nadie tuvo un plan perfecto
            que ejecutó paso a paso. No existe.
          </p>
        </div>
      </div>
    </div>
  );
}
