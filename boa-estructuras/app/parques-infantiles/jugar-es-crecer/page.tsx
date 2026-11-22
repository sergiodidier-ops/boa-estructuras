
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parques Infantiles de 0 a 3 Años | BOA Estructuras",
  description:
    "Fabricantes de parques infantiles para niños de 0 a 3 años. Descubre la serie Jugar es Crecer de BOA Estructuras: juegos educativos, estructuras de primera infancia y equipamiento para escuelas infantiles.",
  alternates: {
    canonical:
      "https://www.boaestructuras.es/parques-infantiles/jugar-es-crecer",
  },
  openGraph: {
    title: "Jugar es Crecer | Parques Infantiles de 0 a 3 Años",
    description:
      "Juegos y parques infantiles para primera infancia. Diseño y fabricación de espacios de juego para escuelas infantiles, colegios y ayuntamientos.",
    url: "https://www.boaestructuras.es/parques-infantiles/jugar-es-crecer",
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
    nombre: "CASTAÑO",
    imagen: "/fotos/jugar-es-crecer/mod-castano/portada.png",
    enlace: "/parques-infantiles/jugar-es-crecer/mod-castano",
  },
  {
    nombre: "JUNGLE",
    imagen: "/fotos/jugar-es-crecer/mod-jungle/portada.png",
    enlace: "/parques-infantiles/jugar-es-crecer/mod-jungle",
  },
  {
    nombre: "TRÉBOL",
    imagen: "/fotos/jugar-es-crecer/mod-trebol/portada.png",
    enlace: "/parques-infantiles/jugar-es-crecer/mod-trebol",
  },
  {
    nombre: "HAYA",
    imagen: "/fotos/jugar-es-crecer/mod-haya/portada.png",
    enlace: "/parques-infantiles/jugar-es-crecer/mod-haya",
  },
  {
    nombre: "ROBLE",
    imagen: "/fotos/jugar-es-crecer/mod-roble/portada.png",
    enlace: "/parques-infantiles/jugar-es-crecer/mod-roble",
  },
  {
    nombre: "PINO",
    imagen: "/fotos/jugar-es-crecer/mod-pino/portada.png",
    enlace: "/parques-infantiles/jugar-es-crecer/mod-pino",
  },
];

const telefono = "34676208656";
const baseUrl = "https://www.boaestructuras.es";

