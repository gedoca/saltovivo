import landscapeImg from "@/assets/landscape.png";
import adventureImg from "@/assets/adventure.png";
import wallTexture from "@/assets/wall-texture.png";
import wallDark from "@/assets/wall-dark.png";
import { Link } from "react-router-dom";
import VideoSection from "@/components/VideoSection";
import communityImg from "@/assets/community.png";


const destacados = [
  { 
    name: "Sistema de Mentorías", 
    origin: "Acompañamiento cercano", 
    role: "Cada grupo cuenta con mentores y coordinadores que acompañan el proceso personal y grupal, sosteniendo espacios de seguimiento y orientación durante todo el mes." 
  },
  { 
    name: "Grupos Reducidos (A, B, C, D)", 
    origin: "Trabajo personalizado", 
    role: "La división en grupos pequeños permite profundidad, confianza y participación activa, favoreciendo la expresión y el vínculo significativo." 
  },
  { 
    name: "Rotación de Labores", 
    origin: "Vida en comunidad", 
    role: "Cocina, mercado, limpieza y organización son responsabilidades compartidas. Cada joven participa activamente en el sostenimiento de la vida cotidiana." 
  },
  { 
    name: "Progresión de Talleres", 
    origin: "Aprendizaje evolutivo", 
    role: "Los talleres disminuyen en cantidad y aumentan en profundidad horaria cada semana, favoreciendo foco, compromiso y desarrollo de proyectos concretos." 
  },
  { 
    name: "Diversidad de Áreas", 
    origin: "Formación integral", 
    role: "Ingeniería, ecología, construcción, comunicación, biología, música, plástica, danza y teatro integran saberes técnicos, artísticos y humanistas." 
  },
  { 
    name: "Actividades Nocturnas", 
    origin: "Experiencia cultural y vincular", 
    role: "Fogón, música, desafíos, astronomía, mitología y fiesta fortalecen la convivencia y abren espacios lúdicos y simbólicos." 
  },
  { 
    name: "Aprendizaje Experiencial", 
    origin: "Teoría + práctica", 
    role: "El programa integra clases, talleres, salidas y vida comunitaria, articulando reflexión, acción y experiencia directa." 
  },
  { 
    name: "Intensidad Progresiva", 
    origin: "Compromiso creciente", 
    role: "El tiempo dedicado a los talleres se expande semana a semana (de 1:30h a 6h), acompañando la maduración del proceso y la consolidación de proyectos." 
  }
];

const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-sky", "bg-primary", "bg-secondary", "bg-accent"];

const salidas = [
  {
    title: "Cultura Local",
    text: "Recorridos por pequeños pueblos para conocer su historia, cultura y modo de vida, ampliando la mirada desde la experiencia directa.",
    color: "border-primary",
  },
  {
    title: "Catania",
    text: "Exploración urbana en una ciudad viva y diversa, conectando con su energía social, cultural y cotidiana.",
    color: "border-secondary",
  },
  {
    title: "Siracusa",
    text: "Encuentro con la historia y el patrimonio del Mediterráneo, integrando pasado y presente en una experiencia cultural profunda.",
    color: "border-accent",
  },
  {
    title: "Palermo",
    text: "Inmersión en una capital vibrante que invita a reflexionar sobre identidad, diversidad y convivencia social.",
    color: "border-sky",
  },
  {
    title: "Volcán Etna",
    text: "Experiencia en la base y el ascenso al volcán como desafío personal y colectivo, conectando con la fuerza de la naturaleza y fortaleciendo la confianza y la superación.",
    color: "border-primary",
  },
  {
    title: "Isla de Milazzo",
    text: "Salida en barco hacia la isla para vivir el mar como experiencia de apertura, contemplación y conexión grupal en contacto con el paisaje.",
    color: "border-secondary",
  },
];

const timeline = [
{ month: "Semana 1", title: "Identidad", desc: "¿Quién soy? Reconozco mi cuerpo, mi territorio inmediato y mis emociones actuales como base de mi identidad.", color: "border-primary" },
{ month: "Semana 2", title: "Raíces", desc: "¿De dónde vengo? Exploro mi historia, mi cultura, mi familia y mi genealogía personal para comprender mis raíces.", color: "border-secondary" },
{ month: "Semana 3", title: "Presente", desc: "¿Dónde estoy? Me sitúo en el aquí y ahora, integrando mi dimensión personal y social en el presente.", color: "border-accent" },
{ month: "Semana 4", title: "Visión", desc: "¿Hacia dónde voy? Defino mi propósito, proyecto y compromiso para orientar mi camino futuro.", color: "border-sky" }];

