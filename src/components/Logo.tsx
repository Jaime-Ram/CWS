import Link from "next/link";

/**
 * Beeldmerk: een abstracte stroombocht met een verloop van cyaan naar diepblauw.
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
        <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6ccfff" />
          <stop offset="45%" stopColor="#2365ff" />
          <stop offset="100%" stopColor="#102e97" />
        </linearGradient>
      </defs>
      <path
        d="M18 26 h30 a24 24 0 0 1 0 48 h-30"
        fill="none"
        stroke={`url(#${id}-grad)`}
        strokeWidth="17"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Woordmerk: "Clean" groot met "watersystems" eronder. Beide regels staan op een
 * vaste breedte via textLength, waardoor ze exact op elkaar uitlijnen, ongeacht
 * of het lettertype al geladen is.
 */
export function LogoWordmark({
  variant = "dark",
  height = 40,
  className = "",
}: {
  variant?: "light" | "dark";
  height?: number;
  className?: string;
}) {
  const onDark = variant === "dark";
  return (
    <svg
      viewBox="0 0 100 50"
      style={{ height, width: (height * 100) / 50 }}
      className={className}
      role="img"
      aria-label="Clean Watersystems"
    >
      <text
        x="0"
        y="30"
        textLength="100"
        lengthAdjust="spacing"
        fontSize="41"
        fontWeight="600"
        fill={onDark ? "#ffffff" : "#001035"}
        style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}
      >
        Clean
      </text>
      <text
        x="0"
        y="48"
        textLength="100"
        lengthAdjust="spacing"
        fontSize="13"
        fontWeight="500"
        fill={onDark ? "#aab5d0" : "#515b79"}
        style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}
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
  wordHeight = 38,
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
