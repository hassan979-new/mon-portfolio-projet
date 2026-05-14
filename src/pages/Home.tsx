import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <GithubIcon />,
  LinkedIn: <LinkedInIcon />,
};

export default function Home() {
  const eduLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alumniOf: education.map((e) => ({
      "@type": "CollegeOrUniversity",
      name: e.school,
    })),
  };

  const certLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    hasCredential: (certifications ?? []).map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.title,
      recognizedBy: { "@type": "Organization", name: c.issuer },
      validFrom: c.issueDate,
      validUntil: c.expiryDate,
      url: c.credentialUrl,
    })),
  };

  return (
    <section className="grid gap-12 md:grid-cols-2 items-center py-10">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta name="description" content={profile.about} />
        <script type="application/ld+json">{JSON.stringify(eduLd)}</script>
        <script type="application/ld+json">{JSON.stringify(certLd)}</script>
      </Helmet>

      {/* Left — Text */}
      <div className="flex flex-col gap-5">
        {/* Name & role */}
        <div>
          <p className="text-sm font-medium text-violet-500 mb-2 tracking-wide uppercase">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground font-medium">
            {profile.role}
          </p>
          <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {profile.location}
          </p>
        </div>

        {/* About */}
        <p className="text-muted-foreground leading-relaxed max-w-md text-sm">
          {profile.about}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5">
          {profile.skills.map((s) => (
            <span
              key={s}
              className="text-xs px-2.5 py-1 rounded-md bg-muted text-foreground font-medium"
            >
              {s}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="px-5 py-2.5 rounded-lg bg-violet-500 text-white text-sm font-medium hover:bg-violet-600 transition shadow-sm"
          >
            Voir les projets
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg border text-sm font-medium hover:bg-muted transition"
          >
            Me contacter
          </Link>
        </div>

        {/* Social links */}
        <div className="flex gap-3">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition px-3 py-1.5 rounded-lg border hover:bg-muted"
            >
              {socialIcons[s.label] ?? null}
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right — Photo */}
      <div
        className="aspect-square rounded-2xl border shadow-lg overflow-hidden bg-muted"
        role="img"
        aria-label="Photo de profil de Agouram Hassan"
      >
        <img
          src={`${import.meta.env.BASE_URL}user.png`}
          alt="Agouram Hassan"
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
}