import communityImg from "@/assets/community.png";
import adventureImg from "@/assets/adventure.png";
import { Link } from "react-router-dom";

const values = [
  { title: "Escucha", desc: "Crear espacio para que cada voz sea oída y cada historia importa." },
  { title: "Respeto", desc: "Habitar la diferencia desde el cuidado mutuo y la aceptación." },
  { title: "Autenticidad", desc: "Ser quienes somos sin máscaras, en un espacio seguro." },
  { title: "Crecimiento", desc: "Desafiarnos juntos para ir más allá de lo conocido." },
];

const Comunidad = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src={communityImg} alt="Comunidad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient-overlay" />
        <div className="relative z-10 container mx-auto px-6 lg:px-24 pb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cream/80 mb-4">Comunidad</p>
          <h1 className="text-5xl md:text-7xl font-display font-black text-cream">
            Jóvenes distintos,<br />un mismo viaje
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">
              Un espacio <span className="accent-underline">compartido</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Donde cada joven es acompañado a descubrir su voz, su lugar y su forma de estar en el mundo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La convivencia es uno de los ejes centrales del proyecto. Vivir juntos permite que el aprendizaje ocurra en la experiencia real: en las comidas compartidas, en las tareas cotidianas, en los vínculos que se construyen.
            </p>
          </div>
          <img src={adventureImg} alt="Aventura juntos" className="w-full h-[350px] object-cover" />
        </div>
      </section>

      {/* Values */}
      <section className="bg-earth text-cream section-padding">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center">
                <span className="text-5xl font-display font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-bold mt-4 mb-3">{v.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary section-padding text-center">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl font-display font-bold mb-6">Sé parte de esta comunidad</h2>
          <p className="text-muted-foreground mb-8">Abrimos las puertas a jóvenes de todo el mundo.</p>
          <Link
            to="/contacto"
            className="inline-block bg-accent text-accent-foreground px-10 py-4 font-medium text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </>
  );
};

export default Comunidad;
