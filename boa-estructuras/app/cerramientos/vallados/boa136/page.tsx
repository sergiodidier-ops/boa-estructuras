export default function Boa132Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Vallados
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            BOA132
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Valla metálica de barras verticales galvanizadas,
            robusta y especialmente indicada para instalaciones deportivas,
            colegios y cerramientos de seguridad.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl mb-10">
          <img
            src="/fotos/cerramientos/vallados/boa132/portada.jpg"
            alt="Vallado BOA132"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-5">
              Características
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>
                <strong>Modelo:</strong> Valla metálica deportiva galvanizada
              </li>

              <li>
                <strong>Material:</strong> Acero al carbono galvanizado en caliente
              </li>

              <li>
                <strong>Barrotes verticales:</strong> tubo redondo Ø 40 mm aprox.
              </li>

              <li>
                <strong>Perfiles horizontales:</strong> 40 x 40 mm o 40 x 60 mm
              </li>

              <li>
                <strong>Postes:</strong> tubo redondo Ø 60 mm
              </li>

              <li>
                <strong>Altura:</strong> 2.000 – 3.000 mm
              </li>

              <li>
                <strong>Ancho de módulo:</strong> 2.000 – 3.000 mm
              </li>

              <li>
                <strong>Acabado:</strong> galvanizado en caliente
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-5">
              Usos recomendados
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>Campos de fútbol</li>
              <li>Pistas multideportivas</li>
              <li>Colegios</li>
              <li>Perímetros industriales</li>
              <li>Recintos residenciales</li>
              <li>Zonas de seguridad</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-100">
            <img
              src="/fotos/cerramientos/vallados/boa132/foto-2.jpg"
              alt="Detalle vallado BOA132"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-50 p-6">
            <img
              src="/fotos/cerramientos/vallados/boa132/plano.png"
              alt="Plano técnico BOA132"
              className="w-full h-full object-contain"
            />
          </div>

        </div>

        <div className="text-center">
          <a
            href="/cerramientos/vallados"
            className="inline-block bg-blue-900 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Volver a vallados
          </a>
        </div>

      </div>
    </main>
  );
}