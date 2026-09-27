type Props = {
  label: string;
  gradient?: string;
  className?: string;
  aspect?: string;
};

export default function GoldPlaceholder({
  label,
  gradient = "from-amber-200 via-yellow-500 to-amber-800",
  className = "",
  aspect = "aspect-square",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-charcoal ${aspect} ${className}`}
      role="img"
      aria-label={`Placeholder de catálogo: ${label}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`} />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.45), transparent 45%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.35), transparent 50%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <ellipse cx="100" cy="110" rx="48" ry="18" stroke="white" strokeWidth="1.5" />
        <path
          d="M70 95 C70 70, 130 70, 130 95"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="100" cy="78" r="10" stroke="white" strokeWidth="1.5" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gold-soft/90">
          Placeholder catálogo
        </p>
        <p className="mt-1 font-serif text-sm text-cream line-clamp-2">{label}</p>
      </div>
    </div>
  );
}
