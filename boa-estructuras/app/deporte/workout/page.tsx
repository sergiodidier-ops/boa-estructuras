
import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.boaestructuras.es";
const telefono = "34676208656";

export const metadata: Metadata = {
  title: "Fabricantes de Parques de Calistenia | BOA Estructuras",
  description:
    "Fabricantes de parques de calistenia y street workout en Valencia. Estructuras de entrenamiento al aire libre para ayuntamientos, colegios e instalaciones deportivas. Solicita presupuesto.",
  alternates: {
    canonical: `${baseUrl}/deporte/workout`,
  },
  openGraph: {
    title: "Parques de Calistenia y Street Workout | BOA Estructuras",
    description:
      "Catálogo de estructuras de workout para exteriores. Fabricación de barras, circuitos y equipamiento de calistenia para parques públicos.",
    url: `${baseUrl}/deporte/workout`,
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
  modelo: string;
  descripcion: string;
  imagen: string;
  enlace: string;
};

const modelos: Modelo[] = [
  {
    nombre: "BOA122",
    modelo: "MOD-W01",
    descripcion:
      "Conjunto de workout para entrenamiento funcional al aire libre con barras, pasamanos y elementos de trepa.",
    imagen: "/fotos/deporte/workout/boa122/portada.png",
    enlace: "/deporte/workout/boa122",
  },
  {
    nombre: "BOA123",
    modelo: "MOD-WK02",
    descripcion:
      "Estructura modular de workout con barras de distintas alturas, banco inclinado y elementos para ejercicios de fuerza.",
    imagen: "/fotos/deporte/workout/boa123/portada.png",
    enlace: "/deporte/workout/boa123",
  },
  {
    nombre: "BOA124",
    modelo: "MOD-W03",
    descripcion:
      "Circuito de workout con barras horizontales, anillas y elementos de suspensión para entrenamiento completo.",
    imagen: "/fotos/deporte/workout/boa124/portada.png",
    enlace: "/deporte/workout/boa124",
  },
  {
    nombre: "BOA125",
    modelo: "MOD-WK04",
    descripcion:
      "Conjunto de calistenia con barras, anillas y distintos niveles de ejercicio para zonas deportivas exteriores.",
    imagen: "/fotos/deporte/workout/boa125/portada.png",
    enlace: "/deporte/workout/boa125",
  },
  {
    nombre: "BOA126",
    modelo: "MOD-W05",
    descripcion:
      "Estructura completa de workout con pasamanos, escalera vertical, anillas y barras paralelas.",
    imagen: "/fotos/deporte/workout/boa126/portada.png",
    enlace: "/deporte/workout/boa126",
  },
];

export default function WorkoutPage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Parques de Calistenia y Street Workout | BOA Estructuras",
    description:
      "Catálogo de parques de calistenia y estructuras de workout para entrenamiento al aire libre.",
    url: `${baseUrl}/deporte/workout`,
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
          __html: JSON.stringify(catalogoSchema).replace(/</g, "\\u003c"),
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
            href="/deporte"
            className="hover:text-blue-900"
          >
            Equipamiento deportivo
          </Link>

          <span className="mx-2">/</span>

          <span className="font-semibold text-gray-900">
            Workout y Calistenia
          </span>
        </nav>

        {/* CABECERA PRINCIPAL */}

        <header className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            EQUIPAMIENTO DEPORTIVO PARA EXTERIORES
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            Fabricantes de Parques de Calistenia y Street Workout
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-4xl mx-auto leading-relaxed">
            En BOA Estructuras fabricamos parques
            de calistenia y equipamiento de street
            workout para entrenamiento al aire libre.

            Nuestro catálogo incluye estructuras
            metálicas con barras, pasamanos,
            anillas y diferentes elementos
            destinados al ejercicio funcional
            y al entrenamiento con el propio
            peso corporal.
          </p>

          <p className="text-gray-600 mt-5 text-lg max-w-4xl mx-auto leading-relaxed">
            Diseñamos y fabricamos equipamiento
            para ayuntamientos, colegios,
            zonas deportivas, urbanizaciones
            e instalaciones públicas.

            Fabricamos en Valencia y estudiamos
            proyectos de calistenia para
            clientes de toda España.
          </p>
        </header>

        {/* CATALOGO */}

        <section aria-labelledby="catalogo-workout">
          <h2
            id="catalogo-workout"
            className="text-3xl font-bold text-gray-900 text-center mb-5"
          >
            Catálogo de parques de calistenia
          </h2>

          <p className="text-center text-gray-600 text-lg mb-12 max-w-4xl mx-auto">
            Descubre nuestros {modelos.length} modelos de
            estructuras de workout y solicita información
            para tu proyecto de entrenamiento al aire libre.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modelos.map((modelo) => {
              const mensaje = encodeURIComponent(
                `Hola, quiero información y presupuesto del parque de calistenia ${modelo.nombre} (${modelo.modelo}) de BOA Estructuras.`
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
                        alt={`Parque de calistenia modelo ${modelo.nombre} ${modelo.modelo} de BOA Estructuras`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="px-7 pt-7">
                      <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                        Equipamiento Workout
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
                      aria-label={`Solicitar presupuesto del parque de calistenia ${modelo.nombre} por WhatsApp`}
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

        {/* FABRICACION */}

        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Fabricación de parques de calistenia para exteriores
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Los parques de calistenia permiten
            desarrollar espacios de entrenamiento
            al aire libre mediante estructuras
            de barras y diferentes elementos
            para ejercicios con el propio
            peso corporal.

            En BOA Estructuras fabricamos
            equipamiento de workout con
            estructuras metálicas y diversas
            configuraciones de ejercicio.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Nuestro catálogo incluye modelos
            con barras de diferentes alturas,
            pasamanos, anillas, bancos
            y elementos de suspensión,
            según la configuración de
            cada estructura.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Parques de street workout para ayuntamientos y colegios
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Fabricamos equipamiento para
            parques públicos, instalaciones
            municipales, centros educativos
            y zonas deportivas exteriores.

            Podemos estudiar la disposición
            de las estructuras y sus
            características en función
            de las dimensiones y necesidades
            de cada proyecto.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Estructuras de entrenamiento funcional al aire libre
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Los circuitos de entrenamiento
            funcional permiten incorporar
            ejercicios de fuerza, suspensión
            y movilidad en espacios exteriores.

            En BOA Estructuras podemos
            estudiar diferentes configuraciones
            de estructuras, barras y
            elementos deportivos para
            desarrollar zonas de entrenamiento
            adaptadas al espacio disponible.

            Las dimensiones, áreas de uso
            y requisitos de seguridad deben
            verificarse para cada instalación.
          </p>
        </section>

        {/* CLIENTES PROFESIONALES */}

        <section className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Equipamiento de calistenia para proyectos municipales
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            En BOA Estructuras trabajamos
            con proyectos de equipamiento
            deportivo para ayuntamientos,
            constructoras y centros educativos.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Podemos estudiar proyectos
            de fabricación de calistenia
            a partir de planos,
            mediciones y especificaciones
            técnicas, valorando materiales,
            dimensiones, configuraciones
            y acabados.
          </p>
        </section>

        {/* SOLICITUD DE PRESUPUESTO */}

        <section className="mt-20 rounded-3xl bg-blue-950 p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Solicita presupuesto de parques de calistenia
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            ¿Necesitas instalar un parque
            de calistenia o equipamiento
            de workout para exteriores?

            Contacta con BOA Estructuras
            y cuéntanos el espacio disponible,
            el tipo de equipamiento
            y las necesidades de tu proyecto.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de un parque de calistenia de BOA Estructuras."
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
