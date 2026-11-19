export interface TrainingScheduleEntry {
  day: string;
  start: string;
  end: string;
  coach?: string;
}

export interface TrainingSession {
  id: string;
  domain: string;
  title: string;
  categories: string[];
  discipline: string;
  location: string;
  coaches: string[];
  schedule: TrainingScheduleEntry[];
  standard: boolean;
  note?: string;
  dltaStageIds: string[];
}

export const trainingSessions: TrainingSession[] = [
  {
    id: "ecole-jeunes",
    domain: "École des jeunes",
    title: "Kangourous, Benjamins et Pupilles",
    categories: ["kangourous", "benjamins", "pupilles"],
    discipline: "École d'athlétisme",
    location: "Centre Omnisports du Préau, Bernissart",
    coaches: ["Nicolas"],
    schedule: [
      { day: "Lundi", start: "18:00", end: "19:00" },
      { day: "Mercredi", start: "18:00", end: "19:00" },
    ],
    standard: true,
    dltaStageIds: ["samuser", "apprendre"],
  },
  {
    id: "minimes",
    domain: "École des jeunes",
    title: "Minimes",
    categories: ["minimes"],
    discipline: "École d'athlétisme",
    location: "Centre Omnisports du Préau, Bernissart",
    coaches: ["Victor"],
    schedule: [
      { day: "Lundi", start: "18:00", end: "19:00" },
      { day: "Mercredi", start: "18:00", end: "19:00" },
    ],
    standard: true,
    dltaStageIds: ["apprendre", "sentraîner"],
  },
  {
    id: "demi-fond-kevin",
    domain: "Demi-fond",
    title: "Cadets, Scolaires et Juniors",
    categories: ["cadets", "scolaires", "juniors"],
    discipline: "Demi-fond",
    location: "Centre Omnisports du Préau, Bernissart",
    coaches: ["Kevin"],
    schedule: [
      { day: "Lundi", start: "18:00", end: "19:30" },
      { day: "Mercredi", start: "18:00", end: "19:30" },
      { day: "Vendredi", start: "17:45", end: "19:00" },
    ],
    standard: true,
    dltaStageIds: ["sentraîner", "competition", "gagner"],
  },
  {
    id: "demi-fond-sebastien",
    domain: "Demi-fond",
    title: "Juniors, Seniors et Masters",
    categories: ["juniors", "seniors", "masters"],
    discipline: "Demi-fond",
    location: "Centre Omnisports du Préau, Bernissart",
    coaches: ["Sébastien"],
    schedule: [
      { day: "Lundi", start: "18:00", end: "19:30" },
      { day: "Mercredi", start: "18:00", end: "19:30" },
    ],
    standard: true,
    dltaStageIds: ["competition", "gagner"],
  },
  {
    id: "sprint-haies-sauts",
    domain: "Sprint / haies / sauts",
    title: "Sprint, haies et sauts",
    categories: [
      "cadets",
      "scolaires",
      "juniors",
      "seniors",
      "masters",
    ],
    discipline: "Sprint, haies et sauts",
    location: "Centre Omnisports du Préau, Bernissart",
    coaches: ["Alissa", "Corentin"],
    schedule: [
      { day: "Lundi", start: "18:00", end: "19:30", coach: "Alissa" },
      { day: "Mercredi", start: "18:00", end: "19:30", coach: "Alissa" },
      { day: "Vendredi", start: "17:45", end: "19:00", coach: "Corentin" },
    ],
    standard: true,
    dltaStageIds: ["sentraîner", "competition", "gagner"],
  },
  {
    id: "perfectionnement-musculation",
    domain: "Perfectionnement / musculation",
    title: "Préparation à la compétition",
    categories: ["cadets", "scolaires"],
    discipline: "Préparation à la compétition / musculation",
    location: "Centre Omnisports du Préau, Bernissart",
    coaches: ["Kevin"],
    schedule: [{ day: "Dimanche", start: "11:00", end: "12:00" }],
    standard: false,
    note:
      "Séance non automatiquement disponible : uniquement pour les athlètes engagés dans un développement orienté compétition, après discussion avec le coach.",
    dltaStageIds: ["sentraîner", "competition"],
  },
];

