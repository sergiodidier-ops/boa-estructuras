import Image from "next/image";

export default function ModHayaPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Modelo Haya
      </h1>

      <Image
        src="/fotos/jugar-es-crecer/mod-haya/portada.png"
        alt="Modelo Haya"
        width={1200}
        height={800}
        className="w-full rounded-xl mb-10"
      />

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Image
          src="/fotos/jugar-es-crecer/mod-haya/mod-haya.png"
          alt="Modelo Haya"
          width={1200}
          height={800}
          className="rounded-xl"
        />

        <Image
          src="/fotos/jugar-es-crecer/mod-haya/mod-haya-aerea.png"
          alt="Modelo Haya Vista Aérea"
          width={1200}
          height={800}
          className="rounded-xl"
        />
      </div>

      <div className="flex justify-center">
        <a
          href="/fotos/jugar-es-crecer/mod-haya/ficha-tecnica.pdf"
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