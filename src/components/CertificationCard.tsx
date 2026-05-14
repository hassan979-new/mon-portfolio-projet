import type { Certification } from "@/data/certifications";
import clsx from "clsx";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired =
    c.status === "expired" ||
    (c.expiryDate !== undefined && c.expiryDate < new Date().toISOString().slice(0, 7));

  const isRevoked = c.status === "revoked";

  return (
    <article
      className={clsx(
        "group flex flex-col rounded-xl border bg-card shadow-sm overflow-hidden",
        "hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200",
        (isExpired || isRevoked) && "opacity-70"
      )}
      aria-label={`Certification ${c.title}`}
    >
      {/* Image — big, full width */}
      <div className="relative w-full bg-muted flex items-center justify-center overflow-hidden"
        style={{ minHeight: "180px" }}>
        {c.image ? (
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            loading="lazy"
            className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
            style={{ maxHeight: "200px" }}
          />
        ) : (
          /* Placeholder when no image */
          <div className="flex flex-col items-center justify-center gap-2 py-10 text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
            <span className="text-xs font-medium">{c.issuer}</span>
          </div>
        )}

        {/* Status badge top-right */}
        {(isExpired || isRevoked) && (
          <span className="absolute top-2 right-2 text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400">
            {isRevoked ? "Révoquée" : "Expirée"}
          </span>
        )}

        {/* Active badge */}
        {!isExpired && !isRevoked && c.status === "active" && (
          <span className="absolute top-2 right-2 inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Active
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 space-y-3">
        {/* Tags */}
        {c.tags?.length ? (
          <div className="flex flex-wrap gap-1.5">
            {c.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-muted text-foreground font-medium">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {/* Title */}
        <h3 className="font-semibold text-sm leading-snug text-foreground">
          {c.title}
        </h3>

        {/* Meta */}
        <p className="text-xs text-muted-foreground">
          {c.issuer} · {mmYYYY(c.issueDate)}
          {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
          {c.credentialId ? ` · ID ${c.credentialId}` : ""}
        </p>

        {/* Skills */}
        {c.skills?.length ? (
          <div className="flex flex-wrap gap-1.5">
            {c.skills.map((s) => (
              <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400 font-medium">
                {s}
              </span>
            ))}
          </div>
        ) : null}

        {/* Footer link */}
        {c.credentialUrl && (
          <div className="pt-1 border-t mt-auto">
            <a
              href={c.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-600 dark:text-violet-400 hover:underline"
            >
              <ExternalLinkIcon />
              Voir le certificat
            </a>
          </div>
        )}
      </div>
    </article>
  );
}