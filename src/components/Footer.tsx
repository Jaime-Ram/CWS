import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { branches } from "@/data/branches";
import { PrimaryButton } from "./ui";

const year = 2026;

/**
 * Footer uit het Investflow-template: donkere afgeronde kaart met bovenin een
 * gecentreerd CTA-blok, daaronder de linkkolommen op een felle gloed die naar
 * wit uitloopt.
 */
export default function Footer() {
  return (
    <footer className="px-5 pb-5 max-lg:px-4 max-lg:pb-4">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-grid-lines bg-footer-glow max-md:rounded-[24px]">
        <div className="container-default relative">
          {/* CTA bovenin, op het donkere deel */}
          <div className="mx-auto max-w-[640px] pb-16 pt-24 text-center max-md:pb-10 max-md:pt-16">
            <div className="flex justify-center">
              <Logo variant="dark" markSize={40} id="ftr" />
            </div>

            <h2 className="mt-8 text-white">
              Advies over legionellapreventie of een overschrijding?
            </h2>
            <p className="mx-auto mt-4 max-w-[500px] leading-[1.6em] text-neutral-300">
              Vertel kort om wat voor gebouw het gaat. U hoort binnen één werkdag wat er
              nodig is, wat het kost en wat u zelf al kunt doen.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
              <PrimaryButton href="/contact">Neem contact op</PrimaryButton>
              <a href={site.phoneHref} className="font-semibold text-white">
                {site.phone}
              </a>
            </div>
          </div>

          {/* Linkkolommen, op het lichte deel van de gloed */}
          <div className="grid grid-cols-4 gap-10 pt-40 max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:pt-24">
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

            <FooterColumn title="Kennis en info">
              <FooterLink href="/legionellapreventie">Legionellapreventie</FooterLink>
              <FooterLink href="/kenniscentrum">Kenniscentrum</FooterLink>
              <FooterLink href="/veelgestelde-vragen">Veelgestelde vragen</FooterLink>
              <FooterLink href="/over-ons">Over ons</FooterLink>
              <FooterLink href="/diensten/legionella-uitbraak">Spoed bij een uitbraak</FooterLink>
              <FooterLink href="/privacyverklaring">Privacyverklaring</FooterLink>
            </FooterColumn>

            <FooterColumn title="Contact">
              <li>
                <a
                  href={site.routeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] leading-[1.5em] text-primary-dark transition-opacity hover:opacity-70"
                >
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="text-[15px] font-semibold text-primary-dark">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.mobileHref} className="text-[15px] font-semibold text-primary-dark">
                  {site.mobile}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-[15px] text-primary-dark transition-opacity hover:opacity-70"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <SocialLink href={site.socials.linkedin} label="LinkedIn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.24 8.25h4.5V24h-4.5V8.25zM8.5 8.25h4.31v2.15h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V24H8.5V8.25z" />
                  </svg>
                </SocialLink>
                <SocialLink href={site.socials.youtube} label="YouTube">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.52A3 3 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3 3 0 0 0 2.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3 3 0 0 0 2.12-2.13C24 15.92 24 12 24 12s0-3.92-.5-5.8zM9.6 15.6V8.4l6.24 3.6-6.24 3.6z" />
                  </svg>
                </SocialLink>
              </li>
            </FooterColumn>
          </div>

          <div className="mt-14 h-px w-full bg-primary-dark/15" />

          <div className="flex flex-wrap items-center justify-between gap-4 py-6 text-[14px] text-primary-dark/70">
            <p>
              © {year} {site.legalName} · {site.tagline} · Alle rechten voorbehouden.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/privacyverklaring" className="transition-opacity hover:opacity-70">
                Privacyverklaring
              </Link>
              <Link href="/sitemap.xml" className="transition-opacity hover:opacity-70">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-[15px] font-semibold text-neutral-800">{title}</h2>
      <ul className="grid gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[15px] text-primary-dark transition-opacity hover:opacity-70"
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
      className="flex size-10 items-center justify-center rounded-full bg-white text-primary shadow-[0_4px_4px_#9ac4ff1f] transition-colors hover:bg-primary hover:text-white"
    >
      {children}
    </a>
  );
}
