import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { experienceItems } from "../components/site-data";

const AboutKnotCanvas = dynamic(() => import("../components/three/AboutKnotCanvas"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="about-page-hero">
        <div className="about-page-left">
          <p className="about-page-eyebrow">01 — Who the hell am I?</p>
          <h1 className="about-page-title">
            ¿Quién
            <br />
            carajo
            <br />
            <span className="accent-word">soy?</span>
          </h1>
        </div>

        <div className="about-page-right">
          <AboutKnotCanvas />
        </div>
      </section>

      <section className="about-body">
        <aside className="about-sidebar">
          <div className="about-sidebar-label">Tomas Holtz</div>
          <h2 className="about-sidebar-name">
            Builder.
            <br />
            Student.
            <br />
            Curious person.
          </h2>
          <Image src="/retrato.jpeg" alt="Tomas Holtz" width={140} height={140} className="avatar-large" />
        </aside>

        <div className="about-main">
          <div className="about-main-text">
            <p>
              Desde que tengo uso de razón, persigo y dedico todo mi tiempo a las cosas que
              simplemente me llaman la atención. O cualquier cosa que me ilusione en ese momento.
            </p>

            <p>
              Lejos estoy de considerarme una persona brillante. Supongo que era tal vez inevitable
              que después de años intentando hacer cosas, alguna que otra funcionase.
            </p>

            <p>
              El <Link href="/blog">blog</Link> nació para eso, para dar contexto. Me llamaba la
              atención cómo gente en internet podía idealizar a alguien que, en el fondo, no dejaba
              de ser un tipo normal. Así que empecé a documentar a detalle mis fracasos, y eso
              terminó siendo bastante más útil que intentar parecer más crack de lo que realmente
              soy.
            </p>

            <p>
              Aprendí a programar para crear <Link href="/blog/basq-tech">Basq Tech</Link>,{" "}
              <Link href="/blog/club-app">una app para el club de mi barrio</Link> y{" "}
              <Link href="/blog/cdp-app">CDP APP</Link>. Ninguna funcionó, pero cada una me dejó
              una excusa nueva para seguir insistiendo.
            </p>

            <p>
              Como me di cuenta de que me faltaba cancha, empecé a buscar trabajo y terminé en{" "}
              <a href="https://www.belo.app/es" target="_blank" rel="noopener noreferrer">
                Belo
              </a>{" "}
              a los 18, todavía en el secundario y con el proyecto recién arrancando en 2021.
            </p>

            <p>
              En Belo estuve casi dos años. Durante una etapa fui el único dev a cargo del frontend
              de la app, con cientos de miles de usuarios y mucha presión real. Ahí entendí lo que
              significa shippear software de verdad.
            </p>

            <p>
              En el medio no me privé de seguir haciendo cosas: con un amigo subastamos un{" "}
              <a
                href="https://www.infobae.com/economia/2021/10/19/se-subasto-el-nft-del-pronostico-del-influencer-financiero-mas-polemico-de-argentina-cuanto-pagaron/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NFT con Carlos Maslaton
              </a>{" "}
              y de alguna forma terminamos apareciendo en Infobae.
            </p>

            <p>
              Terminé el secundario, en 2022 me fui de la casa de mis viejos y decidí no estudiar
              por un tiempo. Quería trabajar, moverme, viajar a Buenos Aires, conocer gente y ver
              qué pasaba si seguía un poco más esa intuición de generar movimiento antes de ordenar
              todo.
            </p>

            <p>
              También en 2022 me asocié con{" "}
              <a href="https://beacons.ai/josihuguet" target="_blank" rel="noopener noreferrer">
                Josi Huguet
              </a>{" "}
              y{" "}
              <a href="https://www.instagram.com/coco.gbv/" target="_blank" rel="noopener noreferrer">
                Matías Gallo
              </a>{" "}
              para crear una plataforma para jugadores de básquet. Duró poco, pero sirvió para
              confirmar que me encanta construir cosas incluso cuando todavía no entiendo del todo
              cómo van a sobrevivir.
            </p>

            <p>
              En 2023 dejé de trabajar porque decidí mudarme a Buenos Aires y estudiar ingeniería
              en ITBA. No fue una decisión obvia, pero sentía que necesitaba estructura sin dejar de
              perseguir todo lo demás que me interesaba.
            </p>

            <p>
              En 2024 di mi{" "}
              <a
                href="https://www.youtube.com/watch?v=RSeqn85Crfo"
                target="_blank"
                rel="noopener noreferrer"
              >
                primera charla
              </a>
              , contando por qué creo que me pasaron tantas cosas extrañas a tan corta edad. Apenas
              terminé, Matías Gallo me escribió para sumarme a un equipo de básquet amateur que
              quería armar y documentar.
            </p>

            <p>
              Tres meses después, ya teníamos millones de visualizaciones, un proyecto deportivo con
              mucha energía y gente como{" "}
              <a
                href="https://www.youtube.com/watch?v=whh2weRUdYs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pepe Sanchez
              </a>{" "}
              o{" "}
              <a
                href="https://www.youtube.com/watch?v=jpQXqAjhdbo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Duki
              </a>{" "}
              apareciendo en el camino. Mi vida tiene esa tendencia a desviarse de maneras bastante
              absurdas.
            </p>

            <p>
              Llegamos a 2025 y seguí estudiando, jugando, escribiendo, empezando YouTube y lanzando{" "}
              <a href="https://www.note-studio.com/" target="_blank" rel="noopener noreferrer">
                Note Studio
              </a>{" "}
              con dos compañeros de la facultad. Como casi todo lo que me interesa, avanzó por
              ráfagas entre falta de tiempo, otras obsesiones y ganas de entender qué hacer con todo
              eso.
            </p>

            <p>
              Veremos qué pasa de acá en adelante. Mi única regla bastante consistente es seguir las
              cosas que me divierten, me intrigan o me obligan a convertirme en alguien un poco más
              capaz que ayer.
            </p>
          </div>

          <div className="experience-list">
            {experienceItems.map((item, index) => (
              <div
                key={`${item.year}-${item.role}`}
                className="experience-item reveal-item"
                data-reveal="true"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="exp-year">{item.year}</div>
                <div>
                  <div className="exp-role">{item.role}</div>
                  <div className="exp-company">{item.company}</div>
                  <div className="exp-desc">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
