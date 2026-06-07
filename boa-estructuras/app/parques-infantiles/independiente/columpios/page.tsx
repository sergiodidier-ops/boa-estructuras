type Modelo = {
  nombre: string;
  imagen: string;
  enlace: string;
};

const modelos: Modelo[] = [
  {
    nombre: "COL-METAL-DUO",
    imagen: "/fotos/independiente/columpios/col-metal-duo/portada.png",
    enlace: "/parques-infantiles/independiente/columpios/col-metal-duo",
  },
  {
  nombre: "COL-METAL-CESTA",
  imagen: "/fotos/independiente/columpios/col-metal-cesta/portada.png",
  enlace: "/parques-infantiles/independiente/columpios/col-metal-cesta",
},
{
  nombre: "COL-DUO-BABY",
  imagen: "/fotos/independiente/columpios/col-duo-baby/portada.png",
  enlace: "/parques-infantiles/independiente/columpios/col-duo-baby",
},
{
  nombre: "COL-PEH",
  imagen: "/fotos/independiente/columpios/col-peh/portada.png",
  enlace: "/parques-infantiles/independiente/columpios/col-peh",
},
{
  nombre: "COL-MA",
  imagen: "/fotos/independiente/columpios/col-ma/portada.png",
  enlace: "/parques-infantiles/independiente/columpios/col-ma",
},
{
  nombre: "COLMA-CESTA",
  imagen: "/fotos/independiente/columpios/colma-cesta/portada.png",
  enlace: "/parques-infantiles/independiente/columpios/colma-cesta",
},
{
  nombre: "COL-AD",
  imagen: "/fotos/independiente/columpios/col-ad/portada.png",
  enlace: "/parques-infantiles/independiente/columpios/col-ad",
},
{
  nombre: "COL-MIXTO",
  imagen: "/fotos/independiente/columpios/col-mixto/portada.png",
  enlace: "/parques-infantiles/independiente/columpios/col-mixto",
},
{
  nombre: "COLHEX",
  imagen: "/fotos/independiente/columpios/colhex/portada.png",
  enlace: "/parques-infantiles/independiente/columpios/colhex",
},
{
  nombre: "COL-MIX",
  imagen: "/fotos/independiente/columpios/col-mix/portada.png",
  enlace: "/parques-infantiles/independiente/columpios/col-mix",
},
{
  nombre: "COLEQ",
  imagen: "/fotos/independiente/columpios/coleq/portada.png",
  enlace: "/parques-infantiles/independiente/columpios/coleq",
},
{
  nombre: "RBN-COL",
  imagen: "/fotos/independiente/columpios/rbn-col/portada.PNG",
  enlace: "/parques-infantiles/independiente/columpios/rbn-col",
},
];

export default function ColumpiosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.45em] text-sky-700 font-semibold text-sm">
            SERIE INDEPENDIENTE
          </span>

          <h1 className="text-7xl lg:text-8xl font-black text-slate-800 mt-6">
            COLUMPIOS
          </h1>

          <div className="w-32 h-1 bg-sky-500 mx-auto mt-6 rounded-full"></div>

          <p className="text-xl text-slate-600 mt-10 max-w-4xl mx-auto leading-relaxed">
            Columpios diseñados para espacios públicos, colegios,
            urbanizaciones y parques infantiles. Soluciones resistentes,
            seguras y adaptadas para el juego al aire libre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {modelos.map((modelo) => (
            <a
              key={modelo.nombre}
              href={modelo.enlace}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl border border-sky-100 transition duration-300"
            >
              <div className="bg-gradient-to-b from-sky-50 to-white p-6">
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

                <h2 className="text-3xl font-black text-slate-800 mt-3">
                  {modelo.nombre}
                </h2>

                <div className="w-14 h-[3px] bg-sky-500 rounded-full mt-4"></div>

                <button className="mt-8 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold transition">
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