import { useTranslation } from "react-i18next";
import wallTexture from "@/assets/wall-texture.png";
import wallDark from "@/assets/wall-dark.png";
import communityImg from "@/assets/community.png";
import campfireImg from "@/assets/campfire.png";
import { Link } from "react-router-dom";
import VideoSection from "@/components/VideoSection2";

const Filosofia = () => {
  const { t } = useTranslation();

  const principles = [
    { titleKey: "p1Title", textKey: "p1Text", color: "border-primary" },
    { titleKey: "p2Title", textKey: "p2Text", color: "border-secondary" },
    { titleKey: "p3Title", textKey: "p3Text", color: "border-accent" },
    { titleKey: "p4Title", textKey: "p4Text", color: "border-sky" },
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end overflow-hidden"
        style={{ backgroundImage: `url(${wallTexture})` }}
      >
        <div className="absolute inset-0 bg-background/50" />
        <div className="relative z-10 container mx-auto px-6 lg:px-24 pb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-primary font-bold mb-4 font-body">{t("filosofia.heroLabel")}</p>
          <h1 className="text-5xl md:text-7xl font-display spray-tag">
            {t("filosofia.heroTitle")}
          </h1>
          <p className="text-muted-foreground max-w-lg mt-4 text-lg font-body">
            {t("filosofia.heroDesc")}
          </p>
        </div>
      </section>
      
      <VideoSection title={t("filosofia.videoTitle")} subtitle={t("filosofia.videoSubtitle")} />

      {/* Principles */}
      <section className="relative text-cream" style={{ backgroundImage: `url(${wallDark})` }}>
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 section-padding">
          <div className="container mx-auto">
            <h2 className="text-4xl font-display text-center mb-16 spray-tag">{t("filosofia.principiosTitle")}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {principles.map((p, i) => (
                <div key={i} className={`border-l-4 ${p.color} pl-6 py-2`}>
                  <h3 className="text-xl font-display mb-3">{t(`filosofia.${p.titleKey}`)}</h3>
                  <p className="text-cream/75 leading-relaxed font-body">{t(`filosofia.${p.textKey}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-8 spray-tag">
            {t("filosofia.saltoTitle")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
            {t("filosofia.saltoP1")}
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
            {t("filosofia.saltoP2")}
          </p>
          <p className="text-foreground text-xl leading-relaxed font-body font-bold">
            {t("filosofia.saltoP3")}
          </p>
        </div>
      </section>

      {/* Quote / Image */}
      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={communityImg} alt="Comunidad" className="w-full h-[400px] object-cover shadow-xl" />
            <div className="absolute -bottom-3 -left-3 w-full h-full border-4 border-accent -z-10" />
          </div>
          <div>
            <blockquote className="text-3xl font-display leading-snug mb-6 spray-tag">
              {t("filosofia.quote")}
            </blockquote>
            <p className="text-muted-foreground font-body text-lg">
              {t("filosofia.quoteDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Campfire Image Section */}
      <section className="relative">
        <img src={campfireImg} alt="Fogón nocturno con jóvenes" className="w-full h-[50vh] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-cream text-2xl font-display spray-tag">{t("filosofia.campfireText")}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground section-padding text-center">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl font-display mb-6">{t("filosofia.ctaTitle")}</h2>
          <p className="opacity-80 mb-8 font-body">{t("filosofia.ctaDesc")}</p>
          <Link to="/contacto" className="inline-block bg-accent text-accent-foreground px-10 py-4 font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform transform skew-x-[-2deg]">
            {t("filosofia.ctaBtn")}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Filosofia;
