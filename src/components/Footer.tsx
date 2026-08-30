import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { branches } from "@/data/branches";

const year = 2026;

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-300">
      <div className="container-default py-20 max-md:py-14">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <Link href="/" aria-label={`${site.legalName} home`}>
              <Image
                src="/images/logo-clean-water-systems.svg"
                alt={`${site.legalName} logo`}
                width={181}
                height={68}
                className="h-[44px] w-auto"
              />
            </Link>
            <p className="mt-5 max-w-[320px] text-[15px] leading-[1.6em] text-neutral-400">
              Adviesbureau voor waterinstallaties. Sinds {site.founded} specialist in
              legionellapreventie, BRL 6010 risicoanalyses en waterveiligheid in heel
              Nederland.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink href={site.socials.linkedin} label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.24 8.25h4.5V24h-4.5V8.25zM8.5 8.25h4.31v2.15h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V24H8.5V8.25z" />
                </svg>
              </SocialLink>
              <SocialLink href={site.socials.youtube} label="YouTube">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.52A3 3 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3 3 0 0 0 2.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3 3 0 0 0 2.12-2.13C24 15.92 24 12 24 12s0-3.92-.5-5.8zM9.6 15.6V8.4l6.24 3.6-6.24 3.6z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Diensten">
            {services.slice(0, 7).map((s) => (
              <FooterLink key={s.slug} href={`/diensten/${s.slug}`}>
                {s.navName}
              </FooterLink>
            ))}
            <FooterLink href="/diensten">Alle diensten</FooterLink>
          </FooterColumn>

          <FooterColumn title="Branches">
            {branches.map((b) => (
              <FooterLink key={b.slug} href={`/branches/${b.slug}`}>
                {b.shortName}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <li>
              <a
                href={site.routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-neutral-400 transition-colors hover:text-white"
              >
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="text-[15px] text-neutral-400 transition-colors hover:text-white"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.mobileHref}
                className="text-[15px] text-neutral-400 transition-colors hover:text-white"
              >
                {site.mobile}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="break-all text-[15px] text-neutral-400 transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </li>
            <FooterLink href="/kenniscentrum">Kenniscentrum</FooterLink>
            <FooterLink href="/veelgestelde-vragen">Veelgestelde vragen</FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-14 h-px w-full bg-white/10" />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-[14px] text-neutral-500">
          <p>
            © {year} {site.legalName}. Alle rechten voorbehouden.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacyverklaring" className="transition-colors hover:text-white">
              Privacyverklaring
            </Link>
            <Link href="/sitemap.xml" className="transition-colors hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-4 text-[15px] font-semibold text-white">{title}</h2>
      <ul className="grid gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[15px] text-neutral-400 transition-colors hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-primary hover:bg-primary"
    >
      {children}
    </a>
  );
}
