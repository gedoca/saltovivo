import { useTranslation } from "react-i18next";
import siciliaHero from "@/assets/sicilia-hero.png";
import wallTexture from "@/assets/wall-texture.png";
import wallDark from "@/assets/wall-dark.png";
import { Link } from "react-router-dom";
import VideoSection from "@/components/VideoSection";
import {
  ClipboardCheck, Video, Users, CreditCard, X, Globe,
  GraduationCap, UserPlus, Heart, Building2, Check,
} from "lucide-react";

const Inversion = () => {
  const { t } = useTranslation();

  const includes = [
    t("inversion.inc1"), t("inversion.inc2"), t("inversion.inc3"),
    t("inversion.inc4"), t("inversion.inc5"), t("inversion.inc6"),
  ];

  const timeline = [
    { timeKey: "fase1", labelKey: "fase1Label", descKey: "fase1Desc", icon: ClipboardCheck },
    { timeKey: "fase2", labelKey: "fase2Label", descKey: "fase2Desc", icon: Video },
    { timeKey: "fase3", labelKey: "fase3Label", descKey: "fase3Desc", icon: Users },
    { timeKey: "fase4", labelKey: "fase4Label", descKey: "fase4Desc", icon: CreditCard },
  ];

  const participation = [
    {
      titleKey: "partPreinscripcion", descKey: "partPreinscripcionDesc", btnKey: "partPreinscripcionBtn",
      icon: UserPlus, link: "https://forms.gle/VWL5DjWpnFEYuBUg8", color: "border-primary",
    },
    {
      titleKey: "partVoluntariado", descKey: "partVoluntariadoDesc", btnKey: "partVoluntariadoBtn",
      icon: Heart, link: "mailto:elanodelsalto@gmail.com", color: "border-secondary",
    },
    {
      titleKey: "partReferentes", descKey: "partReferentesDesc", btnKey: "partReferentesBtn",
      icon: Building2, link: "mailto:elanodelsalto@gmail.com", color: "border-accent",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src={siciliaHero} alt="Costa de Sicilia" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient-overlay" />
        <div className="relative z-10 container mx-auto px-6 lg:px-24 pb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-4 font-body">{t("inversion.heroLabel")}</p>
          <h1 className="text-5xl md:text-7xl font-display text-cream spray-tag">
            {t("inversion.heroTitle")}
          </h1>
          <p className="text-cream/80 text-lg mt-4 max-w-xl font-body font-bold">
            {t("inversion.heroDesc")}
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="section-padding" style={{ backgroundImage: `url(${wallTexture})` }}>
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border-4 border-primary shadow-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 font-body font-bold text-xs uppercase tracking-widest skew-x-[-4deg] translate-x-2 -translate-y-0">
              {t("inversion.badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-display spray-tag mb-2">{t("inversion.precio")}</h2>
            <p className="text-muted-foreground font-body mb-8">{t("inversion.precioSub")}</p>
            <ul className="text-left space-y-3 max-w-md mx-auto mb-8">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="text-secondary mt-1 shrink-0" size={18} />
                  <span className="font-body text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 justify-center text-muted-foreground text-sm font-body">
              <X size={16} className="text-destructive shrink-0" />
              <span>{t("inversion.noIncluye")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Latin America Support */}
      <section className="relative text-cream" style={{ backgroundImage: `url(${wallDark})` }}>
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 section-padding">
          <div className="container mx-auto max-w-3xl text-center">
            <Globe className="mx-auto mb-6 text-accent" size={40} />
            <h2 className="text-3xl md:text-4xl font-display spray-tag mb-6">{t("inversion.acompTitle")}</h2>
            <p className="text-cream/80 text-lg leading-relaxed font-body max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: t("inversion.acompDesc") }} />
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section-padding" style={{ backgroundImage: `url(${wallTexture})` }}>
        <div className="container mx-auto max-w-3xl text-center">
          <GraduationCap className="mx-auto mb-6 text-primary" size={40} />
          <h2 className="text-3xl md:text-4xl font-display spray-tag mb-6">{t("inversion.becasTitle")}</h2>
          <p className="text-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto mb-8">
            {t("inversion.becasDesc")}
          </p>
          <Link to="/contacto" className="btn-graffiti">{t("inversion.becasBtn")}</Link>
        </div>
      </section>

      {/* Admission Timeline */}
      <section className="relative text-cream" style={{ backgroundImage: `url(${wallDark})` }}>
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 section-padding">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display spray-tag text-center mb-16">{t("inversion.admisionTitle")}</h2>
            <div className="space-y-0">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-6 items-start relative">
                    {i < timeline.length - 1 && (
                      <div className="absolute left-[19px] top-10 bottom-0 w-px bg-cream/20" />
                    )}
                    <div className="shrink-0 w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center bg-earth/60">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div className="pb-10">
                      <span className="text-accent font-body font-bold text-sm">{t(`inversion.${item.timeKey}`)}</span>
                      <h3 className="font-display text-xl mt-1">{t(`inversion.${item.labelKey}`)}</h3>
                      <p className="text-cream/60 font-body text-sm mt-1">{t(`inversion.${item.descKey}`)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Participation Cards */}
      <section className="section-padding" style={{ backgroundImage: `url(${wallTexture})` }}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-display spray-tag text-center mb-16">
            {t("inversion.ecosistemaTitle")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {participation.map((card) => {
              const Icon = card.icon;
              const isExternal = card.link.startsWith("http");
              return (
                <div key={card.titleKey} className={`bg-card border-t-4 ${card.color} p-8 shadow-lg flex flex-col items-center text-center`}>
                  <Icon className="text-foreground mb-4" size={32} />
                  <h3 className="font-display text-xl mb-3">{t(`inversion.${card.titleKey}`)}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{t(`inversion.${card.descKey}`)}</p>
                  {isExternal ? (
                    <a href={card.link} target="_blank" rel="noopener noreferrer" className="btn-graffiti">
                      {t(`inversion.${card.btnKey}`)}
                    </a>
                  ) : (
                    <Link to={card.link} className="btn-graffiti">{t(`inversion.${card.btnKey}`)}</Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <VideoSection title={t("inversion.videoTitle")} subtitle={t("inversion.videoSubtitle")} />
    </>
  );
};

export default Inversion;
