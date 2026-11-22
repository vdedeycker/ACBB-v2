export type AnnouncementType =
  | "recrutement"
  | "benevolat"
  | "recherche-officiels"
  | "aide-evenementielle"
  | "information-club";

export interface AnnouncementSection {
  heading: string;
  paragraphs: string[];
}

export interface AnnouncementContact {
  label: string;
  href: string;
}

export interface Announcement {
  id: string;
  slug: string;
  title: string;
  type: AnnouncementType;
  publicationDate: string | null;
  expirationDate: string | null;
  active: boolean;
  featured: boolean;
  shortDescription: string;
  sections: AnnouncementSection[];
  poster?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  contact?: AnnouncementContact;
  externalLink?: {
    label: string;
    href: string;
  };
}

export const announcements: Announcement[] = [
  {
    id: "recrutement-entraineurs-2026",
    slug: "recrutement-entraineurs-2026",
    title: "L'ACBB recrute",
    type: "recrutement",
    publicationDate: null,
    expirationDate: null,
    active: true,
    featured: true,
    shortDescription:
      "L'ACBB recherche des entraîneurs pour sa section handisport et pour l'initiation aux lancers.",
    sections: [
      {
        heading: "Pour notre section handisport",
        paragraphs: [
          "Nous recherchons des éducateurs ou éducatrices ayant une expérience en entraînement d'athlétisme et/ou un parcours professionnel dans l'éducation physique.",
          "Une expérience dans l'encadrement du handisport est recherchée. Une formation ADEPS constitue un atout.",
          "Les entraînements handisport ont lieu le mercredi.",
        ],
      },
      {
        heading: "Pour l'initiation aux lancers",
        paragraphs: [
          "Nous recherchons un entraîneur de lancers pour un groupe d'initiation.",
          "Le profil peut être celui d'un professeur d'éducation physique ou de toute personne capable d'enseigner aux jeunes et désireuse de se former à l'entraînement en athlétisme.",
          "Une formation ADEPS constitue un atout.",
        ],
      },
    ],
    poster: {
      src: "/images/club-life/recrutement-entraineurs-acbb.jpg",
      alt: "Affiche de recrutement de l'ACBB pour des entraîneurs handisport et un entraîneur de lancers",
      width: 1638,
      height: 2048,
    },
    contact: {
      label: "0497 19 95 44",
      href: "tel:+32497199544",
    },
  },
];

export const activeAnnouncements = announcements.filter(
  (announcement) => announcement.active,
);
