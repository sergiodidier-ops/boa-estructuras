export default function Boa138Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Barandillas
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            BOA138
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Barandilla metálica urbana con panel interior de retícula,
            diseñada para ofrecer seguridad, resistencia y una estética
            moderna en puentes, pasos elevados y espacios urbanos.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl mb-10">
          <img
            src="/fotos/cerramientos/barandillas/boa138/portada.jpg"
            alt="Barandilla BOA138"
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
                <strong>Modelo:</strong> Barandilla urbana metálica con panel de cuadrícula
              </li>

              <li>
                <strong>Material:</strong> Acero estructural galvanizado
              </li>

              <li>
                <strong>Postes:</strong> 60 x 60 mm u 80 x 40 mm
              </li>

              <li>
                <strong>Bastidor:</strong> tubo rectangular 40 x 40 mm
              </li>

              <li>
                <strong>Panel interior:</strong> chapa perforada en retícula
              </li>

              <li>
                <strong>Cuadrícula:</strong> aprox. 50 x 50 mm
              </li>

              <li>
                <strong>Altura:</strong> 1.000 mm aprox.
              </li>

              <li>
                <strong>Longitud:</strong> 2.000 mm aprox.
              </li>

              <li>
                <strong>Espesor de chapa:</strong> 2 mm
              </li>

              <li>
                <strong>Acabado:</strong> galvanizado y pintura poliéster RAL
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-5">
              Usos recomendados
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>Puentes y pasos elevados</li>
              <li>Protección de canales</li>
              <li>Zonas con desnivel</li>
              <li>Cerramientos urbanos</li>
              <li>Espacios públicos</li>
              <li>Zonas peatonales</li>
            </ul>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-100">
            <img
              src="/fotos/cerramientos/barandillas/boa138/foto-2.jpg"
              alt="Detalle barandilla BOA138"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-50 p-6">
            <img
              src="/fotos/cerramientos/barandillas/boa138/plano.png"
              alt="Plano técnico BOA138"
              className="w-full h-full object-contain"
            />
          </div>

        </div>

        <div className="text-center">
          <a
            href="/cerramientos/barandillas"
            className="inline-block bg-blue-900 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Volver a barandillas
          </a>
        </div>

      </div>
    </main>
  );
}