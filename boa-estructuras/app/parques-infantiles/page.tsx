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
  nombre: "RBN08",
  imagen: "/fotos/robinia/mod-rbn08/portada.png",
  enlace: "/parques-infantiles/robinia/mod-rbn08",
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
              <div className="mb-6">
  <span className="text-xs uppercase tracking-[0.25em] text-gray-400">
    Serie
  </span>

  <h2 className="text-4xl font-black text-gray-900 mt-2 tracking-tight">
    {serie.nombre.replace("Serie ", "")}
  </h2>

  <div className="w-12 h-[2px] bg-green-500 mt-4 rounded-full" />
</div>

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