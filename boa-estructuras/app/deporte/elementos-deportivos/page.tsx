
import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.boaestructuras.es";
const telefono = "34676208656";

export const metadata: Metadata = {
  title: "Fabricantes de Elementos Deportivos | BOA Estructuras",
  description:
    "Fabricación de porterías, canastas y elementos deportivos metálicos para colegios, pistas deportivas, ayuntamientos e instalaciones exteriores. BOA Estructuras, Valencia.",
  alternates: {
    canonical: `${baseUrl}/deporte/elementos-deportivos`,
  },
  openGraph: {
    title: "Porterías, Canastas y Equipamiento Deportivo | BOA Estructuras",
    description:
      "Elementos deportivos para pistas multideporte, colegios e instalaciones municipales. Fabricación y soluciones a medida.",
    url: `${baseUrl}/deporte/elementos-deportivos`,
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
    nombre: "Porterías deportivas",
    descripcion:
      "Soluciones de porterías y estructuras metálicas para pistas deportivas, centros educativos e instalaciones exteriores.",
  },
  {
    nombre: "Canastas de baloncesto",
    descripcion:
      "Equipamiento de baloncesto para completar zonas multideporte, patios escolares e instalaciones deportivas.",
  },
  {
    nombre: "Estructuras deportivas a medida",
    descripcion:
      "Fabricación de elementos metálicos complementarios para instalaciones deportivas según los requisitos de cada proyecto.",
  },
];

export default function ElementosDeportivosPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Elementos Deportivos | BOA Estructuras",
    description:
      "Fabricación de porterías, canastas y estructuras metálicas para instalaciones deportivas.",
    url: `${baseUrl}/deporte/elementos-deportivos`,
  };

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
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
            Elementos deportivos
          </span>
        </nav>

        {/* CABECERA */}

        <header className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            EQUIPAMIENTO DEPORTIVO PARA EXTERIORES
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            Fabricantes de Elementos Deportivos
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-4xl mx-auto leading-relaxed">
            En BOA Estructuras trabajamos en la fabricación
            de equipamiento deportivo metálico para
            colegios, ayuntamientos, constructoras
            e instalaciones deportivas exteriores.
          </p>

          <p className="text-gray-600 mt-5 text-lg max-w-4xl mx-auto leading-relaxed">
            Estudiamos soluciones de porterías,
            canastas y estructuras deportivas
            adaptadas a las características
            de cada proyecto.
          </p>
        </header>

        {/* TIPOS DE EQUIPAMIENTO */}

        <section aria-labelledby="tipos-elementos">
          <h2
            id="tipos-elementos"
            className="text-3xl font-bold text-gray-900 text-center mb-10"
          >
            Equipamiento para instalaciones deportivas
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <article
                key={categoria.nombre}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
              >
                <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  BOA Estructuras
                </span>

                <h3 className="text-2xl font-black text-gray-900 mt-3">
                  {categoria.nombre}
                </h3>

                <div className="w-12 h-[3px] bg-green-500 mt-4 rounded-full" />

                <p className="text-gray-600 mt-6 leading-relaxed">
                  {categoria.descripcion}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* FABRICACIÓN */}

        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Fabricación de porterías y canastas para exteriores
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Las porterías y canastas forman parte
            del equipamiento de numerosas pistas
            deportivas y espacios multideporte.

            En BOA Estructuras podemos estudiar
            su fabricación y configuración
            en función del uso previsto
            y las características de cada instalación.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Elementos deportivos para colegios y ayuntamientos
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Estudiamos proyectos para instalaciones
            deportivas municipales, centros educativos,
            urbanizaciones y espacios recreativos,
            teniendo en cuenta las dimensiones,
            los materiales y los requisitos
            técnicos de cada actuación.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Equipamiento deportivo metálico a medida
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Nuestra actividad en carpintería metálica
            nos permite desarrollar soluciones
            adaptadas a planos, mediciones
            y especificaciones técnicas.

            Las condiciones de seguridad,
            resistencia, estabilidad y anclaje
            deben comprobarse según el tipo
            de equipamiento y su uso previsto.
          </p>
        </section>

        {/* PRESUPUESTOS */}

        <section className="mt-20 rounded-3xl bg-blue-950 p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Solicita presupuesto de elementos deportivos
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            ¿Necesitas porterías, canastas
            o estructuras deportivas para una obra?

            Envíanos las medidas, los planos
            o las características del proyecto
            y estudiaremos tu solicitud.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de elementos deportivos de BOA Estructuras."
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
