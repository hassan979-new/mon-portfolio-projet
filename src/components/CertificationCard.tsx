import type { Certification } from "@/data/certifications";
import clsx from "clsx";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired =
    c.status === "expired" ||
    (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        "border border-border rounded-2xl p-4",
        "bg-background hover:shadow-md transition",
        isExpired && "opacity-80"
      )}
      aria-label={`Certification ${c.title}`}
    >

      {c.image && (
        <div className="mb-3 p-2 rounded-xl bg-muted border border-border shadow-sm">
          <div className="w-24 h-24 mx-auto flex items-center justify-center overflow-hidden rounded-lg bg-background">
            <img
              src={c.image}
              alt={c.imageAlt ?? c.title}
              loading="lazy"
              className="w-full h-full object-contain p-2 hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      )}

      {/* TITLE */}
      <h3 className="font-semibold leading-snug text-foreground">
        {c.title}
      </h3>

      {/* META */}
      <p className="text-sm text-muted-foreground mt-1">
        {c.issuer} • {mmYYYY(c.issueDate)}
        {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
        {c.credentialId ? ` • ID ${c.credentialId}` : ""}
      </p>

      {/* SKILLS */}
      {c.skills?.length ? (
        <p className="mt-2 text-sm text-foreground/80">
          <span className="font-medium">Compétences:</span>{" "}
          {c.skills.join(", ")}
        </p>
      ) : null}

      {/* ACTIONS */}
      <div className="mt-3 flex items-center gap-3 text-sm">

        {c.credentialUrl && (
          <a
            className="text-blue-500 hover:underline"
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
          >
            Voir le certificat
          </a>
        )}

        {isExpired && (
          <span className="text-red-500 font-medium">
            Expirée
          </span>
        )}

        {c.status === "revoked" && (
          <span className="text-red-600 font-medium">
            Révoquée
          </span>
        )}

      </div>

    </article>
  );
}