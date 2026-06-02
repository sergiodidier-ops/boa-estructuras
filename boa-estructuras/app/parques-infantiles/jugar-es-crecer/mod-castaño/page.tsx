export default function ModCastanoPage() {
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

        <div className="bg-white rounded-[2rem] shadow-xl p-8">
          <img
            src="/fotos/jugar-es-crecer/mod-castaño/mod-castaño.png"
            alt="Modelo Castaño"
            className="w-full max-w-4xl mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#2f5f8f] mb-4">
              Vista aérea
            </h2>

            <img
              src="/fotos/jugar-es-crecer/mod-castaño/mod-castaño-aerea.png"
              alt="Vista aérea"
              className="w-full"
            />
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#2f5f8f] mb-4">
              Ficha técnica
            </h2>

            <a
              href="/fotos/jugar-es-crecer/mod-castaño/ficha-tecnica.pdf"
              target="_blank"
              className="inline-flex bg-[#2f8f7a] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#257261]"
            >
              Descargar PDF
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}