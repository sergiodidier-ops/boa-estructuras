const modelos = [
  {
    nombre: "KDIZ",
    imagen: "/fotos/madera/mod-kdiz/portada.png",
    enlace: "/parques-infantiles/madera/mod-kdiz",
  },
];

export default function MaderaPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-[0.35em] text-amber-700 font-medium">
            BOA ESTRUCTURAS
          </span>

          <h1 className="text-6xl font-black text-stone-900 mt-4 tracking-tight">
            Serie Madera
          </h1>

          <div className="w-20 h-[3px] bg-amber-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {modelos.map((modelo) => (
            <a
              key={modelo.nombre}
              href={modelo.enlace}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={modelo.imagen}
                  alt={modelo.nombre}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <span className="text-xs uppercase tracking-[0.3em] text-amber-700 font-semibold">
                  Serie
                </span>

                <h2 className="text-3xl font-black text-stone-900 mt-3">
                  {modelo.nombre}
                </h2>

                <div className="w-14 h-[3px] bg-amber-600 rounded-full mt-4 mb-6" />

                <span className="inline-block bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold">
                  Ver modelo
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}