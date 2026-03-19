import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("it") ? "it" : "es";

  const toggle = () => {
    const next = currentLang === "es" ? "it" : "es";
    i18n.changeLanguage(next);
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
      aria-label="Switch language"
    >
      <span className={currentLang === "es" ? "text-primary" : ""}>ES</span>
      <span className="text-border">/</span>
      <span className={currentLang === "it" ? "text-primary" : ""}>IT</span>
    </button>
  );
};

export default LanguageSwitcher;
