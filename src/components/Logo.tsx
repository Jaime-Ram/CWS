import Link from "next/link";

/**
 * Beeldmerk: een abstracte stroombocht met een verloop van cyaan naar diepblauw.
 * Het woordmerk staat als echte tekst naast het merk, zodat het scherp blijft en
 * mee schaalt met de rest van de typografie.
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
        <linearGradient id={`${id}-fade`} x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#8addff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#8addff" stopOpacity="0" />
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

export default function Logo({
  variant = "dark",
  className = "",
  markSize = 34,
  id = "cws",
}: {
  variant?: "light" | "dark";
  className?: string;
  markSize?: number;
  id?: string;
}) {
  const onDark = variant === "dark";
  return (
    <Link
      href="/"
      aria-label="Clean Water Systems, naar de homepage"
      className={`flex items-center gap-3 ${className}`}
    >
      <LogoMark id={id} size={markSize} className="shrink-0" />
      <span className="leading-none">
        <span
          className={`block whitespace-nowrap text-[21px] font-semibold tracking-[-0.035em] max-sm:text-[18px] ${
            onDark ? "text-white" : "text-neutral-800"
          }`}
        >
          Clean Water
        </span>
        <span
          className={`mt-[3px] block whitespace-nowrap text-[11.5px] font-medium tracking-[0.22em] max-sm:text-[10px] ${
            onDark ? "text-neutral-400" : "text-neutral-500"
          }`}
        >
          SYSTEMS
        </span>
      </span>
    </Link>
  );
}
