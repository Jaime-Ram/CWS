import Link from "next/link";
import { useId } from "react";

/** Render the supplied artwork directly; isolate its blue mark and white lettering. */
export default function Logo({ variant = "dark", className = "", markSize = 40, wordHeight = 36 }: {
  variant?: "light" | "dark";
  className?: string;
  markSize?: number;
  wordHeight?: number;
}) {
  const id = useId().replace(/:/g, "");
  return <Link href="/" aria-label="Clean Watersystems, naar de homepage"
    className={`inline-flex min-w-0 items-center ${className}`}>
    <svg viewBox="350 165 1500 385" width={Math.round((markSize + wordHeight) * 2.5)}
      className="block h-auto max-w-full" role="img" aria-label="Clean Watersystems">
      <defs>
        <clipPath id={`${id}-mark-clip`}><rect width="690" height="724" /></clipPath>
        <clipPath id={`${id}-text-clip`}><rect x="690" width="1482" height="724" /></clipPath>
        <filter id={`${id}-mark`} colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -4 0 4 0 -0.5" />
        </filter>
        <filter id={`${id}-letters`} colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  20 0 0 0 -18" result="letters" />
          <feFlood floodColor={variant === "dark" ? "#ffffff" : "#001f43"} />
          <feComposite in2="letters" operator="in" />
        </filter>
      </defs>
      <image href="/images/brand/new-logo.png" width="2172" height="724"
        clipPath={`url(#${id}-mark-clip)`} filter={`url(#${id}-mark)`} />
      <image href="/images/brand/new-logo.png" width="2172" height="724"
        clipPath={`url(#${id}-text-clip)`} filter={`url(#${id}-letters)`} />
    </svg>
  </Link>;
}
