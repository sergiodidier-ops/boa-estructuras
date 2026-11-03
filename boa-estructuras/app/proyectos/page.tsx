export default function ProyectosPage() {
  const proyectos = [
    {
      nombre: "IES La Mar – Jávea",
      ubicacion: "Jávea, Alicante",
      tipo: "Fabricación e instalación",
      descripcion:
        "Proyecto realizado por BOA Estructuras en las instalaciones del IES La Mar de Jávea.",
      imagen: "/fotos/proyectos/ies-la-mar-javea/IMG_7870.jpeg",
      enlace: "/proyectos/ies-la-mar-javea",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            BOA Estructuras
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            PROYECTOS
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Algunos de los proyectos realizados por BOA Estructuras en
            parques, centros educativos, instalaciones deportivas y espacios
            públicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.nombre}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.nombre}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-7">
                <span className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  Proyecto
                </span>

                <h2 className="text-3xl font-black text-gray-900 mt-2">
                  {proyecto.nombre}
                </h2>

                <p className="text-gray-500 font-semibold mt-2">
                  {proyecto.ubicacion}
                </p>

                <div className="w-10 h-[3px] bg-green-500 mt-4 rounded-full" />

                <p className="text-sm font-semibold text-gray-500 mt-5">
                  {proyecto.tipo}
                </p>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {proyecto.descripcion}
                </p>

                <a
                  href={proyecto.enlace}
                  className="inline-block mt-6 bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}