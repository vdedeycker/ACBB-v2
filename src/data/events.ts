export type EventStatus = "inscriptions-ouvertes" | "a-venir" | "passe";

export interface EventLocation {
  name: string;
  address: string;
  municipality: string;
}

export interface EventMenuItem {
  name: string;
  choices?: string[];
  detail?: string;
}

export interface EventPrice {
  label: string;
  amount: string;
}

export interface AcbbEvent {
  id: string;
  slug: string;
  title: string;
  date: string;
  startTime?: string;
  endTime?: string;
  location: EventLocation;
  description: string;
  poster?: string | null;
  heroImage?: string;
  distances?: string[];
  schedule?: Array<{ label: string; time: string }>;
  prices?: EventPrice[];
  menu?: EventMenuItem[];
  registrationUrl?: string;
  registrationLabel?: string;
  registrationDeadline?: string;
  paymentInformation?: string;
  dessertParticipation?: string;
  regulations?: string;
  gpxRoutes?: string[];
  sponsors?: string[];
  results?: string[];
  postEventReport?: string;
  selectedGallery?: string[];
  publicFacebookUrl?: string;
  status?: EventStatus;
}

export const events: AcbbEvent[] = [
  {
    id: "souper-acbb-2027",
    slug: "souper-acbb-2027",
    title: "Souper de l'ACBB 2027",
    date: "2027-03-06",
    startTime: "18:30",
    location: {
      name: "Salle de l'Amitié",
      address: "Rue Baron Descamps",
      municipality: "Beloeil",
    },
    description:
      "Un moment convivial autour d'un souper partagé pour retrouver les membres, familles et amis de l'ACBB.",
    poster: null,
    menu: [
      { name: "Apéritif de bienvenue" },
      {
        name: "Assiette gourmande de pâtes",
        choices: ["Bolognaise", "Carbonara", "4 fromages"],
        detail: "Sauce 4 fromages : mozzarella, emmental, gouda et cheddar.",
      },
      { name: "Buffet de desserts maison" },
    ],
    prices: [
      { label: "Adulte", amount: "15 €" },
      { label: "Enfant de 5 à 11 ans", amount: "10 €" },
      { label: "Enfant de moins de 5 ans", amount: "Gratuit" },
    ],
    registrationDeadline: "2027-02-22",
    registrationUrl: "https://forms.gle/wmTxfESQQpBjLEnp6",
    registrationLabel: "S'inscrire au souper",
    paymentInformation:
      "Le paiement valide l'inscription. Les modalités de paiement sont indiquées dans le formulaire d'inscription.",
    dessertParticipation:
      "Vous pouvez éventuellement proposer une pâtisserie maison pour le buffet de desserts lors de votre inscription.",
  },
];

export const getEventDateTime = (event: AcbbEvent): number =>
  new Date(`${event.date}T${event.startTime ?? "12:00"}:00`).getTime();

export const sortedEvents = [...events].sort(
  (left, right) => getEventDateTime(left) - getEventDateTime(right),
);

export const getEventStatus = (event: AcbbEvent): EventStatus | undefined => {
  if (event.status) return event.status;
  if (getEventDateTime(event) < Date.now()) return "passe";
  if (
    event.registrationDeadline &&
    new Date(`${event.registrationDeadline}T23:59:59`).getTime() >= Date.now()
  ) {
    return "inscriptions-ouvertes";
  }
  return "a-venir";
};
