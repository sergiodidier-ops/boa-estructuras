import Image from "next/image";

export default function ModJunglePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Modelo Jungle
      </h1>

      <Image
        src="/fotos/jugar-es-crecer/mod-jungle/portada.png"
        alt="Modelo Jungle"
        width={1200}
        height={800}
        className="w-full rounded-xl mb-10"
      />

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Image
          src="/fotos/jugar-es-crecer/mod-jungle/mod-jungle.png"
          alt="Modelo Jungle"
          width={1200}
          height={800}
          className="rounded-xl"
        />

        <Image
          src="/fotos/jugar-es-crecer/mod-jungle/mod-jungle-aerea.png"
          alt="Modelo Jungle Vista Aérea"
          width={1200}
          height={800}
          className="rounded-xl"
        />
      </div>
    </main>
  );
}