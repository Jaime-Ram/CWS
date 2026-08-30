import Link from "next/link";
import { site } from "@/data/site";

/** Notification bar uit het template, met de contactgegevens van de oude site. */
export default function TopBar() {
  return (
    <div className="relative z-[1000] bg-neutral-800 text-neutral-300">
      <div className="container-default">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-2.5 text-[14px]">
          <p className="flex items-center gap-2">
            <span className="size-1.5 shrink-0 rounded-full bg-secondary-200" />
            Vraag of probleem? Mail{" "}
            <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
              {site.email}
            </a>
          </p>
          <p className="flex flex-wrap items-center gap-x-6 gap-y-1 max-sm:hidden">
            <Link href="/diensten/legionella-uitbraak" className="text-white underline-offset-4 hover:underline">
              Spoed bij een uitbraak
            </Link>
            <a href={site.phoneHref} className="hover:text-white">
              {site.phone}
            </a>
            <a href={site.mobileHref} className="hover:text-white">
              {site.mobile}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
