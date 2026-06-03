import Image from "next/image";

export default function ModRoblePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Modelo Roble
      </h1>

      <Image
        src="/fotos/jugar-es-crecer/mod-roble/portada.png"
        alt="Modelo Roble"
        width={1200}
        height={800}
        className="w-full rounded-xl mb-10"
      />

      <div className="flex justify-center mb-10">
        <Image
          src="/fotos/jugar-es-crecer/mod-roble/mod-roble.png"
          alt="Modelo Roble"
          width={1200}
          height={800}
          className="rounded-xl"
        />
      </div>

      <div className="flex justify-center">
        <a
          href="/fotos/jugar-es-crecer/mod-roble/ficha-tecnica.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Descargar ficha técnica
        </a>
      </div>
    </main>
  );
}