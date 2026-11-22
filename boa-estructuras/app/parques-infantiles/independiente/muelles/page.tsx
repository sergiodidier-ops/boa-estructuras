
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Muelles y Balancines Infantiles | BOA Estructuras",
  description:
    "Fabricantes de juegos de muelle y balancines infantiles para parques públicos, colegios y áreas recreativas. Descubre los 32 modelos de BOA Estructuras y solicita presupuesto.",
  alternates: {
    canonical:
      "https://www.boaestructuras.es/parques-infantiles/independiente/muelles",
  },
  openGraph: {
    title: "Muelles y Balancines Infantiles | BOA Estructuras",
    description:
      "Catálogo de juegos de muelle y balancines para parques infantiles. Modelos de animales, figuras y diseños infantiles para exteriores.",
    url: "https://www.boaestructuras.es/parques-infantiles/independiente/muelles",
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
    nombre: "MOD-BALMET",
    imagen: "/fotos/independiente/muelles/mod-balmet/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-balmet",
  },
  {
    nombre: "MOD-BALMET-DUO",
    imagen: "/fotos/independiente/muelles/mod-balmet-duo/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-balmet-duo",
  },
  {
    nombre: "MOD-BALBAR",
    imagen: "/fotos/independiente/muelles/mod-balbar/portada.jpg",
    enlace: "/parques-infantiles/independiente/muelles/mod-balbar",
  },
  {
    nombre: "MOD-BALMAD",
    imagen: "/fotos/independiente/muelles/mod-balmad/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-balmad",
  },
  {
    nombre: "MOD-RBNBAL",
    imagen: "/fotos/independiente/muelles/mod-rbnbal/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-rbnbal",
  },
  {
    nombre: "MOD-KAR",
    imagen: "/fotos/independiente/muelles/mod-kar/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-kar",
  },
  {
    nombre: "MOD-BOM",
    imagen: "/fotos/independiente/muelles/mod-bom/portada.jpg",
    enlace: "/parques-infantiles/independiente/muelles/mod-bom",
  },
  {
    nombre: "MOD-MUPE",
    imagen: "/fotos/independiente/muelles/mod-mupe/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-mupe",
  },
  {
    nombre: "MOD-MOTO",
    imagen: "/fotos/independiente/muelles/mod-moto/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-moto",
  },
  {
    nombre: "MOD-DRAK",
    imagen: "/fotos/independiente/muelles/mod-drak/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-drak",
  },
  {
    nombre: "MOD-HOURSE",
    imagen: "/fotos/independiente/muelles/mod-hourse/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-hourse",
  },
  {
    nombre: "MOD-KOBRA",
    imagen: "/fotos/independiente/muelles/mod-kobra/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-kobra",
  },
  {
    nombre: "MOD-JIRAFA",
    imagen: "/fotos/independiente/muelles/mod-jirafa/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-jirafa",
  },
  {
    nombre: "MOD-FLOR",
    imagen: "/fotos/independiente/muelles/mod-flor/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-flor",
  },
  {
    nombre: "MOD-MARYP",
    imagen: "/fotos/independiente/muelles/mod-maryp/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-maryp",
  },
  {
    nombre: "MOD-RANA",
    imagen: "/fotos/independiente/muelles/mod-rana/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-rana",
  },
  {
    nombre: "MOD-OCTOPUS",
    imagen: "/fotos/independiente/muelles/mod-octopus/portada.jpg",
    enlace: "/parques-infantiles/independiente/muelles/mod-octopus",
  },
  {
    nombre: "MOD-MU",
    imagen: "/fotos/independiente/muelles/mod-mu/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-mu",
  },
  {
    nombre: "MOD-MP",
    imagen: "/fotos/independiente/muelles/mod-mp/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-mp",
  },
  {
    nombre: "MOD-ERIZO",
    imagen: "/fotos/independiente/muelles/mod-erizo/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-erizo",
  },
  {
    nombre: "MOD-KOALA",
    imagen: "/fotos/independiente/muelles/mod-koala/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-koala",
  },
  {
    nombre: "MOD-BOAT",
    imagen: "/fotos/independiente/muelles/mod-boat/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-boat",
  },
  {
    nombre: "MOD-COHETE",
    imagen: "/fotos/independiente/muelles/mod-cohete/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-cohete",
  },
  {
    nombre: "MOD-AVOCADO",
    imagen: "/fotos/independiente/muelles/mod-avocado/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-avocado",
  },
  {
    nombre: "MOD-HIPO",
    imagen: "/fotos/independiente/muelles/mod-hipo/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-hipo",
  },
  {
    nombre: "MOD-POMETA",
    imagen: "/fotos/independiente/muelles/mod-pometa/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-pometa",
  },
  {
    nombre: "MOD-CARROT",
    imagen: "/fotos/independiente/muelles/mod-carrot/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-carrot",
  },
  {
    nombre: "MOD-PERA",
    imagen: "/fotos/independiente/muelles/mod-pera/MOD-PERA.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-pera",
  },
  {
    nombre: "MOD-PLATANO",
    imagen: "/fotos/independiente/muelles/mod-platano/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-platano",
  },
  {
    nombre: "MOD-FLORET",
    imagen: "/fotos/independiente/muelles/mod-floret/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-floret",
  },
  {
    nombre: "MOD-GHOST",
    imagen: "/fotos/independiente/muelles/mod-ghost/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-ghost",
  },
  {
    nombre: "MOD-DELFIN",
    imagen: "/fotos/independiente/muelles/mod-delfin/portada.png",
    enlace: "/parques-infantiles/independiente/muelles/mod-delfin",
  },
];

