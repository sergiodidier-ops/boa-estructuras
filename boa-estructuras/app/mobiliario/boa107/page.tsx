export default function Boa107Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Mobiliario urbano
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            BOA107
          </h1>

          <p className="text-gray-500 font-semibold mt-2">
            MOD-BOA
          </p>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Banco urbano con estructura metálica y listones de madera,
            diseñado para parques, zonas públicas y espacios de descanso.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl mb-10 bg-gray-50">
          <img
            src="/fotos/mobiliario/boa107/portada.PNG"
            alt="Banco urbano BOA107"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-50 p-4">
            <img
              src="/fotos/mobiliario/boa107/Banco.png"
              alt="Vista BOA107"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-50 p-4">
            <img
              src="/fotos/mobiliario/boa107/Banco2.png"
              alt="Plano y medidas BOA107"
              className="w-full h-full object-contain"
            />
          </div>

        </div>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="/fotos/mobiliario/boa107/Ficha%20tecnica.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-900 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Descargar ficha técnica
          </a>

          <a
            href="/mobiliario"
            className="inline-block border-2 border-blue-900 text-blue-900 px-7 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Volver a mobiliario
          </a>

        </div>

      </div>
    </main>
  );
}