import { Link } from "react-router-dom";
import heroPerson from "@/assets/hero-person.png";
import wallTexture from "@/assets/wall-texture.png";
import wallDark from "@/assets/wall-dark.png";
import landscapeImg from "@/assets/landscape.png";
import communityImg from "@/assets/community.png";
import VideoSection from "@/components/VideoSection";

const pillars = [
  { number: "01", title: "Autoconocimiento", desc: "Explorá tu mundo interno, fortalecé tu autonomía y descubrí quién sos.", color: "text-primary" },
  { number: "02", title: "Exploración", desc: "Recorridos por territorios que amplían la mirada y despiertan preguntas.", color: "text-secondary" },
  { number: "03", title: "Convivencia", desc: "Vivir juntos: escucharse, decidir en común y habitar la diferencia.", color: "text-accent" },
  { number: "04", title: "Habilidades", desc: "Competencias centrales para la vida adulta que abren posibilidades.", color: "text-sky" },
];

const Index = () => {
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
              Comienza tu viaje
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[1.1] mb-6 spray-tag">
              Dá el<br />Salto
            </h1>
            <p className="text-muted-foreground max-w-md text-lg mb-8 font-body">
              30 jóvenes juntos en un viaje interior en busca de sentido, comunidad y transformación.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/programa" className="btn-graffiti">
                Saber Más
              </Link>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdfxyVXZCFToD-vTNNwk2vEEyF1nx70qZ7TOwBE3TPKgwjZKA/viewform" className="btn-graffiti-outline">
                Pre-Inscripción
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in-up">
            <img
              src={heroPerson}
              alt="Joven saltando"
              className="max-h-[70vh] w-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Un Viaje */}
      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Un <span className="accent-underline">Viaje</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6 font-body">
              El Año del Salto es un programa para 30 jóvenes de entre 17 y 19 años que eligen vivir una experiencia distinta antes de seguir tomando decisiones importantes sobre su futuro.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              Un viaje para conocer el mundo desde otro ritmo, conocerse a sí mismos con mayor profundidad y explorar preguntas sobre el sentido, la vocación y el modo de habitar la vida adulta.
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
                Un mes juntos
              </h2>
              <p className="text-cream/80 leading-relaxed text-lg mb-6 font-body">
                En septiembre de 2026 se realizará la primera edición donde la convivencia es uno de los ejes centrales del proyecto.
              </p>
              <p className="text-cream/70 leading-relaxed mb-8 font-body">
                Vivir juntos permite que el aprendizaje ocurra en la experiencia real: en las comidas compartidas, en las tareas cotidianas, en los vínculos que se construyen.
              </p>
              <Link to="/programa" className="btn-graffiti">
                Saber Más
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
            Los Ejes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="bg-card/80 backdrop-blur-sm p-6 border-l-4 border-primary hover:border-accent transition-colors group">
                <span className={`text-5xl font-display ${pillar.color}`}>
                  {pillar.number}
                </span>
                <h3 className="text-xl font-display mt-4 mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <VideoSection
        title="Conocé el Proyecto"
        subtitle="Un viaje que cambia vidas — primera edición septiembre 2026"
      />

      {/* CTA */}
      <section className="bg-primary text-primary-foreground section-padding text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display mb-6">
            ¿Estás listo para saltar?
          </h2>
          <p className="opacity-80 mb-8 font-body text-lg">
            Jóvenes distintos, un mismo viaje. Septiembre 2026, Italia.
          </p>
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdfxyVXZCFToD-vTNNwk2vEEyF1nx70qZ7TOwBE3TPKgwjZKA/viewform" className="inline-block bg-accent text-accent-foreground px-10 py-4 font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform transform skew-x-[-2deg]">
            Quiero Participar
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
