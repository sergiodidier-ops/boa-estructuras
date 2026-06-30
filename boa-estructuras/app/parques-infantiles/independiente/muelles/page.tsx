const modelos = [
  {
    nombre: "MOD-BALMET",
    imagen: "/fotos/independiente/muelles/mod-balmet/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-balmet",
  },
   {
    nombre: "MOD-BALMET-DUO",
    imagen: "/fotos/independiente/muelles/mod-balmet-duo/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-balmet-duo",
  },
  {
    nombre: "MOD-BALBAR",
    imagen: "/fotos/independiente/muelles/mod-balbar/portada.jpg",
    enlace: "/parques-infantiles/independiente/muelles/mod-balbar",
  },
  {
  nombre: "MOD-BALMAD",
  imagen: "/fotos/independiente/muelles/mod-balmad/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-balmad",
},
{
  nombre: "MOD-RBNBAL",
  imagen: "/fotos/independiente/muelles/mod-rbnbal/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-rbnbal",
},
{
  nombre: "MOD-KAR",
  imagen: "/fotos/independiente/muelles/mod-kar/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-kar",
},
{
  nombre: "MOD-BOM",
  imagen: "/fotos/independiente/muelles/mod-bom/portada.jpg",
  enlace: "/parques-infantiles/independiente/muelles/mod-bom",
},
{
  nombre: "MOD-MUPE",
  imagen: "/fotos/independiente/muelles/mod-mupe/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-mupe",
},
{
  nombre: "MOD-MOTO",
  imagen: "/fotos/independiente/muelles/mod-moto/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-moto",
},
{
  nombre: "MOD-DRAK",
  imagen: "/fotos/independiente/muelles/mod-drak/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-drak",
},
{
  nombre: "MOD-HOURSE",
  imagen: "/fotos/independiente/muelles/mod-hourse/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-hourse",
},
{
  nombre: "MOD-KOBRA",
  imagen: "/fotos/independiente/muelles/mod-kobra/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-kobra",
},
{
  nombre: "MOD-JIRAFA",
  imagen: "/fotos/independiente/muelles/mod-jirafa/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-jirafa",
},
{
  nombre: "MOD-FLOR",
  imagen: "/fotos/independiente/muelles/mod-flor/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-flor",
},
{
  nombre: "MOD-MARYP",
  imagen: "/fotos/independiente/muelles/mod-maryp/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-maryp",
},
{
  nombre: "MOD-RANA",
  imagen: "/fotos/independiente/muelles/mod-rana/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-rana",
},
{
  nombre: "MOD-OCTOPUS",
  imagen: "/fotos/independiente/muelles/mod-octopus/portada.jpg",
  enlace: "/parques-infantiles/independiente/muelles/mod-octopus",
},
{
  nombre: "MOD-MU",
  imagen: "/fotos/independiente/muelles/mod-mu/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-mu",
},
{
  nombre: "MOD-MP",
  imagen: "/fotos/independiente/muelles/mod-mp/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-mp",
},
{
  nombre: "MOD-ERIZO",
  imagen: "/fotos/independiente/muelles/mod-erizo/portada.png",
  enlace: "/parques-infantiles/independiente/muelles/mod-erizo",
},
          
];

export default function MuellesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff7e8] via-[#f8fbff] to-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.4em] text-green-700 text-sm font-semibold">
            Serie Independiente
          </span>

          <h1 className="text-7xl font-black text-[#2f3d58] mt-4">
            MUELLES
          </h1>

          <div className="w-32 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>

          <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto">
            Juegos de muelle diseñados para parques infantiles,
            colegios y espacios recreativos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {modelos.map((modelo) => (
            <div
              key={modelo.nombre}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <img
                src={modelo.imagen}
                alt={modelo.nombre}
                className="w-full h-72 object-contain p-6"
              />

              <div className="p-8">
                <span className="uppercase tracking-[0.3em] text-slate-400 text-xs">
                  Serie Independiente
                </span>

                <h2 className="text-3xl font-black text-[#2f3d58] mt-3">
                  {modelo.nombre}
                </h2>

                <div className="w-16 h-1 bg-green-500 rounded-full mt-4"></div>

                <a
                  href={modelo.enlace}
                  className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
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