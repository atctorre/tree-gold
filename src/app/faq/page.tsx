import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PHONE_DISPLAY, WA_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Preguntas frecuentes | Tree Gold Joyería 18k",
  description:
    "Resolvemos dudas sobre quilates, autenticidad, cuidados, envíos a Antioquia y cómo pedir por WhatsApp.",
  openGraph: {
    title: "FAQ | Tree Gold Joyería 18k",
    description: "Quilates, envíos, tallas y pedidos por WhatsApp.",
  },
};

const faqs = [
  {
    q: "¿Todas las piezas son en oro 18k?",
    a: "Sí, nuestro enfoque es la joyería en oro 18 quilates. En cada ficha lo indicamos; si una pieza tiene detalle distinto, te lo aclaramos antes de cerrar la compra.",
  },
  {
    q: "¿Los precios están en la página?",
    a: "El precio lo confirmamos por WhatsApp o teléfono según peso, talla y disponibilidad del momento. Así te damos una cotización exacta, sin sorpresas.",
  },
  {
    q: "¿Hacen envíos fuera de Medellín?",
    a: "Enviamos dentro de Colombia según cobertura disponible. El costo y el tiempo se confirman al cotizar. También puedes preguntar por recogida en Medellín; modalidad y punto exacto te los confirmamos al escribirnos.",
  },
  {
    q: "¿Cómo sé que es oro auténtico?",
    a: `Trabajamos oro 18k. Sobre factura, certificado o marcaje en la pieza, te explicamos el detalle de cada pedido al escribirnos al ${PHONE_DISPLAY}.`,
  },
  {
    q: "¿Puedo cambiar la talla de un anillo?",
    a: "La política de cambio de talla depende del modelo. Escríbenos con la ficha de la pieza y te orientamos con honestidad antes de cerrar.",
  },
  {
    q: "¿Cuánto se demora un pedido por encargo?",
    a: "Depende de la pieza y del stock. Al escribirnos te damos un tiempo estimado honesto antes de que pagues.",
  },
  {
    q: "¿Atención solo por Instagram?",
    a: `No. Además de @joyeria.treegold18k, puedes escribir o llamar al ${PHONE_DISPLAY} y usar este sitio para ver el catálogo completo sin depender del algoritmo.`,
  },
  {
    q: "¿Qué pasa si la página o una pieza ya no está disponible?",
    a: "El stock se mueve. Si una ficha quedó desactualizada, te lo decimos de una y te mostramos alternativas similares en oro 18k.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-4xl text-cream sm:text-5xl">Preguntas frecuentes</h1>
      <p className="mt-4 text-cream/65">
        Dudas sobre quilates, autenticidad, cuidados, envíos y cómo pedir por WhatsApp.
      </p>

      <div className="mt-10 space-y-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-gold/15 bg-charcoal-soft open:border-gold/35"
          >
            <summary className="cursor-pointer list-none px-5 py-4 font-medium text-cream marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                <span>{item.q}</span>
                <span className="text-gold transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="border-t border-gold/10 px-5 py-4 text-sm leading-relaxed text-cream/70">
              {item.a}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-gold/25 bg-charcoal-deep px-6 py-8 text-center">
        <p className="font-serif text-2xl text-cream">¿No encontraste tu respuesta?</p>
        <p className="mt-2 text-sm text-cream/60">Escríbenos y te orientamos de una.</p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton message={WA_MESSAGES.advisor} variant="whatsapp">
            Hablar con un asesor
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
