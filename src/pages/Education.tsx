import { education } from "@/data/education";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section className="grid gap-6">
      <h2 className="text-2xl font-semibold">Formations</h2>

      <ol className="relative border-s border-border">
        <div className="absolute -ms-3 mt-2 h-2 w-2 rounded-full bg-blue-500" />
        {education.map((e) => (
          <li key={e.school + e.start} className="ms-6 pb-6">
            <h3 className="font-semibold text-lg">
              {e.degree}
              {e.field ? ` — ${e.field}` : ""} @ {e.school}
            </h3>

            <p className="text-sm text-muted-foreground mt-1">
              {fmt(e.start)} — {fmt(e.end)}{" "}
              {e.location ? `• ${e.location}` : ""}{" "}
              {e.gpa ? `• GPA ${e.gpa}` : ""}
            </p>

            {e.courses?.length ? (
              <p className="mt-2 text-sm text-foreground/80">
                Cours: 
                {e.courses.slice(0, 5).join(", ")}
              </p>
            ) : null}

            {e.highlights?.length ? (
              <ul className="list-disc ms-5 mt-3 text-sm text-foreground/80">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
