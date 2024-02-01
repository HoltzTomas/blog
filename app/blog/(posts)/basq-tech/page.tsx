import Link from "next/link";
import { ArticleAnchor } from "../components/ArticleAnchor";

export const metadata = {
    title: "🏀 Basq Tech: una idea y mi inicio en programación",
    description:
        "Este artículo es el primero de la serie “Mi camino como programador” donde cuento todo lo que pasé (incluyendo enfáticamente los errores) desde mi primera línea de código hasta hoy.",
    openGraph: {
        title: "🏀 Basq Tech: una idea y mi inicio en programación",
        description:
            "Este artículo es el primero de la serie “Mi camino como programador” donde cuento todo lo que pasé (incluyendo enfáticamente los errores) desde mi primera línea de código hasta hoy.",
        url: "https://tomasholtz.com/blog/basq-tech",
        siteName: "Tomas Holtzg's blog",
        images: [{ url: 'https://res.cloudinary.com/di65i8wd3/image/upload/v1675032932/Blog_Basq_yhxh0y.png' }],
    },
    twitter: {
        card: "summary_large_image",
        site: "https://tomasholtz.com/blog/basq-tech",
        creator: "@tomasholtz_",
    },
    metadataBase: new URL("https://tomasholtz.com/blog/basq-tech"),
};