const Programa = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src={adventureImg} alt="Aventura" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient-overlay" />
        <div className="relative z-10 container mx-auto px-6 lg:px-24 pb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-4 font-body">El Programa</p>
          <h1 className="text-5xl md:text-7xl font-display text-cream spray-tag">
            El Año del Salto
          </h1>
        </div>
      </section>

      {/* About */}
      <section className="section-padding" style={{ backgroundImage: `url(${wallTexture})` }}>
        <div className="absolute inset-0 bg-background/75 opacity-0" />
        <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display mb-6">
              Un programa de <span className="accent-underline">transformación</span>
            </h2>
            <p className="leading-relaxed text-lg mb-4 font-body font-bold text-black">
              Para 30 jóvenes de entre 17 y 19 años que eligen vivir una experiencia distinta antes de seguir tomando decisiones importantes.
            </p>
            <p className="leading-relaxed font-body font-bold text-black">
              Un viaje para conocer el mundo desde otro ritmo, conocerse a sí mismos con mayor profundidad y explorar preguntas sobre el sentido y la vocación.
            </p>
          </div>
          <div className="relative">
            <img src={landscapeImg} alt="Paisaje italiano" className="w-full h-[350px] object-cover shadow-xl" />
            <div className="absolute -bottom-3 -right-3 w-full h-full border-4 border-secondary -z-10" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative text-cream" style={{ backgroundImage: `url(${wallDark})` }}>
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 section-padding">
          <div className="container mx-auto">
            <h2 className="text-4xl font-display mb-16 text-center spray-tag">Cronograma</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, i) =>
              <div key={i} className={`border-t-4 ${item.color} pt-6`}>
                  <span className="text-sm uppercase tracking-wider text-accent font-bold font-body">{item.month}</span>
                  <h3 className="text-xl font-display mt-2 mb-3">{item.title}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed font-body">{item.desc}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ejes */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-display mb-12 text-center spray-tag">Los Ejes</h2>
          {[
  { title: "Biografía y Proyecto de Vida", text: "Un espacio para que cada joven narre su historia, reconozca su recorrido y comience a delinear un proyecto de vida con sentido y dirección propia." },
  { title: "Bienestar / Biología Adolescente", text: "Un abordaje integral del bienestar que integra cuerpo, emociones y procesos biológicos propios de la adolescencia, promoviendo conciencia y autocuidado." },
  { title: "Autoconocimiento / Eneagrama", text: "Un recorrido de exploración interior que, a través del eneagrama y otras herramientas, favorece la comprensión de la propia personalidad y el desarrollo consciente." },
  { title: "Vínculos y Convivencia Democrática", text: "Un espacio para aprender a construir comunidad, fortalecer los vínculos y practicar formas de convivencia basadas en el respeto, la participación y la responsabilidad compartida." }].           
          map((eje, i) =>
          <div key={i} className="flex gap-6 mb-10 graffiti-border pl-6">
              <span className="text-4xl font-display text-primary shrink-0">0{i + 1}</span>
              <div>
                <h3 className="text-xl font-display mb-2">{eje.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-body">{eje.text}</p>
              </div>
            </div>
          )}
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
              ¿Cómo se organiza el <span className="text-primary">mes?</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-6 leading-relaxed">
              El programa tiene una estructura clara que brinda seguridad y, al mismo tiempo, espacio para la experiencia. Cada jornada comienza con movimiento y desayuno compartido. Por la mañana se desarrollan clases y espacios formativos, combinados con labores cotidianas que fomentan responsabilidad y autonomía.
            </p>
            <p className="text-muted-foreground font-body text-lg mb-6 leading-relaxed">
              Por la tarde, los talleres de oficios y arte permiten aprender haciendo, integrando creatividad y habilidades prácticas. A lo largo de la semana se incluyen salidas cercanas y lejanas que amplían el aula hacia la naturaleza y la cultura, enriqueciendo lo trabajado en el espacio grupal.
            </p>
            <p className="text-foreground font-body text-xl font-bold leading-relaxed">
              Es un ritmo equilibrado entre aprendizaje, convivencia y experiencia directa, pensado para sostener un proceso profundo durante todo el mes.
            </p>
          </div>
        </div>
      </section>

      {/* Salidas */}
      <section
        className="relative text-cream"
        style={{ backgroundImage: `url(${wallDark})` }}
      >
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 section-padding">
          <div className="container mx-auto">
            <h2 className="text-4xl font-display text-center mb-16 spray-tag">Expediciones por Sicilia</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {salidas.map((p, i) => (
                <div key={i} className={`border-l-4 ${p.color} pl-6 py-2`}>
                  <h3 className="text-xl font-display mb-3">{p.title}</h3>
                  <p className="text-cream/75 leading-relaxed font-body">{p.text}</p>
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
      Otras claves del Programa
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {destacados.map((member, i) => (
        <div
          key={i}
          className={`${colors[i % colors.length]} p-8 transition-all group hover:-translate-y-1`}
        >
          <h3 className="text-xl font-display mb-1 text-primary-foreground">
            {member.name}
          </h3>
          <span className="text-sm font-bold font-body text-primary-foreground/80">
            {member.origin}
          </span>
          <p className="text-sm leading-relaxed mt-3 font-body text-primary-foreground/90">
            {member.role}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      

      
      <VideoSection title="El Programa en Acción" subtitle="Descubrí cómo es un día en El Año del Salto" />

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground section-padding text-center">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl font-display mb-6">¿Listo para dar el salto?</h2>
          <p className="opacity-80 mb-8 font-body">Primera edición: septiembre 2026, Italia.</p>
          <Link to="/contacto" className="btn-graffiti">Pre-Inscripción</Link>
        </div>
      </section>
    </>);

};

export default Programa;
