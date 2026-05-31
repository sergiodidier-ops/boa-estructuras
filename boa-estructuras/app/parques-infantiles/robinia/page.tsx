type Modelo = {
  nombre: string;
  imagen: string;
  enlace: string;
};

const modelos: Modelo[] = [
  {
    nombre: "RBN01",
    imagen: "/fotos/robinia/mod-rbn01/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn01",
  },
];

export default function RobiniaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef5e7] via-[#f6f4ec] to-[#e8efe0] px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-800 text-sm font-semibold tracking-widest uppercase">
            Serie Natural
          </span>

          <h1 className="text-7xl font-black text-[#2d3c23] mt-8 tracking-tight">
            ROBINIA
          </h1>

          <div className="w-28 h-1 bg-green-700 mx-auto mt-6 rounded-full"></div>

          <p className="text-xl text-stone-700 mt-8 max-w-4xl mx-auto leading-relaxed">
            Parques infantiles fabricados en madera Robinia de alta durabilidad,
            diseñados para integrarse de forma natural en parques, jardines y
            espacios públicos.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {modelos.map((modelo) => (
            <a
              key={modelo.nombre}
              href={modelo.enlace}
              className="group bg-white/90 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl border border-green-100 transition duration-300"
            >
              <div className="bg-gradient-to-b from-[#f7f3e9] to-[#eef5e7] p-6">
                <img
                  src={modelo.imagen}
                  alt={modelo.nombre}
                  className="w-full h-72 object-contain group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-8">
                <span className="text-xs uppercase tracking-[0.3em] text-green-700">
                  Serie Robinia
                </span>

                <h2 className="text-3xl font-black text-[#2d3c23] mt-3">
                  {modelo.nombre}
                </h2>

                <div className="w-14 h-[3px] bg-green-700 rounded-full mt-4"></div>

                <button className="mt-8 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition">
                  Ver modelo
                </button>
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}