import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroPerson from "@/assets/hero-person.png";
import wallTexture from "@/assets/wall-texture.png";
import wallDark from "@/assets/wall-dark.png";
import landscapeImg from "@/assets/landscape.png";
import communityImg from "@/assets/community.png";
import VideoSection from "@/components/VideoSection";

const Index = () => {
  const { t } = useTranslation();

  const pillars = [
    { number: "01", titleKey: "pillar1Title", descKey: "pillar1Desc", color: "text-primary" },
    { number: "02", titleKey: "pillar2Title", descKey: "pillar2Desc", color: "text-secondary" },
    { number: "03", titleKey: "pillar3Title", descKey: "pillar3Desc", color: "text-accent" },
    { number: "04", titleKey: "pillar4Title", descKey: "pillar4Desc", color: "text-sky" },
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[95vh] flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${wallTexture})` }}
      >
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 container mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 animate-slide-in-left">
            <p className="text-sm uppercase tracking-[0.4em] text-primary font-bold mb-4 font-body">
              {t("index.heroDate")}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[1.1] mb-6 spray-tag">
              {t("index.heroTitle")}
            </h1>
            <p className="text-muted-foreground max-w-md text-lg mb-4 font-body">
              {t("index.heroDesc")}
            </p>
            <p className="text-primary font-bold text-lg mb-8 font-body uppercase tracking-wide">
              {t("index.inscripcionesAbiertas")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdfxyVXZCFToD-vTNNwk2vEEyF1nx70qZ7TOwBE3TPKgwjZKA/viewform" className="btn-graffiti">
                {t("index.formulario")}
              </Link>
              <Link to="/programa" className="btn-graffiti-outline">
                {t("index.saberMas")}
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in-up">
            <img
              src={heroPerson}
              alt="Joven saltando al agua"
              className="max-h-[70vh] w-auto drop-shadow-2xl rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Un Viaje */}
      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              {t("index.viajeTitle").split(" ")[0]} <span className="accent-underline">{t("index.viajeTitle").split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6 font-body">
              {t("index.viajeP1")}
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              {t("index.viajeP2")}
            </p>
          </div>
          <div className="relative">
            <img src={landscapeImg} alt="Paisaje" className="w-full h-[400px] object-cover shadow-xl" />
            <div className="absolute -bottom-3 -left-3 w-full h-full border-4 border-primary -z-10" />
          </div>
        </div>
      </section>

      {/* Un mes juntos */}
      <section
        className="relative text-cream"
        style={{ backgroundImage: `url(${wallDark})` }}
      >
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 section-padding">
          <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={communityImg} alt="Comunidad" className="w-full h-[400px] object-cover shadow-xl" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                {t("index.mesTitle")}
              </h2>
              <p className="text-cream/80 leading-relaxed text-lg mb-6 font-body">
                {t("index.mesP1")}
              </p>
              <p className="text-cream/70 leading-relaxed mb-8 font-body">
                {t("index.mesP2")}
              </p>
              <Link to="/programa" className="btn-graffiti">
                {t("index.saberMas")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section
        className="relative section-padding"
        style={{ backgroundImage: `url(${wallTexture})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-16 spray-tag">
            {t("index.ejesTitle")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="bg-card/80 backdrop-blur-sm p-6 border-l-4 border-primary hover:border-accent transition-colors group">
                <span className={`text-5xl font-display ${pillar.color}`}>
                  {pillar.number}
                </span>
                <h3 className="text-xl font-display mt-4 mb-3">{t(`index.${pillar.titleKey}`)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">{t(`index.${pillar.descKey}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <VideoSection
        title={t("index.videoTitle")}
        subtitle={t("index.videoSubtitle")}
      />

      {/* CTA */}
      <section className="bg-primary text-primary-foreground section-padding text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display mb-6">
            {t("index.ctaTitle")}
          </h2>
          <p className="opacity-80 mb-8 font-body text-lg">
            {t("index.ctaDesc")}
          </p>
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdfxyVXZCFToD-vTNNwk2vEEyF1nx70qZ7TOwBE3TPKgwjZKA/viewform" className="inline-block bg-accent text-accent-foreground px-10 py-4 font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform transform skew-x-[-2deg]">
            {t("index.formulario")}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
