
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parques Infantiles de Robinia | BOA Estructuras",
  description:
    "Fabricantes de parques infantiles de robinia y juegos de madera natural para exteriores. Descubre los 12 modelos de BOA Estructuras para ayuntamientos, colegios y espacios públicos.",
  alternates: {
    canonical:
      "https://www.boaestructuras.es/parques-infantiles/robinia",
  },
  openGraph: {
    title: "Parques Infantiles de Robinia | BOA Estructuras",
    description:
      "Catálogo de parques infantiles de robinia. Diseño, fabricación y personalización de áreas de juego naturales para exteriores.",
    url: "https://www.boaestructuras.es/parques-infantiles/robinia",
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
  imagen: string;
  enlace: string;
};

const modelos: Modelo[] = [
  {
    nombre: "RBN01",
    imagen: "/fotos/robinia/mod-rbn01/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn01",
  },
  {
    nombre: "RBN02",
    imagen: "/fotos/robinia/mod-rbn02/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn02",
  },
  {
    nombre: "RBN03",
    imagen: "/fotos/robinia/mod-rbn03/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn03",
  },
  {
    nombre: "RBN04",
    imagen: "/fotos/robinia/mod-rbn04/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn04",
  },
  {
    nombre: "RBN05",
    imagen: "/fotos/robinia/mod-rbn05/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn05",
  },
  {
    nombre: "RBN06",
    imagen: "/fotos/robinia/mod-rbn06/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn06",
  },
  {
    nombre: "RBN07",
    imagen: "/fotos/robinia/mod-rbn07/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn07",
  },
  {
    nombre: "RBN08",
    imagen: "/fotos/robinia/mod-rbn08/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn08",
  },
  {
    nombre: "RBN09",
    imagen: "/fotos/robinia/mod-rbn09/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn09",
  },
  {
    nombre: "RBN10",
    imagen: "/fotos/robinia/mod-rbn10/portada.png",
    enlace: "/parques-infantiles/robinia/mod-rbn10",
  },
  {
    nombre: "VELERO",
    imagen: "/fotos/robinia/mod-velero/portada.png",
    enlace: "/parques-infantiles/robinia/mod-velero",
  },
  {
    nombre: "BARCOMAD",
    imagen: "/fotos/robinia/mod-barcomad/portada.png",
    enlace: "/parques-infantiles/robinia/mod-barcomad",
  },
];

const telefono = "34676208656";
const baseUrl = "https://www.boaestructuras.es";

