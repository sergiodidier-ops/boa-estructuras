export default function ParquesInfantiles() {
  const series = [

        {
    nombre: "Serie Metal",
    descripcion: "Parques infantiles metálicos resistentes, modernos y personalizables.",
    enlace: "/parques-infantiles/metal",
  },
  {
    nombre: "Serie Madera",
    descripcion: "Parques infantiles en madera tratada para exteriores.",
    enlace: "/parques-infantiles/madera",
  },
  {
    nombre: "Serie Robinia",
    descripcion: "Juegos infantiles de estética natural y gran resistencia.",
    enlace: "/parques-infantiles/robinia",
  },
  {
    nombre: "Serie Jugar es Crecer",
    descripcion: "Modelos pensados para aprendizaje, juego y desarrollo infantil.",
    enlace: "/parques-infantiles/jugar-es-crecer",
  },
  {
    nombre: "Serie Independiente",
    descripcion: "Columpios, balancines y elementos sueltos de juego infantil.",
    enlace: "/parques-infantiles/independiente",
  },
  {
  nombre: "Kbaña",
  imagen: "/fotos/metal/mod-kbaña/portada.png",
  enlace: "/parques-infantiles/metal/mod-kbaña",
},
  ]
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

              <a
  href={serie.enlace}
  className="inline-block bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
>
  Ver modelos
</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}