import { waLink } from "@/lib/whatsapp";

type Props = {
  message: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
};

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-gold text-charcoal hover:bg-gold-soft shadow-lg shadow-gold/20",
  secondary:
    "bg-cream text-charcoal border border-gold/40 hover:border-gold hover:bg-white",
  ghost:
    "bg-transparent text-cream border border-cream/30 hover:border-gold hover:text-gold",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-lg shadow-black/20",
};

export default function WhatsAppButton({
  message,
  children,
  className = "",
  variant = "whatsapp",
}: Props) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
