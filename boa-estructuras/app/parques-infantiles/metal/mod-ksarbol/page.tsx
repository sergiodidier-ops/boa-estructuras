export default function ModKsarbolPage() {
  const fotos = [
    "/fotos/metal/mod-ksarbol/portada.png",
    "/fotos/metal/mod-ksarbol/mod-ksarbol.png",
    "/fotos/metal/mod-ksarbol/mod-ksarbol-trasera.png",
    "/fotos/metal/mod-ksarbol/mod-ksarbol-aerea.png",
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          KSARBOL
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          Modelo de parque infantil metálico KSARBOL.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {fotos.map((foto) => (
            <div
              key={foto}
              className="overflow-hidden rounded-3xl shadow-2xl bg-white"
            >
              <img
                src={foto}
                alt="Modelo KSARBOL"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/fotos/metal/mod-ksarbol/ficha-tecnica.pdf"
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