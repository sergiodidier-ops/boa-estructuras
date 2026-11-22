
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parques Infantiles de Madera | BOA Estructuras",
  description:
    "Fabricantes de parques infantiles de madera para ayuntamientos, colegios y espacios públicos. Descubre 14 modelos de BOA Estructuras. Diseño, fabricación e instalación en España.",
  alternates: {
    canonical:
      "https://www.boaestructuras.es/parques-infantiles/madera",
  },
  openGraph: {
    title: "Parques Infantiles de Madera | BOA Estructuras",
    description:
      "Descubre nuestro catálogo de parques infantiles de madera para exteriores. Fabricación y personalización para espacios públicos y privados.",
    url: "https://www.boaestructuras.es/parques-infantiles/madera",
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
    nombre: "KDIZ",
    imagen: "/fotos/madera/mod-kdiz/portada.png",
    enlace: "/parques-infantiles/madera/mod-kdiz",
  },
  {
    nombre: "KSTELLON",
    imagen: "/fotos/madera/mod-kstellon/portada.png",
    enlace: "/parques-infantiles/madera/mod-kstellon",
  },
  {
    nombre: "KCERES",
    imagen: "/fotos/madera/mod-kceres/portada.png",
    enlace: "/parques-infantiles/madera/mod-kceres",
  },
  {
    nombre: "KLPE",
    imagen: "/fotos/madera/mod-klpe/portada.png",
    enlace: "/parques-infantiles/madera/mod-klpe",
  },
  {
    nombre: "KSABO",
    imagen: "/fotos/madera/mod-ksabo/portada.png",
    enlace: "/parques-infantiles/madera/mod-ksabo",
  },
  {
    nombre: "KNADA",
    imagen: "/fotos/madera/mod-knada/portada.png",
    enlace: "/parques-infantiles/madera/mod-knada",
  },
  {
    nombre: "KLI",
    imagen: "/fotos/madera/mod-kli/portada.png",
    enlace: "/parques-infantiles/madera/mod-kli",
  },
  {
    nombre: "KRTAGENA",
    imagen: "/fotos/madera/mod-krtagena/portada.png",
    enlace: "/parques-infantiles/madera/mod-krtagena",
  },
  {
    nombre: "KRACAS",
    imagen: "/fotos/madera/mod-kracas/portada.png",
    enlace: "/parques-infantiles/madera/mod-kracas",
  },
  {
    nombre: "KIRO",
    imagen: "/fotos/madera/mod-kiro/portada.png",
    enlace: "/parques-infantiles/madera/mod-kiro",
  },
  {
    nombre: "KSEÑA",
    imagen: "/fotos/madera/mod-kseña/portada.png",
    enlace: "/parques-infantiles/madera/mod-kseña",
  },
  {
    nombre: "ROPES",
    imagen: "/fotos/madera/mod-ropes/portada.png",
    enlace: "/parques-infantiles/madera/mod-ropes",
  },
  {
    nombre: "TCUERDAS",
    imagen: "/fotos/madera/mod-tcuerdas/portada.png",
    enlace: "/parques-infantiles/madera/mod-tcuerdas",
  },
  {
    nombre: "CLIMB",
    imagen: "/fotos/madera/mod-climb/portada.png",
    enlace: "/parques-infantiles/madera/mod-climb",
  },
];

const telefono = "34676208656";

