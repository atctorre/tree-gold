import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Header from "@/components/Header";
import "./globals.css";

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joyeriatreegold.com"),
  title: {
    default: "Joyería 18k en Medellín | Tree Gold — Oro 18 quilates",
    template: "%s | Tree Gold",
  },
  description:
    "Joyería Tree Gold en Medellín: piezas en oro 18k. Anillos, cadenas, aretes y más. Consulta y pide por WhatsApp al 301-600-4940.",
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Joyería Tree Gold",
    title: "Joyería 18k en Medellín | Tree Gold",
    description:
      "Piezas en oro 18 quilates. Catálogo claro y pedido por WhatsApp al 301-600-4940.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joyería Tree Gold — Oro 18k Medellín",
    description: "Catálogo de joyería en oro 18k. Consulta por WhatsApp.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-charcoal font-sans text-cream">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