const telefono = "34676208656";
const baseUrl = "https://www.boaestructuras.es";

export default function MuellesPage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Muelles y Balancines Infantiles | BOA Estructuras",
    description:
      "Catálogo de juegos de muelle y balancines infantiles para parques públicos, colegios y espacios recreativos.",
    url: `${baseUrl}/parques-infantiles/independiente/muelles`,
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
          className="mb-12 text-sm text-slate-600"
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

          <Link
            href="/parques-infantiles/independiente"
            className="hover:text-green-700"
          >
            Serie Independiente
          </Link>

          <span className="mx-2">/</span>

          <span className="font-semibold text-slate-900">
            Muelles
          </span>
        </nav>

        {/* CABECERA */}

        <header className="text-center mb-20">
          <span className="uppercase tracking-[0.4em] text-green-700 text-sm font-semibold">
            SERIE INDEPENDIENTE · BOA ESTRUCTURAS
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#2f3d58] mt-6">
            Muelles y Balancines Infantiles
          </h1>

          <div className="w-32 h-1 bg-green-500 mx-auto mt-6 rounded-full" />

          <p className="mt-8 text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            En BOA Estructuras fabricamos juegos de
            muelle y balancines infantiles para
            parques públicos, colegios, urbanizaciones
            y espacios recreativos.

            Nuestro catálogo incluye diferentes diseños
            de juegos infantiles de balanceo para
            exteriores, con modelos de animales,
            figuras y otras temáticas infantiles.
          </p>

          <p className="mt-6 text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Descubre nuestra gama de muelles infantiles
            y consulta las opciones disponibles
            para tu proyecto.

            Fabricamos en Valencia y trabajamos
            con clientes de toda España.
          </p>
        </header>

        {/* CATALOGO */}

        <section aria-labelledby="catalogo-muelles">
          <h2
            id="catalogo-muelles"
            className="text-3xl font-bold text-[#2f3d58] text-center mb-5"
          >
            Catálogo de juegos de muelle infantiles
          </h2>

          <p className="text-center text-slate-600 text-lg mb-12">
            Descubre nuestros {modelos.length} modelos
            de muelles y balancines infantiles.
            Consulta sus fichas y solicita presupuesto
            directamente a BOA Estructuras.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {modelos.map((modelo) => {
              const mensaje = encodeURIComponent(
                `Hola, quiero información y presupuesto del juego infantil ${modelo.nombre} de BOA Estructuras.`
              );

              return (
                <article
                  key={modelo.enlace}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition duration-300"
                >
                  <Link
                    href={modelo.enlace}
                    className="block group"
                  >
                    <div className="bg-gradient-to-b from-[#fff7e8] to-[#f8fbff] overflow-hidden">
                      <img
                        src={modelo.imagen}
                        alt={`Juego de muelle o balancín infantil modelo ${modelo.nombre} de BOA Estructuras`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-72 object-contain p-6 group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="px-8 pt-8">
                      <span className="uppercase tracking-[0.3em] text-slate-500 text-xs">
                        Serie Independiente
                      </span>

                      <h3 className="text-3xl font-black text-[#2f3d58] mt-3">
                        {modelo.nombre}
                      </h3>

                      <div className="w-16 h-1 bg-green-500 rounded-full mt-4" />

                      <span className="inline-block mt-7 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold">
                        Ver modelo
                      </span>
                    </div>
                  </Link>

                  <div className="px-8 pb-8 pt-5">
                    <a
                      href={`https://wa.me/${telefono}?text=${mensaje}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Solicitar presupuesto del modelo ${modelo.nombre} por WhatsApp`}
                      className="inline-block bg-[#2f3d58] hover:bg-slate-700 text-white px-5 py-3 rounded-xl font-semibold transition"
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
          <h2 className="text-3xl font-bold text-[#2f3d58] mb-6">
            Fabricantes de juegos de muelle para parques infantiles
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Los juegos de muelle son elementos de
            equipamiento infantil utilizados en
            parques públicos, centros educativos
            y zonas recreativas.

            Permiten incorporar experiencias de
            balanceo y movimiento a las áreas de
            juego mediante estructuras individuales
            o de varias plazas, según el modelo.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            En BOA Estructuras disponemos de
            diferentes modelos de muelles infantiles,
            con diseños de animales, figuras y
            temáticas adaptadas a espacios exteriores.

            Podemos estudiar opciones de materiales,
            acabados y personalización en función
            de las necesidades de cada proyecto.
          </p>

          <h2 className="text-3xl font-bold text-[#2f3d58] mt-14 mb-6">
            Balancines infantiles para ayuntamientos y colegios
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Nuestros juegos infantiles están dirigidos
            a proyectos de equipamiento de parques
            municipales, colegios, urbanizaciones
            y áreas recreativas.

            A la hora de seleccionar un modelo,
            es importante considerar la edad de uso,
            las dimensiones del espacio,
            el área de seguridad y los requisitos
            de instalación correspondientes.
          </p>
        </section>

        {/* TIPOS DE JUEGOS */}

        <section className="mt-20 max-w-5xl mx-auto rounded-3xl bg-white p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-[#2f3d58] mb-6">
            Diferentes diseños de muelles infantiles
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Nuestro catálogo reúne modelos con
            diferentes formas, configuraciones
            y estilos, incluyendo juegos con
            diseños inspirados en animales,
            naturaleza y vehículos.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed">
            Esta variedad permite combinar
            diferentes elementos para crear
            espacios de juego temáticos
            o complementar parques infantiles
            ya existentes.
          </p>
        </section>

        {/* PRESUPUESTO */}

        <section className="mt-20 rounded-3xl bg-[#2f3d58] p-8 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitas muelles infantiles para tu proyecto?
          </h2>

          <p className="text-lg text-slate-200 max-w-3xl mx-auto mb-8">
            Contacta con BOA Estructuras para solicitar
            información sobre nuestros juegos de muelle,
            balancines infantiles y opciones
            de fabricación.

            Te ayudamos a estudiar el equipamiento
            más adecuado para tu espacio.
          </p>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de juegos de muelle y balancines infantiles de BOA Estructuras."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </section>

        {/* NAVEGACION FINAL */}

        <div className="mt-14 text-center">
          <Link
            href="/parques-infantiles/independiente"
            className="font-semibold text-[#2f3d58] hover:underline"
          >
            Ver todos los juegos independientes
          </Link>
        </div>

      </div>
    </main>
  );
}
