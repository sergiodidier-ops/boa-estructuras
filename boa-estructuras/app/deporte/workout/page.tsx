export default function WorkoutPage() {
  const modelos = [
    {
      nombre: "BOA122",
      modelo: "MOD-W01",
      descripcion:
        "Conjunto de workout para entrenamiento funcional al aire libre con barras, pasamanos y elementos de trepa.",
      imagen: "/fotos/deporte/workout/boa122/portada.png",
      enlace: "/deporte/workout/boa122",
    },
    {
      nombre: "BOA123",
      modelo: "MOD-WK02",
      descripcion:
        "Estructura modular de workout con barras de distintas alturas, banco inclinado y elementos para ejercicios de fuerza.",
      imagen: "/fotos/deporte/workout/boa123/portada.png",
      enlace: "/deporte/workout/boa123",
    },
    {
      nombre: "BOA124",
      modelo: "MOD-W03",
      descripcion:
        "Circuito de workout con barras horizontales, anillas y elementos de suspensión para entrenamiento completo.",
      imagen: "/fotos/deporte/workout/boa124/portada.png",
      enlace: "/deporte/workout/boa124",
    },
    {
      nombre: "BOA125",
      modelo: "MOD-WK04",
      descripcion:
        "Conjunto de calistenia con barras, anillas y distintos niveles de ejercicio para zonas deportivas exteriores.",
      imagen: "/fotos/deporte/workout/boa125/portada.png",
      enlace: "/deporte/workout/boa125",
    },
    {
      nombre: "BOA126",
      modelo: "MOD-W05",
      descripcion:
        "Estructura completa de workout con pasamanos, escalera vertical, anillas y barras paralelas.",
      imagen: "/fotos/deporte/workout/boa126/portada.png",
      enlace: "/deporte/workout/boa126",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Deporte
          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-3">
            WORKOUT
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Equipamiento de workout y calistenia diseñado para entrenamiento
            funcional al aire libre, parques deportivos y espacios públicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modelos.map((modelo) => (
            <div
              key={modelo.nombre}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={modelo.imagen}
                  alt={`${modelo.modelo} ${modelo.nombre}`}
                  className="w-full h-full object-contain hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-7">
                <span className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  Workout
                </span>

                <h2 className="text-3xl font-black text-gray-900 mt-1">
                  {modelo.nombre}
                </h2>

                <p className="text-sm font-semibold text-gray-500 mt-1">
                  {modelo.modelo}
                </p>

                <div className="w-10 h-[3px] bg-green-500 mt-3 rounded-full" />

                <p className="text-gray-600 mt-5 leading-relaxed min-h-[120px]">
                  {modelo.descripcion}
                </p>

                <a
                  href={modelo.enlace}
                  className="inline-block mt-6 bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Ver modelo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}