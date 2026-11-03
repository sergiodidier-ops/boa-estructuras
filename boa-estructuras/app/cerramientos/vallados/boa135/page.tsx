export default function Boa135Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Vallados
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            BOA135
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Vallado metálico modular de chapa perforada, diseñado para ofrecer
            resistencia, privacidad parcial y una estética moderna en espacios
            urbanos, industriales y residenciales.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl mb-10">
          <img
            src="/fotos/cerramientos/vallados/boa135/portada.jpg"
            alt="Vallado BOA135"
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
                <strong>Modelo:</strong> Valla de chapa perforada modular
              </li>

              <li>
                <strong>Material:</strong> Chapa de acero galvanizado
              </li>

              <li>
                <strong>Espesor de chapa:</strong> 2 mm
              </li>

              <li>
                <strong>Postes:</strong> 60 x 40 mm u 80 x 40 mm
              </li>

              <li>
                <strong>Bastidor:</strong> tubo cuadrado 40 x 40 mm
              </li>

              <li>
                <strong>Perforación:</strong> cuadrada de 20 x 20 mm o 30 x 30 mm aprox.
              </li>

              <li>
                <strong>Altura:</strong> 1.000 mm
              </li>

              <li>
                <strong>Longitud:</strong> 2.000 mm aprox.
              </li>

              <li>
                <strong>Acabado:</strong> galvanizado o pintura poliéster RAL
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-5">
              Usos recomendados
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>Cerramientos urbanos</li>
              <li>Zonas residenciales</li>
              <li>Polígonos industriales</li>
              <li>Áreas logísticas</li>
              <li>Zonas deportivas</li>
              <li>Colegios</li>
              <li>Pantallas en zonas ruidosas</li>
            </ul>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-100">
            <img
              src="/fotos/cerramientos/vallados/boa135/foto-2.jpg"
              alt="Detalle vallado BOA135"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-50 p-6">
            <img
              src="/fotos/cerramientos/vallados/boa135/plano.png"
              alt="Plano técnico BOA135"
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