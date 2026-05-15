const fotos = [
  "/fotos/metal/mod-ksa-roco.png",
]

export default function ModKsaRocoPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-8">
          Modelo KSA Roco
        </h1>

        <div className="grid gap-8">
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