const fotos = [
  "/fotos/metal/mod-ksa-roco/MOD-KSA MEDIDAS.png",
  "/fotos/metal/mod-ksa-roco/mod-metal2.png",
  "/fotos/metal/mod-ksa-roco/mod-metal3.png",
]

export default function ModKsaRocoPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Modelo KSA Roco</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fotos.map((foto) => (
            <img
              key={foto}
              src={foto}
              alt="Modelo KSA Roco"
              className="rounded-2xl shadow-lg w-full"
            />
          ))}
        </div>

        <a
          href="/fotos/metal/mod-ksa-roco/ficha-tecnica.pdf"
          target="_blank"
          className="mt-10 inline-block rounded-2xl bg-blue-600 px-6 py-4 text-white font-bold"
        >
          Ver ficha técnica PDF
        </a>
      </div>
    </main>
  )
}