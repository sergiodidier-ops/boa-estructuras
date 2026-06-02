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
  {
    nombre: "RBN02",
    imagen: "/fotos/robinia/mod-rbn02/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn02",
  },
  {
    nombre: "RBN03",
    imagen: "/fotos/robinia/mod-rbn03/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn03",
  },
  {
    nombre: "RBN04",
    imagen: "/fotos/robinia/mod-rbn04/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn04",
  },
  {
    nombre: "RBN05",
    imagen: "/fotos/robinia/mod-rbn05/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn05",
  },
  {
    nombre: "RBN06",
    imagen: "/fotos/robinia/mod-rbn06/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn06",
  },
  {
    nombre: "RBN07",
    imagen: "/fotos/robinia/mod-rbn07/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn07",
  },
  {
    nombre: "RBN08",
    imagen: "/fotos/robinia/mod-rbn08/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn08",
  },
  {
    nombre: "RBN09",
    imagen: "/fotos/robinia/mod-rbn09/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn09",
  },
  {
    nombre: "RBN10",
    imagen: "/fotos/robinia/mod-rbn10/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn10",
  },
  {
    nombre: "VELERO",
    imagen: "/fotos/robinia/mod-velero/portada.png",
    enlace: "/parques-infantiles/robinia/mod-velero",
  },
  {
    nombre: "BARCOMAD",
    imagen: "/fotos/robinia/mod-barcomad/portada.png",
    enlace: "/parques-infantiles/robinia/mod-barcomad",
  },
];

export default function RobiniaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef4e7] via-[#f5f7f1] to-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.10),transparent_70%)]"></div>

          <div className="relative z-10">
            <span className="uppercase tracking-[0.45em] text-green-700 font-semibold text-sm">
              JUGAR ENTRE LA NATURALEZA
            </span>

            <h1 className="text-7xl lg:text-8xl font-black text-green-950 mt-6 tracking-tight">
              ROBINIA
            </h1>

            <div className="w-32 h-1 bg-green-700 mx-auto mt-6 rounded-full"></div>

            <p className="text-xl text-stone-700 mt-10 max-w-4xl mx-auto leading-relaxed">
              Estructuras de juego fabricadas en madera Robinia que transforman
              cualquier espacio en una experiencia de aventura al aire libre.
            </p>
          </div>
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

                <span className="inline-block mt-8 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition">
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