import { useState } from "react";
import { Outlet, NavLink, type NavLinkProps } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass: NavLinkProps["className"] = ({ isActive }) =>
    `px-3 py-1.5 rounded-lg text-sm transition inline-block ${
      isActive
        ? "bg-violet-500 text-white shadow"
        : "text-foreground hover:bg-muted"
    }`;

  const navLinks = (
    <>
      <NavLink to="/projects" className={linkClass} onClick={() => setMenuOpen(false)}>Projets</NavLink>
      <NavLink to="/experience" className={linkClass} onClick={() => setMenuOpen(false)}>Parcours</NavLink>
      <NavLink to="/education" className={linkClass} onClick={() => setMenuOpen(false)}>Formations</NavLink>
      <NavLink to="/certifications" className={linkClass} onClick={() => setMenuOpen(false)}>Certifications</NavLink>
      <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
    </>
  );

  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">

      <header className="sticky top-0 z-50 border-b bg-gray-100/90 backdrop-blur border-gray-300 dark:bg-gray-900/90 dark:border-gray-700">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">

          {/* Logo / name */}
          <NavLink
            to="/"
            className="font-bold text-base tracking-tight hover:text-violet-500 transition"
          >
            Agouram Hassan
          </NavLink>

          {/* Desktop nav links */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-1 md:gap-1.5">
            {navLinks}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Burger button — mobile only */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-muted transition"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span style={{ fontSize: "20px" }} className="text-gray-800 dark:text-gray-200">
                {menuOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-64 border-t border-gray-300 dark:border-gray-700" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-start gap-1 p-4">
            {navLinks}
          </div>
        </div>
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