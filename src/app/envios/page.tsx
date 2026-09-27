import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PHONE_DISPLAY, WA_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Envíos y garantías | Tree Gold Medellín",
  description:
    "Envíos en Colombia, recogida en Medellín y políticas de cambio y cuidado del oro 18k. Detalles se confirman por WhatsApp.",
  openGraph: {
    title: "Envíos y garantías | Tree Gold Medellín",
    description: "Cómo enviar o recoger tu pieza en oro 18k. Cotiza por WhatsApp.",
  },
};

export default function EnviosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-4xl text-cream sm:text-5xl">
        Envíos en Colombia y recogida en Medellín
      </h1>
      <p className="mt-4 text-cream/65">
        Coordinamos entrega o envío al cotizar tu pieza. Los detalles logísticos se confirman por
        WhatsApp según tu ciudad y el valor del pedido.
      </p>

      <div className="mt-10 space-y-6">
        <article className="rounded-2xl border border-gold/15 bg-charcoal-soft p-6">
          <h2 className="font-serif text-xl text-cream">Recogida en Medellín</h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Puedes preguntarnos por recogida en Medellín. El punto exacto, si hay local o si es con
            cita previa, te lo confirmamos al escribirnos — no publicamos dirección hasta validarla
            contigo.
          </p>
        </article>

        <article className="rounded-2xl border border-gold/15 bg-charcoal-soft p-6">
          <h2 className="font-serif text-xl text-cream">Envíos nacionales</h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Enviamos dentro de Colombia según cobertura disponible. Transportadora, tiempos
            estimados y si aplica solo Antioquia / Área Metropolitana o más ciudades: se confirman
            al cotizar.
          </p>
        </article>

        <article className="rounded-2xl border border-gold/15 bg-charcoal-soft p-6">
          <h2 className="font-serif text-xl text-cream">Costos de envío</h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Se confirman al cotizar por WhatsApp según ciudad y valor de la pieza.
          </p>
        </article>

        <article className="rounded-2xl border border-gold/15 bg-charcoal-soft p-6">
          <h2 className="font-serif text-xl text-cream">Empaque</h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Cuidamos el empaque de cada pedido. Si incluye estuche o bolsa de joyería, te lo
            confirmamos al cerrar la compra.
          </p>
        </article>
      </div>

      <section className="mt-14">
        <h2 className="font-serif text-2xl text-cream">Así de fácil pedir en Tree Gold</h2>
        <ol className="mt-6 space-y-4">
          {[
            "Explora el catálogo o una colección.",
            "Abre la ficha de la pieza que te gusta.",
            `Toca Consultar por WhatsApp (o llama al ${PHONE_DISPLAY}).`,
            "Te confirmamos disponibilidad, talla/peso y precio.",
            "Coordinamos pago y entrega o envío.",
          ].map((step, i) => (
            <li key={step} className="flex gap-4 text-sm text-cream/75">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/20 font-serif text-gold">
                {i + 1}
              </span>
              <span className="pt-1.5">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 rounded-2xl border border-gold/15 bg-charcoal-deep p-6">
        <h2 className="font-serif text-2xl text-cream">Cuida tu oro 18 quilates</h2>
        <ul className="mt-4 space-y-2 text-sm text-cream/70">
          <li>• Guarda las piezas en un lugar seco, separadas para evitar rayones.</li>
          <li>• Evita contacto prolongado con perfumes, cloro y productos de limpieza.</li>
          <li>• Límpialas con un paño suave; para limpieza profunda, pregunta por recomendación.</li>
          <li>• Quítate las joyas para nadar, deporte intenso o dormir si la pieza es delicada.</li>
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <WhatsAppButton message={WA_MESSAGES.shipping} variant="whatsapp">
          Preguntar por envío a mi ciudad
        </WhatsAppButton>
        <Link
          href="/faq"
          className="inline-flex items-center rounded-full border border-gold/30 px-6 py-3 text-sm text-gold-soft hover:border-gold hover:text-gold"
        >
          Ver FAQ
        </Link>
      </div>
    </div>
  );
}
