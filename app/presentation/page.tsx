"use client";

import { useState, useCallback, useEffect } from "react";
import { SlideNavigation } from "./components/SlideNavigation";
import { SlideIndicator } from "./components/SlideIndicator";
import { TitleSlide } from "./components/slides/TitleSlide";
import { JourneySlide } from "./components/slides/JourneySlide";
import { OriginsSlide } from "./components/slides/OriginsSlide";
import { FailuresSlide } from "./components/slides/FailuresSlide";
import { BreakthroughSlide } from "./components/slides/BreakthroughSlide";
import { UnexpectedSlide } from "./components/slides/UnexpectedSlide";
import { ConclusionsSlide } from "./components/slides/ConclusionsSlide";

const slides = [
  { id: 1, component: TitleSlide, label: "Intro" },
  { id: 2, component: JourneySlide, label: "Trayectoria" },
  { id: 3, component: OriginsSlide, label: "Raíces" },
  { id: 4, component: FailuresSlide, label: "Fracasos" },
  { id: 5, component: BreakthroughSlide, label: "El quiebre" },
  { id: 6, component: UnexpectedSlide, label: "Lo inesperado" },
  { id: 7, component: ConclusionsSlide, label: "Conclusiones" },
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentSlide) return;
      setDirection(index > currentSlide ? "next" : "prev");
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [currentSlide, isAnimating]
  );

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="presentation-container">
      <div className="presentation-progress">
        <div
          className="presentation-progress-bar"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      <div className="slides-wrapper">
        <div
          className={`slide-container ${isAnimating ? `slide-${direction}` : ""}`}
          key={currentSlide}
        >
          <CurrentSlideComponent />
        </div>
      </div>

      <SlideNavigation
        onPrev={prevSlide}
        onNext={nextSlide}
        hasPrev={currentSlide > 0}
        hasNext={currentSlide < slides.length - 1}
      />

      <SlideIndicator
        slides={slides}
        currentSlide={currentSlide}
        onSlideSelect={goToSlide}
      />

      <div className="slide-counter">
        <span className="slide-counter-current">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <span className="slide-counter-separator">/</span>
        <span className="slide-counter-total">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      <div className="keyboard-hint">
        <span>Usá las flechas o hacé click para navegar</span>
      </div>
    </div>
  );
}
