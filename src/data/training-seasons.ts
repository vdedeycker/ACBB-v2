export interface AthleticsCategory {
  id: string;
  lbfaLabel: string;
  birthYears?: number[];
  birthYearRange?: {
    max: number;
    min?: number;
  };
  note?: string;
}

export interface PublicTrainingCategory {
  id: string;
  label: string;
  displayLabel: string;
  sourceCategoryIds: string[];
  birthYearRange: {
    max: number;
    min?: number;
  };
  minimumAge?: number;
}

export interface DltaStage {
  id: string;
  label: string;
  ageRange: string;
}

export const dltaStages: DltaStage[] = [
  {
    id: "samuser",
    label: "S’amuser grâce au sport",
    ageRange: "6–9 ans",
  },
  {
    id: "apprendre",
    label: "Apprendre à s’entraîner",
    ageRange: "9–12 ans",
  },
  {
    id: "sentraîner",
    label: "S’entraîner à s’entraîner",
    ageRange: "12–16 ans",
  },
  {
    id: "competition",
    label: "S’entraîner à la compétition",
    ageRange: "16–18 ans",
  },
  {
    id: "gagner",
    label: "S’entraîner à gagner",
    ageRange: "18 ans et plus",
  },
];

export const trainingSeason = {
  id: "lbfa-2026-2027",
  label: "Saison 2026-2027",
  sourceLabel: "Tableau officiel des catégories LBFA",
  sourceHref: "/documents/lbfa-categories-saison-2026-2027.pdf",
  categories: [
    { id: "kangourous", lbfaLabel: "Kangourous", birthYears: [2021, 2020] },
    { id: "benjamins", lbfaLabel: "Benjamins", birthYears: [2019, 2018] },
    { id: "pupilles", lbfaLabel: "Pupilles", birthYears: [2017, 2016] },
    { id: "minimes", lbfaLabel: "Minimes", birthYears: [2015, 2014] },
    { id: "cadets", lbfaLabel: "Cadets (U16)", birthYears: [2013, 2012] },
    { id: "scolaires", lbfaLabel: "Scolaires (U18)", birthYears: [2011, 2010] },
    { id: "juniors", lbfaLabel: "Juniors (U20)", birthYears: [2009, 2008] },
    { id: "espoirs", lbfaLabel: "Espoirs (U23)", birthYears: [2007, 2006, 2005] },
    { id: "seniors", lbfaLabel: "Seniors", birthYears: [2005, 1992] },
    {
      id: "masters",
      lbfaLabel: "Masters",
      birthYearRange: { max: 1992 },
      note: "À partir du 35e anniversaire",
    },
  ] satisfies AthleticsCategory[],
  publicCategories: [
    {
      id: "kangourous",
      label: "Kangourous",
      sourceCategoryIds: ["kangourous"],
      birthYearRange: { min: 2020, max: 2021 },
    },
    {
      id: "benjamins",
      label: "Benjamins",
      sourceCategoryIds: ["benjamins"],
      birthYearRange: { min: 2018, max: 2019 },
    },
    {
      id: "pupilles",
      label: "Pupilles",
      sourceCategoryIds: ["pupilles"],
      birthYearRange: { min: 2016, max: 2017 },
    },
    {
      id: "minimes",
      label: "Minimes",
      sourceCategoryIds: ["minimes"],
      birthYearRange: { min: 2014, max: 2015 },
    },
    {
      id: "cadets",
      label: "Cadets",
      sourceCategoryIds: ["cadets"],
      birthYearRange: { min: 2012, max: 2013 },
    },
    {
      id: "scolaires",
      label: "Scolaires",
      sourceCategoryIds: ["scolaires"],
      birthYearRange: { min: 2010, max: 2011 },
    },
    {
      id: "juniors",
      label: "Juniors",
      sourceCategoryIds: ["juniors"],
      birthYearRange: { min: 2008, max: 2009 },
    },
    {
      id: "seniors",
      label: "Seniors",
      sourceCategoryIds: ["espoirs", "seniors"],
      birthYearRange: { min: 1993, max: 2007 },
    },
    {
      id: "masters",
      label: "Masters",
      sourceCategoryIds: ["masters"],
      birthYearRange: { max: 1992 },
      minimumAge: 35,
    },
  ] satisfies PublicTrainingCategory[],
};

export const getPublicTrainingCategories = (): PublicTrainingCategory[] => {
  return trainingSeason.publicCategories.map((category) => {
    const rangeLabel =
      category.minimumAge !== undefined
        ? `à partir de ${category.minimumAge} ans`
        : `${category.birthYearRange.min}–${category.birthYearRange.max}`;

    return {
      ...category,
      displayLabel: `${category.label} (${rangeLabel})`,
    };
  });
};

