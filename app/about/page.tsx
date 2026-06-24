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
              El{" "}
              <Link href="/blog">blog</Link>{" "}
              naci&oacute; para eso, para dar contexto. Me llamaba la atenci&oacute;n como gente en internet pod&iacute;a idealizar a alguien que, en el fondo, no dejaba de ser un tipo normal (e inclusive bastante boludo). As&iacute; que empece a documentar a detalle mis fracasos (el blog fue uno; lo abandon&eacute; por pajero).
            </p>
            <p>
              Aprend&iacute; a programar para crear{" "}
              <Link href="/blog/basq-tech">Basq Tech</Link>,{" "}
              <Link href="/blog/club-app">una app para el club de mi barrio</Link>{" "}
              y <Link href="/blog/cdp-app">CDP APP</Link> (Ninguna funcion&oacute;).
            </p>
            <p>
              Como me di cuenta que me faltaba cancha (capaz emprender sin jam&aacute;s haber siquiera trabajado no era el mejor plan), empec&eacute; a buscar trabajo y termin&eacute; en{" "}
              <a href="https://www.belo.app/es" target="_blank" rel="noopener noreferrer">Belo</a>{" "}
              a los 18, estando a&uacute;n en el secundario y con el proyecto recien dando sus primeros pasos en 2021.
            </p>
            <p>
              En belo estuve casi dos a&ntilde;os; durante un periodo fui el &uacute;nico dev a cargo del frontend de la app. Con m&aacute;s de 100k usuarios activos mensuales y millones de d&oacute;lares tanto en dep&oacute;sitos como en valor procesado.
            </p>
            <p>
              En el medio no me priv&eacute; de seguir haciendo cosas, con un amigo subastamos un{" "}
              <a href="https://www.infobae.com/economia/2021/10/19/se-subasto-el-nft-del-pronostico-del-influencer-financiero-mas-polemico-de-argentina-cuanto-pagaron/" target="_blank" rel="noopener noreferrer">NFT con Carlos Maslaton, por el cual terminar&iacute;amos en Infobae.</a>
            </p>
            <p>
              Termin&eacute; el secundario y en 2022 me fui de la casa de mis viejos. Decid&iacute; no estudiar, seguir trabajando y viajar lo m&aacute;s que pod&iacute;a a Buenos Aires a conocer gente (soy de un pueblo en C&oacute;rdoba).
            </p>
            <p>
              Y tambi&eacute;n en 2022 me asoci&eacute; con{" "}
              <a href="https://beacons.ai/josihuguet" target="_blank" rel="noopener noreferrer">Josi Huguet</a>{" "}
              (Founder{" "}
              <a href="https://hoopshoes.net/" target="_blank" rel="noopener noreferrer">Hoop Shoes</a>) y{" "}
              <a href="https://www.instagram.com/coco.gbv/" target="_blank" rel="noopener noreferrer">Mat&iacute;as Gallo</a>{" "}
              (<a href="https://www.instagram.com/flowgamebasketball/" target="_blank" rel="noopener noreferrer">Flow Game Basketball</a>) para crear una plataforma para jugadores de b&aacute;squet, pero el proyecto dur&oacute; un mes porque mi cabeza no toler&oacute; hacer esto mientras trabajaba.
            </p>
            <p>
              En 2023 dej&eacute; de trabajar porque decid&iacute; mudarme a Buenos Aires y estudiar ingenier&iacute;a en ITBA (otro d&iacute;a explico el porqu&eacute;).
            </p>
            <p>
              En 2024 di mi{" "}
              <a href="https://www.youtube.com/watch?v=RSeqn85Crfo" target="_blank" rel="noopener noreferrer">primer charla</a>, contando sobre mi vida y porque creo que me pasaron tantas cosas extra&ntilde;as a tan corta edad.
            </p>
            <p>
              Autom&aacute;ticamente, despu&eacute;s de la charla, me escribi&oacute; Mat&iacute;as Gallo (nombrado anteriormente) para que formara parte de un equipo de b&aacute;squet amateur que iba a armar con amigos.
            </p>
            <p>
              Argument&oacute; que quer&iacute;a empoderar el deporte amateur en Argentina, y que iba a documentar todo.
            </p>
            <p>
              Tres meses despu&eacute;s, ya ten&iacute;amos 2 millones de visualizaciones en redes y gente como{" "}
              <a href="https://www.youtube.com/watch?v=whh2weRUdYs" target="_blank" rel="noopener noreferrer">Pepe S&aacute;nchez</a>{" "}
              y{" "}
              <a href="https://www.youtube.com/watch?v=jpQXqAjhdbo" target="_blank" rel="noopener noreferrer">Duki</a>{" "}
              jugaron con nosotros.
            </p>
            <p>
              Llegamos a 2025 (momento en que escribo esto). Sigo estudiando, jugando en Flow amateur, empec&eacute; mi canal de YouTube (les cuento m&aacute;s abajo) y lanzamos{" "}
              <a href="https://www.note-studio.com/" target="_blank" rel="noopener noreferrer">Note Studio</a>{" "}
              con dos compa&ntilde;eros de la facultad, proyecto que se vio olvidado por falta de tiempo.
            </p>
            <p>
              Veremos qu&eacute; pasa de ac&aacute; en adelante, pero mientras me divierta va a estar seguir todo bien.
            </p>
          </div>

          <ExperienceList />
        </div>
      </div>

      <SiteFooter />
    </>
  )
}
