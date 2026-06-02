const fotos = [
  "/fotos/robinia/mod-rbn07/portada.png",
  "/fotos/robinia/mod-rbn07/mod-rbn07.png",
  "/fotos/robinia/mod-rbn07/mod-rbn07-trasera.png",
  "/fotos/robinia/mod-rbn07/parque_con_medidas.png",
];

export default function ModRbn07Page() {
  return (
    <main className="min-h-screen bg-[#f3f0e7] px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black text-[#2d3c23] mb-6">
          RBN07
        </h1>

        <p className="text-lg text-stone-700 mb-12">
          Parque infantil fabricado en madera Robinia de alta durabilidad,
          diseñado para integrarse de forma natural en espacios recreativos.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {fotos.map((foto) => (
            <div
              key={foto}
              className="overflow-hidden rounded-3xl shadow-2xl bg-white"
            >
              <img
                src={foto}
                alt="Modelo RBN07"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/fotos/robinia/mod-rbn07/ficha-tecnica.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-2xl transition"
          >
            Descargar ficha técnica
          </a>
        </div>

      </div>
    </main>
  );
}