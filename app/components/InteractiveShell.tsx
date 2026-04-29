"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = "a, button, [data-cursor='hover']";
const PREVIEW_SELECTOR = "[data-preview]";

export function InteractiveShell() {
  const pathname = usePathname();
  const cursorRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const pointerQuery = window.matchMedia("(pointer: fine)");

    const syncPointerMode = () => {
      document.body.classList.toggle("has-custom-cursor", pointerQuery.matches);
    };

    syncPointerMode();
    pointerQuery.addEventListener("change", syncPointerMode);

    return () => {
      pointerQuery.removeEventListener("change", syncPointerMode);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduceMotion) {
      revealTargets.forEach((target) => target.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const cursor = cursorRef.current;
    const preview = previewRef.current;
    const pointerQuery = window.matchMedia("(pointer: fine)");

    if (!cursor || !preview || !pointerQuery.matches) {
      return;
    }

    const moveCursor = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;

      const target = event.target instanceof Element ? event.target : null;
      const interactiveTarget = target?.closest(INTERACTIVE_SELECTOR);
      const previewTarget = target?.closest<HTMLElement>(PREVIEW_SELECTOR);

      cursor.classList.toggle("hover", Boolean(interactiveTarget));

      if (previewTarget?.dataset.preview) {
        preview.textContent = previewTarget.dataset.preview;
        preview.style.background = previewTarget.dataset.previewColor ?? "#c8f04a";
        preview.style.transform = `translate3d(${event.clientX + 24}px, ${event.clientY - 92}px, 0) scale(1) rotate(-2deg)`;
        preview.classList.add("visible");
      } else {
        preview.classList.remove("visible");
      }
    };

    const hidePreview = () => {
      cursor.classList.remove("hover");
      preview.classList.remove("visible");
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("blur", hidePreview);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("blur", hidePreview);
    };
  }, [pathname]);

  return (
    <>
      <div ref={cursorRef} className="site-cursor" aria-hidden="true" />
      <div ref={previewRef} className="site-preview" aria-hidden="true" />
    </>
  );
}
