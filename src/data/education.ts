export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Université Cadi Ayyad — École Normale Supérieure",
    degree: "Licence d'Éducation",
    field: "Enseignement Secondaire Informatique",
    location: "Marrakech",
    start: "2023-09",
    end: "2026-07",
    courses: [
      "Algorithmique et programmation",
      "Architecture des ordinateurs",
      "Bases de données",
      "Structures de données",
      "Développement Web et Mobile",
      "Réseaux informatiques",
      "Intelligence artificielle",
      "Systèmes d'exploitation",
      "Sciences de l'éducation",
      "Didactique de la matière",
      "Approches et méthodes didactiques",
      "Programmation orientée objet",
    ],
    highlights: [
      "3 stages d'action pédagogique au Collège Ibn Arif, Marrakech (S1 à S6)",
      "Projet : chatbot développé avec des techniques de Machine Learning en Python",
      "Formation alliant informatique, pédagogie et sciences de l'éducation",
    ],
  },
  {
    school: "Université Cadi Ayyad — Faculté des Sciences Semlalia",
    degree: "1ère année",
    field: "SMPC — Sciences de la Matière Physique et Chimie",
    location: "Marrakech",
    start: "2022-09",
    end: "2023-06",
    courses: [
      "Mathématiques",
      "Physique",
      "Chimie",
      "Informatique générale",
    ],
  },
  {
    school: "Lycée Qualifiant Nouveau Lycée",
    degree: "Baccalauréat",
    field: "Sciences Physiques",
    location: "Ait Ourir",
    start: "2021-09",
    end: "2022-06",
    gpa: "Mention Bien — 15.25/20",
  },
];