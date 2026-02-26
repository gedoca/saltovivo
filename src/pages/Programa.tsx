import landscapeImg from "@/assets/landscape.png";
import adventureImg from "@/assets/adventure.png";
import { Link } from "react-router-dom";

const timeline = [
  { month: "Septiembre", title: "Inicio del Viaje", desc: "Llegada, presentación del grupo y primeras dinámicas de convivencia." },
  { month: "Octubre", title: "Autoconocimiento", desc: "Talleres de psicoterapia, educación emocional y exploración interior." },
  { month: "Noviembre", title: "Exploración", desc: "Viaje por distintos territorios de Italia, conectando con nuevas realidades." },
  { month: "Diciembre", title: "Integración", desc: "Reflexión final, celebración y proyección de futuro." },
];

const Programa = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src={adventureImg} alt="Aventura" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient-overlay" />
        <div className="relative z-10 container mx-auto px-6 lg:px-24 pb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cream/80 mb-4">El Programa</p>
          <h1 className="text-5xl md:text-7xl font-display font-black text-cream">
            El Año del Salto
          </h1>
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">
              Un programa de <span className="accent-underline">transformación</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Para 30 jóvenes de entre 17 y 19 años que eligen vivir una experiencia distinta antes de seguir tomando decisiones importantes sobre su futuro.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Un viaje para conocer el mundo desde otro ritmo, conocerse a sí mismos con mayor profundidad y explorar preguntas sobre el sentido, la vocación y el modo de habitar la vida adulta.
            </p>
          </div>
          <div>
            <img src={landscapeImg} alt="Paisaje italiano" className="w-full h-[350px] object-cover" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-earth text-cream section-padding">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Cronograma</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, i) => (
              <div key={i} className="border-t border-cream/20 pt-6">
                <span className="text-sm uppercase tracking-wider text-primary">{item.month}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars detail */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Los Ejes</h2>
          
          {[
            { title: "Autoconocimiento", text: "Un espacio de acompañamiento para que cada joven explore su mundo interno, fortalezca su autonomía y desarrolle mayor claridad sobre quién es y qué desea." },
            { title: "Viaje de Exploración", text: "Un recorrido por distintos territorios y experiencias que amplían la mirada, conectan con la diversidad del mundo y despiertan nuevas preguntas e intereses." },
            { title: "Convivencia en Comunidad", text: "Vivir juntos implica escucharse, decidir en común y aprender a habitar la diferencia desde el respeto y el cuidado mutuo." },
            { title: "Habilidades para la Vida", text: "La oportunidad de desarrollar competencias centrales para la vida adulta, que nos abran posibilidades y nos permitan crecer." },
          ].map((eje, i) => (
            <div key={i} className="flex gap-6 mb-10">
              <span className="text-4xl font-display font-black text-primary shrink-0">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-xl font-bold mb-2">{eje.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{eje.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary section-padding text-center">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl font-display font-bold mb-6">¿Listo para dar el salto?</h2>
          <p className="text-muted-foreground mb-8">Primera edición: septiembre 2026, Italia.</p>
          <Link
            to="/contacto"
            className="inline-block bg-accent text-accent-foreground px-10 py-4 font-medium text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Pre-Inscripción
          </Link>
        </div>
      </section>
    </>
  );
};

export default Programa;
