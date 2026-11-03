export default function ValladosPage() {
  const modelos = [
    {
      nombre: "BOA131",
      descripcion:
        "Valla metálica de lamas verticales con diseño moderno, resistente y de difícil escalada.",
      imagen: "/fotos/cerramientos/vallados/boa131/portada.jpg",
      enlace: "/cerramientos/vallados/boa131",
    },
    {
      nombre: "BOA132",
      descripcion:
        "Valla metálica de barras verticales galvanizadas, robusta y especialmente indicada para instalaciones deportivas.",
      imagen: "/fotos/cerramientos/vallados/boa132/portada.jpg",
      enlace: "/cerramientos/vallados/boa132",
    },
    {
      nombre: "BOA133",
      descripcion:
        "Valla urbana metálica con diseño decorativo en cruz para protección y delimitación de zonas peatonales.",
      imagen: "/fotos/cerramientos/vallados/boa133/portada.jpg",
      enlace: "/cerramientos/vallados/boa133",
    },
    {
      nombre: "BOA134",
      descripcion:
        "Valla urbana de barrotes verticales diseñada para calles, colegios y zonas de tránsito peatonal.",
      imagen: "/fotos/cerramientos/vallados/boa134/portada.jpg",
      enlace: "/cerramientos/vallados/boa134",
    },
    {
      nombre: "BOA135",
      descripcion:
        "Vallado modular de chapa perforada que combina privacidad, resistencia y una estética moderna.",
      imagen: "/fotos/cerramientos/vallados/boa135/portada.jpg",
      enlace: "/cerramientos/vallados/boa135",
    },
    {
      nombre: "BOA136",
      descripcion:
        "Panel de malla electrosoldada plegada con gran resistencia y múltiples posibilidades de acabado.",
      imagen: "/fotos/cerramientos/vallados/boa136/portada.jpg",
      enlace: "/cerramientos/vallados/boa136",
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
            VALLADOS
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Soluciones de vallado metálico para espacios urbanos,
            instalaciones deportivas, zonas industriales, colegios,
            urbanizaciones y recintos públicos y privados.
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
                  alt={`Vallado ${modelo.nombre}`}
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