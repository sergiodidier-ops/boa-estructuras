const fotos = [
  "/fotos/robinia/mod-rbn04/portada.png",
  "/fotos/robinia/mod-rbn04/mod-rbn04.png",
  "/fotos/robinia/mod-rbn04/mod-rbn04-trasera.png",
  "/fotos/robinia/mod-rbn04/rbn-04.png",
];

export default function ModRbn04Page() {
  return (
    <main className="min-h-screen bg-[#f3f0e7] px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black text-[#2d3c23] mb-6">
          RBN04
        </h1>

        <p className="text-lg text-stone-700 mb-12">
          Modelo de parque infantil fabricado en madera Robinia.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {fotos.map((foto) => (
            <div
              key={foto}
              className="overflow-hidden rounded-3xl shadow-2xl bg-white"
            >
              <img
                src={foto}
                alt="Modelo RBN04"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}