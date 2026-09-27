export type ProductType = "anillos" | "cadenas" | "aretes" | "pulseras" | "dijes" | "sets";
export type Occasion = "diario" | "compromiso" | "regalo" | "fiesta";
export type Gender = "mujer" | "hombre" | "unisex";
export type Availability = "disponible" | "por-encargo" | "consultar";
export type CollectionId = "clasicos" | "compromiso" | "regalo";

export interface Product {
  slug: string;
  name: string;
  type: ProductType;
  occasion: Occasion[];
  gender: Gender;
  collection: CollectionId;
  availability: Availability;
  weightNote: string;
  sizeNote: string;
  shortDescription: string;
  gradient: string;
}

export const TYPE_LABELS: Record<ProductType, string> = {
  anillos: "Anillos",
  cadenas: "Cadenas",
  aretes: "Aretes",
  pulseras: "Pulseras",
  dijes: "Dijes",
  sets: "Sets",
};

export const OCCASION_LABELS: Record<Occasion, string> = {
  diario: "Diario",
  compromiso: "Compromiso",
  regalo: "Regalo",
  fiesta: "Fiesta",
};

export const GENDER_LABELS: Record<Gender, string> = {
  mujer: "Mujer",
  hombre: "Hombre",
  unisex: "Unisex",
};

export const COLLECTION_LABELS: Record<CollectionId, string> = {
  clasicos: "Clásicos 18k",
  compromiso: "Compromiso y matrimonio",
  regalo: "Regalo",
};

export const AVAILABILITY_LABELS: Record<Availability, string> = {
  disponible: "Disponible",
  "por-encargo": "Por encargo",
  consultar: "Consultar",
};

