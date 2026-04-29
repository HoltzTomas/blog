"use client";

import { useEffect, useState } from "react";

export function OriginsSlide() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide slide-origins">
      <div className={`slide-origins-content ${isVisible ? "visible" : ""}`}>
        <span className="slide-section-tag">Volviendo a las raíces</span>

        <h2 className="slide-origins-title">
          A los <span className="accent-text">13 años</span>
        </h2>

        <div className="origins-quote">
          <div className="quote-mark">&ldquo;</div>
          <p className="quote-text">
            Quería que mi vida fuese divertida e interesante.
            Quería lograr grandes cosas, conocer personas increíbles
            y estar orgulloso de mi trabajo.
          </p>
        </div>

        <div className="origins-story">
          <div className="story-block">
            <div className="story-icon basketball">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <div className="story-content">
              <h3>El medio: Básquet</h3>
              <p>
                Durante varios años dediqué un grandísimo esfuerzo a ser basquetbolista profesional.
                Fines de semana que no salí, veranos levantándome temprano a entrenar solo.
              </p>
            </div>
          </div>

          <div className="story-block">
            <div className="story-icon work">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                <path d="M12 13v9" />
                <path d="M12 2v4" />
              </svg>
            </div>
            <div className="story-content">
              <h3>El sacrificio</h3>
              <p>
                Ir a entrenar con mi categoría, la que le seguía y la primera.
                Años de viajar y jugar pocos minutos.
              </p>
            </div>
          </div>
        </div>

        <div className="origins-result">
          <div className="result-line" />
          <span className="result-text">
            Esta parte no tiene final feliz.
            <strong> No estuve ni cerca de ser jugador de básquet.</strong>
          </span>
          <div className="result-line" />
        </div>
      </div>
    </div>
  );
}
