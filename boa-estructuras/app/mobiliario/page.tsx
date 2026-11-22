
import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.boaestructuras.es";
const telefono = "34676208656";

export const metadata: Metadata = {
  title: "Fabricantes de Mobiliario Urbano | BOA Estructuras",
  description:
    "Fabricantes de mobiliario urbano en Valencia. Bancos de madera y metal, papeleras, mesas de picnic y vallas infantiles para ayuntamientos, parques y espacios públicos.",
  alternates: {
    canonical: `${baseUrl}/mobiliario`,
  },
  openGraph: {
    title: "Mobiliario Urbano | BOA Estructuras",
    description:
      "Fabricación de bancos urbanos, papeleras, mesas de picnic y vallas infantiles para parques, jardines, colegios y espacios públicos.",
    url: `${baseUrl}/mobiliario`,
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
  tipo: string;
  descripcion: string;
  imagen: string;
  enlace: string;
};

const modelos: Modelo[] = [
  {
    nombre: "BOA107",
    modelo: "MOD-BOA",
    tipo: "Banco urbano",
    descripcion:
      "Banco urbano con estructura metálica y listones de madera, diseñado para parques, zonas públicas y espacios de descanso.",
    imagen: "/fotos/mobiliario/boa107/portada.PNG",
    enlace: "/mobiliario/boa107",
  },
  {
    nombre: "BOA108",
    modelo: "MOD-OBA",
    tipo: "Banco urbano",
    descripcion:
      "Banco urbano de líneas modernas con estructura metálica y elementos de madera para espacios exteriores.",
    imagen: "/fotos/mobiliario/boa108/portada.PNG",
    enlace: "/mobiliario/boa108",
  },
  {
    nombre: "BOA109",
    modelo: "MOD-BRILI",
    tipo: "Mesa picnic",
    descripcion:
      "Mesa picnic con estructura metálica y superficie de madera, ideal para parques y áreas recreativas.",
    imagen: "/fotos/mobiliario/boa109/portada.PNG",
    enlace: "/mobiliario/boa109",
  },
  {
    nombre: "BOA110",
    modelo: "MOD-BRU",
    tipo: "Papelera urbana",
    descripcion:
      "Papelera urbana con estructura metálica y revestimiento de madera para uso exterior.",
    imagen: "/fotos/mobiliario/boa110/portada.png",
    enlace: "/mobiliario/boa110",
  },
  {
    nombre: "BOA111",
    modelo: "MOD-LIVI",
    tipo: "Mesa picnic",
    descripcion:
      "Mesa picnic de madera de diseño clásico para parques, áreas recreativas y zonas de descanso.",
    imagen: "/fotos/mobiliario/boa111/portada.png",
    enlace: "/mobiliario/boa111",
  },
  {
    nombre: "BOA112",
    modelo: "MOD-PALI",
    tipo: "Papelera urbana",
    descripcion:
      "Papelera urbana revestida de madera, compacta y diseñada para parques y espacios públicos.",
    imagen: "/fotos/mobiliario/boa112/portada.png",
    enlace: "/mobiliario/boa112",
  },
  {
    nombre: "BOA113",
    modelo: "MOD-VAGAL",
    tipo: "Valla infantil",
    descripcion:
      "Valla infantil de colores para delimitación de parques, colegios y zonas de juego.",
    imagen: "/fotos/mobiliario/boa113/portada.png",
    enlace: "/mobiliario/boa113",
  },
  {
    nombre: "BOA114",
    modelo: "MOD-VAVER",
    tipo: "Valla infantil",
    descripcion:
      "Valla infantil de colores diseñada para delimitar espacios de juego y zonas infantiles.",
    imagen: "/fotos/mobiliario/boa114/portada.png",
    enlace: "/mobiliario/boa114",
  },
  {
    nombre: "BOA115",
    modelo: "MOD-VAMA",
    tipo: "Valla infantil",
    descripcion:
      "Valla infantil con acabado en madera y elementos de colores para parques y áreas recreativas.",
    imagen: "/fotos/mobiliario/boa115/portada.png",
    enlace: "/mobiliario/boa115",
  },
  {
    nombre: "BOA116",
    modelo: "MOD-VALMA",
    tipo: "Valla infantil",
    descripcion:
      "Valla infantil de madera para delimitación de parques y zonas de juego.",
    imagen: "/fotos/mobiliario/boa116/portada.png",
    enlace: "/mobiliario/boa116",
  },
];

export default function MobiliarioPage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Mobiliario Urbano | BOA Estructuras",
    description:
      "Catálogo de bancos urbanos, papeleras, mesas de picnic y vallas infantiles fabricados por BOA Estructuras.",
    url: `${baseUrl}/mobiliario`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: modelos.length,
      itemListElement: modelos.map((modelo, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${modelo.tipo} ${modelo.nombre} - ${modelo.modelo}`,
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
          <span className="font-semibold text-gray-900">
            Mobiliario urbano
          </span>
        </nav>

        {/* CABECERA SEO */}

        <header className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            FABRICACIÓN DE EQUIPAMIENTO URBANO
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            Fabricantes de Mobiliario Urbano
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-4xl mx-auto leading-relaxed">
            En BOA Estructuras fabricamos mobiliario
            urbano para ayuntamientos, constructoras,
            empresas y proyectos de urbanización.

            Nuestro catálogo incluye bancos urbanos,
            papeleras, mesas de picnic y vallas
            infantiles para parques, jardines,
            centros educativos y espacios públicos.
          </p>

          <p className="text-gray-600 mt-5 text-lg max-w-4xl mx-auto leading-relaxed">
            Trabajamos con estructuras metálicas,
            madera y diferentes acabados
            para desarrollar equipamiento
            adaptado a las necesidades de cada
            proyecto.

            Fabricamos en Valencia y ofrecemos
            soluciones para clientes de toda España.
          </p>
        </header>

        {/* CATÁLOGO DE PRODUCTOS */}

        <section aria-labelledby="catalogo-mobiliario">
          <h2
            id="catalogo-mobiliario"
            className="text-3xl font-bold text-gray-900 text-center mb-5"
          >
            Catálogo de mobiliario urbano
          </h2>

          <p className="text-center text-gray-600 text-lg mb-12 max-w-4xl mx-auto">
            Descubre nuestros {modelos.length} modelos de
            mobiliario urbano y solicita información
            para equipar parques, jardines,
            zonas recreativas y espacios públicos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modelos.map((modelo) => {
              const mensaje = encodeURIComponent(
                `Hola, quiero información y presupuesto del producto ${modelo.tipo} ${modelo.nombre} (${modelo.modelo}) de BOA Estructuras.`
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
                        alt={`${modelo.tipo} modelo ${modelo.nombre} ${modelo.modelo} de BOA Estructuras`}
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
                      aria-label={`Solicitar presupuesto del modelo ${modelo.nombre} por WhatsApp`}
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
            Fabricación de bancos, papeleras y mesas de picnic
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            En BOA Estructuras desarrollamos
            soluciones de mobiliario urbano
            para espacios públicos y privados.

            Fabricamos bancos con estructuras
            metálicas y elementos de madera,
            papeleras urbanas y mesas de picnic
            para parques, jardines y
            áreas recreativas.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Disponemos de diferentes modelos
            de equipamiento urbano, con
            opciones de personalización
            en materiales, acabados
            y configuraciones según
            los requisitos del proyecto.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Bancos urbanos de madera y metal
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Nuestros bancos urbanos combinan
            estructuras metálicas con
            elementos de madera, ofreciendo
            diferentes diseños para
            parques, zonas peatonales
            y espacios de descanso.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Papeleras urbanas y mesas de picnic para exteriores
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Fabricamos papeleras urbanas
            y mesas de picnic para completar
            el equipamiento de parques,
            jardines, áreas recreativas
            y zonas de descanso.

            Nuestro catálogo reúne modelos
            con distintas combinaciones
            de madera y estructura metálica,
            así como mesas de madera
            para exteriores.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Vallas infantiles para parques y colegios
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Disponemos de diferentes modelos
            de vallas infantiles para
            delimitar zonas de juego,
            colegios y parques.

            Fabricamos soluciones con
            diferentes acabados, elementos
            de colores y diseños
            adaptables al entorno.
          </p>
        </section>

        {/* CLIENTES PROFESIONALES */}

        <section className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Mobiliario urbano para ayuntamientos y constructoras
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Trabajamos en proyectos de
            equipamiento urbano para
            obras públicas, parques municipales,
            zonas recreativas y
            espacios residenciales.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Podemos estudiar necesidades
            de suministro y fabricación
            según las características
            de cada actuación,
            incluyendo materiales,
            dimensiones, acabados
            y cantidades de producto.
          </p>
        </section>

        {/* SOLICITUD DE PRESUPUESTO */}

        <section className="mt-20 rounded-3xl bg-blue-950 p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Solicita presupuesto de mobiliario urbano
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            ¿Necesitas bancos urbanos,
            papeleras, mesas de picnic
            o vallas infantiles?

            Contacta con BOA Estructuras
            para solicitar presupuesto
            de fabricación y suministro
            de mobiliario urbano.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de mobiliario urbano de BOA Estructuras."
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
