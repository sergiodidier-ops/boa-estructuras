
import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.boaestructuras.es";

export const metadata: Metadata = {
  title: "Fabricantes de Parques Infantiles | BOA Estructuras",
  description:
    "Fabricantes de parques infantiles en Valencia. Parques metálicos, de madera, robinia, columpios y muelles para ayuntamientos, colegios y espacios públicos.",
  alternates: {
    canonical: `${baseUrl}/parques-infantiles`,
  },
  openGraph: {
    title: "Parques Infantiles | BOA Estructuras",
    description:
      "Catálogo de parques infantiles metálicos, de madera, robinia y juegos independientes.",
    url: `${baseUrl}/parques-infantiles`,
    siteName: "BOA Estructuras",
    type: "website",
    locale: "es_ES",
  },
};

const categorias = [
  {
    nombre: "Parques Infantiles Metálicos",
    subtitulo: "Serie Metal",
    descripcion:
      "Conjuntos de juego infantiles con estructuras metálicas, plataformas, toboganes y diferentes elementos de actividad.",
    imagen: "/fotos/metal/mod-ksa-roco/portada.png",
    enlace: "/parques-infantiles/metal",
  },
  {
    nombre: "Parques Infantiles de Madera",
    subtitulo: "Serie Madera",
    descripcion:
      "Parques infantiles con estructuras de madera y múltiples configuraciones para colegios, jardines y espacios públicos.",
    imagen: "/fotos/madera/mod-kdiz/portada.png",
    enlace: "/parques-infantiles/madera",
  },
  {
    nombre: "Parques Infantiles de Robinia",
    subtitulo: "Serie Robinia",
    descripcion:
      "Juegos infantiles de madera de robinia con diseños naturales para parques, colegios y entornos recreativos.",
    imagen: "/fotos/robinia/mod-rbn01/portada.png",
    enlace: "/parques-infantiles/robinia",
  },
  {
    nombre: "Jugar es Crecer",
    subtitulo: "Serie Jugar es Crecer",
    descripcion:
      "Conjuntos de juego infantiles con diferentes diseños, plataformas y actividades para espacios de juego.",
    imagen: "/fotos/jugar-es-crecer/mod-castano/portada.png",
    enlace: "/parques-infantiles/jugar-es-crecer",
  },
  {
    nombre: "Juegos Independientes",
    subtitulo: "Columpios y Muelles",
    descripcion:
      "Catálogo de columpios, balancines, muelles y juegos infantiles independientes para completar parques.",
    imagen: "/fotos/independiente/columpios/col-metal-duo/portada.png",
    enlace: "/parques-infantiles/independiente",
  },
];

export default function ParquesInfantilesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Parques Infantiles | BOA Estructuras",
    url: `${baseUrl}/parques-infantiles`,
    description:
      "Catálogo de parques infantiles y equipamiento de juego fabricado por BOA Estructuras.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: categorias.length,
      itemListElement: categorias.map((categoria, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: categoria.nombre,
        url: `${baseUrl}${categoria.enlace}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl">

        {/* NAVEGACION */}

        <nav
          aria-label="Ruta de navegación"
          className="mb-12 text-sm text-gray-600"
        >
          <Link href="/" className="hover:text-blue-900">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-gray-900">
            Parques infantiles
          </span>
        </nav>

        {/* CABECERA */}

        <header className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            BOA ESTRUCTURAS
          </span>

          <h1 className="mt-4 text-4xl font-black text-gray-900 md:text-5xl">
            Fabricantes de Parques Infantiles
          </h1>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-green-500" />

          <p className="mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-gray-600">
            En BOA Estructuras diseñamos y fabricamos
            parques infantiles para ayuntamientos,
            colegios, urbanizaciones y espacios públicos.

            Disponemos de diferentes series de
            juegos infantiles metálicos, de madera,
            de robinia y elementos independientes.
          </p>
        </header>

        {/* CATEGORIAS */}

        <section aria-labelledby="catalogo-titulo">
          <h2
            id="catalogo-titulo"
            className="mb-12 text-center text-3xl font-bold text-gray-900"
          >
            Nuestro Catálogo de Parques Infantiles
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categorias.map((categoria) => (
              <article
                key={categoria.enlace}
                className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Link href={categoria.enlace} className="group block">
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-gray-50 p-5">
                    <img
                      src={categoria.imagen}
                      alt={`${categoria.nombre} de BOA Estructuras`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="flex flex-grow flex-col p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    {categoria.subtitulo}
                  </span>

                  <h3 className="mt-2 text-2xl font-black text-gray-900">
                    {categoria.nombre}
                  </h3>

                  <div className="mt-4 h-[3px] w-12 rounded-full bg-green-500" />

                  <p className="mt-5 flex-grow leading-relaxed text-gray-600">
                    {categoria.descripcion}
                  </p>

                  <Link
                    href={categoria.enlace}
                    className="mt-7 inline-block self-start rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Ver modelos
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* INFORMACION SEO */}

        <section className="mx-auto mt-24 max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Fabricación de Parques Infantiles en Valencia
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            En BOA Estructuras fabricamos
            equipamiento infantil con diferentes
            materiales y configuraciones.

            Nuestro catálogo incluye conjuntos
            multijuego, columpios, muelles,
            estructuras metálicas y juegos de madera
            para zonas infantiles.
          </p>

          <h2 className="mb-6 mt-12 text-3xl font-bold text-gray-900">
            Parques Infantiles para Ayuntamientos y Colegios
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            Estudiamos proyectos de equipamiento
            infantil para parques municipales,
            centros educativos, áreas recreativas
            y espacios públicos.

            Podemos valorar configuraciones,
            dimensiones y acabados según los
            requisitos de cada instalación,
            teniendo en cuenta las condiciones
            de uso y la normativa aplicable.
          </p>
        </section>

        {/* PRESUPUESTO */}

        <section className="mt-20 rounded-3xl bg-blue-950 p-8 text-center md:p-14">
          <h2 className="mb-6 text-3xl font-bold text-white">
            Solicita presupuesto de parques infantiles
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg text-blue-100">
            Contacta con BOA Estructuras para
            solicitar información sobre nuestros
            modelos de parques infantiles,
            columpios y equipamiento de juego.
          </p>

          <a
            href={`https://wa.me/34676208656?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de parques infantiles de BOA Estructuras."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-green-600 px-8 py-4 font-semibold text-white hover:bg-green-700"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </section>

      </div>
    </main>
  );
}


