import type { ReactNode } from "react";
import Header from "./Header";
import TopBar from "./TopBar";

/**
 * Hero in de opzet van het Investflow-template: een afgerond, donker vlak binnen
 * een 20px marge, met de header absoluut daaroverheen.
 */
export default function Hero({
  eyebrow,
  title,
  text,
  actions,
  aside,
  compact = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  compact?: boolean;
}) {
  return (
    <>
      <TopBar />
      <div className="relative mx-auto max-w-[1440px] px-5 pt-5 max-lg:px-4 max-lg:pt-4">
      <Header variant="dark" />
      <div className="relative overflow-hidden rounded-[32px] bg-neutral-800 max-md:rounded-[24px] max-sm:rounded-[16px]">
        <HeroBackground />
        <div className="container-default relative">
          <div
            className={`${compact ? "pb-20 pt-36" : "pb-[190px] pt-36"} max-lg:pb-20 max-lg:pt-32 max-md:pb-14 max-md:pt-28`}
          >
            <div className={aside ? "grid grid-cols-[1fr_auto] items-end gap-12 max-lg:grid-cols-1" : ""}>
              <div className="max-w-[560px]">
                {eyebrow && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-[14px] font-medium text-white/90 backdrop-blur-sm">
                    <span className="size-1.5 rounded-full bg-secondary-200" />
                    {eyebrow}
                  </div>
                )}
                <h1 className="text-white">{title}</h1>
                {text && (
                  <div className="mt-3 max-w-[470px] leading-[1.6em] text-neutral-300">
                    {text}
                  </div>
                )}
                {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
              </div>
              {aside}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

/** Waterachtige achtergrond: diepe navy met golfpatroon en cyaan glow. */
export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 620px at 78% 8%, rgba(45,178,255,0.30), transparent 62%)," +
            "radial-gradient(760px 520px at 12% 96%, rgba(35,101,255,0.42), transparent 60%)," +
            "linear-gradient(158deg, #001035 0%, #001b57 48%, #00143f 100%)",
        }}
      />
      <svg
        className="absolute inset-0 size-full opacity-[0.16]"
        preserveAspectRatio="none"
        viewBox="0 0 1400 600"
        fill="none"
      >
        <defs>
          <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2db2ff" stopOpacity="0" />
            <stop offset="45%" stopColor="#2db2ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {Array.from({ length: 9 }).map((_, i) => (
          <path
            key={i}
            d={`M-100 ${150 + i * 52} C 220 ${90 + i * 52}, 420 ${230 + i * 52}, 720 ${175 + i * 52} S 1240 ${95 + i * 52}, 1500 ${190 + i * 52}`}
            stroke="url(#wave)"
            strokeWidth="1.25"
            fill="none"
          />
        ))}
      </svg>
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
          backgroundSize: "34px 34px",
        }}
      />
    </div>
  );
}
