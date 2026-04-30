"use client";

interface Slide {
  id: number;
  label: string;
}

interface SlideIndicatorProps {
  slides: Slide[];
  currentSlide: number;
  onSlideSelect: (index: number) => void;
}

export function SlideIndicator({
  slides,
  currentSlide,
  onSlideSelect,
}: SlideIndicatorProps) {
  return (
    <div className="slide-indicator">
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          onClick={() => onSlideSelect(index)}
          className={`slide-indicator-dot ${
            index === currentSlide ? "active" : ""
          }`}
          aria-label={`Go to slide ${index + 1}: ${slide.label}`}
        >
          <span className="slide-indicator-tooltip">{slide.label}</span>
        </button>
      ))}
    </div>
  );
}
