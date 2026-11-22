
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fabricantes de Parques Infantiles | BOA Estructuras",
  description:
    "Fabricantes de parques infantiles de madera, metal y robinia. Diseño, fabricación e instalación de áreas de juego para ayuntamientos, colegios, constructoras y urbanizaciones.",
  keywords: [
    "fabricantes de parques infantiles",
    "fabricación de parques infantiles",
    "parques infantiles Valencia",
    "parques infantiles de madera",
    "parques infantiles metálicos",
    "parques infantiles de robinia",
    "equipamiento de parques infantiles",
    "juegos infantiles para exteriores",
    "parques infantiles para ayuntamientos",
    "instalación de parques infantiles",
    "BOA Estructuras",
  ],
  alternates: {
    canonical: "https://www.boaestructuras.es/parques-infantiles",
  },
  openGraph: {
    title: "Fabricantes de Parques Infantiles | BOA Estructuras",
    description:
      "Diseño, fabricación e instalación de parques infantiles para espacios públicos y privados.",
    url: "https://www.boaestructuras.es/parques-infantiles",
    siteName: "BOA Estructuras",
    locale: "es_ES",
    type: "website",
  },
};

export default function ParquesInfantiles() {
  const series = [
    {
      nombre: "Serie Metal",
      descripcion:
        "Parques infantiles metálicos resistentes, modernos y personalizables. Estructuras diseñadas para espacios públicos, colegios y zonas recreativas.",
      enlace: "/parques-infantiles/metal",
    },
    {
      nombre: "Serie Madera",
      descripcion:
        "Parques infantiles fabricados con madera tratada para exteriores. Diseños naturales, resistentes y adaptados a diferentes edades y espacios.",
      enlace: "/parques-infantiles/madera",
    },
    {
      nombre: "Serie Robinia",
      descripcion:
        "Parques infantiles de robinia con estética natural y gran resistencia. Soluciones de juego integradas en parques y entornos ajardinados.",
      enlace: "/parques-infantiles/robinia",
    },
    {
      nombre: "Serie Jugar es Crecer",
      descripcion:
        "Juegos infantiles pensados para estimular la creatividad, el aprendizaje, la coordinación y el desarrollo de los niños.",
      enlace: "/parques-infantiles/jugar-es-crecer",
    },
    {
      nombre: "Serie Independiente",
      descripcion:
        "Fabricación de columpios, balancines y elementos independientes de juego infantil para completar áreas recreativas y parques públicos.",
      enlace: "/parques-infantiles/independiente",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* TITULO PRINCIPAL SEO */}

        <header className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fabricantes de Parques Infantiles
          </h1>

          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            En BOA Estructuras nos dedicamos al diseño, fabricación
            e instalación de parques infantiles para ayuntamientos,
            colegios, constructoras, urbanizaciones y espacios públicos.

            Fabricamos parques infantiles de madera, metal y robinia,
            además de columpios, balancines y otros elementos de juego
            para exteriores.

            Ofrecemos soluciones personalizadas para proyectos
            en Valencia, la Comunidad Valenciana y toda España.
          </p>
        </header>

        {/* CATALOGO DE SERIES */}

        <section aria-labelledby="series-parques">
          <h2
            id="series-parques"
            className="text-3xl font-bold text-gray-900 text-center mb-10"
          >
            Nuestro catálogo de parques infantiles
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {series.map((serie) => (
              <article
                key={serie.enlace}
                className="rounded-3xl shadow-xl p-8 border border-gray-100 hover:scale-105 transition"
              >
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-[0.25em] text-gray-400">
                    Serie
                  </span>

                  <h3 className="text-4xl font-black text-gray-900 mt-2 tracking-tight">
                    {serie.nombre.replace("Serie ", "")}
                  </h3>

                  <div className="w-12 h-[2px] bg-green-500 mt-4 rounded-full" />
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {serie.descripcion}
                </p>

                <a
                  href={serie.enlace}
                  aria-label={`Ver modelos de ${serie.nombre}`}
                  className="inline-block bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  Ver modelos
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* FABRICACION */}

        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Diseño y fabricación de parques infantiles
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            En BOA Estructuras desarrollamos soluciones de juego
            infantil adaptadas a las necesidades de cada proyecto.
            Trabajamos con estructuras metálicas, madera tratada
            para exteriores y robinia, combinando materiales
            resistentes con diseños funcionales y atractivos.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Nuestro catálogo incluye conjuntos multijuego,
            torres infantiles, toboganes, columpios, balancines
            y otros equipamientos para zonas de juego.
            Disponemos de diferentes diseños y posibilidades
            de personalización en materiales, colores y
            configuraciones.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Fabricamos equipamiento infantil para parques públicos,
            centros educativos, urbanizaciones y proyectos de
            urbanización, ofreciendo soluciones adaptadas
            a las dimensiones y características de cada espacio.
          </p>
        </section>

        {/* PROYECTOS PERSONALIZADOS */}

        <section className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Parques infantiles personalizados para cada proyecto
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Cada espacio necesita una solución diferente.
            En BOA Estructuras podemos adaptar los modelos
            de nuestro catálogo a los requisitos de cada
            proyecto, estudiando materiales, dimensiones,
            acabados y configuraciones de juego.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Trabajamos en proyectos de equipamiento de espacios
            públicos, áreas infantiles y zonas recreativas,
            tanto en Valencia como en el resto de España.
          </p>
        </section>

        {/* CONTACTO COMERCIAL */}

        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Solicita presupuesto para tu parque infantil
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            ¿Necesitas instalar un parque infantil o buscas
            un fabricante para tu proyecto?

            Contacta con BOA Estructuras y cuéntanos
            qué tipo de equipamiento necesitas.
          </p>

          <a
            href="/#contacto"
            className="inline-block bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Solicitar presupuesto
          </a>
        </section>

      </div>
    </main>
  );
}

