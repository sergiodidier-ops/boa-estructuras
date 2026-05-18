export default function ModKsablancaPage() {
  const fotos = [
    "/fotos/metal/mod-ksablanca/portada.png",
    "/fotos/metal/mod-ksablanca/mod-ksablanca.png",
    "/fotos/metal/mod-ksablanca/mod-ksablanca-trasera.png",
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          KSABLANCA
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          Modelo de parque infantil metálico KSABLANCA.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {fotos.map((foto) => (
            <div
              key={foto}
              className="overflow-hidden rounded-3xl shadow-2xl bg-white"
            >
              <img
                src={foto}
                alt="Modelo KSABLANCA"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}