export default function RobiniaPage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Parques Infantiles de Robinia | BOA Estructuras",
    description:
      "Catálogo de parques infantiles de robinia y juegos de madera natural para exteriores.",
    url: `${baseUrl}/parques-infantiles/robinia`,
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
    <main className="min-h-screen bg-gradient-to-b from-[#eef4e7] via-[#f5f7f1] to-white px-6 py-20">
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
          className="mb-12 text-sm text-green-900"
        >
          <Link href="/" className="hover:text-green-700">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/parques-infantiles"
            className="hover:text-green-700"
          >
            Parques infantiles
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Robinia</span>
        </nav>

        {/* CABECERA */}

        <header className="text-center mb-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.10),transparent_70%)]" />

          <div className="relative z-10">
            <span className="uppercase tracking-[0.35em] text-green-700 font-semibold text-sm">
              JUGAR ENTRE LA NATURALEZA
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-green-950 mt-6 tracking-tight">
              Parques Infantiles de Robinia
            </h1>

            <div className="w-32 h-1 bg-green-700 mx-auto mt-6 rounded-full" />

            <p className="text-xl text-stone-700 mt-10 max-w-4xl mx-auto leading-relaxed">
              En BOA Estructuras diseñamos y fabricamos
              parques infantiles de robinia para crear
              espacios de juego naturales y atractivos
              al aire libre.

              Nuestra Serie Robinia reúne diferentes
              estructuras infantiles de madera para
              parques públicos, colegios, urbanizaciones
              y zonas recreativas.
            </p>

            <p className="text-lg text-stone-700 mt-6 max-w-4xl mx-auto leading-relaxed">
              Descubre nuestros modelos de parques
              infantiles de madera de robinia y consulta
              las opciones disponibles para tu proyecto.

              Fabricamos en Valencia y desarrollamos
              soluciones para clientes de toda España.
            </p>
          </div>
        </header>

        {/* CATALOGO */}

        <section aria-labelledby="catalogo-robinia">
          <h2
            id="catalogo-robinia"
            className="text-3xl font-bold text-green-950 text-center mb-5"
          >
            Catálogo de parques infantiles de robinia
          </h2>

          <p className="text-center text-stone-700 text-lg mb-12">
            Descubre nuestros {modelos.length} modelos
            de la Serie Robinia y encuentra una solución
            de juego natural para tu proyecto.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {modelos.map((modelo) => {
              const mensaje = encodeURIComponent(
                `Hola, quiero información y presupuesto del parque infantil de robinia ${modelo.nombre} de BOA Estructuras.`
              );

              return (
                <article
                  key={modelo.enlace}
                  className="group bg-white/90 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl border border-green-100 transition duration-300"
                >
                  <Link href={modelo.enlace} className="block">
                    <div className="bg-gradient-to-b from-[#f7f3e9] to-[#eef5e7] p-6 overflow-hidden">
                      <img
                        src={modelo.imagen}
                        alt={`Parque infantil de robinia modelo ${modelo.nombre} de BOA Estructuras`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-72 object-contain group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="px-8 pt-8">
                      <span className="text-xs uppercase tracking-[0.3em] text-green-700">
                        Serie Robinia
                      </span>

                      <h3 className="text-3xl font-black text-[#2d3c23] mt-3">
                        {modelo.nombre}
                      </h3>

                      <div className="w-14 h-[3px] bg-green-700 rounded-full mt-4" />

                      <span className="inline-block mt-8 bg-green-700 text-white px-6 py-3 rounded-xl font-semibold">
                        Ver modelo
                      </span>
                    </div>
                  </Link>

                  <div className="px-8 pb-8 pt-5">
                    <a
                      href={`https://wa.me/${telefono}?text=${mensaje}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Solicitar información del modelo ${modelo.nombre} por WhatsApp`}
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold transition"
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
          <h2 className="text-3xl font-bold text-green-950 mb-6">
            Fabricación de parques infantiles de madera de robinia
          </h2>

          <p className="text-stone-700 text-lg leading-relaxed mb-6">
            La madera de robinia se utiliza en equipamiento
            infantil por sus características de resistencia
            natural y su estética singular.

            Sus formas y texturas permiten desarrollar
            estructuras de juego con una apariencia
            integrada en entornos naturales.
          </p>

          <p className="text-stone-700 text-lg leading-relaxed mb-6">
            En BOA Estructuras trabajamos con modelos
            de parques infantiles de robinia que combinan
            materiales naturales con diferentes elementos
            de juego.

            Podemos estudiar configuraciones y
            adaptaciones en función de las características
            y dimensiones de cada proyecto.
          </p>

          <h2 className="text-3xl font-bold text-green-950 mt-14 mb-6">
            Juegos infantiles de robinia para espacios públicos
          </h2>

          <p className="text-stone-700 text-lg leading-relaxed">
            Nuestra Serie Robinia está dirigida a proyectos
            de equipamiento infantil para ayuntamientos,
            colegios, parques municipales y espacios
            recreativos.

            Disponemos de diferentes diseños para crear
            áreas de juego con una estética natural
            y posibilidades de personalización.
          </p>
        </section>

        {/* PRESUPUESTO */}

        <section className="mt-20 rounded-[2rem] bg-green-950 p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitas un parque infantil de robinia?
          </h2>

          <p className="text-lg text-green-100 max-w-3xl mx-auto mb-8">
            Contacta con BOA Estructuras para solicitar
            información y presupuesto de nuestros
            parques infantiles de robinia.

            Te ayudamos a elegir un modelo adecuado
            para tu proyecto de equipamiento infantil.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto para un parque infantil de robinia de BOA Estructuras."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </section>

        {/* OTRAS SERIES */}

        <div className="mt-14 text-center">
          <Link
            href="/parques-infantiles"
            className="font-semibold text-green-800 hover:underline"
          >
            Ver todas las series de parques infantiles
          </Link>
        </div>

      </div>
    </main>
  );
}


