"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { branches } from "@/data/branches";
import { PrimaryButton } from "./ui";

const mainLinks = [
  { label: "Legionellapreventie", href: "/legionellapreventie" },
  { label: "Kenniscentrum", href: "/kenniscentrum" },
  { label: "Over ons", href: "/over-ons" },
];

export default function Header({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<"diensten" | "branches" | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [pathname]);

  const dark = variant === "dark";
  const linkColor = dark ? "text-white/85 hover:text-white" : "text-neutral-800 hover:text-primary";

  return (
    <header
      className={`${dark ? "absolute inset-x-5 top-5 z-[999] max-lg:inset-x-4 max-lg:top-4" : "relative z-[999] border-b border-neutral-200 bg-white"}`}
    >
      <div className="container-default">
        <div className="flex items-center justify-between gap-6 py-6">
          <Logo variant={dark ? "dark" : "light"} markSize={38} wordHeight={38} id="hdr" className="shrink-0" />

          {/* Desktop-navigatie */}
          <nav className="flex items-center gap-8 max-lg:hidden" aria-label="Hoofdnavigatie">
            <ul className="flex items-center gap-7">
              <NavDropdown
                label="Diensten"
                href="/diensten"
                open={dropdown === "diensten"}
                onOpen={() => setDropdown("diensten")}
                onClose={() => setDropdown(null)}
                linkColor={linkColor}
                width="w-[600px]"
                cols="grid-cols-2 gap-x-8 gap-y-1"
                items={services.map((s) => ({ label: s.navName, href: `/diensten/${s.slug}` }))}
              />
              <NavDropdown
                label="Branches"
                href="/branches"
                open={dropdown === "branches"}
                onOpen={() => setDropdown("branches")}
                onClose={() => setDropdown(null)}
                linkColor={linkColor}
                width="w-[340px]"
                cols="gap-1"
                items={branches.map((b) => ({ label: b.name, href: `/branches/${b.slug}` }))}
              />
              {mainLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`text-[15px] font-medium transition-colors ${linkColor}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <PrimaryButton href="/contact">Offerte aanvragen</PrimaryButton>
          </nav>

          {/* Mobiele toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Navigatie openen"
            className={`hidden size-11 items-center justify-center rounded-full border max-lg:flex ${
              dark ? "border-white/25 text-white" : "border-neutral-200 text-neutral-800"
            }`}
          >
            <span className="grid gap-[5px]">
              <span className="block h-[2px] w-5 bg-current" />
              <span className="block h-[2px] w-5 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobiel menu */}
      {open && (
        <div className="hidden max-lg:block">
          <div className="container-default pb-6">
            <div className="card max-h-[70vh] overflow-y-auto p-5">
              <MobileGroup title="Diensten" href="/diensten" items={services.map((s) => ({ label: s.navName, href: `/diensten/${s.slug}` }))} />
              <MobileGroup title="Branches" href="/branches" items={branches.map((b) => ({ label: b.name, href: `/branches/${b.slug}` }))} />
              <div className="divider my-4" />
              <div className="grid gap-1">
                {mainLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-lg px-3 py-2 text-[15px] font-medium text-neutral-800"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="divider my-4" />
              <div className="flex flex-col gap-3">
                <a href={site.phoneHref} className="px-3 font-semibold text-primary">
                  {site.phone}
                </a>
                <PrimaryButton href="/contact" className="self-start">
                  Offerte aanvragen
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavDropdown({
  label,
  href,
  open,
  onOpen,
  onClose,
  linkColor,
  width,
  cols,
  items,
}: {
  label: string;
  href: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  linkColor: string;
  width: string;
  cols: string;
  items: { label: string; href: string }[];
}) {
  return (
    <li onMouseEnter={onOpen} onMouseLeave={onClose} className="relative">
      <Link
        href={href}
        className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors ${linkColor}`}
        aria-expanded={open}
      >
        {label}
        <Chevron className={open ? "rotate-180" : ""} />
      </Link>
      <div
        inert={!open}
        className={`absolute left-1/2 top-full ${width} pt-4 transition-[opacity,translate] duration-300 ease-out ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ translate: open ? "-50% 0" : "-50% -8px" }}
      >
        <div className={`card grid p-6 ${cols}`}>
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-lg px-3 py-[7px] text-[14px] text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-800"
            >
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}

function MobileGroup({
  title,
  href,
  items,
}: {
  title: string;
  href: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="mb-4">
      <Link href={href} className="block px-3 pb-1 text-[13px] font-semibold uppercase tracking-wide text-neutral-400">
        {title}
      </Link>
      <div className="grid gap-0.5">
        {items.map((i) => (
          <Link key={i.href} href={i.href} className="rounded-lg px-3 py-[7px] text-[14px] text-neutral-600">
            {i.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-300 ${className}`}
    >
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
