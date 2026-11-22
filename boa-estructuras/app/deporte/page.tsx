
import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.boaestructuras.es";
const telefono = "34676208656";

export const metadata: Metadata = {
  title: "Fabricantes de Equipamiento Deportivo | BOA Estructuras",
  description:
    "Fabricación de pistas deportivas, parques de calistenia y equipamiento deportivo para exteriores. Instalaciones para ayuntamientos, colegios y espacios públicos.",
  alternates: {
    canonical: `${baseUrl}/deporte`,
  },
  openGraph: {
    title: "Equipamiento Deportivo y Calistenia | BOA Estructuras",
    description:
      "Diseño y fabricación de pistas multideporte, parques workout, calistenia, porterías y canastas para espacios públicos.",
    url: `${baseUrl}/deporte`,
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
    nombre: "Pistas deportivas",
    descripcion:
      "Fabricación de pistas multideporte y estructuras deportivas para colegios, parques, instalaciones municipales y espacios de uso intensivo.",
    enlace: "/deporte/pistas-deportivas",
    boton: "Ver pistas deportivas",
  },
  {
    nombre: "Workout y Calistenia",
    descripcion:
      "Fabricación de parques de calistenia y equipamiento de street workout para entrenamiento funcional, ejercicio al aire libre y espacios deportivos públicos.",
    enlace: "/deporte/workout",
    boton: "Ver parques de calistenia",
  },
  {
    nombre: "Elementos deportivos",
    descripcion:
      "Fabricación de porterías, canastas y otros elementos deportivos para completar pistas, colegios, parques y recintos municipales.",
    enlace: "/deporte/elementos-deportivos",
    boton: "Ver elementos deportivos",
  },
];

export default function DeportePage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Equipamiento Deportivo | BOA Estructuras",
    description:
      "Fabricación de pistas deportivas, parques de calistenia y equipamiento deportivo para exteriores.",
    url: `${baseUrl}/deporte`,
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

          <span className="font-semibold text-gray-900">
            Equipamiento deportivo
          </span>
        </nav>

        {/* CABECERA PRINCIPAL */}

        <header className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-gray-500 font-semibold">
            BOA ESTRUCTURAS · FABRICACIÓN DEPORTIVA
          </span>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mt-4">
            Fabricantes de Equipamiento Deportivo
          </h1>

          <div className="w-20 h-1 bg-green-500 mx-auto mt-6 rounded-full" />

          <p className="text-gray-600 text-lg max-w-4xl mx-auto mt-7 leading-relaxed">
            En BOA Estructuras fabricamos equipamiento
            deportivo para exteriores, instalaciones
            municipales, centros educativos,
            parques y espacios públicos.

            Nuestro catálogo incluye pistas
            multideporte, parques de calistenia,
            estructuras de street workout,
            porterías, canastas y otros
            elementos deportivos.
          </p>

          <p className="text-gray-600 text-lg max-w-4xl mx-auto mt-5 leading-relaxed">
            Diseñamos y fabricamos soluciones
            adaptadas a las características
            y dimensiones de cada proyecto.

            Trabajamos desde Valencia para
            ayuntamientos, constructoras,
            colegios y clientes profesionales
            de toda España.
          </p>
        </header>

        {/* CATEGORIAS */}

        <section aria-labelledby="catalogo-deportivo">
          <h2
            id="catalogo-deportivo"
            className="text-3xl font-bold text-gray-900 text-center mb-10"
          >
            Nuestro catálogo de equipamiento deportivo
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <article
                key={categoria.enlace}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col"
              >
                <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  BOA Estructuras
                </span>

                <h3 className="text-3xl font-black text-gray-900 mt-2 leading-tight">
                  {categoria.nombre}
                </h3>

                <div className="w-12 h-[3px] bg-green-500 mt-4 rounded-full" />

                <p className="text-gray-600 mt-6 leading-relaxed flex-grow">
                  {categoria.descripcion}
                </p>

                <Link
                  href={categoria.enlace}
                  className="inline-block self-start mt-8 bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  {categoria.boton}
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* FABRICACION */}

        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Fabricación de instalaciones y equipamiento deportivo
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            En BOA Estructuras desarrollamos
            soluciones para la creación,
            renovación y ampliación de
            instalaciones deportivas.

            Fabricamos estructuras metálicas
            y equipamiento adaptado a
            diferentes actividades deportivas
            y espacios exteriores.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Nuestro catálogo incluye
            diferentes modelos y configuraciones,
            con posibilidades de personalización
            en dimensiones, materiales y acabados
            según los requisitos de cada proyecto.
          </p>

          {/* CALISTENIA */}

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Fabricantes de parques de calistenia y street workout
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Los parques de calistenia permiten
            crear espacios de entrenamiento
            al aire libre para realizar
            ejercicios con el propio peso corporal.

            En BOA Estructuras fabricamos
            estructuras de workout para
            zonas deportivas, parques públicos
            e instalaciones municipales.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Podemos estudiar diferentes
            configuraciones de barras,
            postes y estructuras metálicas
            según el espacio disponible
            y las necesidades de entrenamiento.

            Consulta nuestra gama de
            equipamiento para calistenia.
          </p>

          <Link
            href="/deporte/workout"
            className="inline-block text-blue-900 font-semibold hover:underline"
          >
            Descubrir parques de calistenia
          </Link>

          {/* PISTAS */}

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Fabricación de pistas multideporte
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Fabricamos estructuras para
            pistas multideporte destinadas
            a colegios, parques,
            urbanizaciones e instalaciones
            deportivas municipales.

            Estas instalaciones permiten
            combinar diferentes actividades
            deportivas en un mismo espacio.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Estudiamos las dimensiones,
            configuraciones de cerramiento
            y elementos deportivos necesarios
            para cada proyecto.
          </p>

          <Link
            href="/deporte/pistas-deportivas"
            className="inline-block text-blue-900 font-semibold hover:underline"
          >
            Ver modelos de pistas deportivas
          </Link>

          {/* ELEMENTOS */}

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Porterías, canastas y elementos deportivos
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Disponemos de equipamiento
            deportivo para completar
            instalaciones escolares,
            pistas municipales y
            zonas recreativas.

            Nuestro catálogo incluye
            porterías, canastas
            y diferentes elementos
            para la práctica deportiva.
          </p>

          <Link
            href="/deporte/elementos-deportivos"
            className="inline-block text-blue-900 font-semibold hover:underline"
          >
            Ver elementos deportivos
          </Link>
        </section>

        {/* CLIENTES PROFESIONALES */}

        <section className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Equipamiento deportivo para ayuntamientos y colegios
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Trabajamos en proyectos
            de equipamiento deportivo
            para obras públicas,
            centros educativos,
            instalaciones municipales
            y espacios recreativos.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Podemos estudiar diferentes
            soluciones de fabricación
            a partir de planos,
            mediciones y especificaciones
            técnicas del proyecto,
            teniendo en cuenta los
            requisitos de instalación
            y seguridad aplicables.
          </p>
        </section>

        {/* PRESUPUESTOS */}

        <section className="mt-20 rounded-3xl bg-blue-950 p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Solicita presupuesto de equipamiento deportivo
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            ¿Necesitas instalar una pista
            multideporte, un parque de calistenia
            o equipamiento para una instalación
            deportiva?

            Contacta con BOA Estructuras
            y cuéntanos las dimensiones,
            el tipo de equipamiento
            y las características de tu proyecto.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de equipamiento deportivo de BOA Estructuras."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </section>

      </div>
    </main>
  );
}
