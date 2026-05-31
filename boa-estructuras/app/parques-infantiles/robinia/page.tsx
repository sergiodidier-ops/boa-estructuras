type Modelo = {
  nombre: string;
  imagen: string;
  enlace: string;
};

const modelos: Modelo[] = [
  {
    nombre: "RBN01",
    imagen: "/fotos/robinia/mod-rbn01/portada.PNG",
    enlace: "/parques-infantiles/robinia/mod-rbn01",
  },
];

export default function RobiniaPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-stone-900">
            ROBINIA
          </h1>

          <div className="w-20 h-[3px] bg-green-600 mx-auto mt-6 rounded-full"></div>

          <p className="text-lg text-stone-600 mt-8 max-w-3xl mx-auto">
            Serie de parques infantiles fabricados en madera Robinia,
            diseñados para integrarse de forma natural en cualquier entorno.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {modelos.map((modelo) => (
            <a
              key={modelo.nombre}
              href={modelo.enlace}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition"
            >
              <div className="overflow-hidden">
                <img
                  src={modelo.imagen}
                  alt={modelo.nombre}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-8">
                <span className="text-xs uppercase tracking-[0.3em] text-stone-400">
                  Serie
                </span>

                <h2 className="text-3xl font-black text-stone-900 mt-2">
                  {modelo.nombre}
                </h2>

                <div className="w-10 h-[2px] bg-green-600 mt-4"></div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}