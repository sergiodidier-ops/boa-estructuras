const fotos = [
  "/fotos/metal/mod-ksa/mod-ksa.png",
  "/fotos/metal/mod-ksa/mod-ksa-trasera.png",
  "/fotos/metal/mod-ksa/mod-ksa-medidas.png",
  "/fotos/metal/mod-ksa/portada.png",
];

export default function ModKsaPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">
          Modelo KSA
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fotos.map((foto) => (
            <img
              key={foto}
              src={foto}
              alt="Modelo KSA"
              className="rounded-2xl shadow-lg w-full"
            />
          ))}
        </div>

        <a
          href="/fotos/metal/mod-ksa/ficha-tecnica.pdf"
          target="_blank"
          className="mt-10 inline-block rounded-2xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
          Ver ficha técnica PDF
        </a>
      </div>
    </main>
  );
}