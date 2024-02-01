import Link from "next/link";
import { ArticleAnchor } from "../components/ArticleAnchor";

export const metadata = {
    title: "🏟️ Una app para el club de mi barrio",
    description:
        "Este artículo es el segundo de la serie “Mi camino como programador” donde cuento todo lo que pasé (incluyendo enfáticamente los errores) desde mi primera línea de código hasta hoy.",
    openGraph: {
        title: "🏟️ Una app para el club de mi barrio",
        description:
            "Este artículo es el segundo de la serie “Mi camino como programador” donde cuento todo lo que pasé (incluyendo enfáticamente los errores) desde mi primera línea de código hasta hoy.",
        url: "https://tomasholtz.com/blog/club-app",
        siteName: "Tomas Holtzg's blog",
        images: [{ url: 'https://res.cloudinary.com/di65i8wd3/image/upload/v1681140818/Blog_Club_App_akscbl.png' }],
    },
    twitter: {
        card: "summary_large_image",
        site: "https://tomasholtz.com/blog/club-app",
        creator: "@tomasholtz_",
    },
    metadataBase: new URL("https://tomasholtz.com/blog/club-app"),
};

export default function ClubAppPost() {
    return (

        <>
            <h1>🏟️ Una app para el club de mi barrio</h1>
            <Link rel="noopener noreferrer" target="_blank" href={'/blog/camino-como-programador/basq-tech'}>
                <div className='wrap'>
                    <b>Aviso</b>
                    <div className='wrap_content'>
                        <p>Este artículo es el segundo de la serie “Mi camino como programador” donde cuento todo lo que pasé (incluyendo enfáticamente los errores) desde mi primera línea de código hasta hoy.</p>
                        <p>Si querés más contexto de lo que se va a hablar acá, podés leer el primero: “Basq Tech: Una idea y mi inicio en programación”.</p>
                    </div>
                </div>
            </Link>

            <h2>El inicio de mi segunda gran (o no tan ‘gran’) idea</h2>
            <p>Haciendo un breve repaso del artículo anterior, me encontraba intentando  aprender Flutter, debido a que me di cuenta de que podía crear una App para Android y iOS con la misma base de código. Sin necesidad de aprender dos lenguajes nativos y mantener dos apps.</p>
            <p>Al mismo tiempo descubrí la existencia de <ArticleAnchor href='https://firebase.google.com/?hl=es-419'>Firebase</ArticleAnchor>, un servicio de Google que funciona como “Backend as a service”. En criollo, me servía para guardar y autenticar usuarios, y guardar info de estos en bases de datos, sin tener que encargarme de la lógica e infraestructura de todo esto.</p>
            <p>(Recordemos que Basq Tech solo usaba almacenamiento local del dispositivo)</p>
            <p>Por algún motivo, que no recuerdo del todo (tal vez me aburrí, no lo sé), decidí aplicar Firebase y Flutter pero no a Basq Tech, sino a un nuevo proyecto. El razonamiento en mi cabeza sobre esta nueva idea era más o menos así.</p>

            <blockquote>
                <p>¿Y si programo una app que digitalice los procesos del club de mi ciudad? Carnet de socios digitales, reservas de canchas de tenis/golf, noticias y avisos del club publicados dentro de la app, etc.</p>
                <p>Además, no solo que un club tiene más presupuesto para pagar algo así que un consumidor final, sino que además si sale bien se lo puedo vender a todos los clubes del país cambiándoles el logo y los colores de la app.</p>
            </blockquote>
            <h2>Desarrollo del MVP</h2>
            <p>Algo de lo que si estoy contento de haber hecho, tanto en el proyecto anterior como en este, fue que en ambos fui con la idea de realizar un MVP.</p>
            <div className='wrap'>
                <div className='wrap_content'>
                    <p>Un MVP es una versión de tu producto con las funcionalidades mínimas para satisfacer a tus clientes iniciales, lo que te da retroalimentación rápida de que quieren los usuarios.</p>
                    <p>Realizar una versión completa de tu producto, empleando mucho tiempo de desarrollo, para recién ahí enterarte si lo que hiciste le sirve a los usuarios o no, es bastante poco práctico.</p>
                </div>
            </div>
            <p>Me tomé un par de semanas para desarrollar una app que tenía un feed de noticias del club como página principal, y un menú que te llevaba a otra página con información de contacto y a otra página más que no recuerdo que hacía.</p>
            <p>Viéndolo en retrospectiva, la app brillaba por su ausencia de estética y funcionalidad, pero con eso me presenté al club de mi barrio a ofrecerles lo que había hecho.</p>

            <h2>La negociación</h2>
            <p>Le mandé un mensaje al entonces presidente del club, quien me invito a asistir a una de las reuniones directivas para presentar mi idea.</p>
            <p>Y ahí fui, re contra nervioso y sin saber qué esperar. ¿El objetivo? Venderles la app, más su debido mantenimiento (incluyendo el desarrollo de funcionalidades nuevas) por 10.000ars por mes (En ese entonces 50usd).</p>
            <p>Sí, era baratísimo, mi apuesta era desarrollar el producto con ellos y después hacer mucha más plata vendiéndosela a todos los clubes que quisiera.</p>
            <p>La primera reunión fue fructífera, vieron la pequeña app con ese feed de noticias y me dijeron que cosas le servían al club que fuesen añadidas. Hicieron énfasis en la posibilidad de un carnet de socio digital, el cual les dije que podía ser desarrollado en 6 meses.</p>
            <p>Siendo sincero, no tenía ni idea de como desarrollar eso ni si era posible. Pero confiaba en mi capacidad para rebuscármela y hacerlo.</p>
            <div className='wrap'>
                <div className='wrap_content'>
                    <p>Esto, en mi opinión, es importante.</p>
                    <p>Cuando te pregunten acerca de los plazos de un desarrollo, siempre es mejor decir algo con certeza (de última modificándolo un poco sobre la marcha después), que decir algo con dudas como: &quot;Emmm, sí, depende, más o menos 6 meses, puede ser menos o más&quot;.</p>
                    <p>No solo que das la imagen de alguien que no sabe bien lo que está haciendo, sino que dando una fecha exacta te vas a obligar a cumplir, y con eso a buscarle la vuelta de la forma que sea, siendo un poquito más eficiente que si no tuvieras esa presión.</p>
                </div>
            </div>
            <p>Igualmente, no aceptaron en esa primera reunión, ni en la siguiente, ni él la siguiente. Fueron varias reuniones durante un lapso de aproximadamente 3 meses. </p>
            <p>Cuando ya todo parecía cerrado, el proyecto se cayó por decisión de ellos, no recuerdo bien el motivo. Lo cual me frustro bastante. </p>

            <h2>La decisión de abandonar</h2>
            <p>Estuve una semana analizando que hacer, podía intentar ofrecerla a otro club, o esperar a que mi club se cambiara de opinión y quisiese seguir con el proyecto.</p>
            <p>En lugar de hacer esto, me puse a pensar en porque había fallado. Y sobre todo, en porque el proceso de venta había sido tan lento, lo cual me molestaba muchísimo.</p>
            <p>Para el que no esté familiarizado, los clubes de barrio no son empresas, son algo así como una cooperativa. Los dirigentes no son dueños del club y no viven de dedicarse a eso, la gran mayoría tiene otro trabajo.</p>
            <p>Esto hace a los clubes lentos en la toma de decisiones, comparado con una empresa. Muchas veces teniendo a personas tomando decisiones sobre temas que no dominan en lo más mínimo.</p>
            <p>Tener este tipo de instituciones iba a traerme muchos dolores de cabeza si decidía continuar con esto. Por eso decidí dejarlo y ponerme a hacer otra cosa.</p>
            <p>¿Con qué otra cosa me puse? Lo dejo para el próximo artículo, que si no se hace eterno :) </p>
            <p>Un spoiler, migre a AgTech 👀</p>
            <p>Abrazo grande, y gracias por leer.</p>
            <p>🫡</p>

        </>
    )
}