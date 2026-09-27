import type { Metadata } from "next";
import Link from "next/link";
import GoldPlaceholder from "@/components/GoldPlaceholder";
import ProductCard from "@/components/ProductCard";
import { COLLECTION_LABELS, collections, products, type CollectionId } from "@/data/products";

export const metadata: Metadata = {
  title: "Colecciones Tree Gold",
  description:
    "Colecciones de joyería en oro 18k: clásicos, compromiso y regalo. Mira fotos y pregunta por WhatsApp.",
  openGraph: {
    title: "Colecciones Tree Gold | Oro 18k Medellín",
    description: "Clásicos, compromiso y regalo en oro 18 quilates.",
  },
};

const gradients: Record<CollectionId, string> = {
  clasicos: "from-amber-200 via-yellow-500 to-amber-800",
  compromiso: "from-rose-200 via-amber-400 to-yellow-800",
  regalo: "from-yellow-100 via-amber-500 to-stone-800",
};

export default function ColeccionesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-4xl text-cream sm:text-5xl">Colecciones Tree Gold</h1>
      <p className="mt-4 max-w-2xl text-cream/65">
        Cada colección agrupa piezas con un mismo espíritu: lo clásico, el compromiso, el regalo.
        Entra, mira fotos y pregunta por WhatsApp lo que necesites.
      </p>

      <div className="mt-12 space-y-20">
        {collections.map((c) => {
          const items = products.filter((p) => p.collection === c.id);
          return (
            <section key={c.id} id={c.id} className="scroll-mt-24">
              <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                <GoldPlaceholder
                  label={c.name}
                  gradient={gradients[c.id]}
                  aspect="aspect-[16/10]"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold-soft">Colección</p>
                  <h2 className="mt-2 font-serif text-3xl text-cream">{COLLECTION_LABELS[c.id]}</h2>
                  <p className="mt-3 text-cream/65">{c.description}</p>
                  <Link
                    href="/catalogo"
                    className="mt-5 inline-block text-sm text-gold hover:text-gold-soft"
                  >
                    Ver en catálogo →
                  </Link>
                </div>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
