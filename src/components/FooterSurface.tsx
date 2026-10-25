import type { ReactNode } from "react";

export default function FooterSurface({ children }: { children: ReactNode }) {
  return <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[24px] bg-grid-lines bg-footer-glow max-md:rounded-[18px]">{children}</div>;
}
