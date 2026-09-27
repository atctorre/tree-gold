import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, WA_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Quiénes somos | Joyería Tree Gold Medellín",
  description:
    "Tree Gold: joyería de oro 18k en Medellín. Conoce nuestra historia y cómo cuidamos cada pieza.",
  openGraph: {
    title: "Quiénes somos | Joyería Tree Gold Medellín",
    description: "Joyería de oro 18k en Medellín con trato cercano.",
  },
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-gold-soft">Sobre nosotros</p>
      <h1 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">
        Tree Gold: joyería 18k desde Medellín
      </h1>
      <div className="mt-8 space-y-5 text-cream/75 leading-relaxed">
        <p>
          Somos Joyería Tree Gold. Trabajamos piezas en oro 18 quilates para quienes buscan calidad
          y un trato cercano. Nos encuentras en Instagram como{" "}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
            @{INSTAGRAM_HANDLE}
          </a>{" "}
          y nos escribes o llamas al {PHONE_DISPLAY}.
        </p>
        <p className="rounded-2xl border border-gold/15 bg-charcoal-soft px-5 py-4 text-sm text-cream/60">
          Historia de la marca, años en el mercado y si hay local físico: datos por confirmar con el
          cliente. Mientras tanto, nuestra promesa es clara: oro 18k, catálogo ordenado y atención
          humana.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl text-cream">Qué nos importa</h2>
      <ul className="mt-5 space-y-4">
        {[
          "Claridad en material y quilates (oro 18k)",
          "Asesoría antes de comprar",
          "Cuidado de la pieza después de la entrega (política de garantía por confirmar)",
        ].map((item) => (
          <li key={item} className="flex gap-3 rounded-xl border border-gold/10 bg-charcoal-soft/50 px-4 py-3 text-sm text-cream/80">
            <span className="text-gold">✦</span>
            {item}
          </li>
        ))}
      </ul>

      <section className="mt-14 rounded-2xl border border-gold/20 bg-charcoal-soft p-6 sm:p-8">
        <h2 className="font-serif text-2xl text-cream">Confianza en cada pieza</h2>
        <ul className="mt-5 space-y-3 text-sm text-cream/70">
          <li>
            <strong className="text-gold-soft">Oro 18 quilates:</strong> trabajamos con material de
            18k. Detalle de factura o certificado: se confirma al cotizar.
          </li>
          <li>
            <strong className="text-gold-soft">Fotos de referencia:</strong> lo que ves en el catálogo
            es referencia de la pieza; si hay variación de peso o stock, te lo decimos por WhatsApp
            antes de cerrar.
          </li>
          <li>
            <strong className="text-gold-soft">Atención humana:</strong> no eres un número en un
            carrito: hablas con nosotros al {PHONE_DISPLAY}.
          </li>
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/catalogo"
          className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-medium text-charcoal hover:bg-gold-soft"
        >
          Conocer el catálogo
        </Link>
        <WhatsAppButton message={WA_MESSAGES.advisor} variant="whatsapp">
          Contactar
        </WhatsAppButton>
      </div>
    </div>
  );
}
