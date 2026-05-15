export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Gestion de Cantine S6",
    period: "2026",
    tags: ["Node.js", "React", "Vite", "Java", "Android", "MySQL"],
    summary:
      "Système complet de gestion de cantine scolaire. Application web React pour les admins et agents (gestion des plats du jour, tableau de bord avec statistiques, suivi et mise à jour des commandes). Application Android pour les étudiants (consultation du menu, commande avec quantité, suivi et annulation des commandes).",
    repo: "https://github.com/hassan979-new/Gestion-de-cantine.git",
  },
  {
    title: "Gestion de Bibliothèque S5",
    period: "2025",
    tags: ["Java", "MySQL", "Swing"],
    summary:
      "Application desktop de gestion de bibliothèque développée en Java avec une interface graphique Swing et une base de données MySQL.",
    repo: "https://github.com/hassan979-new/JAVA_SWING_project.git",
  },
  {
    title: "Jumpin — Ecommerce de Chaussures",
    period: "2025 S4",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    summary:
      "Site e-commerce dédié à la vente de chaussures. Catalogue produits, gestion du panier et interface d'achat simple et intuitive.",
    repo: "https://github.com/00zkr/ecommerce-platfom.git",
  },
  {
    title: "Étude Comparative des Modèles Deep Learning pour la Reconnaissance des Panneaux Routiers",
    period: "2026 S6",
    tags: ["Deep Learning", "Python", "CNN", "Computer Vision"],
    summary:
      "Article de recherche universitaire comparant différentes architectures de Deep Learning pour la reconnaissance et la classification automatique des panneaux de signalisation routière.",
      repo: "https://drive.google.com/file/d/1E5KYU7GMTdHHqHUxmvapq3udxUyxU88E/view?usp=sharing"
  },
];