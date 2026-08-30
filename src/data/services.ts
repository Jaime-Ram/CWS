export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "h3"; text: string };

export type Service = {
  slug: string;
  name: string;
  navName: string;
  eyebrow: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  intro: string;
  usps: string[];
  sections: { h2: string; blocks: Block[] }[];
  faqs: { q: string; a: string }[];
  related: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "risicoanalyse-en-beheersplan",
    name: "Risicoanalyse en beheersplan (BRL 6010)",
    navName: "Risicoanalyse & beheersplan",
    eyebrow: "BRL 6010",
    summary:
      "Volledige legionella risicoanalyse van uw drinkwaterinstallatie volgens BRL 6010, met een werkbaar beheersplan en logboek.",
    metaTitle: "Risicoanalyse & beheersplan BRL 6010",
    metaDescription:
      "Legionella risicoanalyse en beheersplan volgens BRL 6010. Inspectie ter plaatse, heldere rapportage, werkbaar beheersplan en logboek. Landelijk, sinds 2008.",
    keywords: [
      "legionella risicoanalyse",
      "BRL 6010",
      "risico inventarisatie en beheersplan",
      "legionella beheersplan",
      "risicoanalyse drinkwaterinstallatie",
      "prioritaire instelling legionella",
    ],
    h1: "Legionella risicoanalyse en beheersplan volgens BRL 6010",
    intro:
      "De risicoanalyse is het fundament onder uw legionellabeheer. Wij brengen uw complete drinkwaterinstallatie in kaart, benoemen de werkelijke risico's en vertalen die naar een beheersplan waar uw technische dienst morgen mee vooruit kan.",
    usps: [
      "Inspectie ter plaatse van de volledige installatie",
      "Rapportage volgens BRL 6010 en ISSO 55.1",
      "Beheersplan met concrete beheersmaatregelen per tappunt",
      "Inclusief tekeningen, tappuntenlijst en logboekopzet",
    ],
    sections: [
      {
        h2: "Wat is een legionella risicoanalyse?",
        blocks: [
          {
            type: "p",
            text: "Een legionella risicoanalyse is een systematisch onderzoek van uw collectieve drinkwaterinstallatie. Een adviseur loopt de installatie fysiek na, van de watermeter tot het laatste tappunt, en beoordeelt waar legionellabacteriën zich kunnen vermeerderen en verspreiden. Denk aan dode leidingen, te lange wachttijden op warm water, menging van koud en warm water, onvoldoende doorstroming en onjuiste temperaturen.",
          },
          {
            type: "p",
            text: "De analyse eindigt niet bij een lijst met tekortkomingen. Elk geconstateerd risico krijgt een beheersmaatregel: een technische aanpassing, een spoelregime, een temperatuurcontrole of een combinatie daarvan. Die maatregelen samen vormen het beheersplan.",
          },
          {
            type: "h3",
            text: "Wat wij tijdens de analyse beoordelen",
          },
          {
            type: "list",
            items: [
              "Opbouw en materiaalkeuze van het leidingnet",
              "Temperatuurverloop in koud- en warmwatercircuits",
              "Dode leidingen, blindleidingen en zelden gebruikte tappunten",
              "Warmwatertoestellen, boilers en voorraadvaten",
              "Terugstroombeveiliging en keerkleppen conform NEN 1006",
              "Aangesloten toestellen zoals sprinklers, brandslanghaspels en onthardingsinstallaties",
              "Bestaande registratie, logboeken en monsterresultaten",
            ],
          },
        ],
      },
      {
        h2: "Voor wie is een risicoanalyse verplicht?",
        blocks: [
          {
            type: "p",
            text: "Het Drinkwaterbesluit wijst een aantal typen locaties aan als prioritaire instelling. Die zijn verplicht om een legionella risicoanalyse en een beheersplan te hebben, het beheersplan uit te voeren en periodiek te bemonsteren. De Inspectie Leefomgeving en Transport houdt hierop toezicht.",
          },
          {
            type: "list",
            items: [
              "Ziekenhuizen en zorginstellingen waar kwetsbare mensen verblijven",
              "Hotels, pensions, bed and breakfasts en groepsaccommodaties",
              "Campings, jachthavens en andere logiesvoorzieningen",
              "Gebouwen met een badinrichting, zoals zwembaden en sauna's",
              "Justitiële inrichtingen en asielzoekerscentra",
              "Truckstops en wegrestaurants met douchevoorzieningen",
            ],
          },
          {
            type: "p",
            text: "Bent u geen prioritaire instelling? Dan geldt nog steeds de zorgplicht uit de Drinkwaterwet: als eigenaar van een collectief leidingnet bent u verantwoordelijk voor deugdelijk drinkwater. Voor kantoren, scholen, VvE's, sportaccommodaties en woongebouwen adviseren wij daarom een vrijwillige risicoanalyse. Die is doorgaans compacter en daarmee goedkoper, maar geeft u wel de onderbouwing die u nodig heeft als er iets misgaat.",
          },
        ],
      },
      {
        h2: "Zo werkt het bij ons",
        blocks: [
          {
            type: "h3",
            text: "1. Voorbereiding",
          },
          {
            type: "p",
            text: "Wij vragen vooraf tekeningen, eerdere rapportages en monsterresultaten op. Zo verliezen we op locatie geen tijd en weten we welke aandachtspunten er al liggen.",
          },
          { type: "h3", text: "2. Inspectie op locatie" },
          {
            type: "p",
            text: "Een BRL 6010 adviseur loopt de installatie na, meet temperaturen, inventariseert alle tappunten en legt de situatie fotografisch vast. Bij grotere gebouwen werken we per bouwdeel, zodat het overzicht bewaard blijft.",
          },
          { type: "h3", text: "3. Rapportage en beheersplan" },
          {
            type: "p",
            text: "U ontvangt een rapport met de geconstateerde risico's, een prioritering en per punt een concrete maatregel. Het bijbehorende beheersplan beschrijft wie wat wanneer doet, inclusief spoelschema, temperatuurmetingen en monsternamepunten.",
          },
          { type: "h3", text: "4. Uitvoering en nazorg" },
          {
            type: "p",
            text: "Desgewenst voeren wij de beheersmaatregelen zelf uit, verzorgen wij de periodieke monstername en actualiseren wij de risicoanalyse bij wijzigingen aan de installatie.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Hoe lang is een legionella risicoanalyse geldig?",
        a: "Er zit geen harde houdbaarheidsdatum op, maar de analyse moet de werkelijkheid blijven beschrijven. Bij een verbouwing, uitbreiding, functiewijziging of een structurele overschrijding actualiseert u de risicoanalyse. Veel beheerders laten de analyse daarnaast elke drie tot vijf jaar tegen het licht houden.",
      },
      {
        q: "Wat kost een risicoanalyse en beheersplan?",
        a: "Dat hangt vooral af van het aantal tappunten, het aantal bouwlagen en de complexiteit van de installatie. Wij maken een vaste prijs op basis van een korte inventarisatie vooraf, zodat u niet voor verrassingen komt te staan.",
      },
      {
        q: "Mag ik de risicoanalyse zelf opstellen?",
        a: "Voor prioritaire instellingen moet de risicoanalyse worden opgesteld door een bedrijf dat gecertificeerd is voor legionellapreventie-advisering volgens BRL 6010. Het uitvoeren van de beheersmaatregelen mag u wel zelf doen, mits dit aantoonbaar en volgens het beheersplan gebeurt.",
      },
    ],
    related: [
      "legionella-watermonsters",
      "uitvoering-beheersmaatregelen",
      "keerklepcontrole",
    ],
    featured: true,
  },
  {
    slug: "reiniging-en-desinfectie",
    name: "Reiniging en desinfectie van drinkwaterinstallaties",
    navName: "Reiniging en desinfectie",
    eyebrow: "Chemische desinfectie",
    summary:
      "Chemische reiniging en desinfectie van uw complete leidingnet, met Kiwa-ATA goedgekeurde middelen en een gegarandeerd resultaat.",
    metaTitle: "Reiniging en desinfectie waterleiding",
    metaDescription:
      "Chemische reiniging en desinfectie van waterleidingsystemen volgens BRL-K14032. Kiwa-ATA middelen, fysieke onderbreking, ook 's avonds en in het weekend.",
    keywords: [
      "reiniging en desinfectie drinkwaterinstallatie",
      "chemische desinfectie",
      "desinfecteren waterleiding",
      "legionella desinfectie",
      "chemisch desinfecteren waterleidingsysteem",
      "BRL-K14032",
    ],
    h1: "Reiniging en desinfectie van een drinkwaterleidingsysteem",
    intro:
      "Bij een legionella-overschrijding of na werkzaamheden aan het leidingnet is een chemische reiniging en desinfectie vaak de snelste weg naar schoon water. Wij voeren die uit volgens BRL-K14032, met middelen die Kiwa-ATA goedgekeurd zijn voor contact met drinkwater.",
    usps: [
      "Uitvoering volgens BRL-K14032 en de normen uit BRL 6010",
      "Wettelijk voorgeschreven fysieke onderbreking op de aansluiting",
      "Avond-, nacht- en weekendwerk om uw bedrijfsvoering te ontzien",
      "Van 1 tot 1000 tappunten, met controlemeting achteraf",
    ],
    sections: [
      {
        h2: "Wanneer is desinfectie nodig?",
        blocks: [
          {
            type: "list",
            items: [
              "Bij een overschrijding van de norm van 100 kve/l legionella",
              "Na een langdurige stilstand, bijvoorbeeld leegstand of een seizoenssluiting",
              "Na uitbreiding, ombouw of reparatie van het leidingnet",
              "Bij ingebruikname van een nieuwe installatie",
              "Bij aanhoudende biofilmvorming of verkleuring van het water",
              "Als voorzorgsmaatregel bij een verhoogd risicoprofiel",
            ],
          },
          {
            type: "p",
            text: "Een desinfectie is een beheersmaatregel, geen structurele oplossing. Zit het probleem in de opbouw van de installatie, dan komt de besmetting terug. Daarom koppelen wij een desinfectie altijd aan een oorzaakanalyse, zodat u weet wat er daarna moet gebeuren.",
          },
        ],
      },
      {
        h2: "Hoe wij te werk gaan",
        blocks: [
          {
            type: "p",
            text: "We brengen eerst het leidingnet in kaart en bepalen hoeveel tappunten er zijn, welke toestellen aangesloten zitten en welke delen apart moeten worden behandeld. Vervolgens sluiten wij aan via een fysieke onderbreking, zodat er geen desinfectiemiddel in het openbare net terecht kan komen. Dat is niet alleen wettelijk voorgeschreven, het is ook de enige veilige manier om te werken.",
          },
          {
            type: "p",
            text: "Het middel wordt door het volledige systeem gepompt tot bij elk tappunt de vereiste concentratie is gemeten. Na de voorgeschreven inwerktijd spoelen wij het systeem volledig door en meten wij na, zodat het water weer voldoet aan de eisen voor drinkwater.",
          },
          { type: "h3", text: "Aandachtspunten die wij standaard meenemen" },
          {
            type: "list",
            items: [
              "Boilers en voorraadvaten worden apart behandeld en waar nodig eerst ontdaan van sediment",
              "Thermostatische mengkranen en douchekoppen worden gedemonteerd of gespoeld",
              "Brandslanghaspels, sprinklers en buitenkranen worden meegenomen in het spoelplan",
              "Alle handelingen worden per tappunt geregistreerd voor uw logboek",
            ],
          },
        ],
      },
      {
        h2: "Garantie op het resultaat",
        blocks: [
          {
            type: "p",
            text: "Voldoet uw leidingsysteem aan de eisen uit de BRL 6010, dan geven wij garantie op de desinfectie. Blijkt uit de controlemonsters dat het resultaat niet is behaald, dan komen wij terug. Dat kunnen wij bieden omdat wij vooraf beoordelen of het systeem überhaupt geschikt is voor een succesvolle desinfectie, en dat eerlijk met u bespreken als dat niet zo is.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Hoe lang ligt mijn installatie eruit?",
        a: "Voor een gemiddelde installatie rekenen we op één werkdag. Bij grotere gebouwen of installaties met veel tappunten kan het langer duren. Wij plannen het werk waar mogelijk 's avonds, 's nachts of in het weekend, zodat uw gasten of medewerkers er weinig van merken.",
      },
      {
        q: "Is chemische desinfectie schadelijk voor mijn leidingen?",
        a: "Wij gebruiken uitsluitend Kiwa-ATA goedgekeurde middelen in de voorgeschreven concentratie en inwerktijd. Bij correcte toepassing zijn die geschikt voor de materialen die in Nederlandse drinkwaterinstallaties worden gebruikt. Bij afwijkende materialen stemmen wij de aanpak daarop af.",
      },
      {
        q: "Wat is het verschil met thermische desinfectie?",
        a: "Bij thermische desinfectie wordt het systeem met heet water doorgespoeld, bij chemische desinfectie met een desinfectiemiddel. Thermisch is minder ingrijpend maar vraagt voldoende capaciteit en is niet overal haalbaar. Chemisch werkt ook bij grotere en complexere installaties. Wij adviseren per situatie welke methode het meest kansrijk is.",
      },
    ],
    related: [
      "thermische-desinfectie",
      "boilerreiniging",
      "legionella-watermonsters",
    ],
    featured: true,
  },
  {
    slug: "keerklepcontrole",
    name: "Keerklep- en appendagecontrole",
    navName: "Keerklepcontrole",
    eyebrow: "NEN 1006 / WB 1.4G",
    summary:
      "Jaarlijkse controle van terugstroombeveiligingen en appendages conform NEN 1006 en Waterwerkblad 1.4G, met rapportage per klep.",
    metaTitle: "Keerklepcontrole terugstroombeveiliging",
    metaDescription:
      "Keerklep- en appendagecontrole conform NEN 1006 en Waterwerkblad 1.4G. Controle op terugstroombeveiliging, rapportage per klep en direct herstel mogelijk.",
    keywords: [
      "keerklepcontrole",
      "terugstroombeveiliging",
      "keerklep controle NEN 1006",
      "waterwerkblad 1.4G",
      "appendagecontrole",
    ],
    h1: "Keerklep- en appendagecontrole",
    intro:
      "Een keerklep die niet meer sluit, laat vervuild water terugstromen in uw drinkwaterinstallatie. Wij controleren jaarlijks de werking van alle terugstroombeveiligingen en appendages conform NEN 1006 en Waterwerkblad 1.4G, en herstellen wat niet in orde is.",
    usps: [
      "Controle van alle keerkleppen en beveiligingseenheden",
      "Meetrapport per klep, geschikt voor uw logboek",
      "Direct vervangen of herstellen bij afkeur",
      "Combineerbaar met boilerreiniging en monstername in één bezoek",
    ],
    sections: [
      {
        h2: "Waarom terugstroombeveiliging zo belangrijk is",
        blocks: [
          {
            type: "p",
            text: "Drinkwater hoort maar één kant op te stromen. Zodra de druk in het net wegvalt, bijvoorbeeld bij een leidingbreuk of een grote aftap, kan water uit een toestel terug het leidingnet in worden gezogen. Zonder werkende beveiliging komt water uit een ketel, een sprinklerinstallatie, een onthardingsinstallatie of een buitenkraan dan in het drinkwater terecht.",
          },
          {
            type: "p",
            text: "NEN 1006 en de bijbehorende waterwerkbladen schrijven daarom voor welk type beveiliging bij welke risicocategorie hoort. Waterwerkblad 1.4G legt vast dat u die beveiligingen periodiek moet controleren op goede werking. Voor prioritaire instellingen komt dit bovendien terug in het beheersplan.",
          },
        ],
      },
      {
        h2: "Wat wij controleren",
        blocks: [
          {
            type: "list",
            items: [
              "Keerkleppen achter de watermeter en op verdeelpunten",
              "Beveiligingseenheden bij ketels, boilers en cv-vulcombinaties",
              "Beveiliging bij brandslanghaspels en sprinklerinstallaties",
              "Aansluitingen van onthardings- en doseerinstallaties",
              "Buitenkranen, vulpunten en tapaansluitingen voor apparatuur",
              "Type en categorie van de beveiliging ten opzichte van het werkelijke risico",
            ],
          },
          {
            type: "p",
            text: "Van elke klep leggen wij vast waar die zit, welk type het is, of hij goed sluit en wat de bevinding is. U krijgt een overzicht waarmee u direct kunt aantonen dat de controle is uitgevoerd, plus een advies voor de kleppen die aandacht nodig hebben.",
          },
        ],
      },
      {
        h2: "Afgekeurd? Dan lossen we het meteen op",
        blocks: [
          {
            type: "p",
            text: "Onze monteurs nemen de gangbare keerkleppen en beveiligingen mee. Blijkt een klep niet goed te sluiten, dan vervangen we hem waar mogelijk tijdens hetzelfde bezoek. Dat scheelt u een tweede afspraak en houdt uw installatie in één keer aantoonbaar op orde.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Hoe vaak moet een keerklep gecontroleerd worden?",
        a: "Waterwerkblad 1.4G gaat uit van een jaarlijkse controle van de terugstroombeveiligingen. Voor sommige typen beveiliging of risicovolle toepassingen kan een kortere interval gelden. In uw beheersplan wordt de frequentie voor uw specifieke installatie vastgelegd.",
      },
      {
        q: "Moet ik keerklepcontrole ook doen als ik geen prioritaire instelling ben?",
        a: "De verplichting tot periodieke controle volgt uit NEN 1006 en de waterwerkbladen en geldt voor iedere eigenaar van een leidingwaterinstallatie. De zorgplicht uit de Drinkwaterwet maakt u daarnaast verantwoordelijk voor de kwaliteit van het water dat uit uw kranen komt.",
      },
      {
        q: "Kan de controle zonder onderbreking van de watertoevoer?",
        a: "Voor het testen van een keerklep moet dat deel van de installatie kort drukloos zijn. In de praktijk gaat het om enkele minuten per klep. Wij stemmen de planning af op momenten waarop dit het minste hinder geeft.",
      },
    ],
    related: [
      "risicoanalyse-en-beheersplan",
      "sediment-verwijderen-uit-boilers",
      "uitvoering-beheersmaatregelen",
    ],
    featured: true,
  },
  {
    slug: "sediment-verwijderen-uit-boilers",
    name: "Sediment verwijderen uit boilers",
    navName: "Sediment uit boilers",
    eyebrow: "Waterwerkblad 1.4G",
    summary:
      "Jaarlijks sediment verwijderen uit boilers en voorraadvaten, zodat de bodem geen voedingsbodem wordt voor legionella.",
    metaTitle: "Sediment verwijderen uit boilers",
    metaDescription:
      "Jaarlijks sediment verwijderen uit boilers conform NEN 1006 en Waterwerkblad 1.4G. Voorkomt legionellagroei en verlengt de levensduur van uw warmwatertoestel.",
    keywords: [
      "sediment verwijderen boilers",
      "boiler spoelen legionella",
      "sediment boiler",
      "warmwatertoestel onderhoud legionella",
    ],
    h1: "Sediment verwijderen uit boilers",
    intro:
      "Onderin elke boiler verzamelt zich sediment: kalk, corrosieproducten en organisch materiaal. Precies daar is de temperatuur het laagst en de voedingsbodem het rijkst. Jaarlijks verwijderen conform Waterwerkblad 1.4G houdt uw warm water veilig en uw toestel efficiënt.",
    usps: [
      "Jaarlijkse uitvoering conform NEN 1006 en Waterwerkblad 1.4G",
      "Inclusief temperatuurcontrole en inspectie van de anode",
      "Registratie voor uw legionella-logboek",
      "Vaak te combineren met keerklepcontrole in één bezoek",
    ],
    sections: [
      {
        h2: "Waarom sediment een legionellarisico is",
        blocks: [
          {
            type: "p",
            text: "Legionella vermeerdert zich het snelst tussen ongeveer 25 en 45 graden. In een goed ingeregelde boiler is het water warm genoeg, maar de sedimentlaag onderin isoleert. Daardoor blijft de temperatuur daar achter en ontstaat precies de zone waarin de bacterie gedijt. Het sediment levert bovendien de voedingsstoffen en de beschutting die legionella nodig heeft om in biofilm te overleven.",
          },
          {
            type: "p",
            text: "Dat maakt de bodem van een boiler een van de meest onderschatte risicoplekken in een drinkwaterinstallatie. Een systeem dat op papier op temperatuur is, kan in de praktijk toch een bron zijn.",
          },
        ],
      },
      {
        h2: "Wat wij doen",
        blocks: [
          {
            type: "list",
            items: [
              "Het toestel wordt gecontroleerd afgetapt en de sedimentlaag wordt verwijderd",
              "Wij spoelen na tot het spuiwater helder is",
              "Temperatuur in het toestel en aan het dichtstbijzijnde tappunt wordt gemeten",
              "De opofferingsanode en de werking van de beveiligingen worden beoordeeld",
              "Alle bevindingen worden vastgelegd voor uw logboek",
            ],
          },
          {
            type: "p",
            text: "Blijkt bij het aftappen dat het toestel sterk vervuild is of dat er biofilm aanwezig is, dan adviseren wij aanvullend een boilerreiniging of een desinfectie van het warmwatercircuit.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Hoe vaak moet ik sediment uit de boiler verwijderen?",
        a: "Waterwerkblad 1.4G gaat uit van minimaal één keer per jaar. Bij hard water, een hoog verbruik of een eerdere overschrijding kan vaker verstandig zijn. In uw beheersplan leggen wij de frequentie voor uw situatie vast.",
      },
      {
        q: "Levert dit ook besparing op?",
        a: "Ja. Een sedimentlaag werkt als isolatie tussen het verwarmingselement en het water. Het toestel moet daardoor langer stoken voor dezelfde temperatuur. Regelmatig spuien verlaagt het energieverbruik en verlengt de levensduur van het toestel.",
      },
    ],
    related: ["boilerreiniging", "keerklepcontrole", "thermische-desinfectie"],
    featured: true,
  },
  {
    slug: "legionella-watermonsters",
    name: "Legionella watermonsters",
    navName: "Watermonsters",
    eyebrow: "Geaccrediteerd",
    summary:
      "Geaccrediteerde monstername en laboratoriumanalyse op legionella, met heldere rapportage en advies bij overschrijding.",
    metaTitle: "Legionella watermonsters laten nemen",
    metaDescription:
      "Geaccrediteerde legionella monstername en analyse door een erkend laboratorium. Duidelijke rapportage en direct advies bij een overschrijding.",
    keywords: [
      "legionella watermonsters",
      "legionella meting",
      "watermonster laten nemen",
      "legionella onderzoek",
      "geaccrediteerde monstername legionella",
    ],
    h1: "Legionella watermonsters laten onderzoeken",
    intro:
      "Meten is het enige harde bewijs dat uw beheersmaatregelen werken. Wij verzorgen de geaccrediteerde monstername en laten de analyse uitvoeren door een erkend laboratorium. U ontvangt een rapportage die u direct in uw logboek kunt opnemen.",
    usps: [
      "Monstername volgens NEN 6265 door een geaccrediteerd bureau",
      "Analyse door een erkend laboratorium",
      "Vaste monsterpunten conform uw beheersplan",
      "Bij overschrijding direct een plan van aanpak",
    ],
    sections: [
      {
        h2: "Wanneer en hoe vaak bemonsteren?",
        blocks: [
          {
            type: "p",
            text: "Prioritaire instellingen zijn verplicht om minimaal twee keer per jaar te bemonsteren op legionella. De monsterpunten worden vastgelegd in het beheersplan en zijn gekozen op de plekken met het hoogste risico, bijvoorbeeld het verste tappunt van een strang of een zelden gebruikte douche.",
          },
          {
            type: "p",
            text: "Bent u geen prioritaire instelling, dan is bemonstering niet verplicht, maar wel het enige middel om aan te tonen dat uw installatie in orde is. Voor kantoren, scholen, VvE's en sportaccommodaties adviseren wij een jaarlijkse steekproef op de meest risicovolle punten.",
          },
        ],
      },
      {
        h2: "De uitslag: wat betekenen de getallen?",
        blocks: [
          {
            type: "list",
            items: [
              "Minder dan 100 kve/l: geen overschrijding, uw beheersmaatregelen doen hun werk",
              "100 tot 1000 kve/l: overschrijding van de norm, u moet actie ondernemen en de oorzaak achterhalen",
              "Meer dan 1000 kve/l: ernstige overschrijding, direct maatregelen en een melding bij de Inspectie Leefomgeving en Transport",
            ],
          },
          {
            type: "p",
            text: "Een overschrijding is vervelend, maar geen ramp zolang u snel en aantoonbaar handelt. Wij helpen met de oorzaakanalyse, de directe maatregelen zoals spoelen of desinfecteren, en de hercontrole waarmee u laat zien dat het probleem verholpen is.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Hoe lang duurt het voordat ik de uitslag heb?",
        a: "De kweekmethode volgens NEN 6265 vraagt een incubatietijd. Reken op ongeveer tien tot veertien dagen tussen de monstername en de definitieve uitslag. Tussentijdse afwijkende resultaten worden eerder gemeld, zodat u niet onnodig wacht.",
      },
      {
        q: "Mag ik zelf watermonsters nemen?",
        a: "Voor prioritaire instellingen moet de monstername worden uitgevoerd door een daarvoor geaccrediteerde partij. Zelf genomen monsters hebben geen bewijskracht richting de toezichthouder, omdat de wijze van monstername de uitslag sterk beïnvloedt.",
      },
      {
        q: "Wat doe ik bij een overschrijding?",
        a: "Beperk eerst de blootstelling, bijvoorbeeld door de betreffende douches buiten gebruik te stellen of een filter te plaatsen. Achterhaal daarna de oorzaak en voer een beheersmaatregel uit, zoals spoelen, temperatuurcorrectie of desinfectie. Bemonster daarna opnieuw. Bij meer dan 1000 kve/l geldt bovendien een meldplicht.",
      },
    ],
    related: [
      "reiniging-en-desinfectie",
      "risicoanalyse-en-beheersplan",
      "legionella-uitbraak",
    ],
    featured: true,
  },
  {
    slug: "thermische-desinfectie",
    name: "Thermisch desinfecteren",
    navName: "Thermische desinfectie",
    eyebrow: "Warmwaterbehandeling",
    summary:
      "Het volledige leidingnet doorspoelen met water van minimaal 60 graden, met gecontroleerde meting bij elk tappunt.",
    metaTitle: "Thermisch desinfecteren waterleiding",
    metaDescription:
      "Thermische desinfectie van uw drinkwaterleidingsysteem. Gecontroleerd doorspoelen met heet water, meting per tappunt en volledige registratie voor uw logboek.",
    keywords: [
      "thermisch desinfecteren",
      "thermische desinfectie waterleiding",
      "legionella thermisch bestrijden",
      "warmwaterspoeling legionella",
    ],
    h1: "Thermisch desinfecteren van een drinkwaterleidingsysteem",
    intro:
      "Bij thermische desinfectie bestrijden we legionella met warmte in plaats van met chemie. Het hele warmwatercircuit wordt opgestookt en tappunt voor tappunt doorgespoeld, tot bij elk punt de vereiste temperatuur en tijdsduur is gehaald en gemeten.",
    usps: [
      "Geen chemicaliën in uw leidingnet",
      "Meting en registratie per afzonderlijk tappunt",
      "Uitvoering buiten kantooruren mogelijk",
      "Vooraf een haalbaarheidscheck op capaciteit en temperatuur",
    ],
    sections: [
      {
        h2: "Wanneer kiest u voor thermisch?",
        blocks: [
          {
            type: "p",
            text: "Thermische desinfectie is aantrekkelijk als uw installatie voldoende warmwatercapaciteit heeft en het leidingnet overzichtelijk is. Er komt geen desinfectiemiddel in het systeem, waardoor de belasting op leidingen en toestellen laag blijft en het water direct na afloop weer bruikbaar is.",
          },
          {
            type: "p",
            text: "De methode heeft ook grenzen. Als de boiler te weinig capaciteit heeft om het hele net op temperatuur te houden, of als er lange koudwaterstrengen of kunststof leidingen in het spel zijn, is het resultaat onvoldoende betrouwbaar. Wij beoordelen dat vooraf en adviseren dan een chemische behandeling.",
          },
        ],
      },
      {
        h2: "Zo voeren wij het uit",
        blocks: [
          {
            type: "list",
            items: [
              "De boiler wordt opgestookt naar de vereiste temperatuur",
              "Per tappunt spoelen wij door tot de voorgeschreven temperatuur bij het punt is bereikt",
              "De temperatuur en de spoelduur worden per tappunt gemeten en genoteerd",
              "Perlatoren en douchekoppen worden verwijderd of apart behandeld",
              "U ontvangt een volledig meetrapport voor uw logboek",
            ],
          },
          {
            type: "p",
            text: "Omdat er heet water uit de kranen komt, voeren wij het werk uit wanneer er geen gasten of bewoners aanwezig zijn en zetten wij de betreffende ruimtes af. Veiligheid van de gebruikers staat voorop.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is thermische desinfectie een blijvende oplossing?",
        a: "Nee, net als bij chemische desinfectie is het een beheersmaatregel. Als de oorzaak in de opbouw of het gebruik van de installatie zit, keert de besmetting terug. Combineer een desinfectie daarom altijd met een risicoanalyse en structurele beheersmaatregelen.",
      },
      {
        q: "Kan dit tijdens openingstijden?",
        a: "Liever niet. Er stroomt water van boven de 60 graden uit de tappunten, wat verbrandingsgevaar geeft. Wij plannen thermische desinfecties daarom in de avond, de nacht of het weekend.",
      },
    ],
    related: [
      "reiniging-en-desinfectie",
      "sediment-verwijderen-uit-boilers",
      "legionella-watermonsters",
    ],
  },
  {
    slug: "boilerreiniging",
    name: "Boilerreiniging",
    navName: "Boilerreiniging",
    eyebrow: "Warmwatertoestellen",
    summary:
      "Volledige inwendige reiniging van boilers en voorraadvaten, inclusief verwijdering van biofilm en kalkaanslag.",
    metaTitle: "Boilerreiniging en desinfectie",
    metaDescription:
      "Professionele boilerreiniging: sediment, kalk en biofilm verwijderen uit boilers en voorraadvaten. Inclusief inspectie, desinfectie en rapportage.",
    keywords: [
      "boiler reiniging",
      "boiler reinigen legionella",
      "voorraadvat reinigen",
      "boiler desinfecteren",
    ],
    h1: "Boilerreiniging",
    intro:
      "Waar sediment spuien niet meer voldoende is, gaan we een stap verder. Bij een boilerreiniging openen wij het toestel, verwijderen wij kalkaanslag en biofilm inwendig en desinfecteren wij het vat voordat het weer in gebruik gaat.",
    usps: [
      "Inwendige reiniging van het complete vat",
      "Verwijderen van biofilm en hardnekkige kalkaanslag",
      "Inspectie van anode, isolatie en beveiligingen",
      "Desinfectie en controlemeting voor ingebruikname",
    ],
    sections: [
      {
        h2: "Wanneer is reiniging nodig in plaats van spuien?",
        blocks: [
          {
            type: "list",
            items: [
              "Als het spuiwater na herhaald aftappen troebel blijft",
              "Bij een aangetoonde legionellabesmetting in het warmwatercircuit",
              "Als het toestel jarenlang niet inwendig is behandeld",
              "Bij zichtbare biofilm of geurklachten aan het warme water",
              "Bij een sterk teruggelopen rendement van het toestel",
            ],
          },
        ],
      },
      {
        h2: "Wat u van ons kunt verwachten",
        blocks: [
          {
            type: "p",
            text: "Wij nemen het toestel gecontroleerd buiten bedrijf, openen het mangat of het inspectieluik en reinigen het vat mechanisch. Alle losgekomen resten worden verwijderd, waarna het toestel wordt gedesinfecteerd en doorgespoeld. Voordat het weer in gebruik gaat, controleren wij de temperatuur en indien afgesproken nemen wij een watermonster.",
          },
          {
            type: "p",
            text: "Blijkt tijdens de reiniging dat het toestel technisch aan het einde van zijn levensduur is, dan zeggen wij dat. Een schoon vat met een doorgeroeste anode of een defecte thermostaat lost uw probleem namelijk niet op.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Hoe lang is de boiler buiten gebruik?",
        a: "Reken op een halve tot een hele dag per toestel, afhankelijk van de inhoud en de mate van vervuiling. Bij locaties waar warm water niet kan uitvallen, werken wij gefaseerd of buiten openingstijden.",
      },
      {
        q: "Kan een boilerreiniging worden gecombineerd met andere werkzaamheden?",
        a: "Ja. Wij combineren de reiniging vaak met de keerklepcontrole, de jaarlijkse sedimentverwijdering van andere toestellen en de monstername. Dat scheelt bezoeken en kosten.",
      },
    ],
    related: [
      "sediment-verwijderen-uit-boilers",
      "reiniging-en-desinfectie",
      "keerklepcontrole",
    ],
  },
  {
    slug: "uitvoering-beheersmaatregelen",
    name: "Uitvoering beheersmaatregelen",
    navName: "Beheersmaatregelen",
    eyebrow: "Doorlopend beheer",
    summary:
      "Wij nemen de uitvoering van uw beheersplan over: spoelen, meten, registreren en bijsturen, het hele jaar door.",
    metaTitle: "Uitvoering legionella beheersmaatregelen",
    metaDescription:
      "Laat de uitvoering van uw legionella beheersplan over aan Clean Water Systems. Spoelen, temperatuurmetingen, logboekbeheer en periodieke rapportage.",
    keywords: [
      "uitvoering beheersmaatregelen",
      "legionella beheersplan uitvoeren",
      "spoelen tappunten legionella",
      "legionella logboek bijhouden",
    ],
    h1: "Uitvoering van uw legionella beheersmaatregelen",
    intro:
      "Een beheersplan in de la beschermt niemand. Wij voeren de maatregelen uit die erin staan: wekelijks spoelen, temperaturen meten, kleppen controleren en alles vastleggen. U houdt de verantwoordelijkheid, wij nemen het werk over.",
    usps: [
      "Vast aanspreekpunt en een vaste bezoekfrequentie",
      "Spoelen, meten en registreren volgens uw beheersplan",
      "Logboek altijd actueel en inspectieklaar",
      "Signalering en advies zodra iets structureel afwijkt",
    ],
    sections: [
      {
        h2: "Welke maatregelen wij uitvoeren",
        blocks: [
          {
            type: "list",
            items: [
              "Wekelijks of periodiek doorspoelen van weinig gebruikte tappunten",
              "Temperatuurmetingen op koud- en warmwaterpunten",
              "Controle van boilertemperaturen en circulatieleidingen",
              "Jaarlijkse keerklep- en appendagecontrole",
              "Sedimentverwijdering uit warmwatertoestellen",
              "Monstername op de in het beheersplan vastgelegde punten",
              "Bijhouden en actualiseren van het logboek",
            ],
          },
        ],
      },
      {
        h2: "Waarom uitbesteden loont",
        blocks: [
          {
            type: "p",
            text: "In de praktijk sneuvelt het spoelregime als eerste. Het is repetitief werk dat bij drukte naar achteren schuift, terwijl juist de continuïteit het effect bepaalt. Wanneer een externe partij op vaste momenten langskomt, ligt het vast in de agenda en in de registratie.",
          },
          {
            type: "p",
            text: "Daarnaast ziet een adviseur die vaker in installaties komt patronen die intern niet opvallen: een strang die structureel te koud blijft, een tappunt dat altijd afwijkt, een boiler die telkens net onder temperatuur zit. Dat is precies de informatie waarmee u structurele problemen oplost in plaats van blijft symptoombestrijden.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Blijf ik zelf verantwoordelijk?",
        a: "Ja. De eigenaar van de installatie blijft wettelijk verantwoordelijk voor de waterkwaliteit. Wat u uitbesteedt is de uitvoering, niet de verantwoordelijkheid. Wij zorgen er wel voor dat u die verantwoordelijkheid aantoonbaar kunt invullen.",
      },
      {
        q: "Kan ik een deel zelf doen?",
        a: "Zeker. Veel klanten spoelen zelf en laten de metingen, de keerklepcontrole en de monstername aan ons over. Wij stemmen de taakverdeling af in het beheersplan, zodat er geen gaten in vallen.",
      },
    ],
    related: [
      "risicoanalyse-en-beheersplan",
      "legionella-watermonsters",
      "keerklepcontrole",
    ],
  },
  {
    slug: "legionella-douchekoppen",
    name: "Anti-legionella douchekoppen",
    navName: "Douchekoppen",
    eyebrow: "cBlue SC",
    summary:
      "Antibacteriële douchekoppen uit de cBlue SC serie, als aanvullende beheersmaatregel op risicovolle tappunten.",
    metaTitle: "Anti-legionella douchekoppen cBlue SC",
    metaDescription:
      "Anti-legionella douchekoppen uit de cBlue SC serie. Antibacteriële afwerking, minder biofilmvorming en eenvoudig te vervangen op risicovolle tappunten.",
    keywords: [
      "legionella douchekoppen",
      "anti legionella douchekop",
      "cBlue SC",
      "antibacteriële douchekop",
    ],
    h1: "Anti-legionella douchekoppen",
    intro:
      "De douchekop is het laatste stukje van uw installatie en tegelijk het punt waar de aerosolen ontstaan die legionella verspreiden. Met de cBlue SC serie brengt u op dat punt een extra barrière aan.",
    usps: [
      "Antibacteriële afwerking die biofilmvorming tegengaat",
      "Geschikt voor zorg, hotels, sport en recreatie",
      "Eenvoudig te vervangen zonder aanpassing aan de leiding",
      "Ook leverbaar in combinatie met periodieke vervanging",
    ],
    sections: [
      {
        h2: "Waarom juist bij de douchekop",
        blocks: [
          {
            type: "p",
            text: "Legionella wordt niet gevaarlijk door het drinken van water, maar door het inademen van kleine waterdruppeltjes. Een douche produceert precies die aerosolen. Bovendien staat er in de kop en de slang na gebruik altijd wat water stil op lichaamstemperatuur, wat een ideale plek is voor biofilm.",
          },
          {
            type: "p",
            text: "Een antibacteriële douchekop vervangt geen goed beheer, maar verlaagt het risico op het punt waar de blootstelling ontstaat. Wij zetten ze daarom gericht in: op zelden gebruikte douches, op afdelingen met kwetsbare gebruikers en op locaties waar een eerdere overschrijding is vastgesteld.",
          },
        ],
      },
      {
        h2: "Advies op maat",
        blocks: [
          {
            type: "p",
            text: "Wij verkopen geen douchekoppen als losse oplossing voor een legionellaprobleem. In het gesprek kijken we eerst naar de installatie: klopt de temperatuur, wordt er gespoeld, is er een dode leiding? Pas als dat op orde is, heeft een antibacteriële kop toegevoegde waarde. Anders verplaatst u het probleem.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Hoe lang gaan deze douchekoppen mee?",
        a: "Bij normaal gebruik en periodieke reiniging gaan ze meerdere jaren mee. In omgevingen met hard water of bij locaties met een verhoogd risico adviseren wij een vast vervangingsinterval, dat wij in het beheersplan opnemen.",
      },
      {
        q: "Vervangen jullie ook de doucheslangen?",
        a: "Ja. Slangen zijn een bekende bron van biofilm, zeker als ze op de vloer blijven liggen met water erin. Wij nemen ze mee in het advies en kunnen ze bij dezelfde beurt vervangen.",
      },
    ],
    related: [
      "risicoanalyse-en-beheersplan",
      "legionella-watermonsters",
      "uitvoering-beheersmaatregelen",
    ],
  },
  {
    slug: "aanpassen-drinkwaterinstallatie",
    name: "Aanpassen van de drinkwaterinstallatie",
    navName: "Installatie aanpassen",
    eyebrow: "Techniek",
    summary:
      "Dode leidingen verwijderen, strangen omleggen en tappunten herindelen, zodat het risico bij de bron verdwijnt.",
    metaTitle: "Drinkwaterinstallatie aanpassen",
    metaDescription:
      "Dode leidingen verwijderen, strangen aanpassen en tappunten herindelen. Structurele oplossingen voor legionellarisico's in uw drinkwaterinstallatie.",
    keywords: [
      "aanpassen drinkwaterinstallatie",
      "dode leiding verwijderen",
      "legionella structureel oplossen",
      "leidingnet aanpassen legionella",
    ],
    h1: "Aanpassen van uw drinkwaterinstallatie",
    intro:
      "Sommige legionellaproblemen zijn niet weg te spoelen. Als de oorzaak in de opbouw van het leidingnet zit, is een technische aanpassing de enige manier om er structureel vanaf te komen. Wij ontwerpen en voeren die aanpassingen uit.",
    usps: [
      "Oplossing bij de bron in plaats van herhaald desinfecteren",
      "Uitvoering volgens NEN 1006 en de waterwerkbladen",
      "Actualisatie van de risicoanalyse na de aanpassing",
      "Onderbouwde afweging tussen kosten en risicoreductie",
    ],
    sections: [
      {
        h2: "Veelvoorkomende aanpassingen",
        blocks: [
          {
            type: "list",
            items: [
              "Verwijderen van dode en blinde leidingen na een verbouwing",
              "Verkorten van de afstand tussen strang en tappunt",
              "Aanpassen van de circulatieleiding zodat warm water overal op temperatuur blijft",
              "Isoleren of verleggen van koudwaterleidingen die te warm worden",
              "Aanbrengen of vervangen van terugstroombeveiliging",
              "Herindelen van tappunten zodat elk punt voldoende doorstroming krijgt",
            ],
          },
        ],
      },
      {
        h2: "Eerst rekenen, dan slopen",
        blocks: [
          {
            type: "p",
            text: "Aanpassingen aan een leidingnet kosten geld en geven overlast. Daarom zetten wij ze altijd af tegen het alternatief: wat kost het om dit risico te blijven beheersen met spoelen, meten en periodiek desinfecteren? Vaak blijkt een gerichte aanpassing binnen enkele jaren goedkoper dan structureel beheer, en levert het bovendien een aantoonbaar veiliger installatie op.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Moet de risicoanalyse worden herzien na een aanpassing?",
        a: "Ja. Zodra de installatie wijzigt, klopt de bestaande risicoanalyse niet meer met de werkelijkheid. Wij actualiseren de analyse en het beheersplan direct na de oplevering, zodat uw dossier compleet blijft.",
      },
      {
        q: "Werken jullie samen met mijn eigen installateur?",
        a: "Graag. Wij leveren dan het advies, de uitwerking en de controle achteraf, en uw vaste installateur voert het werk uit. Dat werkt goed omdat die de installatie en het gebouw al kent.",
      },
    ],
    related: [
      "risicoanalyse-en-beheersplan",
      "stinkend-drinkwater-verhelpen",
      "reiniging-en-desinfectie",
    ],
  },
  {
    slug: "stinkend-drinkwater-verhelpen",
    name: "Stinkend of verkleurd drinkwater verhelpen",
    navName: "Stinkend drinkwater",
    eyebrow: "Klachtenonderzoek",
    summary:
      "Onderzoek naar geur-, smaak- en kleurklachten aan uw leidingwater, met een concrete oorzaak en oplossing.",
    metaTitle: "Stinkend drinkwater verhelpen",
    metaDescription:
      "Last van stinkend, bruin of troebel leidingwater? Wij achterhalen de oorzaak in uw installatie en verhelpen het probleem structureel.",
    keywords: [
      "stinkend drinkwater",
      "bruin water uit de kraan",
      "vieze smaak leidingwater",
      "waterkwaliteit onderzoek installatie",
    ],
    h1: "Stinkend of verkleurd drinkwater uit uw waterleidingsysteem verhelpen",
    intro:
      "Water dat naar rotte eieren ruikt, bruin uit de kraan komt of metaalachtig smaakt, is een signaal dat er iets mis is in uw installatie. Wij achterhalen waar het vandaan komt en lossen het op, in plaats van het weg te spoelen tot het terugkomt.",
    usps: [
      "Systematisch onderzoek van bron tot tappunt",
      "Onderscheid tussen installatie- en leveringsproblemen",
      "Analyse op de relevante parameters",
      "Structurele oplossing in plaats van symptoombestrijding",
    ],
    sections: [
      {
        h2: "Wat de klacht u vertelt",
        blocks: [
          {
            type: "list",
            items: [
              "Rotte-eierenlucht wijst vaak op sulfaatreducerende bacteriën in een boiler of een stilstaand deel van het net",
              "Bruin of roodbruin water duidt meestal op corrosie in stalen leidingen of op losgeslagen roestdeeltjes",
              "Een blauwgroene verkleuring wijst op koperafgifte, vaak door te agressief of te warm water",
              "Troebel wit water is meestal onschuldig en verdwijnt als de lucht uit het water ontsnapt",
              "Een muffe of aardse smaak kan wijzen op biofilm of op een aangetast filter",
            ],
          },
          {
            type: "p",
            text: "Elk van deze klachten kent een andere oorzaak en dus een andere oplossing. Daarom beginnen wij nooit met desinfecteren, maar met vaststellen wat er precies aan de hand is.",
          },
        ],
      },
      {
        h2: "Onze aanpak",
        blocks: [
          {
            type: "p",
            text: "We bemonsteren op verschillende punten in het net, zodat duidelijk wordt of het probleem al bij de aansluiting bestaat of pas in uw eigen installatie ontstaat. Tegelijk beoordelen we de materialen, de temperaturen en de doorstroming. Vervolgens komen we met een oplossing die past bij de oorzaak: van een boilerreiniging tot het vervangen van een leidingdeel.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is stinkend water gevaarlijk?",
        a: "Niet elke geur- of kleurklacht betekent direct gezondheidsrisico, maar het is altijd een signaal dat de installatie aandacht nodig heeft. Omdat dezelfde omstandigheden die geurklachten veroorzaken ook legionellagroei bevorderen, adviseren wij een klacht nooit te negeren.",
      },
      {
        q: "Ligt het aan mij of aan het waterbedrijf?",
        a: "Dat is precies wat het onderzoek uitwijst. Door op meerdere punten te bemonsteren, waaronder direct achter de watermeter, kunnen we vaststellen of het water al vervuild binnenkomt of dat het probleem in uw eigen leidingnet ontstaat.",
      },
    ],
    related: [
      "boilerreiniging",
      "aanpassen-drinkwaterinstallatie",
      "legionella-watermonsters",
    ],
  },
  {
    slug: "legionella-uitbraak",
    name: "Spoedhulp bij een legionella-uitbraak",
    navName: "Spoedhulp bij uitbraak",
    eyebrow: "Binnen 24 uur",
    summary:
      "Directe inzet bij een overschrijding of uitbraak: inspectie, monstername, desinfectie en een plan richting de toezichthouder.",
    metaTitle: "Legionella-uitbraak? Hulp binnen 24 uur",
    metaDescription:
      "Legionella-overschrijding of uitbraak? Wij voeren indien nodig binnen 24 uur een desinfectie uit. Direct advies, monstername en herstelmaatregelen.",
    keywords: [
      "legionella uitbraak",
      "legionella overschrijding",
      "spoed desinfectie legionella",
      "legionella besmetting oplossen",
    ],
    h1: "Legionella-uitbraak of overschrijding? Wij komen in actie",
    intro:
      "Een overschrijding vraagt om snel en aantoonbaar handelen. Wij komen langs, beperken de blootstelling, achterhalen de bron en voeren de desinfectie uit. Indien nodig binnen 24 uur.",
    usps: [
      "Indien nodig binnen 24 uur ter plaatse voor een desinfectie",
      "Directe maatregelen om blootstelling te beperken",
      "Bronopsporing in plaats van blind desinfecteren",
      "Ondersteuning bij de communicatie richting toezichthouder en gebruikers",
    ],
    sections: [
      {
        h2: "Wat u zelf direct kunt doen",
        blocks: [
          {
            type: "list",
            items: [
              "Stel de betrokken tappunten buiten gebruik of hang er een waarschuwing bij",
              "Vermijd aerosolvorming: geen douches, geen hogedrukreiniging, geen sproeiers",
              "Plaats waar nodig een tijdelijk endpoint-filter op kwetsbare punten",
              "Noteer welke punten zijn bemonsterd, wanneer en met welke uitslag",
              "Bel ons, ook als u nog niet zeker weet wat u moet doen",
            ],
          },
        ],
      },
      {
        h2: "Onze aanpak bij een uitbraak",
        blocks: [
          {
            type: "h3", text: "Inspectie en analyse" },
          {
            type: "p",
            text: "We beoordelen ter plaatse waar de besmetting waarschijnlijk vandaan komt: temperatuurafwijkingen, dode leidingen, een vervuilde boiler of een tappunt dat maanden niet gebruikt is.",
          },
          { type: "h3", text: "Onderzoek en monstername" },
          {
            type: "p",
            text: "Aanvullende monsters brengen de omvang in kaart. Zo weten we of het om één tappunt gaat of om een systeembrede besmetting, en dat bepaalt de aanpak.",
          },
          { type: "h3", text: "Reiniging en desinfectie" },
          {
            type: "p",
            text: "Afhankelijk van de situatie voeren wij een chemische of thermische desinfectie uit, of behandelen wij gericht het aangetaste deel van het net.",
          },
          { type: "h3", text: "Herstelmaatregelen en beheersplan" },
          {
            type: "p",
            text: "Daarna leggen we vast wat er structureel moet veranderen om herhaling te voorkomen, en werken we uw beheersplan bij.",
          },
          { type: "h3", text: "Nazorg en controlemetingen" },
          {
            type: "p",
            text: "Met hercontroles tonen we aan dat het resultaat is behaald en blijft. Dat is ook wat de toezichthouder van u wil zien.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Moet ik een overschrijding melden?",
        a: "Bij meer dan 1000 kve/l legionella geldt voor prioritaire instellingen een meldplicht bij de Inspectie Leefomgeving en Transport. Ook bij lagere waarden bent u verplicht maatregelen te nemen en die vast te leggen. Wij helpen bij het opstellen van de melding en het bijbehorende plan van aanpak.",
      },
      {
        q: "Kan ik open blijven tijdens de aanpak?",
        a: "Vaak wel, mits de blootstelling gericht wordt beperkt. Door de betrokken tappunten af te sluiten of te voorzien van filters, kunt u het overige deel van het gebouw meestal in gebruik houden. Wij adviseren daarover op basis van de meetresultaten.",
      },
    ],
    related: [
      "reiniging-en-desinfectie",
      "legionella-watermonsters",
      "risicoanalyse-en-beheersplan",
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

export const featuredServices = services.filter((s) => s.featured);
