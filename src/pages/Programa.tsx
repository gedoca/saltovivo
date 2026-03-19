import { useTranslation } from "react-i18next";
import landscapeImg from "@/assets/landscape.png";
import adventureImg from "@/assets/adventure.png";
import wallTexture from "@/assets/wall-texture.png";
import wallDark from "@/assets/wall-dark.png";
import { Link } from "react-router-dom";
import VideoSection2 from "@/components/VideoSection2";
import communityImg from "@/assets/community.png";

const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-sky", "bg-primary", "bg-secondary", "bg-accent"];

const Programa = () => {
  const { t } = useTranslation();

  const destacados = [
    { nameKey: "dest1Name", originKey: "dest1Origin", roleKey: "dest1Role" },
    { nameKey: "dest2Name", originKey: "dest2Origin", roleKey: "dest2Role" },
    { nameKey: "dest3Name", originKey: "dest3Origin", roleKey: "dest3Role" },
    { nameKey: "dest4Name", originKey: "dest4Origin", roleKey: "dest4Role" },
    { nameKey: "dest5Name", originKey: "dest5Origin", roleKey: "dest5Role" },
    { nameKey: "dest6Name", originKey: "dest6Origin", roleKey: "dest6Role" },
    { nameKey: "dest7Name", originKey: "dest7Origin", roleKey: "dest7Role" },
    { nameKey: "dest8Name", originKey: "dest8Origin", roleKey: "dest8Role" },
    { nameKey: "dest9Name", originKey: "dest9Origin", roleKey: "dest9Role" },
  ];

  const salidas = [
    { titleKey: "sal1Title", textKey: "sal1Text", color: "border-primary" },
    { titleKey: "sal2Title", textKey: "sal2Text", color: "border-secondary" },
    { titleKey: "sal3Title", textKey: "sal3Text", color: "border-accent" },
    { titleKey: "sal4Title", textKey: "sal4Text", color: "border-sky" },
    { titleKey: "sal5Title", textKey: "sal5Text", color: "border-primary" },
    { titleKey: "sal6Title", textKey: "sal6Text", color: "border-secondary" },
  ];

  const timeline = [
    { monthKey: "sem1", titleKey: "sem1Title", descKey: "sem1Desc", color: "border-primary" },
    { monthKey: "sem2", titleKey: "sem2Title", descKey: "sem2Desc", color: "border-secondary" },
    { monthKey: "sem3", titleKey: "sem3Title", descKey: "sem3Desc", color: "border-accent" },
    { monthKey: "sem4", titleKey: "sem4Title", descKey: "sem4Desc", color: "border-sky" },
  ];

  const ejes = [
    { titleKey: "eje1Title", textKey: "eje1Text" },
    { titleKey: "eje2Title", textKey: "eje2Text" },
    { titleKey: "eje3Title", textKey: "eje3Text" },
    { titleKey: "eje4Title", textKey: "eje4Text" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src={adventureImg} alt="Aventura" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient-overlay" />
        <div className="relative z-10 container mx-auto px-6 lg:px-24 pb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-4 font-body">{t("programa.heroLabel")}</p>
          <h1 className="text-5xl md:text-7xl font-display text-cream spray-tag">
            {t("programa.heroTitle")}
          </h1>
        </div>
      </section>
      
      <VideoSection2 title={t("programa.videoTitle")} subtitle={t("programa.videoSubtitle")} />

      {/* About */}
      <section className="section-padding" style={{ backgroundImage: `url(${wallTexture})` }}>
        <div className="absolute inset-0 bg-background/75 opacity-0" />
        <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display mb-6">
              {t("programa.aboutTitle").split(" ").slice(0, -1).join(" ")} <span className="accent-underline">{t("programa.aboutTitle").split(" ").pop()}</span>
            </h2>
            <p className="leading-relaxed text-lg mb-4 font-body font-bold text-black">
              {t("programa.aboutP1")}
            </p>
            <p className="leading-relaxed font-body font-bold text-black">
              {t("programa.aboutP2")}
            </p>
          </div>
          <div className="relative">
            <img src={landscapeImg} alt="Paisaje italiano" className="w-full h-[350px] object-cover shadow-xl" />
            <div className="absolute -bottom-3 -right-3 w-full h-full border-4 border-secondary -z-10" />
          </div>
        </div>
      </section>
      
      {/* Ejes */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-display mb-12 text-center spray-tag">{t("programa.ejesTitle")}</h2>
          {ejes.map((eje, i) => (
            <div key={i} className="flex gap-6 mb-10 graffiti-border pl-6">
              <span className="text-4xl font-display text-primary shrink-0">0{i + 1}</span>
              <div>
                <h3 className="text-xl font-display mb-2">{t(`programa.${eje.titleKey}`)}</h3>
                <p className="text-muted-foreground leading-relaxed font-body">{t(`programa.${eje.textKey}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Timeline */}
      <section className="relative text-cream" style={{ backgroundImage: `url(${wallDark})` }}>
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 section-padding">
          <div className="container mx-auto">
            <h2 className="text-4xl font-display mb-16 text-center spray-tag">{t("programa.cronogramaTitle")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, i) => (
                <div key={i} className={`border-t-4 ${item.color} pt-6`}>
                  <span className="text-sm uppercase tracking-wider text-accent font-bold font-body">{t(`programa.${item.monthKey}`)}</span>
                  <h3 className="text-xl font-display mt-2 mb-3">{t(`programa.${item.titleKey}`)}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed font-body">{t(`programa.${item.descKey}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jornada */}
      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={communityImg} alt="Agenda semanal del programa" className="w-full h-[400px] object-cover shadow-xl" />
            <div className="absolute -bottom-3 -left-3 w-full h-full border-4 border-accent -z-10" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-display leading-snug mb-6 spray-tag">
              {t("programa.jornadaTitle")}
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-6 leading-relaxed">
              {t("programa.jornadaP1")}
            </p>
            <p className="text-muted-foreground font-body text-lg mb-6 leading-relaxed">
              {t("programa.jornadaP2")}
            </p>
            <p className="text-foreground font-body text-xl font-bold leading-relaxed">
              {t("programa.jornadaP3")}
            </p>
          </div>
        </div>
      </section>

      {/* Salidas */}
      <section className="relative text-cream" style={{ backgroundImage: `url(${wallDark})` }}>
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 section-padding">
          <div className="container mx-auto">
            <h2 className="text-4xl font-display text-center mb-16 spray-tag">{t("programa.expedicionesTitle")}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {salidas.map((p, i) => (
                <div key={i} className={`border-l-4 ${p.color} pl-6 py-2`}>
                  <h3 className="text-xl font-display mb-3">{t(`programa.${p.titleKey}`)}</h3>
                  <p className="text-cream/75 leading-relaxed font-body">{t(`programa.${p.textKey}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destacados */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display text-center mb-16 spray-tag">
            {t("programa.clavesTitle")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destacados.map((member, i) => (
              <div
                key={i}
                className={`${colors[i % colors.length]} p-8 transition-all group hover:-translate-y-1`}
              >
                <h3 className="text-xl font-display mb-1 text-primary-foreground">
                  {t(`programa.${member.nameKey}`)}
                </h3>
                <span className="text-sm font-bold font-body text-primary-foreground/80">
                  {t(`programa.${member.originKey}`)}
                </span>
                <p className="text-sm leading-relaxed mt-3 font-body text-primary-foreground/90">
                  {t(`programa.${member.roleKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground section-padding text-center">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl font-display mb-6">{t("programa.ctaTitle")}</h2>
          <p className="opacity-80 mb-8 font-body">{t("programa.ctaDesc")}</p>
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdfxyVXZCFToD-vTNNwk2vEEyF1nx70qZ7TOwBE3TPKgwjZKA/viewform" className="btn-graffiti">{t("programa.ctaBtn")}</Link>
        </div>
      </section>
    </>
  );
};

export default Programa;
