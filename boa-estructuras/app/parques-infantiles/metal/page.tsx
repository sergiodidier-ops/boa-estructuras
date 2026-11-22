
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parques Infantiles Metálicos | Fabricantes BOA Estructuras",
  description:
    "Fabricantes de parques infantiles metálicos para ayuntamientos, colegios y espacios públicos. Descubre los 20 modelos de BOA Estructuras. Diseño, fabricación e instalación en toda España.",
  alternates: {
    canonical:
      "https://www.boaestructuras.es/parques-infantiles/metal",
  },
  openGraph: {
    title: "Parques Infantiles Metálicos | BOA Estructuras",
    description:
      "Catálogo de parques infantiles metálicos de fabricación propia. Estructuras resistentes y diseños personalizables para exteriores.",
    url: "https://www.boaestructuras.es/parques-infantiles/metal",
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
    nombre: "Ksa Roco",
    imagen: "/fotos/metal/mod-ksa-roco/portada.png",
    enlace: "/parques-infantiles/metal/mod-ksa-roco",
  },
  {
    nombre: "TorreRoko",
    imagen: "/fotos/metal/mod-torreroko/portada.png",
    enlace: "/parques-infantiles/metal/mod-torreroko",
  },
  {
    nombre: "Ksetas",
    imagen: "/fotos/metal/mod-ksetas/portada.png",
    enlace: "/parques-infantiles/metal/mod-ksetas",
  },
  {
    nombre: "Kcity",
    imagen: "/fotos/metal/mod-kcity/portada.png",
    enlace: "/parques-infantiles/metal/mod-kcity",
  },
  {
    nombre: "Kbaña",
    imagen: "/fotos/metal/mod-kbaña/portada.png",
    enlace: "/parques-infantiles/metal/mod-kbaña",
  },
  {
    nombre: "Kbaña-duo",
    imagen: "/fotos/metal/mod-kbaña-duo/portada.png",
    enlace: "/parques-infantiles/metal/mod-kbaña-duo",
  },
  {
    nombre: "KSA",
    imagen: "/fotos/metal/mod-ksa/portada.png",
    enlace: "/parques-infantiles/metal/mod-ksa",
  },
  {
    nombre: "KSA Dúo",
    imagen: "/fotos/metal/mod-ksa-duo/portada.png",
    enlace: "/parques-infantiles/metal/mod-ksa-duo",
  },
  {
    nombre: "Ksapont",
    imagen: "/fotos/metal/mod-ksapont/portada.png",
    enlace: "/parques-infantiles/metal/mod-ksapont",
  },
  {
    nombre: "KSADOS",
    imagen: "/fotos/metal/mod-ksados/portada.png",
    enlace: "/parques-infantiles/metal/mod-ksados",
  },
  {
    nombre: "KSOTAS",
    imagen: "/fotos/metal/mod-ksotas/portada.png",
    enlace: "/parques-infantiles/metal/mod-ksotas",
  },
  {
    nombre: "KSARBOL",
    imagen: "/fotos/metal/mod-ksarbol/portada.png",
    enlace: "/parques-infantiles/metal/mod-ksarbol",
  },
  {
    nombre: "TOWN",
    imagen: "/fotos/metal/mod-town/portada.png",
    enlace: "/parques-infantiles/metal/mod-town",
  },
  {
    nombre: "TUP",
    imagen: "/fotos/metal/mod-tup/portada.png",
    enlace: "/parques-infantiles/metal/mod-tup",
  },
  {
    nombre: "TOB",
    imagen: "/fotos/metal/mod-tob/portada.png",
    enlace: "/parques-infantiles/metal/mod-tob",
  },
  {
    nombre: "TOWER",
    imagen: "/fotos/metal/mod-tower/portada.png",
    enlace: "/parques-infantiles/metal/mod-tower",
  },
  {
    nombre: "KRACOVIA",
    imagen: "/fotos/metal/mod-kracovia/portada.png",
    enlace: "/parques-infantiles/metal/mod-kracovia",
  },
  {
    nombre: "KNNES",
    imagen: "/fotos/metal/mod-knnes/portada.png",
    enlace: "/parques-infantiles/metal/mod-knnes",
  },
  {
    nombre: "KSABLANCA",
    imagen: "/fotos/metal/mod-ksablanca/portada.png",
    enlace: "/parques-infantiles/metal/mod-ksablanca",
  },
  {
    nombre: "KRDIFF",
    imagen: "/fotos/metal/mod-krdiff/portada.png",
    enlace: "/parques-infantiles/metal/mod-krdiff",
  },
];

const telefono = "34676208656";

