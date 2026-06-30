export default function ModMpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff7e8] via-[#f8fbff] to-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.4em] text-green-700 text-sm font-semibold">
            Serie Muelles
          </span>

          <h1 className="text-6xl font-black text-[#2f5f8f] mt-4">
            MOD-MP
          </h1>

          <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <img
            src="/fotos/independiente/muelles/mod-mp/portada.png"
            alt="MOD-MP"
            className="w-full rounded-2xl object-contain"
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="/fotos/independiente/muelles/mod-mp/ficha-tecnica.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-[#2f8f7a] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#257261] transition"
          >
            Descargar ficha técnica
          </a>
        </div>
      </div>
    </main>
  );
}