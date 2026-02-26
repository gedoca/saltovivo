const team = [
  {
    name: "Paolo Mai",
    origin: "Italia",
    role: "Maestro, formador, autor, coordinador de la Academia Pedagogía Viva, delegado italiano de la RIEEB.",
  },
  {
    name: "Giordana Ronci",
    origin: "Italia",
    role: "Presidenta de Escuelita Viva, educadora, escritora, formadora, doctora en psicología clínica y comunitaria, coach.",
  },
  {
    name: "German Doin",
    origin: "Argentina",
    role: "Comunicador, terapeuta, especialista en pedagogías alternativas. Director de La Educación Prohibida y Reevo.",
  },
  {
    name: "Loredana Battaglia",
    origin: "Italia",
    role: "Terapeuta, educadora curativa, especializada en lenguajes integrados. Cofundadora de FuoriLuogo.",
  },
  {
    name: "Mónica González",
    origin: "México",
    role: "Educóloga, facilitadora de procesos de aprendizaje en adolescencia, cofundadora de Alas Comunidad.",
  },
  {
    name: "Angélica Garcia",
    origin: "Colombia",
    role: "Psicóloga de niños y adolescentes, educadora, fundadora de A-Prender.",
  },
  {
    name: "Lucas Malaisi",
    origin: "Argentina",
    role: "Psicólogo gestalt. Autor, conferencista y fundador de la Fundación de Educación Emocional.",
  },
];

const Equipo = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-earth text-cream section-padding pt-32">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black mb-6">Nuestro Equipo</h1>
          <p className="text-cream/80 text-lg leading-relaxed">
            Un equipo con experiencia en psicoterapia, educación emocional y pedagogías alternativas en procesos juveniles de transformación.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-card border p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="text-2xl font-display font-black text-secondary-foreground group-hover:text-primary-foreground transition-colors">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <span className="text-sm text-primary font-medium">{member.origin}</span>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Equipo;
