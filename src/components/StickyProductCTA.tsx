"use client";

import { WA_MESSAGES, waLink, PHONE_DISPLAY, PHONE_TEL } from "@/lib/whatsapp";

export default function StickyProductCTA({ productName }: { productName: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-charcoal/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={waLink(WA_MESSAGES.product(productName))}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full bg-[#25D366] py-3 text-center text-sm font-medium text-white"
        >
          Consultar por WhatsApp
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="rounded-full border border-gold/40 px-4 py-3 text-sm text-gold"
          aria-label={`Llamar ${PHONE_DISPLAY}`}
        >
          Llamar
        </a>
      </div>
    </div>
  );
}
