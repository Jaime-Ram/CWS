import Image from "next/image";

/** Echte afmetingen van de bestanden, zodat de verhouding ook vóór het laden klopt. */
const marks = [
  { src: "keurmerk-kiwa", alt: "Kiwa gecertificeerd, BRL-K14010 deel 1", w: 228, h: 408, size: 42 },
  { src: "keurmerk-ce", alt: "CE-markering", w: 314, h: 238, size: 25 },
  { src: "keurmerk-nen-en-1112", alt: "NEN-EN 1112, CE Medical klasse 2A", w: 388, h: 268, size: 29 },
];

/**
 * De keurmerken van de bestaande site, in twee tinten.
 *
 * Het Kiwa-merk is een grijs vlak met een uitgespaarde figuur. Simpelweg wit
 * maken laat die figuur wegvallen, dus de lichte versie is een echte omkering:
 * de dekking volgt de donkerte van het origineel. Tekst wordt daarmee wit, het
 * vlak lichtgrijs en de figuur transparant, dus donker tegen dat lichte vlak.
 * De dekking is uitgerekt omdat de bronafbeelding weinig contrast had.
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
  const tint = variant === "dark" ? "licht" : "donker";
  return (
    <div className={`flex items-center gap-8 max-sm:gap-6 ${className}`}>
      {marks.map((m) => (
        <Image
          key={m.src}
          src={`/images/fotos/${m.src}-${tint}.png`}
          alt={m.alt}
          width={m.w}
          height={m.h}
          sizes="120px"
          className="w-auto"
          style={{ height: m.size * scale }}
        />
      ))}
    </div>
  );
}
