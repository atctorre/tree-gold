import Link from "next/link";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WA_MESSAGES,
  waLink,
} from "@/lib/whatsapp";

const links = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/colecciones", label: "Colecciones" },
  { href: "/nosotros", label: "Sobre nosotros" },
  { href: "/envios", label: "Envíos" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gold/15 bg-charcoal-deep text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-cream">
            Tree <span className="text-gold">Gold</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            Joyería Tree Gold — Oro 18k en Medellín. Catálogo claro y pedido directo por WhatsApp.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">Explorar</p>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">Contacto</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={waLink(WA_MESSAGES.home)} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                WhatsApp / Tel: {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className="hover:text-gold">
                Llamar {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Instagram: @{INSTAGRAM_HANDLE}
              </a>
            </li>
            <li className="text-cream/50">
              Dirección y horarios: se confirman al escribirnos.
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} Joyería Tree Gold · Medellín, Colombia
      </div>
    </footer>
  );
}
