
import type { MetadataRoute } from "next";

const baseUrl = "https://www.boaestructuras.es";

// ==========================================
// PAGINAS PRINCIPALES
// ==========================================

const principales = [
  "",
  "/parques-infantiles",
  "/cerramientos",
  "/deporte",
  "/mobiliario",
  "/proyectos",
];

// ==========================================
// CATEGORIAS DE PARQUES INFANTILES
// ==========================================

const categoriasParques = [
  "/parques-infantiles/metal",
  "/parques-infantiles/madera",
  "/parques-infantiles/robinia",
  "/parques-infantiles/jugar-es-crecer",
  "/parques-infantiles/independiente",
  "/parques-infantiles/independiente/columpios",
  "/parques-infantiles/independiente/muelles",
];

// ==========================================
// CATEGORIAS DE CERRAMIENTOS
// ==========================================

const categoriasCerramientos = [
  "/cerramientos/deportivos",
  "/cerramientos/vallados",
  "/cerramientos/barandillas",
];

// ==========================================
// CATEGORIAS DE DEPORTE
// ==========================================

const categoriasDeporte = [
  "/deporte/pistas-deportivas",
  "/deporte/workout",
  "/deporte/elementos-deportivos",
];

// ==========================================
// PARQUES INFANTILES METAL - 20 MODELOS
// ==========================================

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

// ==========================================
// PARQUES INFANTILES MADERA - 14 MODELOS
// ==========================================

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

// ==========================================
// PARQUES INFANTILES ROBINIA - 12 MODELOS
// ==========================================

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

// ==========================================
// JUGAR ES CRECER - 6 MODELOS
// ==========================================

const jugarEsCrecer = [
  "mod-castano",
  "mod-jungle",
  "mod-trebol",
  "mod-haya",
  "mod-roble",
  "mod-pino",
];

// ==========================================
// COLUMPIOS - 12 MODELOS
// ==========================================

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

// ==========================================
// MUELLES - 32 MODELOS
// ==========================================

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

// ==========================================
// CERRAMIENTOS DEPORTIVOS - 3 MODELOS
// ==========================================

const cerramientosDeportivos = [
  "boa128",
  "boa129",
  "boa130",
];

// ==========================================
// VALLADOS METALICOS - 6 MODELOS
// ==========================================

const vallados = [
  "boa131",
  "boa132",
  "boa133",
  "boa134",
  "boa135",
  "boa136",
];

// ==========================================
// BARANDILLAS METALICAS - 4 MODELOS
// ==========================================

const barandillas = [
  "boa137",
  "boa138",
  "boa139",
  "boa140",
];

// ==========================================
// MOBILIARIO URBANO - 10 MODELOS
// ==========================================

const mobiliario = [
  "boa107",
  "boa108",
  "boa109",
  "boa110",
  "boa111",
  "boa112",
  "boa113",
  "boa114",
  "boa115",
  "boa116",
];

// ==========================================
// PISTAS DEPORTIVAS - 3 MODELOS
// ==========================================

const pistasDeportivas = [
  "boa117",
  "boa118",
  "boa119",
];

// ==========================================
// WORKOUT Y CALISTENIA - 5 MODELOS
// ==========================================

const workout = [
  "boa122",
  "boa123",
  "boa124",
  "boa125",
  "boa126",
];

// ==========================================
// RUTAS DE TODOS LOS PRODUCTOS
// ==========================================

const rutasProductos = [
  // Parques infantiles metálicos
  ...metal.map(
    (id) => `/parques-infantiles/metal/${id}`
  ),

  // Parques infantiles de madera
  ...madera.map(
    (id) => `/parques-infantiles/madera/${id}`
  ),

  // Parques infantiles de robinia
  ...robinia.map(
    (id) => `/parques-infantiles/robinia/${id}`
  ),

  // Jugar es crecer
  ...jugarEsCrecer.map(
    (id) => `/parques-infantiles/jugar-es-crecer/${id}`
  ),

  // Columpios
  ...columpios.map(
    (id) =>
      `/parques-infantiles/independiente/columpios/${id}`
  ),

  // Muelles
  ...muelles.map(
    (id) =>
      `/parques-infantiles/independiente/muelles/${id}`
  ),

  // Cerramientos deportivos
  ...cerramientosDeportivos.map(
    (id) => `/cerramientos/deportivos/${id}`
  ),

  // Vallados metálicos
  ...vallados.map(
    (id) => `/cerramientos/vallados/${id}`
  ),

  // Barandillas metálicas
  ...barandillas.map(
    (id) => `/cerramientos/barandillas/${id}`
  ),

  // Mobiliario urbano
  ...mobiliario.map(
    (id) => `/mobiliario/${id}`
  ),

  // Pistas deportivas
  ...pistasDeportivas.map(
    (id) => `/deporte/pistas-deportivas/${id}`
  ),

  // Workout y calistenia
  ...workout.map(
    (id) => `/deporte/workout/${id}`
  ),
];

// ==========================================
// SITEMAP COMPLETO
// ==========================================

export default function sitemap(): MetadataRoute.Sitemap {
  const categorias = [
    ...categoriasParques,
    ...categoriasCerramientos,
    ...categoriasDeporte,
  ];

  const rutas = [
    ...principales,
    ...categorias,
    ...rutasProductos,
  ];

  // Evita que una misma URL aparezca dos veces
  const rutasUnicas = [...new Set(rutas)];

  return rutasUnicas.map((ruta) => ({
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