export default function MaderaPage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Parques Infantiles de Madera | BOA Estructuras",
    description:
      "Catálogo de parques infantiles de madera de BOA Estructuras para espacios públicos, colegios y urbanizaciones.",
    url: "https://www.boaestructuras.es/parques-infantiles/madera",
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
    <main className="min-h-screen bg-[#f8f6f2] px-6 py-20">
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
          className="mb-12 text-sm text-stone-600"
        >
          <Link href="/" className="hover:text-amber-800">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/parques-infantiles"
            className="hover:text-amber-800"
          >
            Parques infantiles
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-stone-900">
            Madera
          </span>
        </nav>

        {/* PRESENTACION */}

        <header className="text-center mb-20">
          <span className="text-sm uppercase tracking-[0.35em] text-amber-700">
            BOA ESTRUCTURAS
          </span>

          <h1 className="text-4xl md:text-6xl font-black text-stone-900 mt-4">
            Parques Infantiles de Madera
          </h1>

          <div className="w-20 h-[3px] bg-amber-600 mx-auto mt-6 rounded-full" />

          <p className="mt-8 max-w-4xl mx-auto text-lg text-stone-700 leading-relaxed">
            En BOA Estructuras diseñamos y fabricamos
            parques infantiles de madera para ayuntamientos,
            colegios, urbanizaciones y espacios públicos.

            Nuestros juegos infantiles de madera para
            exteriores combinan diseños naturales,
            estructuras resistentes y diferentes
            posibilidades de personalización.
          </p>

          <p className="mt-5 max-w-4xl mx-auto text-lg text-stone-700 leading-relaxed">
            Descubre nuestra Serie Madera, con diferentes
            conjuntos de juego infantil para espacios
            recreativos.

            Fabricamos en Valencia y ofrecemos soluciones
            para proyectos de equipamiento infantil
            en toda España.
          </p>
        </header>

        {/* CATALOGO */}

        <section aria-labelledby="catalogo-madera">
          <h2
            id="catalogo-madera"
            className="text-3xl font-bold text-stone-900 text-center mb-5"
          >
            Catálogo de parques infantiles de madera
          </h2>

          <p className="text-center text-stone-600 text-lg mb-12">
            Explora nuestros {modelos.length} modelos de la
            Serie Madera y solicita información para tu proyecto.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {modelos.map((modelo) => {
              const mensaje = encodeURIComponent(
                `Hola, quiero información y presupuesto del parque infantil de madera ${modelo.nombre} de BOA Estructuras.`
              );

              return (
                <article
                  key={modelo.enlace}
                  className="group bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <Link
                    href={modelo.enlace}
                    className="block"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={modelo.imagen}
                        alt={`Parque infantil de madera modelo ${modelo.nombre} de BOA Estructuras`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="px-8 pt-8">
                      <span className="text-xs uppercase tracking-[0.3em] text-amber-700">
                        Serie Madera
                      </span>

                      <h3 className="text-3xl font-black text-stone-900 mt-3">
                        {modelo.nombre}
                      </h3>

                      <div className="w-14 h-[3px] bg-amber-600 rounded-full mt-4" />

                      <span className="inline-block bg-amber-700 text-white px-6 py-3 rounded-xl mt-7 font-semibold">
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

        {/* INFORMACION COMERCIAL */}

        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">
            Fabricación de juegos infantiles de madera
          </h2>

          <p className="text-stone-700 text-lg leading-relaxed mb-6">
            Los parques infantiles de madera son una
            alternativa para crear espacios de juego con
            una estética natural.

            En BOA Estructuras fabricamos juegos
            infantiles para exteriores utilizando
            estructuras de madera y diferentes
            elementos de juego.
          </p>

          <p className="text-stone-700 text-lg leading-relaxed mb-6">
            Nuestro catálogo incluye conjuntos infantiles
            y estructuras con distintas configuraciones.

            Podemos estudiar adaptaciones de materiales,
            colores y distribución de los elementos
            en función de las necesidades de cada proyecto.
          </p>

          <h2 className="text-3xl font-bold text-stone-900 mt-14 mb-6">
            Parques infantiles de madera para ayuntamientos y colegios
          </h2>

          <p className="text-stone-700 text-lg leading-relaxed">
            Trabajamos con proyectos de equipamiento
            de parques municipales, centros educativos,
            zonas residenciales y otros espacios recreativos.

            Ofrecemos diferentes modelos para adaptarnos
            a los requisitos y dimensiones de las áreas
            de juego.
          </p>
        </section>

        {/* PRESUPUESTOS */}

        <section className="mt-20 rounded-[2rem] bg-stone-900 p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitas un parque infantil de madera?
          </h2>

          <p className="text-lg text-stone-200 max-w-3xl mx-auto mb-8">
            Solicita información sobre nuestros modelos
            de parques infantiles de madera.

            En BOA Estructuras te ayudamos a estudiar
            las necesidades de equipamiento infantil
            de tu proyecto.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto para un parque infantil de madera de BOA Estructuras."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-amber-700 px-8 py-4 font-semibold text-white hover:bg-amber-800 transition"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </section>

        {/* VOLVER */}

        <div className="mt-14 text-center">
          <Link
            href="/parques-infantiles"
            className="font-semibold text-amber-800 hover:underline"
          >
            Ver todas las series de parques infantiles
          </Link>
        </div>

      </div>
    </main>
  );
}
