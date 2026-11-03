export default function PistasDeportivasPage() {
  const modelos = [
    {
      nombre: "BOA117",
      modelo: "MOD-HP1",
      tipo: "Pista deportiva",
      descripcion:
        "Pista deportiva diseñada para instalaciones exteriores, colegios, parques y espacios deportivos de uso público.",
      imagen: "/fotos/deporte/pistas-deportivas/boa117/portada.png",
      enlace: "/deporte/pistas-deportivas/boa117",
    },
    {
      nombre: "BOA118",
      modelo: "MOD-HP2",
      tipo: "Pista deportiva",
      descripcion:
        "Pista deportiva multiuso para espacios públicos y zonas deportivas.",
      imagen: "/fotos/deporte/pistas-deportivas/boa118/portada.png",
      enlace: "/deporte/pistas-deportivas/boa118",
    },
    {
      nombre: "BOA119",
      modelo: "MOD-HP3",
      tipo: "Pista deportiva",
      descripcion:
        "Pista deportiva exterior preparada para uso intensivo y diferentes actividades deportivas.",
      imagen: "/fotos/deporte/pistas-deportivas/boa119/portada.png",
      enlace: "/deporte/pistas-deportivas/boa119",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Deporte
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            PISTAS DEPORTIVAS
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Soluciones deportivas para instalaciones exteriores,
            colegios, parques y espacios públicos.
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
                  alt={`${modelo.modelo} ${modelo.nombre}`}
                  className="w-full h-full object-contain hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-7">
                <span className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  {modelo.tipo}
                </span>

                <h2 className="text-3xl font-black text-gray-900 mt-1">
                  {modelo.nombre}
                </h2>

                <p className="text-sm font-semibold text-gray-500 mt-1">
                  {modelo.modelo}
                </p>

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