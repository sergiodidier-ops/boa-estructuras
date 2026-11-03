import Image from "next/image";

const fotos = [
  "/fotos/IMG_4104.jpeg",
  "/fotos/IMG_4105.jpeg",
  "/fotos/IMG_4106.jpeg",
  "/fotos/IMG_4107.jpeg",
  "/fotos/IMG_4108.jpeg",
  "/fotos/IMG_4109.jpeg",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white/90 shadow-md backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo/logo.png"
              alt="BOA Estructuras"
              width={55}
              height={55}
            />

            <span className="text-xl font-bold text-blue-950">
              BOA Estructuras
            </span>
          </a>

          <nav className="hidden gap-8 font-semibold text-gray-700 md:flex">

            <a
              href="#servicios"
              className="hover:text-blue-900"
            >
              Servicios
            </a>

            <a
              href="/proyectos"
              className="hover:text-blue-900"
            >
              Proyectos
            </a>

            <a
              href="#catalogos"
              className="hover:text-blue-900"
            >
              Catálogos
            </a>

            <a
              href="#contacto"
              className="hover:text-blue-900"
            >
              Contacto
            </a>

          </nav>

          <a
            href="https://wa.me/34676208656"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-green-500 px-5 py-2 font-bold text-white hover:bg-green-600 md:block"
          >
            WhatsApp
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-blue-950 px-6 pt-28 text-white">

        <div className="absolute inset-0">
          <Image
            src="/fotos/IMG_4104.jpeg"
            alt="Parque infantil BOA Estructuras"
            fill
            priority
            className="object-cover scale-105 opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">

            <Image
              src="/logo/logo.PNG"
              alt="BOA Estructuras"
              width={170}
              height={170}
              className="mb-8 rounded-2xl bg-white/90 p-3 shadow-2xl"
            />

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
              Diseño · Fabricación · Instalación
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-8xl">
              Soluciones para parques, deporte, ciudad y vivienda modular
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-blue-100 md:text-2xl">
              En BOA Estructuras diseñamos e instalamos parques infantiles,
              equipamiento deportivo, estructuras metálicas, cerramientos,
              mobiliario urbano y casas modulares adaptadas a cada proyecto.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="#servicios"
                className="rounded-full bg-green-500 px-8 py-4 text-center font-bold text-white shadow-xl hover:bg-green-600"
              >
                Ver servicios
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
      <section className="bg-white px-6 py-12">

        <div className="mx-auto grid max-w-7xl gap-5 text-center sm:grid-cols-2 lg:grid-cols-5">

          {[
            {
              title: "Parques",
              text: "infantiles",
              enlace: "/parques-infantiles",
            },
            {
              title: "Cerramientos",
              text: "seguridad",
              enlace: "/cerramientos",
            },
            {
              title: "Mobiliario",
              text: "urbano",
              enlace: "/mobiliario",
            },
            {
              title: "Deporte",
              text: "equipamiento",
              enlace: "/deporte",
            },
            {
              title: "Proyectos",
              text: "a medida",
              enlace: "/proyectos",
            },
          ].map((item) => (

            <a
              key={item.title}
              href={item.enlace}
              className="block"
            >

              <div className="h-full rounded-2xl bg-gray-100 p-8 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg">

                <h3 className="text-2xl font-black text-blue-950 xl:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {item.text}
                </p>

                <div className="mx-auto mt-5 h-[3px] w-10 rounded-full bg-green-500" />

              </div>

            </a>

          ))}

        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="bg-gradient-to-b from-white to-gray-100 px-6 py-24"
      >

        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">

            <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-green-500">
              BOA Estructuras
            </p>

            <h2 className="text-5xl font-black text-blue-950">
              Nuestros Servicios
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-green-500" />

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Parques Infantiles",
              "Equipamiento Deportivo",
              "Estructuras Metálicas",
              "Cerramientos",
              "Mobiliario Urbano",
              "Casas Modulares",
              "Proyectos a Medida",
            ].map((item) => (

              <div
                key={item}
                className="group rounded-3xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:bg-blue-950 hover:text-white"
              >

                <h3 className="mb-4 text-2xl font-semibold">
                  {item}
                </h3>

                <p className="text-gray-600 group-hover:text-blue-100">
                  Diseño, fabricación e instalación profesional con materiales
                  de alta calidad.
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section
        id="galeria"
        className="bg-white px-6 py-24"
      >

        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">

            <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-green-500">
              Trabajos BOA
            </p>

            <h2 className="text-5xl font-black text-blue-950">
              Proyectos Realizados
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-green-500" />

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {fotos.map((foto) => (

              <div
                key={foto}
                className="group overflow-hidden rounded-3xl shadow-2xl"
              >

                <Image
                  src={foto}
                  alt="Proyecto BOA"
                  width={500}
                  height={400}
                  className="h-[320px] w-full object-cover transition duration-700 hover:scale-110"
                />

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* CATÁLOGOS */}
      <section
        id="catalogos"
        className="bg-blue-950 px-6 py-20 text-white"
      >

        <div className="mx-auto max-w-5xl text-center">

          <div className="mb-10 text-center">

            <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-green-500">
              Descargas
            </p>

            <h2 className="text-5xl font-black text-white">
              Catálogos BOA
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-green-500" />

          </div>

          <p className="mb-10 text-lg text-blue-100">
            Descarga nuestros catálogos comerciales de parques infantiles
            y estructuras metálicas.
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

      {/* CONTACTO */}
      <section
        id="contacto"
        className="bg-white px-6 py-20"
      >

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-green-500">
            Hablemos
          </p>

          <h2 className="text-5xl font-black text-blue-950">
            Contacto
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-green-500" />

          <p className="mt-8 text-xl text-gray-600">
            Solicita presupuesto sin compromiso
          </p>

          <div className="mt-8 space-y-3 text-lg text-gray-700">
            <p>📞 676 208 656</p>
            <p>📧 sergio.fraile@boaestructuras.es</p>
            <p>📧 administracion@boaestructuras.es</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-6 py-10 text-gray-400">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">

          <div>

            <h3 className="text-2xl font-bold text-white">
              BOA Estructuras
            </h3>

            <p className="mt-2 max-w-md text-sm">
              Especialistas en parques infantiles, equipamiento deportivo,
              estructuras metálicas, cerramientos, mobiliario urbano y casas
              modulares.
            </p>

          </div>

          <div className="text-sm">
            <p>📞 676 208 656</p>
            <p>📧 sergio.fraile@boaestructuras.es</p>
            <p>📍 España</p>
          </div>

        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm">
          © 2026 BOA Estructuras. Todos los derechos reservados.
        </div>

      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/34676208656"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-5 py-4 font-bold text-white shadow-xl transition hover:bg-green-600"
      >
        WhatsApp
      </a>

    </main>
  );
}