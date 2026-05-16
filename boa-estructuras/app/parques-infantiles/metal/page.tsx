const modelos = [
  {
      nombre: "Ksa Roco",
    imagen: "/fotos/metal/mod-ksa-roco/portada.png",
    enlace: "/parques-infantiles/metal/mod-ksa-roco",
  },
  {
    nombre: "TorreRoko",
    imagen: "/fotos/metal/mod-torreroko/portada.png",
    enlace: "/parques-infantiles/metal/mod-torreroko",
  },
  {
    nombre: "Torreroko",
    imagen: "/fotos/metal/mod-torreroko/portada.png",
    enlace: "/parques-infantiles/metal/mod-torreroko",
  },
]

export default function MetalPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Serie Metal
        </h1>

        <p className="text-lg text-gray-600 mb-14">
          Catálogo de parques infantiles de la Serie Metal.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {modelos.map((modelo) => (
            <a href={modelo.enlace} key={modelo.nombre}>
              <div className="overflow-hidden rounded-3xl bg-white shadow-2xl hover:scale-105 transition duration-300">
                
                <img
                  src={modelo.imagen}
                  alt={modelo.nombre}
                  className="h-80 w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-950">
                    {modelo.nombre}
                  </h2>

                  <a
                    href="https://wa.me/34676208656"
                    target="_blank"
                    className="mt-6 inline-block rounded-xl bg-green-500 px-5 py-3 font-semibold text-white"
                  >
                    Solicitar información
                  </a>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  )
}