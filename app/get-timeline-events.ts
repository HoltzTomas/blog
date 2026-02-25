export type TimelineCategory =
  | "carrera"
  | "proyectos"
  | "viajes"
  | "personal"
  | "deporte"
  | "educacion";

export type TimelineEvent = {
  id: string;
  title: string;
  date: string;
  category: TimelineCategory;
  description: string;
  imageUrl?: string;
  blogPostSlug?: string;
  externalUrl?: string;
};

export const CATEGORY_CONFIG: Record<
  TimelineCategory,
  { label: string; color: string; bgLight: string }
> = {
  carrera: { label: "Carrera", color: "#4770FF", bgLight: "#4770FF18" },
  proyectos: { label: "Proyectos", color: "#7C3AED", bgLight: "#7C3AED18" },
  viajes: { label: "Viajes", color: "#10B981", bgLight: "#10B98118" },
  personal: { label: "Personal", color: "#F59E0B", bgLight: "#F59E0B18" },
  deporte: { label: "Deporte", color: "#EF4444", bgLight: "#EF444418" },
  educacion: { label: "Educacion", color: "#14B8A6", bgLight: "#14B8A618" },
};

// Fallback data drawn from the about page's chronological story.
// Replace with BaseHub CMS query once the `timelineEvents` collection is created.
const FALLBACK_EVENTS: TimelineEvent[] = [
  {
    id: "basq-tech",
    title: "Aprendi a programar para crear Basq Tech",
    date: "2019-06-01",
    category: "proyectos",
    description:
      "Con el sueno de jugar al basquet profesionalmente, decidi aprender a programar para construir una plataforma para jugadores. Fue mi primer proyecto real y aunque no funciono, me abrio un mundo nuevo.",
    blogPostSlug: "basq-tech",
  },
  {
    id: "club-app",
    title: "Club App y CDP APP",
    date: "2020-03-01",
    category: "proyectos",
    description:
      "Cree una app para el club de mi barrio y CDP APP. Ninguna funciono, pero cada intento me ensenaba algo nuevo sobre desarrollo y emprendimiento.",
    blogPostSlug: "club-app",
  },
  {
    id: "belo",
    title: "Entre a Belo con 18 anos",
    date: "2021-04-01",
    category: "carrera",
    description:
      "Me di cuenta que me faltaba cancha. Emprender sin haber trabajado no era el mejor plan, asi que busque trabajo y termine en Belo estando aun en el secundario, con el proyecto recien dando sus primeros pasos.",
    externalUrl: "https://www.belo.app/es",
  },
  {
    id: "nft-maslaton",
    title: "NFT con Carlos Maslaton — salimos en Infobae",
    date: "2021-10-01",
    category: "personal",
    description:
      "Con un amigo subastamos un NFT con el influencer financiero mas polemico de Argentina. Termino siendo una nota en Infobae. Una de esas historias que no podes inventar.",
    externalUrl:
      "https://www.infobae.com/economia/2021/10/19/se-subasto-el-nft-del-pronostico-del-influencer-financiero-mas-polemico-de-argentina-cuanto-pagaron/",
  },
  {
    id: "leaving-home",
    title: "Me fui de la casa de mis viejos",
    date: "2022-02-01",
    category: "personal",
    description:
      "Termine el secundario y decidi no estudiar, seguir trabajando y viajar lo mas que podia a Buenos Aires a conocer gente. Soy de un pueblo en Cordoba y necesitaba salir.",
  },
  {
    id: "basketball-platform",
    title: "Plataforma de basquet con Josi Huguet y Matias Gallo",
    date: "2022-06-01",
    category: "deporte",
    description:
      "Me asocie con Josi Huguet (Hoop Shoes) y Matias Gallo (Flow Game) para crear una plataforma para jugadores de basquet. El proyecto duro un mes porque mi cabeza no tolero hacerlo mientras trabajaba.",
    externalUrl: "https://hoopshoes.net/",
  },
  {
    id: "itba",
    title: "Me mude a Buenos Aires — ingenieria en ITBA",
    date: "2023-03-01",
    category: "educacion",
    description:
      "Deje de trabajar y me mude a Buenos Aires para estudiar ingenieria en el ITBA. Un cambio de vida completo.",
  },
  {
    id: "first-talk",
    title: "Mi primera charla para +600 personas",
    date: "2024-05-01",
    category: "carrera",
    description:
      "Di mi primera charla en Nodo Tech Week 2024, contando sobre mi vida y por que creo que me pasaron tantas cosas extransas a tan corta edad. Mas de 600 personas en la audiencia.",
    externalUrl: "https://www.youtube.com/watch?v=RSeqn85Crfo",
  },
  {
    id: "flow-game",
    title: "Me sume a Flow Game Basketball",
    date: "2024-07-01",
    category: "deporte",
    description:
      "Despues de la charla, Matias Gallo me escribio para formar parte de un equipo de basquet amateur que iba a armar. Queria empoderar el deporte amateur en Argentina y documentar todo.",
    externalUrl: "https://www.instagram.com/flowgamebasketball/",
  },
  {
    id: "flow-game-viral",
    title: "Flow Game: 2M de views, Pepe Sanchez y Duki jugaron con nosotros",
    date: "2024-10-01",
    category: "deporte",
    description:
      "En tres meses ya teniamos 2 millones de visualizaciones en redes. Gente como Pepe Sanchez y Duki jugaron con nosotros. Todo se sentia irreal.",
    externalUrl: "https://www.youtube.com/watch?v=whh2weRUdYs",
  },
  {
    id: "note-studio",
    title: "Lanzamos Note Studio",
    date: "2025-01-01",
    category: "proyectos",
    description:
      "Con dos companeros de la facultad lanzamos Note Studio, un proyecto que lamentablemente se vio olvidado por falta de tiempo. Pero la experiencia de crear algo juntos fue invaluable.",
    externalUrl: "https://www.note-studio.com/",
  },
  {
    id: "youtube",
    title: "Empece 'Generando Movimiento' en YouTube",
    date: "2025-03-01",
    category: "personal",
    description:
      "Siguiendo el patron de seguir lo que me genere ilusion, decidi empezar mi canal de YouTube. Una excusa conceptual para documentar momentos de mi vida que quiera inmortalizar y compartir.",
    externalUrl: "https://www.youtube.com/@holtztomas",
  },
];

export async function getTimelineEvents(): Promise<TimelineEvent[]> {
  // TODO: Replace with BaseHub CMS query once `timelineEvents` collection is created:
  //
  // const data = await basehub({ draft: false, cache: 'no-store' }).query({
  //   timelineEvents: {
  //     items: {
  //       _id: true,
  //       _title: true,
  //       date: true,
  //       category: true,
  //       description: true,
  //       image: { url: true },
  //       blogPostSlug: true,
  //       externalUrl: true,
  //     },
  //   },
  // });
  //
  // return data.timelineEvents.items.map(event => ({
  //   id: event._id,
  //   title: event._title,
  //   date: event.date,
  //   category: event.category as TimelineCategory,
  //   description: event.description,
  //   imageUrl: event.image?.url,
  //   blogPostSlug: event.blogPostSlug,
  //   externalUrl: event.externalUrl,
  // }));

  return FALLBACK_EVENTS;
}
