import Image from "next/image";

/**
 * Beeldslot. Zolang er geen fotografie is aangeleverd, rendert dit een neutraal
 * vlak met de omschrijving van het benodigde beeld. Zodra `src` gevuld is,
 * verschijnt de foto op dezelfde plek en in dezelfde verhouding.
 *
 * Zie README voor de lijst met benodigde beelden en hun verhoudingen.
 */
export default function Media({
  src,
  alt,
  ratio = "4/3",
  tone = "light",
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  ratio?: string;
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
}) {
  const dark = tone === "dark";

  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
        <Image src={src} alt={alt} fill sizes="(max-width: 991px) 100vw, 50vw" priority={priority} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center p-6 ${
        dark ? "bg-white/[0.06]" : "bg-neutral-200"
      } ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span
        className={`max-w-[280px] text-center text-[13px] leading-[1.5em] ${
          dark ? "text-white/45" : "text-neutral-500"
        }`}
      >
        {alt}
      </span>
    </div>
  );
}
