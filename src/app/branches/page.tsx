import { HeroLight } from "@/components/heroes";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { TeamCard } from "@/components/blocks";
import { Section } from "@/components/ui";
import { branches } from "@/data/branches";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Legionellapreventie per branche",
  description:
    "Legionellabeheer voor hotels, campings, zorginstellingen, zwembaden, scholen, VvE's, sport en industrie. Elke branche zijn eigen risicoprofiel.",
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
      <HeroLight
        eyebrow="Branches"
        title="Elke branche heeft een eigen risicoprofiel"
        text="De wet is voor iedereen gelijk, de praktijk niet. Een camping vraagt een andere aanpak dan een verpleeghuis of een productiehal."
      />

      <Section className="pt-0">
        <Breadcrumbs items={[{ label: "Branches", href: "/branches" }]} />
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {branches.map((b) => (
            <TeamCard
              key={b.slug}
              href={`/branches/${b.slug}`}
              name={b.shortName}
              role={b.priority ? "Prioritaire instelling" : "Zorgplicht"}
              image={b.image}
              imageAlt={b.imageAlt}
            />
          ))}
        </div>
      </Section>

      <CtaSection
        eyebrow="Staat uw branche er niet bij?"
        title="Heeft u een collectief leidingnet, dan geldt de zorgplicht"
        text="Bel gerust, dan bepalen we samen wat er in uw situatie nodig is en wat niet."
      />
    </>
  );
}
