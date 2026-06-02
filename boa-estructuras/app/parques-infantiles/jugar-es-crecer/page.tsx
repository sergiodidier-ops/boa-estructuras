type Modelo = {
  nombre: string;
  imagen: string;
  enlace: string;
};
const modelos: Modelo[] = [
  {
    nombre: "CASTAÑO",
    imagen: "/fotos/jugar-es-crecer/mod-castano/portada.png",
    enlace: "/parques-infantiles/jugar-es-crecer/mod-castaño",
  },
];

export default function JugarEsCrecerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff7e8] via-[#f8fbff] to-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)]"></div>

          <div className="relative z-10">
            <span className="uppercase tracking-[0.45em] text-sky-700 font-semibold text-sm">
              PRIMERA INFANCIA
            </span>

            <h1 className="text-7xl lg:text-8xl font-black text-[#2f5f8f] mt-6 tracking-tight">
              JUGAR ES CRECER
            </h1>

            <div className="w-32 h-1 bg-amber-400 mx-auto mt-6 rounded-full"></div>

            <p className="text-xl text-stone-700 mt-10 max-w-4xl mx-auto leading-relaxed">
              Parques infantiles diseñados para niños de 0 a 3 años, con
              estructuras seguras, estimulantes y adaptadas al desarrollo
              temprano mediante el juego, el movimiento y la exploración.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {modelos.map((modelo) => (
            <a
              key={modelo.nombre}
              href={modelo.enlace}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl border border-sky-100 transition duration-300"
            >
              <div className="bg-gradient-to-b from-[#fff8e7] to-[#eef8ff] p-6">
                <img
                  src={modelo.imagen}
                  alt={modelo.nombre}
                  className="w-full h-72 object-contain group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-8">
                <span className="text-xs uppercase tracking-[0.3em] text-sky-700">
                  Jugar es Crecer
                </span>

                <h2 className="text-3xl font-black text-[#2f5f8f] mt-3">
                  {modelo.nombre}
                </h2>

                <div className="w-14 h-[3px] bg-amber-400 rounded-full mt-4"></div>

                <span className="inline-block mt-8 bg-[#2f8f7a] hover:bg-[#257261] text-white px-6 py-3 rounded-xl font-semibold transition">
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