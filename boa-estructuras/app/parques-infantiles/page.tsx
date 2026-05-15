export default function ParquesInfantiles() {
  const series = [
    {
      nombre: "Serie Natura",
      descripcion: "Parques infantiles con acabados naturales y diseño moderno.",
    },
    {
      nombre: "Serie Urban",
      descripcion: "Diseños urbanos resistentes para espacios públicos.",
    },
    {
      nombre: "Serie Inclusiva",
      descripcion: "Juegos adaptados para niños con movilidad reducida.",
    },
    {
      nombre: "Serie Multijuego",
      descripcion: "Grandes estructuras con múltiples zonas de juego.",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
          Parques Infantiles
        </h1>

        <p className="text-center text-gray-600 mb-14 text-lg">
          Descubre nuestras series de parques infantiles diseñadas para espacios
          modernos, seguros y duraderos.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {series.map((serie, index) => (
            <div
              key={index}
              className="rounded-3xl shadow-xl p-8 border border-gray-100 hover:scale-105 transition"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-900">
                {serie.nombre}
              </h2>

              <p className="text-gray-600 mb-6">
                {serie.descripcion}
              </p>

              <button className="bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                Ver catálogo
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}