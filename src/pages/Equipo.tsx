import { Instagram, Linkedin } from "lucide-react";
import wallDark from "@/assets/wall-dark.png";
import communityImg from "@/assets/community.png";
import VideoSection from "@/components/VideoSection";

const team = [
  {
    name: "Paolo Mai",
    origin: "Italia",
    role: "Maestro & Formador",
    bio: "Autor, coordinador de la Academia Pedagogía Viva y delegado italiano de la RIEEB.",
    image: 'url(${communityImg})',
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Giordana Ronci",
    origin: "Italia",
    role: "Presidenta de Escuelita Viva",
    bio: "Educadora, escritora, formadora, doctora en psicología clínica y coach.",
    image: "/placeholder.svg",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "German Doin",
    origin: "Argentina",
    role: "Comunicador & Terapeuta",
    bio: "Especialista en pedagogías alternativas. Director de La Educación Prohibida y Reevo.",
    image: "/placeholder.svg",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Loredana Battaglia",
    origin: "Italia",
    role: "Terapeuta & Educadora",
    bio: "Educadora curativa, especializada en lenguajes integrados. Cofundadora de FuoriLuogo.",
    image: "/placeholder.svg",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Mónica González",
    origin: "México",
    role: "Educóloga & Facilitadora",
    bio: "Facilitadora de procesos de aprendizaje en adolescencia, cofundadora de Alas.",
    image: "/placeholder.svg",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Angélica Garcia",
    origin: "Colombia",
    role: "Psicóloga & Educadora",
    bio: "Psicóloga de niños y adolescentes, educadora, fundadora de A-Prender.",
    image: "/placeholder.svg",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Lucas Malaisi",
    origin: "Argentina",
    role: "Psicólogo & Conferencista",
    bio: "Psicólogo gestalt. Autor, conferencista y fundador de la Fundación de Educación Emocional.",
    image: "/placeholder.svg",
    linkedin: "#",
    instagram: "#",
  },
];

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="flex justify-center pt-8">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-display mb-1">{member.name}</h3>
                  <span className="text-sm text-primary font-bold font-body uppercase tracking-wider">
                    {member.role}
                  </span>
                  <p className="text-xs text-accent font-body font-bold mt-1">{member.origin}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3 font-body">
                    {member.bio}
                  </p>

                  {/* Social */}
                  <div className="flex justify-center gap-4 mt-5">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin size={18} />
                    </a>
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

      <VideoSection title="Conocé al Equipo" subtitle="Las personas detrás del proyecto" />
    </>
  );
};

export default Equipo;
