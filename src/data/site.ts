export const site = {
  name: "Clean Water Systems",
  legalName: "Clean Water Systems B.V.",
  tagline: "Adviesbureau voor waterinstallaties",
  url: "https://www.cleanwatersystems.nl",
  founded: "2008",
  description:
    "Clean Water Systems is specialist in legionellapreventie, BRL 6010 risicoanalyses, beheersplannen en waterveiligheid. Sinds 2008 actief in heel Nederland.",
  address: {
    street: "Parelhoenhof 3",
    postalCode: "2872 BC",
    city: "Schoonhoven",
    country: "NL",
  },
  phone: "0182-607675",
  phoneHref: "tel:+31182607675",
  mobile: "06 44 94 87 99",
  mobileHref: "tel:+31644948799",
  email: "info@cleanwatersystems.nl",
  routeUrl: "https://maps.google.com/?q=Parelhoenhof+3,+2872+BC+Schoonhoven",
  // Cijfers zoals op de oude reviewpagina (archief 3 sep 2026).
  reviews: {
    url: "https://www.google.com/search?q=Clean+Water+Systems+-+Adviesbureau+voor+waterinstallaties",
    rating: "4,9",
    count: "7",
  },
  socials: {
    linkedin:
      "https://www.linkedin.com/in/clean-water-systems-viktoriya-copier-761ab63b0/",
    youtube: "https://www.youtube.com/channel/UCmJ5oT7GAlu6drtkdvx1WRQ",
  },
  stats: [
    { value: 2008, suffix: "", label: "Actief sinds" },
    { value: 100, suffix: "%", label: "Landelijke dekking" },
    { value: 24, suffix: "u", label: "Respons bij een uitbraak" },
  ],
  certifications: [
    "BRL 6010",
    "BRL-K14032",
    "NEN 1006",
    "Waterwerkblad 1.4G",
    "Kiwa-ATA middelen",
    "Drinkwaterbesluit",
    "Geaccrediteerd laboratorium",
  ],
} as const;

/** Hoofdmenu, in dezelfde opbouw als de oude site. */
export const menu = [
  {
    label: "Legionellapreventie",
    href: "/legionellapreventie",
    items: [
      { label: "Legionellapreventie", href: "/legionellapreventie" },
      { label: "Risico inventarisatie en beheersplan", href: "/risico-inventarisatie-en-beheersplan" },
      { label: "Keerklepcontrole", href: "/keerklepcontrole" },
      { label: "Sediment verwijderen uit boilers", href: "/sediment-verwijderen-uit-boilers" },
      { label: "Legionella douchekoppen", href: "/legionella-douchekoppen" },
      { label: "Legionella watermonsters", href: "/legionella-watermonsters" },
    ],
  },
  {
    label: "Diensten",
    href: "/diensten",
    items: [
      { label: "Reiniging en desinfectie", href: "/reiniging-en-desinfectie-van-een-drinkwaterleidingsysteem" },
      { label: "Boiler reiniging", href: "/boiler-reiniging" },
      { label: "Thermisch desinfecteren", href: "/thermisch-desinfecteren-van-een-drinkwaterleidingsysteem" },
      { label: "Uitvoering beheersmaatregelen", href: "/uitvoering-beheersmaatregelen" },
      { label: "Aanpassen drinkwaterinstallatie", href: "/aanpassen-drinkwaterinstallatie" },
      { label: "Stinkend drinkwater verhelpen", href: "/stinkend-drinkwater-uit-uw-waterleidingsysteem-verhelpen" },
      { label: "Koeltoren reinigen en desinfecteren", href: "/koeltoren-reinigen-en-desinfecteren" },
    ],
  },
  { label: "Veelgestelde vragen", href: "/veelgestelde-vragen" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;

/** Alle dienst- en infopagina's, voor het zijmenu en de footer. */
export const serviceLinks = [...menu[0].items, ...menu[1].items];
