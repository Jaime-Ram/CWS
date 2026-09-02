import Image from "next/image";

const marks = [
  { src: "keurmerk-kiwa", alt: "Kiwa gecertificeerd, BRL-K14010 deel 1", h: 42 },
  { src: "keurmerk-ce", alt: "CE-markering", h: 25 },
  { src: "keurmerk-nen-en-1112", alt: "NEN-EN 1112, CE Medical klasse 2A", h: 29 },
];

/**
 * De keurmerken van de bestaande site. Het Kiwa-merk heeft een grijs vlak met
 * een uitgespaarde figuur, dus omkleuren naar wit maakt het onleesbaar. Op een
 * donkere ondergrond staan de merken daarom in een lichte chip, met het
 * originele artwork; op een lichte ondergrond staan ze los.
 */
export default function Certifications({
  variant = "dark",
  scale = 1,
  className = "",
}: {
  variant?: "light" | "dark";
  scale?: number;
  className?: string;
}) {
  const row = (
    <div className="flex items-center gap-7 max-sm:gap-5">
      {marks.map((m) => (
        <Image
          key={m.src}
          src={`/images/fotos/${m.src}-donker.png`}
          alt={m.alt}
          width={400}
          height={400}
          className="w-auto"
          style={{ height: m.h * scale }}
        />
      ))}
    </div>
  );

  if (variant === "light") {
    return <div className={className}>{row}</div>;
  }

  return (
    <div
      className={`inline-flex items-center rounded-[18px] border border-white/20 bg-white/90 px-6 py-3.5 backdrop-blur-sm max-sm:px-4 max-sm:py-3 ${className}`}
    >
      {row}
    </div>
  );
}
