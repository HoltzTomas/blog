"use client";

import { useState, useCallback, useEffect } from "react";
import { SlideNavigation } from "./components/SlideNavigation";
import { SlideIndicator } from "./components/SlideIndicator";
import { TitleSlide } from "./components/slides/TitleSlide";
import { AboutSlide } from "./components/slides/AboutSlide";
import { TechStackSlide } from "./components/slides/TechStackSlide";
import { ProjectsSlide } from "./components/slides/ProjectsSlide";
import { TimelineSlide } from "./components/slides/TimelineSlide";
import { InteractiveSlide } from "./components/slides/InteractiveSlide";
import { ContactSlide } from "./components/slides/ContactSlide";

const slides = [
  { id: 1, component: TitleSlide, label: "Intro" },
  { id: 2, component: AboutSlide, label: "About Me" },
  { id: 3, component: TechStackSlide, label: "Tech Stack" },
  { id: 4, component: ProjectsSlide, label: "Projects" },
  { id: 5, component: TimelineSlide, label: "Journey" },
  { id: 6, component: InteractiveSlide, label: "Interactive" },
  { id: 7, component: ContactSlide, label: "Connect" },
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
        <span>Use arrow keys or click to navigate</span>
      </div>
    </div>
  );
}
