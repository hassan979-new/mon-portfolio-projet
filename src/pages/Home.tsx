import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";

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
      recognizedBy: {
        "@type": "Organization",
        name: c.issuer,
      },
      validFrom: c.issueDate,
      validUntil: c.expiryDate,
      url: c.credentialUrl,
    })),
  };
  
  
  return (
    <section className="grid gap-10 md:grid-cols-2 items-center py-10">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio : IA, Android, Java, React."
        />

        <script type="application/ld+json">
          {JSON.stringify(eduLd)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(certLd)}
        </script>
      </Helmet>

      <div>
        <h1 className="ext-4xl md:text-6xl font-extrabold tracking-tight">{profile.name}</h1>
        <p className="mt-2 text-xl text-blue-500 font-medium">{profile.role}</p>

        <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">{profile.about}</p>

        <div className="mt-6 flex gap-3">
          <Link to="/projects" className="px-4 py-2 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition">
            Voir les projets
          </Link>
          <Link to="/contact" className="px-4 py-2 rounded-lg border hover:bg-background transition">
            Contact
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          <span className="px-10 py-1 rounded-full bg-violet-800 text-white">
            CLE Informatique 2025/2026
          </span>
        </div>
      </div>

      <div
        className="aspect-square rounded-2xl border shadow-lg overflow-hidden bg-gray-50"
        role="img"
        aria-label="illustration de profil"
      >
        <img
          src={`${import.meta.env.BASE_URL}user.png`}
          alt="Photo de profil"
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
}
