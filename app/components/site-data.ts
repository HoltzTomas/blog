export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "twitter" | "instagram";
};

export type WorkItem = {
  title: string;
  meta: string;
  preview: string;
  previewColor: string;
  href: string;
  external?: boolean;
};

export type StatItem = {
  value: string;
  suffix?: string;
  label: string;
};

export type CurrentlyItem = {
  label: string;
  content: string;
  sub: string;
};

export type ExperienceItem = {
  year: string;
  role: string;
  company: string;
  description: string;
};

export type TalkItem = {
  id: number;
  label: string;
  title: string;
  youtubeId: string;
  youtubeUrl: string;
};

export type SeriesMeta = {
  label: string;
  badge: string;
  order: number;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/tomasholtz",
    icon: "github",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/tomasholtz_",
    icon: "twitter",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/tomasholtz",
    icon: "instagram",
  },
];

export const marqueeItems = [
  "Product Engineering",
  "Full Stack",
  "UX Design",
  "Open Source",
  "Systems Thinking",
  "Buenos Aires",
];

export const aboutTags = [
  "React",
  "TypeScript",
  "Node.js",
  "Rust",
  "Go",
  "Postgres",
  "Figma",
  "AI",
];

export const workItems: WorkItem[] = [
  {
    title: "Belo",
    meta: "2021-2023 · Product Eng.",
    preview: "Crypto wallet · Mobile",
    previewColor: "#c8f04a",
    href: "https://www.belo.app/es",
    external: true,
  },
  {
    title: "Suku",
    meta: "2022 · Full Stack",
    preview: "Supply chain · Web3",
    previewColor: "#4af0c8",
    href: "https://www.suku.world/",
    external: true,
  },
  {
    title: "Side Projects",
    meta: "Ongoing · Various",
    preview: "Personal project · OSS",
    previewColor: "#f0e04a",
    href: "/blog#side-projects",
  },
  {
    title: "Blog",
    meta: "2022-now · Writing",
    preview: "Writing & thoughts",
    previewColor: "#f04a8c",
    href: "/blog",
  },
];

export const statItems: StatItem[] = [
  {
    value: "22",
    suffix: "yo",
    label: "Years old",
  },
  {
    value: "3",
    suffix: "+",
    label: "Years shipping",
  },
  {
    value: "∞",
    label: "Ideas to build",
  },
];

export const currentlyItems: CurrentlyItem[] = [
  {
    label: "Studying",
    content: "Computer Science & Engineering",
    sub: "@ITBA, Buenos Aires",
  },
  {
    label: "Building",
    content: "Something new and exciting",
    sub: "Stealth mode",
  },
  {
    label: "Reading",
    content: "The Art of Doing Science and Engineering",
    sub: "by Richard Hamming",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    year: "2025-now",
    role: "Builder in progress",
    company: "Independent · AI, education, media",
    description:
      "Exploring tools for students, educational media powered by AI, and whatever new idea feels worth chasing next.",
  },
  {
    year: "2024",
    role: "Speaker + amateur basketball chaos",
    company: "Provocacion Live · Flow amateur",
    description:
      "Gave my first big talk, started documenting more publicly, and ended up inside one of those strange side quests that only happen when you keep moving.",
  },
  {
    year: "2023",
    role: "Engineering student",
    company: "ITBA · Buenos Aires",
    description:
      "Moved to Buenos Aires to study engineering while continuing to build, write, and look for the next problem worth obsessing over.",
  },
  {
    year: "2021-2023",
    role: "Product / Frontend Engineer",
    company: "Belo · Crypto wallet",
    description:
      "Joined while still in high school and helped ship product for one of Argentina's best-known crypto apps, learning what real software pressure actually feels like.",
  },
  {
    year: "2022",
    role: "Full Stack Engineer",
    company: "Suku · Supply chain Web3",
    description:
      "Worked across the stack on traceability and product experiences built on top of blockchain infrastructure with a distributed team.",
  },
];

export const talks: TalkItem[] = [
  {
    id: 1,
    label: "Provocacion Live 2025",
    title: "COMO TENER UNA VIDA MUY DIVERTIDA E INTERESANTE | Tomas Holtz",
    youtubeId: "lqC3jkrk_eE",
    youtubeUrl: "https://www.youtube.com/watch?v=lqC3jkrk_eE",
  },
  {
    id: 2,
    label: "Nodo Tech Week 2024",
    title: "Di una CHARLA SOBRE MI VIDA para +600 PERSONAS",
    youtubeId: "RSeqn85Crfo",
    youtubeUrl: "https://www.youtube.com/watch?v=RSeqn85Crfo",
  },
];

const SERIES_META: Record<string, SeriesMeta> = {
  "side-projects": {
    label: "Side Projects",
    badge: "Side Projects",
    order: 0,
  },
  "mi-camino-como-programador": {
    label: "Mi camino como programador",
    badge: "Career Path",
    order: 1,
  },
  programacion: {
    label: "Programacion",
    badge: "Programming",
    order: 2,
  },
};

const SERIES_ORDER_FALLBACK = 99;

function humanizeSeries(series: string) {
  if (!series) {
    return "Notes";
  }

  return series
    .split("-")
    .filter(Boolean)
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
}

export function getSeriesMeta(series: string): SeriesMeta {
  const existing = SERIES_META[series];

  if (existing) {
    return existing;
  }

  const label = humanizeSeries(series);

  return {
    label,
    badge: label,
    order: SERIES_ORDER_FALLBACK,
  };
}

export function sortByPublishedDate<T extends { publishedAt: string }>(items: T[]) {
  return [...items].sort((left, right) => {
    return new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime();
  });
}

export function formatDisplayDate(value?: string | null) {
  if (!value) {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
