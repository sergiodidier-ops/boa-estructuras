const fotos = [
  "/fotos/madera/mod-kli/portada.png",
  "/fotos/madera/mod-kli/mod-kli.png",
  "/fotos/madera/mod-kli/mod-kli-vista.png",
];

export default function ModKliPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          KLI
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          Modelo de parque infantil de madera KLI.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {fotos.map((foto) => (
            <div
              key={foto}
              className="overflow-hidden rounded-3xl shadow-2xl bg-white"
            >
              <img
                src={foto}
                alt="Modelo KLI"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/fotos/madera/mod-kli/ficha-tecnica.pdf"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Descargar ficha técnica
          </a>
        </div>

      </div>
    </main>
  );
}