export default function DeportePage() {
  const categorias = [
    {
      nombre: "Pistas deportivas",
      descripcion:
        "Pistas y estructuras deportivas para colegios, parques, recintos públicos y zonas de uso intensivo.",
      enlace: "/deporte/pistas-deportivas",
    },
    {
      nombre: "Workout",
      descripcion:
        "Equipamiento de entrenamiento al aire libre para calistenia, ejercicio funcional y zonas deportivas.",
      enlace: "/deporte/workout",
    },
    {
      nombre: "Elementos deportivos",
      descripcion:
        "Porterías, canastas y otros elementos deportivos para completar instalaciones y espacios de juego.",
      enlace: "/deporte/elementos-deportivos",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-gray-400 font-semibold">
            BOA Estructuras
          </span>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mt-4">
            DEPORTE
          </h1>

          <div className="w-20 h-1 bg-green-500 mx-auto mt-6 rounded-full" />

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-7 leading-relaxed">
            Equipamiento deportivo diseñado para espacios públicos,
            instalaciones escolares, parques y zonas deportivas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <div
              key={categoria.nombre}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-gray-400">
                Deporte
              </span>

              <h2 className="text-3xl font-black text-gray-900 mt-2 leading-tight">
                {categoria.nombre}
              </h2>

              <div className="w-12 h-[3px] bg-green-500 mt-4 rounded-full" />

              <p className="text-gray-600 mt-6 leading-relaxed min-h-[120px]">
                {categoria.descripcion}
              </p>

              <a
                href={categoria.enlace}
                className="inline-block mt-8 bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Ver modelos
              </a>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}