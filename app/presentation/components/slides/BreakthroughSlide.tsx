"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Decisión",
    text: "Decidí buscar trabajo porque no sabía hacer una app entera. Tenía que aprender lo que significa crear un producto desde cero.",
  },
  {
    number: "02",
    title: "El problema",
    text: "17 años, sin experiencia, sin conocer a nadie que programara. Mis padres se dedican al campo.",
  },
  {
    number: "03",
    title: "La estrategia",
    text: "Entré a Twitter y empecé a mandarle mensajes a gente que programaba. Creé una comunidad en Telegram de programadores argentinos.",
  },
  {
    number: "04",
    title: "El momento",
    text: "Busqué en Twitter las palabras \"buscamos flutter\". Encontré a Manuel Vidro, que estaba empezando algo llamado Belo.",
  },
];

export function BreakthroughSlide() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide slide-breakthrough">
      <div className={`slide-breakthrough-content ${isVisible ? "visible" : ""}`}>
        <span className="slide-section-tag">El quiebre</span>

        <h2 className="slide-breakthrough-title">
          Construyendo mi propia <span className="accent-text">red</span>
        </h2>

        <div className="breakthrough-steps">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`breakthrough-step ${activeStep === index ? "active" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="breakthrough-result">
          <div className="result-card">
            <div className="result-emoji">🎂</div>
            <div className="result-content">
              <h4>El día que cumplí 18</h4>
              <p>
                Llegué de entrenar y me encontré con un mensaje de Manu López:
                <br />
                <strong>&ldquo;Feliz cumpleaños, amigo. Sumate a Belo ya mismo.&rdquo;</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
