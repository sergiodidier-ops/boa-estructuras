export default function Boa126Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Deporte · Workout
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            BOA126
          </h1>

          <p className="text-gray-500 font-semibold mt-2">
            MOD-W05
          </p>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Estructura completa de workout y calistenia para entrenamiento
            al aire libre, equipada con pasamanos, escalera vertical, anillas
            y barras para ejercicios de fuerza y suspensión.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl mb-10 bg-gray-50">
          <img
            src="/fotos/deporte/workout/boa126/portada.png"
            alt="Workout BOA126 MOD-W05"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-50 p-4 mb-12">
          <img
            src="/fotos/deporte/workout/boa126/imagen.png"
            alt="Vista BOA126"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="/fotos/deporte/workout/boa126/Ficha-tecnica.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-900 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Descargar ficha técnica
          </a>

          <a
            href="/deporte/workout"
            className="inline-block border-2 border-blue-900 text-blue-900 px-7 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Volver a Workout
          </a>

        </div>

      </div>
    </main>
  );
}