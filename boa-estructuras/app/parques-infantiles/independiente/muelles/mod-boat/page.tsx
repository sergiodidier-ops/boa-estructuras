export default function ModBoatPage() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>BOAT</h1>

      <img
        src="/fotos/independiente/muelles/mod-boat/portada.png"
        alt="BOAT"
        style={{
          maxWidth: "800px",
          width: "100%",
          height: "auto",
          margin: "30px auto",
          display: "block",
        }}
      />

      <a
        href="/fotos/independiente/muelles/mod-boat/ficha-tecnica.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#1677c8",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        Ver ficha técnica
      </a>
    </main>
  );
}