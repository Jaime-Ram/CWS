export const site = {
  name: "Clean Watersystems",
  legalName: "Clean Watersystems B.V.",
  tagline: "Adviesbureau voor waterinstallaties",
  url: "https://www.cleanwatersystems.nl",
  founded: "2008",
  description:
    "Clean Watersystems is specialist in legionellapreventie, BRL 6010 risicoanalyses, beheersplannen en waterveiligheid. Sinds 2008 actief in heel Nederland.",
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

export const nav = [
  { label: "Legionellapreventie", href: "/legionellapreventie" },
  { label: "Diensten", href: "/diensten" },
  { label: "Branches", href: "/branches" },
  { label: "Kenniscentrum", href: "/kenniscentrum" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
] as const;
