
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proyecto CEIP Montserrat | BOA Estructuras",
  description:
    "Trabajos realizados por BOA Estructuras en el CEIP Montserrat. Galería fotográfica de elementos de juego infantil.",
  alternates: {
    canonical:
      "https://www.boaestructuras.es/proyectos/ceip-montserrat",
  },
};

const imagenes = [
  {
    src: "/fotos/proyectos/ceip-Montserrat/balancin.JPG",
    titulo: "Balancín infantil",
    descripcion: "Fotografía del balancín infantil.",
  },
  {
    src: "/fotos/proyectos/ceip-Montserrat/tobogan.JPG",
    titulo: "Tobogán infantil",
    descripcion: "Fotografía del tobogán infantil.",
  },
];

export default function ProyectoCEIPMontserrat() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-6xl">

        {/* NAVEGACIÓN */}

        <nav className="mb-12 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-900">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/proyectos"
            className="hover:text-blue-900"
          >
            Proyectos realizados
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">
            CEIP Montserrat
          </span>
        </nav>

        {/* CABECERA */}

        <header className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            BOA ESTRUCTURAS · TRABAJOS REALIZADOS
          </span>

          <h1 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
            CEIP Montserrat
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-500" />

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-gray-600">
            Galería de trabajos de equipamiento
            infantil en el CEIP Montserrat.

            Descubre las fotografías de los
            elementos de juego de este proyecto.
          </p>
        </header>

        {/* FOTOGRAFÍAS */}

        <section className="grid gap-10 md:grid-cols-2">
          {imagenes.map((imagen) => (
            <article
              key={imagen.src}
              className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl"
            >
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={imagen.src}
                  alt={`${imagen.titulo} - CEIP Montserrat - BOA Estructuras`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>

              <div className="p-7">
                <h2 className="text-2xl font-bold text-blue-950">
                  {imagen.titulo}
                </h2>

                <div className="mt-3 h-1 w-12 rounded-full bg-green-500" />

                <p className="mt-5 leading-relaxed text-gray-600">
                  {imagen.descripcion}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* INFORMACIÓN */}

        <section className="mx-auto mt-20 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-blue-950">
            Equipamiento para parques infantiles
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            En BOA Estructuras desarrollamos
            proyectos de equipamiento infantil
            para centros educativos, parques
            y espacios públicos.

            Disponemos de diferentes modelos
            de balancines, toboganes,
            columpios y conjuntos multijuego.
          </p>

          <Link
            href="/parques-infantiles"
            className="mt-8 inline-block rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white hover:bg-blue-700"
          >
            Ver catálogo de parques infantiles
          </Link>
        </section>

        {/* PRESUPUESTO */}

        <section className="mt-20 rounded-3xl bg-blue-950 p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold text-white">
            ¿Necesitas equipar un parque infantil?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Contacta con BOA Estructuras
            para solicitar información
            y presupuesto.
          </p>

          <a
            href="https://wa.me/34676208656?text=Hola%2C%20quiero%20solicitar%20presupuesto%20de%20equipamiento%20infantil."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-green-600 px-8 py-4 font-semibold text-white hover:bg-green-700"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </section>

        <div className="mt-12 text-center">
          <Link
            href="/proyectos"
            className="font-semibold text-blue-900 hover:underline"
          >
            Volver a proyectos realizados
          </Link>
        </div>

      </div>
    </main>
  );
}
