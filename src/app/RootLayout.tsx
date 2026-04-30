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
      
      <header className="border-b bg-gray-100 backdrop-blur border-gray-400 dark:bg-gray-900 dark:border-gray-700">
        <nav className="mx-auto max-w-6xl flex flex-col md:flex-row gap-2 md:gap-3 items-center justify-between p-4">
          
          <NavLink to="/" className="font-bold text-lg">
            MonPortfolio
          </NavLink>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <NavLink to="/projects" className={linkClass}>Projets</NavLink>
            <NavLink to="/experience" className={linkClass}>Parcours</NavLink>
            <NavLink to="/education" className={linkClass}>Formations</NavLink>
            <NavLink to="/certifications" className={linkClass}>Certifications</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          <ThemeToggle />
        </nav>
      </header>

      <main className="flex-1 mx-auto max-w-6xl p-6">
        <Outlet />
      </main>

      <footer className="bg-gray-100 border-t mt-10">
        <div className="mx-auto max-w-6xl py-6 text-center text-xs md:text-sm text-gray-600">
          © {new Date().getFullYear()} • Agouram Hassan
        </div>
      </footer>
    </div>
  );
}