const fotos = [
  "/fotos/metal/mod-kbaña/mod-kbaña.png",
  "/fotos/metal/mod-kbaña/mod-kbaña-aerea.png",
  "/fotos/metal/mod-kbaña/portada.png",
];

export default function ModKbanaPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">
          Modelo Kbaña
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fotos.map((foto) => (
            <img
              key={foto}
              src={foto}
              alt="Modelo Kbaña"
              className="rounded-2xl shadow-lg w-full"
            />
          ))}
        </div>

        <a
          href="/fotos/metal/mod-kbaña/ficha-tecnica.pdf"
          target="_blank"
          className="mt-10 inline-block rounded-2xl bg-blue-600 px-6 py-4 text-white font-semibold hover:bg-blue-700 transition"
        >
          Ver ficha técnica PDF
        </a>
      </div>
    </main>
  );
}