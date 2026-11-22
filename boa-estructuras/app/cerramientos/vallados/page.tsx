
import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.boaestructuras.es";
const telefono = "34676208656";

export const metadata: Metadata = {
  title: "Fabricantes de Vallados Metálicos | BOA Estructuras",
  description:
    "Fabricantes de vallados y vallas metálicas en Valencia. Vallas galvanizadas, malla electrosoldada, barrotes y chapa perforada. Fabricación a medida para empresas y ayuntamientos.",
  alternates: {
    canonical: `${baseUrl}/cerramientos/vallados`,
  },
  openGraph: {
    title: "Vallados Metálicos a Medida | BOA Estructuras",
    description:
      "Fabricación de vallas metálicas para espacios urbanos, industriales, colegios e instalaciones deportivas. Descubre nuestro catálogo de vallados.",
    url: `${baseUrl}/cerramientos/vallados`,
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
    nombre: "BOA131",
    descripcion:
      "Valla metálica de lamas verticales con diseño moderno, resistente y de difícil escalada.",
    imagen: "/fotos/cerramientos/vallados/boa131/portada.jpg",
    enlace: "/cerramientos/vallados/boa131",
  },
  {
    nombre: "BOA132",
    descripcion:
      "Valla metálica de barras verticales galvanizadas, robusta y especialmente indicada para instalaciones deportivas.",
    imagen: "/fotos/cerramientos/vallados/boa132/portada.jpg",
    enlace: "/cerramientos/vallados/boa132",
  },
  {
    nombre: "BOA133",
    descripcion:
      "Valla urbana metálica con diseño decorativo en cruz para protección y delimitación de zonas peatonales.",
    imagen: "/fotos/cerramientos/vallados/boa133/portada.jpg",
    enlace: "/cerramientos/vallados/boa133",
  },
  {
    nombre: "BOA134",
    descripcion:
      "Valla urbana de barrotes verticales diseñada para calles, colegios y zonas de tránsito peatonal.",
    imagen: "/fotos/cerramientos/vallados/boa134/portada.jpg",
    enlace: "/cerramientos/vallados/boa134",
  },
  {
    nombre: "BOA135",
    descripcion:
      "Vallado modular de chapa perforada que combina privacidad, resistencia y una estética moderna.",
    imagen: "/fotos/cerramientos/vallados/boa135/portada.jpg",
    enlace: "/cerramientos/vallados/boa135",
  },
  {
    nombre: "BOA136",
    descripcion:
      "Panel de malla electrosoldada plegada con gran resistencia y múltiples posibilidades de acabado.",
    imagen: "/fotos/cerramientos/vallados/boa136/portada.jpg",
    enlace: "/cerramientos/vallados/boa136",
  },
];

