export default function RbnColPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8fbff] via-white to-[#eef6ff] px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.4em] text-blue-700 text-sm font-semibold">
            Serie Columpios
          </span>

          <h1 className="text-6xl font-black text-[#2f5f8f] mt-4">
            RBN-COL
          </h1>

          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <img
            src="/fotos/independiente/columpios/rbn-col/portada.PNG"
            alt="RBN-COL"
            className="w-full rounded-2xl object-contain"
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="/fotos/independiente/columpios/rbn-col/ficha-tecnica.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Descargar ficha técnica
          </a>
        </div>

      </div>
    </main>
  );
}