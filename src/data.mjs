// ==========================================================================
// Zentrale Datenquelle für Suzana's Haardesign
// Alle geschäftlichen Angaben an EINER Stelle – vor Live-Schaltung prüfen.
// Mit [PRÜFEN] markierte Werte sind noch vom Kunden zu bestätigen.
// ==========================================================================

export const site = {
  name: "Suzana's Haardesign",
  legalName: "Suzanas Haardesign GmbH", // [PRÜFEN] Rechtsform laut Branchenverzeichnis
  owner: "Suzana Hoti",                  // Quelle: Das Örtliche / ZaberBote 2023
  foundedBrackenheim: 1993,              // [PRÜFEN] ~30 Jahre in 2023 (ZaberBote)
  foundedGueglingen: 2009,               // [PRÜFEN] ~14 Jahre in 2023 (ZaberBote)
  teamSize: 5,                           // [PRÜFEN] "fünfköpfiges Team" (ZaberBote 2023)
  domain: "https://www.suzanas-haardesign.de", // [PRÜFEN] Wunschdomain
  email: null,                           // [PRÜFEN] öffentlich nicht auffindbar
  whatsapp: {
    display: "+49 153 3901963",
    intl: "491533901963",
  },
  social: {
    instagram: "https://www.instagram.com/suzanas_haardesign/",
    facebook: "https://www.facebook.com/p/Suzanas-Haardesign-100054323869623/?locale=de_DE",
    instagramHandle: "@suzanas_haardesign",
  },
};

// WhatsApp-Deeplinks mit vorausgefülltem Text (verschiedene Absichten)
export const wa = {
  general: `https://wa.me/${site.whatsapp.intl}?text=${encodeURIComponent("Hallo Suzana's Haardesign, ich habe eine Frage.")}`,
  appointment: `https://wa.me/${site.whatsapp.intl}?text=${encodeURIComponent("Hallo Suzana's Haardesign, ich würde gerne einen Termin vereinbaren.")}`,
  career: `https://wa.me/${site.whatsapp.intl}?text=${encodeURIComponent("Hallo, ich interessiere mich für eine Stelle bei Suzana's Haardesign. Ich würde gerne mehr über die aktuellen Möglichkeiten erfahren.")}`,
};

export const locations = [
  {
    id: "brackenheim",
    slug: "standort-brackenheim.html",
    city: "Brackenheim",
    label: "Salon Brackenheim",
    street: "Theodor-Heuss-Straße 7",
    zip: "74336",
    phoneDisplay: "07135 6145",
    phoneTel: "+4971356145",
    tagline: "Unser Stammhaus – seit 1993 im Herzen von Brackenheim.",
    // Bewertung aus öffentlichem Branchenverzeichnis (Google), Stand 07/2026 – [PRÜFEN]
    rating: { score: "4,9", count: 48, source: "Google" },
    maps: "https://www.google.com/maps/search/?api=1&query=Suzana%27s%20Haardesign%20Theodor-Heuss-Stra%C3%9Fe%207%2074336%20Brackenheim",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Theodor-Heuss-Stra%C3%9Fe%207%2C%2074336%20Brackenheim",
    image: "atmosphaere-spiegel",
    imageAlt: "Heller Salonbereich mit runden, beleuchteten Spiegeln",
    intro:
      "In der Theodor-Heuss-Straße hat für Suzana Hoti alles begonnen. Hier verbinden wir gewachsene Erfahrung mit modernem Handwerk – für Damen, Herren und Kinder aus Brackenheim und Umgebung.",
  },
  {
    id: "gueglingen",
    slug: "standort-gueglingen.html",
    city: "Güglingen",
    label: "Salon Güglingen",
    street: "Maulbronner Straße 6",
    zip: "74363",
    phoneDisplay: "07135 12511",
    phoneTel: "+49713512511",
    tagline: "Unser zweiter Salon – seit 2009 mitten in Güglingen.",
    rating: { score: "4,7", count: 23, source: "Google" },
    maps: "https://www.google.com/maps/search/?api=1&query=Suzana%27s%20Haardesign%20Maulbronner%20Stra%C3%9Fe%206%2074363%20G%C3%BCglingen",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Maulbronner%20Stra%C3%9Fe%206%2C%2074363%20G%C3%BCglingen",
    image: "atmosphaere-waschbecken",
    imageAlt: "Moderner Salonbereich mit Waschplätzen und warmer Beleuchtung",
    intro:
      "Mitten in Güglingen begrüßt dich unser zweiter Salon. Gleiches Handwerk, gleiche Sorgfalt – ein eingespieltes Team, das sich Zeit für dein Haar nimmt.",
  },
];

// Öffnungszeiten sind öffentlich widersprüchlich → bewusst neutral.
// [PRÜFEN] Konkrete Zeiten je Standort vor Live-Schaltung bestätigen.
export const hoursNote = "Termine nach telefonischer Vereinbarung";

