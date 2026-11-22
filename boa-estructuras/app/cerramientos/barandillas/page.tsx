
import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.boaestructuras.es";
const telefono = "34676208656";

export const metadata: Metadata = {
  title: "Fabricantes de Barandillas Metálicas | BOA Estructuras",
  description:
    "Fabricación de barandillas metálicas en Valencia. Barandillas de acero galvanizado, protecciones peatonales y barandillas a medida para constructoras, ayuntamientos y obras públicas.",
  alternates: {
    canonical: `${baseUrl}/cerramientos/barandillas`,
  },
  openGraph: {
    title: "Barandillas Metálicas a Medida | BOA Estructuras",
    description:
      "Fabricación de barandillas metálicas para calles, zonas peatonales, puentes y espacios públicos. Conoce los modelos BOA137 a BOA140.",
    url: `${baseUrl}/cerramientos/barandillas`,
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
  descripcion: string;
  imagen: string;
  enlace: string;
};

const modelos: Modelo[] = [
  {
    nombre: "BOA137",
    descripcion:
      "Barandilla metálica de seguridad para puentes, viaductos y pasos elevados.",
    imagen: "/fotos/cerramientos/barandillas/boa137/portada.jpg",
    enlace: "/cerramientos/barandillas/boa137",
  },
  {
    nombre: "BOA138",
    descripcion:
      "Barandilla urbana metálica con panel de retícula, resistente y de estética moderna.",
    imagen: "/fotos/cerramientos/barandillas/boa138/portada.jpg",
    enlace: "/cerramientos/barandillas/boa138",
  },
  {
    nombre: "BOA139",
    descripcion:
      "Barandilla urbana peatonal de barrotes verticales para calles, colegios y zonas de paso.",
    imagen: "/fotos/cerramientos/barandillas/boa139/portada.jpg",
    enlace: "/cerramientos/barandillas/boa139",
  },
  {
    nombre: "BOA140",
    descripcion:
      "Barandilla urbana recta de acero galvanizado para protección y canalización peatonal.",
    imagen: "/fotos/cerramientos/barandillas/boa140/portada.jpg",
    enlace: "/cerramientos/barandillas/boa140",
  },
];

export default function BarandillasPage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Barandillas Metálicas | BOA Estructuras",
    description:
      "Catálogo de barandillas metálicas para espacios públicos, zonas peatonales, puentes y proyectos de construcción.",
    url: `${baseUrl}/cerramientos/barandillas`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: modelos.length,
      itemListElement: modelos.map((modelo, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `Barandilla metálica ${modelo.nombre}`,
        url: `${baseUrl}${modelo.enlace}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(catalogoSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <div className="max-w-6xl mx-auto">

        {/* NAVEGACIÓN */}

        <nav
          aria-label="Ruta de navegación"
          className="mb-12 text-sm text-gray-600"
        >
          <Link href="/" className="hover:text-blue-900">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/cerramientos"
            className="hover:text-blue-900"
          >
            Cerramientos
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-gray-900">
            Barandillas
          </span>
        </nav>

        {/* CABECERA PRINCIPAL */}

        <header className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            FABRICACIÓN DE BARANDILLAS METÁLICAS
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            Fabricantes de Barandillas Metálicas
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-4xl mx-auto leading-relaxed">
            En BOA Estructuras fabricamos barandillas
            metálicas para proyectos de obra pública,
            instalaciones urbanas, zonas peatonales
            y espacios con desnivel.

            Nuestro catálogo incluye diferentes
            diseños de barandillas de acero,
            con soluciones destinadas a la protección
            y delimitación de espacios.
          </p>

          <p className="text-gray-600 mt-5 text-lg max-w-4xl mx-auto leading-relaxed">
            Trabajamos desde Valencia para
            ayuntamientos, constructoras,
            empresas y clientes que necesitan
            barandillas metálicas a medida,
            con diferentes configuraciones
            y acabados.
          </p>
        </header>

        {/* CATÁLOGO */}

        <section aria-labelledby="catalogo-barandillas">
          <h2
            id="catalogo-barandillas"
            className="text-3xl font-bold text-gray-900 text-center mb-5"
          >
            Catálogo de barandillas metálicas
          </h2>

          <p className="text-center text-gray-600 text-lg mb-12">
            Descubre nuestros {modelos.length} modelos
            de barandillas metálicas y consulta
            sus características para tu proyecto.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modelos.map((modelo) => {
              const mensaje = encodeURIComponent(
                `Hola, quiero información y presupuesto de la barandilla metálica ${modelo.nombre} de BOA Estructuras.`
              );

              return (
                <article
                  key={modelo.enlace}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col"
                >
                  <Link href={modelo.enlace} className="block group">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={modelo.imagen}
                        alt={`Barandilla metálica modelo ${modelo.nombre} de BOA Estructuras`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="px-7 pt-7">
                      <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                        Modelo de barandilla
                      </span>

                      <h3 className="text-3xl font-black text-gray-900 mt-1">
                        {modelo.nombre}
                      </h3>

                      <div className="w-10 h-[3px] bg-green-500 mt-3 rounded-full" />

                      <p className="text-gray-600 mt-5 leading-relaxed min-h-[96px]">
                        {modelo.descripcion}
                      </p>

                      <span className="inline-block mt-5 bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold">
                        Ver modelo
                      </span>
                    </div>
                  </Link>

                  <div className="px-7 pb-7 pt-5 mt-auto">
                    <a
                      href={`https://wa.me/${telefono}?text=${mensaje}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Solicitar presupuesto de la barandilla ${modelo.nombre} por WhatsApp`}
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold transition"
                    >
                      Solicitar presupuesto
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* FABRICACIÓN */}

        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Fabricación de barandillas metálicas a medida
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            En BOA Estructuras fabricamos barandillas
            metálicas adaptadas a las características
            y necesidades de cada proyecto.

            Trabajamos con estructuras de acero,
            perfiles tubulares, barrotes
            y diferentes configuraciones
            de protección y delimitación.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Podemos estudiar dimensiones,
            geometrías, sistemas de anclaje
            y acabados a partir de planos,
            mediciones y especificaciones técnicas,
            teniendo en cuenta los requisitos
            aplicables a cada instalación.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Barandillas de acero galvanizado para exteriores
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Las barandillas de acero galvanizado
            son una solución utilizada en
            aplicaciones exteriores por su
            protección frente a la corrosión.

            Disponemos de modelos urbanos
            y diferentes opciones de acabado
            según las necesidades del proyecto.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Barandillas para calles, puentes y zonas peatonales
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Nuestro catálogo incluye diseños
            destinados a la delimitación
            y protección de zonas de paso,
            calles, espacios peatonales
            y otras instalaciones urbanas.

            Los requisitos de resistencia,
            altura, geometría y anclaje
            deben estudiarse según la ubicación,
            el uso previsto y la normativa aplicable.
          </p>
        </section>

        {/* CLIENTES PROFESIONALES */}

        <section className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Barandillas metálicas para ayuntamientos y constructoras
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            En BOA Estructuras trabajamos
            en proyectos de carpintería metálica
            para obras públicas, equipamientos
            municipales e instalaciones
            de uso peatonal.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Podemos estudiar la fabricación
            de barandillas adaptadas a
            las características del proyecto,
            incluyendo longitudes,
            alturas, acabados y
            sistemas de instalación.
          </p>
        </section>

        {/* PRESUPUESTOS */}

        <section className="mt-20 rounded-3xl bg-blue-950 p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Solicita presupuesto de barandillas metálicas
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            ¿Necesitas fabricar o instalar
            barandillas metálicas para tu proyecto?

            Contacta con BOA Estructuras
            y cuéntanos las medidas,
            el tipo de barandilla,
            la ubicación y las características
            de la obra.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de barandillas metálicas de BOA Estructuras."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </section>

        {/* ENLACE A CERRAMIENTOS */}

        <div className="mt-14 text-center">
          <Link
            href="/cerramientos"
            className="font-semibold text-blue-900 hover:underline"
          >
            Ver todos los cerramientos metálicos
          </Link>
        </div>

      </div>
    </main>
  );
}
