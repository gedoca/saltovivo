import { useState } from "react";
import { toast } from "sonner";

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
      <section className="bg-earth text-cream section-padding pt-32">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black mb-6">Contacto</h1>
          <p className="text-cream/80 text-lg">
            ¿Tenés preguntas? ¿Querés ser parte del Año del Salto? Escribinos.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Edad</label>
              <input
                type="text"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className="w-full border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="17-19 años"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="¿Qué te gustaría saber sobre El Año del Salto?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 font-medium text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Enviar Mensaje
            </button>
          </form>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">info@saltovivo.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Ubicación</h3>
              <p className="text-muted-foreground text-sm">Italia</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Inicio</h3>
              <p className="text-muted-foreground text-sm">Septiembre 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
