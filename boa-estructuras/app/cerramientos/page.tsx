export default function CerramientosPage() {
  const categorias = [
    {
      nombre: "Cerramientos deportivos",
      descripcion:
        "Soluciones resistentes para campos de fútbol, pistas deportivas, colegios y recintos de uso intensivo.",
      enlace: "/cerramientos/deportivos",
    },
    {
      nombre: "Vallados",
      descripcion:
        "Vallados metálicos para espacios urbanos, industriales, residenciales y zonas públicas.",
      enlace: "/cerramientos/vallados",
    },
    {
      nombre: "Barandillas",
      descripcion:
        "Barandillas de seguridad y protección para calles, puentes, pasos peatonales y zonas con desnivel.",
      enlace: "/cerramientos/barandillas",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-gray-400 font-semibold">
            Seguridad · Protección · Delimitación
          </span>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mt-4">
            CERRAMIENTOS
          </h1>

          <div className="w-20 h-1 bg-green-500 mx-auto mt-6 rounded-full" />

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-7 leading-relaxed">
            Soluciones de cerramiento diseñadas para adaptarse a instalaciones
            deportivas, espacios urbanos, zonas industriales y áreas públicas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <div
              key={categoria.nombre}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="mb-6">
                <span className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  Cerramientos
                </span>

                <h2 className="text-3xl font-black text-gray-900 mt-2 leading-tight">
                  {categoria.nombre}
                </h2>

                <div className="w-12 h-[3px] bg-green-500 mt-4 rounded-full" />
              </div>

              <p className="text-gray-600 leading-relaxed min-h-[120px]">
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