import { site, wa, locations, hoursNote } from "../data.mjs";
import { page, img, btn, eyebrow, icon, pageHero, breadcrumb } from "../layout.mjs";

function bigLocCard(l) {
  return `<article class="loc-card reveal">
    <div class="loc-card__media">
      ${img(l.image, l.imageAlt, { sizes: "(max-width:760px) 90vw, 560px" })}
      <span class="loc-card__badge">${icon.route} ${l.city}</span>
    </div>
    <div class="loc-card__body">
      <h3>${l.label}</h3>
      <address>${l.street}<br>${l.zip} ${l.city}</address>
      <div class="loc-meta">
        <a href="tel:${l.phoneTel}">${icon.phone} ${l.phoneDisplay}</a>
        <span>${icon.clock} ${hoursNote}</span>
        <span>${icon.star} <strong>${l.rating.score}</strong>&nbsp;/&nbsp;5 · ${l.rating.count} Google-Bewertungen</span>
      </div>
      <div class="loc-card__actions">
        ${btn("Zum Salon", l.slug, { variant: "primary" })}
        ${btn("Route öffnen", l.directions, { variant: "ghost", icon: "route", external: true })}
        ${btn("WhatsApp", wa.appointment, { variant: "ghost", icon: "whatsapp", external: true, arrow: false })}
      </div>
    </div>
  </article>`;
}

const jsonld = locations.map((l) => ({
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: `${site.name} – ${l.city}`,
  url: `${site.domain}/${l.slug}`,
  telephone: l.phoneTel,
  address: { "@type": "PostalAddress", streetAddress: l.street, postalCode: l.zip, addressLocality: l.city, addressCountry: "DE" },
}));

const body = `
${pageHero({
  eyebrow: "Standorte",
  title: "Zwei Salons in der Region.",
  sub: "Ob Brackenheim oder Güglingen – wähle einfach den Salon, der dir am nächsten liegt. Beide sind gut erreichbar und freuen sich auf dich.",
})}
${breadcrumb([{ label: "Start", href: "index.html" }, { label: "Standorte" }])}

<section class="section">
  <div class="wrap">
    <div class="loc-cards">
      ${locations.map(bigLocCard).join("")}
    </div>
  </div>
</section>

<section class="section section--paper2">
  <div class="wrap">
    <div class="section-head section-head--center reveal">
      ${eyebrow("Nicht sicher, welcher Salon?")}
      <h2 class="h-lg">Ruf einfach kurz an.</h2>
      <p class="lead measure" style="margin-inline:auto">Wir sagen dir gern, wo du am schnellsten einen Termin bekommst.</p>
    </div>
    <div class="center mt-cta reveal">
      <div class="btn-group" style="justify-content:center">
        ${locations.map((l) => btn(`${l.city}: ${l.phoneDisplay}`, `tel:${l.phoneTel}`, { variant: "ghost", icon: "phone", arrow: false })).join("")}
        ${btn("Termin per WhatsApp", wa.appointment, { variant: "gold", icon: "whatsapp", external: true })}
      </div>
    </div>
  </div>
</section>
`;

export default page({
  title: "Standorte – Suzana's Haardesign Brackenheim & Güglingen",
  description:
    "Unsere zwei Friseursalons: Suzana's Haardesign in Brackenheim (Theodor-Heuss-Straße 7) und Güglingen (Maulbronner Straße 6). Adressen, Telefonnummern und Route.",
  path: "standorte.html",
  active: "standorte.html",
  jsonld,
  body,
});
