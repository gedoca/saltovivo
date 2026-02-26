import wallDark from "@/assets/wall-dark.png";
import VideoSection from "@/components/VideoSection";

const team = [
  { name: "Paolo Mai", origin: "Italia", role: "Maestro, formador, autor, coordinador de la Academia Pedagogía Viva, delegado italiano de la RIEEB." },
  { name: "Giordana Ronci", origin: "Italia", role: "Presidenta de Escuelita Viva, educadora, escritora, formadora, doctora en psicología clínica, coach." },
  { name: "German Doin", origin: "Argentina", role: "Comunicador, terapeuta, especialista en pedagogías alternativas. Director de La Educación Prohibida y Reevo." },
  { name: "Loredana Battaglia", origin: "Italia", role: "Terapeuta, educadora curativa, especializada en lenguajes integrados. Cofundadora de FuoriLuogo." },
  { name: "Mónica González", origin: "México", role: "Educóloga, facilitadora de procesos de aprendizaje en adolescencia, cofundadora de Alas." },
  { name: "Angélica Garcia", origin: "Colombia", role: "Psicóloga de niños y adolescentes, educadora, fundadora de A-Prender." },
  { name: "Lucas Malaisi", origin: "Argentina", role: "Psicólogo gestalt. Autor, conferencista y fundador de la Fundación de Educación Emocional." },
];

const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-sky", "bg-primary", "bg-secondary", "bg-accent"];

const Equipo = () => {
  return (
    <>
      {/* Header */}
      <section className="relative text-cream" style={{ backgroundImage: `url(${wallDark})` }}>
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 section-padding pt-32">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl font-display spray-tag mb-6">Nuestro Equipo</h1>
            <p className="text-cream/80 text-lg leading-relaxed font-body">
              Un equipo con experiencia en psicoterapia, educación emocional y pedagogías alternativas.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-card border-2 border-border p-8 hover:border-primary transition-all group hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${colors[i]} flex items-center justify-center mb-5`}>
                  <span className="text-2xl font-display text-primary-foreground">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-display mb-1">{member.name}</h3>
                <span className="text-sm text-primary font-bold font-body">{member.origin}</span>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3 font-body">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoSection title="Conocé al Equipo" subtitle="Las personas detrás del proyecto" />
    </>
  );
};

export default Equipo;
