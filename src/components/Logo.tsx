import Image from "next/image";
import Link from "next/link";

/** Origineel Clean Water Systems-logo; witte versie op donker, navy versie op licht. */
export default function Logo({ variant = "dark", className = "", markSize = 36, wordHeight = 32 }: {
  variant?: "light" | "dark";
  className?: string;
  markSize?: number;
  wordHeight?: number;
}) {
  const height = Math.round((markSize + wordHeight) * 0.78);
  return <Link href="/" aria-label="Clean Water Systems, naar de homepage"
    className={`inline-flex min-w-0 items-center ${className}`}>
    <Image
      src={variant === "dark" ? "/images/brand/logo-cws-light.png" : "/images/brand/logo-cws-dark.png"}
      alt="Clean Water Systems"
      width={362}
      height={135}
      priority
      style={{ height, width: "auto" }}
      className="block max-w-full max-sm:!h-[40px]"
    />
  </Link>;
}
