import Link from "next/link"
import { NeueMachinaRegular, NeueMachinaUltraBold } from "../components/Fonts"
import { AvatarLogo } from "../components/AvatarLogo"

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="space-y-16">
                {/* Hero Section */}
                <div className="text-center space-y-4">
                    <AvatarLogo className="flex justify-center mx-auto" />
                    <h1 className={`text-6xl font-bold tracking-tighter ${NeueMachinaUltraBold.className}`}>¿Quién carajo soy?</h1>
                </div>

                {/* About Section */}
                <div className={`space-y-8 ${NeueMachinaRegular.className}`}>

                    <div className="space-y-6 text-lg">
                        <p>
                            Desde que tengo uso de razón, persigo y dedico todo mi tiempo a las cosas que simplemente me llaman la atención. O cualquier cosa que me ilusione en ese momento.
                        </p>

                        <p>
                            Lejos estoy de considerarme una persona brillante. Supongo era tal vez inevitable que después de años intentando hacer cosas, alguna que otra funcionase.
                        </p>

                        <p>
                            El <Link href="/blog" prefetch><span className={`${NeueMachinaUltraBold.className} text-blue`}>blog</span></Link> nació para eso, para dar contexto. Me llamaba la atención como gente en internet podía idealizar a alguien que, en el fondo, no dejaba de ser un tipo normal (e inclusive bastante boludo). Así que empece a documentar a detalle mis fracasos (el blog fue uno; lo abandoné por pajero).
                        </p>

                        <p>
                            Aprendí a programar para crear <Link href="/blog/basq-tech" prefetch><span className={`${NeueMachinaUltraBold.className} text-blue`}>Basq Tech</span></Link>
                            , <Link href="/blog/club-app" prefetch><span className={`${NeueMachinaUltraBold.className} text-blue`}>una app para el club de mi barrio </span></Link>
                            y <Link href="/blog/cdp-app" prefetch><span className={`${NeueMachinaUltraBold.className} text-blue`}>CDP APP</span></Link> (Ninguna funcionó).
                        </p>

                        <p>
                            Como me di cuenta que me faltaba cancha (capaz emprender sin jamás haber siquiera trabajado no era el mejor plan), empecé a buscar trabajo y terminé en <Link href="https://www.belo.app/es" target="_blank" rel="noopener noreferrer"><span className={`${NeueMachinaUltraBold.className} text-blue`}>Belo</span></Link> a los 18, estando aún en el secundario y con el proyecto recien dando sus primeros pasos en 2021.
                        </p>

                        <p>
                            En el medio no me privé de seguir haciendo cosas, con un amigo subastamos un <Link href="https://www.infobae.com/economia/2021/10/19/se-subasto-el-nft-del-pronostico-del-influencer-financiero-mas-polemico-de-argentina-cuanto-pagaron/" target="_blank" rel="noopener noreferrer"><span className={`${NeueMachinaUltraBold.className} text-blue`}>NFT con Carlos Maslaton</span>, por el cual terminaríamos en Infobae.</Link>
                        </p>

                        <p>
                            Terminé el secundario y en 2022 me fui de la casa de mis viejos. Decidí no estudiar, seguir trabajando y viajar lo más que podía a Buenos Aires a conocer gente (soy de un pueblo en Córdoba).
                        </p>

                        <p>
                            Y también en 2022 me asocié con <Link href="https://beacons.ai/josihuguet" target="_blank" rel="noopener noreferrer"><span className={`${NeueMachinaUltraBold.className} text-blue`}>Josi Huguet</span></Link> (Founder <Link href="https://hoopshoes.net/" target="_blank" rel="noopener noreferrer"><span className={`${NeueMachinaUltraBold.className} text-blue`}>Hoop Shoes</span></Link>) y <Link href="https://www.instagram.com/coco.gbv/" target="_blank" rel="noopener noreferrer"><span className={`${NeueMachinaUltraBold.className} text-blue`}>Matías Gallo</span></Link> (<Link href="https://www.instagram.com/flowgamebasketball/" target="_blank" rel="noopener noreferrer"><span className={`${NeueMachinaUltraBold.className} text-blue`}>Flow Game Basketball</span></Link>) para crear una plataforma para jugadores de básquet, pero el proyecto duró un mes porque mi cabeza no toleró hacer esto mientras trabajaba.
                        </p>

                        <p>
                            En 2023 dejé de trabajar porque decidí mudarme a Buenos Aires y estudiar ingeniería en ITBA (otro día explico el porqué).
                        </p>

                        <p>
                            En 2024 di mi <Link href="https://www.youtube.com/watch?v=RSeqn85Crfo" target="_blank" rel="noopener noreferrer"><span className={`${NeueMachinaUltraBold.className} text-blue`}>primer charla</span></Link>, contando sobre mi vida y porque creo que me pasaron tantas cosas extrañas a tan corta edad.
                        </p>

                        <p>
                            Automáticamente, después de la charla, me escribió Matías Gallo (nombrado anteriormente) para que formara parte de un equipo de básquet amateur que iba a armar con amigos.
                        </p>

                        <p>
                            Argumentó que quería empoderar el deporte amateur en Argentina, y que iba a documentar todo.
                        </p>

                        <p>
                            Tres meses después, ya teníamos 2 millones de visualizaciones en redes y gente como <Link href="https://www.youtube.com/watch?v=whh2weRUdYs" target="_blank" rel="noopener noreferrer"><span className={`${NeueMachinaUltraBold.className} text-blue`}>Pepe Sánchez</span></Link> y <Link href="https://www.youtube.com/watch?v=jpQXqAjhdbo" target="_blank" rel="noopener noreferrer"><span className={`${NeueMachinaUltraBold.className} text-blue`}>Duki</span></Link> jugaron con nosotros.
                        </p>

                        <p>
                            Llegamos a 2025 (momento en que escribo esto). Sigo estudiando, jugando en Flow amateur, empecé mi canal de YouTube (les cuento más abajo) y lanzamos <Link href="https://www.note-studio.com/" target="_blank" rel="noopener noreferrer"><span className={`${NeueMachinaUltraBold.className} text-blue`}>Note Studio</span></Link> con dos compañeros de la facultad, proyecto que se vio olvidado por falta de tiempo.
                        </p>

                        <p>
                            El ultimo update, en julio de 2025, es que me sume como fellow a <Link href="https://www.nxtp.vc/" target="_blank" rel="noopener noreferrer"><span className={`${NeueMachinaUltraBold.className} text-blue`}>NXTP Ventures</span></Link> (en mi humilde opinión el mejor fondo early stage de latinoamerica) a dar una mano en diferentes iniciativas mientras sigo mis estudios.
                        </p>

                        <p>
                            Veremos qué pasa de acá en adelante, pero mientras me divierta va a estar seguir todo bien.
                        </p>

                        <div className="text-center" id="generando-movimiento">
                            <h2 className={`text-3xl font-bold text-blue-500 my-8 ${NeueMachinaUltraBold.className}`}>
                                [ GENERANDO MOVIMIENTO ]
                            </h2>
                        </div>

                        <p>
                            Nada de lo que pasó en los últimos años lo planeé. Cada proyecto, publicación, evento o lo que sea fue &quot;Generando Movimiento&quot; y haciendo que muchas oportunidades simplemente se me presentaran.
                        </p>

                        <p>
                            Si no hubiese tenido el sueño de jugar al básquet (no lo logré), no hubiese empezado a programar para crear Basq Tech, supongo.
                        </p>

                        <p>
                            Si no hubiese intentado Basq Tech, no hubiese conocido a Josi (ni tampoco a Mati) ni hubiese trabajado en Belo.
                        </p>

                        <p>
                            Y así se dan decenas de ejemplos en mi vida en los últimos años.
                        </p>

                        <p>
                            Siguiendo el patrón de seguir lo que sea que me genere ilusión o interés (me gustaba la idea de ser youtuber), decidí empezar una serie llamada <Link href="https://www.youtube.com/@holtztomas" target="_blank" rel="noopener noreferrer"><span className={`${NeueMachinaUltraBold.className} text-blue`}>Generando Movimiento</span></Link>.
                        </p>

                        <p>
                            O sea, digamos, es una excusa conceptual al no saber bien qué subir. Voy a documentar momentos de mi vida que quiera inmortalizar y compartir; con el tiempo veremos hacia dónde vamos.
                        </p>

                        <p>
                            Bienvenidos a mi vida :)
                        </p>


                    </div>
                </div>

            </div>
        </main>
    )
}
