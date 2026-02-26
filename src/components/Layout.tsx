import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import wallDark from "@/assets/wall-dark.png";

const navItems = [
  { path: "/", label: "Inicio" },
  { path: "/programa", label: "Programa" },
  { path: "/filosofia", label: "Filosofía" },
  { path: "/equipo", label: "Equipo" },
  { path: "/comunidad", label: "Comunidad" },
  { path: "/contacto", label: "Contacto" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <nav className="container mx-auto flex items-center justify-between h-16 px-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="El Año del Salto" className="h-10 w-auto" />
          </Link>
          
          <ul className="hidden lg:flex gap-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-xs font-bold tracking-widest uppercase transition-colors hover:text-primary ${
                    location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="lg:hidden bg-background border-b animate-fade-in">
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm font-bold tracking-widest uppercase ${
                      location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16">{children}</main>

      <footer
        className="relative text-cream"
        style={{ backgroundImage: `url(${wallDark})` }}
      >
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto section-padding">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <img src={logo} alt="El Año del Salto" className="h-12 w-auto invert mb-4" />
              <p className="text-sm opacity-80 leading-relaxed font-body">
                30 jóvenes juntos en un viaje interior en busca de sentido, comunidad y transformación.
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg mb-4 text-accent">Navegación</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all font-body">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg mb-4 text-accent">Contacto</h4>
              <p className="text-sm opacity-80 font-body">info@saltovivo.com</p>
              <p className="text-sm opacity-80 mt-2 font-body">Italia · Argentina · México</p>
            </div>
          </div>
          <div className="border-t border-cream/15 mt-12 pt-8 text-center text-sm opacity-50 font-body">
            © 2026 El Año del Salto. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
