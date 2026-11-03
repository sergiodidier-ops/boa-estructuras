export default function Boa139Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Barandillas
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            BOA139
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Barandilla metálica urbana de barrotes verticales, diseñada para
            la protección de peatones y la delimitación de zonas de tránsito
            en calles, colegios y espacios urbanos.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl mb-10">
          <img
            src="/fotos/cerramientos/barandillas/boa139/portada.jpg"
            alt="Barandilla BOA139"
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
                <strong>Modelo:</strong> Barandilla urbana metálica de barrotes verticales
              </li>

              <li>
                <strong>Material:</strong> Acero estructural galvanizado
              </li>

              <li>
                <strong>Pasamanos superior:</strong> Tubo redondo Ø40 – 50 mm
              </li>

              <li>
                <strong>Travesaño inferior:</strong> Tubo redondo Ø40 mm
              </li>

              <li>
                <strong>Barrotes verticales:</strong> Tubo redondo Ø20 – 25 mm
              </li>

              <li>
                <strong>Postes:</strong> Tubo redondo Ø60 – 80 mm
              </li>

              <li>
                <strong>Altura:</strong> 1.000 – 1.200 mm
              </li>

              <li>
                <strong>Longitud:</strong> 2.000 mm aprox.
              </li>

              <li>
                <strong>Separación entre barrotes:</strong> 120 – 150 mm
              </li>

              <li>
                <strong>Acabado:</strong> Galvanizado y pintura poliéster RAL
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-5">
              Usos recomendados
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>Aceras</li>
              <li>Pasos peatonales</li>
              <li>Entornos escolares</li>
              <li>Delimitación de accesos</li>
              <li>Canalización de peatones</li>
              <li>Calles y zonas urbanas</li>
            </ul>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-100">
            <img
              src="/fotos/cerramientos/barandillas/boa139/foto-2.jpg"
              alt="Detalle barandilla BOA139"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-50 p-6">
            <img
              src="/fotos/cerramientos/barandillas/boa139/plano.png"
              alt="Plano técnico BOA139"
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