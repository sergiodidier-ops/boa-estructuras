export default function Boa134Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Vallados
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            BOA134
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Valla urbana metálica de barrotes verticales diseñada para
            delimitar el tránsito peatonal y reforzar la seguridad en calles,
            colegios y zonas de tráfico intenso.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl mb-10">
          <img
            src="/fotos/cerramientos/vallados/boa134/portada.jpg"
            alt="Vallado BOA134"
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
                <strong>Modelo:</strong> Valla urbana metálica de barrotes verticales
              </li>

              <li>
                <strong>Material:</strong> Acero galvanizado en caliente
              </li>

              <li>
                <strong>Postes:</strong> Pletina de 40 x 8 o 50 x 8 mm
              </li>

              <li>
                <strong>Pasamanos:</strong> Tubo redondo Ø40 – 50 mm
              </li>

              <li>
                <strong>Barrotes:</strong> Ø16 – 20 mm o cuadrado 20 x 20 mm
              </li>

              <li>
                <strong>Altura:</strong> 1.000 – 1.200 mm
              </li>

              <li>
                <strong>Longitud:</strong> 2.000 mm aprox.
              </li>

              <li>
                <strong>Acabado:</strong> Galvanizado o pintura poliéster RAL
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-5">
              Usos recomendados
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>Delimitación de aceras</li>
              <li>Protección en pasos de peatones</li>
              <li>Entornos escolares</li>
              <li>Calles con tráfico</li>
              <li>Canalización de recorridos peatonales</li>
            </ul>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-100">
            <img
              src="/fotos/cerramientos/vallados/boa134/foto-2.jpg"
              alt="Detalle vallado BOA134"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-50 p-6">
            <img
              src="/fotos/cerramientos/vallados/boa134/plano.png"
              alt="Plano técnico BOA134"
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