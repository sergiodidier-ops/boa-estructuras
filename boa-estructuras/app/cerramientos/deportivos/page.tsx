export default function CerramientosDeportivosPage() {
  const modelos = [
    {
      nombre: "BOA128",
      descripcion:
        "Cerramiento metálico de malla electrosoldada para instalaciones deportivas y recintos de seguridad.",
      imagen: "/fotos/cerramientos/boa128/portada.jpg",
      enlace: "/cerramientos/deportivos/boa128",
    },
    {
      nombre: "BOA129",
      descripcion:
        "Cerramiento deportivo de gran formato con malla electrosoldada y estructura reforzada.",
      imagen: "/fotos/cerramientos/boa129/portada.jpg",
      enlace: "/cerramientos/deportivos/boa129",
    },
    {
      nombre: "BOA130",
      descripcion:
        "Valla perimetral deportiva galvanizada para separación entre terreno de juego y público.",
      imagen: "/fotos/cerramientos/boa130/portada.jpg",
      enlace: "/cerramientos/deportivos/boa130",
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
            CERRAMIENTOS DEPORTIVOS
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Soluciones resistentes y duraderas para campos de fútbol,
            pistas deportivas, colegios y recintos de uso intensivo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modelos.map((modelo) => (
            <div
              key={modelo.nombre}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={modelo.imagen}
                  alt={`Modelo ${modelo.nombre}`}
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

                <p className="text-gray-600 mt-5 leading-relaxed min-h-[96px]">
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