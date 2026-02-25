"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { NeueMachinaRegular, NeueMachinaUltraBold, Ddin } from "./Fonts";
import {
  type TimelineEvent,
  type TimelineCategory,
  CATEGORY_CONFIG,
} from "../get-timeline-events";

// ─── Filter Pills ────────────────────────────────────────────────────
function CategoryFilters({
  active,
  onChange,
  counts,
}: {
  active: TimelineCategory | "todos";
  onChange: (cat: TimelineCategory | "todos") => void;
  counts: Record<string, number>;
}) {
  const categories: (TimelineCategory | "todos")[] = [
    "todos",
    "carrera",
    "proyectos",
    "viajes",
    "personal",
    "deporte",
    "educacion",
  ];

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {categories.map((cat) => {
        const isActive = active === cat;
        const config = cat === "todos" ? null : CATEGORY_CONFIG[cat];
        const count = cat === "todos" ? null : counts[cat] ?? 0;

        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300
              ${Ddin.className}
              ${
                isActive
                  ? "bg-foreground text-background shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-foreground/10"
              }
            `}
          >
            {config && (
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: config.color }}
              />
            )}
            <span className="uppercase tracking-wide">
              {cat === "todos" ? "Todos" : config?.label}
            </span>
            {count !== null && (
              <span
                className={`text-xs ${
                  isActive ? "text-background/60" : "text-muted-foreground/60"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// ─── Single Event Card ───────────────────────────────────────────────
function TimelineCard({
  event,
  index,
  isVisible,
}: {
  event: TimelineEvent;
  index: number;
  isVisible: boolean;
}) {
  const config = CATEGORY_CONFIG[event.category];
  const isEven = index % 2 === 0;

  const linkHref = event.blogPostSlug
    ? `/blog/${event.blogPostSlug}`
    : event.externalUrl ?? undefined;
  const isExternal = !event.blogPostSlug && !!event.externalUrl;

  return (
    <div
      className={`
        flex items-start gap-4 md:gap-8 w-full
        md:w-[calc(50%-28px)]
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${isEven ? "md:self-start md:flex-row-reverse" : "md:self-end"}
      `}
    >
      {/* Card */}
      <div
        className="group relative flex-1 rounded-2xl border border-border bg-card overflow-hidden
                    hover:shadow-lg hover:shadow-foreground/5 transition-shadow duration-300"
      >
        {/* Image */}
        {event.imageUrl && (
          <div className="w-full h-44 overflow-hidden">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="p-5 flex flex-col gap-3">
          {/* Category + Date row */}
          <div className="flex items-center justify-between gap-3">
            <span
              className={`text-xs uppercase tracking-widest px-2.5 py-1 rounded-full ${Ddin.className}`}
              style={{
                color: config.color,
                backgroundColor: config.bgLight,
              }}
            >
              {config.label}
            </span>
            <time
              className={`text-xs text-muted-foreground tracking-wide ${Ddin.className}`}
              dateTime={event.date}
            >
              {formatDate(event.date)}
            </time>
          </div>

          {/* Title */}
          <h3
            className={`text-lg leading-snug ${NeueMachinaUltraBold.className}`}
          >
            {event.title}
          </h3>

          {/* Description */}
          <p
            className={`text-sm text-muted-foreground leading-relaxed line-clamp-3 ${NeueMachinaRegular.className}`}
          >
            {event.description}
          </p>

          {/* Link */}
          {linkHref && (
            <div className="pt-1">
              {isExternal ? (
                <a
                  href={linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm text-blue hover:underline ${NeueMachinaUltraBold.className}`}
                >
                  Ver mas
                  <ExternalLink size={14} />
                </a>
              ) : (
                <Link
                  href={linkHref}
                  prefetch
                  className={`inline-flex items-center gap-1.5 text-sm text-blue hover:underline ${NeueMachinaUltraBold.className}`}
                >
                  Leer mas
                  <ArrowRight size={14} />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Year Marker ─────────────────────────────────────────────────────
function YearMarker({ year, isVisible }: { year: string; isVisible: boolean }) {
  return (
    <div
      className={`
        flex items-center justify-center w-full my-2 md:my-4
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
      `}
    >
      <div
        className={`
          relative z-10 flex items-center justify-center
          w-16 h-16 rounded-full
          bg-blue text-background
          shadow-lg shadow-blue/25
          ${NeueMachinaUltraBold.className}
        `}
      >
        <span className="text-lg">{year}</span>
      </div>
    </div>
  );
}

// ─── Main Timeline Component ─────────────────────────────────────────
export function Timeline({ events }: { events: TimelineEvent[] }) {
  const [activeFilter, setActiveFilter] = useState<
    TimelineCategory | "todos"
  >("todos");
  const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Count events per category
  const counts: Record<string, number> = {};
  for (const ev of events) {
    counts[ev.category] = (counts[ev.category] ?? 0) + 1;
  }

  // Filter events
  const filteredEvents =
    activeFilter === "todos"
      ? events
      : events.filter((e) => e.category === activeFilter);

  // Group by year
  const groupedByYear = groupByYear(filteredEvents);

  // Intersection Observer for reveal-on-scroll
  const observeNode = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    observerRef.current?.observe(node);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleIds((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe all elements with data-timeline-item
    const items = document.querySelectorAll("[data-timeline-item]");
    items.forEach((item) => observerRef.current?.observe(item));

    return () => observerRef.current?.disconnect();
  }, [activeFilter]);

  // Animate the vertical line on scroll
  useEffect(() => {
    function handleScroll() {
      if (!lineRef.current || !timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = rect.height;

      // How far the bottom of the viewport has scrolled into the timeline
      const scrolled = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / timelineHeight));

      lineRef.current.style.transform = `scaleY(${progress})`;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeFilter]);

  return (
    <section className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <h1
          className={`text-4xl md:text-5xl tracking-tighter mb-4 ${NeueMachinaUltraBold.className}`}
        >
          Timeline
        </h1>
        <p
          className={`text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed ${NeueMachinaRegular.className}`}
        >
          Cada punto es una historia. Los momentos que me trajeron hasta aca.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-12 md:mb-16">
        <CategoryFilters
          active={activeFilter}
          onChange={setActiveFilter}
          counts={counts}
        />
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
          {/* Background track */}
          <div className="absolute inset-0 bg-border" />
          {/* Animated fill */}
          <div
            ref={lineRef}
            className="absolute inset-0 bg-blue origin-top"
            style={{ transform: "scaleY(0)" }}
          />
        </div>

        {/* Events grouped by year */}
        <div className="flex flex-col gap-8 md:gap-12">
          {groupedByYear.map(({ year, events: yearEvents }) => (
            <div key={year} className="flex flex-col gap-6 md:gap-10">
              {/* Year marker */}
              <div
                id={`year-${year}`}
                data-timeline-item
                ref={observeNode}
                className="relative flex justify-start md:justify-center"
              >
                <div className="ml-0 md:ml-0">
                  <YearMarker
                    year={year}
                    isVisible={visibleIds.has(`year-${year}`)}
                  />
                </div>
              </div>

              {/* Events for this year */}
              {yearEvents.map((event, idx) => {
                // Compute a global index for alternation across entire filtered list
                const globalIdx = filteredEvents.indexOf(event);

                return (
                  <div
                    key={event.id}
                    id={`event-${event.id}`}
                    data-timeline-item
                    ref={observeNode}
                    className="relative flex flex-col md:flex-row"
                  >
                    {/* Dot on the line */}
                    <div
                      className={`
                        absolute left-5 md:left-1/2 top-6
                        w-3 h-3 rounded-full -translate-x-1/2
                        border-2 border-background z-10
                        transition-all duration-500
                        ${
                          visibleIds.has(`event-${event.id}`)
                            ? "scale-100"
                            : "scale-0"
                        }
                      `}
                      style={{
                        backgroundColor:
                          CATEGORY_CONFIG[event.category].color,
                        boxShadow: `0 0 0 4px ${CATEGORY_CONFIG[event.category].bgLight}`,
                      }}
                    />

                    {/* Connector line from dot to card */}
                    <div
                      className={`
                        hidden md:block absolute top-[30px] w-8
                        h-px bg-border
                        ${
                          globalIdx % 2 === 0
                            ? "right-1/2 mr-[6px]"
                            : "left-1/2 ml-[6px]"
                        }
                      `}
                    />

                    {/* Card positioning */}
                    <div
                      className={`
                        pl-12 md:pl-0
                        md:flex md:w-full
                        ${
                          globalIdx % 2 === 0
                            ? "md:justify-start md:pr-[calc(50%+40px)]"
                            : "md:justify-end md:pl-[calc(50%+40px)]"
                        }
                      `}
                    >
                      <TimelineCard
                        event={event}
                        index={globalIdx}
                        isVisible={visibleIds.has(`event-${event.id}`)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* End cap */}
        <div className="flex justify-start md:justify-center mt-8">
          <div className="ml-5 md:ml-0 flex items-center justify-center w-3 h-3 rounded-full bg-blue -translate-x-1/2 md:-translate-x-0" />
        </div>
      </div>

      {/* Footer message */}
      <div className="text-center mt-16 mb-8">
        <p
          className={`text-muted-foreground text-sm ${NeueMachinaRegular.className}`}
        >
          Continuara...
        </p>
      </div>
    </section>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────
function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return `${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

function groupByYear(
  events: TimelineEvent[]
): { year: string; events: TimelineEvent[] }[] {
  const sorted = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const groups: { year: string; events: TimelineEvent[] }[] = [];
  let currentYear = "";

  for (const event of sorted) {
    const year = new Date(event.date).getUTCFullYear().toString();
    if (year !== currentYear) {
      groups.push({ year, events: [event] });
      currentYear = year;
    } else {
      groups[groups.length - 1].events.push(event);
    }
  }

  return groups;
}
