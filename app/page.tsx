import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import {
  aboutTags,
  currentlyItems,
  marqueeItems,
  statItems,
  workItems,
} from "./components/site-data";

const HeroParticleCanvas = dynamic(() => import("./components/three/HeroParticleCanvas"), {
  ssr: false,
});

const SphereCanvas = dynamic(() => import("./components/three/SphereCanvas"), {
  ssr: false,
});

function WorkItemLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="work-item" data-cursor="hover">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className="work-item" data-cursor="hover">
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <section className="hero-section">
        <div className="hero-canvas">
          <HeroParticleCanvas />
        </div>

        <div className="hero-content">
          <p className="hero-label">Computer Science & Engineering · ITBA</p>

          <h1 className="hero-name" aria-label="Tomas Holtz">
            <span className="hero-line">
              <span>Tomas</span>
            </span>
            <span className="hero-line">
              <span>Holtz</span>
            </span>
          </h1>

          <p className="hero-sub">
            Builder of things. Previously at Belo and Suku.
            <br />
            Currently making ideas real, one commit at a time.
          </p>

          <div className="hero-avatar">
            <Image src="/retrato.jpeg" alt="Tomas Holtz" width={84} height={84} priority />
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <div className="scroll-line" />
          <span className="hero-label">Scroll</span>
        </div>
      </section>

      <div className="marquee-section" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <span className="marquee-dot"> ✦ </span>
            </span>
          ))}
        </div>
      </div>

      <section className="section-shell">
        <p className="section-tag">About</p>

        <div className="about-grid">
          <div>
            <h2 className="about-heading">
              I build things
              <br />
              <em>that matter.</em>
            </h2>
          </div>

          <div>
            <div className="about-text">
              <p>
                22-year-old Computer Science & Engineering student at ITBA, Buenos Aires. Obsessed
                with the intersection of great engineering and thoughtful design, making things that
                are both technically solid and genuinely pleasurable to use.
              </p>
              <p>
                I&apos;ve shipped products at Belo and Suku, I write about everything that went
                wrong on the way there, and I&apos;m always looking for the next interesting problem
                to sink my teeth into.
              </p>
            </div>

            <div className="about-tags">
              {aboutTags.map((tag) => (
                <span key={tag} className="tag-pill" data-cursor="hover">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell full-bleed work-section">
        <div className="content-shell" style={{ paddingInline: "var(--page-gutter)", paddingBottom: "40px" }}>
          <p className="section-tag">Selected Work</p>
        </div>

        <ul className="work-list">
          {workItems.map((item, index) => (
            <li
              key={item.title}
              className="reveal-item"
              data-reveal="true"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <WorkItemLink href={item.href} external={item.external}>
                <span
                  data-preview={item.preview}
                  data-preview-color={item.previewColor}
                  style={{ display: "contents" }}
                >
                  <span className="work-num">{String(index + 1).padStart(2, "0")}</span>
                  <span className="work-title">{item.title}</span>
                  <span className="work-meta">{item.meta}</span>
                  <span className="work-arrow">→</span>
                </span>
              </WorkItemLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="sphere-section">
        <SphereCanvas />
        <div className="sphere-text">
          <h3>
            Connecting ideas
            <br />
            across disciplines.
          </h3>
          <p>Engineering · Design · Philosophy</p>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-inner">
          {statItems.map((item) => (
            <div key={item.label} className="stat-card">
              <div className="stat-num">
                {item.value}
                {item.suffix ? <sup>{item.suffix}</sup> : null}
              </div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <p className="section-tag">Right Now</p>

        <div className="currently-grid">
          {currentlyItems.map((item) => (
            <div key={item.label} className="currently-card">
              <div className="currently-card-label">{item.label}</div>
              <div className="currently-card-content">{item.content}</div>
              <div className="currently-card-sub">{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-inner">
          <p className="contact-eyebrow">Let&apos;s talk</p>
          <h2 className="contact-heading">
            <a href="mailto:tomas@tomasholtz.com" data-cursor="hover">
              Say hello →
            </a>
          </h2>
          <p className="contact-sub">
            Open to interesting projects, collaborations,
            <br />
            or just a good conversation over coffee.
          </p>
        </div>
      </section>
    </div>
  );
}
