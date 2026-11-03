export default function Boa112Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Mobiliario urbano
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            BOA112
          </h1>

          <p className="text-gray-500 font-semibold mt-2">
            MOD-PALI
          </p>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Papelera urbana revestida de madera, compacta y resistente,
            diseñada para parques, zonas públicas y espacios exteriores.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl mb-10 bg-gray-50">
          <img
            src="/fotos/mobiliario/boa112/portada.png"
            alt="Papelera urbana BOA112"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-50 p-6 mb-12">
          <img
            src="/fotos/mobiliario/boa112/plano.png"
            alt="Plano técnico BOA112"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="text-center">
          <a
            href="/mobiliario"
            className="inline-block bg-blue-900 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Volver a mobiliario
          </a>
        </div>

      </div>
    </main>
  );
}