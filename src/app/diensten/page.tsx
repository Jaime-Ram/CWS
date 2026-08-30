import Link from "next/link";
import Hero from "@/components/Hero";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowIcon, Card, PrimaryButton, Section } from "@/components/ui";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Diensten voor legionellapreventie",
  description:
    "Van BRL 6010 risicoanalyse en beheersplan tot desinfectie, keerklepcontrole, boilerreiniging en geaccrediteerde watermonsters. Bekijk alle diensten.",
  path: "/diensten",
  keywords: [
    "legionella diensten",
    "BRL 6010 risicoanalyse",
    "desinfectie waterleiding",
    "keerklepcontrole",
    "legionella watermonsters",
  ],
});

export default function DienstenPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Diensten"
        title="Complete ondersteuning op het gebied van waterveiligheid"
        text="Elk onderdeel van legionellabeheer onder één dak: analyse, plan, uitvoering en controle. Los af te nemen of als doorlopend contract."
        actions={<PrimaryButton href="/contact">Offerte aanvragen</PrimaryButton>}
      />

      <Section>
        <Breadcrumbs items={[{ label: "Diensten", href: "/diensten" }]} />
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {services.map((s) => (
            <Link key={s.slug} href={`/diensten/${s.slug}`} className="group">
              <Card className="flex h-full flex-col p-8 transition-shadow duration-300 hover:shadow-[0_18px_40px_-18px_rgba(31,47,84,0.25)] max-sm:p-6">
                <div className="eyebrow text-primary">{s.eyebrow}</div>
                <h2 className="mt-3 text-[24px] leading-[1.25em]">{s.name}</h2>
                <p className="mt-3 flex-1 leading-[1.6em]">{s.summary}</p>
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
