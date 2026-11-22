
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.boaestructuras.es";

  // Páginas principales
  const principales = [
    "",
    "/parques-infantiles",
    "/cerramientos",
    "/deporte",
    "/mobiliario",
    "/proyectos",
  ];

  // Series de parques infantiles
  const series = [
    "/parques-infantiles/metal",
    "/parques-infantiles/madera",
    "/parques-infantiles/robinia",
    "/parques-infantiles/jugar-es-crecer",
    "/parques-infantiles/independiente",
  ];

  // Modelos de la Serie Metal
  const modelosMetal = [
    "mod-ksa-roco",
    "mod-torreroko",
    "mod-ksetas",
    "mod-kcity",
    "mod-kbaña",
    "mod-kbaña-duo",
    "mod-ksa",
    "mod-ksa-duo",
    "mod-ksapont",
    "mod-ksados",
    "mod-ksotas",
    "mod-ksarbol",
    "mod-town",
    "mod-tup",
    "mod-tob",
    "mod-tower",
    "mod-kracovia",
    "mod-knnes",
    "mod-ksablanca",
    "mod-krdiff",
  ];

  const rutas = [
    ...principales,
    ...series,
    ...modelosMetal.map(
      (modelo) => `/parques-infantiles/metal/${modelo}`
    ),
  ];

  return rutas.map((ruta) => ({
    url: `${baseUrl}${ruta}`,
    changeFrequency: "weekly",
    priority:
      ruta === ""
        ? 1
        : principales.includes(ruta)
          ? 0.9
          : series.includes(ruta)
            ? 0.8
            : 0.7,
  }));
}
