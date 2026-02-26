import landscapeImg from "@/assets/landscape.png";
import adventureImg from "@/assets/adventure.png";
import wallTexture from "@/assets/wall-texture.png";
import wallDark from "@/assets/wall-dark.png";
import { Link } from "react-router-dom";
import VideoSection from "@/components/VideoSection";

const timeline = [
{ month: "Septiembre", title: "Inicio del Viaje", desc: "Llegada, presentación del grupo y primeras dinámicas de convivencia.", color: "border-primary" },
{ month: "Octubre", title: "Autoconocimiento", desc: "Talleres de psicoterapia, educación emocional y exploración interior.", color: "border-secondary" },
{ month: "Noviembre", title: "Exploración", desc: "Viaje por distintos territorios de Italia, conectando con nuevas realidades.", color: "border-accent" },
{ month: "Diciembre", title: "Integración", desc: "Reflexión final, celebración y proyección de futuro.", color: "border-sky" }];


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
          { title: "Autoconocimiento", text: "Un espacio de acompañamiento para que cada joven explore su mundo interno, fortalezca su autonomía y desarrolle mayor claridad sobre quién es." },
          { title: "Viaje de Exploración", text: "Un recorrido por distintos territorios y experiencias que amplían la mirada, conectan con la diversidad del mundo." },
          { title: "Convivencia en Comunidad", text: "Vivir juntos implica escucharse, decidir en común y aprender a habitar la diferencia desde el respeto." },
          { title: "Habilidades para la Vida", text: "La oportunidad de desarrollar competencias centrales para la vida adulta." }].
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