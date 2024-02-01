import Link from "next/link";
import { ArticleAnchor } from "../components/ArticleAnchor";
import Image from "next/image";

import TuitFlutter from '../../../../assets/tuit-flutter.png'
import TuitAsteroid from '../../../../assets/tuit-asteroid.png'

export const metadata = {
    title: "🧑🏻‍💻 Como conseguí mi primer trabajo",
    description:
        "Este artículo es el cuarto de la serie “Mi camino como programador” donde cuento todo lo que pasé (incluyendo enfáticamente los errores) desde mi primera línea de código hasta hoy.",
    openGraph: {
        title: "🧑🏻‍💻 Como conseguí mi primer trabajo",
        description:
            "Este artículo es el cuarto de la serie “Mi camino como programador” donde cuento todo lo que pasé (incluyendo enfáticamente los errores) desde mi primera línea de código hasta hoy.",
        url: "https://tomasholtz.com/blog/primer-trabajo",
        siteName: "Tomas Holtzg's blog",
        images: [{ url: 'https://res.cloudinary.com/di65i8wd3/image/upload/v1706021549/Primer_trabajo_ewistw.png' }],
    },
    twitter: {
        card: "summary_large_image",
        site: "https://tomasholtz.com/blog/primer-trabajo",
        creator: "@tomasholtz_",
    },
    metadataBase: new URL("https://tomasholtz.com/blog/primer-trabajo"),
};


