
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fabricantes de Columpios Infantiles | BOA Estructuras",
  description:
    "Fabricantes de columpios infantiles para parques públicos, colegios y urbanizaciones. Columpios dobles, de cesta y diferentes estructuras para exteriores. Consulta los 12 modelos de BOA Estructuras.",
  alternates: {
    canonical:
      "https://www.boaestructuras.es/parques-infantiles/independiente/columpios",
  },
  openGraph: {
    title: "Fabricantes de Columpios Infantiles | BOA Estructuras",
    description:
      "Catálogo de columpios infantiles para exteriores. Fabricación de equipamiento para parques públicos, colegios y urbanizaciones.",
    url: "https://www.boaestructuras.es/parques-infantiles/independiente/columpios",
    siteName: "BOA Estructuras",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type Modelo = {
  nombre: string;
  imagen: string;
  enlace: string;
};

const modelos: Modelo[] = [
  {
    nombre: "COL-METAL-DUO",
    imagen: "/fotos/independiente/columpios/col-metal-duo/portada.png",
    enlace: "/parques-infantiles/independiente/columpios/col-metal-duo",
  },
  {
    nombre: "COL-METAL-CESTA",
    imagen: "/fotos/independiente/columpios/col-metal-cesta/portada.png",
    enlace: "/parques-infantiles/independiente/columpios/col-metal-cesta",
  },
  {
    nombre: "COL-DUO-BABY",
    imagen: "/fotos/independiente/columpios/col-duo-baby/portada.png",
    enlace: "/parques-infantiles/independiente/columpios/col-duo-baby",
  },
  {
    nombre: "COL-PEH",
    imagen: "/fotos/independiente/columpios/col-peh/portada.png",
    enlace: "/parques-infantiles/independiente/columpios/col-peh",
  },
  {
    nombre: "COL-MA",
    imagen: "/fotos/independiente/columpios/col-ma/portada.png",
    enlace: "/parques-infantiles/independiente/columpios/col-ma",
  },
  {
    nombre: "COLMA-CESTA",
    imagen: "/fotos/independiente/columpios/colma-cesta/portada.png",
    enlace: "/parques-infantiles/independiente/columpios/colma-cesta",
  },
  {
    nombre: "COL-AD",
    imagen: "/fotos/independiente/columpios/col-ad/portada.png",
    enlace: "/parques-infantiles/independiente/columpios/col-ad",
  },
  {
    nombre: "COL-MIXTO",
    imagen: "/fotos/independiente/columpios/col-mixto/portada.png",
    enlace: "/parques-infantiles/independiente/columpios/col-mixto",
  },
  {
    nombre: "COLHEX",
    imagen: "/fotos/independiente/columpios/colhex/portada.png",
    enlace: "/parques-infantiles/independiente/columpios/colhex",
  },
  {
    nombre: "COL-MIX",
    imagen: "/fotos/independiente/columpios/col-mix/portada.png",
    enlace: "/parques-infantiles/independiente/columpios/col-mix",
  },
  {
    nombre: "COLEQ",
    imagen: "/fotos/independiente/columpios/coleq/portada.png",
    enlace: "/parques-infantiles/independiente/columpios/coleq",
  },
  {
    nombre: "RBN-COL",
    imagen: "/fotos/independiente/columpios/rbn-col/portada.png",
    enlace: "/parques-infantiles/independiente/columpios/rbn-col",
  },
];

const telefono = "34676208656";
const baseUrl = "https://www.boaestructuras.es";

export default function ColumpiosPage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Fabricantes de Columpios Infantiles | BOA Estructuras",
    description:
      "Catálogo de columpios infantiles para parques públicos, colegios y espacios recreativos.",
    url: `${baseUrl}/parques-infantiles/independiente/columpios`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: modelos.length,
      itemListElement: modelos.map((modelo, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: modelo.nombre,
        url: `${baseUrl}${modelo.enlace}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 px-6 py-20">
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

          <Link
            href="/parques-infantiles/independiente"
            className="hover:text-sky-700"
          >
            Serie Independiente
          </Link>

          <span className="mx-2">/</span>

          <span className="font-semibold text-slate-900">
            Columpios
          </span>
        </nav>

        {/* CABECERA */}

        <header className="text-center mb-20">
          <span className="uppercase tracking-[0.35em] text-sky-700 font-semibold text-sm">
            SERIE INDEPENDIENTE · BOA ESTRUCTURAS
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-800 mt-6">
            Fabricantes de Columpios Infantiles
          </h1>

          <div className="w-32 h-1 bg-sky-500 mx-auto mt-6 rounded-full" />

          <p className="text-xl text-slate-600 mt-10 max-w-4xl mx-auto leading-relaxed">
            En BOA Estructuras fabricamos columpios
            infantiles para parques públicos, colegios,
            urbanizaciones y espacios recreativos.

            Nuestro catálogo incluye diferentes
            configuraciones de columpios para exteriores,
            con opciones destinadas a áreas de juego
            infantiles y proyectos de equipamiento urbano.
          </p>

          <p className="text-lg text-slate-600 mt-6 max-w-4xl mx-auto leading-relaxed">
            Descubre los modelos de nuestra Serie
            Independiente y consulta las diferentes
            opciones disponibles.

            Fabricamos en Valencia y trabajamos
            en proyectos para clientes de toda España.
          </p>
        </header>

        {/* CATALOGO */}

        <section aria-labelledby="catalogo-columpios">
          <h2
            id="catalogo-columpios"
            className="text-3xl font-bold text-slate-800 text-center mb-5"
          >
            Catálogo de columpios para parques infantiles
          </h2>

          <p className="text-center text-slate-600 text-lg mb-12">
            Descubre nuestros {modelos.length} modelos
            de columpios infantiles y solicita
            información para tu proyecto.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {modelos.map((modelo) => {
              const mensaje = encodeURIComponent(
                `Hola, quiero información y presupuesto del columpio infantil ${modelo.nombre} de BOA Estructuras.`
              );

              return (
                <article
                  key={modelo.enlace}
                  className="group bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl border border-sky-100 transition duration-300"
                >
                  <Link href={modelo.enlace} className="block">
                    <div className="bg-gradient-to-b from-sky-50 to-white p-6 overflow-hidden">
                      <img
                        src={modelo.imagen}
                        alt={`Columpio infantil modelo ${modelo.nombre} de BOA Estructuras`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-72 object-contain group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="px-8 pt-8">
                      <span className="text-xs uppercase tracking-[0.3em] text-sky-700">
                        Serie Independiente
                      </span>

                      <h3 className="text-3xl font-black text-slate-800 mt-3">
                        {modelo.nombre}
                      </h3>

                      <div className="w-14 h-[3px] bg-sky-500 rounded-full mt-4" />

                      <span className="inline-block mt-8 bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold">
                        Ver modelo
                      </span>
                    </div>
                  </Link>

                  <div className="px-8 pb-8 pt-5">
                    <a
                      href={`https://wa.me/${telefono}?text=${mensaje}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Solicitar información del columpio ${modelo.nombre} por WhatsApp`}
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold transition"
                    >
                      Solicitar información
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* INFORMACION SOBRE FABRICACION */}

        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Fabricación de columpios infantiles para exteriores
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Los columpios son elementos habituales
            en parques infantiles y zonas de juego,
            y pueden instalarse tanto de forma
            independiente como formando parte
            de áreas recreativas más amplias.

            En BOA Estructuras ofrecemos diferentes
            diseños de columpios para adaptarnos
            a las necesidades de cada proyecto.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Nuestro catálogo incluye modelos con
            diferentes estructuras y configuraciones,
            así como opciones de personalización
            según los materiales y acabados disponibles.
          </p>

          <h2 className="text-3xl font-bold text-slate-800 mt-14 mb-6">
            Columpios para ayuntamientos, colegios y urbanizaciones
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Trabajamos con proyectos de equipamiento
            infantil para parques municipales,
            centros educativos, urbanizaciones,
            zonas residenciales y otros espacios públicos.

            Podemos estudiar las necesidades de
            instalación de cada zona de juego,
            teniendo en cuenta sus dimensiones
            y las características de los modelos.
          </p>
        </section>

        {/* PRESUPUESTOS */}

        <section className="mt-20 rounded-[2rem] bg-[#24345d] p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitas columpios infantiles para tu proyecto?
          </h2>

          <p className="text-lg text-slate-200 max-w-3xl mx-auto mb-8">
            Contacta con BOA Estructuras para solicitar
            información sobre nuestros columpios infantiles,
            opciones de fabricación y presupuestos.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de columpios infantiles de BOA Estructuras."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </section>

        {/* OTRAS CATEGORIAS */}

        <div className="mt-14 text-center">
          <Link
            href="/parques-infantiles/independiente"
            className="font-semibold text-sky-800 hover:underline"
          >
            Ver todos los juegos independientes
          </Link>
        </div>

      </div>
    </main>
  );
}
