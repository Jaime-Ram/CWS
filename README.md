# Clean Water Systems — SEO-website

Nieuwe, SEO-gerichte website voor Clean Water Systems B.V. (adviesbureau voor
waterinstallaties), gebouwd op het visuele systeem van het Investflow Webflow-template.

## Stack

- Next.js 15 (App Router) met React 19
- Tailwind CSS v4 (design-tokens uit het Investflow-template in `src/app/globals.css`)
- TypeScript
- Volledig statisch gegenereerd, behalve `/api/contact`

## Aan de slag

```bash
npm install
npm run dev      # http://localhost:3111
npm run build
npm run start
```

## Structuur

```
src/
  app/                     routes (App Router)
    diensten/[slug]        12 dienstpagina's
    branches/[slug]        8 branchepagina's
    kenniscentrum/[slug]   5 kennisartikelen
    api/contact            formulierafhandeling
    sitemap.ts robots.ts   automatisch gegenereerd
  components/
    Visual.tsx             16 schematische SVG-illustraties (vervangen fotografie)
    blocks.tsx             kaarten, badges, stats, milestones, featured/CTA-blokken
    Tabs.tsx               accordion-tabs, kaart-tabs, genummerde accordion, slider
    Hero / HeroSplit / HeroCardSplit   drie hero-varianten uit het template
    Header, TopBar, Footer, ContactForm, Newsletter, Faq, CtaSection, ui.tsx
  data/                    site.ts, services.ts, branches.ts, articles.ts  <- alle content
  lib/seo.ts               metadata-helpers en schema.org
```

Alle teksten staan in `src/data/`. Een nieuwe dienst, branche of artikel toevoegen
betekent één object toevoegen aan de betreffende array; de pagina, de navigatie, de
footer, de interne links en de sitemap volgen automatisch.

## Componenten uit het template

Overgenomen uit Investflow: hero v1 (donker, afgerond), hero v2 (split met beeld),
contact-hero (donkere kaart + formulier), notification bar, logo-marquee, stats-cards
met accentcijfer, portfolio-cards v1 en v3 (donkere kaarten met visual), team-card v2,
features-v2 tabs, genummerde accordion, office-tabs, featured blog v1 met image-left
items, milestone-timeline, testimonial-cards v1 en slider v2, card-cta, cta-v5
nieuwsbrief en de blog-categorie-pills.

Elke paginasoort gebruikt een andere combinatie, zodat home, overzichten, detailpagina's,
artikelen, contact en FAQ visueel van elkaar verschillen.

## Design-tokens

De kleuren, radii, spacing en typeschaal komen uit het Investflow-template en staan
in het `@theme`-blok van `src/app/globals.css`.

| Token | Waarde |
| --- | --- |
| Primair | `#2365ff` |
| Primair donker | `#1d36b6` |
| Accent (water) | `#2db2ff` |
| Donker vlak | `#001035` |
| Lichte vlakken | `#f1f4ff` |
| Font | Inter Tight |
| Container | 1208 px |
| Sectiepadding | 100 px |

## SEO

- Per pagina een eigen `title` (max 63 tekens incl. merknaam) en `description` (80-160 tekens)
- Canonical URL op elke pagina
- `sitemap.xml` en `robots.txt` worden gegenereerd uit de datalaag
- Schema.org: `ProfessionalService`, `WebSite`, `Service`, `FAQPage`, `Article`,
  `BreadcrumbList`, `ContactPage`, `ItemList`
- Interne linkstructuur: pillar (`/legionellapreventie`) → diensten → branches → artikelen
- Kruimelpaden met gestructureerde data op alle onderliggende pagina's

## Contactformulier

`/api/contact` verstuurt via Resend. Zet in `.env.local`:

```
RESEND_API_KEY=re_...
CONTACT_FROM_EMAIL=website@cleanwatersystems.nl
```

Zonder deze variabelen weigert de route de aanvraag met een duidelijke melding
(telefoonnummer en e-mailadres), zodat er nooit stilzwijgend een aanvraag verdwijnt.

## Nog te doen voor livegang

- Fotografie toevoegen (nu wordt gewerkt met een gegenereerde waterachtergrond)
- Content juridisch laten toetsen door de eigenaar (normen, frequenties, verplichtingen)
- Google Analytics / Tag Manager plus cookiebanner koppelen indien gewenst
- 301-redirects instellen vanaf de oude `.html`-URL's naar de nieuwe structuur
- Google Search Console verifiëren en de sitemap indienen
