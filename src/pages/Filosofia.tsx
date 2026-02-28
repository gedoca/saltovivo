import wallTexture from "@/assets/wall-texture.png";
import wallDark from "@/assets/wall-dark.png";
import communityImg from "@/assets/community.png";
import campfireImg from "@/assets/campfire.png";
import { Link } from "react-router-dom";
import VideoSection from "@/components/VideoSection";

const principles = [
  {
    title: "El aprendizaje es vivencia",
    text: "No se aprende sólo con la mente. Se aprende con el cuerpo, con las emociones, con los vínculos. La vida cotidiana es el mejor aula.",
    color: "border-primary",
  },
  {
    title: "Cada joven tiene su propio camino",
    text: "No hay una única forma de crecer. Acompañamos procesos singulares, respetando los tiempos y las búsquedas de cada persona.",
    color: "border-secondary",
  },
  {
    title: "La comunidad transforma",
    text: "Estar con otros nos desafía, nos refleja y nos enriquece. La convivencia es un espacio de aprendizaje profundo.",
    color: "border-accent",
  },
  {
    title: "El sentido se construye",
    text: "No se encuentra un sentido de vida, se construye. A través de la exploración, la reflexión y la acción consciente.",
    color: "border-sky",
  },
];

const Filosofia = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end overflow-hidden"
        style={{ backgroundImage: `url(${wallTexture})` }}
      >
        <div className="absolute inset-0 bg-background/50" />
        <div className="relative z-10 container mx-auto px-6 lg:px-24 pb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-primary font-bold mb-4 font-body">Nuestra Visión</p>
          <h1 className="text-5xl md:text-7xl font-display spray-tag">
            Filosofía
          </h1>
          <p className="text-muted-foreground max-w-lg mt-4 text-lg font-body">
            Un tiempo y un lugar para que jóvenes puedan detenerse, encontrarse y dar el salto hacia una vida elegida con mayor conciencia.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-8 spray-tag">
            ¿Por qué <span className="text-primary">El Salto</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
            Vivimos en un mundo que les pide a los jóvenes que elijan rápido, que se definan pronto, que sepan qué quieren antes de haber explorado quiénes son.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
            Nosotros creemos que antes de elegir un camino, hay que detenerse. Mirar adentro. Encontrarse con otros. Probar. Equivocarse. Crear.
          </p>
          <p className="text-foreground text-xl leading-relaxed font-body font-bold">
            El Año del Salto es ese espacio de pausa activa: un lugar donde crecer es el centro.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section
        className="relative text-cream"
        style={{ backgroundImage: `url(${wallDark})` }}
      >
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 section-padding">
          <div className="container mx-auto">
            <h2 className="text-4xl font-display text-center mb-16 spray-tag">Nuestros Principios</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {principles.map((p, i) => (
                <div key={i} className={`border-l-4 ${p.color} pl-6 py-2`}>
                  <h3 className="text-xl font-display mb-3">{p.title}</h3>
                  <p className="text-cream/75 leading-relaxed font-body">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Image */}
      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={communityImg} alt="Comunidad" className="w-full h-[400px] object-cover shadow-xl" />
            <div className="absolute -bottom-3 -left-3 w-full h-full border-4 border-accent -z-10" />
          </div>
          <div>
            <blockquote className="text-3xl font-display leading-snug mb-6 spray-tag">
              "No se trata de encontrar respuestas, sino de aprender a vivir las preguntas."
            </blockquote>
            <p className="text-muted-foreground font-body text-lg">
              Nuestro enfoque integra psicoterapia, educación emocional, pedagogías alternativas y la sabiduría del viaje. Un acompañamiento humano, no una fórmula.
            </p>
          </div>
        </div>
      </section>

      {/* Campfire Image Section */}
      <section className="relative">
        <img src={campfireImg} alt="Fogón nocturno con jóvenes" className="w-full h-[50vh] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-cream text-2xl font-display spray-tag">El fuego que nos une</p>
        </div>
      </section>

      <VideoSection title="Nuestra Visión" subtitle="La filosofía detrás de El Año del Salto" />

      {/* CTA */}
      <section className="bg-primary text-primary-foreground section-padding text-center">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl font-display mb-6">Sé parte del cambio</h2>
          <p className="opacity-80 mb-8 font-body">Un viaje que transforma desde adentro.</p>
          <Link to="/contacto" className="inline-block bg-accent text-accent-foreground px-10 py-4 font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform transform skew-x-[-2deg]">
            Contáctanos
          </Link>
        </div>
      </section>
    </>
  );
};

export default Filosofia;
