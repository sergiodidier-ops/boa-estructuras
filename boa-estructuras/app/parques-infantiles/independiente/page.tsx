
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Columpios y Muelles Infantiles | BOA Estructuras",
  description:
    "Fabricantes de columpios y juegos de muelle para parques infantiles. Equipamiento de exterior para ayuntamientos, colegios y espacios públicos. Descubre la Serie Independiente de BOA Estructuras.",
  alternates: {
    canonical:
      "https://www.boaestructuras.es/parques-infantiles/independiente",
  },
  openGraph: {
    title: "Columpios y Muelles Infantiles | BOA Estructuras",
    description:
      "Catálogo de columpios y juegos de muelle infantiles. Fabricación y equipamiento para parques públicos, colegios y zonas recreativas.",
    url: "https://www.boaestructuras.es/parques-infantiles/independiente",
    siteName: "BOA Estructuras",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const categorias = [
  {
    nombre: "Columpios infantiles",
    descripcion:
      "Columpios individuales y múltiples para parques infantiles, colegios y espacios públicos. Descubre diferentes configuraciones para completar áreas de juego exteriores.",
    enlace: "/parques-infantiles/independiente/columpios",
    color: "sky",
  },
  {
    nombre: "Juegos de muelle infantiles",
    descripcion:
      "Juegos de muelle para parques infantiles y zonas recreativas. Elementos de balanceo que favorecen el movimiento, la coordinación y las experiencias de juego.",
    enlace: "/parques-infantiles/independiente/muelles",
    color: "emerald",
  },
];

const telefono = "34676208656";
const baseUrl = "https://www.boaestructuras.es";

export default function IndependientePage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Columpios y Muelles Infantiles | BOA Estructuras",
    description:
      "Catálogo de elementos independientes de juego infantil, columpios y muelles para exteriores.",
    url: `${baseUrl}/parques-infantiles/independiente`,
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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(catalogoSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <div className="max-w-7xl mx-auto">

        {/* NAVEGACION */}

        <nav
          aria-label="Ruta de navegación"
          className="mb-12 text-sm text-slate-600"
        >
          <Link href="/" className="hover:text-sky-700">
            Inicio
          </Link>

          <span className="mx-2">/</span>

          <Link
            href="/parques-infantiles"
            className="hover:text-sky-700"
          >
            Parques infantiles
          </Link>

          <span className="mx-2">/</span>

          <span className="font-semibold text-[#24345d]">
            Serie Independiente
          </span>
        </nav>

        {/* CABECERA */}

        <header className="text-center mb-24">
          <span className="uppercase tracking-[0.35em] text-sky-700 font-semibold text-sm">
            ELEMENTOS INDIVIDUALES DE JUEGO
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#24345d] mt-6">
            Columpios y Muelles Infantiles
          </h1>

          <div className="w-32 h-1 bg-sky-500 mx-auto mt-6 rounded-full" />

          <p className="text-xl text-slate-600 mt-10 max-w-4xl mx-auto leading-relaxed">
            En BOA Estructuras fabricamos elementos
            independientes de juego infantil para
            completar parques, áreas recreativas,
            colegios y espacios públicos.

            Nuestra Serie Independiente incluye
            columpios infantiles y juegos de muelle,
            con diferentes diseños y posibilidades
            de adaptación a cada proyecto.
          </p>

          <p className="text-lg text-slate-600 mt-6 max-w-4xl mx-auto leading-relaxed">
            Trabajamos en proyectos de equipamiento
            infantil desde Valencia para ayuntamientos,
            constructoras y clientes de toda España.
          </p>
        </header>

        {/* CATEGORIAS */}

        <section aria-labelledby="categorias-independientes">
          <h2
            id="categorias-independientes"
            className="text-3xl font-bold text-[#24345d] text-center mb-16"
          >
            Catálogo de juegos infantiles independientes
          </h2>

          <div className="max-w-4xl mx-auto space-y-20">

            {/* COLUMPIOS */}

            <article>
              <Link
                href="/parques-infantiles/independiente/columpios"
                className="group block"
              >
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#24345d] group-hover:text-sky-600 transition">
                  Columpios infantiles
                </h3>

                <div className="w-24 h-1 bg-sky-500 rounded-full mt-4 group-hover:w-40 transition-all duration-300" />

                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Fabricación de columpios individuales
                  y múltiples para parques infantiles,
                  colegios y espacios públicos.

                  Descubre nuestra gama de columpios
                  para exteriores y sus diferentes
                  configuraciones de juego.
                </p>

                <span className="inline-block mt-6 bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-xl font-semibold transition">
                  Ver columpios
                </span>
              </Link>
            </article>

            {/* MUELLES */}

            <article>
              <Link
                href="/parques-infantiles/independiente/muelles"
                className="group block"
              >
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#24345d] group-hover:text-emerald-600 transition">
                  Juegos de muelle infantiles
                </h3>

                <div className="w-24 h-1 bg-emerald-500 rounded-full mt-4 group-hover:w-40 transition-all duration-300" />

                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Juegos de muelle para áreas infantiles
                  y espacios recreativos exteriores.

                  Estos elementos ofrecen experiencias
                  de balanceo y movimiento mediante
                  diferentes diseños infantiles.
                </p>

                <span className="inline-block mt-6 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-xl font-semibold transition">
                  Ver juegos de muelle
                </span>
              </Link>
            </article>

          </div>
        </section>

        {/* FABRICACION */}

        <section className="mt-28 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#24345d] mb-6">
            Fabricantes de columpios y juegos infantiles para exteriores
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Los juegos infantiles independientes permiten
            ampliar las posibilidades de uso de un parque
            infantil sin necesidad de incorporar
            un conjunto multijuego completo.

            En BOA Estructuras fabricamos equipamiento
            infantil para exteriores, con opciones
            destinadas a diferentes espacios
            y proyectos de instalación.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed">
            Nuestros columpios y juegos de muelle
            pueden formar parte de nuevas áreas
            recreativas o utilizarse en actuaciones
            de renovación y ampliación de parques
            infantiles existentes.
          </p>

          <h2 className="text-3xl font-bold text-[#24345d] mt-14 mb-6">
            Equipamiento infantil para ayuntamientos y colegios
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Ofrecemos soluciones para parques públicos,
            centros educativos, urbanizaciones y
            zonas de juego exteriores.

            Podemos estudiar diferentes modelos,
            configuraciones y acabados según
            las características de cada proyecto,
            teniendo en cuenta los requisitos
            de instalación y seguridad aplicables.
          </p>
        </section>

        {/* SOLICITUD DE PRESUPUESTO */}

        <section className="mt-20 rounded-3xl bg-[#24345d] p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitas columpios o juegos de muelle?
          </h2>

          <p className="text-lg text-slate-200 max-w-3xl mx-auto mb-8">
            Contacta con BOA Estructuras para consultar
            nuestro catálogo de elementos independientes
            y solicitar presupuesto para tu proyecto.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de columpios o juegos de muelle de BOA Estructuras."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </section>

        {/* OTRAS SERIES */}

        <div className="mt-14 text-center">
          <Link
            href="/parques-infantiles"
            className="font-semibold text-[#24345d] hover:underline"
          >
            Ver todas las series de parques infantiles
          </Link>
        </div>

      </div>
    </main>
  );
}