export default function BasqTechPost() {
    return (

        <>
            <h1>🏀 Basq Tech: una idea y mi inicio en programación</h1>
            <p>Hace unos dias estaba escuchando el podcast <ArticleAnchor href='https://open.spotify.com/show/7iha1OwqFHYAmPv9Ya5Pbt'>Tecnología Informal</ArticleAnchor>, de mi gran amigo y colega <ArticleAnchor href='https://www.linkedin.com/in/gabriel-benmergui/'>Gabriel Benmergui</ArticleAnchor>. Precisamente el episodio 4: “Carrera de programador”.</p>
            <p>En este episodio, Gabi menciona que hay tres perfiles de personas que aprenden a programar. Y así describe al tercer tipo:</p>

            <blockquote>
                <p>Por ultimo, esta la gente que aprende sola. Sea porque le interesa o tiene pasión por la tecnología, o porque quieren crear un producto/servicio y necesitan aprender de tecnología para construirlo.</p>
            </blockquote>

            <p>A lo que agrega:</p>

            <blockquote>
                <p>Tambien, crear tu propio producto y venderlo en el mercado es mas fácil que nunca, <strong>y nada enseña mejor que tener que lidiar con todos los problemas de tener que crear un producto y ponerlo en el mercado.</strong> Eso si, casi siempre tu producto va a fracasar. Es muy raro no tener experiencia técnica y/o de producto, y que puedas crear algo desde cero que tenga éxito y sea competitivo.</p>
            </blockquote>

            <h2>La idea y el inicio</h2>
            <p>Juego al basquet desde que tengo 9 años, y desde esa edad gran parte de mis tardes transcurrieron picando una pelota naranja en el Club Argentino de Marcos Juarez.</p>
            <p>Nunca fui un talentoso, era alto y nada mas (1,87m al momento de escribir esto), pero eso no era impedimento para el apoyo incondicional de mis viejos hacia mi. Motivándome a seguir entrenando y mejorar un poquito todos los dias.</p>
            <p>Este apoyo no fue solo desde el aliento, en julio de 2019 mi viejo me mando a una clínica de basquet de IMG Academy (Florida, USA). 3 semanas solo en una de las mejores secundarias de Estados Unidos para que mejore como jugador y aprenda ingles.</p>
            <p>Esas tres semanas fueron anecdóticas (la pase genial), salvo por un detalle, <strong>me impresiono la cantidad de software que utilizaban para medir cada detalle de los entrenamientos. Datos que compartían con los jugadores de forma individual a través de una app mobile.</strong></p>
            <p>Meses después, Argentina lograría un histórico segundo puesto en el campeonato mundial de la FIBA. Lo cual me llevo a siguiente pensamiento:</p>

            <blockquote>
                <p>Como puede ser que Argentina, potencia mundial basquetbolistica desde hace dos décadas, no llegue ni por asomo a lo que vi en Estados Unidos hace solo tres meses?</p>
                <p>Podría hacer una app que te permita trackear mis entrenamientos de tiro, seria un buen inicio.</p>
                <p>Que tan difícil puede ser programar una app?</p>
            </blockquote>

            <h2>Programando el MVP y aprendiendo de tecnología</h2>
            <p>Ahí arranque, de forma casi arrogante, pensando que iba a aprender rápido como programar apps para poder sacar un MVP de mi idea.</p>
            <p>No conocía a nadie en software, así que arranque con la carrera de desarrollador de apps de Next U. Quienes no los conozcan, son de la misma empresa que Open English.</p>

            <Link rel="noopener noreferrer" target="_blank" href={'/blog/programacion/programar'}>
                <div className='wrap'>
                    <b>tl;DR:</b>
                    <div className='wrap_content'><p>Ni les pongo el link para que no los busquen, horrible todo. Cursos malísimos, con voz casi robotica y pésima atención para preguntar dudas. (Si queres aprender a programar sin cometer estos errores hace click sobre esta caja)</p></div>
                </div>
            </Link>

            <p>Pero bueno, termine aprendiendo Java y sacando la primera versión de <ArticleAnchor href='https://play.google.com/store/apps/details?id=com.basqtech.basqtechdos&hl=es_AR&gl=US&pli=1'>Basq Tech en la PlayStore</ArticleAnchor>. Salió a los 8 meses de empezar a aprender y solo usaba storage local para guardar entrenamientos que ibas guardando a mano y nada mas. Si cambiabas de dispositivo perdías todo.</p>
            <p>Osea, había perdido mucho tiempo para hacer poco.</p>
            <p>Lo peor? Todavía tenia que aprender <ArticleAnchor href='https://www.apple.com/es/swift/'>Swift para sacar la app en iOS</ArticleAnchor>. Y cuando lo lograra, mantener y mejorar dos apps distintas, para dos sistemas operativos. Imposible.</p>
            <p>Ahí es cuando conocí <ArticleAnchor href='https://flutter.dev/'>Flutter</ArticleAnchor>, un lenguaje de programación (ya se que es un framework pero déjenme bajarlo a tierra) creado por Google que te permitía tener una app para Android y para iOS con la misma base de código.</p>
            <p>Así que ahí, en septiembre de 2020, empece a aprender este nuevo lenguaje, el cual terminaría usando pero para otro proyecto.</p>

            <h2>Lo que aprendi sobre producto con Basq Tech</h2>
            <p>Como menciona Gabriel al inicio del articulo:</p>

            <blockquote>
                <p>Nada enseña mejor que tener que lidiar con todos los problemas de tener que crear un producto y ponerlo en el mercado.</p>
            </blockquote>

            <p>Y así fue, tuve que crear la imagen de marca, abrir redes sociales, aprender lo que era un MVP, <ArticleAnchor href='https://open.spotify.com/show/2VmGRk3gHTP1qjf2URL9YC?si=956c92b544a04cf0&nd=1'>hasta creé un podcast donde entrevistaba jugadores o personalidades del basquet argentino que lograba contactar</ArticleAnchor>.</p>
            <p>Esto con el objetivo de darle visibilidad a la marca, intentando aportar valor con ese podcast a los posibles usuarios de la app. Lo cual fue un fracaso porque dicho podcast lo escucharon 5 amigos y tres familiares.</p>
            <p>Lo bueno de este podcast fue que logre convencer a <ArticleAnchor href='https://www.linkedin.com/in/jose-huguet-729805213/'>Jose Huguet</ArticleAnchor> (Fundador de <ArticleAnchor href='https://hoopshoes.net/'>HoopShoes</ArticleAnchor>) de que se sume al 3er episodio, persona con la que entablaría una gran amistad que perdura hasta hoy en día y quien sería mi socio en otro proyecto mas adelante.</p>

            <h2>Para cerrar</h2>
            <p>Si miramos la foto, e intentamos resumir todo este experimento, podemos concluir en que intente crear un producto nuevo y llevarlo al mercado fracasando estrepitosamente en el intento.</p>
            <p>Si miramos la película, este ‘fracaso’ decanto en que:</p>
            <ul>
                <li><p> - Aprendiera las bases del desarrollo de software, sumando una app medio pelo a mi portfolio, lo cual es mejor que nada.</p></li>
                <li><p> - Me forzara a leer y aprender sobre las bases de como lanzar un producto rapido al mercado e iterarlo.</p></li>
                <li><p> - Conociera a una persona que seria importante en mi vida en un futuro no muy distante.</p></li>
            </ul>

            <p>Todo tal cual, como si hubiese escuchado el podcast mencionado en un principio a mis 16 años, antes de comenzar con esto…</p>
            <p>Obviamente esto no termina acá, lo aprendido en este periodo de aproximadamente 8 meses me ayudaría a lanzarme hacia mi siguiente ‘fracaso’. Pero eso queda para el siguiente articulo.</p>
            <p>Si llegaste hasta acá, y estás buscando crecer o directamente aprender a programar, tal vez sea la señal para que crees tu propio producto.</p>
            <p>En una de esas, capaz encima te va bien, quien sabe?</p>
            <p>Si lo llegas a hacer, no tengas duda en escribirme o pedirme feedback por <ArticleAnchor href='https://twitter.com/tomasholtz_'>redes</ArticleAnchor> si crees que te puedo ayudar en algo.</p>
            <p>Abrazo grande, y gracias por leer.</p>
            <p>🫡</p>

        </>
    )
}