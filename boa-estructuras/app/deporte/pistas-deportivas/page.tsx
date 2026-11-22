
import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.boaestructuras.es";
const telefono = "34676208656";

export const metadata: Metadata = {
  title: "Fabricantes de Pistas Multideporte | BOA Estructuras",
  description:
    "Fabricación de pistas deportivas y multideporte en Valencia. Soluciones para colegios, ayuntamientos, parques e instalaciones deportivas exteriores. Solicita presupuesto.",
  alternates: {
    canonical: `${baseUrl}/deporte/pistas-deportivas`,
  },
  openGraph: {
    title: "Pistas Deportivas y Multideporte | BOA Estructuras",
    description:
      "Catálogo de pistas deportivas para colegios, parques e instalaciones municipales. Fabricación de equipamiento deportivo exterior.",
    url: `${baseUrl}/deporte/pistas-deportivas`,
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
    nombre: "BOA117",
    modelo: "MOD-HP1",
    tipo: "Pista deportiva",
    descripcion:
      "Pista deportiva diseñada para instalaciones exteriores, colegios, parques y espacios deportivos de uso público.",
    imagen: "/fotos/deporte/pistas-deportivas/boa117/portada.png",
    enlace: "/deporte/pistas-deportivas/boa117",
  },
  {
    nombre: "BOA118",
    modelo: "MOD-HP2",
    tipo: "Pista deportiva",
    descripcion:
      "Pista deportiva multiuso para espacios públicos y zonas deportivas.",
    imagen: "/fotos/deporte/pistas-deportivas/boa118/portada.png",
    enlace: "/deporte/pistas-deportivas/boa118",
  },
  {
    nombre: "BOA119",
    modelo: "MOD-HP3",
    tipo: "Pista deportiva",
    descripcion:
      "Pista deportiva exterior preparada para uso intensivo y diferentes actividades deportivas.",
    imagen: "/fotos/deporte/pistas-deportivas/boa119/portada.png",
    enlace: "/deporte/pistas-deportivas/boa119",
  },
];

export default function PistasDeportivasPage() {
  const catalogoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Pistas Deportivas y Multideporte | BOA Estructuras",
    description:
      "Catálogo de pistas deportivas exteriores para colegios, parques e instalaciones municipales.",
    url: `${baseUrl}/deporte/pistas-deportivas`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: modelos.length,
      itemListElement: modelos.map((modelo, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `Pista deportiva ${modelo.nombre} - ${modelo.modelo}`,
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

          <Link
            href="/deporte"
            className="hover:text-blue-900"
          >
            Equipamiento deportivo
          </Link>

          <span className="mx-2">/</span>

          <span className="font-semibold text-gray-900">
            Pistas deportivas
          </span>
        </nav>

        {/* CABECERA */}

        <header className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            EQUIPAMIENTO DEPORTIVO PARA EXTERIORES
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            Fabricantes de Pistas Deportivas y Multideporte
          </h1>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-5 rounded-full" />

          <p className="text-gray-600 mt-6 text-lg max-w-4xl mx-auto leading-relaxed">
            En BOA Estructuras fabricamos pistas deportivas
            y soluciones multideporte para instalaciones
            exteriores, colegios, parques, zonas recreativas
            y espacios públicos.

            Nuestro catálogo ofrece diferentes modelos
            de pistas
