"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { PrimaryButton } from "./ui";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { branches } from "@/data/branches";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef(onClose);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  useEffect(() => { closeRef.current = onClose; }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;
    setExpanded(null);
    const body = document.body;
    const scrollY = window.scrollY;
    const previous = { position: body.style.position, top: body.style.top, width: body.style.width, overflow: body.style.overflow };
    // Fixed body also prevents background scrolling on iOS.
    Object.assign(body.style, { position: "fixed", top: `-${scrollY}px`, width: "100%", overflow: "hidden" });
    dialog.showModal();
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => { if (desktop.matches) closeRef.current(); };
    desktop.addEventListener("change", handleResize);
    handleResize();
    return () => {
      desktop.removeEventListener("change", handleResize);
      dialog.close();
      Object.assign(body.style, previous);
      window.scrollTo({ top: scrollY, behavior: "instant" });
    };
  }, [open]);

  const navLink = (href: string, label: string, nested = false) => (
    <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}
      className={`mobile-nav-link ${nested ? "mobile-nav-sublink" : ""}`}>{label}</Link>
  );
  const group = (title: string, href: string, items: { href: string; label: string }[]) => {
    const id = `mobile-${title.toLowerCase()}`;
    const active = expanded === title;
    return <div className="border-b border-neutral-200">
      <button type="button" className="mobile-nav-group" aria-expanded={active} aria-controls={id}
        onClick={() => setExpanded(active ? null : title)}>
        {title}<span aria-hidden="true" className={`mobile-nav-plus ${active ? "rotate-45" : ""}`}>+</span>
      </button>
      <div id={id} className="mobile-nav-accordion" data-open={active} inert={!active}>
        <div className="overflow-hidden"><div className="pb-3">
          {navLink(href, `Alle ${title.toLowerCase()}`, true)}
          {items.map(item => navLink(item.href, item.label, true))}
        </div></div>
      </div>
    </div>;
  };

  return <dialog ref={dialogRef} id="mobile-navigation" aria-label="Navigatie" className="mobile-navigation"
    onCancel={event => { event.preventDefault(); onClose(); }}
    onClick={event => { if ((event.target as HTMLElement).closest("a")) onClose(); }}>
    <div className="mobile-navigation-top">
      <Logo variant="light" />
      <button type="button" autoFocus onClick={onClose} aria-label="Navigatie sluiten"
        className="flex min-h-11 items-center gap-2 rounded-full border border-neutral-200 px-4 text-sm font-semibold">
        Sluiten <span aria-hidden="true" className="text-2xl font-normal">×</span>
      </button>
    </div>
    <nav aria-label="Mobiele hoofdnavigatie" className="mobile-navigation-scroll">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">Ontdek Clean Watersystems</p>
      {navLink("/", "Home")}
      {group("Diensten", "/diensten", services.map(s => ({ label: s.navName, href: `/diensten/${s.slug}` })))}
      {group("Branches", "/branches", branches.map(b => ({ label: b.name, href: `/branches/${b.slug}` })))}
      {navLink("/legionellapreventie", "Legionellapreventie")}
      {navLink("/kenniscentrum", "Kenniscentrum")}
      {navLink("/over-ons", "Over ons")}
      {navLink("/contact", "Contact")}
    </nav>
    <div className="mobile-navigation-contact">
      <PrimaryButton href="/contact" className="justify-between">Offerte aanvragen</PrimaryButton>
      <a href={site.phoneHref} className="flex min-h-11 items-center justify-center text-sm font-semibold text-primary">Bel ons: {site.phone}</a>
    </div>
  </dialog>;
}
