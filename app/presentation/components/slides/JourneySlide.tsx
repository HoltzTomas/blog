"use client";

import { useEffect, useState } from "react";

const milestones = [
  {
    year: "2021",
    title: "Belo App",
    description: "Me sumé como segundo ingeniero siendo 5 personas. Diseñé y programé la app.",
    highlight: "1M+ usuarios · Primera tarjeta Mastercard cripto de Latam",
  },
  {
    year: "2023",
    title: "Universidad + USA",
    description: "Decidí anotarme a la universidad. Trabajé brevemente en un proyecto similar en Estados Unidos.",
    highlight: null,
  },
  {
    year: "2024",
    title: "Flow Game Basketball",
    description: "Retomé el básquet de forma extraña: equipo amateur más conocido de habla hispana.",
    highlight: "Jugando con Duki, Alan Gómez, Pepe Sánchez y Facu Campazzo",
  },
  {
    year: "2025",
    title: "NXTP + Y Combinator",
    description: "Trabajo invirtiendo en startups. YC me eligió entre los mejores jóvenes técnicos del mundo.",
    highlight: "2 días en Silicon Valley con fundadores de ChatGPT, Nvidia, Scale",
  },
];

export function JourneySlide() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide slide-journey">
      <div className={`slide-journey-content ${isVisible ? "visible" : ""}`}>
        <span className="slide-section-tag">Después del secundario</span>

        <h2 className="slide-journey-title">
          <span className="accent-text">Repaso rápido</span> de qué pasó
        </h2>

        <p className="slide-journey-intro">
          No les cuento esto para que me aplaudan. Si no porque no creo ser una persona
          fuera de lo común. Pueden preguntarle a cualquiera que me conocía de antes.
        </p>

        <div className="journey-grid">
          {milestones.map((item, index) => (
            <div
              key={item.year}
              className={`journey-card ${expandedIndex === index ? "expanded" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="journey-card-header">
                <span className="journey-year">{item.year}</span>
                <h3 className="journey-card-title">{item.title}</h3>
              </div>
              <p className="journey-card-description">{item.description}</p>
              {item.highlight && (
                <div className="journey-highlight">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span>{item.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="journey-question">
          <span className="question-icon">?</span>
          <span>Entonces, ¿cómo carajo terminé acá?</span>
        </div>
      </div>
    </div>
  );
}
