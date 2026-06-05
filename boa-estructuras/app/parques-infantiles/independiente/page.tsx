type Modelo = {
  nombre: string;
  imagen: string;
  enlace: string;
};

const columpios: Modelo[] = [];

const muelles: Modelo[] = [];

function CardModelo({ modelo }: { modelo: Modelo }) {
  return (
    <a
      href={modelo.enlace}
      className="group bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl border border-slate-100 transition duration-300"
    >
      <div className="bg-gradient-to-b from-[#f4fbff] to-[#f8fafc] p-6">
        <img
          src={modelo.imagen}
          alt={modelo.nombre}
          className="w-full h-72 object-contain group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-8">
        <span className="text-xs uppercase tracking-[0.3em] text-sky-700">
          Serie Independiente
        </span>

        <h3 className="text-3xl font-black text-[#23415a] mt-3">
          {modelo.nombre}
        </h3>

        <div className="w-14 h-[3px] bg-sky-500 rounded-full mt-4"></div>

        <span className="inline-block mt-8 bg-[#23415a] hover:bg-[#172c3d] text-white px-6 py-3 rounded-xl font-semibold transition">
          Ver modelo
        </span>
      </div>
    </a>
  );
}

export default function IndependientePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f4fbff] via-white to-[#f7fafc] px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-24">
          <span className="uppercase tracking-[0.45em] text-sky-700 font-semibold text-sm">
            ELEMENTOS INDIVIDUALES
          </span>

          <h1 className="text-7xl lg:text-8xl font-black text-[#23415a] mt-6 tracking-tight">
            INDEPENDIENTE
          </h1>

          <div className="w-32 h-1 bg-sky-500 mx-auto mt-6 rounded-full"></div>

          <p className="text-xl text-slate-600 mt-10 max-w-4xl mx-auto leading-relaxed">
            Soluciones de juego individuales diseñadas para completar parques
            infantiles, áreas recreativas y espacios urbanos.
          </p>
        </div>

        <section>
          <h2 className="text-5xl font-black text-[#23415a]">
            Columpios
          </h2>
          <div className="w-24 h-1 bg-sky-500 rounded-full mt-4 mb-10"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {columpios.map((modelo) => (
              <CardModelo key={modelo.nombre} modelo={modelo} />
            ))}
          </div>
        </section>

        <section className="mt-28">
          <h2 className="text-5xl font-black text-[#23415a]">
            Muelles
          </h2>
          <div className="w-24 h-1 bg-emerald-500 rounded-full mt-4 mb-10"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {muelles.map((modelo) => (
              <CardModelo key={modelo.nombre} modelo={modelo} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}