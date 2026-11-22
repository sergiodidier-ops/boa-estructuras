
import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.boaestructuras.es";
const telefono = "34676208656";

export const metadata: Metadata = {
  title: "Cerramientos Deportivos y Vallados | BOA Estructuras",
  description:
    "Fabricantes de cerramientos deportivos en Valencia. Vallados metálicos para campos de fútbol, pistas polideportivas, colegios e instalaciones deportivas. Solicita presupuesto.",
  alternates: {
    canonical: `${baseUrl}/cerramientos/deportivos`,
  },
  openGraph: {
    title: "Cerramientos Deportivos | BOA Estructuras",
    description:
      "Fabricación de cerramientos deportivos metálicos, vallados perimetrales y mallas electrosoldadas para instalaciones deportivas.",
    url: `${baseUrl}/cerramientos/deportivos`,
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
    nombre: "BOA128",
    descripcion:
      "Cerramiento metálico de malla electrosoldada para instalaciones deportivas y recintos de seguridad.",
    imagen: "/fotos/cerramientos/boa128/portada.jpg",
    enlace: "/cerramientos/deportivos/boa128",
  },
  {
    nombre: "BOA129",
    descripcion:
      "Cerramiento deportivo de gran formato con malla electrosoldada y estructura reforzada.",
    imagen: "/fotos/cerramientos/boa129/portada.jpg",
    enlace: "/cerramientos/deportivos/boa129",
  },
  {
    nombre: "BOA130",
    descripcion:
      "Valla perimetral deportiva galvanizada para separación entre terreno de juego y público.",
    imagen: "/fotos/cerramientos/boa130/portada.jpg",
    enlace: "/cerramientos/deportivos/boa130",
  },
];

export default function CerramientosDeportivosPage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Cerramientos Deportivos | BOA Estructuras",
    description:
      "Catálogo de cerramientos deportivos y vallados metálicos para instalaciones deportivas de BOA Estructuras.",
    url: `${baseUrl}/cerramientos/deportivos`,
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
            Cerramientos deportivos
          </span>
        </nav>

        {/* CABECERA PRINCIPAL */}

        <header className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            FABRICACIÓN DE CERRAMIENTOS METÁLICOS
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            Fabricantes de Cerramientos Deportivos
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-4xl mx-auto leading-relaxed">
            En BOA Estructuras fabricamos cerramientos
            deportivos metálicos para campos de fútbol,
            pistas polideportivas, colegios e
            instalaciones deportivas.

            Ofrecemos soluciones de vallado perimetral
            adaptadas a las dimensiones y características
            de cada proyecto.
          </p>

          <p className="text-gray-600 mt-5 text-lg max-w-4xl mx-auto leading-relaxed">
            Trabajamos con estructuras metálicas,
            mallas electrosoldadas y diferentes
            configuraciones de cerramiento.

            Fabricamos en Valencia y desarrollamos
            proyectos para ayuntamientos,
            constructoras y clientes profesionales.
          </p>
        </header>

        {/* CATÁLOGO */}

        <section aria-labelledby="catalogo-deportivos">
          <h2
            id="catalogo-deportivos"
            className="text-3xl font-bold text-gray-900 text-center mb-10"
          >
            Catálogo de cerramientos deportivos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {modelos.map((modelo) => {
              const mensaje = encodeURIComponent(
                `Hola, quiero información y presupuesto del cerramiento deportivo ${modelo.nombre} de BOA Estructuras.`
              );

              return (
                <article
                  key={modelo.nombre}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col"
                >
                  <Link href={modelo.enlace} className="block group">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={modelo.imagen}
                        alt={`Cerramiento deportivo metálico modelo ${modelo.nombre} de BOA Estructuras`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="px-7 pt-7">
                      <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                        Modelo de cerramiento
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
                      aria-label={`Solicitar presupuesto del cerramiento ${modelo.nombre} por WhatsApp`}
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
            Fabricación de vallados para instalaciones deportivas
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Los cerramientos deportivos permiten
            delimitar instalaciones, separar
            diferentes zonas de juego y establecer
            barreras perimetrales para recintos
            de uso deportivo.

            En BOA Estructuras fabricamos
            cerramientos metálicos adaptados
            a las características de cada instalación.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Podemos estudiar diferentes alturas,
            configuraciones de postes, perfiles
            estructurales y tipos de malla
            en función de las necesidades
            y especificaciones de cada proyecto.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Cerramientos para campos de fútbol y pistas polideportivas
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Fabricamos vallados para campos de fútbol,
            pistas polideportivas, colegios,
            instalaciones municipales y
            otros recintos deportivos.

            Nuestro catálogo incluye diferentes
            modelos de cerramiento metálico
            para estudiar las necesidades
            de delimitación y protección.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Cerramientos deportivos para ayuntamientos y constructoras
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Trabajamos con empresas constructoras,
            administraciones y profesionales
            que necesitan soluciones de
            cerramiento para nuevas instalaciones,
            reformas y ampliaciones de
            equipamientos deportivos.

            Podemos estudiar proyectos a medida
            según planos, mediciones y
            especificaciones técnicas.
          </p>
        </section>

        {/* PRESUPUESTOS */}

        <section className="mt-20 rounded-3xl bg-blue-950 p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Solicita presupuesto de cerramientos deportivos
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            ¿Necesitas fabricar o instalar un cerramiento
            para una pista deportiva, campo de fútbol
            o instalación municipal?

            Contacta con BOA Estructuras
            y cuéntanos las dimensiones,
            tipo de vallado y características
            del proyecto.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de cerramientos deportivos de BOA Estructuras."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </section>

        {/* OTRAS CATEGORÍAS */}

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
