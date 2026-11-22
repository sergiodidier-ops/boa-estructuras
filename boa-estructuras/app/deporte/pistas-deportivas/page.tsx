
import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.boaestructuras.es";
const telefono = "34676208656";

export const metadata: Metadata = {
  title: "Fabricantes de Pistas Multideporte | BOA Estructuras",
  description:
    "Fabricación de pistas multideporte y estructuras deportivas en Valencia. Pistas para colegios, parques, ayuntamientos e instalaciones exteriores. Solicita presupuesto.",
  alternates: {
    canonical: `${baseUrl}/deporte/pistas-deportivas`,
  },
  openGraph: {
    title: "Pistas Deportivas y Multideporte | BOA Estructuras",
    description:
      "Catálogo de pistas deportivas para exteriores, colegios y espacios públicos. Fabricación de instalaciones deportivas a medida.",
    url: `${baseUrl}/deporte/pistas-deportivas`,
    siteName: "BOA Estructuras",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const modelos = [
  {
    nombre: "BOA117",
    modelo: "MOD-HP1",
    tipo: "Pista deportiva",
    descripcion:
      "Pista deportiva diseñada para instalaciones exteriores, colegios, parques y espacios deportivos de uso público.",
    imagen: "/fotos/deporte/pistas-deportivas/boa117/portada.png",
    enlace: "/deporte/pistas-deportivas/boa117",
  },
  {
    nombre: "BOA118",
    modelo: "MOD-HP2",
    tipo: "Pista deportiva",
    descripcion:
      "Pista deportiva multiuso para espacios públicos y zonas deportivas.",
    imagen: "/fotos/deporte/pistas-deportivas/boa118/portada.png",
    enlace: "/deporte/pistas-deportivas/boa118",
  },
  {
    nombre: "BOA119",
    modelo: "MOD-HP3",
    tipo: "Pista deportiva",
    descripcion:
      "Pista deportiva exterior preparada para uso intensivo y diferentes actividades deportivas.",
    imagen: "/fotos/deporte/pistas-deportivas/boa119/portada.png",
    enlace: "/deporte/pistas-deportivas/boa119",
  },
];

export default function PistasDeportivasPage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Pistas Deportivas y Multideporte | BOA Estructuras",
    description:
      "Catálogo de pistas deportivas para instalaciones exteriores, colegios, parques y espacios públicos.",
    url: `${baseUrl}/deporte/pistas-deportivas`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: modelos.length,
      itemListElement: modelos.map((modelo, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${modelo.nombre} - ${modelo.modelo}`,
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

          <Link href="/deporte" className="hover:text-blue-900">
            Deporte
          </Link>

          <span className="mx-2">/</span>

          <span className="font-semibold text-gray-900">
            Pistas deportivas
          </span>
        </nav>

        {/* CABECERA SEO */}

        <header className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            EQUIPAMIENTO DEPORTIVO PARA EXTERIORES
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            Fabricantes de Pistas Deportivas y Multideporte
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-4xl mx-auto leading-relaxed">
            En BOA Estructuras fabricamos pistas deportivas
            y estructuras multideporte para instalaciones
            exteriores, colegios, parques, urbanizaciones
            y espacios públicos.

            Disponemos de diferentes modelos de pistas
            deportivas para proyectos municipales,
            centros educativos y zonas recreativas.
          </p>

          <p className="text-gray-600 mt-5 text-lg max-w-4xl mx-auto leading-relaxed">
            Fabricamos en Valencia y estudiamos proyectos
            de equipamiento deportivo para ayuntamientos,
            constructoras y clientes profesionales,
            adaptando las soluciones a las características
            de cada instalación.
          </p>
        </header>

        {/* CATÁLOGO */}

        <section aria-labelledby="catalogo-pistas">
          <h2
            id="catalogo-pistas"
            className="text-3xl font-bold text-gray-900 text-center mb-5"
          >
            Catálogo de pistas deportivas
          </h2>

          <p className="text-center text-gray-600 text-lg mb-12 max-w-4xl mx-auto">
            Descubre nuestros {modelos.length} modelos de
            pistas deportivas y solicita información
            para tu instalación exterior.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modelos.map((modelo) => {
              const mensaje = encodeURIComponent(
                `Hola, quiero información y presupuesto de la pista deportiva ${modelo.nombre} (${modelo.modelo}) de BOA Estructuras.`
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
                        alt={`Pista deportiva ${modelo.nombre} ${modelo.modelo} de BOA Estructuras`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="px-7 pt-7">
                      <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                        {modelo.tipo}
                      </span>

                      <h3 className="text-3xl font-black text-gray-900 mt-1">
                        {modelo.nombre}
                      </h3>

                      <p className="text-sm font-semibold text-gray-500 mt-1">
                        {modelo.modelo}
                      </p>

                      <div className="w-10 h-[3px] bg-green-500 mt-3 rounded-full" />

                      <p className="text-gray-600 mt-5 leading-relaxed min-h-[120px]">
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
                      aria-label={`Solicitar presupuesto de la pista deportiva ${modelo.nombre}`}
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

        {/* FABRICACIÓN A MEDIDA */}

        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Fabricación de pistas multideporte a medida
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            En BOA Estructuras desarrollamos soluciones
            para instalaciones deportivas exteriores,
            estudiando las dimensiones, configuraciones
            y características de cada proyecto.

            Nuestras estructuras deportivas están
            destinadas a equipar espacios de práctica
            deportiva en colegios, parques,
            urbanizaciones e instalaciones municipales.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Podemos estudiar proyectos de nuevas
            instalaciones y reformas a partir de
            planos, mediciones y especificaciones
            técnicas, valorando los elementos
            metálicos y deportivos necesarios.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Pistas deportivas para colegios y ayuntamientos
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Las pistas deportivas exteriores permiten
            aprovechar espacios públicos y escolares
            para desarrollar actividades físicas
            y deportivas.

            En BOA Estructuras ofrecemos
            diferentes modelos de pistas
            para estudiar soluciones destinadas
            a centros educativos, recintos públicos
            y zonas recreativas.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Estructuras metálicas para instalaciones deportivas
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Nuestra experiencia en carpintería metálica
            nos permite estudiar estructuras,
            cerramientos y elementos complementarios
            para instalaciones deportivas.

            Cada proyecto se valora según sus
            dimensiones, características de uso,
            materiales, acabados y requisitos
            técnicos aplicables.
          </p>
        </section>

        {/* CLIENTES PROFESIONALES */}

        <section className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pistas deportivas para proyectos de obra pública
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Trabajamos con proyectos de equipamiento
            deportivo destinados a ayuntamientos,
            constructoras, colegios y espacios
            públicos.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Podemos estudiar el suministro y la
            fabricación de pistas deportivas
            según las mediciones, los planos
            y las necesidades de cada actuación,
            incluyendo configuraciones a medida.
          </p>
        </section>

        {/* PRESUPUESTOS */}

        <section className="mt-20 rounded-3xl bg-blue-950 p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Solicita presupuesto de pistas deportivas
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            ¿Necesitas una pista multideporte
            o equipamiento para una instalación
            deportiva exterior?

            Contacta con BOA Estructuras
            e indícanos las dimensiones,
            la ubicación y las características
            del proyecto.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de una pista deportiva de BOA Estructuras."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </section>

        {/* ENLACES INTERNOS */}

        <div className="mt-14 text-center">
          <Link
            href="/deporte"
            className="font-semibold text-blue-900 hover:underline"
          >
            Ver todo el equipamiento deportivo
          </Link>
        </div>

      </div>
    </main>
  );
}

