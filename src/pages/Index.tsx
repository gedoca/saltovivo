import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-leap.png";
import landscapeImg from "@/assets/landscape.png";
import communityImg from "@/assets/community.png";

const pillars = [
  { number: "01", title: "Autoconocimiento", desc: "Un espacio de acompañamiento para que cada joven explore su mundo interno y fortalezca su autonomía." },
  { number: "02", title: "Viaje de Exploración", desc: "Un recorrido por distintos territorios que amplían la mirada y despiertan nuevas preguntas." },
  { number: "03", title: "Convivencia", desc: "Vivir juntos implica escucharse, decidir en común y aprender a habitar la diferencia." },
  { number: "04", title: "Habilidades para la Vida", desc: "La oportunidad de desarrollar competencias centrales para la vida adulta." },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Joven saltando" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient-overlay" />
        <div className="relative z-10 container mx-auto px-6 lg:px-24">
          <p className="text-sm uppercase tracking-[0.3em] text-cream/80 mb-4 animate-fade-in">
            Comienza tu viaje
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-cream leading-[0.95] mb-6 animate-fade-in-up">
            Dá el<br />Salto
          </h1>
          <p className="text-cream/80 max-w-lg text-lg mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            30 jóvenes juntos en un viaje interior en busca de sentido, comunidad y transformación.
          </p>
          <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/programa"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-medium text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Saber Más
            </Link>
            <Link
              to="/contacto"
              className="inline-block border border-cream/40 text-cream px-8 py-3 font-medium text-sm uppercase tracking-wider hover:bg-cream/10 transition-colors"
            >
              Pre-Inscripción
            </Link>
          </div>
        </div>
      </section>

      {/* Un Viaje */}
      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="number-watermark absolute -left-4">01</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 relative">
              Un <span className="accent-underline">Viaje</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              El Año del Salto es un programa para 30 jóvenes de entre 17 y 19 años que eligen vivir una experiencia distinta antes de seguir tomando decisiones importantes sobre su futuro.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Un viaje como el tiempo para comenzar a conocer el mundo desde otro ritmo, conocerse a sí mismos con mayor profundidad y explorar preguntas sobre el sentido, la vocación y el modo de habitar la vida adulta.
            </p>
          </div>
          <div className="relative">
            <img src={landscapeImg} alt="Paisaje" className="w-full h-[400px] object-cover" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary" />
          </div>
        </div>
      </section>

      {/* Un mes juntos */}
      <section className="bg-earth text-cream section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={communityImg} alt="Comunidad" className="w-full h-[400px] object-cover" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Un mes juntos
            </h2>
            <p className="text-cream/80 leading-relaxed text-lg mb-6">
              En septiembre de 2026 se realizará la primera edición donde la convivencia es uno de los ejes centrales del proyecto.
            </p>
            <p className="text-cream/80 leading-relaxed mb-8">
              Vivir juntos permite que el aprendizaje no quede en lo teórico, sino que ocurra en la experiencia real: en las comidas compartidas, en las tareas cotidianas, en los acuerdos, los conflictos y los vínculos que se construyen.
            </p>
            <Link
              to="/programa"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-medium text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Saber Más
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            Los Ejes del Programa
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="group">
                <span className="text-5xl font-display font-black text-secondary group-hover:text-primary transition-colors">
                  {pillar.number}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary section-padding text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Un tiempo y un lugar para detenerse, encontrarse y dar el salto.
          </h2>
          <p className="text-muted-foreground mb-8">
            Jóvenes distintos, un mismo viaje. Septiembre 2026.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-accent text-accent-foreground px-10 py-4 font-medium text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Conocer Más
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
