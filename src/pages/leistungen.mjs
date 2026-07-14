import { site, wa, services, locations } from "../data.mjs";
import { page, img, btn, eyebrow, icon, pageHero, breadcrumb } from "../layout.mjs";

function serviceRow(s, i) {
  const reverse = i % 2 === 1;
  return `<article class="split reveal" id="${s.id}" style="margin-block:clamp(2.5rem,6vw,5rem)">
    <div class="split__media${reverse ? "" : ""}" ${reverse ? 'style="order:2"' : ""}>
      ${img(s.image, s.alt, { sizes: "(max-width:760px) 90vw, 560px" })}
    </div>
    <div class="split__body">
      ${eyebrow(s.short)}
      <h2 class="h-lg">${s.title}</h2>
      <p class="lead" style="margin-top:.75rem">${s.text}</p>
      <ul class="card__list" style="margin-top:1.5rem">
        ${s.points.map((p) => `<li>${p}</li>`).join("")}
      </ul>
      <div class="btn-group" style="margin-top:1.75rem">
        ${btn("Termin per WhatsApp", wa.appointment, { variant: "primary", icon: "whatsapp", external: true })}
        ${btn("Standort anrufen", "kontakt.html", { variant: "ghost" })}
      </div>
    </div>
  </article>`;
}

const jsonld = [
  {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: site.name,
    url: `${site.domain}/index.html`,
    makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
  },
];

const body = `
${pageHero({
  eyebrow: "Leistungen",
  title: "Handwerk für dein Haar.",
  sub: "Ein ehrlicher Überblick über das, was wir am besten können. Konkrete Wünsche, Aufwand und Preis besprechen wir immer persönlich – jedes Haar ist anders.",
  image: "damen-foehnen",
  imageAlt: "Föhnen und Styling von langem Haar im Salon",
})}
${breadcrumb([{ label: "Start", href: "index.html" }, { label: "Leistungen" }])}

<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      ${eyebrow("Unser Angebot")}
      <h2 class="h-xl">Von der Beratung bis zum großen Auftritt.</h2>
      <p class="lead measure">Wir arbeiten für Damen, Herren und Kinder – klassisch oder modern. Wichtig ist uns: Es soll zu dir passen und zu Hause funktionieren.</p>
    </div>
    ${services.map(serviceRow).join('<hr class="divider">')}
  </div>
</section>

<section class="section section--paper2">
  <div class="wrap">
    <div class="section-head section-head--center reveal">
      ${eyebrow("Gut zu wissen")}
      <h2 class="h-lg">Preise &amp; Termine</h2>
    </div>
    <div class="note-box reveal" style="max-width:44rem;margin:1.5rem auto 0;text-align:left">
      Da jeder Kopf anders ist, nennen wir Preise am liebsten nach einer kurzen Einschätzung vor Ort oder am Telefon. So gibt es keine Überraschungen. Ruf einfach in deinem Salon an oder schreib uns per WhatsApp – wir sagen dir gerne, was dein Wunsch kostet und wie viel Zeit wir einplanen.
    </div>
    <div class="center mt-cta reveal">
      <div class="btn-group" style="justify-content:center">
        ${btn("Termin per WhatsApp", wa.appointment, { variant: "gold", icon: "whatsapp", external: true })}
        ${locations.map((l) => btn(`${l.city}: ${l.phoneDisplay}`, `tel:${l.phoneTel}`, { variant: "ghost", icon: "phone" })).join("")}
      </div>
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap cta-band reveal">
    ${eyebrow("Noch unsicher, was passt?")}
    <h2>Lass uns kurz sprechen.</h2>
    <p>Wir beraten dich ehrlich – auch wenn die einfachste Lösung manchmal die beste ist.</p>
    <div class="btn-group">
      ${btn("Standort wählen", "standorte.html", { variant: "light" })}
      ${btn("Über uns", "ueber-uns.html", { variant: "outline-light" })}
    </div>
  </div>
</section>
`;

export default page({
  title: "Leistungen – Schnitt, Farbe, Braut & mehr | Suzana's Haardesign",
  description:
    "Unsere Leistungen: Damen- & Herrenhaarschnitte, Kinderhaarschnitt, Coloration & Strähnen, Braut- und Hochsteckfrisuren sowie ehrliche Beratung – in Brackenheim und Güglingen.",
  path: "leistungen.html",
  active: "leistungen.html",
  jsonld,
  body,
});
