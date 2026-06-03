export default function ModCastanoPage() {
  const fotos = [
    "/fotos/jugar-es-crecer/mod-castano/portada.png",
    "/fotos/jugar-es-crecer/mod-castano/mod-castano.png",
    "/fotos/jugar-es-crecer/mod-castano/mod-castano-aerea.png",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff7e8] via-[#f8fbff] to-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.4em] text-sky-700 text-sm font-semibold">
            Jugar es Crecer
          </span>

          <h1 className="text-6xl font-black text-[#2f5f8f] mt-4">
            CASTAÑO
          </h1>

          <div className="w-24 h-1 bg-amber-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {fotos.map((foto) => (
            <div
              key={foto}
              className="bg-white rounded-3xl shadow-xl p-6"
            >
              <img
                src={foto}
                alt="Modelo Castano"
                className="w-full rounded-2xl object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/fotos/jugar-es-crecer/mod-castano/ficha-tecnica.pdf"
            target="_blank"
            className="inline-flex bg-[#2f8f7a] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#257261]"
          >
            Descargar ficha técnica
          </a>
        </div>
      </div>
    </main>
  );
}