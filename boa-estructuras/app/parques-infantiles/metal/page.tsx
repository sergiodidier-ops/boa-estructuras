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
   nombre: "Ksetas",
  imagen: "/fotos/metal/mod-ksetas/portada.png",
  enlace: "/parques-infantiles/metal/mod-ksetas",
  },
 {
    nombre: "Kcity",
    imagen: "/fotos/metal/mod-kcity/portada.png",
    enlace: "/parques-infantiles/metal/mod-kcity",
  },
  {
  nombre: "Kbaña",
  imagen: "/fotos/metal/mod-kbaña/portada.png",
  enlace: "/parques-infantiles/metal/mod-kbaña",
 },
{
  nombre: "Kbaña-duo",
  imagen: "/fotos/metal/mod-kbaña-duo/portada.png",
  enlace: "/parques-infantiles/metal/mod-kbaña-duo",
 },
{
  nombre: "KSA",
  imagen: "/fotos/metal/mod-ksa/portada.png",
  enlace: "/parques-infantiles/metal/mod-ksa",
},
{
  nombre: "KSA Dúo",
  imagen: "/fotos/metal/mod-ksa-duo/portada.png",
  enlace: "/parques-infantiles/metal/mod-ksa-duo",
},
{
  nombre: "Ksapont",
  imagen: "/fotos/metal/mod-ksapont/portada.png",
  enlace: "/parques-infantiles/metal/mod-ksapont",
},
{
  nombre: "KSADOS",
  imagen: "/fotos/metal/mod-ksados/portada.png",
  enlace: "/parques-infantiles/metal/mod-ksados",
},
{
  nombre: "KSOTAS",
  imagen: "/fotos/metal/mod-ksotas/portada.png",
  enlace: "/parques-infantiles/metal/mod-ksotas",
},
{
  nombre: "KSARBOL",
  imagen: "/fotos/metal/mod-ksarbol/portada.png",
  enlace: "/parques-infantiles/metal/mod-ksarbol",
},
{
  nombre: "TOWN",
  imagen: "/fotos/metal/mod-town/portada.png",
  enlace: "/parques-infantiles/metal/mod-town",
},
]
export default function MetalPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
         Serie Metal 2025
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