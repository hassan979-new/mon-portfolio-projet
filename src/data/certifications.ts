export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

const BASE_URL = "https://mliaedu.toubkalit.com/verify-certificate/";

export const certifications: Certification[] = [
  {
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "MLIAEdu",
    issueDate: "2024-03",
    credentialUrl: BASE_URL + "6-3a8f0816-b443-4e06-a66d-401cb718848b-489202",
    skills: ["Programmation Java", "POO"],
    tags: ["Java"],
    image: "/certs/java.webp",
    imageAlt: "Certification Java",
    status: "active",
  },
  {
    title: "Bases de données",
    issuer: "MLIAEdu",
    issueDate: "2025-12", 
    credentialUrl: BASE_URL + "15-3a8f0816-b443-4e06-a66d-401cb718848b-062082",
    skills: ["SQL", "Modélisation de données"],
    tags: ["SQL", "Base de données"],
    status: "active",
    image : "certs/Bases de donnees.webp"
  },
  {
    title: "Développement Front-End moderne avec React",
    issuer: "MLIAEdu",
    issueDate: "2026-04", 
    credentialUrl: BASE_URL + "26-3a8f0816-b443-4e06-a66d-401cb718848b-306962",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    tags: ["React", "Front-End"],
    status: "active",
    image: "certs/React.webp"
  },
  {
    title: "Fondamentaux de la Programmation en Kotlin",
    issuer: "MLIAEdu",
    issueDate: "2026-03", 
    credentialUrl: BASE_URL + "40-3a8f0816-b443-4e06-a66d-401cb718848b-525060",
    skills: ["Kotlin", "POO"],
    tags: ["Kotlin", "Android"],
    status: "active",
    image: "certs/Kotlin.webp"
  },
  {
    title: "Ingénierie Logicielle Web avec PHP 7 : Architecture Multicouche et Accès aux Données Sécurisé",
    issuer: "MLIAEdu",
    issueDate: "2026-03", 
    credentialUrl: BASE_URL + "44-3a8f0816-b443-4e06-a66d-401cb718848b-679702",
    skills: ["PHP", "Architecture MVC", "Sécurité web"],
    tags: ["PHP", "Web"],
    status: "active",
    image: "certs/PHP.webp"
  },
  {
    title: "Programmation Orientée Objet : C++",
    issuer: "MLIAEdu",
    issueDate: "2025-11", 
    credentialUrl: BASE_URL + "12-3a8f0816-b443-4e06-a66d-401cb718848b-809121",
    skills: ["C++", "POO"],
    tags: ["C++"],
    status: "active",
    image: "certs/Cpp.webp"
  },
  {
    title: "Programmation Orientée Objet : Python",
    issuer: "MLIAEdu",
    issueDate: "2025-11", 
    credentialUrl: BASE_URL + "11-3a8f0816-b443-4e06-a66d-401cb718848b-948290",
    skills: ["Python", "POO"],
    tags: ["Python"],
    status: "active",
    image: "certs/Python.webp"
  },
  {
    title: "Introduction to Object-Oriented Programming in Python",
    issuer: "datacamp",
    issueDate: "2025-11", 
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/4d333d708fbd6c79331bcaab30fc9fa165201bf7?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
    skills: ["Python", "POO"],
    tags: ["Python"],
    status: "active",
    image: "/certs/python2.webp"
  }
];