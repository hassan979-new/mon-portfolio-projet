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
    title: "Gestion De Bibliotheque",
    period: "2025",
    tags: ["Java", "MySQL", "SWING"],
    summary: "Application Desktop pour gérée une bibliotheque",
    repo: "https://github.com/hassan979-new/JAVA_SWING_project.git",
  },
];
