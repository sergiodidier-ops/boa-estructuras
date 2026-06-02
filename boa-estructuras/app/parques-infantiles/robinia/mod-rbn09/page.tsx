export default function ModRbn09Page() {
  return (
    <main className="min-h-screen bg-stone-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black text-center text-stone-900 mb-12">
          RBN09
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <img
              src="/fotos/robinia/mod-rbn09/mod-rbn09.png"
              alt="RBN09"
              className="w-full rounded-2xl"
            />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <img
              src="/fotos/robinia/mod-rbn09/mod-rbn09-aerea.png"
              alt="Vista aérea RBN09"
              className="w-full rounded-2xl"
            />
          </div>

        </div>

        <div className="mt-10 text-center">
          <a
            href="/fotos/robinia/mod-rbn09/ficha-tecnica.pdf"
            target="_blank"
            className="inline-flex bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold transition"
          >
            Descargar ficha técnica
          </a>
        </div>

      </div>
    </main>
  );
}