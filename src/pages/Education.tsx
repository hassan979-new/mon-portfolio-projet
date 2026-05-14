import { education } from "@/data/education";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

function isCurrent(end?: string) {
  if (!end) return true;
  const [y, m] = end.split("-").map(Number);
  const now = new Date();
  return new Date(y, m - 1) >= now;
}

export default function EducationPage() {
  return (
    <section className="py-4">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Formations</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Parcours académique · {education.length} établissements
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-8">
          {education.map((e) => {
            const current = isCurrent(e.end);
            return (
              <div key={e.school + e.start} className="relative flex gap-6">
                {/* Dot */}
                <div className="absolute left-0 top-5 z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-background shadow-md transition-all ${
                      current
                        ? "bg-violet-500 ring-2 ring-violet-300 dark:ring-violet-700"
                        : "bg-muted-foreground"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="ml-8 flex-1 rounded-xl border bg-card shadow-sm p-5 space-y-4">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      {current && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-600 dark:text-violet-400 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                          En cours
                        </span>
                      )}
                      <h3 className="font-semibold text-base leading-snug">
                        {e.degree}
                        {e.field ? (
                          <span className="text-muted-foreground font-normal">
                            {" "}— {e.field}
                          </span>
                        ) : null}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {e.school}
                        {e.location ? ` · ${e.location}` : ""}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <p className="text-sm font-medium tabular-nums">
                        {fmt(e.start)} — {fmt(e.end)}
                      </p>
                      {e.gpa && (
                        <p className="text-xs mt-1 text-emerald-600 dark:text-emerald-400 font-medium">
                          {e.gpa}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Highlights */}
                  {e.highlights?.length ? (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Points clés
                      </h4>
                      <ul className="space-y-1.5">
                        {e.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm">
                            <span className="text-violet-500 mt-0.5 shrink-0">▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {/* Courses */}
                  {e.courses?.length ? (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Matières
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {e.courses.map((c) => (
                          <span
                            key={c}
                            className="text-xs px-2 py-0.5 rounded-md bg-muted text-foreground font-medium"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}