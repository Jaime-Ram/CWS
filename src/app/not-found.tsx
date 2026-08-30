import Hero from "@/components/Hero";
import { PrimaryButton, SecondaryButton, Section } from "@/components/ui";

export const metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Hero
        compact
        eyebrow="404"
        title="Deze pagina bestaat niet meer"
        text="Mogelijk is de pagina verplaatst of hebt u een verouderde link gevolgd. Via onderstaande knoppen komt u snel weer op weg."
        actions={
          <>
            <PrimaryButton href="/">Naar de homepage</PrimaryButton>
            <SecondaryButton href="/diensten" variant="dark">
              Bekijk onze diensten
            </SecondaryButton>
          </>
        }
      />
      <Section>
        <p className="text-center">
          Zoekt u iets specifieks? Bel gerust, dan wijzen wij u direct de weg.
        </p>
      </Section>
    </>
  );
}
