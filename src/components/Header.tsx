"use client";

import Link from "next/link";
import { useState } from "react";
import { INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, WA_MESSAGES, waLink } from "@/lib/whatsapp";

const nav = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/colecciones", label: "Colecciones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/envios", label: "Envíos" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-charcoal/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group shrink-0" onClick={() => setOpen(false)}>
          <span className="block font-serif text-lg tracking-wide text-cream sm:text-xl">
            Tree <span className="text-gold">Gold</span>
          </span>
          <span className="block text-[10px] uppercase tracking-[0.25em] text-gold-soft/80">
            Oro 18k · Medellín
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-cream/80 transition hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden rounded-full border border-gold/30 px-3 py-1.5 text-xs text-cream transition hover:border-gold hover:text-gold sm:inline-flex lg:text-sm"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex rounded-full border border-gold/30 px-3 py-1.5 text-xs text-cream sm:hidden"
            aria-label={`Llamar ${PHONE_DISPLAY}`}
          >
            Llamar
          </a>
          <a
            href={waLink(WA_MESSAGES.home)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[#1ebe57] sm:px-4 sm:text-sm"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menú</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-gold/10 bg-charcoal px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-cream/90 hover:bg-white/5 hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-2 py-2 text-gold-soft"
              onClick={() => setOpen(false)}
            >
              Instagram @joyeria.treegold18k
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
