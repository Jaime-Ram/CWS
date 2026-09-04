import Link from "next/link";

/**
 * Merkkleuren. Op een donkere ondergrond wordt donkerblauw wit en schuift het
 * merkblauw op naar cyaan, omdat #2365ff tegen #001035 te weinig contrast geeft.
 */
const tint = (onDark: boolean) => ({
  navy: onDark ? "#ffffff" : "#001035",
  blue: onDark ? "#6ccfff" : "#2365ff",
});

/**
 * Beeldmerk: drie geneste bogen met de opening naar rechts, waardoor de vorm als
 * een C leest. De middelste boog staat in het merkblauw. De paden zijn 2,25
 * naar rechts geschoven zodat het inktvlak precies in het 100-vak centreert.
 */
export function LogoMark({
  className = "",
  size,
  variant = "dark",
}: {
  className?: string;
  size?: number;
  variant?: "light" | "dark";
}) {
  const c = tint(variant === "dark");
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-hidden="true"
      role="presentation"
    >
      <g fill="none" strokeWidth="9">
        <path d="M86.25 16H52.25A34 34 0 0 0 52.25 84H86.25" stroke={c.navy} />
        <path d="M86.25 29H52.25A21 21 0 0 0 52.25 71H86.25" stroke={c.blue} />
        <path d="M86.25 42H52.25A8 8 0 0 0 52.25 58H86.25" stroke={c.navy} />
      </g>
    </svg>
  );
}

/**
 * Woordmerk op een regel: "clean" in het merkblauw, "watersystems" in
 * donkerblauw. Breedtes zijn uitgemeten in Inter Tight op 34 punt met een
 * spatiering van -1.1: clean is 77,2 breed, watersystems 205,2.
 */
export function LogoWordmark({
  variant = "dark",
  height = 20,
  className = "",
}: {
  variant?: "light" | "dark";
  height?: number;
  className?: string;
}) {
  const c = tint(variant === "dark");
  const font = "var(--font-inter-tight), sans-serif";
  return (
    <svg
      viewBox="0 8 292 34"
      style={{ height, width: (height * 292) / 34 }}
      className={className}
      role="img"
      aria-label="clean watersystems"
    >
      <text
        x="0"
        y="34"
        fontSize="34"
        fontWeight="600"
        letterSpacing="-1.1"
        fill={c.blue}
        style={{ fontFamily: font }}
      >
        clean
      </text>
      <text
        x="85"
        y="34"
        fontSize="34"
        fontWeight="600"
        letterSpacing="-1.1"
        fill={c.navy}
        style={{ fontFamily: font }}
      >
        watersystems
      </text>
    </svg>
  );
}

export default function Logo({
  variant = "dark",
  className = "",
  markSize = 36,
  wordHeight = 19,
}: {
  variant?: "light" | "dark";
  className?: string;
  markSize?: number;
  wordHeight?: number;
}) {
  return (
    <Link
      href="/"
      aria-label="Clean Watersystems, naar de homepage"
      className={`flex items-center gap-3 ${className}`}
    >
      <LogoMark variant={variant} size={markSize} className="shrink-0" />
      <LogoWordmark variant={variant} height={wordHeight} className="shrink-0" />
    </Link>
  );
}
