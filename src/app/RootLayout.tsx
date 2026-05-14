import { Outlet, NavLink, type NavLinkProps } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout() {
  const linkClass: NavLinkProps["className"] = ({ isActive }) =>
    `px-3 py-1.5 rounded-lg text-sm transition inline-block ${
      isActive
        ? "bg-violet-500 text-white shadow"
        : "text-foreground hover:bg-muted"
    }`;

  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">

      <header className="sticky top-0 z-50 border-b bg-gray-100/90 backdrop-blur border-gray-300 dark:bg-gray-900/90 dark:border-gray-700">
        <nav className="mx-auto max-w-6xl flex flex-col md:flex-row gap-2 md:gap-3 items-center justify-between p-4">

          {/* Logo / name */}
          <NavLink
            to="/"
            className="font-bold text-base tracking-tight hover:text-violet-500 transition"
          >
            Agouram Hassan
          </NavLink>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center items-center gap-1 md:gap-1.5">
            <NavLink to="/projects" className={linkClass}>Projets</NavLink>
            <NavLink to="/experience" className={linkClass}>Parcours</NavLink>
            <NavLink to="/education" className={linkClass}>Formations</NavLink>
            <NavLink to="/certifications" className={linkClass}>Certifications</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          <ThemeToggle />
        </nav>
      </header>

      <main className="flex-1 mx-auto w-full max-w-6xl p-6">
        <Outlet />
      </main>

      <footer className="border-t bg-gray-100 dark:bg-gray-900 dark:border-gray-700">
        <div className="mx-auto max-w-6xl py-6 text-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} · Agouram Hassan · Tous droits réservés
        </div>
      </footer>
    </div>
  );
}