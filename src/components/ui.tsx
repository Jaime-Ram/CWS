import Link from "next/link";
import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Buttons — pill met witte cirkel-icoon, exact zoals het Investflow-template  */
/* -------------------------------------------------------------------------- */

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 16 15"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M7.8589 0.996826L14.1772 7.02789M14.1772 7.02789L7.8589 13.059M14.1772 7.02789L1.87854 7.02789"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center bg-primary py-2 pl-6 pr-2 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 max-sm:pl-5 ${className}`}
      style={{ borderRadius: 300 }}
    >
      <span className="text-[15px] leading-[1.25em]">{children}</span>
      <span className="ml-4 flex size-[38px] shrink-0 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 group-hover:rotate-45 max-sm:ml-3 max-sm:size-[30px]">
        <ArrowIcon />
      </span>
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  variant = "light",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "light" | "dark";
  className?: string;
}) {
  const isDark = variant === "dark";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center border py-2 pl-6 pr-2 font-semibold transition-transform duration-300 hover:-translate-y-0.5 max-sm:pl-5 ${
        isDark
          ? "border-white/25 bg-white/5 text-white"
          : "border-neutral-200 bg-white text-neutral-800"
      } ${className}`}
      style={{ borderRadius: 300 }}
    >
      <span className="text-[15px] leading-[1.25em]">{children}</span>
      <span
        className={`ml-4 flex size-[38px] shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 max-sm:ml-3 max-sm:size-[30px] ${
          isDark ? "bg-white text-primary" : "bg-neutral-200 text-primary"
        }`}
      >
        <ArrowIcon />
      </span>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  Layout                                                                     */
/* -------------------------------------------------------------------------- */

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-default">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow mb-2">{children}</div>;
}

export function SectionHead({
  eyebrow,
  title,
  text,
  center = false,
  cta,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
  cta?: ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={
        center
          ? "mx-auto max-w-[560px] text-center"
          : "flex flex-wrap items-end justify-between gap-6"
      }
    >
      <div className={center ? "" : "max-w-[620px]"}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading>{title}</Heading>
        {text && <p className="mt-3 leading-[1.6em]">{text}</p>}
        {center && cta && (
          <div className="mt-6 flex flex-wrap justify-center gap-3">{cta}</div>
        )}
      </div>
      {!center && cta && <div className="flex flex-wrap gap-3">{cta}</div>}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <span
      className={`mt-[3px] flex size-[20px] shrink-0 items-center justify-center rounded-full bg-primary ${className}`}
      aria-hidden="true"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.2 4.9 8.6 9.5 4"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function CheckList({
  items,
  light = false,
  className = "",
}: {
  items: readonly string[];
  light?: boolean;
  className?: string;
}) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <CheckIcon />
          <span className={light ? "text-neutral-300" : ""}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
