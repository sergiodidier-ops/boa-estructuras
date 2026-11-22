
import type { MetadataRoute } from "next";

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

// Categorías de parques infantiles
const categorias = [
  "/parques-infantiles/metal",
  "/parques-infantiles/madera",
  "/parques-infantiles/robinia",
  "/parques-infantiles/jugar-es-crecer",
  "/parques-infantiles/independiente",
  "/parques-infantiles/independiente/columpios",
  "/parques-infantiles/independiente/muelles",
];

// 20 modelos metálicos
const metal = [
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

// 14 modelos de madera
const madera = [
  "mod-kdiz",
  "mod-kstellon",
  "mod-kceres",
  "mod-klpe",
  "mod-ksabo",
  "mod-knada",
  "mod-kli",
  "mod-krtagena",
  "mod-kracas",
  "mod-kiro",
  "mod-kseña",
  "mod-ropes",
  "mod-tcuerdas",
  "mod-climb",
];

// 12 modelos de robinia
const robinia = [
  "mod-rbn01",
  "mod-rbn02",
  "mod-rbn03",
  "mod-rbn04",
  "mod-rbn05",
  "mod-rbn06",
  "mod-rbn07",
  "mod-rbn08",
  "mod-rbn09",
  "mod-rbn10",
  "mod-velero",
  "mod-barcomad",
];

// 6 modelos Jugar es Crecer
const jugarEsCrecer = [
  "mod-castano",
  "mod-jungle",
  "mod-trebol",
  "mod-haya",
  "mod-roble",
  "mod-pino",
];

// 12 modelos de columpios
const columpios = [
  "col-metal-duo",
  "col-metal-cesta",
  "col-duo-baby",
  "col-peh",
  "col-ma",
  "colma-cesta",
  "col-ad",
  "col-mixto",
  "colhex",
  "col-mix",
  "coleq",
  "rbn-col",
];

// 32 modelos de muelles
const muelles = [
  "mod-balmet",
  "mod-balmet-duo",
  "mod-balbar",
  "mod-balmad",
  "mod-rbnbal",
  "mod-kar",
  "mod-bom",
  "mod-mupe",
  "mod-moto",
  "mod-drak",
  "mod-hourse",
  "mod-kobra",
  "mod-jirafa",
  "mod-flor",
  "mod-maryp",
  "mod-rana",
  "mod-octopus",
  "mod-mu",
  "mod-mp",
  "mod-erizo",
  "mod-koala",
  "mod-boat",
  "mod-cohete",
  "mod-avocado",
  "mod-hipo",
  "mod-pometa",
  "mod-carrot",
  "mod-pera",
  "mod-platano",
  "mod-floret",
  "mod-ghost",
  "mod-delfin",
];

const rutasProductos = [
  ...metal.map(
    (id) => `/parques-infantiles/metal/${id}`
  ),
  ...madera.map(
    (id) => `/parques-infantiles/madera/${id}`
  ),
  ...robinia.map(
    (id) => `/parques-infantiles/robinia/${id}`
  ),
  ...jugarEsCrecer.map(
    (id) => `/parques-infantiles/jugar-es-crecer/${id}`
  ),
  ...columpios.map(
    (id) => `/parques-infantiles/independiente/columpios/${id}`
  ),
  ...muelles.map(
    (id) => `/parques-infantiles/independiente/muelles/${id}`
  ),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = [
    ...principales,
    ...categorias,
    ...rutasProductos,
  ];

  return rutas.map((ruta) => ({
    url: `${baseUrl}${ruta}`,
    changeFrequency: "monthly",
    priority:
      ruta === ""
        ? 1
        : principales.includes(ruta)
          ? 0.9
          : categorias.includes(ruta)
            ? 0.8
            : 0.7,
  }));
}
