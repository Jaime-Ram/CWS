export type Branch = {
  slug: string;
  name: string;
  shortName: string;
  priority: boolean;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  intro: string;
  risks: { title: string; text: string }[];
  obligations: string[];
  approach: string;
  services: string[];
  image: string;
  imageAlt: string;
};

export const branches: Branch[] = [
  {
    slug: "hotels",
    name: "Hotels, pensions en B&B's",
    shortName: "Hotels",
    priority: true,
    metaTitle: "Legionellapreventie voor hotels en B&B's",
    metaDescription:
      "Legionellabeheer voor hotels, pensions en B&B's. Risicoanalyse BRL 6010, beheersplan, halfjaarlijkse monstername en werk buiten de drukke uren.",
    keywords: [
      "legionella hotel",
      "legionellapreventie hotel",
      "risicoanalyse hotel legionella",
      "legionella B&B",
    ],
    h1: "Legionellapreventie voor hotels, pensions en B&B's",
    intro:
      "Hotels zijn prioritaire instelling. Dat betekent een verplichte risicoanalyse, een beheersplan en halfjaarlijkse bemonstering. De grootste praktische uitdaging is de bezettingsgraad: kamers die weken leegstaan zijn precies de kamers waar het water stilstaat.",
    risks: [
      {
        title: "Leegstaande kamers",
        text: "Een kamer die twee weken niet verkocht wordt, heeft een douche waar het water op kamertemperatuur stilstaat. Dat is de meest voorkomende bron van overschrijdingen in de hotellerie.",
      },
      {
        title: "Lange leidingen naar eindkamers",
        text: "In gebouwen met lange gangen duurt het bij de laatste kamer het langst voordat er warm water komt. Precies daar zakt de temperatuur het diepst weg.",
      },
      {
        title: "Seizoensluiting",
        text: "Na een winterstop of een verbouwing moet het net volledig worden doorgespoeld voordat de eerste gast onder de douche stapt.",
      },
      {
        title: "Wellness en sauna",
        text: "Een badinrichting op het terrein voegt een eigen risicoprofiel toe, met bubbelbaden en douches als belangrijkste aerosolbronnen.",
      },
    ],
    obligations: [
      "Legionella risicoanalyse door een BRL 6010 gecertificeerd bureau",
      "Beheersplan met per tappunt vastgelegde maatregelen",
      "Aantoonbare uitvoering van het beheersplan in een logboek",
      "Minimaal twee keer per jaar geaccrediteerde monstername",
      "Melding bij de Inspectie Leefomgeving en Transport boven 1000 kve/l",
    ],
    approach:
      "Wij plannen ons werk buiten de check-in-uren en werken kamerblok voor kamerblok, zodat u geen kamers uit de verkoop hoeft te halen. Voor het spoelregime maken wij een schema dat uw huishoudelijke dienst zelf kan uitvoeren, gekoppeld aan de bezettingslijst.",
    image: "/images/fotos/hotel-badkamer.jpg",
    imageAlt: "Badkamer in een hotelkamer",
    services: [
      "risicoanalyse-en-beheersplan",
      "legionella-watermonsters",
      "uitvoering-beheersmaatregelen",
      "reiniging-en-desinfectie",
    ],
  },
  {
    slug: "campings-en-recreatie",
    name: "Campings, vakantieparken en jachthavens",
    shortName: "Recreatie",
    priority: true,
    metaTitle: "Legionellapreventie camping en park",
    metaDescription:
      "Legionellabeheer voor campings, vakantieparken en jachthavens. Risicoanalyse BRL 6010, seizoensopstart, sanitairgebouwen en verplichte bemonstering.",
    keywords: [
      "legionella camping",
      "legionellapreventie vakantiepark",
      "legionella jachthaven",
      "risicoanalyse camping",
    ],
    h1: "Legionellapreventie voor campings, vakantieparken en jachthavens",
    intro:
      "Recreatiebedrijven met logies zijn prioritaire instelling. De combinatie van seizoensgebruik, lange leidingtracés over het terrein en sanitairgebouwen die maanden leegstaan maakt legionellabeheer hier bewerkelijker dan gemiddeld.",
    risks: [
      {
        title: "Seizoensopstart",
        text: "Een leidingnet dat de hele winter heeft stilgestaan, is bij opening de grootste risicofactor van het jaar. Zonder een volledige spoeling en controle begint u het seizoen met een besmet net.",
      },
      {
        title: "Leidingen in de grond",
        text: "Koudwaterleidingen die ondiep over het terrein lopen, warmen in de zomer op tot boven de 25 graden. Daarmee is de belangrijkste beheersmaatregel voor koud water weggevallen.",
      },
      {
        title: "Sanitairgebouwen buiten het hoogseizoen",
        text: "Douches in een gebouw dat alleen in de vakantie open is, staan de rest van het jaar stil. Spoelen tijdens de sluiting is de enige manier om dat te ondervangen.",
      },
      {
        title: "Watertappunten en vulpunten",
        text: "Vulpunten voor caravans en boten, plus tuinslangen en afspuitpunten, vragen aandacht voor terugstroombeveiliging.",
      },
    ],
    obligations: [
      "Legionella risicoanalyse volgens BRL 6010",
      "Beheersplan afgestemd op het seizoenspatroon",
      "Spoelregime tijdens sluiting en bij heropening",
      "Halfjaarlijkse geaccrediteerde monstername",
      "Logboek dat bij inspectie direct te overleggen is",
    ],
    approach:
      "Wij plannen het zwaartepunt van het werk in de weken voor de opening, zodat u met een schoon en gecontroleerd net begint. Voor terreinen met veel afgelegen tappunten maken wij een spoelroute die uw eigen technische dienst in een vaste ronde kan lopen.",
    image: "/images/fotos/vakantiepark.jpg",
    imageAlt: "Vakantiepark met sanitairvoorzieningen",
    services: [
      "risicoanalyse-en-beheersplan",
      "reiniging-en-desinfectie",
      "legionella-watermonsters",
      "uitvoering-beheersmaatregelen",
    ],
  },
  {
    slug: "zorginstellingen",
    name: "Ziekenhuizen en zorginstellingen",
    shortName: "Zorg",
    priority: true,
    metaTitle: "Legionellapreventie in de zorg",
    metaDescription:
      "Legionellabeheer voor ziekenhuizen, verpleeghuizen en zorginstellingen. Risicoanalyse BRL 6010, beheersplan en werken zonder de zorg te verstoren.",
    keywords: [
      "legionella zorginstelling",
      "legionella ziekenhuis",
      "legionellapreventie verpleeghuis",
      "risicoanalyse zorg legionella",
    ],
    h1: "Legionellapreventie voor ziekenhuizen en zorginstellingen",
    intro:
      "Nergens zijn de gevolgen van een legionellabesmetting zo ernstig als in de zorg. Bewoners en patiënten hebben vaker een verminderde weerstand, waardoor een infectie die elders mild verloopt hier levensbedreigend kan zijn. Daarom gelden hier de strengste eisen.",
    risks: [
      {
        title: "Kwetsbare gebruikers",
        text: "Een verminderde afweer verlaagt de drempel waarbij blootstelling tot ziekte leidt. Beheersmaatregelen moeten daarom conservatiever worden ingesteld dan het wettelijk minimum.",
      },
      {
        title: "Leegstaande kamers en afdelingen",
        text: "Een kamer die tussen twee bewoners in leegstaat, of een afdeling die tijdelijk gesloten is, vraagt om een strikt spoelregime.",
      },
      {
        title: "Lauwwatermenging",
        text: "Thermostatische mengkranen die om verbrandingsgevaar te voorkomen op een lagere temperatuur staan, creëren een leidingdeel op de ideale groeitemperatuur.",
      },
      {
        title: "Medische en verzorgende toepassingen",
        text: "Douchebrancards, bubbelbaden, luchtbevochtigers en spoelbakken zijn stuk voor stuk aerosolbronnen die apart beoordeeld moeten worden.",
      },
    ],
    obligations: [
      "Legionella risicoanalyse door een BRL 6010 gecertificeerd bureau",
      "Beheersplan met extra aandacht voor kwetsbare afdelingen",
      "Aantoonbaar uitgevoerd spoel- en meetregime",
      "Minimaal halfjaarlijkse geaccrediteerde monstername",
      "Directe maatregelen en melding bij een ernstige overschrijding",
    ],
    approach:
      "Wij werken in de zorg altijd in overleg met de technische dienst en de afdeling infectiepreventie. Werkzaamheden worden gefaseerd uitgevoerd, zodat er nooit een hele vleugel tegelijk zonder water zit. Bij overschrijdingen adviseren wij over tijdelijke endpoint-filters, zodat kwetsbare bewoners beschermd zijn terwijl de oorzaak wordt aangepakt.",
    image: "/images/fotos/zorg-gang.jpg",
    imageAlt: "Gang in een zorginstelling",
    services: [
      "risicoanalyse-en-beheersplan",
      "legionella-watermonsters",
      "uitvoering-beheersmaatregelen",
      "legionella-douchekoppen",
    ],
  },
  {
    slug: "zwembaden-en-sauna",
    name: "Zwembaden, sauna's en badinrichtingen",
    shortName: "Zwembaden",
    priority: true,
    metaTitle: "Legionellapreventie zwembad en sauna",
    metaDescription:
      "Legionellabeheer voor zwembaden, sauna's en badinrichtingen. Risicoanalyse BRL 6010, douches, bubbelbaden en verplichte bemonstering.",
    keywords: [
      "legionella zwembad",
      "legionella sauna",
      "badinrichting legionella",
      "legionellapreventie zwembad",
    ],
    h1: "Legionellapreventie voor zwembaden, sauna's en badinrichtingen",
    intro:
      "Een gebouw met een badinrichting is prioritaire instelling. Dat is niet zonder reden: de combinatie van veel douches, warme ruimtes en aerosolvormende voorzieningen maakt dit een van de risicovolste omgevingen die er is.",
    risks: [
      {
        title: "Douchestraten",
        text: "Veel tappunten dicht bij elkaar, waarvan een deel structureel minder gebruikt wordt. Juist die minder gebruikte punten vormen het risico.",
      },
      {
        title: "Bubbelbaden en whirlpools",
        text: "Deze produceren aerosolen in grote hoeveelheden en werken op een temperatuur die legionellagroei bevordert. Ze vragen een eigen beheersregime.",
      },
      {
        title: "Warme technische ruimtes",
        text: "Koudwaterleidingen die door een warme ruimte lopen, komen boven de 25 graden. Dat is een van de meest voorkomende structurele tekortkomingen.",
      },
      {
        title: "Sluitingsperiodes",
        text: "Een onderhoudsstop of verbouwing betekent stilstaand water in het hele net. Voor heropening is een volledige spoeling nodig.",
      },
    ],
    obligations: [
      "Legionella risicoanalyse volgens BRL 6010 voor de leidingwaterinstallatie",
      "Beheersplan inclusief de aerosolvormende voorzieningen",
      "Aantoonbare uitvoering en registratie",
      "Halfjaarlijkse geaccrediteerde monstername",
      "Aparte beoordeling van bubbelbaden en soortgelijke voorzieningen",
    ],
    approach:
      "Wij combineren de inspectie van de drinkwaterinstallatie met een beoordeling van alle punten waar aerosolen ontstaan. Werkzaamheden voeren we uit tijdens sluitingsuren of geplande onderhoudsstops, zodat uw exploitatie doorloopt.",
    image: "/images/fotos/zwembad.jpg",
    imageAlt: "Overdekt zwembad",
    services: [
      "risicoanalyse-en-beheersplan",
      "reiniging-en-desinfectie",
      "legionella-watermonsters",
      "keerklepcontrole",
    ],
  },
  {
    slug: "scholen-en-kinderopvang",
    name: "Scholen en kinderopvang",
    shortName: "Onderwijs",
    priority: false,
    metaTitle: "Legionellapreventie op scholen",
    metaDescription:
      "Legionellabeheer voor scholen en kinderopvang. Vrijwillige risicoanalyse, spoelplan voor de schoolvakanties en controle van gymzaaldouches.",
    keywords: [
      "legionella school",
      "legionella gymzaal douches",
      "legionellapreventie kinderopvang",
      "zorgplicht drinkwater school",
    ],
    h1: "Legionellapreventie voor scholen en kinderopvang",
    intro:
      "Scholen zijn meestal geen prioritaire instelling en hebben daardoor geen wettelijk verplichte risicoanalyse. De zorgplicht uit de Drinkwaterwet geldt wel onverkort: als eigenaar bent u verantwoordelijk voor de kwaliteit van het water uit uw kranen. En met zes weken zomervakantie heeft een schoolgebouw een risicoprofiel dat je niet mag negeren.",
    risks: [
      {
        title: "Schoolvakanties",
        text: "Zes weken stilstand in de zomer, plus meerdere kortere vakanties, betekent dat het water in uw net regelmatig lang blijft staan op een gunstige groeitemperatuur.",
      },
      {
        title: "Gymzaaldouches",
        text: "Douches die alleen bij bepaalde lessen worden gebruikt en soms hele periodes buiten gebruik blijven, zijn het klassieke risicopunt in een schoolgebouw.",
      },
      {
        title: "Lokalen die niet meer gebruikt worden",
        text: "Bij krimp of herindeling blijven kranen achter in ruimtes die niemand meer betreedt. Dat zijn feitelijk dode leidingen.",
      },
      {
        title: "Buitenkranen en schoolpleinen",
        text: "Vulpunten, tuinslangen en waterspeelplaatsen vragen om deugdelijke terugstroombeveiliging.",
      },
    ],
    obligations: [
      "Zorgplicht als eigenaar van een collectief leidingnet",
      "Installatie moet voldoen aan NEN 1006 en de waterwerkbladen",
      "Periodieke controle van terugstroombeveiliging",
      "Aantoonbaar beheer wordt sterk aanbevolen, ook zonder verplichting",
    ],
    approach:
      "Wij maken een compacte risicoanalyse en vertalen die naar een spoelplan dat uw conciërge in een uur per week kan uitvoeren. Voor de zomervakantie leveren we een opstartprotocol: wat er in de laatste week voor de eerste schooldag gespoeld en gemeten moet worden.",
    image: "/images/fotos/school-entree.jpg",
    imageAlt: "Schoolgebouw",
    services: [
      "risicoanalyse-en-beheersplan",
      "keerklepcontrole",
      "legionella-watermonsters",
      "uitvoering-beheersmaatregelen",
    ],
  },
  {
    slug: "vve-en-vastgoedbeheer",
    name: "VvE's, woningcorporaties en vastgoedbeheer",
    shortName: "Vastgoed",
    priority: false,
    metaTitle: "Legionellapreventie voor VvE's",
    metaDescription:
      "Legionellabeheer voor VvE's, woningcorporaties en vastgoedbeheerders. Collectieve installaties, leegstand, mutatiewoningen en aantoonbare zorgplicht.",
    keywords: [
      "legionella VvE",
      "legionella woningcorporatie",
      "legionella vastgoedbeheer",
      "collectieve drinkwaterinstallatie VvE",
    ],
    h1: "Legionellapreventie voor VvE's, corporaties en vastgoedbeheerders",
    intro:
      "Beheert u een gebouw met een collectieve warmwatervoorziening of een gedeeld leidingnet, dan bent u eigenaar van een collectief leidingnet. Daarmee valt u onder de zorgplicht uit de Drinkwaterwet, ook als er geen verplichte risicoanalyse geldt.",
    risks: [
      {
        title: "Mutatiewoningen",
        text: "Een appartement dat tussen twee huurders in leegstaat, soms maanden, levert stilstaand water op in een strang die met de rest van het gebouw verbonden is.",
      },
      {
        title: "Collectieve warmwaterlevering",
        text: "Bij blokverwarming of een warmtenet met centrale warmwaterbereiding is de temperatuur in de circulatieleiding bepalend voor het hele gebouw.",
      },
      {
        title: "Gemeenschappelijke ruimtes",
        text: "Kranen in fietsenstallingen, bergingen en gemeenschappelijke keukens worden zelden gebruikt maar staan wel aan het net.",
      },
      {
        title: "Onduidelijk eigendom",
        text: "De grens tussen collectief en privé is niet altijd scherp. Dat leidt ertoe dat niemand zich verantwoordelijk voelt voor delen van de installatie.",
      },
    ],
    obligations: [
      "Zorgplicht voor de kwaliteit van het geleverde drinkwater",
      "Installatie conform NEN 1006 en de waterwerkbladen",
      "Periodieke controle van terugstroombeveiliging en warmwatertoestellen",
      "Vastleggen wie verantwoordelijk is voor welk deel van de installatie",
    ],
    approach:
      "Wij brengen eerst helder in kaart waar het collectieve deel eindigt en het privédeel begint, want zonder die afbakening blijft het beheer onduidelijk. Daarna leveren wij een beheersplan dat aansluit op uw MJOP, met vaste jaarlijkse controlemomenten en een protocol voor mutatiewoningen.",
    image: "/images/fotos/appartementen.jpg",
    imageAlt: "Appartementengebouw met een collectieve installatie",
    services: [
      "risicoanalyse-en-beheersplan",
      "keerklepcontrole",
      "sediment-verwijderen-uit-boilers",
      "uitvoering-beheersmaatregelen",
    ],
  },
  {
    slug: "sportaccommodaties",
    name: "Sportaccommodaties en verenigingen",
    shortName: "Sport",
    priority: false,
    metaTitle: "Legionellapreventie sportaccommodaties",
    metaDescription:
      "Legionellabeheer voor sportclubs, sporthallen en kleedkamers. Douches met piekgebruik, zomerstops en een werkbaar spoelplan voor vrijwilligers.",
    keywords: [
      "legionella sportvereniging",
      "legionella kleedkamer douches",
      "legionella sporthal",
      "legionellapreventie sportclub",
    ],
    h1: "Legionellapreventie voor sportaccommodaties en verenigingen",
    intro:
      "Kleedkamerdouches hebben een lastig gebruikspatroon: op zaterdag draaien ze uren achter elkaar, daarna staan ze vijf dagen stil. En in de zomerstop staat het hele gebouw maanden droog. Precies de omstandigheden waarin legionella zich ontwikkelt.",
    risks: [
      {
        title: "Piekgebruik en lange stilstand",
        text: "Intensief gebruik in het weekend en stilstand doordeweeks geeft telkens opnieuw de kans op groei in de leidingen naar de douchekoppen.",
      },
      {
        title: "De zomerstop",
        text: "Twee tot drie maanden zonder gebruik betekent dat het net bij de start van het seizoen volledig moet worden doorgespoeld voordat de eerste speler doucht.",
      },
      {
        title: "Beperkte technische bemensing",
        text: "Veel verenigingen draaien op vrijwilligers. Een beheersplan dat te ingewikkeld is, wordt niet uitgevoerd.",
      },
      {
        title: "Beregening en veldonderhoud",
        text: "Aansluitingen voor sproeiers en veldbewatering vragen een deugdelijke terugstroombeveiliging.",
      },
    ],
    obligations: [
      "Zorgplicht voor de waterkwaliteit in het gebouw",
      "Installatie conform NEN 1006 en de waterwerkbladen",
      "Periodieke controle van keerkleppen en warmwatertoestellen",
      "Bij een aangesloten badinrichting gelden wel de eisen voor prioritaire instellingen",
    ],
    approach:
      "Wij houden het bewust simpel: een spoelschema van één A4 dat aan de deur van de technische ruimte hangt, met een aftekenlijst. Voor de start van het seizoen komen wij langs voor de opstartspoeling en de controle, zodat de vereniging zelf alleen het wekelijkse werk hoeft te doen.",
    image: "/images/fotos/kleedkamer-douches.jpg",
    imageAlt: "Kleedruimte met lockers en doucheruimte",
    services: [
      "risicoanalyse-en-beheersplan",
      "uitvoering-beheersmaatregelen",
      "keerklepcontrole",
      "legionella-douchekoppen",
    ],
  },
  {
    slug: "industrie-en-productie",
    name: "Industrie, productie en logistiek",
    shortName: "Industrie",
    priority: false,
    metaTitle: "Legionellapreventie in de industrie",
    metaDescription:
      "Legionellabeheer voor industrie, productie en logistiek. Nooddouches, oogspoelvoorzieningen, proceswater en desinfectie zonder productiestilstand.",
    keywords: [
      "legionella industrie",
      "legionella nooddouche",
      "legionella productiebedrijf",
      "desinfectie waterleiding fabriek",
    ],
    h1: "Legionellapreventie voor industrie, productie en logistiek",
    intro:
      "Industriële locaties hebben vaak uitgestrekte leidingnetten, veel zelden gebruikte tappunten en tegelijk de eis dat de productie doorloopt. Wij werken daarom in overleg met uw technische dienst en plannen ingrepen rond uw stops.",
    risks: [
      {
        title: "Nooddouches en oogspoelpunten",
        text: "Veiligheidsvoorzieningen die je hoopt nooit nodig te hebben, staan per definitie stil. Bij gebruik komt er dan water op een mens dat maanden in de leiding heeft gestaan.",
      },
      {
        title: "Lange leidingtracés",
        text: "Op grote terreinen liggen honderden meters leiding naar een handvol tappunten. De verblijftijd van het water is daar per definitie hoog.",
      },
      {
        title: "Warmte in de hal",
        text: "Koudwaterleidingen die door een warme productieruimte lopen, komen ver boven de 25 graden. Isolatie of verlegging is dan de enige oplossing.",
      },
      {
        title: "Kleedruimtes en bedrijfsdouches",
        text: "Afhankelijk van het ploegenrooster worden bepaalde douches maanden niet gebruikt, terwijl ze wel op het net staan.",
      },
    ],
    obligations: [
      "Zorgplicht voor het drinkwater dat u aan uw medewerkers levert",
      "Installatie conform NEN 1006 en de waterwerkbladen",
      "Deugdelijke terugstroombeveiliging bij proceswateraansluitingen",
      "Periodiek doorspoelen en testen van nooddouches",
    ],
    approach:
      "Wij stemmen de planning af op uw onderhoudsstops en werken waar nodig in de nacht of het weekend. Voor nooddouches en oogspoelpunten leveren wij een testschema dat gecombineerd kan worden met uw bestaande veiligheidsrondes.",
    image: "/images/fotos/industrie-installatie.jpg",
    imageAlt: "Industriële installatie met leidingwerk",
    services: [
      "risicoanalyse-en-beheersplan",
      "reiniging-en-desinfectie",
      "keerklepcontrole",
      "legionella-watermonsters",
    ],
  },
];

export const getBranch = (slug: string) => branches.find((b) => b.slug === slug);
