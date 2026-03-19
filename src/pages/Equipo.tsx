import { Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import wallDark from "@/assets/wall-dark.png";
import nightStarsImg from "@/assets/night-stars.png";
import VideoSection from "@/components/VideoSection";

const teamKeys = ["paolo", "giordana", "german", "loredana", "monica", "angelica", "lucas"] as const;

const teamData = [
  { key: "paolo", name: "Paolo Mai", origin: "Italia", image: "./paolo.png", instagram: "https://www.instagram.com/paolomai1/" },
  { key: "giordana", name: "Giordana Ronci", origin: "Italia", image: "./giordana.png", instagram: "https://www.instagram.com/giordanaronci/" },
  { key: "german", name: "German Doin", origin: "Argentina", image: "./ger.png", instagram: "https://www.instagram.com/german.doin/" },
  { key: "loredana", name: "Loredana Battaglia", origin: "Italia", image: "./loredana.png", instagram: "#" },
  { key: "monica", name: "Mónica González", origin: "México", image: "./moni.png", instagram: "https://www.instagram.com/monica_g73/" },
  { key: "angelica", name: "Angélica Garcia", origin: "Colombia", image: "./keka.png", instagram: "https://www.instagram.com/garciamartinez.angelica/" },
  { key: "lucas", name: "Lucas Malaisi", origin: "Argentina", image: "./lucas.png", instagram: "https://www.instagram.com/lucas_jj_malaisi/" },
];

const Equipo = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Header */}
      <section className="relative text-cream" style={{ backgroundImage: `url(${wallDark})` }}>
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 section-padding pt-32">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl font-display spray-tag mb-6">{t("equipo.headerTitle")}</h1>
            <p className="text-cream/80 text-lg leading-relaxed font-body">
              {t("equipo.headerDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex justify-center pt-8">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors duration-300">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-display mb-1">{member.name}</h3>
                  <span className="text-sm text-primary font-bold font-body uppercase tracking-wider">
                    {t(`equipo.roles.${member.key}`)}
                  </span>
                  <p className="text-xs text-accent font-body font-bold mt-1">{member.origin}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3 font-body">
                    {t(`equipo.bios.${member.key}`)}
                  </p>
                  <div className="flex justify-center gap-4 mt-5">
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Instagram de ${member.name}`}
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Night gathering image */}
      <section className="relative">
        <img src={nightStarsImg} alt="Encuentro nocturno bajo las estrellas" className="w-full h-[50vh] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-cream text-2xl font-display spray-tag">{t("equipo.nightText")}</p>
        </div>
      </section>

      <VideoSection title={t("equipo.videoTitle")} subtitle={t("equipo.videoSubtitle")} />
    </>
  );
};

export default Equipo;
