import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { Card, Section } from "@/components/ui";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact en offerte aanvragen",
  description:
    "Neem contact op met Clean Water Systems in Schoonhoven. Bel 0182-607675, mail ons of vraag direct een offerte aan voor legionellapreventie.",
  path: "/contact",
  keywords: ["contact legionella specialist", "offerte legionella", "Clean Water Systems contact"],
});

export default function ContactPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Contact"
        title="Vertel ons kort wat er speelt"
        text="Of het nu gaat om een verplichte risicoanalyse, een overschrijding of een vraag waarvan u nog niet weet bij wie u moet zijn: bel of mail gerust."
      />

      <Section>
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

        <div className="grid grid-cols-[1fr_400px] gap-14 max-lg:grid-cols-1">
          <Card className="p-10 max-sm:p-6">
            <h2>Stuur ons een bericht</h2>
            <p className="mt-3 leading-[1.6em]">
              Hoe concreter uw omschrijving, hoe scherper wij kunnen antwoorden. Vermeld
              bij voorkeur het type gebouw, het aantal tappunten en of u prioritaire
              instelling bent.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Card>

          <aside className="grid content-start gap-6">
            <Card className="p-8 max-sm:p-6">
              <h2 className="text-[20px]">Direct contact</h2>
              <dl className="mt-6 grid gap-5 text-[15px]">
                <div>
                  <dt className="text-neutral-500">Telefoon</dt>
                  <dd className="mt-1">
                    <a href={site.phoneHref} className="font-semibold text-primary">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Mobiel, ook buiten kantooruren</dt>
                  <dd className="mt-1">
                    <a href={site.mobileHref} className="font-semibold text-primary">
                      {site.mobile}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-500">E-mail</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all font-semibold text-primary"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Bezoekadres</dt>
                  <dd className="mt-1 leading-[1.6em]">
                    {site.legalName}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.postalCode} {site.address.city}
                  </dd>
                </div>
              </dl>
              <div className="divider my-7" />
              <a
                href={site.routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-semibold text-primary"
              >
                Route plannen
              </a>
            </Card>

            <Card className="border-primary/20 bg-secondary-100 p-8 max-sm:p-6">
              <h2 className="text-[20px]">Spoed bij een uitbraak</h2>
              <p className="mt-3 text-[15px] leading-[1.6em]">
                Bij een aangetoonde overschrijding voeren wij indien nodig binnen 24 uur
                een desinfectie uit. Bel dan direct, ook buiten kantooruren.
              </p>
              <a
                href={site.mobileHref}
                className="mt-5 inline-block text-[20px] font-semibold text-primary"
              >
                {site.mobile}
              </a>
            </Card>

            <Card className="p-8 max-sm:p-6">
              <h2 className="text-[20px]">Werkgebied</h2>
              <p className="mt-3 text-[15px] leading-[1.6em]">
                Wij werken vanuit {site.address.city} in heel Nederland, van Groningen tot
                Zeeuws-Vlaanderen. Voor grotere projecten plannen wij meerdere
                aaneengesloten dagen in.
              </p>
            </Card>
          </aside>
        </div>
      </Section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Clean Water Systems",
          url: `${site.url}/contact`,
          mainEntity: { "@id": `${site.url}/#organization` },
        }}
      />
    </>
  );
}
