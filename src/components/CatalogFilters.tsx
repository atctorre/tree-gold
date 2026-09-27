"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import {
  OCCASION_LABELS,
  TYPE_LABELS,
  type Occasion,
  type Product,
  type ProductType,
} from "@/data/products";
import { WA_MESSAGES, waLink } from "@/lib/whatsapp";

type Props = {
  products: Product[];
  initialType?: string;
  initialOccasion?: string;
};

const types = Object.keys(TYPE_LABELS) as ProductType[];
const occasions = Object.keys(OCCASION_LABELS) as Occasion[];

export default function CatalogFilters({ products, initialType, initialOccasion }: Props) {
  const [tipo, setTipo] = useState<string>(initialType && initialType in TYPE_LABELS ? initialType : "todos");
  const [ocasion, setOcasion] = useState<string>(
    initialOccasion && initialOccasion in OCCASION_LABELS ? initialOccasion : "todas"
  );

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const typeOk = tipo === "todos" || p.type === tipo;
      const occOk = ocasion === "todas" || p.occasion.includes(ocasion as Occasion);
      return typeOk && occOk;
    });
  }, [products, tipo, ocasion]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-gold/15 bg-charcoal-soft p-4 sm:flex-row sm:items-end sm:justify-between sm:p-5">
        <div className="grid flex-1 gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-gold-soft">Tipo</span>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full rounded-xl border border-gold/20 bg-charcoal px-3 py-2.5 text-cream outline-none focus:border-gold"
            >
              <option value="todos">Todos</option>
              {types.map((t) => (
                <option key={t} value={t}>
                  {TYPE_LABELS[t]}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-gold-soft">Ocasión</span>
            <select
              value={ocasion}
              onChange={(e) => setOcasion(e.target.value)}
              className="w-full rounded-xl border border-gold/20 bg-charcoal px-3 py-2.5 text-cream outline-none focus:border-gold"
            >
              <option value="todas">Todas</option>
              {occasions.map((o) => (
                <option key={o} value={o}>
                  {OCCASION_LABELS[o]}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="text-xs text-cream/50 sm:text-right">
          Quilates: <span className="text-gold">18k</span> · {filtered.length} piezas
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-gold/25 bg-charcoal-soft/50 px-6 py-12 text-center">
          <p className="font-serif text-xl text-cream">No encontramos piezas con esos filtros.</p>
          <p className="mt-2 text-sm text-cream/60">
            Prueba otra combinación o escríbenos al WhatsApp y te ayudamos a buscar.
          </p>
          <a
            href={waLink(WA_MESSAGES.advisor)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1ebe57]"
          >
            Escribir por WhatsApp
          </a>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
