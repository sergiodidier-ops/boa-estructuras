const fotos = [
  "/fotos/madera/mod-kdiz/portada.png",
  "/fotos/madera/mod-kdiz/mod-kdiz.png",
  "/fotos/madera/mod-kdiz/mod-kdiz-trasera.png",
  "/fotos/madera/mod-kdiz/mod-kdiz-aerea.png",
];

export default function ModKdizPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-[0.35em] text-amber-700 font-medium">
            BOA ESTRUCTURAS
          </span>

          <h1 className="text-6xl font-black text-stone-900 mt-4 tracking-tight">
            KDIZ
          </h1>

          <div className="w-20 h-[3px] bg-amber-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {fotos.map((foto) => (
            <div
              key={foto}
              className="overflow-hidden rounded-[2rem] shadow-xl bg-white p-6"
            >
              <img
                src={foto}
                alt="Modelo KDIZ"
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="/fotos/madera/mod-kdiz/ficha-tecnica.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition shadow-lg"
          >
            Ver ficha técnica
          </a>
        </div>

      </div>
    </main>
  );
}