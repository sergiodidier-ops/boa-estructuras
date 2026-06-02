export default function ModVeleroPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black text-center text-stone-900 mb-12">
          VELERO
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <img
              src="/fotos/robinia/mod-velero/portada.png"
              alt="Velero"
              className="w-full rounded-2xl"
            />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <img
              src="/fotos/robinia/mod-velero/mod-velero-aerea.png"
              alt="Vista aérea Velero"
              className="w-full rounded-2xl"
            />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <img
              src="/fotos/robinia/mod-velero/mod-velero-lateral.png"
              alt="Vista lateral Velero"
              className="w-full rounded-2xl"
            />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <img
              src="/fotos/robinia/mod-velero/mod-velero-trasera.png"
              alt="Vista trasera Velero"
              className="w-full rounded-2xl"
            />
          </div>

        </div>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="/fotos/robinia/mod-velero/mod-velero-medidas.png"
            target="_blank"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold transition"
          >
            Ver medidas
          </a>

          <a
            href="/fotos/robinia/mod-velero/ficha-tecnica.pdf"
            target="_blank"
            className="bg-stone-800 hover:bg-black text-white px-6 py-3 rounded-full font-bold transition"
          >
            Descargar ficha técnica
          </a>

        </div>

      </div>
    </main>
  );
}