export default function PrimerTrabajoPost() {
    return (

        <>
            <h1>🧑🏻‍💻 Como conseguí mi primer trabajo</h1>
            <Link rel="noopener noreferrer" target="_blank" href={'/blog/camino-como-programador/basq-tech'}>
                <div className='wrap'>
                    <b>Aviso</b>
                    <div className='wrap_content'>
                        <p>Este artículo es el tercero de la serie “Mi camino como programador” donde cuento todo lo que pasé (incluyendo enfáticamente los errores) desde mi primera línea de código hasta hoy.</p>
                        <p>Si querés más contexto de lo que se va a hablar acá, podés leer el primero: “Basq Tech: Una idea y mi inicio en programación”.</p>
                    </div>
                </div>
            </Link>

            <h2>Soy un pésimo programador</h2>
            <p>Eso fue lo que pensé mientras programaba <ArticleAnchor href='https://tomasholtz.com/blog/camino-como-programador/cdp-app'>CDP APP</ArticleAnchor>.</p>
            <p>No me lo decía ni con reproche, ni con frustración, simplemente me parecía algo objetivo.</p>
            <p>Aprender solo puede ser difícil, sobre todo porque no tenes quien te diga en que estás pifiando.</p>
            <p>Por lo tanto, si quería aprender a construir productos que usaran miles de personas, que mejor que sumarme a un equipo que lo esté haciendo, no?</p>

            <h2>Abril 2021</h2>
            <p>El panorama tampoco era muy alentador. Con 17 años, todavía en el secundario y sin experiencia, quién mierda me iba a contratar?</p>
            <p>Arme un CV leyendo un poco en Google sobre como hacerlo, creé una cuenta en <ArticleAnchor href='https://www.linkedin.com/in/tomas-holtz/'>LinkedIn</ArticleAnchor> y empecé a aplicar a ofertas que veía para programar en Flutter, obviamente con nulos resultados.</p>
            <p>No tenía planeado rendirme, así que busque &quot;Buscamos Flutter&quot; en Twitter y encontré este tuit del CEO de Belo. Billetera virtual que recién estaba arrancando, el producto no existía y el equipo estaba formado solo por los founders.</p>

            <Image src={TuitFlutter} alt={''} layout="responsive" style={{ borderRadius: '20px' }} />

            <p>Me dio una entrevista, la cual no estuvo mal (a pesar de mis nervios), en la cual me dieron un desafío técnico para que haga después y se los mande.</p>
            <p>Así lo hice. Les gusto, pero decidieron (con razón) contratar a un senior para que se haga cargo de la app.</p>

            <h2>Julio de 2021</h2>
            <p>Después de decenas de aplicaciones más (con el diario del lunes tal vez mandar CV a todos lados como un robot no fuese la mejor idea), crear perfiles en plataformas como <ArticleAnchor href='https://www.fiverr.com/'>Fiverr</ArticleAnchor>, y de tener alguna que otra entrevista sin éxito, recibí una oferta justamente por Fiverr de un MAGO.</p>
            <p>Sí, de un mago, más falopa imposible. Quería crear una app que utilizaría como herramienta para hacer un truco.</p>
            <p>Obviamente, le dije que sí, tampoco me iba a poner a juzgar el producto.</p>
            <p>Como no sabía cuanto tiempo me tomaría, le ofrecí trabajar por hora. Le pedí muy poco, algo así como 2 dólares la hora. Claramente, el motivo de pedir tan poco era el miedo a no ser contratado. No iba a formar parte de un equipo del cual aprender, pero me iban a pagar por programar, lo cual era un buen primer paso.</p>

            <h2>Agosto de 2021</h2>
            <p>Llevaba un mes trabajando con el mago y su socio, quien resulto ser ingeniero en sistemas, y esta era una app más de un ecosistema de apps que ya tenían. Al parecer no era todo tan falopa como me imagine.</p>
            <p>Bueno, un poco lo era.</p>
            <p>El 22 de agosto fue mi cumpleaños, por tal motivo recibí el saludo de @_vicks__ vía Twitter, a ella la había conocido justamente hablando por ahí y hasta habíamos creado un foro de programación en Telegram.</p>
            <p>Lo raro no fue esto, sino que Mateo Salvatto (amigo de Vicks) comentara el tuit saludándome, y dejando un segundo comentario insinuándome que considerara sumarme a su equipo.</p>

            <Image src={TuitAsteroid} alt={''} layout="responsive" style={{ borderRadius: '20px' }} />

            <p>Me hubiese alegrado, si no fuese porque su empresa ya me había entrevistado y no había sido seleccionado para el puesto. Tampoco me lo tome mal, él no se encargaba de eso ni tenía porque saber. De todas formas le escribí, pero cuando se dio cuenta de esto quedo todo en la nada.</p>
            <p>Pero esta intervención de Mateo tuvo un efecto mariposa aún más interesante.</p>
            <p>Belo había querido retomar conversaciones conmigo para contratarme, pero al abogado del equipo no le pareció una buena idea contratar un menor de edad.</p>
            <p>Pero cuando vieron el tuit de Mateo, no solo se dieron cuenta de que había cumplido 18, sino que además decidieron acelerar por si me contrataba él antes.</p>
            <p>Recibí un mensaje de Manu López y al poco tiempo había dejado mi trabajo con el mago y me había sumado al equipo de Belo.</p>
            <p>Ahora solo tenía un problema, que era adaptar el nuevo trabajo a mi vida. Todavía estaba en el secundario y entrenaba básquet varias horas al día.</p>
            <p>Pero eso queda para el siguiente artículo.</p>

            <h2>Conclusión</h2>
            <p>Mirando en retrospectiva, creo que se pueden destacar varias cosas que, sin saberlo, hice bien e hice mal para conseguir mi primer trabajo en tecnología.</p>
            <ul>
                <li><p> - Mandar el mismo CV o solicitud a decenas de empresas no fue una gran estrategia. Trata que sea lo más personalizado posible. Si no tenés nada que poner en él, hace algún proyecto personal, lo que sea. Haber hecho Basq Tech y CDP APP no solo me sirvieron como porfolio, sino que además me dieron la experiencia para hacer un buen desafío técnico cuando belo me lo pidió.</p></li>
                <li><p> - Haber usado redes sociales para conocer gente fue determinante. No solo por Vicks, quien desencadeno con un tuit todo lo que paso en mi cumpleaños, sino que el foro que creamos me permitió conocerme más gente de la que aprendería mucho. Intenta ser proactivo a la hora de sumar contactos.</p></li>
                <li><p> - Sé 100% honesto en entrevistas. Es muy fácil para alguien con experiencia sacarle la ficha a un junior que intenta aparentar no serlo. En mi entrevista con belo fui sincero en cuanto a mi experiencia y habilidad, lo cual sumado al buen desempeño en el desafío técnico y mi baja pretensión salarial, hizo que me contraten.</p></li>
            </ul>
            <p>La suerte fue necesaria, obviamente. Pero si no hubiese intentado todo lo que intente, la suerte no hubiese servido de mucho.</p>
            <p>Hagan cosas, vayan para adelante. En algún momento la suerte se les va a presentar.</p>
            <p>Abrazo grande, y gracias por leer.</p>
            <p>🫡</p>

        </>
    )
}