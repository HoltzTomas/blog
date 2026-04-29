"use client";

import { useEffect, useState } from "react";

const failures = [
  {
    project: "App para jugadores de básquet",
    result: "No funcionó",
  },
  {
    project: "App para productores agropecuarios",
    result: "No funcionó",
  },
  {
    project: "App para el Club Argentino",
    result: "10 reuniones, no logré vendérsela",
  },
];

export function FailuresSlide() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide slide-failures">
      <div className={`slide-failures-content ${isVisible ? "visible" : ""}`}>
        <span className="slide-section-tag">A los 16 años</span>

        <h2 className="slide-failures-title">
          Decepción, falencias y <span className="accent-text">frustración</span>
        </h2>

        <div className="failures-intro">
          <p>
            Empecé a escuchar a emprendedores tecnológicos jóvenes argentinos.
            Matteo Salvato, Gino Tuaro. Y pensé: <em>&ldquo;Ellos no tienen nada que yo no tenga&rdquo;</em>.
          </p>
          <p>
            Un poco soberbio, tal vez. Pero ahí empecé a programar, porque no tenía plata
            para pagarle a un programador.
          </p>
        </div>

        <div className="failures-period">
          <div className="period-header">
            <span className="period-date">2020 - Pandemia</span>
            <span className="period-label">Un año y medio de intentos</span>
          </div>

          <div className="failures-list">
            {failures.map((item, index) => (
              <div
                key={item.project}
                className="failure-item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="failure-x">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </div>
                <div className="failure-content">
                  <span className="failure-project">{item.project}</span>
                  <span className="failure-result">{item.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="failures-quote">
          <p>
            Realmente fue un <strong>fracaso</strong>. No lo quiero disfrazar.
            No le quiero decir que fue un &ldquo;aprendizaje&rdquo;.
            Me quería golpear la cabeza contra la pared.
          </p>
        </div>
      </div>
    </div>
  );
}
