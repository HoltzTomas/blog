"use client";

interface SlideNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export function SlideNavigation({
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: SlideNavigationProps) {
  return (
    <div className="slide-navigation">
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className="slide-nav-btn slide-nav-prev"
        aria-label="Previous slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15,18 9,12 15,6" />
        </svg>
      </button>
      <button
        onClick={onNext}
        disabled={!hasNext}
        className="slide-nav-btn slide-nav-next"
        aria-label="Next slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9,18 15,12 9,6" />
        </svg>
      </button>
    </div>
  );
}
