import { HeroCanvas } from "./components/HeroCanvas"
import { SphereCanvas } from "./components/SphereCanvas"
import { WorkList } from "./components/WorkList"
import { SiteFooter } from "./components/SiteFooter"
import Image from "next/image"

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <HeroCanvas />
        <div className="hero-content">
          <p className="hero-label" style={{ fontFamily: "'Inter', sans-serif" }}>
            Computer Science &amp; Engineering &middot; ITBA
          </p>
          <h1 className="hero-name" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
            <span className="line"><span>Tomas</span></span>
            <span className="line"><span>Holtz</span></span>
          </h1>
          <p className="hero-sub">
            Builder of things. Previously at Belo and Suku.<br />
            Currently making ideas real, one commit at a time.
          </p>
          <div className="hero-avatar">
            <Image
              src="/retrato.jpeg"
              alt="Tomas avatar"
              width={80}
              height={80}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
          <span>Product Engineering</span><span className="dot">&#10022;</span>
          <span>Full Stack</span><span className="dot">&#10022;</span>
          <span>UX Design</span><span className="dot">&#10022;</span>
          <span>Open Source</span><span className="dot">&#10022;</span>
          <span>Systems Thinking</span><span className="dot">&#10022;</span>
          <span>Buenos Aires</span><span className="dot">&#10022;</span>
          <span>Product Engineering</span><span className="dot">&#10022;</span>
          <span>Full Stack</span><span className="dot">&#10022;</span>
          <span>UX Design</span><span className="dot">&#10022;</span>
          <span>Open Source</span><span className="dot">&#10022;</span>
          <span>Systems Thinking</span><span className="dot">&#10022;</span>
          <span>Buenos Aires</span><span className="dot">&#10022;</span>
        </div>
      </div>

      {/* ABOUT TEASER */}
      <section className="redesign-section">
        <p className="section-tag">About</p>
        <div className="about-grid">
          <div>
            <h2 className="about-heading" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
              I build things<br /><em>that matter.</em>
            </h2>
          </div>
          <div>
            <div className="about-text">
              <p>22-year-old Computer Science &amp; Engineering student at ITBA, Buenos Aires. Obsessed with the intersection of great engineering and thoughtful design — making things that are both technically solid and genuinely pleasurable to use.</p>
              <p>I&apos;ve shipped products at Belo (crypto wallet) and Suku (supply chain), and I&apos;m always looking for the next interesting problem to sink my teeth into.</p>
            </div>
            <div className="about-tags">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Node.js</span>
              <span className="tag">Rust</span>
              <span className="tag">Go</span>
              <span className="tag">Postgres</span>
              <span className="tag">Figma</span>
              <span className="tag">Web3</span>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="work-section" style={{ paddingTop: 0, maxWidth: "100%", width: "100%", paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 40px" }}>
          <p className="section-tag">Selected Work</p>
        </div>
        <WorkList />
      </section>

      {/* 3D SPHERE */}
      <div className="sphere-section">
        <SphereCanvas />
        <div className="sphere-text" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
          <h3>Connecting ideas<br />across disciplines.</h3>
          <p>Engineering &middot; Design &middot; Philosophy</p>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-section">
        <div className="stats-inner">
          <div className="stat-card">
            <div className="stat-num" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
              22<sup>yo</sup>
            </div>
            <div className="stat-label">Years old</div>
          </div>
          <div className="stat-card">
            <div className="stat-num" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
              3<sup>+</sup>
            </div>
            <div className="stat-label">Years shipping</div>
          </div>
          <div className="stat-card">
            <div className="stat-num" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
              &infin;
            </div>
            <div className="stat-label">Ideas to build</div>
          </div>
        </div>
      </div>

      {/* CURRENTLY */}
      <section className="redesign-section">
        <p className="section-tag">Right Now</p>
        <div className="currently-grid">
          <div className="currently-card">
            <div className="currently-card-label">Studying</div>
            <div className="currently-card-content" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
              Computer Science &amp; Engineering
            </div>
            <div className="currently-card-sub">@ITBA, Buenos Aires</div>
          </div>
          <div className="currently-card">
            <div className="currently-card-label">Building</div>
            <div className="currently-card-content" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
              Something new and exciting
            </div>
            <div className="currently-card-sub">Stealth mode</div>
          </div>
          <div className="currently-card">
            <div className="currently-card-label">Reading</div>
            <div className="currently-card-content" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
              The Art of Doing Science and Engineering
            </div>
            <div className="currently-card-sub">by Richard Hamming</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <div className="contact-section">
        <div className="contact-inner">
          <p className="contact-eyebrow">Let&apos;s talk</p>
          <h2 className="contact-heading" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
            <a href="mailto:tomas@tomasholtz.com">Say hello &rarr;</a>
          </h2>
          <p className="contact-sub">
            Open to interesting projects, collaborations,<br />or just a good conversation over coffee
          </p>
        </div>
      </div>

      <SiteFooter />
    </>
  )
}
