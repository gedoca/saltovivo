import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Inicio" },
  { path: "/programa", label: "Programa" },
  { path: "/equipo", label: "Equipo" },
  { path: "/comunidad", label: "Comunidad" },
  { path: "/contacto", label: "Contacto" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b">
        <nav className="container mx-auto flex items-center justify-between h-16 px-6">
          <Link to="/" className="font-display text-2xl font-black tracking-tight text-foreground">
            EL AÑO<span className="text-primary"> DEL SALTO</span>
          </Link>
          
          {/* Desktop */}
          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                    location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background border-b animate-fade-in">
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm font-medium tracking-wide uppercase ${
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

      <footer className="bg-earth text-cream">
        <div className="container mx-auto section-padding">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">El Año del Salto</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                30 jóvenes juntos en un viaje interior en busca de sentido, comunidad y transformación.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navegación</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <p className="text-sm opacity-80">info@saltovivo.com</p>
              <p className="text-sm opacity-80 mt-2">Italia · Argentina · México</p>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-12 pt-8 text-center text-sm opacity-60">
            © 2026 El Año del Salto. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
