"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Match the radial gradient stops in .bg-footer-glow to choose readable ink.
const stops = [
  [0, 239, 244, 249], [0.4, 239, 244, 249], [0.5, 203, 220, 236],
  [0.6, 125, 180, 226], [0.69, 47, 122, 194], [0.78, 10, 65, 121],
  [0.88, 6, 33, 95], [0.97, 0, 31, 67],
];
const luminance = (rgb: number[]) => rgb.map(v => {
  const c = v / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}).reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
const navy = luminance([6, 48, 95]);

export default function FooterSurface({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const surface = ref.current;
    if (!surface) return;
    const media = window.matchMedia("(max-width: 1023px)");
    const update = () => {
      const box = surface.getBoundingClientRect();
      surface.querySelectorAll<HTMLElement>(".footer-details h2, .footer-details a:not([aria-label]), .footer-details p").forEach(element => {
        if (!media.matches) { element.style.removeProperty("color"); return; }
        const rect = element.getBoundingClientRect();
        const x = (rect.left + rect.width / 2 - box.left) / box.width;
        const y = (rect.top + rect.height / 2 - box.top) / box.height;
        const radius = Math.hypot((x - 0.5) / 0.96, (y - 0.92) / 0.62);
        const upper = stops.findIndex(stop => stop[0] >= radius);
        let rgb: number[];
        if (upper < 0) rgb = stops[stops.length - 1].slice(1);
        else if (upper === 0) rgb = stops[0].slice(1);
        else {
          const a = stops[upper - 1], b = stops[upper];
          const t = (radius - a[0]) / (b[0] - a[0]);
          rgb = a.slice(1).map((value, i) => value + t * (b[i + 1] - value));
        }
        const bg = luminance(rgb);
        const whiteContrast = 1.05 / (bg + 0.05);
        const navyContrast = (Math.max(bg, navy) + 0.05) / (Math.min(bg, navy) + 0.05);
        element.style.color = whiteContrast > navyContrast ? "#ffffff" : "#06305f";
      });
    };
    const observer = new ResizeObserver(update);
    observer.observe(surface);
    media.addEventListener("change", update);
    update();
    return () => { observer.disconnect(); media.removeEventListener("change", update); };
  }, []);
  return <div ref={ref} className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[24px] bg-grid-lines bg-footer-glow max-md:rounded-[18px]">{children}</div>;
}
