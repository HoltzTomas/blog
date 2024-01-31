import Link from "next/link";
import { ArticleAnchor } from "../components/ArticleAnchor";
import Image from "next/image";

import AprendizajeImage from'../../../../assets/aprendizaje.png'
import CDPTuitImageDark from'../../../../assets/cdptuitdark.png'

export default function CDPAPPPost() {
    return (

        <>
            <h1>🚜 CDP APP: Un breve paso por AgTech</h1>
            <Link rel="noopener noreferrer" target="_blank" href={'/blog'}>
                <div className='wrap'>
                    <b>Aviso</b>
                    <div className='wrap_content'>
                        <p>Este artículo es el tercero de la serie “Mi camino como programador” donde cuento todo lo que pasé (incluyendo enfáticamente los errores) desde mi primera línea de código hasta hoy.</p>
                        <p>Si querés más contexto de lo que se va a hablar acá, podés leer el resto acá.</p>
                    </div>
                </div>
            </Link>

            <p>Esto inició en Marzo de 2021, por si alguno no leyó los <ArticleAnchor href='/blog'>2 artículos</ArticleAnchor> que preceden a este, ya había tenido dos proyectos personales, que por motivos ya mencionados no llegaron a buen puerto.</p>
            <p>En esa época yo estaba comenzando 6to año del colegio secundario y tenía 17 años. Obviamente, era todo por zoom (el colegio) porque la cuarentena seguía. Mi escuela se adaptó como pudo a la virtualidad, pero lo cierto es que hacíamos poco y nada.</p>
            <p>Mi viejo, al ver que mi única actividad en el día era programar, me propuso que me ponga darle una mano con el trabajo.</p>
            <p>Él es productor agropecuario, por lo cual era denominado “esencial” y podía salir a trabajar. Pero yo tenía que quedarme en casa a las clases virtuales, así que me propuso que me ponga a llenar “Cartas de porte”.</p>

            <div className='wrap'>
                <div className='wrap_content'>
                    <p>Una carta de porte es un documento que los productores tienen que completar para que un camión pueda trasladar sus granos de un punto a otro.</p>
                    <p>Uno por cada camión.</p>
                    <p>Cada documento son varias hojas de muchísimos datos. ¿Le erraste a uno? Arrancas de cero. ¿Varía un solo dato entre una carta y otra? Hay que hacerla de vuelta y cambiar solo ese dato.</p>
                </div>
            </div>

            <p>Le pregunté a mi viejo si no existía una app para hacerlo y me dijo que si: CDPPro, la cual consistía en una app para escritorio (Ósea, computadora), la cual funcionaba bien, pero que sería más cómoda tenerla en el teléfono.</p>
            <p>Por último, <ArticleAnchor href='https://twitter.com/tomasholtz_/status/1393329936509935620'>publique un tweet preguntando a gente del ámbito si les servía</ArticleAnchor>. Como tenía poquitos seguidores, etiquete al usuario @BumberCrop1 para ver si me ayudaba con un RT. Lo cual sucedió.</p>
            <p>Las respuestas de este fueron muy positivas, sobre todo la de este usuario, el cual dejo muy en claro, a su manera, que opinaba de la idea.</p>

            <Image src={CDPTuitImageDark} alt={''} layout="responsive" style={{ borderRadius: '20px' }} />

            <h2>El desarrollo</h2>
            <p>La idea era muy simple:</p>
            <ul>
                <li><p> - Un form donde llenar todos los datos.</p></li>
                <li><p> - Una pantalla donde ves las últimas que llenaste, para poder descargarlas, o copiarlas para hacer una nueva con los mismos datos y modificar el que necesites.</p></li>
                <li><p> - Que el usuario tenga que pagar cuando ya supero las 3 cartas de porte generadas.</p></li>
            </ul>
            <p>Y acá va algo que es clave y veo que mucha gente que empieza proyectos de software se equivoca. Muchos tratan de contratar un diseñador para que quede linda, o un programador para hacer algo que ellos no sepan.</p>
            <p>Recuerden que es un MVP, tiene que ser barato y rápido, no necesitan nada perfecto, y es muy bueno que se acostumbren a arreglárselas con lo que tienen y a solucionar los problemas de la forma que sea posible. Una persona con esa cabeza es 10x mejor que alguien que, ante una dificultad, plantea que no se puede hacer.</p>
            <p>¿Ejemplos en este desarrollo?</p>
            <ul>
                <li><p> - El diseño fue hecho a mano, no era ideal pero era usable.</p></li>
                <li><p> - Tuve trabas para desarrollar ciertas cosas, sobre todo para subir la app a los stores, cosa que nunca había hecho y me forcé a aprender, y que me sirvió para futuros trabajos.</p></li>
                <li><p> - Desarrollar el sistema de pagos me fue muy difícil, trate de hacer un backend a mano, pero mis habilidades fueron limitantes, por lo que termine encontrando un servicio el cual conectaba a mi app y manejaba todo por mí, gratis por la poca cantidad de usuarios que tenía. Ósea, digamos, me las arreglé de forma barata.</p></li>
            </ul>

            <h2>El lanzamiento</h2>
            <p>La app salió en aproximadamente dos meses de desarrollo, funcionaba de forma aceptable (Tenía sus fallas). Salió solo en android <ArticleAnchor href='https://play.google.com/store/apps/details?id=com.cdpapp.cdpapp&hl=es_AR&gl=US'>(aún pueden verla acá)</ArticleAnchor> porque me faltaba un mes para cumplir 18 y poder tener cuenta en App Store de Apple.</p>
            <p>Entre conocidos de mi viejo, y alguna persona de twitter, logre recibir algunos comentarios para mejorar la app. Y feedback que demostraba que estaba resolviendo un problema que existía. Presupuesto invertido para llegar acá: $0</p>
            <p>Igualmente, duro poco, al mes de salir <ArticleAnchor href='https://www.lanacion.com.ar/economia/campo/el-proximo-lunes-entrara-en-vigencia-plena-la-carta-de-porte-electronica-nid27102021/'>AFIP decidió que las cartas de porte pasarían a un nuevo formato electrónico</ArticleAnchor>, eliminando el problema que yo resolvía.</p>
            <p>Eso me enseño algo para tener en cuenta en cualquier proyecto futuro: tu modelo de negocio debe evitar tener puntos críticos y diversificar el riesgo. Que una decisión de una tercera parte no pueda poner en riesgo toda tu operación.</p>

            <h2>En fin</h2>
            <p>Me tomé dos meses para programar algo que fracaso, lo cual no es tanto tiempo. Y aprendí muchísimo, más que en cualquier curso.</p>
            <p>No estoy diciendo que los cursos no sirvan, pero sí que no se queden solo con eso. Creen cosas, en el mejor de los casos, ganan plata. En el peor, suman experiencia y un proyecto más al Portfolio. Se gana siempre. Sobre todo esa cabeza de “arreglárselas” o “atar con alambre” que en el mundo laboral es necesaria. Las cosas casi nunca son perfectas, y la capacidad de saber adaptarse es clave.</p>
            <p>La conclusión es clara, si están tratando de mejorar como programadores y no tienen trabajo. Hagan cosas.</p>
            <p>Y como digo siempre, si se deciden a empezar con algo, y necesitan una mano, contento de ayudarlos. Me escriben por Twitter o a hola@tomasholtz.com. Yo contento :)</p>

            <h2>Bonus track: ‘ahá moment’</h2>
            <p>El ‘ahá moment’ es un concepto que le escuche a gente de marketing, haciendo referencia a un momento de descubrimiento.</p>
            <p>Durante este desarrollo, tuve uno.</p>
            <p>Es importante recordar que yo empecé a programar por un deseo emprendedor, no por una pasión hacia el desafío técnico. Me gustaba crear cosas, y encontré en la programación una herramienta.</p>
            <p>Mientras programaba CDP App, llegue al punto en el que, aprendiendo una determinada disciplina, te das cuenta de todo lo que no sabes. Les pongo esta imagen para ilustrar.</p>

            <Image src={AprendizajeImage} alt={''} layout="responsive" style={{ borderRadius: '20px' }} />

            <p>Había llegado al punto de “Bienvenido a la realidad”.</p>
            <p>¿Qué significó eso para mí? Que me faltaba mucho para ser capaz de desarrollar software de calidad. O de tener los conocimientos mínimos, al menos para saber qué se podía hacer y que no.</p>
            <p>También me paso lo mismo, pero en cuanto a mi faceta emprendedora. No sabía nada en cuanto a como crear una empresa y que implicaba.</p>
            <p>Así que decidí empezar a buscar trabajo, ahí sabia que iba a aprender. ¿Tipo de empresa? Cualquiera, la que me contratara. Si convencía a alguien de pagarle a un pibe de 17 años sin experiencia, ya había ganado.</p>
            <p>Y ahí arranque la búsqueda, pero queda para el próximo blog.</p>
            <p>Gracias a todos nuevamente por leer, nos vemos en el próximo.</p>
            <p>Abrazo grande.</p>
            <p>🫡</p>

        </>
    )
}