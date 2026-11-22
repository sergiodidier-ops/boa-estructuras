
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = "https://www.boaestructuras.es";
const telefono = "34676208656";

export const metadata: Metadata = {
  title: "Carpintería Metálica en Valencia | BOA Estructuras",
  description:
    "BOA Estructuras, especialistas en carpintería metálica en Valencia. Fabricación a medida de vallados, puertas, rejas, barandillas, escaleras, cerramientos y parques infantiles.",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "BOA Estructuras | Carpintería Metálica en Valencia",
    description:
      "Fabricación de carpintería metálica a medida para constructoras, empresas, ayuntamientos y particulares. Vallados, barandillas, puertas, rejas y estructuras de acero.",
    url: baseUrl,
    siteName: "BOA Estructuras",
    type: "website",
    locale: "es_ES",
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

const servicios = [
  {
    nombre: "Vallados y cerramientos metálicos",
    descripcion:
      "Fabricación de vallas metálicas, cerramientos perimetrales, mallas electrosoldadas y vallados para instalaciones industriales, deportivas y municipales.",
    enlace: "/cerramientos/vallados",
    boton: "Ver vallados",
  },
  {
    nombre: "Barandillas metálicas",
    descripcion:
      "Fabricación de barandillas de acero, protecciones peatonales y elementos de seguridad metálicos según las características técnicas de cada proyecto.",
    enlace: "/cerramientos/barandillas",
    boton: "Ver barandillas",
  },
  {
    nombre: "Puertas, rejas y escaleras metálicas",
    descripcion:
      "Trabajos de carpintería metálica a medida para viviendas, edificios, empresas y obras de construcción. Estudiamos planos, medidas y acabados.",
    enlace: "/proyectos",
    boton: "Ver proyectos",
  },
  {
    nombre: "Estructuras metálicas a medida",
    descripcion:
      "Fabricación de bastidores, soportes, estructuras tubulares y conjuntos de acero adaptados a las dimensiones y especificaciones de cada trabajo.",
    enlace: "/proyectos",
    boton: "Ver trabajos",
  },
  {
    nombre: "Cerramientos deportivos",
    descripcion:
      "Fabricación de cerramientos y elementos metálicos para pistas deportivas, colegios, instalaciones municipales y espacios exteriores.",
    enlace: "/cerramientos/deportivos",
    boton: "Ver cerramientos deportivos",
  },
  {
    nombre: "Parques infantiles",
    descripcion:
      "Diseño y fabricación de parques infantiles metálicos, de madera y robinia, conjuntos multijuego, columpios y otros elementos infantiles.",
    enlace: "/parques-infantiles",
    boton: "Ver parques infantiles",
  },
  {
    nombre: "Mobiliario urbano",
    descripcion:
      "Fabricación de bancos urbanos, papeleras, mesas de picnic y equipamiento para parques, jardines y espacios públicos.",
    enlace: "/mobiliario",
    boton: "Ver mobiliario urbano",
  },
  {
    nombre: "Equipamiento deportivo y calistenia",
    descripcion:
      "Fabricación de pistas deportivas, estructuras de street workout y parques de calistenia para instalaciones exteriores.",
    enlace: "/deporte",
    boton: "Ver equipamiento deportivo",
  },
];

const accesos = [
  {
    nombre: "Carpintería metálica",
    descripcion: "Fabricación a medida",
    enlace: "#carpinteria-metalica",
  },
  {
    nombre: "Cerramientos",
    descripcion: "Vallados y barandillas",
    enlace: "/cerramientos",
  },
  {
    nombre: "Proyectos",
    descripcion: "Trabajos realizados",
    enlace: "/proyectos",
  },
  {
    nombre: "Parques infantiles",
    descripcion: "Fabricación de juegos",
    enlace: "/parques-infantiles",
  },
  {
    nombre: "Deporte y mobiliario",
    descripcion: "Equipamiento exterior",
    enlace: "/deporte",
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
      "Empresa de carpintería metálica en Valencia especializada en fabricación de vallados, barandillas, cerramientos, puertas, estructuras metálicas y parques infantiles.",
    telephone: "+34 676 208 656",
    email: "administracion@boaestructuras.es",
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
              alt="BOA Estructuras"
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
            <a
              href="#carpinteria-metalica"
              className="hover:text-blue-900"
            >
              Carpintería metálica
            </a>

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

      {/* PORTADA PRINCIPAL */}

      <section className="relative flex min-h-screen items-center overflow-hidden bg-blue-950 px-6 pt-28 text-white">
        <div className="absolute inset-0">
          <Image
            src="/fotos/IMG_4104.jpeg"
            alt="Proyecto de fabricación de BOA Estructuras"
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
              alt="Logotipo de BOA Estructuras"
              width={170}
              height={170}
              className="mb-8 rounded-2xl bg-white/90 p-3 shadow-2xl"
            />

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400 md:tracking-[0.35em]">
              DISEÑO · FABRICACIÓN · INSTALACIÓN
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
              Carpintería Metálica en Valencia
              <span className="mt-3 block text-green-400">
                Fabricación a Medida
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-blue-100 md:text-2xl">
              En BOA Estructuras fabricamos
              vallados, cerramientos, barandillas,
              puertas, rejas, escaleras y
              estructuras metálicas para
              constructoras, empresas,
              ayuntamientos y particulares.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-blue-100">
              Trabajamos desde Valencia,
              ofreciendo soluciones de
              carpintería metálica adaptadas
              a las características de cada proyecto.
              También somos fabricantes de
              parques infantiles, mobiliario urbano
              y equipamiento deportivo.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#servicios"
                className="rounded-full bg-green-500 px-8 py-4 text-center font-bold text-white shadow-xl hover:bg-green-600"
              >
                Ver nuestros trabajos
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

      {/* ACCESOS PRINCIPALES */}

      <section className="bg-white px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-5 text-center sm:grid-cols-2 lg:grid-cols-5">
          {accesos.map((item) => (
            <Link
              key={item.nombre}
              href={item.enlace}
              className="block h-full"
            >
              <div className="h-full rounded-2xl bg-gray-100 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h2 className="text-xl font-black text-blue-950">
                  {item.nombre}
                </h2>

                <p className="mt-3 text-sm text-gray-600">
                  {item.descripcion}
                </p>

                <div className="mx-auto mt-5 h-[3px] w-10 rounded-full bg-green-500" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CARPINTERÍA METÁLICA */}

      <section
        id="carpinteria-metalica"
        className="scroll-mt-24 bg-gray-50 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-green-600">
            NUESTRA ACTIVIDAD PRINCIPAL
          </p>

          <h2 className="max-w-5xl text-3xl font-black text-blue-950 md:text-5xl">
            Fabricantes de carpintería metálica
            y estructuras de acero en Valencia
          </h2>

          <div className="mt-6 h-1 w-24 rounded-full bg-green-500" />

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-gray-700">
            BOA Estructuras está especializada
            en trabajos de carpintería metálica
            y fabricación a medida.

            Desarrollamos soluciones de acero
            para proyectos de construcción,
            cerramientos de parcelas,
            instalaciones deportivas,
            edificios y espacios públicos.
          </p>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-gray-700">
            Realizamos trabajos de fabricación
            de barandillas, vallados, puertas,
            rejas, escaleras, estructuras
            tubulares, soportes metálicos
            y elementos de cerrajería.

            Podemos trabajar a partir de planos,
            mediciones y especificaciones
            técnicas para adaptar cada fabricación
            a los requisitos del proyecto.
          </p>

          <h3 className="mt-12 text-2xl font-bold text-blue-950">
            Carpintería metálica para constructoras,
            empresas y ayuntamientos
          </h3>

          <p className="mt-5 max-w-5xl text-lg leading-relaxed text-gray-700">
            Estudiamos trabajos para obra nueva,
            reformas, instalaciones industriales
            y equipamientos municipales.

            Valoramos las dimensiones, materiales,
            acabados, anclajes y demás
            características necesarias
            para preparar cada presupuesto.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/cerramientos"
              className="rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white hover:bg-blue-700"
            >
              Ver cerramientos metálicos
            </Link>

            <Link
              href="/proyectos"
              className="rounded-xl border border-blue-900 px-7 py-4 font-semibold text-blue-900 hover:bg-blue-50"
            >
              Ver proyectos realizados
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}

      <section
        id="servicios"
        className="scroll-mt-24 bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-green-600">
              BOA ESTRUCTURAS
            </p>

            <h2 className="text-4xl font-black text-blue-950 md:text-5xl">
              Nuestros Servicios
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-green-500" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((item) => (
              <article
                key={item.nombre}
                className="group flex flex-col rounded-3xl bg-gray-50 p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:bg-blue-950 hover:text-white"
              >
                <h3 className="mb-4 text-2xl font-bold">
                  {item.nombre}
                </h3>

                <p className="flex-grow leading-relaxed text-gray-600 group-hover:text-blue-100">
                  {item.descripcion}
                </p>

                <Link
                  href={item.enlace}
                  className="mt-8 inline-block self-start font-semibold text-blue-900 underline underline-offset-4 group-hover:text-green-300"
                >
                  {item.boton}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FABRICACIÓN A MEDIDA */}

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-blue-950 md:text-4xl">
            Fabricación metálica a medida para cada obra
          </h2>

          <p className="mt-7 max-w-5xl text-lg leading-relaxed text-gray-700">
            Trabajamos con diferentes perfiles
            y materiales metálicos, incluyendo
            tubos estructurales, perfiles
            de acero, chapas, pletinas,
            mallas y otros elementos
            utilizados en carpintería metálica.
          </p>

          <p className="mt-5 max-w-5xl text-lg leading-relaxed text-gray-700">
            Podemos estudiar cerramientos
            de grandes dimensiones,
            barandillas para obras,
            puertas metálicas, rejas,
            escaleras y estructuras
            fabricadas a medida.

            Cada trabajo se desarrolla
            según sus requisitos técnicos,
            condiciones de uso y acabado.
          </p>

          <h3 className="mt-12 text-2xl font-bold text-blue-950">
            Trabajos de acero galvanizado y otros acabados
          </h3>

          <p className="mt-5 max-w-5xl text-lg leading-relaxed text-gray-700">
            Estudiamos diferentes opciones
            de protección y acabado,
            como el galvanizado y la pintura,
            según las características
            de cada fabricación y
            las condiciones de exposición.
          </p>
        </div>
      </section>

      {/* PARQUES INFANTILES */}

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-green-600">
            OTRA DE NUESTRAS ESPECIALIDADES
          </p>

          <h2 className="text-3xl font-black text-blue-950 md:text-4xl">
            Fabricantes de Parques Infantiles
          </h2>

          <p className="mt-7 max-w-5xl text-lg leading-relaxed text-gray-700">
            Además de nuestra actividad
            de carpintería metálica,
            en BOA Estructuras fabricamos
            parques infantiles para colegios,
            ayuntamientos y espacios públicos.

            Nuestro catálogo incluye parques
            metálicos, estructuras de madera
            y robinia, columpios, muelles
            y conjuntos multijuego.
          </p>

          <Link
            href="/parques-infantiles"
            className="mt-8 inline-block rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white hover:bg-blue-700"
          >
            Ver catálogo de parques infantiles
          </Link>
        </div>
      </section>

      {/* GALERÍA ORIGINAL */}

      <section
        id="galeria"
        className="bg-gray-50 px-6 py-24"
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

            <p className="mx-auto mt-7 max-w-3xl text-lg text-gray-600">
              Conoce algunos de nuestros
              trabajos de fabricación
              y equipamiento.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fotos.map((foto, index) => (
              <div
                key={foto}
                className="group overflow-hidden rounded-3xl shadow-2xl"
              >
                <Image
                  src={foto}
                  alt={`Proyecto realizado por BOA Estructuras, fotografía ${index + 1}`}
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
            Consulta nuestros catálogos
            comerciales de carpintería
            metálica, estructuras metálicas
            y parques infantiles.
          </p>

          <div className="flex flex-col justify-center gap-6 md:flex-row">
            <a
              href="/catalogos/Catálogo BOA Estructuras Metálicas.pdf"
              download
              className="rounded-full bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
            >
              Descargar catálogo estructuras
            </a>

            <a
              href="/catalogos/Catálogo BOA parques infantiles.pdf"
              download
              className="rounded-full bg-white px-8 py-4 font-semibold text-blue-950 transition hover:bg-gray-100"
            >
              Descargar catálogo parques
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTO */}

      <section
        id="contacto"
        className="scroll-mt-24 bg-white px-6 py-20"
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
            ¿Necesitas fabricar una barandilla,
            una puerta metálica, un vallado
            o cualquier otro trabajo de
            carpintería metálica?

            Envíanos las dimensiones,
            planos o características
            del proyecto para solicitar
            presupuesto.
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
              "Hola, quiero solicitar presupuesto de un trabajo de carpintería metálica a BOA Estructuras."
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
              Especialistas en carpintería metálica
              en Valencia. Fabricación de estructuras
              metálicas, vallados, barandillas,
              puertas, cerramientos, parques
              infantiles y equipamiento urbano.
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
