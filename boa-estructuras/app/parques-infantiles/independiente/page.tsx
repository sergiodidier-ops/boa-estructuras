export default function IndependientePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Cabecera */}
        <div className="text-center mb-24">
          <span className="uppercase tracking-[0.45em] text-sky-700 font-semibold text-sm">
            ELEMENTOS INDIVIDUALES
          </span>

          <h1 className="text-7xl lg:text-8xl font-black text-[#24345d] mt-6">
            INDEPENDIENTE
          </h1>

          <div className="w-32 h-1 bg-sky-500 mx-auto mt-6 rounded-full"></div>

          <p className="text-xl text-slate-600 mt-10 max-w-4xl mx-auto leading-relaxed">
            Soluciones de juego individuales diseñadas para completar parques
            infantiles, áreas recreativas y espacios urbanos.
          </p>
        </div>

        {/* Categorías */}
        <div className="max-w-4xl mx-auto space-y-24">

          {/* COLUMPIOS */}
          <section>
            <a
              href="/parques-infantiles/independiente/columpios"
              className="group block"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-[#24345d] group-hover:text-sky-600 transition">
                Columpios
              </h2>

              <div className="w-24 h-1 bg-sky-500 rounded-full mt-4 group-hover:w-40 transition-all duration-300"></div>

              <p className="mt-6 text-lg text-slate-600">
                Columpios individuales y múltiples para parques infantiles,
                colegios y espacios públicos.
              </p>
            </a>
          </section>

          {/* MUELLES */}
          <section>
            <a
              href="/parques-infantiles/independiente/muelles"
              className="group block"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-[#24345d] group-hover:text-emerald-600 transition">
                Muelles
              </h2>

              <div className="w-24 h-1 bg-emerald-500 rounded-full mt-4 group-hover:w-40 transition-all duration-300"></div>

              <p className="mt-6 text-lg text-slate-600">
                Juegos de muelle diseñados para fomentar el equilibrio,
                la coordinación y la diversión de los más pequeños.
              </p>
            </a>
          </section>

        </div>

      </div>
    </main>
  );
}