import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";
import wallDark from "@/assets/wall-dark.png";
import LanguageSwitcher from "./LanguageSwitcher";

const navKeys = [
  { path: "/", key: "inicio" },
  { path: "/programa", key: "programa" },
  { path: "/filosofia", key: "filosofia" },
  { path: "/equipo", key: "equipo" },
  { path: "/inversion", key: "inversion" },
  { path: "https://forms.gle/VWL5DjWpnFEYuBUg8", key: "preinscripcion" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <nav className="container mx-auto flex items-center justify-between h-16 px-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="El Año del Salto" className="h-10 w-auto" />
          </Link>
          
          <ul className="hidden lg:flex gap-6 items-center">
            {navKeys.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-xs font-bold tracking-widest uppercase transition-colors hover:text-primary ${
                    location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>

          <div className="lg:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              className="text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="lg:hidden bg-background border-b animate-fade-in">
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navKeys.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm font-bold tracking-widest uppercase ${
                      location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {t(`nav.${item.key}`)}
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
                {t("footer.tagline")}
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg mb-4 text-accent">{t("footer.navegacion")}</h4>
              <ul className="space-y-2">
                {navKeys.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all font-body">
                      {t(`nav.${item.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg mb-4 text-accent">{t("footer.contacto")}</h4>
              <p className="text-sm opacity-80 font-body">elanodelsalto@gmail.com</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <a href="https://wa.me/393489332959" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all font-body">🇮🇹 Italia</a>
                <a href="https://wa.me/573165251044" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all font-body">🇨🇴 Colombia</a>
                <a href="https://wa.me/5491162720879" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all font-body">🇦🇷 Argentina</a>
                <a href="https://wa.me/5213313278817" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all font-body">🇲🇽 México</a>
              </div>
            </div>
          </div>
          <div className="border-t border-cream/15 mt-12 pt-8 text-center text-sm opacity-50 font-body">
            {t("footer.copyright")}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
