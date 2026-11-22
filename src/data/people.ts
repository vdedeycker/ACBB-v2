export type GovernanceRole =
  | "Président"
  | "Vice-président"
  | "Secrétaire"
  | "Trésorier"
  | "Administrateur";

export interface PublicPhone {
  type: "Mobile" | "Fixe";
  number: string;
  href: string;
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  photo?: string;
  publicEmail?: string;
  publicPhones?: PublicPhone[];
  governanceRoles: GovernanceRole[];
  operationalResponsibilities: string[];
  commissions: string[];
  coachingAssignments: string[];
}

export const people: Person[] = [
  {
    id: "daniel-brocsko",
    firstName: "Daniel",
    lastName: "Brocsko",
    photo: "/images/people/daniel-brocsko.png",
    publicEmail: "danielbrocsko@gmail.com",
    publicPhones: [
      { type: "Mobile", number: "0472/81.36.15", href: "tel:+32472813615" },
      { type: "Fixe", number: "065/62.25.32", href: "tel:+3265622532" },
    ],
    governanceRoles: ["Président"],
    operationalResponsibilities: [],
    commissions: [],
    coachingAssignments: [],
  },
  {
    id: "kevin-brouillard",
    firstName: "Kévin",
    lastName: "Brouillard",
    photo: "/images/people/kevin-brouillard.png",
    publicEmail: "kevinbrouillard@outlook.com",
    publicPhones: [
      { type: "Mobile", number: "0496/64.42.67", href: "tel:+32496644267" },
    ],
    governanceRoles: ["Vice-président"],
    operationalResponsibilities: [],
    commissions: [],
    coachingAssignments: [
      "Demi-fond",
      "Cadets",
      "Scolaires",
      "Juniors",
      "Perfectionnement / musculation",
    ],
  },
  {
    id: "anne-breuse",
    firstName: "Anne",
    lastName: "Breuse",
    photo: "/images/people/anne-breuse.png",
    publicEmail: "breuwis@skynet.be",
    publicPhones: [
      { type: "Mobile", number: "0475/40.44.80", href: "tel:+32475404480" },
      { type: "Fixe", number: "069/57.93.04", href: "tel:+3269579304" },
    ],
    governanceRoles: ["Secrétaire"],
    operationalResponsibilities: [],
    commissions: [],
    coachingAssignments: [],
  },
  {
    id: "gregory-depauw",
    firstName: "Grégory",
    lastName: "Depauw",
    publicEmail: "greg_desprez@hotmail.com",
    governanceRoles: ["Trésorier"],
    operationalResponsibilities: [],
    commissions: [],
    coachingAssignments: [],
  },
  {
    id: "martine-boonaert",
    firstName: "Martine",
    lastName: "Boonaert",
    photo: "/images/people/martine-boonaert.png",
    publicEmail: "mboonaert@skynet.be",
    governanceRoles: ["Administrateur"],
    operationalResponsibilities: [],
    commissions: [],
    coachingAssignments: [],
  },
  {
    id: "sebastien-colmant-midol",
    firstName: "Sébastien",
    lastName: "Colmant-Midol",
    publicEmail: "sebcolmid218@gmail.com",
    governanceRoles: ["Administrateur"],
    operationalResponsibilities: [],
    commissions: [],
    coachingAssignments: ["Demi-fond", "Juniors", "Seniors", "Masters"],
  },
  {
    id: "vincent-dedeycker",
    firstName: "Vincent",
    lastName: "Dedeycker",
    publicEmail: "dedeycker.v@gmail.com",
    governanceRoles: ["Administrateur"],
    operationalResponsibilities: [],
    commissions: [],
    coachingAssignments: [],
  },
  {
    id: "xavier-flameng",
    firstName: "Xavier",
    lastName: "Flameng",
    publicEmail: "xavier.flameng@gmail.com",
    governanceRoles: ["Administrateur"],
    operationalResponsibilities: [],
    commissions: [],
    coachingAssignments: [],
  },
  {
    id: "jean-paul-wiseur",
    firstName: "Jean-Paul",
    lastName: "Wiseur",
    photo: "/images/people/jean-paul-wiseur.png",
    publicEmail: "breuwis@skynet.be",
    governanceRoles: ["Administrateur"],
    operationalResponsibilities: [],
    commissions: [],
    coachingAssignments: [],
  },
  {
    id: "nicolas-libbrecht",
    firstName: "Nicolas",
    lastName: "Libbrecht",
    photo: "/images/people/nicolas-libbrecht.png",
    governanceRoles: [],
    operationalResponsibilities: [],
    commissions: [],
    coachingAssignments: [
      "École des jeunes",
      "Kangourous",
      "Benjamins",
      "Pupilles",
    ],
  },
  {
    id: "victor-libbrecht",
    firstName: "Victor",
    lastName: "Libbrecht",
    governanceRoles: [],
    operationalResponsibilities: [],
    commissions: [],
    coachingAssignments: ["École des jeunes", "Minimes"],
  },
  {
    id: "corentin-campener",
    firstName: "Corentin",
    lastName: "Campener",
    governanceRoles: [],
    operationalResponsibilities: [],
    commissions: [],
    coachingAssignments: ["Sprint / haies / sauts"],
  },
  {
    id: "alissa",
    firstName: "Alissa",
    lastName: "",
    governanceRoles: [],
    operationalResponsibilities: [],
    commissions: [],
    coachingAssignments: ["Sprint / haies / sauts"],
  },
];

export const getPerson = (id: string) =>
  people.find((person) => person.id === id);

export const getPersonName = (id: string) => {
  const person = getPerson(id);
  return person ? [person.firstName, person.lastName].filter(Boolean).join(" ") : id;
};

