export default function ModKracoviaPage() {
  const fotos = [
    "/fotos/metal/mod-kracovia/portada.png",
    "/fotos/metal/mod-kracovia/mod-kracovia.png",
    "/fotos/metal/mod-kracovia/mod-kracovia-lateral.png",
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          KRACOVIA
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          Modelo de parque infantil metálico KRACOVIA.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {fotos.map((foto) => (
            <div
              key={foto}
              className="overflow-hidden rounded-3xl shadow-2xl bg-white"
            >
              <img
                src={foto}
                alt="Modelo KRACOVIA"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}