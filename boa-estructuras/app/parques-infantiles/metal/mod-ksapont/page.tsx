export default function ModKsapontPage() {
  const fotos = [
    "/fotos/metal/mod-ksapont/portada.png",
    "/fotos/metal/mod-ksapont/mod-ksapont.png",
    "/fotos/metal/mod-ksapont/aerea.png",
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          KSAPONT
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          Modelo de parque infantil metálico KSAPONT.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fotos.map((foto) => (
            <div
              key={foto}
              className="overflow-hidden rounded-3xl shadow-2xl bg-white"
            >
              <img
                src={foto}
                alt="Modelo KSAPONT"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/fotos/metal/mod-ksapont/ficha-tecnica.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl transition"
          >
            Descargar ficha técnica
          </a>
        </div>

      </div>
    </main>
  );
}