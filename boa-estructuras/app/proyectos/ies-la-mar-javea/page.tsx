export default function IesLaMarJaveaPage() {
  const fotos = [
    "/fotos/proyectos/ies-la-mar-javea/IMG_7870.jpeg",
    "/fotos/proyectos/ies-la-mar-javea/IMG_7871.jpeg",
    "/fotos/proyectos/ies-la-mar-javea/IMG_7872.jpeg",
    "/fotos/proyectos/ies-la-mar-javea/IMG_7873.jpeg",
    "/fotos/proyectos/ies-la-mar-javea/IMG_7874.jpeg",
    "/fotos/proyectos/ies-la-mar-javea/IMG_7875.jpeg",
    "/fotos/proyectos/ies-la-mar-javea/IMG_7876.jpeg",
    "/fotos/proyectos/ies-la-mar-javea/IMG_7877.jpeg",
    "/fotos/proyectos/ies-la-mar-javea/IMG_7878.jpeg",
    "/fotos/proyectos/ies-la-mar-javea/IMG_7880.jpeg",
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Proyectos BOA Estructuras
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            IES La Mar – Jávea
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Proyecto realizado por BOA Estructuras en el IES La Mar de Jávea,
            Alicante.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">

          <div className="bg-gray-50 rounded-3xl p-6">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Ubicación
            </span>
            <p className="text-xl font-bold text-gray-900 mt-2">
              Jávea, Alicante
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Cliente
            </span>
            <p className="text-xl font-bold text-gray-900 mt-2">
              IES La Mar
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Trabajo realizado
            </span>
            <p className="text-xl font-bold text-gray-900 mt-2">
              Fabricación e instalación
            </p>
          </div>

        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl mb-10">
          <img
            src="/fotos/proyectos/ies-la-mar-javea/IMG_7870.jpeg"
            alt="Proyecto IES La Mar Jávea"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="mb-14">
          <h2 className="text-3xl font-black text-gray-900 mb-5">
            Proyecto
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Actuación realizada en las instalaciones del IES La Mar de Jávea,
            desarrollando una solución adaptada a las necesidades del centro.
            El proyecto incluye trabajos de fabricación, suministro e
            instalación ejecutados por BOA Estructuras.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-8">
            Galería
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fotos.map((foto, index) => (
              <div
                key={foto}
                className="rounded-3xl overflow-hidden shadow-lg bg-gray-100 aspect-[4/3]"
              >
                <img
                  src={foto}
                  alt={`Proyecto IES La Mar Jávea ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/proyectos"
            className="inline-block bg-blue-900 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Volver a proyectos
          </a>
        </div>

      </div>
    </main>
  );
}