export const services = [
  {
    id: "damen",
    title: "Damen",
    short: "Schnitt, Föhnen & Typberatung",
    image: "damen-foehnen",
    alt: "Friseurin föhnt langes, blondes Haar im Salon",
    text:
      "Ein Schnitt, der zu deinem Alltag passt – und den du zu Hause selbst wieder hinbekommst. Wir beraten dich zu Form, Länge und Pflege und nehmen uns Zeit, dein Haar wirklich zu verstehen.",
    points: ["Haarschnitt & Nachschnitt", "Föhnen & Styling", "Typ- und Pflegeberatung"],
  },
  {
    id: "herren",
    title: "Herren",
    short: "Klassisch bis modern",
    image: "herren-bart",
    alt: "Herr bekommt einen präzisen Haarschnitt im Salon",
    text:
      "Vom klassischen Herrenschnitt bis zum modernen Look mit sauberen Konturen. Unkompliziert, präzise und in entspannter Atmosphäre.",
    points: ["Herrenhaarschnitt", "Konturen & Übergänge", "Bart- und Pflegetipps"],
  },
  {
    id: "kinder",
    title: "Kinder",
    short: "Geduldig & entspannt",
    image: "damen-styling-2",
    alt: "Ruhige Schnittsituation im Salon",
    text:
      "Der erste Haarschnitt oder der schnelle Nachschnitt vor der Schule: Bei uns dürfen Kinder Kind sein. Wir arbeiten geduldig und ohne Hektik.",
    points: ["Kinderhaarschnitt", "Viel Geduld", "Kleine Belohnung inklusive"],
  },
  {
    id: "farbe",
    title: "Coloration & Strähnen",
    short: "Farbe mit Gefühl",
    image: "balayage-braun",
    alt: "Langes Haar mit weichem, natürlichem Farbverlauf",
    text:
      "Ob dezente Auffrischung, warme Strähnen oder weiche Farbverläufe – wir setzen Farbe so ein, dass sie zu dir passt und gesund aussieht. Immer nach persönlicher Beratung.",
    points: ["Coloration & Tönung", "Strähnen & Highlights", "Weiche Farbverläufe"],
    note: "Balayage", // [PRÜFEN] konkrete Technik-Bezeichnung bestätigen
  },
  {
    id: "braut",
    title: "Braut & Anlass",
    short: "Für den großen Moment",
    image: "braut-hochsteckfrisur",
    alt: "Elegante Hochsteckfrisur wird gesteckt",
    text:
      "Hochzeit, Feier oder ein besonderer Abend: Wir stecken Hochsteckfrisuren und stylen deinen Anlasslook mit ruhiger Hand. Auf Wunsch mit vorherigem Probetermin.",
    points: ["Hochsteckfrisuren", "Brautstyling", "Probetermin auf Anfrage"],
  },
  {
    id: "beratung",
    title: "Beratung & Pflege",
    short: "Zeit für dein Haar",
    image: "detail-pflegeprodukte",
    alt: "Pflegeprodukte auf einem Holzregal in warmem Licht",
    text:
      "Bevor wir zur Schere greifen, hören wir zu. Wir schauen uns dein Haar an und empfehlen ehrlich, was wirklich sinnvoll ist – auch für zu Hause.",
    points: ["Ausführliche Beratung", "Pflegeempfehlung", "Ehrliche Einschätzung"],
  },
];

// Karriere: KEINE erfundenen Stellen. Nur allgemeine Initiativbewerbung.
// [PRÜFEN] Konkret offene Stellen / Ausbildungsplätze bestätigen.
export const careerFaq = [
  {
    q: "Muss ich mich klassisch bewerben?",
    a: "Für den ersten Kontakt reicht eine kurze Nachricht per WhatsApp oder ein Anruf. Alles Weitere klären wir persönlich – unkompliziert und ohne langen Bewerbungsprozess.",
  },
  {
    q: "An welchem Standort kann ich arbeiten?",
    a: "Wir haben zwei Salons – in Brackenheim und in Güglingen. Was für dich passt, besprechen wir gemeinsam.",
  },
  {
    q: "Auch als Berufseinsteigerin oder nach einer Pause?",
    a: "Melde dich gerne. Uns ist wichtiger, wie du arbeitest und mit Menschen umgehst, als der perfekte Lebenslauf.",
  },
];

// Sichtbare Nav (Reihenfolge)
export const nav = [
  { href: "index.html", label: "Start" },
  { href: "leistungen.html", label: "Leistungen" },
  { href: "ueber-uns.html", label: "Über uns" },
  { href: "standorte.html", label: "Standorte" },
  { href: "galerie.html", label: "Galerie" },
  { href: "karriere.html", label: "Karriere" },
  { href: "kontakt.html", label: "Kontakt" },
];
