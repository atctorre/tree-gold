import type { Metadata } from "next";
import CatalogFilters from "@/components/CatalogFilters";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Catálogo de oro 18k Medellín",
  description:
    "Explora nuestro catálogo de joyería en oro 18 quilates. Filtra por tipo de pieza y colección. Precio por WhatsApp.",
  openGraph: {
    title: "Catálogo de oro 18k Medellín | Tree Gold",
    description:
      "Filtra por tipo de pieza y ocasión. Precio y disponibilidad por WhatsApp.",
  },
};

type Props = {
  searchParams: Promise<{ tipo?: string; ocasion?: string }>;
};

export default async function CatalogoPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-gold-soft">Oro 18 quilates</p>
      <h1 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">
        Catálogo de joyería en oro 18k
      </h1>
      <p className="mt-4 max-w-2xl text-cream/65">
        Filtra por tipo de pieza, colección o ocasión. Cada ficha te lleva a consultar precio y
        stock por WhatsApp — sin vueltas.
      </p>
      <div className="mt-10">
        <CatalogFilters
          products={products}
          initialType={params.tipo}
          initialOccasion={params.ocasion}
        />
      </div>
    </div>
  );
}
