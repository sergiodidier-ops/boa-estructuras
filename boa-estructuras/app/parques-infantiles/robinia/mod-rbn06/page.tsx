const fotos = [
  "/fotos/robinia/mod-rbn06/portada.png",
  "/fotos/robinia/mod-rbn06/mod-rbn06.png",
  "/fotos/robinia/mod-rbn06/mod-rbn06-aerea.png",
  "/fotos/robinia/mod-rbn06/mod-rbn06-trasera.png",
];

export default function ModRbn06Page() {
  return (
    <main className="min-h-screen bg-[#f3f0e7] px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black text-[#2d3c23] mb-6">
          RBN06
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
                alt="Modelo RBN06"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/fotos/robinia/mod-rbn06/ficha-tecnica.pdf"
            target="_blank"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-2xl transition"
          >
            Descargar ficha técnica
          </a>
        </div>

      </div>
    </main>
  );
}