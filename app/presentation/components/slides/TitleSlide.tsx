"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroParticleCanvas = dynamic(() => import("@/app/components/three/HeroParticleCanvas"), {
  ssr: false,
});

export function TitleSlide() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide slide-title">
      <div className="slide-title-canvas" aria-hidden="true">
        <HeroParticleCanvas />
      </div>

      <div className="slide-title-author">
        Tomas Holtz
      </div>

      <div className={`slide-title-content ${isVisible ? "visible" : ""}`}>
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
      </div>

      <div className="slide-title-decoration">
        <div className="decoration-circle" />
        <div className="decoration-circle small" />
      </div>
    </div>
  );
}