export const products: Product[] = [
  {
    slug: "anillo-solitario-clasico-18k",
    name: "Anillo solitario clásico 18k",
    type: "anillos",
    occasion: ["compromiso", "diario"],
    gender: "mujer",
    collection: "compromiso",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Indica tu talla al escribirnos",
    shortDescription:
      "Anillo en oro 18 quilates de líneas limpias, ideal para compromiso o para elevar tu look diario. Peso y talla a confirmar según disponibilidad.",
    gradient: "from-amber-200 via-yellow-500 to-amber-700",
  },
  {
    slug: "anillo-alianza-lisa-18k",
    name: "Anillo alianza lisa 18k",
    type: "anillos",
    occasion: ["compromiso", "diario"],
    gender: "unisex",
    collection: "compromiso",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Indica tu talla al escribirnos",
    shortDescription:
      "Alianza lisa en oro 18k, atemporal y cómoda para el día a día o para sellar un sí. Acabado pulido, peso a consultar.",
    gradient: "from-yellow-100 via-amber-400 to-yellow-800",
  },
  {
    slug: "anillo-sello-hombre-18k",
    name: "Anillo sello hombre 18k",
    type: "anillos",
    occasion: ["diario", "regalo"],
    gender: "hombre",
    collection: "clasicos",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Indica tu talla al escribirnos",
    shortDescription:
      "Anillo sello en oro 18 quilates con presencia sobria. Pieza fuerte para uso diario o como regalo significativo.",
    gradient: "from-stone-300 via-amber-600 to-stone-800",
  },
  {
    slug: "cadena-eslabon-clasico-18k",
    name: "Cadena eslabón clásico 18k",
    type: "cadenas",
    occasion: ["diario", "regalo"],
    gender: "unisex",
    collection: "clasicos",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Largo a confirmar al escribirnos",
    shortDescription:
      "Cadena de eslabones en oro 18k, versátil para diario o para acompañar un dije. Largo y peso se confirman por WhatsApp.",
    gradient: "from-amber-100 via-yellow-500 to-amber-900",
  },
  {
    slug: "gargantilla-fina-18k",
    name: "Gargantilla fina 18k",
    type: "cadenas",
    occasion: ["diario", "fiesta", "regalo"],
    gender: "mujer",
    collection: "clasicos",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Largo a confirmar al escribirnos",
    shortDescription:
      "Gargantilla fina en oro 18 quilates: brillo discreto que luce sola o con dije. Ideal para diario y ocasiones especiales.",
    gradient: "from-yellow-50 via-amber-300 to-yellow-700",
  },
  {
    slug: "aretes-argolla-mediana-18k",
    name: "Aretes argolla mediana 18k",
    type: "aretes",
    occasion: ["diario", "fiesta"],
    gender: "mujer",
    collection: "clasicos",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Tamaño medio — confirma detalle al escribirnos",
    shortDescription:
      "Argollas medianas en oro 18k con brillo limpio. Un básico que no pasa de moda, listo para elevar cualquier look.",
    gradient: "from-amber-200 via-yellow-400 to-amber-800",
  },
  {
    slug: "aretes-topos-clasicos-18k",
    name: "Aretes topos clásicos 18k",
    type: "aretes",
    occasion: ["diario", "regalo"],
    gender: "mujer",
    collection: "clasicos",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Diseño compacto",
    shortDescription:
      "Topos clásicos en oro 18 quilates: cómodos, ligeros y perfectos para el uso diario o un primer regalo en oro.",
    gradient: "from-yellow-100 via-amber-500 to-yellow-900",
  },
  {
    slug: "pulsera-eslabones-18k",
    name: "Pulsera de eslabones 18k",
    type: "pulseras",
    occasion: ["diario", "regalo", "fiesta"],
    gender: "mujer",
    collection: "clasicos",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Medida de muñeca a confirmar",
    shortDescription:
      "Pulsera de eslabones en oro 18k con caída elegante. Combina con reloj o sola; peso y medida se confirman al cotizar.",
    gradient: "from-amber-300 via-yellow-500 to-stone-700",
  },
  {
    slug: "dije-corazon-18k",
    name: "Dije corazón 18k",
    type: "dijes",
    occasion: ["regalo", "diario"],
    gender: "mujer",
    collection: "regalo",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Tamaño compacto — combina con cadena",
    shortDescription:
      "Dije corazón en oro 18 quilates, ideal para regalo o para llevar cerca. Combínalo con tu cadena favorita en 18k.",
    gradient: "from-rose-200 via-amber-400 to-yellow-700",
  },
  {
    slug: "set-cadena-dije-18k",
    name: "Set cadena + dije 18k",
    type: "sets",
    occasion: ["regalo", "fiesta"],
    gender: "mujer",
    collection: "regalo",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Largo de cadena a confirmar",
    shortDescription:
      "Set en oro 18k: cadena y dije pensados para regalar sin complicaciones. Confirmamos disponibilidad y peso por WhatsApp.",
    gradient: "from-yellow-200 via-amber-500 to-amber-900",
  },
  {
    slug: "anillo-diseno-entorchado-18k",
    name: "Anillo diseño entorchado 18k",
    type: "anillos",
    occasion: ["diario", "fiesta", "regalo"],
    gender: "mujer",
    collection: "clasicos",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Indica tu talla al escribirnos",
    shortDescription:
      "Anillo con diseño entorchado en oro 18k: detalle que se nota de cerca. Ideal para diario con un toque especial.",
    gradient: "from-amber-100 via-yellow-600 to-stone-800",
  },
  {
    slug: "cadena-hombre-gruesa-18k",
    name: "Cadena hombre gruesa 18k",
    type: "cadenas",
    occasion: ["diario", "regalo"],
    gender: "hombre",
    collection: "clasicos",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Largo y grosor a confirmar",
    shortDescription:
      "Cadena de mayor presencia en oro 18 quilates para hombre. Peso y largo se cotizan según disponibilidad del momento.",
    gradient: "from-stone-400 via-amber-600 to-yellow-900",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.slug !== product.slug && (p.type === product.type || p.collection === product.collection))
    .slice(0, limit);
}

export const collections = [
  {
    id: "clasicos" as CollectionId,
    name: "Clásicos 18k",
    description: "Piezas atemporales para el día a día: cadenas, aretes, anillos y más en oro 18 quilates.",
    href: "/colecciones#clasicos",
  },
  {
    id: "compromiso" as CollectionId,
    name: "Compromiso y matrimonio",
    description: "Anillos pensados para el sí: solitarios, alianzas y piezas con presencia.",
    href: "/colecciones#compromiso",
  },
  {
    id: "regalo" as CollectionId,
    name: "Regalo",
    description: "Opciones listas para sorprender: dijes, sets y piezas con mensaje claro.",
    href: "/colecciones#regalo",
  },
];

export const catalogCategories = [
  {
    slug: "anillos",
    name: "Anillos",
    description: "Compromiso, matrimonio y uso diario",
    href: "/catalogo?tipo=anillos",
  },
  {
    slug: "cadenas",
    name: "Cadenas y gargantillas",
    description: "Eslabones y diseños clásicos",
    href: "/catalogo?tipo=cadenas",
  },
  {
    slug: "aretes",
    name: "Aretes",
    description: "Desde lo discreto hasta lo llamativo",
    href: "/catalogo?tipo=aretes",
  },
  {
    slug: "pulseras",
    name: "Pulseras",
    description: "Eslabones y piezas para muñeca",
    href: "/catalogo?tipo=pulseras",
  },
  {
    slug: "novedades",
    name: "Novedades",
    description: "Lo último que subimos al catálogo",
    href: "/catalogo",
  },
];
