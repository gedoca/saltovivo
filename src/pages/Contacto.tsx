import { useState } from "react";
import { toast } from "sonner";
import wallTexture from "@/assets/wall-texture.png";
import wallDark from "@/assets/wall-dark.png";
import VideoSection from "@/components/VideoSection";

const Contacto = () => {
  const [form, setForm] = useState({ name: "", email: "", age: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    setForm({ name: "", email: "", age: "", message: "" });
  };

  return (
    <>
      {/* Header */}
      <section className="relative text-cream" style={{ backgroundImage: `url(${wallDark})` }}>
        <div className="dark-overlay absolute inset-0" />
        <div className="relative z-10 section-padding pt-32">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl font-display spray-tag mb-6">Contacto</h1>
            <p className="text-cream/80 text-lg font-body">
              ¿Tenés preguntas? ¿Querés ser parte del Año del Salto? Escribinos.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="relative section-padding" style={{ backgroundImage: `url(${wallTexture})` }}>
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 font-body uppercase tracking-wider">Nombre</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-2 border-border bg-card px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 font-body uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-2 border-border bg-card px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 font-body uppercase tracking-wider">Edad</label>
              <input
                type="text"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className="w-full border-2 border-border bg-card px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors"
                placeholder="17-19 años"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 font-body uppercase tracking-wider">Mensaje</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border-2 border-border bg-card px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="¿Qué te gustaría saber sobre El Año del Salto?"
              />
            </div>
            <button type="submit" className="btn-graffiti w-full text-center">
              Enviar Mensaje
            </button>
          </form>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-card border-2 border-border p-6">
              <h3 className="font-display text-lg mb-2">Email</h3>
              <p className="text-muted-foreground text-sm font-body">info@saltovivo.com</p>
            </div>
            <div className="bg-card border-2 border-border p-6">
              <h3 className="font-display text-lg mb-2">Ubicación</h3>
              <p className="text-muted-foreground text-sm font-body">Italia</p>
            </div>
            <div className="bg-card border-2 border-border p-6">
              <h3 className="font-display text-lg mb-2">Inicio</h3>
              <p className="text-muted-foreground text-sm font-body">Septiembre 2026</p>
            </div>
          </div>
        </div>
      </section>

      <VideoSection title="¿Cómo Inscribirte?" subtitle="Te explicamos el proceso paso a paso" />
    </>
  );
};

export default Contacto;
