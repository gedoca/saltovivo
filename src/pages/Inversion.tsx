import siciliaHero from "@/assets/sicilia-hero.png";
import wallTexture from "@/assets/wall-texture.png";
import wallDark from "@/assets/wall-dark.png";
import { Link } from "react-router-dom";
import VideoSection from "@/components/VideoSection";
import {
  ClipboardCheck,
  Video,
  Users,
  CreditCardCheck,
  CreditCard,
  X,
  Globe,
  GraduationCap,
  UserPlus,
  Heart,
  Building2,
  Sun,
  UtensilsCrossed,
  Palette,
  Star,
  Check,
} from "lucide-react";

const includes = [
  "Estadía completa (alojamiento en habitación compartida)",
  "Programa completo de transformación",
  "Todas las experiencias y actividades del itinerario",
  "Seguros especializados",
  "Talleres vivenciales",
  "Todas las comidas (alimentación consciente)",
];

const timeline = [
  { 
    time: "Fase 1", 
    label: "Pre-Inscripción", 
    desc: "Completa el formulario inicial para manifestar tu interés y postularte al programa.", 
    icon: ClipboardCheck 
  },
  { 
    time: "Fase 2", 
    label: "Charla Online", 
    desc: "Encuentro grupal virtual para conocer los detalles del viaje y resolver dudas generales.", 
    icon: Video 
  },
  { 
    time: "Fase 3", 
    label: "Entrevista Individual", 
    desc: "Conversación profunda uno a uno para alinear expectativas y profundizar en tu propósito.", 
    icon: Users 
  },
  { 
    time: "Fase 4", 
    label: "Confirmación y Pago", 
    desc: "Validación de tu vacante y formalización de la inversión para asegurar tu lugar en Sicilia.", 
    icon: CreditCard 
  },
];

const participation = [
  {
    title: "Preinscripción",
    desc: "Asegura tu lugar e inicia tu proceso ahora.",
    icon: UserPlus,
    btn: "Preinscribirme",
    link: "https://forms.gle/VWL5DjWpnFEYuBUg8",
    color: "border-primary",
  },
  {
    title: "Voluntariado",
    desc: "¿Quieres aportar tu talento? Postúlate como voluntario y ayúdanos a expandir el impacto de Saltovivo.",
    icon: Heart,
    btn: "Postularme",
    link: "/contacto",
    color: "border-secondary",
  },
  {
    title: "Organizaciones y Referentes",
    desc: "Conviértete en organización delegada o referente de Saltovivo en tu país. Trabajemos juntos para organizar grupos en tu región.",
    icon: Building2,
    btn: "Ser Referente",
    link: "/contacto",
    color: "border-accent",
  },
];

const Inversion = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src={siciliaHero} alt="Costa de Sicilia" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient-overlay" />
        <div className="relative z-10 container mx-auto px-6 lg:px-24 pb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-4 font-body">Inversión</p>
          <h1 className="text-5xl md:text-7xl font-display text-cream spray-tag">
            A un paso de dar<br />el Salto
          </h1>
          <p className="text-cream/80 text-lg mt-4 max-w-xl font-body font-bold">
            Un viaje transformador de 30 días en el corazón de Sicilia para jóvenes de todo el mundo.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="section-padding" style={{ backgroundImage: `url(${wallTexture})` }}>
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border-4 border-primary shadow-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 font-body font-bold text-xs uppercase tracking-widest skew-x-[-4deg] translate-x-2 -translate-y-0">
              1 mes - Septiembre 2026
            </div>
            <h2 className="text-4xl md:text-5xl font-display spray-tag mb-2">3.300&nbsp;€</h2>
            <p className="text-muted-foreground font-body mb-8">Tu inversión todo-incluido</p>

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
              <span>No incluye viaje internacional a Sicilia</span>
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
            <h2 className="text-3xl md:text-4xl font-display spray-tag mb-6">Acompañamiento desde casa</h2>
            <p className="text-cream/80 text-lg leading-relaxed font-body max-w-2xl mx-auto">
              Contamos con organizaciones locales aliadas en <strong className="text-accent">Colombia</strong> y{" "}
              <strong className="text-accent">México</strong> que ofrecen la organización de grupos y acompañamiento
              directo desde América para tu total tranquilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section-padding" style={{ backgroundImage: `url(${wallTexture})` }}>
        <div className="container mx-auto max-w-3xl text-center">
          <GraduationCap className="mx-auto mb-6 text-primary" size={40} />
          <h2 className="text-3xl md:text-4xl font-display spray-tag mb-6">Becas Parciales</h2>
          <p className="text-foreground/80 text-lg leading-relaxed font-body max-w-2xl mx-auto mb-8">
            Contamos con opciones de becas parciales para facilitar el acceso. Ten en cuenta que la disponibilidad de
            las mismas depende del número total de inscripciones confirmadas.
          </p>
          <Link to="/contacto" className="btn-graffiti">Aplicar a Beca</Link>
        </div>
      </section>

      {/* Daily Timeline */}
      <section className="relative text-cream" style={{ backgroundImage: `url(${wallDark})` }}>
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 section-padding">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display spray-tag text-center mb-16">Proceso de Admisión</h2>
            <div className="space-y-0">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-6 items-start relative">
                    {/* vertical line */}
                    {i < timeline.length - 1 && (
                      <div className="absolute left-[19px] top-10 bottom-0 w-px bg-cream/20" />
                    )}
                    <div className="shrink-0 w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center bg-earth/60">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div className="pb-10">
                      <span className="text-accent font-body font-bold text-sm">{item.time}</span>
                      <h3 className="font-display text-xl mt-1">{item.label}</h3>
                      <p className="text-cream/60 font-body text-sm mt-1">{item.desc}</p>
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
            Sé parte del ecosistema
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {participation.map((card) => {
              const Icon = card.icon;
              const isExternal = card.link.startsWith("http");
              return (
                <div
                  key={card.title}
                  className={`bg-card border-t-4 ${card.color} p-8 shadow-lg flex flex-col items-center text-center`}
                >
                  <Icon className="text-foreground mb-4" size={32} />
                  <h3 className="font-display text-xl mb-3">{card.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{card.desc}</p>
                  {isExternal ? (
                    <a href={card.link} target="_blank" rel="noopener noreferrer" className="btn-graffiti">
                      {card.btn}
                    </a>
                  ) : (
                    <Link to={card.link} className="btn-graffiti">{card.btn}</Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <VideoSection title="Descubre El Año del Salto" subtitle="Tu viaje empieza con un clic" />
    </>
  );
};

export default Inversion;