export default function JugarEsCrecerPage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Jugar es Crecer | Parques Infantiles de 0 a 3 Años",
    description:
      "Catálogo de juegos y parques infantiles para la primera infancia de BOA Estructuras.",
    url: `${baseUrl}/parques-infantiles/jugar-es-crecer`,
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
    <main className="min-h-screen bg-gradient-to-b from-[#fff7e8] via-[#f8fbff] to-white px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(catalogoSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <div className="max-w-7xl mx-auto">

        {/* NAVEGACION */}

        <nav
          aria-label="Ruta de navegación"
          className="mb-12 text-sm text-sky-900"
        >
          <Link href="/" className="hover:text-sky-700">
            Inicio
          </Link>

          <span className="mx-2">/</span>

          <Link
            href="/parques-infantiles"
            className="hover:text-sky-700"
          >
            Parques infantiles
          </Link>

          <span className="mx-2">/</span>

          <span className="font-semibold">
            Jugar es Crecer
          </span>
        </nav>

        {/* CABECERA PRINCIPAL */}

        <header className="text-center mb-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)]" />

          <div className="relative z-10">
            <span className="uppercase tracking-[0.35em] text-sky-700 font-semibold text-sm">
              PRIMERA INFANCIA · DE 0 A 3 AÑOS
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#2f5f8f] mt-6 tracking-tight">
              JUGAR ES CRECER
            </h1>

            <div className="w-32 h-1 bg-amber-400 mx-auto mt-6 rounded-full" />

            <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-10">
              Parques infantiles para niños de 0 a 3 años
            </h2>

            <p className="text-xl text-stone-700 mt-8 max-w-4xl mx-auto leading-relaxed">
              En BOA Estructuras diseñamos y fabricamos
              parques infantiles para la primera infancia,
              con propuestas de juego adaptadas a niños
              de 0 a 3 años.

              Nuestra serie Jugar es Crecer está orientada
              al aprendizaje temprano, la exploración,
              el movimiento y el desarrollo mediante el juego.
            </p>

            <p className="text-lg text-stone-700 mt-6 max-w-4xl mx-auto leading-relaxed">
              Fabricamos equipamiento infantil para
              escuelas infantiles, guarderías, colegios,
              ayuntamientos y espacios recreativos.

              Desarrollamos proyectos desde Valencia
              para clientes de toda España.
            </p>
          </div>
        </header>

        {/* CATALOGO */}

        <section aria-labelledby="catalogo-primera-infancia">
          <h2
            id="catalogo-primera-infancia"
            className="text-3xl font-bold text-[#2f5f8f] text-center mb-5"
          >
            Catálogo de juegos infantiles para primera infancia
          </h2>

          <p className="text-center text-stone-700 text-lg mb-12">
            Descubre los {modelos.length} modelos de
            nuestra serie Jugar es Crecer y consulta
            sus diferentes diseños.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {modelos.map((modelo) => {
              const mensaje = encodeURIComponent(
                `Hola, quiero información y presupuesto del modelo ${modelo.nombre} de la serie Jugar es Crecer de BOA Estructuras.`
              );

              return (
                <article
                  key={modelo.enlace}
                  className="group bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl border border-sky-100 transition duration-300"
                >
                  <Link href={modelo.enlace} className="block">
                    <div className="bg-gradient-to-b from-[#fff8e7] to-[#eef8ff] p-6 overflow-hidden">
                      <img
                        src={modelo.imagen}
                        alt={`Juego infantil modelo ${modelo.nombre} para primera infancia de BOA Estructuras`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-72 object-contain group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="px-8 pt-8">
                      <span className="text-xs uppercase tracking-[0.3em] text-sky-700">
                        Jugar es Crecer
                      </span>

                      <h3 className="text-3xl font-black text-[#2f5f8f] mt-3">
                        {modelo.nombre}
                      </h3>

                      <div className="w-14 h-[3px] bg-amber-400 rounded-full mt-4" />

                      <span className="inline-block mt-8 bg-[#2f8f7a] text-white px-6 py-3 rounded-xl font-semibold">
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

        {/* DESARROLLO INFANTIL */}

        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2f5f8f] mb-6">
            Juegos infantiles educativos para el desarrollo temprano
          </h2>

          <p className="text-stone-700 text-lg leading-relaxed mb-6">
            El juego es una parte fundamental del
            desarrollo durante los primeros años de vida.

            A través del movimiento, la exploración
            y la interacción con el entorno, los niños
            pueden descubrir nuevas habilidades
            y desarrollar su coordinación.
          </p>

          <p className="text-stone-700 text-lg leading-relaxed mb-6">
            La serie Jugar es Crecer de BOA Estructuras
            está pensada para crear espacios que
            favorezcan experiencias de juego
            y descubrimiento durante la primera infancia.

            Nuestros modelos ofrecen diferentes
            configuraciones para adaptarse
            a las características de cada instalación.
          </p>

          <h2 className="text-3xl font-bold text-[#2f5f8f] mt-14 mb-6">
            Parques infantiles para escuelas infantiles y guarderías
          </h2>

          <p className="text-stone-700 text-lg leading-relaxed">
            Diseñamos y fabricamos equipamiento
            para zonas de juego en escuelas infantiles,
            centros educativos, parques municipales
            y espacios destinados a los más pequeños.

            Podemos estudiar adaptaciones de los
            modelos de nuestro catálogo según
            el espacio disponible y las necesidades
            de cada proyecto.
          </p>
        </section>

        {/* PERSONALIZACION */}

        <section className="mt-20 rounded-[2rem] bg-white p-8 md:p-12 shadow-lg border border-sky-100">
          <h2 className="text-3xl font-bold text-[#2f5f8f] mb-6">
            Fabricación de parques infantiles para primera infancia
          </h2>

          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            En BOA Estructuras trabajamos con
            diferentes materiales, acabados
            y configuraciones para desarrollar
            áreas infantiles adaptadas a cada proyecto.

            Nuestro catálogo permite elegir entre
            diferentes modelos de juego
            y estudiar opciones de personalización.
          </p>

          <p className="text-lg text-stone-700 leading-relaxed">
            A la hora de seleccionar equipamiento
            para primera infancia, es importante
            valorar las edades de uso previstas,
            las dimensiones de la zona y los
            requisitos de seguridad aplicables.

            Las características concretas de edad,
            instalación y seguridad deben verificarse
            en la ficha técnica de cada modelo.
          </p>
        </section>

        {/* SOLICITAR PRESUPUESTO */}

        <section className="mt-20 rounded-[2rem] bg-[#2f5f8f] p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitas equipar una zona infantil de 0 a 3 años?
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Contacta con BOA Estructuras para solicitar
            información sobre nuestra serie Jugar es Crecer.

            Te ayudamos a estudiar diferentes opciones
            de equipamiento para escuelas infantiles,
            colegios y espacios recreativos.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de la serie Jugar es Crecer de BOA Estructuras."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2f8f7a] hover:bg-[#257261] text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </section>

        {/* OTRAS SERIES */}

        <div className="mt-14 text-center">
          <Link
            href="/parques-infantiles"
            className="font-semibold text-[#2f5f8f] hover:underline"
          >
            Ver todas las series de parques infantiles
          </Link>
        </div>

      </div>
    </main>
  );
}
