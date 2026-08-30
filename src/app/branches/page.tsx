import Link from "next/link";
import Hero from "@/components/Hero";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowIcon, Card, PrimaryButton, Section } from "@/components/ui";
import { branches } from "@/data/branches";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Legionellapreventie per branche",
  description:
    "Legionellabeheer voor hotels, campings, zorginstellingen, zwembaden, scholen, VvE's, sportaccommodaties en industrie. Elke branche zijn eigen risicoprofiel.",
  path: "/branches",
  keywords: [
    "legionella hotel",
    "legionella zorginstelling",
    "legionella camping",
    "legionella zwembad",
    "legionella VvE",
  ],
});

export default function BranchesPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Branches"
        title="Elke branche heeft zijn eigen risicoprofiel"
        text="De wet is voor iedereen gelijk, de praktijk niet. Een camping vraagt een andere aanpak dan een verpleeghuis of een productiehal."
        actions={<PrimaryButton href="/contact">Vrijblijvend advies</PrimaryButton>}
      />

      <Section>
        <Breadcrumbs items={[{ label: "Branches", href: "/branches" }]} />
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {branches.map((b) => (
            <Link key={b.slug} href={`/branches/${b.slug}`} className="group">
              <Card className="flex h-full flex-col p-8 transition-shadow duration-300 hover:shadow-[0_18px_40px_-18px_rgba(31,47,84,0.25)] max-sm:p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-[24px] leading-[1.25em]">{b.name}</h2>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[12px] font-semibold ${
                      b.priority
                        ? "bg-secondary-100 text-primary-dark"
                        : "bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    {b.priority ? "Prioritaire instelling" : "Zorgplicht"}
                  </span>
                </div>
                <p className="mt-4 flex-1 leading-[1.6em]">{b.intro}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">
                  Meer info
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
