export default function Boa131Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Vallados
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            BOA131
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Valla metálica de lamas verticales con diseño moderno,
            resistente y de difícil escalada.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl mb-10">
          <img
            src="/fotos/cerramientos/vallados/boa131/portada.jpg"
            alt="Vallado BOA131"
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
                <strong>Modelo:</strong> Valla metálica de lamas verticales
              </li>

              <li>
                <strong>Material:</strong> Acero galvanizado y pintado al horno
              </li>

              <li>
                <strong>Lamas verticales:</strong> aprox. 100 x 20 mm
              </li>

              <li>
                <strong>Perfil horizontal:</strong> tubo de acero 40 x 40 mm
              </li>

              <li>
                <strong>Postes:</strong> 60 x 60 mm
              </li>

              <li>
                <strong>Altura:</strong> 1.800 – 2.000 mm
              </li>

              <li>
                <strong>Ancho de módulo:</strong> 2.000 – 3.000 mm
              </li>

              <li>
                <strong>Acabado:</strong> pintura termoendurecida en color RAL
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-5">
              Usos recomendados
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>Cerramientos perimetrales</li>
              <li>Edificios y zonas residenciales</li>
              <li>Instalaciones industriales</li>
              <li>Espacios urbanos</li>
              <li>Recintos privados</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-100">
            <img
              src="/fotos/cerramientos/vallados/boa131/foto-2.jpg"
              alt="Detalle vallado BOA131"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-50 p-6">
            <img
              src="/fotos/cerramientos/vallados/boa131/plano.png"
              alt="Plano técnico BOA131"
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