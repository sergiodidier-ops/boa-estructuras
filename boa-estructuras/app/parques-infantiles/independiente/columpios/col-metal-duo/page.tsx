export default function ColMetalDuoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.4em] text-sky-700 text-sm font-semibold">
            Columpios
          </span>

          <h1 className="text-6xl font-black text-slate-800 mt-4">
            COL-METAL-DUO
          </h1>

          <div className="w-24 h-1 bg-sky-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">
          <img
            src="/fotos/independiente/columpios/col-metal-duo/portada.png"
            alt="COL-METAL-DUO"
            className="w-full object-contain rounded-2xl"
          />
        </div>

        <div className="text-center">
          <a
            href="/fotos/independiente/columpios/col-metal-duo/ficha-tecnica.pdf"
            target="_blank"
            className="inline-flex bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Descargar ficha técnica
          </a>
        </div>
      </div>
    </main>
  );
}