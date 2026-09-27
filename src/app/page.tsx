import Link from "next/link";
import GoldPlaceholder from "@/components/GoldPlaceholder";
import WhatsAppButton from "@/components/WhatsAppButton";
import { catalogCategories, collections, products } from "@/data/products";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WA_MESSAGES,
} from "@/lib/whatsapp";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 70% -10%, rgba(201,162,39,0.35), transparent), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(201,162,39,0.12), transparent)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">Medellín · Colombia</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              Joyería en oro 18k en Medellín
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              Piezas de oro 18 quilates con el brillo y la confianza que buscas. Catálogo claro,
              atención cercana y pedido directo por WhatsApp.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-cream/70">
              <li className="flex gap-2">
                <span className="text-gold">✦</span> Oro 18 quilates — calidad de joyería fina
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✦</span> Catálogo organizado por tipo de pieza y colección
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✦</span> Pedidos y asesoría al {PHONE_DISPLAY}
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✦</span> Medellín y envíos en Colombia (cobertura a confirmar)
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-charcoal shadow-lg shadow-gold/20 transition hover:bg-gold-soft"
              >
                Ver catálogo
              </Link>
              <WhatsAppButton message={WA_MESSAGES.home} variant="whatsapp">
                Escribir por WhatsApp
              </WhatsAppButton>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-full border border-cream/30 px-6 py-3 text-sm text-cream transition hover:border-gold hover:text-gold"
              >
                Llamar {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="relative">
            <GoldPlaceholder
              label="Joyería oro 18k Tree Gold"
              gradient="from-amber-100 via-yellow-500 to-amber-900"
              aspect="aspect-[4/5] sm:aspect-square"
              className="shadow-2xl shadow-black/40"
            />
            <div className="absolute -bottom-4 -left-2 rounded-2xl border border-gold/30 bg-charcoal/95 px-4 py-3 shadow-xl sm:left-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold-soft">Instagram</p>
              <p className="font-serif text-lg text-cream">+17.000 seguidores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-gold/15 bg-charcoal-soft">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            "+17.000 personas nos siguen en Instagram",
            "Especialistas en oro 18k",
            "Atención personalizada por WhatsApp y teléfono",
            "Asesoría clara antes de comprar",
          ].map((t) => (
            <p key={t} className="text-center text-sm text-cream/80 lg:text-left">
              <span className="mr-2 text-gold">◆</span>
              {t}
            </p>
          ))}
        </div>
      </section>

      {/* Por qué Tree Gold */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold-soft">Por qué Tree Gold</p>
            <h2 className="mt-3 font-serif text-3xl text-cream sm:text-4xl">Oro 18k con sello Medellín</h2>
            <p className="mt-5 leading-relaxed text-cream/70">
              En Tree Gold trabajamos joyería en oro de 18 quilates: anillos, cadenas, aretes,
              pulseras y piezas para regalo o para ti. Queremos que encuentres lo que buscas sin
              perderte en un feed infinito: aquí está el catálogo, las fotos y un canal directo para
              preguntar talla, peso y disponibilidad.
            </p>
            <div className="mt-7">
              <WhatsAppButton message={WA_MESSAGES.advisor} variant="primary">
                Hablar con un asesor
              </WhatsAppButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {featured.map((p) => (
              <Link key={p.slug} href={`/catalogo/${p.slug}`} className="block">
                <GoldPlaceholder label={p.name} gradient={p.gradient} className="h-full" />
              </Link>
            ))}
            <Link
              href="/catalogo"
              className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-gold/40 bg-charcoal-soft text-center text-sm text-gold transition hover:bg-gold/10"
            >
              Ver todo el catálogo →
            </Link>
          </div>
        </div>
      </section>

      {/* Catalog intro */}
      <section className="bg-charcoal-soft/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl text-cream sm:text-4xl">
                Explora nuestro catálogo de oro 18k
              </h2>
              <p className="mt-2 text-sm text-cream/60">
                Precio y disponibilidad: consultar por WhatsApp
              </p>
            </div>
            <Link href="/catalogo" className="text-sm text-gold hover:text-gold-soft">
              Ver todo el catálogo →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {catalogCategories.map((c) => (
              <Link
                key={c.slug}
                href={c.href}
                className="group rounded-2xl border border-gold/15 bg-charcoal p-5 transition hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5"
              >
                <p className="font-serif text-xl text-cream group-hover:text-gold">{c.name}</p>
                <p className="mt-2 text-sm text-cream/55">{c.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl text-cream sm:text-4xl">Colecciones Tree Gold</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {collections.map((c, i) => (
            <Link
              key={c.id}
              href={c.href}
              className="group overflow-hidden rounded-2xl border border-gold/15 bg-charcoal-soft transition hover:border-gold/40"
            >
              <GoldPlaceholder
                label={c.name}
                gradient={
                  i === 0
                    ? "from-amber-200 via-yellow-500 to-amber-800"
                    : i === 1
                      ? "from-rose-200 via-amber-400 to-yellow-800"
                      : "from-yellow-100 via-amber-500 to-stone-800"
                }
                aspect="aspect-[16/10]"
              />
              <div className="p-5">
                <h3 className="font-serif text-2xl text-cream group-hover:text-gold">{c.name}</h3>
                <p className="mt-2 text-sm text-cream/60">{c.description}</p>
                <span className="mt-4 inline-block text-sm text-gold">Ver colección →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y border-gold/15 bg-charcoal-deep py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl text-cream sm:text-4xl">Nos ven, nos escriben, nos eligen</h2>
          <p className="mt-4 text-cream/65">
            Síguenos en Instagram y mira el catálogo visual que actualizamos desde Medellín.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-charcoal px-6 py-3 text-sm text-cream transition hover:border-gold hover:text-gold"
          >
            <span className="text-gold">◎</span>
            Seguir en Instagram @{INSTAGRAM_HANDLE}
          </a>
          <p className="mt-6 text-xs text-cream/40">
            Testimonios de clientes: los publicaremos cuando el cliente autorice UGC o reseñas.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="rounded-3xl border border-gold/25 bg-gradient-to-br from-charcoal-soft to-charcoal-deep px-6 py-12 text-center sm:px-12">
          <h2 className="font-serif text-3xl text-cream sm:text-4xl">¿Viste una pieza que te gustó?</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Escríbenos al WhatsApp o llámanos. Te confirmamos disponibilidad, peso aproximado y precio.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton message={WA_MESSAGES.home} variant="whatsapp">
              WhatsApp {PHONE_DISPLAY}
            </WhatsAppButton>
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center rounded-full border border-gold/40 px-6 py-3 text-sm text-gold transition hover:bg-gold/10"
            >
              Ver catálogo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
