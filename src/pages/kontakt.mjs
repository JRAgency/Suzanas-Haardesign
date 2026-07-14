import { site, wa, locations, hoursNote } from "../data.mjs";
import { page, btn, eyebrow, icon, pageHero, breadcrumb, locationInfo, mapCard } from "../layout.mjs";

function locBlock(l) {
  return `<article class="reveal">
    <div class="loc-card__badge" style="position:static;display:inline-flex;margin-bottom:1rem">${icon.route} ${l.city}</div>
    <h2 class="h-md">${l.label}</h2>
    ${locationInfo(l)}
    <div class="btn-group" style="margin-top:1.5rem">
      ${btn(`${l.city} anrufen`, `tel:${l.phoneTel}`, { variant: "primary", icon: "phone", arrow: false })}
      ${btn("Route öffnen", l.directions, { variant: "ghost", icon: "route", external: true })}
    </div>
  </article>`;
}

const body = `
${pageHero({
  eyebrow: "Kontakt",
  title: "So erreichst du uns.",
  sub: "Am schnellsten geht es telefonisch oder per WhatsApp. Wähle einfach deinen Salon – wir sind gerne für dich da.",
})}
${breadcrumb([{ label: "Start", href: "index.html" }, { label: "Kontakt" }])}

<section class="section">
  <div class="wrap">
    <div class="center reveal" style="max-width:44rem;margin-inline:auto">
      ${eyebrow("Am liebsten direkt").replace('class="eyebrow"','class="eyebrow" style="justify-content:center"')}
      <h2 class="h-lg">Schreib oder ruf uns an.</h2>
      <p class="lead" style="margin-top:.75rem">Eine kurze Nachricht per WhatsApp reicht für Terminwünsche und Fragen. Deine Nachricht ist bereits vorbereitet.</p>
      <div class="btn-group" style="justify-content:center;margin-top:1.75rem">
        ${btn("Termin per WhatsApp", wa.appointment, { variant: "gold", icon: "whatsapp", external: true })}
        ${btn("Allgemeine Frage per WhatsApp", wa.general, { variant: "ghost", icon: "whatsapp", external: true, arrow: false })}
      </div>
    </div>
  </div>
</section>

<section class="section section--paper2 section--tight">
  <div class="wrap contact-grid">
    ${locations.map(locBlock).join("")}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      ${eyebrow("Anfahrt")}
      <h2 class="h-lg">Route öffnen.</h2>
      <p class="muted measure" style="margin-top:.5rem">Aus Datenschutzgründen wird keine Karte automatisch geladen. Über die Buttons öffnest du direkt die Route in Google Maps.</p>
    </div>
    <div class="contact-grid" style="margin-top:2rem">
      ${locations.map((l) => `<div class="reveal">${mapCard(l)}</div>`).join("")}
    </div>
  </div>
</section>

<section class="section section--ink section--tight">
  <div class="wrap cta-band reveal">
    ${eyebrow("Lieber persönlich?")}
    <h2>Komm einfach vorbei.</h2>
    <p>Beide Salons freuen sich auf dich – ${hoursNote}.</p>
    <div class="btn-group">
      ${locations.map((l) => btn(`${l.city}: ${l.phoneDisplay}`, `tel:${l.phoneTel}`, { variant: "outline-light", icon: "phone", arrow: false })).join("")}
    </div>
  </div>
</section>
`;

export default page({
  title: "Kontakt – Suzana's Haardesign Brackenheim & Güglingen",
  description:
    "Kontakt zu Suzana's Haardesign: Telefon und WhatsApp für Brackenheim (07135 6145) und Güglingen (07135 12511). Adressen, Route und Terminvereinbarung.",
  path: "kontakt.html",
  active: "kontakt.html",
  jsonld: [{
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt – " + site.name,
    url: site.domain + "/kontakt.html",
  }],
  body,
});
