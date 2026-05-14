import { projects } from "@/data/projects";

// Icon components
function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function ArticleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

// Detect project type for badge
function getProjectType(tags: string[]): { label: string; icon: React.ReactNode; color: string } {
  const t = tags.map((x) => x.toLowerCase());
  if (t.includes("deep learning") || t.includes("cnn") || t.includes("computer vision")) {
    return { label: "Recherche", icon: <ArticleIcon />, color: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400" };
  }
  if (t.includes("android")) {
    return { label: "Full-Stack + Mobile", icon: <MobileIcon />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400" };
  }
  if (t.includes("php") || t.includes("react") || t.includes("node.js")) {
    return { label: "Web", icon: <CodeIcon />, color: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400" };
  }
  return { label: "Application", icon: <CodeIcon />, color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400" };
}

export default function Projets() {
  return (
    <section className="py-4">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Projets</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          {projects.length} projets · académiques & personnels
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p) => {
          const type = getProjectType(p.tags);
          return (
            <article
              key={p.title}
              className="group flex flex-col rounded-xl border bg-card shadow-sm hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-violet-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              <div className="flex flex-col flex-1 p-5 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${type.color}`}>
                      {type.icon}
                      {type.label}
                    </span>
                    <h3 className="font-semibold text-base leading-snug">{p.title}</h3>
                  </div>
                  {p.period && (
                    <span className="text-xs text-muted-foreground shrink-0 mt-1">{p.period}</span>
                  )}
                </div>

                {/* Summary */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-md bg-muted text-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(p.link || p.repo) && (
                  <div className="flex items-center gap-3 pt-1 border-t">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <GithubIcon />
                        Code source
                      </a>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-600 dark:text-violet-400 hover:underline"
                      >
                        <ExternalLinkIcon />
                        Démo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}