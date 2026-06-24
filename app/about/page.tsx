import Link from "next/link"
import Image from "next/image"
import { AboutCanvas } from "../components/AboutCanvas"
import { ExperienceList } from "../components/ExperienceList"
import { SiteFooter } from "../components/SiteFooter"

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <div className="about-page-hero">
        <div className="about-page-left">
          <p className="about-page-eyebrow">01 — Who the hell am I?</p>
          <h1 className="about-page-title" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
            &iquest;Qui&eacute;n<br />carajo<br /><span className="accent-word">soy?</span>
          </h1>
        </div>
        <div className="about-page-right">
          <AboutCanvas />
        </div>
      </div>

      {/* BODY */}
      <div className="about-body">
        <div className="about-sidebar">
          <div className="about-sidebar-label">Tomas Holtz</div>
          <div className="about-sidebar-name" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>
            Builder.<br />Student.<br />Curious person.
          </div>
          <Image
            src="/retrato.jpeg"
            alt="Tomas"
            width={140}
            height={140}
            className="avatar-large"
          />
        </div>

        <div className="about-main">
          <div className="about-main-text">
            <p>
              Desde que tengo uso de raz&oacute;n, persigo y dedico todo mi tiempo a las cosas que simplemente me llaman la atenci&oacute;n. O cualquier cosa que me ilusione en ese momento.
            </p>
            <p>
              Lejos estoy de considerarme una persona brillante. Supongo era tal vez inevitable que despu&eacute;s de a&ntilde;os intentando hacer cosas, alguna que otra funcionase.
            </p>
            <p>
              El blog naci&oacute; para eso, para dar contexto. Me llamaba la atenci&oacute;n como gente en internet pod&iacute;a idealizar a alguien que, en el fondo, no dejaba de ser un tipo normal (e inclusive bastante boludo). As&iacute; que empec&eacute; a documentar a detalle mis fracasos (el blog fue uno; lo abandon&eacute; por pajero).
            </p>
            <p>
              Aprend&iacute; a programar para crear{" "}
              <Link href="/blog/basq-tech">Basq Tech</Link>,{" "}
              <Link href="/blog/club-app">una app para el club de mi barrio</Link>{" "}
              y <Link href="/blog/cdp-app">CDP APP</Link>. Ninguna funcion&oacute;.
            </p>
            <p>
              Como me di cuenta que me faltaba cancha (capaz emprender sin jam&aacute;s haber siquiera trabajado no era el mejor plan), empec&eacute; a buscar trabajo y termin&eacute; en{" "}
              <a href="https://www.belo.app/" target="_blank" rel="noopener noreferrer">Belo</a>{" "}
              a los 18, estando a&uacute;n en el secundario y con el proyecto reci&eacute;n dando sus primeros pasos en 2021.
            </p>
          </div>

          <ExperienceList />
        </div>
      </div>

      <SiteFooter />
    </>
  )
}
