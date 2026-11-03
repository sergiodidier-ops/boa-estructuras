export default function BarandillasPage() {
  const modelos = [
    {
      nombre: "BOA137",
      descripcion:
        "Barandilla metálica de seguridad para puentes, viaductos y pasos elevados.",
      imagen: "/fotos/cerramientos/barandillas/boa137/portada.jpg",
      enlace: "/cerramientos/barandillas/boa137",
    },
    {
      nombre: "BOA138",
      descripcion:
        "Barandilla urbana metálica con panel de retícula, resistente y de estética moderna.",
      imagen: "/fotos/cerramientos/barandillas/boa138/portada.jpg",
      enlace: "/cerramientos/barandillas/boa138",
    },
    {
      nombre: "BOA139",
      descripcion:
        "Barandilla urbana peatonal de barrotes verticales para calles, colegios y zonas de paso.",
      imagen: "/fotos/cerramientos/barandillas/boa139/portada.jpg",
      enlace: "/cerramientos/barandillas/boa139",
    },
    {
      nombre: "BOA140",
      descripcion:
        "Barandilla urbana recta de acero galvanizado para protección y canalización peatonal.",
      imagen: "/fotos/cerramientos/barandillas/boa140/portada.jpg",
      enlace: "/cerramientos/barandillas/boa140",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Cerramientos
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            BARANDILLAS
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Barandillas metálicas para protección de peatones, puentes,
            pasos elevados, calles y zonas con desnivel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modelos.map((modelo) => (
            <div
              key={modelo.nombre}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={modelo.imagen}
                  alt={`Barandilla ${modelo.nombre}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-7">
                <span className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  Modelo
                </span>

                <h2 className="text-3xl font-black text-gray-900 mt-1">
                  {modelo.nombre}
                </h2>

                <div className="w-10 h-[3px] bg-green-500 mt-3 rounded-full" />

                <p className="text-gray-600 mt-5 leading-relaxed min-h-[120px]">
                  {modelo.descripcion}
                </p>

                <a
                  href={modelo.enlace}
                  className="inline-block mt-6 bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Ver modelo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}