export default function ColMixPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff7e8] via-[#f8fbff] to-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.4em] text-sky-700 text-sm font-semibold">
            Serie Independiente
          </span>

          <h1 className="text-6xl font-black text-[#2f5f8f] mt-4">
            COL-MIX
          </h1>

          <div className="w-24 h-1 bg-sky-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <img
            src="/fotos/independiente/columpios/col-mix/portada.png"
            alt="COL-MIX"
            className="w-full rounded-2xl object-contain"
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="/fotos/independiente/columpios/col-mix/ficha-tecnica.pdf"
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