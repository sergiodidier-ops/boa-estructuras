const fotos = [
  "/fotos/robinia/mod-rbn01/portada.PNG",
  "/fotos/robinia/mod-rbn01/mod-rbn01.png",
  "/fotos/robinia/mod-rbn01/mod-rbn01-aerea.png",
];

export default function ModRbn01Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          RBN01
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          Modelo de parque infantil Robinia RBN01.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {fotos.map((foto) => (
            <div
              key={foto}
              className="overflow-hidden rounded-3xl shadow-2xl bg-white"
            >
              <img
                src={foto}
                alt="Modelo RBN01"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/fotos/robinia/mod-rbn01/ficha-tecnica.pdf"
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