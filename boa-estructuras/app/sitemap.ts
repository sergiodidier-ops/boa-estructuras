
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.boaestructuras.es"

  const rutas = [
    "",
    "/parques-infantiles",
    "/cerramientos",
    "/deporte",
    "/mobiliario",
    "/proyectos",
  ]

  return rutas.map((ruta) => ({
    url: `${baseUrl}${ruta}`,
    changeFrequency: "weekly",
    priority: ruta === "" ? 1 : 0.8,
  }))
}