export default function MetalPage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Parques Infantiles Metálicos | BOA Estructuras",
    description:
      "Catálogo de parques infantiles metálicos diseñados y fabricados por BOA Estructuras.",
    url: "https://www.boaestructuras.es/parques-infantiles/metal",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: modelos.length,
      itemListElement: modelos.map((modelo, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: modelo.nombre,
        url: `https://www.boaestructuras.es${modelo.enlace}`,
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

      <div className="max-w-7xl mx-auto">

        {/* NAVEGACION */}

        <nav
          aria-label="Ruta de navegación"
          className="mb-10 text-sm text-gray-500"
        >
          <Link href="/" className="hover:text-blue-900">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/parques-infantiles"
            className="hover:text-blue-900"
          >
            Parques infantiles
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Metal</span>
        </nav>

        {/* TITULO PRINCIPAL */}

        <header className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
            BOA Estructuras · Diseño, fabricación e instalación
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Parques Infantiles Metálicos
          </h1>

          <div className="w-24 h-1 bg-green-500 rounded-full mt-5" />

          <p className="mt-8 max-w-5xl text-lg text-gray-600 leading-relaxed">
            En BOA Estructuras somos fabricantes de parques
            infantiles metálicos para ayuntamientos, colegios,
            urbanizaciones y espacios públicos.

            Diseñamos y fabricamos estructuras de juego
            infantiles para exteriores, combinando
            resistencia, funcionalidad y posibilidades
            de personalización.
          </p>

          <p className="mt-5 max-w-5xl text-lg text-gray-600 leading-relaxed">
            Descubre nuestra Serie Metal, formada por
            diferentes modelos de parques infantiles,
            conjuntos multijuego y estructuras con
            distintas configuraciones.

            Fabricamos en Valencia y desarrollamos
            proyectos para clientes de toda España.
          </p>
        </header>

        {/* CATALOGO */}

        <section aria-labelledby="catalogo-metal">
          <div className="mb-10">
            <h2
              id="catalogo-metal"
              className="text-3xl font-bold text-gray-900"
            >
              Catálogo de parques infantiles metálicos
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Explora nuestros {modelos.length} modelos de la
              Serie Metal y consulta sus características
              y opciones de fabricación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {modelos.map((modelo) => {
              const mensaje = encodeURIComponent(
                `Hola, quiero información y presupuesto del parque infantil metálico ${modelo.nombre} de BOA Estructuras.`
              );

              return (
                <article
                  key={modelo.enlace}
                  className="overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300"
                >
                  <Link
                    href={modelo.enlace}
                    className="block group"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={modelo.imagen}
                        alt={`Parque infantil metálico modelo ${modelo.nombre} de BOA Estructuras`}
                        loading="lazy"
                        decoding="async"
                        className="h-80 w-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>

                    <div className="px-6 pt-6">
                      <h3 className="text-2xl font-bold text-blue-950">
                        {modelo.nombre}
                      </h3>

                      <p className="mt-3 text-gray-600 text-sm">
                        Parque infantil metálico de la
                        Serie Metal de BOA Estructuras.
                      </p>

                      <span className="mt-4 inline-block font-semibold text-blue-900 group-hover:underline">
                        Ver modelo y características
                      </span>
                    </div>
                  </Link>

                  <div className="p-6 pt-5">
                    <a
                      href={`https://wa.me/${telefono}?text=${mensaje}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Solicitar información del modelo ${modelo.nombre} por WhatsApp`}
                      className="inline-block rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700 transition"
                    >
                      Solicitar información
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
            Fabricación de parques infantiles metálicos
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Los parques infantiles metálicos son una
            solución para equipar espacios recreativos
            exteriores y áreas de juego de uso público.

            En BOA Estructuras fabricamos conjuntos
            infantiles con estructuras metálicas
            y diferentes elementos de juego.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Nuestro catálogo dispone de modelos con
            diferentes distribuciones, configuraciones
            y posibilidades de personalización.

            Podemos adaptar materiales, colores,
            elementos de juego y dimensiones
            en función de las necesidades del proyecto.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
            Parques infantiles para ayuntamientos y constructoras
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Ofrecemos soluciones de equipamiento infantil
            para proyectos de urbanización, colegios,
            parques municipales, zonas residenciales
            y espacios recreativos.

            Nuestro objetivo es proporcionar estructuras
            adaptadas a las características de cada
            instalación, ofreciendo asesoramiento
            sobre los modelos disponibles.
          </p>
        </section>

        {/* SOLICITUD DE PRESUPUESTO */}

        <section className="mt-20 rounded-3xl bg-blue-950 p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitas un parque infantil metálico?
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Contacta con BOA Estructuras para solicitar
            información sobre nuestros modelos,
            personalización y presupuestos
            de fabricación e instalación.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto para un parque infantil metálico de BOA Estructuras."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-green-600 px-8 py-4 font-semibold text-white hover:bg-green-700 transition"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </section>

        {/* ENLACE A OTRAS SERIES */}

        <div className="mt-14 text-center">
          <Link
            href="/parques-infantiles"
            className="font-semibold text-blue-900 hover:underline"
          >
            Ver todas las series de parques infantiles
          </Link>
        </div>

      </div>
    </main>
  );
}
