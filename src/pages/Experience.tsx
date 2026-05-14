type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  semester: string;
  description: string;
  achievements: string[];
  skills: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    role: "Stagiaire Enseignant en Informatique",
    company: "Collège Ibn Arif",
    location: "Marrakech, Maroc",
    period: "2023 — 2024",
    semester: "S1 → S2",
    description:
      "Premier stage d'action pédagogique dans le cadre de la licence éducative à l'ENS. Observation et participation active à la vie scolaire.",
    achievements: [
      "Observation de séances de cours dispensées par l'enseignant titulaire",
      "Animation d'une séance d'informatique en classe, encadrée par le professeur",
      "Assistance à l'administration pour l'organisation des examens régionaux et nationaux",
    ],
    skills: ["Pédagogie", "Informatique scolaire", "Gestion de classe", "Organisation"],
  },
  {
    id: 2,
    role: "Stagiaire Enseignant en Informatique",
    company: "Collège Ibn Arif",
    location: "Marrakech, Maroc",
    period: "2024 — 2025",
    semester: "S3 → S4",
    description:
      "Deuxième stage d'action pédagogique avec une implication plus approfondie dans les activités pédagogiques et administratives.",
    achievements: [
      "Suivi et observation approfondie des pratiques pédagogiques de l'enseignant",
      "Prise en charge d'une leçon d'informatique devant les élèves sous supervision",
      "Participation à l'organisation et la surveillance des examens régionaux et nationaux",
    ],
    skills: ["Pédagogie", "Informatique scolaire", "Gestion de classe", "Organisation"],
  },
  {
    id: 3,
    role: "Stagiaire Enseignant en Informatique",
    company: "Collège Ibn Arif",
    location: "Marrakech, Maroc",
    period: "2025 — 2026",
    semester: "S5 → S6",
    current: true,
    description:
      "Troisième et dernier stage de la licence, avec une autonomie pédagogique croissante et une participation active à la vie de l'établissement.",
    achievements: [
      "Observation et analyse critique des approches pédagogiques de l'enseignant",
      "Conduite d'une séance de cours d'informatique en autonomie supervisée",
      "Aide à l'organisation des examens régionaux et nationaux pour la troisième année consécutive",
    ],
    skills: ["Pédagogie", "Informatique scolaire", "Autonomie pédagogique", "Organisation"],
  },
];

export default function Experience() {
  return (
    <section className="py-4">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Parcours</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          3 stages d'action pédagogique · Collège Ibn Arif, Marrakech
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex gap-6">
              {/* Dot */}
              <div className="absolute left-0 top-5 z-10">
                <div
                  className={`w-4 h-4 rounded-full border-2 border-background shadow-md ${
                    exp.current
                      ? "bg-violet-500 ring-2 ring-violet-300 dark:ring-violet-700"
                      : "bg-muted-foreground"
                  }`}
                />
              </div>

              {/* Card */}
              <div className="ml-8 flex-1">
                <div className="rounded-xl border bg-card shadow-sm p-5 space-y-4">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        {exp.current && (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-violet-600 dark:text-violet-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                            En cours
                          </span>
                        )}
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">
                          Action pédagogique
                        </span>
                      </div>
                      <h3 className="font-semibold text-base">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-medium">{exp.period}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{exp.semester}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Activités réalisées
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-violet-500 mt-0.5 shrink-0">▸</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-0.5 rounded-md bg-muted text-foreground font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}