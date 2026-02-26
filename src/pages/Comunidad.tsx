import communityImg from "@/assets/community.png";
import adventureImg from "@/assets/adventure.png";
import wallTexture from "@/assets/wall-texture.png";
import wallDark from "@/assets/wall-dark.png";
import { Link } from "react-router-dom";
import VideoSection from "@/components/VideoSection";

const values = [
{ title: "Escucha", desc: "Crear espacio para que cada voz sea oída y cada historia importa.", color: "text-primary" },
{ title: "Respeto", desc: "Habitar la diferencia desde el cuidado mutuo y la aceptación.", color: "text-secondary" },
{ title: "Autenticidad", desc: "Ser quienes somos sin máscaras, en un espacio seguro.", color: "text-accent" },
{ title: "Crecimiento", desc: "Desafiarnos juntos para ir más allá de lo conocido.", color: "text-sky" }];


const Comunidad = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src={communityImg} alt="Comunidad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient-overlay" />
        <div className="relative z-10 container mx-auto px-6 lg:px-24 pb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-4 font-body">Comunidad</p>
          <h1 className="text-5xl md:text-7xl font-display text-cream spray-tag">
            Jóvenes distintos,<br />un mismo viaje
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding" style={{ backgroundImage: `url(${wallTexture})` }}>
        <div className="absolute inset-0 bg-background/75 opacity-0" />
        <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display mb-6">
              Un espacio <span className="accent-underline">compartido</span>
            </h2>
            <p className="leading-relaxed text-lg mb-4 font-body font-bold text-[#212121]">
              Donde cada joven es acompañado a descubrir su voz, su lugar y su forma de estar en el mundo.
            </p>
            <p className="leading-relaxed font-body font-bold text-neutral-900">
              La convivencia es uno de los ejes centrales. Vivir juntos permite que el aprendizaje ocurra en la experiencia real.
            </p>
          </div>
          <div className="relative">
            <img src={adventureImg} alt="Aventura juntos" className="w-full h-[350px] object-cover shadow-xl" />
            <div className="absolute -bottom-3 -right-3 w-full h-full border-4 border-secondary -z-10" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative text-cream" style={{ backgroundImage: `url(${wallDark})` }}>
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 section-padding">
          <div className="container mx-auto">
            <h2 className="text-4xl font-display text-center mb-16 spray-tag">Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) =>
              <div key={i} className="text-center">
                  <span className={`text-6xl font-display ${v.color}`}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-display mt-4 mb-3">{v.title}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed font-body">{v.desc}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <VideoSection title="Historias de Comunidad" subtitle="Voces de jóvenes que ya dieron el salto" />

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground section-padding text-center">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl font-display mb-6">Sé parte de esta comunidad</h2>
          <p className="opacity-80 mb-8 font-body">Abrimos las puertas a jóvenes de todo el mundo.</p>
          <Link to="/contacto" className="btn-graffiti">Contáctanos</Link>
        </div>
      </section>
    </>);

};

export default Comunidad;