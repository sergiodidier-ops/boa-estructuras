
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = "https://www.boaestructuras.es";
const telefono = "34676208656";

export const metadata: Metadata = {
  title:
    "Fabricantes de Parques Infantiles y Estructuras Metálicas | BOA",
  description:
    "BOA Estructuras: fabricantes de parques infantiles y estructuras metálicas en Valencia. Carpintería metálica, vallados, barandillas, mobiliario urbano y equipamiento deportivo a medida.",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title:
      "BOA Estructuras | Parques Infantiles y Estructuras Metálicas",
    description:
      "Fabricación de parques infantiles, estructuras de acero, cerramientos, barandillas, mobiliario urbano y equipamiento deportivo en Valencia.",
    url: baseUrl,
    siteName: "BOA Estructuras",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const fotos = [
  "/fotos/IMG_4104.jpeg",
  "/fotos/IMG_4105.jpeg",
  "/fotos/IMG_4106.jpeg",
  "/fotos/IMG_4107.jpeg",
  "/fotos/IMG_4108.jpeg",
  "/fotos/IMG_4109.jpeg",
];

const categorias = [
  {
    titulo: "Parques infantiles",
    descripcion: "Fabricación de equipamiento para zonas de juego",
    enlace: "/parques-infantiles",
  },
  {
    titulo: "Estructuras metálicas",
    descripcion: "Fabricación metálica y proyectos a medida",
    enlace: "/proyectos",
  },
  {
    titulo: "Cerramientos",
    descripcion: "Vallados, barandillas y cerramientos deportivos",
    enlace: "/cerramientos",
  },
  {
    titulo: "Mobiliario urbano",
    descripcion: "Bancos, papeleras, mesas y vallas infantiles",
    enlace: "/mobiliario",
  },
  {
    titulo: "Equipamiento deportivo",
    descripcion: "Pistas deportivas y parques de calistenia",
    enlace: "/deporte",
  },
];

const servicios = [
  {
    titulo: "Fabricación de parques infantiles",
    descripcion:
      "Diseño y fabricación de parques infantiles metálicos, de madera y robinia, columpios, muelles y conjuntos de juego.",
    enlace: "/parques-infantiles",
    boton: "Ver parques infantiles",
  },
  {
    titulo: "Fabricación de estructuras metálicas",
    descripcion:
      "Trabajos de carpintería metálica, estructuras de acero, bastidores, soportes y conjuntos metálicos fabricados según planos y medidas.",
    enlace: "/proyectos",
    boton: "Ver proyectos",
  },
  {
    titulo: "Vallados y cerramientos metálicos",
    descripcion:
      "Fabricación de cerramientos perimetrales, vallas metálicas, malla electrosoldada y soluciones para instalaciones deportivas.",
    enlace: "/cerramientos",
    boton: "Ver cerramientos",
  },
  {
    titulo: "Barandillas y protecciones metálicas",
    descripcion:
      "Barandillas, protecciones peatonales y elementos metálicos para espacios públicos, edificios y proyectos de construcción.",
    enlace: "/cerramientos/barandillas",
    boton: "Ver barandillas",
  },
  {
    titulo: "Mobiliario urbano",
    descripcion:
      "Fabricación de bancos de madera y acero, papeleras, mesas de picnic y elementos de equipamiento urbano.",
    enlace: "/mobiliario",
    boton: "Ver mobiliario",
  },
  {
    titulo: "Equipamiento deportivo y calistenia",
    descripcion:
      "Pistas multideporte, estructuras de workout, parques de calistenia y equipamiento para espacios deportivos.",
    enlace: "/deporte",
    boton: "Ver equipamiento deportivo",
  },
];

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BOA Estructuras",
    url: baseUrl,
    logo: `${baseUrl}/logo/logo.png`,
    description:
      "Fabricación de parques infantiles, estructuras metálicas, cerramientos, mobiliario urbano y equipamiento deportivo.",
    telephone: "+34 676 208 656",
    email: "administracion@boaestructuras.es",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Valencia",
    },
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* CABECERA */}

      <header className="fixed left-0 top-0 z-50 w-full bg-white/90 shadow-md backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/logo.png"
              alt="Logotipo de BOA Estructuras"
              width={55}
              height={55}
            />

            <span className="text-lg font-bold text-blue-950 md:text-xl">
              BOA Estructuras
            </span>
          </Link>

          <nav
            aria-label="Navegación principal"
            className="hidden gap-7 font-semibold text-gray-700 md:flex"
          >
            <a href="#servicios" className="hover:text-blue-900">
              Servicios
            </a>

            <Link href="/proyectos" className="hover:text-blue-900">
              Proyectos
            </Link>

            <a href="#catalogos" className="hover:text-blue-900">
              Catálogos
            </a>

            <a href="#contacto" className="hover:text-blue-900">
              Contacto
            </a>
          </nav>

          <a
            href={`https://wa.me/${telefono}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-green-500 px-5 py-2 font-bold text-white hover:bg-green-600 md:block"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* PORTADA PRINCIPAL SEO */}

      <section className="relative flex min-h-screen items-center overflow-hidden bg-blue-950 px-6 pt-28 text-white">
        <div className="absolute inset-0">
          <Image
            src="/fotos/IMG_4104.jpeg"
            alt="Proyecto de BOA Estructuras"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-950/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl py-16">
          <div className="max-w-4xl">
            <Image
              src="/logo/logo.PNG"
              alt="BOA Estructuras"
              width={170}
              height={170}
              className="mb-8 rounded-2xl bg-white/90 p-3 shadow-2xl"
            />

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400 md:tracking-[0.35em]">
              Diseño · Fabricación · Instalación
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
              Fabricantes de Parques Infantiles y Estructuras Metálicas en Valencia
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-blue-100 md:text-2xl">
              En BOA Estructuras diseñamos y fabricamos
              parques infantiles, estructuras metálicas
              de acero, cerramientos, barandillas,
              mobiliario urbano y equipamiento deportivo.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-blue-100">
              Soluciones de fabricación a medida para
              constructoras, ayuntamientos, empresas
              y proyectos de obra pública y privada.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#servicios"
                className="rounded-full bg-green-500 px-8 py-4 text-center font-bold text-white shadow-xl hover:bg-green-600"
              >
                Nuestros servicios
              </a>

              <a
                href="#contacto"
                className="rounded-full border border-white/40 px-8 py-4 text-center font-bold text-white backdrop-blur hover:bg-white hover:text-blue-950"
              >
                Solicitar presupuesto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS PRINCIPALES */}

      <section
        aria-labelledby="categorias-titulo"
        className="bg-white px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="categorias-titulo"
            className="mb-10 text-center text-3xl font-black text-blue-950 md:text-4xl"
          >
            Fabricación y equipamiento para cada proyecto
          </h2>

          <div className="grid gap-5 text-center sm:grid-cols-2 lg:grid-cols-5">
            {categorias.map((item) => (
              <Link
                key={item.titulo}
                href={item.enlace}
                className="block h-full"
              >
                <div className="h-full rounded-2xl bg-gray-100 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-xl font-black text-blue-950">
                    {item.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {item.descripcion}
                  </p>

                  <div className="mx-auto mt-5 h-[3px] w-10 rounded-full bg-green-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRESENTACIÓN DE LA EMPRESA */}

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-green-600">
            BOA Estructuras
          </p>

          <h2 className="max-w-5xl text-3xl font-black text-blue-950 md:text-5xl">
            Fabricación de estructuras metálicas y equipamiento para espacios públicos
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-green-500" />

          <div className="mt-8 grid gap-8 text-lg leading-relaxed text-gray-700 md:grid-cols-2">
            <p>
              Somos una empresa dedicada a la fabricación
              de parques infantiles, estructuras metálicas
              y soluciones de carpintería metálica.

              Trabajamos con perfiles de acero,
              estructuras tubulares, mallas, chapas
              y otros materiales según los requisitos
              de cada proyecto.
            </p>

            <p>
              Desde Valencia desarrollamos trabajos
              para constructoras, ayuntamientos,
              empresas y clientes profesionales.

              Estudiamos proyectos a partir de planos,
              mediciones y necesidades concretas,
              ofreciendo soluciones de fabricación
              adaptadas a cada aplicación.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}

      <section
        id="servicios"
        className="bg-gradient-to-b from-white to-gray-100 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-green-600">
              BOA Estructuras
            </p>

            <h2 className="text-4xl font-black text-blue-950 md:text-5xl">
              Nuestros Servicios
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-green-500" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((item) => (
              <article
                key={item.titulo}
                className="group flex flex-col rounded-3xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:bg-blue-950 hover:text-white"
              >
                <h3 className="mb-4 text-2xl font-bold">
                  {item.titulo}
                </h3>

                <p className="flex-grow leading-relaxed text-gray-600 group-hover:text-blue-100">
                  {item.descripcion}
                </p>

                <Link
                  href={item.enlace}
                  className="mt-7 inline-block self-start font-semibold text-blue-900 underline underline-offset-4 group-hover:text-green-300"
                >
                  {item.boton}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRUCTURAS METÁLICAS */}

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-green-600">
            CARPINTERÍA METÁLICA
          </p>

          <h2 className="max-w-5xl text-3xl font-black text-blue-950 md:text-5xl">
            Fabricantes de estructuras metálicas a medida en Valencia
          </h2>

          <div className="mt-5 h-1 w-20 rounded-full bg-green-500" />

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-gray-700">
            En BOA Estructuras realizamos trabajos
            de fabricación metálica para diferentes
            aplicaciones de construcción, industria,
            urbanismo y equipamiento público.
          </p>

          <p className="mt-5 max-w-5xl text-lg leading-relaxed text-gray-700">
            Estudiamos estructuras de acero,
            bastidores, soportes, cerramientos,
            vallados, barandillas, puertas metálicas
            y otros conjuntos de carpintería
            metálica según las características
            y exigencias de cada proyecto.
          </p>

          <h3 className="mt-12 text-2xl font-bold text-blue-950">
            Trabajos metálicos para constructoras y ayuntamientos
          </h3>

          <p className="mt-5 max-w-5xl text-lg leading-relaxed text-gray-700">
            Podemos estudiar fabricación a partir
            de documentación técnica, planos,
            mediciones y especificaciones
            de obra.

            Valoramos materiales, dimensiones,
            acabados, sistemas de fijación
            y requisitos técnicos según
            el tipo de instalación.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/cerramientos"
              className="rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Ver cerramientos metálicos
            </Link>

            <Link
              href="/proyectos"
              className="rounded-xl border border-blue-900 px-7 py-4 font-semibold text-blue-900 transition hover:bg-blue-50"
            >
              Ver proyectos realizados
            </Link>
          </div>
        </div>
      </section>

      {/* PARQUES INFANTILES */}

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-blue-950 md:text-4xl">
            Fabricantes de parques infantiles en Valencia
          </h2>

          <p className="mt-7 max-w-5xl text-lg leading-relaxed text-gray-700">
            Fabricamos equipamiento para parques
            infantiles y zonas de juego,
            con diferentes modelos de estructuras
            metálicas, madera y robinia.

            Nuestro catálogo incluye conjuntos
            multijuego, columpios, muelles
            y otros elementos destinados
            a parques, colegios y
            espacios públicos.
          </p>

          <Link
            href="/parques-infantiles"
            className="mt-8 inline-block rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Ver catálogo de parques infantiles
          </Link>
        </div>
      </section>

      {/* GALERÍA ORIGINAL */}

      <section
        id="galeria"
        className="bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-green-600">
              TRABAJOS BOA
            </p>

            <h2 className="text-4xl font-black text-blue-950 md:text-5xl">
              Proyectos Realizados
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-green-500" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fotos.map((foto, index) => (
              <div
                key={foto}
                className="group overflow-hidden rounded-3xl shadow-2xl"
              >
                <Image
                  src={foto}
                  alt={`Fotografía ${index + 1} de proyectos de BOA Estructuras`}
                  width={500}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/proyectos"
              className="inline-block rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white hover:bg-blue-700"
            >
              Ver más proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* CATÁLOGOS ORIGINALES */}

      <section
        id="catalogos"
        className="bg-blue-950 px-6 py-20 text-white"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-green-400">
            DESCARGAS
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Catálogos BOA Estructuras
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-green-500" />

          <p className="mb-10 mt-8 text-lg text-blue-100">
            Consulta nuestros catálogos comerciales
            de parques infantiles y estructuras
            metálicas para conocer diferentes
            soluciones de fabricación.
          </p>

          <div className="flex flex-col justify-center gap-6 md:flex-row">
            <a
              href="/catalogos/Catálogo BOA parques infantiles.pdf"
              download
              className="rounded-full bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
            >
              Descargar catálogo parques
            </a>

            <a
              href="/catalogos/Catálogo BOA Estructuras Metálicas.pdf"
              download
              className="rounded-full bg-white px-8 py-4 font-semibold text-blue-950 transition hover:bg-gray-100"
            >
              Descargar catálogo estructuras
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTO ORIGINAL */}

      <section
        id="contacto"
        className="bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-green-600">
            HABLEMOS DE TU PROYECTO
          </p>

          <h2 className="text-4xl font-black text-blue-950 md:text-5xl">
            Solicita Presupuesto
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-green-500" />

          <p className="mt-8 text-xl text-gray-600">
            ¿Necesitas fabricar una estructura
            metálica, un cerramiento o un parque
            infantil? Envíanos las características
            de tu proyecto.
          </p>

          <div className="mt-8 space-y-4 text-lg text-gray-700">
            <p>
              <a
                href="tel:+34676208656"
                className="hover:text-blue-900"
              >
                Teléfono: 676 208 656
              </a>
            </p>

            <p>
              <a
                href="mailto:sergio.fraile@boaestructuras.es"
                className="break-all hover:text-blue-900"
              >
                sergio.fraile@boaestructuras.es
              </a>
            </p>

            <p>
              <a
                href="mailto:administracion@boaestructuras.es"
                className="break-all hover:text-blue-900"
              >
                administracion@boaestructuras.es
              </a>
            </p>
          </div>

          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              "Hola, quiero solicitar presupuesto de fabricación a BOA Estructuras."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-green-500 px-8 py-4 font-bold text-white hover:bg-green-600"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-black px-6 py-10 text-gray-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold text-white">
              BOA Estructuras
            </h2>

            <p className="mt-2 max-w-md text-sm leading-relaxed">
              Fabricantes de parques infantiles,
              estructuras metálicas, cerramientos,
              barandillas, mobiliario urbano
              y equipamiento deportivo en Valencia.
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <p>
              <a href="tel:+34676208656">
                Teléfono: 676 208 656
              </a>
            </p>

            <p>
              <a href="mailto:sergio.fraile@boaestructuras.es">
                sergio.fraile@boaestructuras.es
              </a>
            </p>

            <p>Valencia, España</p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} BOA Estructuras.
          Todos los derechos reservados.
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}

      <a
        href={`https://wa.me/${telefono}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar con BOA Estructuras por WhatsApp"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-5 py-4 font-bold text-white shadow-xl transition hover:bg-green-600"
      >
        WhatsApp
      </a>
    </main>
  );
}