export default function ValladosPage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Fabricantes de Vallados Metálicos | BOA Estructuras",
    description:
      "Catálogo de vallas y vallados metálicos para instalaciones deportivas, espacios urbanos, industriales y residenciales.",
    url: `${baseUrl}/cerramientos/vallados`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: modelos.length,
      itemListElement: modelos.map((modelo, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `Vallado metálico ${modelo.nombre}`,
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

        {/* NAVEGACION */}

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
            Vallados metálicos
          </span>
        </nav>

        {/* CABECERA SEO */}

        <header className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            FABRICACION DE VALLAS Y CERRAMIENTOS
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            Fabricantes de Vallados Metálicos
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-4xl mx-auto leading-relaxed">
            En BOA Estructuras fabricamos vallas y
            vallados metálicos a medida para
            ayuntamientos, constructoras, empresas,
            colegios y espacios públicos.

            Nuestro catálogo incluye vallas de barrotes,
            vallados de malla electrosoldada,
            cerramientos de chapa perforada y
            diferentes soluciones de delimitación
            y protección.
          </p>

          <p className="text-gray-600 mt-5 text-lg max-w-4xl mx-auto leading-relaxed">
            Fabricamos en Valencia y estudiamos
            proyectos de vallados metálicos para
            instalaciones deportivas, recintos
            industriales, urbanizaciones y
            obras públicas en diferentes
            localidades de España.
          </p>
        </header>

        {/* CATALOGO */}

        <section aria-labelledby="catalogo-vallados">
          <h2
            id="catalogo-vallados"
            className="text-3xl font-bold text-gray-900 text-center mb-5"
          >
            Catálogo de vallas y vallados metálicos
          </h2>

          <p className="text-center text-gray-600 text-lg mb-12 max-w-4xl mx-auto">
            Descubre nuestros {modelos.length} modelos de
            vallados metálicos y consulta sus características
            para elegir una solución adaptada a tu proyecto.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modelos.map((modelo) => {
              const mensaje = encodeURIComponent(
                `Hola, quiero información y presupuesto del vallado metálico ${modelo.nombre} de BOA Estructuras.`
              );

              return (
                <article
                  key={modelo.enlace}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col"
                >
                  <Link
                    href={modelo.enlace}
                    className="block group"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={modelo.imagen}
                        alt={`Vallado metálico modelo ${modelo.nombre} de BOA Estructuras`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="px-7 pt-7">
                      <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                        Modelo de vallado
                      </span>

                      <h3 className="text-3xl font-black text-gray-900 mt-1">
                        {modelo.nombre}
                      </h3>

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
                      aria-label={`Solicitar presupuesto del vallado ${modelo.nombre} por WhatsApp`}
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

        {/* FABRICACION A MEDIDA */}

        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Fabricación de vallas metálicas a medida
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            En BOA Estructuras desarrollamos
            soluciones de vallado metálico
            adaptadas a las características
            de cada instalación.

            Trabajamos con diferentes tipos
            de perfiles de acero, estructuras
            tubulares, barrotes, chapas y
            mallas metálicas.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Fabricamos vallados según las
            dimensiones, alturas, configuraciones
            y acabados requeridos.

            Podemos estudiar proyectos
            a partir de planos, mediciones
            y especificaciones técnicas,
            tanto para nuevas instalaciones
            como para reformas y ampliaciones.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Vallados metálicos galvanizados para exteriores
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Los vallados metálicos galvanizados
            son una solución habitual para
            instalaciones exteriores por
            su protección frente a la corrosión.

            En BOA Estructuras trabajamos con
            diferentes acabados y configuraciones,
            según los requisitos de fabricación
            de cada modelo y proyecto.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Vallados para colegios, industrias y espacios urbanos
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Nuestro catálogo permite estudiar
            soluciones de cerramiento para colegios,
            parques municipales, instalaciones
            deportivas, recintos industriales,
            urbanizaciones y zonas peatonales.

            Disponemos de modelos con barrotes
            verticales, lamas metálicas,
            malla electrosoldada y chapa perforada,
            con diferentes posibilidades de
            personalización.
          </p>
        </section>

        {/* CLIENTES PROFESIONALES */}

        <section className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Vallados metálicos para ayuntamientos y constructoras
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Trabajamos en proyectos de
            carpintería metálica destinados
            a obras públicas, instalaciones
            deportivas, espacios urbanos
            y equipamientos municipales.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            En BOA Estructuras podemos
            estudiar las características
            de cada obra, incluyendo
            longitudes, alturas, materiales,
            tipos de malla, acabados
            y sistemas de instalación.

            Fabricamos soluciones de vallado
            para proyectos de diferentes
            dimensiones.
          </p>
        </section>

        {/* PRESUPUESTOS */}

        <section className="mt-20 rounded-3xl bg-blue-950 p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Solicita presupuesto de vallados metálicos
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            ¿Necesitas fabricar o instalar
            vallas metálicas para tu proyecto?

            Contacta con BOA Estructuras
            y cuéntanos los metros lineales,
            la altura, el tipo de vallado
            y las características de la obra.

            Te ayudaremos a estudiar
            una solución adaptada
            a tus necesidades.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de vallados metálicos de BOA Estructuras. Os puedo indicar los metros lineales, altura y tipo de vallado."
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
