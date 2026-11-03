export default function MobiliarioPage() {
  const modelos = [
    {
      nombre: "BOA107",
      modelo: "MOD-BOA",
      tipo: "Banco urbano",
      descripcion:
        "Banco urbano con estructura metálica y listones de madera, diseñado para parques, zonas públicas y espacios de descanso.",
      imagen: "/fotos/mobiliario/boa107/portada.PNG",
      enlace: "/mobiliario/boa107",
    },
    {
      nombre: "BOA108",
      modelo: "MOD-OBA",
      tipo: "Banco urbano",
      descripcion:
        "Banco urbano de líneas modernas con estructura metálica y elementos de madera para espacios exteriores.",
      imagen: "/fotos/mobiliario/boa108/portada.PNG",
      enlace: "/mobiliario/boa108",
    },
    {
      nombre: "BOA109",
      modelo: "MOD-BRILI",
      tipo: "Mesa picnic",
      descripcion:
        "Mesa picnic con estructura metálica y superficie de madera, ideal para parques y áreas recreativas.",
      imagen: "/fotos/mobiliario/boa109/portada.PNG",
      enlace: "/mobiliario/boa109",
    },
    {
      nombre: "BOA110",
      modelo: "MOD-BRU",
      tipo: "Papelera urbana",
      descripcion:
        "Papelera urbana con estructura metálica y revestimiento de madera para uso exterior.",
      imagen: "/fotos/mobiliario/boa110/portada.png",
      enlace: "/mobiliario/boa110",
    },
    {
      nombre: "BOA111",
      modelo: "MOD-LIVI",
      tipo: "Mesa picnic",
      descripcion:
        "Mesa picnic de madera de diseño clásico para parques, áreas recreativas y zonas de descanso.",
      imagen: "/fotos/mobiliario/boa111/portada.png",
      enlace: "/mobiliario/boa111",
    },
    {
      nombre: "BOA112",
      modelo: "MOD-PALI",
      tipo: "Papelera urbana",
      descripcion:
        "Papelera urbana revestida de madera, compacta y diseñada para parques y espacios públicos.",
      imagen: "/fotos/mobiliario/boa112/portada.png",
      enlace: "/mobiliario/boa112",
    },
    {
      nombre: "BOA113",
      modelo: "MOD-VAGAL",
      tipo: "Valla infantil",
      descripcion:
        "Valla infantil de colores para delimitación de parques, colegios y zonas de juego.",
      imagen: "/fotos/mobiliario/boa113/portada.png",
      enlace: "/mobiliario/boa113",
    },
    {
      nombre: "BOA114",
      modelo: "MOD-VAVER",
      tipo: "Valla infantil",
      descripcion:
        "Valla infantil de colores diseñada para delimitar espacios de juego y zonas infantiles.",
      imagen: "/fotos/mobiliario/boa114/portada.png",
      enlace: "/mobiliario/boa114",
    },
    {
      nombre: "BOA115",
      modelo: "MOD-VAMA",
      tipo: "Valla infantil",
      descripcion:
        "Valla infantil con acabado en madera y elementos de colores para parques y áreas recreativas.",
      imagen: "/fotos/mobiliario/boa115/portada.png",
      enlace: "/mobiliario/boa115",
    },
    {
      nombre: "BOA116",
      modelo: "MOD-VALMA",
      tipo: "Valla infantil",
      descripcion:
        "Valla infantil de madera para delimitación segura de parques y zonas de juego.",
      imagen: "/fotos/mobiliario/boa116/portada.png",
      enlace: "/mobiliario/boa116",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            BOA Estructuras
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            MOBILIARIO URBANO
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Equipamiento urbano diseñado para completar parques, zonas
            públicas, áreas recreativas y espacios de descanso.
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
                  alt={`${modelo.modelo} ${modelo.nombre}`}
                  className="w-full h-full object-contain hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-7">
                <span className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  {modelo.tipo}
                </span>

                <h2 className="text-3xl font-black text-gray-900 mt-1">
                  {modelo.nombre}
                </h2>

                <p className="text-sm font-semibold text-gray-500 mt-1">
                  {modelo.modelo}
                </p>

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