
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trabajos Realizados | BOA Estructuras",
  description:
    "Conoce los proyectos realizados por BOA Estructuras. Trabajos de carpintería metálica, cerramientos, instalaciones deportivas y parques infantiles.",
  alternates: {
    canonical: "https://www.boaestructuras.es/proyectos",
  },
};

const proyectos = [
  {
    nombre: "CEIP Montserrat",
    ubicacion: "Montserrat, Valencia",
    tipo: "Equipamiento infantil",
    descripcion:
      "Proyecto de equipamiento infantil en el CEIP Montserrat. Descubre las fotografías del balancín y el tobogán.",
    imagen: "/fotos/proyectos/ceip-Montserrat/balancin.JPG",
    enlace: "/proyectos/ceip-montserrat",
  },
  {
    nombre: "IES La Mar – Jávea",
    ubicacion: "Jávea, Alicante",
    tipo: "Fabricación e instalación",
    descripcion:
      "Proyecto realizado por BOA Estructuras en las instalaciones del IES La Mar de Jávea.",
    imagen: "/fotos/proyectos/ies-la-mar-javea/IMG_7870.jpeg",
    enlace: "/proyectos/ies-la-mar-javea",
  },
];

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* CABECERA */}

        <header className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            BOA Estructuras
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            PROYECTOS REALIZADOS
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Descubre algunos de los trabajos realizados
            por BOA Estructuras en carpintería metálica,
            instalaciones deportivas, parques infantiles,
            centros educativos y espacios públicos.
          </p>
        </header>

        {/* GALERÍA DE PROYECTOS */}

        <section aria-label="Galería de trabajos realizados">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto) => (
              <article
                key={proyecto.enlace}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col"
              >
                <Link href={proyecto.enlace}>
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={proyecto.imagen}
                      alt={`Trabajo realizado por BOA Estructuras: ${proyecto.nombre}`}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                </Link>

                <div className="p-7 flex flex-col flex-grow">
                  <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    Proyecto realizado
                  </span>

                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-2">
                    {proyecto.nombre}
                  </h2>

                  <p className="text-gray-500 font-semibold mt-2">
                    {proyecto.ubicacion}
                  </p>

                  <div className="w-10 h-[3px] bg-green-500 mt-4 rounded-full" />

                  <p className="text-sm font-semibold text-gray-500 mt-5">
                    {proyecto.tipo}
                  </p>

                  <p className="text-gray-600 mt-3 leading-relaxed flex-grow">
                    {proyecto.descripcion}
                  </p>

                  <Link
                    href={proyecto.enlace}
                    className="inline-block self-start mt-6 bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                  >
                    Ver proyecto
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* INFORMACIÓN DE EMPRESA */}

        <section className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Trabajos de carpintería metálica y equipamiento
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            En BOA Estructuras realizamos proyectos
            de fabricación a medida, carpintería
            metálica, cerramientos, vallados,
            barandillas y equipamiento para
            instalaciones públicas y privadas.

            También fabricamos parques infantiles,
            mobiliario urbano y equipamiento deportivo.

            En esta sección mostramos algunos
            de nuestros trabajos realizados.
          </p>
        </section>

        {/* CONTACTO */}

        <section className="mt-16 rounded-3xl bg-blue-950 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white">
            ¿Necesitas un proyecto similar?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Contacta con BOA Estructuras
            para solicitar información y presupuesto.
          </p>

          <a
            href="https://wa.me/34676208656?text=Hola%2C%20quiero%20solicitar%20presupuesto%20a%20BOA%20Estructuras."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Solicitar presupuesto
          </a>
        </section>

      </div>
    </main>
  );
}
