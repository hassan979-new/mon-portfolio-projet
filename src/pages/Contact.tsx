import { useState } from "react";
import { profile } from "@/data/profile";

type Status = "idle" | "loading" | "success" | "error";

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

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

const inputClass = `
  w-full px-4 py-2.5 rounded-xl
  border border-border
  bg-background text-foreground text-sm
  placeholder:text-muted-foreground
  focus:outline-none focus:ring-2 focus:ring-violet-400
  transition
`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xjglvaqz", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          N'hésitez pas à me contacter pour toute question ou collaboration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">

        {/* Left — Info */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-base mb-3">Informations de contact</h3>
            <div className="space-y-3">
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 p-3 rounded-xl border bg-card hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-sm transition group"
              >
                <span className="text-violet-500 group-hover:scale-110 transition-transform">
                  <MailIcon />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">{profile.email}</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl border bg-card">
                <span className="text-violet-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Localisation</p>
                  <p className="text-sm font-medium">{profile.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-base mb-3">Réseaux</h3>
            <div className="flex flex-col gap-2">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border bg-card hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-sm transition group"
                >
                  <span className="text-violet-500 group-hover:scale-110 transition-transform">
                    {socialIcons[s.label] ?? null}
                  </span>
                  <p className="text-sm font-medium">{s.label}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border bg-card shadow-sm p-6 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <textarea
            name="message"
            placeholder="Votre message..."
            value={form.message}
            onChange={handleChange}
            className={`${inputClass} min-h-[140px] resize-none`}
            required
          />

          {/* Feedback messages */}
          {status === "success" && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              Message envoyé avec succès !
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500 font-medium flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
              Erreur lors de l'envoi. Réessayez plus tard.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-2.5 rounded-xl bg-violet-500 text-white text-sm font-medium hover:bg-violet-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
          </button>
        </form>
      </div>
    </section>
  );
}