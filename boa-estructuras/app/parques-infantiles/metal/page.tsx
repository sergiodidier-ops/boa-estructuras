const modelos = [
  {
    nombre: "Modelo Metal 1",
    imagen: "/fotos/metal/mod-metal1.png",
  },
  {
    nombre: "Modelo Metal 2",
    imagen: "/fotos/metal/mod-metal2.png",
  },
  {
    nombre: "Modelo Metal 3",
    imagen: "/fotos/metal/mod-metal3.png",
  },
];

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
            <div
              key={modelo.nombre}
              className="overflow-hidden rounded-3xl bg-white shadow-2xl hover:scale-105 transition duration-300"
            >
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
          ))}

        </div>
      </div>
    </main>
  );
}