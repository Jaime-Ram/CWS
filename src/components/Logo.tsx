import Link from "next/link";

/**
 * Beeldmerk: een monogram-C waarvan de staart uitvloeit, met een punt in de
 * opening. Geometrie: middelpunt (50,50), straal 30, lijndikte 15, opening
 * symmetrisch op ±35 graden. De punt ligt op de middellijn van de boog, op
 * (80,50), zodat hij precies in het verlengde van de lijn valt.
 */
export function LogoMark({
  className = "",
  id = "cws",
  size,
}: {
  className?: string;
  id?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id={`${id}-grad`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#102e97" />
          <stop offset="40%" stopColor="#2365ff" />
          <stop offset="78%" stopColor="#6ccfff" />
          <stop offset="100%" stopColor="#6ccfff" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id={`${id}-dot`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7ad4ff" />
          <stop offset="100%" stopColor="#2365ff" />
        </linearGradient>
      </defs>
      <path
        d="M74.57 32.79a30 30 0 1 0 0 34.42"
        fill="none"
        stroke={`url(#${id}-grad)`}
        strokeWidth="15"
        strokeLinecap="round"
      />
      <circle cx="80" cy="50" r="7.5" fill={`url(#${id}-dot)`} />
    </svg>
  );
}

/**
 * Woordmerk: "Clean" groot met "watersystems" eronder.
 *
 * De uitlijning is niet met textLength geforceerd maar uitgemeten op de
 * gerenderde pixels: bij font-size 41 met letter-spacing -1.4 loopt de inkt van
 * "Clean" van x 1.43 tot 98.85. Met letter-spacing 1.5 en een x-offset van 1.36
 * valt "watersystems" op precies dezelfde randen. De viewBox is dat inktvlak,
 * zodat de afstand tot het beeldmerk optisch klopt.
 */
export function LogoWordmark({
  variant = "dark",
  height = 38,
  className = "",
}: {
  variant?: "light" | "dark";
  height?: number;
  className?: string;
}) {
  const onDark = variant === "dark";
  const font = "var(--font-inter-tight), sans-serif";
  return (
    <svg
      viewBox="1.43 9.75 97.42 48.82"
      style={{ height, width: (height * 97.42) / 48.82 }}
      className={className}
      role="img"
      aria-label="Clean Watersystems"
    >
      <text
        x="0"
        y="40"
        fontSize="41"
        fontWeight="600"
        letterSpacing="-1.4"
        fill={onDark ? "#ffffff" : "#001035"}
        style={{ fontFamily: font }}
      >
        Clean
      </text>
      <text
        x="1.36"
        y="56"
        fontSize="13"
        fontWeight="500"
        letterSpacing="1.5"
        fill={onDark ? "#6ccfff" : "#2365ff"}
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
  markSize = 38,
  wordHeight = 34,
  id = "cws",
}: {
  variant?: "light" | "dark";
  className?: string;
  markSize?: number;
  wordHeight?: number;
  id?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Clean Watersystems, naar de homepage"
      className={`flex items-center gap-2.5 ${className}`}
    >
      <LogoMark id={id} size={markSize} className="shrink-0" />
      <LogoWordmark variant={variant} height={wordHeight} className="shrink-0" />
    </Link>
  );
}
