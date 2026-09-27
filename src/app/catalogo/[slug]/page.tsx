import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GoldPlaceholder from "@/components/GoldPlaceholder";
import ProductCard from "@/components/ProductCard";
import StickyProductCTA from "@/components/StickyProductCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  AVAILABILITY_LABELS,
  COLLECTION_LABELS,
  GENDER_LABELS,
  OCCASION_LABELS,
  TYPE_LABELS,
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { PHONE_DISPLAY, PHONE_TEL, WA_MESSAGES } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Pieza no encontrada" };
  return {
    title: `${product.name} — oro 18k Medellín`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Tree Gold`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="text-xs text-cream/50" aria-label="Migas">
          <Link href="/catalogo" className="hover:text-gold">
            Catálogo
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/catalogo?tipo=${product.type}`} className="hover:text-gold">
            {TYPE_LABELS[product.type]}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-cream/80">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <GoldPlaceholder
              label={product.name}
              gradient={product.gradient}
              aspect="aspect-square"
              className="shadow-xl shadow-black/30"
            />
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <GoldPlaceholder
                  key={i}
                  label={`${product.name} detalle ${i + 1}`}
                  gradient={product.gradient}
                  aspect="aspect-square"
                  className="opacity-90"
                />
              ))}
            </div>
            <p className="text-center text-[10px] uppercase tracking-[0.2em] text-cream/35">
              Placeholders de catálogo — fotos reales pendientes del cliente
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] uppercase tracking-wider text-gold">
                Oro 18k
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-cream/70">
                {AVAILABILITY_LABELS[product.availability]}
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-cream/70">
                {COLLECTION_LABELS[product.collection]}
              </span>
            </div>

            <h1 className="mt-4 font-serif text-3xl text-cream sm:text-4xl">
              {product.name} — oro 18k
            </h1>
            <p className="mt-4 leading-relaxed text-cream/70">{product.shortDescription}</p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-gold/15">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-gold/10">
                  {[
                    ["Material", "Oro 18 quilates (18k)"],
                    ["Tipo de pieza", TYPE_LABELS[product.type]],
                    ["Peso aproximado", product.weightNote],
                    ["Medidas / talla", product.sizeNote],
                    ["Género", GENDER_LABELS[product.gender]],
                    ["Ocasión", product.occasion.map((o) => OCCASION_LABELS[o]).join(", ")],
                    ["Disponibilidad", AVAILABILITY_LABELS[product.availability]],
                    ["Precio", "Consultar por WhatsApp"],
                  ].map(([label, value]) => (
                    <tr key={label} className="bg-charcoal-soft/40">
                      <th className="w-40 px-4 py-3 font-medium text-gold-soft">{label}</th>
                      <td className="px-4 py-3 text-cream/80">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 hidden flex-wrap gap-3 md:flex">
              <WhatsAppButton message={WA_MESSAGES.product(product.name)} variant="whatsapp">
                Consultar precio por WhatsApp
              </WhatsAppButton>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-full border border-cream/30 px-6 py-3 text-sm text-cream transition hover:border-gold hover:text-gold"
              >
                Llamar {PHONE_DISPLAY}
              </a>
              <Link
                href={`/catalogo?tipo=${product.type}`}
                className="inline-flex items-center justify-center rounded-full border border-gold/30 px-6 py-3 text-sm text-gold-soft transition hover:border-gold hover:text-gold"
              >
                Ver más {TYPE_LABELS[product.type].toLowerCase()}
              </Link>
            </div>
            <p className="mt-4 hidden text-xs text-cream/45 md:block">
              Pedidos por WhatsApp o teléfono. Horarios de atención: se confirman al escribirnos.
            </p>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16 pb-20 md:pb-0">
            <h2 className="font-serif text-2xl text-cream sm:text-3xl">También te puede gustar</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
      <StickyProductCTA productName={product.name} />
    </>
  );
}
