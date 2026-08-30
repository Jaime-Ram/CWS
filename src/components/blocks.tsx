import Link from "next/link";
import type { ReactNode } from "react";
import Visual, { type VisualName } from "./Visual";
import { ArrowIcon, Card } from "./ui";

/* -------------------------------------------------------------------------- */
/*  Badge — .badge uit het template                                            */
/* -------------------------------------------------------------------------- */

export function Badge({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "accent";
}) {
  const styles = {
    light: "bg-neutral-200 text-primary shadow-[0_4px_4px_#9ac4ff0f,0_2px_1px_#05112d0f]",
    dark: "bg-white/10 text-white backdrop-blur-sm",
    accent: "bg-primary text-white",
  }[tone];
  return (
    <span
      className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-1.5 text-[15px] font-medium leading-[1.25em] max-sm:px-3 max-sm:py-1 max-sm:text-[14px] ${styles}`}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  ChevronButton — .card-button-icon                                          */
/* -------------------------------------------------------------------------- */

export function ChevronButton({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span
      className={`flex size-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1 ${
        tone === "dark"
          ? "bg-white/12 text-white backdrop-blur-sm"
          : "bg-neutral-200 text-neutral-800"
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M5.63068 12.4001L10.3691 8.0001L5.63068 3.6001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  StatsCard — .stats-card met .stat-highlight                                */
/* -------------------------------------------------------------------------- */

export function StatsCard({
  value,
  suffix,
  title,
  text,
  featured = false,
}: {
  value: string;
  suffix?: string;
  title: string;
  text: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`flex flex-col justify-between gap-16 rounded-[32px] border p-10 max-md:gap-8 max-md:rounded-[24px] max-sm:p-6 ${
        featured
          ? "border-primary/25 bg-secondary-100"
          : "border-neutral-200 bg-white shadow-[0_4px_4px_#9ac4ff0f,0_1px_1px_#05112d0f]"
      }`}
    >
      <div className="relative">
        <span
          className="pointer-events-none absolute -left-3 -top-2 size-16 rounded-full bg-secondary-200/20 blur-xl"
          aria-hidden="true"
        />
        <span className="relative block text-[48px] font-semibold leading-none text-primary max-md:text-[40px]">
          {value}
          {suffix}
        </span>
      </div>
      <div>
        <p className="text-[20px] font-semibold leading-[1.25em] text-neutral-700">{title}</p>
        <p className="mt-2 text-[15px] leading-[1.6em]">{text}</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  DarkCard — .portfolio-card-v1: donkere kaart met visual als achtergrond    */
/* -------------------------------------------------------------------------- */

export function DarkCard({
  href,
  visual,
  eyebrow,
  title,
  text,
  meta,
}: {
  href: string;
  visual: VisualName;
  eyebrow?: string;
  title: string;
  text: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-[32px] bg-neutral-800 max-md:rounded-[24px]"
    >
      <span className="absolute inset-0" aria-hidden="true">
        <Visual name={visual} tone="dark" className="size-full opacity-70" />
        <span className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/85 to-neutral-800/30" />
      </span>
      <span className="relative flex flex-1 flex-col justify-between gap-16 p-10 max-md:gap-8 max-sm:p-6">
        <span>
          {eyebrow && (
            <span className="text-[14px] font-medium uppercase tracking-wide text-secondary-200">
              {eyebrow}
            </span>
          )}
          <span className="mt-3 block text-[24px] font-semibold leading-[1.25em] text-white">
            {title}
          </span>
          <span className="mt-3 block text-[15px] leading-[1.6em] text-neutral-300">{text}</span>
        </span>
        <span className="flex items-center justify-between gap-4">
          {meta ? <Badge tone="dark">{meta}</Badge> : <span />}
          <ChevronButton tone="dark" />
        </span>
      </span>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  CompactDarkCard — .portfolio-card-v3                                       */
/* -------------------------------------------------------------------------- */

export function CompactDarkCard({
  href,
  visual,
  title,
  meta,
}: {
  href: string;
  visual: VisualName;
  title: string;
  meta: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-[24px] bg-neutral-800"
    >
      <span className="absolute inset-0" aria-hidden="true">
        <Visual name={visual} tone="dark" className="size-full opacity-70" />
        <span className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/80 to-transparent" />
      </span>
      <span className="relative flex flex-1 flex-col justify-end gap-4 p-7 max-sm:p-5">
        <span className="flex items-end justify-between gap-4">
          <span>
            <span className="block text-[20px] font-semibold leading-[1.25em] text-white">
              {title}
            </span>
            <span className="mt-1 block text-[15px] text-neutral-400">{meta}</span>
          </span>
          <ChevronButton tone="dark" />
        </span>
      </span>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  VisualCard — .team-card-v2 / .features-v3-card                             */
/* -------------------------------------------------------------------------- */

export function VisualCard({
  href,
  visual,
  title,
  subtitle,
  badge,
}: {
  href: string;
  visual: VisualName;
  title: string;
  subtitle: string;
  badge?: string;
}) {
  return (
    <Link href={href} className="group">
      <Card className="flex h-full flex-col overflow-hidden p-3 transition-shadow duration-300 hover:shadow-[0_18px_40px_-18px_rgba(31,47,84,0.25)]">
        <span className="relative block overflow-hidden rounded-[20px]">
          <Visual name={visual} className="block aspect-[4/3] w-full" />
          {badge && (
            <span className="absolute left-4 top-4">
              <Badge>{badge}</Badge>
            </span>
          )}
        </span>
        <span className="flex flex-1 items-end justify-between gap-4 p-5 pt-6 max-sm:p-4">
          <span>
            <span className="block text-[20px] font-semibold leading-[1.25em] text-neutral-800">
              {title}
            </span>
            <span className="mt-1 block text-[15px] leading-[1.5em] text-neutral-600">
              {subtitle}
            </span>
          </span>
          <ChevronButton />
        </span>
      </Card>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  ImageLeftItem — .image-left-item-v1                                        */
/* -------------------------------------------------------------------------- */

export function ImageLeftItem({
  href,
  visual,
  title,
  badge,
  meta,
}: {
  href: string;
  visual: VisualName;
  title: string;
  badge?: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="group grid grid-cols-[120px_1fr] items-center gap-6 max-sm:grid-cols-[88px_1fr] max-sm:gap-4"
    >
      <span className="overflow-hidden rounded-[16px] border border-neutral-200 shadow-[0_4px_4px_#9ac4ff0f]">
        <Visual name={visual} className="block aspect-square w-full" />
      </span>
      <span>
        <span className="block text-[20px] font-semibold leading-[1.3em] text-neutral-800 transition-colors group-hover:text-primary max-sm:text-[17px]">
          {title}
        </span>
        {(badge || meta) && (
          <span className="mt-3 flex flex-wrap items-center gap-3">
            {badge && <Badge>{badge}</Badge>}
            {meta && <span className="text-[15px] text-neutral-500">{meta}</span>}
          </span>
        )}
      </span>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  FeaturedCard — .featured-blog-v1                                           */
/* -------------------------------------------------------------------------- */

export function FeaturedCard({
  href,
  visual,
  title,
  badge,
  meta,
}: {
  href: string;
  visual: VisualName;
  title: string;
  badge: string;
  meta: string;
}) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[32px] bg-secondary-100 shadow-[0_4px_4px_#9ac4ff0f,0_1px_1px_#05112d0f] max-md:rounded-[24px]"
    >
      <Visual name={visual} className="block aspect-[4/3] w-full" />
      <span className="block px-8 pb-8 max-sm:px-4 max-sm:pb-4">
        <span className="block rounded-[24px] bg-white p-8 shadow-[0_4px_4px_#9ac4ff0f,0_1px_1px_#05112d0f] max-sm:rounded-[16px] max-sm:p-5">
          <span className="block text-[28px] font-semibold leading-[1.25em] text-neutral-800 transition-colors group-hover:text-primary max-md:text-[22px]">
            {title}
          </span>
          <span className="mt-4 flex flex-wrap items-center gap-3">
            <Badge>{badge}</Badge>
            <span className="text-[15px] text-neutral-500">{meta}</span>
          </span>
        </span>
      </span>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  QuoteCard — .testimonial-card-v1, gebruikt voor onze garanties             */
/* -------------------------------------------------------------------------- */

export function QuoteCard({
  stat,
  statLabel,
  text,
  author,
  role,
  large = false,
}: {
  stat: string;
  statLabel: string;
  text: string;
  author: string;
  role: string;
  large?: boolean;
}) {
  return (
    <Card className={`flex flex-col justify-between gap-8 p-10 max-sm:p-6 ${large ? "" : ""}`}>
      <div>
        <div className={`font-semibold text-neutral-800 ${large ? "text-[40px] max-md:text-[32px]" : "text-[32px]"} leading-none`}>
          {stat}
        </div>
        <div className="mt-1 text-[15px] text-neutral-500">{statLabel}</div>
        <svg
          className="mt-7 text-primary"
          width="34"
          height="26"
          viewBox="0 0 34 26"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0 26V14.3C0 6.4 4.6 1.1 13.3 0l1 3.6C9 4.9 6.4 7.6 6.4 11.5h6.2V26H0zm20.4 0V14.3c0-7.9 4.6-13.2 13.3-14.3l1 3.6c-5.3 1.3-7.9 4-7.9 7.9h6.2V26H20.4z" />
        </svg>
        <p
          className={`mt-4 leading-[1.45em] text-neutral-800 ${
            large ? "text-[24px] font-semibold max-md:text-[20px]" : "text-[17px]"
          }`}
        >
          {text}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-white bg-secondary-100 text-[15px] font-semibold text-primary shadow-[0_4px_4px_#9ac4ff0f,0_1px_5px_#05112d0f]">
          {author.slice(0, 2).toUpperCase()}
        </span>
        <span>
          <span className="block text-[15px] font-semibold text-neutral-800">{author}</span>
          <span className="block text-[15px] text-neutral-500">{role}</span>
        </span>
      </div>
    </Card>
  );
}

/* -------------------------------------------------------------------------- */
/*  Milestone — .milestone-wrapper                                             */
/* -------------------------------------------------------------------------- */

export function MilestoneList({
  items,
}: {
  items: { badge: string; visual: VisualName; title: string; text: string }[];
}) {
  return (
    <div className="grid">
      {items.map((item, i) => (
        <div
          key={item.title}
          className="grid grid-cols-[auto_166px_1fr] items-start gap-6 pb-8 max-lg:grid-cols-[auto_140px_1fr] max-sm:grid-cols-[auto_1fr] max-sm:gap-4"
        >
          <div className="flex h-full flex-col items-center gap-3">
            <Badge>{item.badge}</Badge>
            {i < items.length - 1 && <span className="w-px flex-1 bg-neutral-300" />}
          </div>
          <div className="overflow-hidden rounded-[16px] border border-neutral-200 max-sm:hidden">
            <Visual name={item.visual} className="block aspect-square w-full" />
          </div>
          <div className="pt-1">
            <h3>{item.title}</h3>
            <p className="mt-3 leading-[1.6em]">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  CardCta — .card-cta: donkere kaart binnen een grid                         */
/* -------------------------------------------------------------------------- */

export function CardCta({
  eyebrow,
  title,
  text,
  action,
  visual = "golven",
}: {
  eyebrow?: string;
  title: string;
  text: string;
  action: ReactNode;
  visual?: VisualName;
}) {
  return (
    <div className="relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[24px] bg-neutral-800 p-10 max-sm:p-6">
      <span className="absolute inset-0" aria-hidden="true">
        <Visual name={visual} tone="dark" className="size-full opacity-60" />
        <span className="absolute inset-0 bg-gradient-to-br from-neutral-800/90 to-neutral-800/60" />
      </span>
      <div className="relative">
        {eyebrow && <div className="text-[15px] text-neutral-400">{eyebrow}</div>}
        <p className="mt-2 text-[24px] font-semibold leading-[1.25em] text-white">{title}</p>
        <p className="mt-3 text-[15px] leading-[1.6em] text-neutral-300">{text}</p>
      </div>
      <div className="relative">{action}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  PillNav — .blog-categories-nav                                             */
/* -------------------------------------------------------------------------- */

export function PillNav({
  items,
  active,
}: {
  items: { label: string; href: string }[];
  active?: string;
}) {
  return (
    <div className="flex justify-center">
      <nav className="flex flex-wrap items-center justify-center gap-1 rounded-full border border-neutral-300 bg-white p-3 max-sm:rounded-[16px]">
        {items.map((i) => {
          const isActive = i.href === active;
          return (
            <Link
              key={i.href}
              href={i.href}
              className={`rounded-full px-5 py-2 text-[15px] font-medium transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "text-neutral-600 hover:bg-neutral-200 hover:text-neutral-800"
              }`}
            >
              {i.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
