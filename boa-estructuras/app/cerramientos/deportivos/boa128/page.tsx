export default function Boa128Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Cerramientos deportivos
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            BOA128
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Cerramiento metálico de malla electrosoldada diseñado para
            seguridad y delimitación de espacios deportivos y recintos.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl mb-10">
          <img
            src="/fotos/cerramientos/boa128/portada.jpg"
            alt="Cerramiento deportivo BOA128"
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
                <strong>Dimensiones:</strong> 2000 x 2000 mm
              </li>

              <li>
                <strong>Estructura:</strong> marco metálico con perfiles rectangulares
              </li>

              <li>
                <strong>Refuerzos:</strong> tres travesaños horizontales
              </li>

              <li>
                <strong>Malla:</strong> electrosoldada de cuadrícula regular
              </li>

              <li>
                <strong>Instalación:</strong> entre postes con placa base o zapata
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-5">
              Usos recomendados
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>Campos y pistas deportivas</li>
              <li>Perímetros de parques</li>
              <li>Cerramientos industriales</li>
              <li>Recintos privados</li>
              <li>Zonas de seguridad</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/fotos/cerramientos/boa128/ficha-tecnica.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-900 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Descargar ficha técnica
          </a>
        </div>

      </div>
    </main>
  );
}