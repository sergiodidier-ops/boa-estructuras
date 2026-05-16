const fotos = [
  "/fotos/metal/mod-ksa-roco/foto1.png",
  "/fotos/metal/mod-ksa-roco/foto2.png",
  "/fotos/metal/mod-ksa-roco/foto3.png",
  "/fotos/metal/mod-ksa-roco/foto4.png",
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
      </div>
    </main>
  )
}