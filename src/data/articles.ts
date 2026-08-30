import type { Block } from "./services";

export type Article = {
  slug: string;
  title: string;
  h1: string;
  category: string;
  date: string;
  readingTime: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  blocks: Block[];
};

export const articles: Article[] = [
  {
    slug: "legionella-temperatuur-koud-en-warm-water",
    title: "De juiste temperaturen in uw drinkwaterinstallatie",
    h1: "Koud onder 25, warm boven 60: waarom temperatuur alles bepaalt",
    category: "Beheer",
    date: "2026-06-18",
    readingTime: "6 min",
    metaTitle: "Legionella en de juiste temperaturen",
    metaDescription:
      "Waarom koud water onder 25 graden moet blijven en warm water boven de 60 graden. Praktische uitleg, veelgemaakte fouten en hoe u het meet.",
    keywords: [
      "legionella temperatuur",
      "warm water 60 graden legionella",
      "koud water 25 graden",
      "temperatuurmeting drinkwater",
    ],
    excerpt:
      "De meeste legionellaproblemen zijn terug te voeren op temperatuur. Wat de norm precies zegt, waar het in de praktijk misgaat en hoe u het goed meet.",
    blocks: [
      {
        type: "p",
        text: "Van alle beheersmaatregelen tegen legionella is temperatuurbeheersing de belangrijkste. De bacterie vermeerdert zich het snelst tussen ongeveer 25 en 45 graden. Blijft uw koude water onder de 25 graden en uw warme water boven de 60, dan heeft legionella in het grootste deel van uw installatie simpelweg geen kans.",
      },
      { type: "h3", text: "Wat de norm zegt" },
      {
        type: "list",
        items: [
          "Koud water: maximaal 25 graden, ook na langdurige stilstand in de leiding",
          "Warm water in het toestel: minimaal 60 graden",
          "Warm water bij het tappunt: minimaal 55 graden, binnen redelijke uitlooptijd",
          "Circulatieleiding: de retourtemperatuur mag niet onder de 55 graden zakken",
        ],
      },
      {
        type: "p",
        text: "Die getallen ogen eenvoudig, maar juist in bestaande gebouwen blijkt het lastig om ze overal te halen. Dat komt zelden door één grote fout en meestal door een stapeling van kleine ontwerpkeuzes.",
      },
      { type: "h3", text: "Waar het in de praktijk misgaat" },
      {
        type: "list",
        items: [
          "Koud- en warmwaterleidingen die naast elkaar of in dezelfde schacht liggen zonder isolatie",
          "Koudwaterleidingen die door een technische ruimte, een keuken of een warme kruipruimte lopen",
          "Boilers die op 55 graden staan om kalkaanslag of verbrandingsgevaar te beperken",
          "Thermostatische mengkranen die te ver van het tappunt zitten, waardoor er een lang lauw leidingdeel ontstaat",
          "Circulatieleidingen die niet goed zijn ingeregeld, waardoor de verste strang koud blijft",
        ],
      },
      {
        type: "p",
        text: "Vooral dat laatste punt wordt onderschat. Een circulatiesysteem dat op papier klopt, kan in de praktijk zo slecht ingeregeld zijn dat de warmte via de kortste lus terugloopt en de verste strangen structureel te koud blijven. Dat ziet u pas als u op de juiste plekken meet.",
      },
      { type: "h3", text: "Goed meten" },
      {
        type: "p",
        text: "Meet altijd bij het tappunt, niet in de technische ruimte. Laat het water lopen tot de temperatuur stabiel is en noteer hoe lang dat duurde. Die uitlooptijd is minstens zo informatief als de eindtemperatuur: als het een minuut duurt voordat er warm water komt, staat er een minuut aan lauw water in de leiding.",
      },
      {
        type: "p",
        text: "Voor koud water werkt het omgekeerd. Meet direct bij het openen van de kraan, want dan meet u het water dat in de leiding heeft gestaan. Een koudwaterleiding die na een nacht stilstand op 27 graden staat, is een risicopunt, ook al is het water na dertig seconden weer 14 graden.",
      },
      { type: "h3", text: "Verbrandingsgevaar en legionella tegelijk" },
      {
        type: "p",
        text: "Water van 60 graden veroorzaakt binnen enkele seconden brandwonden. Zeker in de zorg en bij kinderopvang is dat een reëel risico. De oplossing is niet het verlagen van de boilertemperatuur, maar het plaatsen van een thermostatische mengkraan zo dicht mogelijk bij het tappunt. Zo blijft het water in de leiding heet en komt het gemengd uit de kraan.",
      },
    ],
  },
  {
    slug: "legionella-na-vakantie-of-leegstand",
    title: "Legionella na vakantie, leegstand of een verbouwing",
    h1: "Weer in gebruik nemen na leegstand: dit moet er eerst gebeuren",
    category: "Praktijk",
    date: "2026-05-22",
    readingTime: "5 min",
    metaTitle: "Legionella na leegstand: opstartprotocol",
    metaDescription:
      "Een installatie die weken heeft stilgestaan, is een risico. Dit is het opstartprotocol voor scholen, campings, hotels en gebouwen na een verbouwing.",
    keywords: [
      "legionella na vakantie",
      "legionella leegstand",
      "waterleiding doorspoelen na stilstand",
      "opstartprotocol drinkwaterinstallatie",
    ],
    excerpt:
      "Zes weken zomervakantie, een winterstop of een verbouwing: stilstand is de grootste risicofactor die er is. Dit doet u voordat de eerste gebruiker de kraan opendraait.",
    blocks: [
      {
        type: "p",
        text: "Elke keer dat een gebouw langere tijd niet wordt gebruikt, ontstaat hetzelfde probleem: het water staat stil, de desinfecterende restwerking verdwijnt en de temperatuur kruipt naar de omgevingstemperatuur. In een verwarmd gebouw is dat precies de groeizone van legionella.",
      },
      {
        type: "p",
        text: "Scholen, sportverenigingen, campings, vakantieparken, hotels met een winterstop en gebouwen die verbouwd worden hebben hier structureel mee te maken. Toch is dit een van de weinige risico's die u met eenvoudige handelingen bijna volledig kunt wegnemen.",
      },
      { type: "h3", text: "Tijdens de sluiting" },
      {
        type: "list",
        items: [
          "Spoel wekelijks alle tappunten door, koud en warm, tot het water op temperatuur is",
          "Laat de boiler aan staan op minimaal 60 graden, ook als er niemand is",
          "Leg vast wanneer er gespoeld is en door wie",
          "Overweeg bij langere sluiting het aftappen van delen die u toch niet spoelt",
        ],
      },
      { type: "h3", text: "In de week voor heropening" },
      {
        type: "list",
        items: [
          "Spoel het volledige net door, strang voor strang, beginnend bij het dichtstbijzijnde tappunt",
          "Verwijder perlatoren en douchekoppen of reinig ze apart",
          "Controleer de boilertemperatuur en verwijder het sediment",
          "Meet bij de verste tappunten de koud- en warmwatertemperatuur",
          "Neem bij een verhoogd risicoprofiel een watermonster, ruim voor de openingsdatum",
        ],
      },
      {
        type: "p",
        text: "Dat laatste punt wordt vaak vergeten. Een kweek volgens NEN 6265 kost ongeveer tien tot veertien dagen. Wilt u de uitslag hebben voordat de eerste gasten komen, dan moet u dus twee weken voor opening bemonsteren en niet twee dagen.",
      },
      { type: "h3", text: "Spoelen: hoe lang is lang genoeg?" },
      {
        type: "p",
        text: "Spoel per tappunt tot de temperatuur stabiel is: koud water tot het koud is, warm water tot het warm is. Dat is een betrouwbaarder criterium dan een vaste tijd, omdat de leidinglengte per tappunt verschilt. Open de kraan daarbij rustig en gebruik bij douches een emmer of een doek om aerosolvorming te beperken.",
      },
      {
        type: "p",
        text: "Bij een gebouw dat maanden heeft stilgestaan is spoelen alleen soms niet genoeg. Als er biofilm is ontstaan, komt de besmetting binnen enkele weken terug. Meet in dat geval altijd na, en overweeg een desinfectie voordat het gebouw opengaat.",
      },
    ],
  },
  {
    slug: "dode-leidingen-opsporen",
    title: "Dode leidingen: het onzichtbare risico in elk gebouw",
    h1: "Dode leidingen opsporen en verwijderen",
    category: "Techniek",
    date: "2026-04-09",
    readingTime: "5 min",
    metaTitle: "Dode leidingen opsporen en verwijderen",
    metaDescription:
      "Dode leidingen zijn de meest voorkomende oorzaak van hardnekkige legionellabesmettingen. Zo spoort u ze op en zo pakt u ze structureel aan.",
    keywords: [
      "dode leiding",
      "blinde leiding legionella",
      "dode leidingen opsporen",
      "legionella hardnekkige besmetting",
    ],
    excerpt:
      "Een afgedopt leidingstuk achter een dichtgezette wand blijft jarenlang water vasthouden. Het is de meest voorkomende oorzaak van een besmetting die telkens terugkomt.",
    blocks: [
      {
        type: "p",
        text: "Bij vrijwel elke verbouwing verdwijnt er een kraan, een toilet of een wastafel. De leiding ernaartoe wordt afgedopt en de wand gaat dicht. Wat overblijft is een leidingstuk vol water dat nooit meer ververst wordt en dat wel in verbinding staat met de rest van uw installatie.",
      },
      {
        type: "p",
        text: "In zo'n stuk leiding groeit ongestoord biofilm. Bij elke drukwisseling komt er een beetje van dat water terug het actieve net in. Dat verklaart waarom sommige besmettingen na elke desinfectie binnen enkele maanden terugkeren: de bron zelf wordt nooit bereikt.",
      },
      { type: "h3", text: "Hoe herkent u een dode leiding?" },
      {
        type: "list",
        items: [
          "Vergelijk oude en nieuwe tekeningen van het gebouw en zoek naar verdwenen tappunten",
          "Let op leidingen die zichtbaar zijn afgedopt in schachten, kruipruimtes en plafonds",
          "Voel bij twijfel aan de leiding: een dode tak blijft koud terwijl de rest doorstroomt",
          "Bekijk de monsterresultaten: telkens hetzelfde tappunt dat afwijkt, wijst op een bron in die strang",
          "Vraag de langstzittende technische medewerker; die weet vaak meer dan de tekening",
        ],
      },
      { type: "h3", text: "De regel van de leidinglengte" },
      {
        type: "p",
        text: "Als vuistregel geldt dat een aftakking niet langer mag zijn dan ongeveer vijf keer de inwendige diameter van de leiding. Bij een 15 millimeter leiding is dat dus zo'n 7,5 centimeter. In de praktijk zijn dode takken van een halve meter of langer eerder regel dan uitzondering.",
      },
      { type: "h3", text: "Aanpakken bij de bron" },
      {
        type: "p",
        text: "De enige echte oplossing is de leiding verwijderen tot aan de hoofdstrang. Afdoppen bij de aftakking is niet genoeg: het probleem verplaatst zich dan alleen naar het resterende stuk. Bij een uitgebreide verbouwing loont het om de tekeningen direct bij te werken, zodat de volgende beheerder niet opnieuw op zoek moet.",
      },
      {
        type: "p",
        text: "Kan de leiding niet direct worden verwijderd, bijvoorbeeld omdat de wand pas bij een volgende renovatie opengaat, neem het punt dan expliciet op in het beheersplan met een tijdelijke beheersmaatregel. Dan weet iedereen dat er nog een openstaand risico is.",
      },
    ],
  },
  {
    slug: "kosten-legionellabeheer",
    title: "Wat kost legionellabeheer eigenlijk?",
    h1: "Wat kost legionellabeheer, en wat kost het niet doen?",
    category: "Kosten",
    date: "2026-03-14",
    readingTime: "6 min",
    metaTitle: "Wat kost legionellabeheer?",
    metaDescription:
      "Waar de kosten van legionellabeheer uit bestaan, welke factoren de prijs bepalen en waarom structureel beheer goedkoper is dan herhaald desinfecteren.",
    keywords: [
      "kosten legionella risicoanalyse",
      "prijs legionella beheersplan",
      "kosten legionella watermonster",
      "kosten desinfectie waterleiding",
    ],
    excerpt:
      "Een eerlijke uitleg over waar de kosten uit bestaan, welke factoren de prijs bepalen en waarom achteraf repareren bijna altijd duurder uitpakt.",
    blocks: [
      {
        type: "p",
        text: "Legionellabeheer wordt vaak als kostenpost gezien, terwijl het in de praktijk vooral een beheersbare vaste last is. De onvoorspelbare kosten zitten niet in het beheer, maar in wat er gebeurt als het beheer ontbreekt.",
      },
      { type: "h3", text: "Waar de kosten uit bestaan" },
      {
        type: "list",
        items: [
          "De eenmalige risicoanalyse en het opstellen van het beheersplan",
          "De periodieke monstername en de laboratoriumanalyse, doorgaans twee keer per jaar",
          "De jaarlijkse keerklepcontrole en de sedimentverwijdering uit warmwatertoestellen",
          "De uitvoering van het spoelregime, intern of uitbesteed",
          "Eventuele technische aanpassingen die uit de analyse volgen",
        ],
      },
      { type: "h3", text: "Wat de prijs bepaalt" },
      {
        type: "p",
        text: "Bij een risicoanalyse is het aantal tappunten de belangrijkste factor, gevolgd door het aantal bouwlagen en de bereikbaarheid van de installatie. Een hotel met honderd kamers kost meer dan een kantoor met twintig tappunten, simpelweg omdat elke douche apart beoordeeld en opgenomen moet worden.",
      },
      {
        type: "p",
        text: "Bij een desinfectie speelt vooral de omvang van het leidingnet en de bereikbaarheid van de tappunten. Werk buiten kantooruren kost meer, maar bespaart u vaak omzetverlies, dus het loont om die afweging expliciet te maken.",
      },
      { type: "h3", text: "De kosten van niets doen" },
      {
        type: "list",
        items: [
          "Een spoeddesinfectie kost een veelvoud van de reguliere jaarlijkse beheerkosten",
          "Douches of afdelingen die tijdelijk dicht moeten, kosten direct omzet",
          "Herhaalde overschrijdingen leiden tot herhaalde onderzoeken en hercontroles",
          "Bij een aantoonbare besmetting kunnen aansprakelijkheid en reputatieschade volgen",
          "Toezicht van de ILT betekent extra rapportageverplichtingen en vervolgcontroles",
        ],
      },
      {
        type: "p",
        text: "De rekensom die wij het vaakst met klanten maken, gaat over structureel beheer versus terugkerend repareren. Een installatie met een fundamenteel probleem, bijvoorbeeld een dode leiding of een te warme koudwaterstrang, kost jaarlijks aan noodmaatregelen vaak meer dan de eenmalige aanpassing die het probleem wegneemt.",
      },
      { type: "h3", text: "Waar u op kunt besparen" },
      {
        type: "p",
        text: "Combineer bezoeken. De keerklepcontrole, de sedimentverwijdering en de monstername kunnen prima in één beurt. Voer daarnaast zelf uit wat u zelf kunt: het wekelijkse spoelen is werk dat uw eigen conciërge of technische dienst goed kan doen, mits het schema helder is en er wordt afgetekend.",
      },
    ],
  },
  {
    slug: "legionella-logboek-inspectieklaar",
    title: "Een legionella-logboek dat de inspectie doorstaat",
    h1: "Zo houdt u een legionella-logboek dat de inspectie doorstaat",
    category: "Beheer",
    date: "2026-02-05",
    readingTime: "4 min",
    metaTitle: "Legionella logboek: wat erin moet",
    metaDescription:
      "Wat er in een legionella-logboek hoort, hoe u het praktisch bijhoudt en waar de ILT bij een controle als eerste naar kijkt.",
    keywords: [
      "legionella logboek",
      "legionella logboek bijhouden",
      "ILT controle legionella",
      "beheersplan registratie",
    ],
    excerpt:
      "Bij een controle is het logboek het eerste wat gevraagd wordt. Wat erin hoort, hoe u het praktisch houdt en welke fouten het vaakst terugkomen.",
    blocks: [
      {
        type: "p",
        text: "Uw beheersmaatregelen kunnen perfect zijn uitgevoerd, maar als u het niet kunt aantonen, telt het niet. Het logboek is het bewijs dat u uw beheersplan daadwerkelijk uitvoert. Bij een controle door de Inspectie Leefomgeving en Transport is het steevast het eerste document dat gevraagd wordt.",
      },
      { type: "h3", text: "Wat er in het logboek hoort" },
      {
        type: "list",
        items: [
          "De actuele risicoanalyse en het bijbehorende beheersplan",
          "Een actuele tekening of tappuntenlijst van de installatie",
          "Registratie van elke spoelbeurt: datum, tappunt, uitvoerder",
          "Temperatuurmetingen met datum, locatie en meetwaarde",
          "Resultaten van de keerklepcontroles en de boileronderhoudsbeurten",
          "Alle monsterresultaten, inclusief de rapporten van het laboratorium",
          "Bij overschrijding: de genomen maatregelen en de hercontroles",
          "Alle wijzigingen aan de installatie, met datum",
        ],
      },
      { type: "h3", text: "De fouten die het vaakst terugkomen" },
      {
        type: "list",
        items: [
          "Een logboek dat pas wordt bijgewerkt als er een controle is aangekondigd",
          "Spoelbeurten die zijn afgetekend met een vinkje zonder datum of naam",
          "Een risicoanalyse van acht jaar oud terwijl er tweemaal is verbouwd",
          "Monsterresultaten die niet te herleiden zijn tot een specifiek tappunt",
          "Een overschrijding zonder vastgelegde vervolgactie",
        ],
      },
      {
        type: "p",
        text: "Dat laatste is het meest schadelijk. Een overschrijding is op zichzelf geen overtreding: het gebeurt in de beste installaties. Wat wel telt, is of u aantoonbaar en tijdig hebt gehandeld. Een overschrijding zonder vastgelegde reactie is precies het punt waarop een controle vervelend wordt.",
      },
      { type: "h3", text: "Praktisch houden" },
      {
        type: "p",
        text: "Een logboek dat alleen digitaal in een map op een netwerkschijf staat, wordt in de praktijk slecht bijgehouden. Wat wel werkt: een fysieke aftekenlijst op de plek waar gespoeld wordt, die maandelijks wordt gescand en toegevoegd aan het digitale dossier. De drempel om af te tekenen moet lager zijn dan de drempel om het te vergeten.",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
