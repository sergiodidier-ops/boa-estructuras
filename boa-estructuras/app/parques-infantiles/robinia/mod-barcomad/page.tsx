export default function ModBarcomadPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black text-center text-stone-900 mb-12">
          BARCOMAD
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <img
              src="/fotos/robinia/mod-barcomad/portada.png"
              alt="Barcomad"
              className="w-full rounded-2xl"
            />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <img
              src="/fotos/robinia/mod-barcomad/mod-barcomad-aerea.png"
              alt="Vista aérea Barcomad"
              className="w-full rounded-2xl"
            />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <img
              src="/fotos/robinia/mod-barcomad/mod-barcomad-lateral.png"
              alt="Vista lateral Barcomad"
              className="w-full rounded-2xl"
            />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 flex items-center justify-center">
            <a
              href="/fotos/robinia/mod-barcomad/mod-barcomad-medidas.png"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold transition"
            >
              Ver plano de medidas
            </a>
          </div>

        </div>

        <div className="mt-12 text-center">
          <a
            href="/fotos/robinia/mod-barcomad/ficha-tecnica.pdf"
            target="_blank"
            className="inline-flex bg-stone-800 hover:bg-black text-white px-8 py-4 rounded-full font-bold transition"
          >
            Descargar ficha técnica
          </a>
        </div>

      </div>
    </main>
  );
}