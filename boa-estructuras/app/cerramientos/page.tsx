
import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.boaestructuras.es";
const telefono = "34676208656";

export const metadata: Metadata = {
  title: "Fabricantes de Cerramientos Metálicos | BOA Estructuras",
  description:
    "Fabricación de cerramientos metálicos en Valencia. Vallados deportivos, vallas metálicas y barandillas para ayuntamientos, constructoras e instalaciones públicas.",
  alternates: {
    canonical: `${baseUrl}/cerramientos`,
  },
  openGraph: {
    title: "Cerramientos Metálicos | BOA Estructuras",
    description:
      "Fabricación e instalación de cerramientos deportivos, vallados y barandillas metálicas para proyectos públicos y privados.",
    url: `${baseUrl}/cerramientos`,
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
    nombre: "Cerramientos deportivos",
    descripcion:
      "Fabricación de cerramientos metálicos para campos de fútbol, pistas deportivas, colegios y recintos de uso intensivo. Soluciones adaptadas a las necesidades de cada instalación.",
    enlace: "/cerramientos/deportivos",
    boton: "Ver cerramientos deportivos",
  },
  {
    nombre: "Vallados",
    descripcion:
      "Fabricación de vallados metálicos para espacios urbanos, industriales, residenciales y zonas públicas. Diferentes soluciones de delimitación y protección.",
    enlace: "/cerramientos/vallados",
    boton: "Ver vallados metálicos",
  },
  {
    nombre: "Barandillas",
    descripcion:
      "Fabricación de barandillas metálicas de seguridad y protección para calles, puentes, pasos peatonales, instalaciones y zonas con desnivel.",
    enlace: "/cerramientos/barandillas",
    boton: "Ver barandillas",
  },
];

export default function CerramientosPage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Fabricantes de Cerramientos Metálicos | BOA Estructuras",
    description:
      "Catálogo de cerramientos deportivos, vallados y barandillas metálicas de BOA Estructuras.",
    url: `${baseUrl}/cerramientos`,
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
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-16">
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
            Cerramientos metálicos
          </span>
        </nav>

        {/* CABECERA */}

        <header className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-gray-500 font-semibold">
            SEGURIDAD · PROTECCIÓN · DELIMITACIÓN
          </span>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mt-4">
            Fabricantes de Cerramientos Metálicos
          </h1>

          <div className="w-20 h-1 bg-green-500 mx-auto mt-6 rounded-full" />

          <p className="text-gray-600 text-lg max-w-4xl mx-auto mt-7 leading-relaxed">
            En BOA Estructuras nos dedicamos a la
            fabricación de cerramientos metálicos
            para instalaciones deportivas, espacios
            urbanos, zonas industriales y áreas públicas.

            Fabricamos vallados, cerramientos
            deportivos y barandillas metálicas,
            con soluciones adaptadas a los
            requisitos de cada proyecto.
          </p>

          <p className="text-gray-600 text-lg max-w-4xl mx-auto mt-5 leading-relaxed">
            Trabajamos desde Valencia para
            ayuntamientos, constructoras, empresas,
            centros educativos y clientes que necesitan
            soluciones de carpintería metálica
            para exteriores.
          </p>
        </header>

        {/* CATEGORIAS */}

        <section aria-labelledby="tipos-cerramientos">
          <h2
            id="tipos-cerramientos"
            className="text-3xl font-bold text-gray-900 text-center mb-10"
          >
            Nuestros cerramientos y vallados metálicos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <article
                key={categoria.enlace}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col"
              >
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    BOA Estructuras
                  </span>

                  <h3 className="text-3xl font-black text-gray-900 mt-2 leading-tight">
                    {categoria.nombre}
                  </h3>

                  <div className="w-12 h-[3px] bg-green-500 mt-4 rounded-full" />
                </div>

                <p className="text-gray-600 leading-relaxed flex-grow">
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
            Fabricación de cerramientos metálicos a medida
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            En BOA Estructuras desarrollamos
            soluciones de carpintería metálica
            adaptadas a las necesidades de cada
            obra o instalación.

            Fabricamos estructuras y elementos
            metálicos destinados a delimitar,
            proteger y acondicionar espacios
            públicos y privados.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Trabajamos con perfiles y estructuras
            de acero para realizar vallados,
            cerramientos deportivos y barandillas,
            estudiando las dimensiones,
            configuraciones y acabados
            necesarios en cada proyecto.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Cerramientos para instalaciones deportivas
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Fabricamos cerramientos para campos
            deportivos, pistas polideportivas,
            instalaciones educativas y
            recintos de uso público.

            Cada instalación puede requerir
            diferentes alturas, configuraciones
            de postes, estructuras y tipos de malla.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Estudiamos las características del
            recinto para ofrecer soluciones
            adaptadas al espacio y a los
            requisitos técnicos de la obra.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Vallados metálicos y barandillas de seguridad
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Nuestro catálogo incluye vallados
            metálicos para espacios urbanos,
            industriales y residenciales,
            así como barandillas para
            protección de zonas peatonales,
            desniveles y otros espacios.

            Podemos estudiar diferentes
            configuraciones y acabados
            según las especificaciones
            de cada proyecto.
          </p>
        </section>

        {/* CLIENTES PROFESIONALES */}

        <section className="mt-20 bg-white rounded-3xl border border-gray-100 shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Cerramientos metálicos para ayuntamientos y constructoras
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            En BOA Estructuras trabajamos
            con proyectos de cerramientos
            y carpintería metálica para
            obras públicas, instalaciones
            deportivas, centros educativos
            y espacios urbanos.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Ofrecemos soluciones de fabricación
            adaptadas a las dimensiones,
            necesidades técnicas y condiciones
            de cada actuación.

            Desde Valencia desarrollamos
            proyectos para diferentes
            localidades y clientes.
          </p>
        </section>

        {/* SOLICITAR PRESUPUESTO */}

        <section className="mt-20 rounded-3xl bg-blue-950 p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitas un cerramiento metálico?
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Contacta con BOA Estructuras
            para solicitar presupuesto
            de cerramientos deportivos,
            vallados y barandillas metálicas.

            Cuéntanos las dimensiones,
            el tipo de cerramiento
            y las características
            de tu proyecto.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de cerramientos metálicos de BOA Estructuras."
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
