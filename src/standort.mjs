import { site, wa, services, hoursNote } from "./data.mjs";
import { page, img, btn, eyebrow, icon, pageHero, breadcrumb, locationInfo, mapCard, locationJsonLd } from "./layout.mjs";

// Ausgewählte Leistungen als kompakte Chips (verweisen auf Leistungsseite)
const serviceChips = services
  .map((s) => `<a class="chip" href="leistungen.html#${s.id}" style="border-color:var(--line-2);color:var(--ink-2)">${s.title}</a>`)
  .join("");

export function standortPage(l, other) {
  const body = `
${pageHero({
  eyebrow: `Salon ${l.city}`,
  title: `Dein Friseur in ${l.city}.`,
  sub: l.tagline,
  image: l.image,
  imageAlt: l.imageAlt,
})}
${breadcrumb([{ label: "Start", href: "index.html" }, { label: "Standorte", href: "standorte.html" }, { label: l.city }])}

<section class="section">
  <div class="wrap contact-grid">
    <div class="reveal">
      ${eyebrow("Willkommen")}
      <h2 class="h-lg">${l.label}</h2>
      <p class="lead" style="margin-top:.75rem">${l.intro}</p>
      <div class="btn-group" style="margin-top:1.75rem">
        ${btn(`${l.city} anrufen`, `tel:${l.phoneTel}`, { variant: "primary", icon: "phone", arrow: false })}
        ${btn("Termin per WhatsApp", wa.appointment, { variant: "ghost", icon: "whatsapp", external: true })}
      </div>
    </div>
    <div class="reveal" data-delay="1">
      ${locationInfo(l)}
    </div>
  </div>
</section>

<section class="section section--paper2">
  <div class="wrap contact-grid">
    <div class="reveal">
      ${eyebrow("Anfahrt")}
      <h2 class="h-lg">So findest du uns.</h2>
      <p class="muted" style="margin-top:.75rem">Du erreichst uns in der ${l.street} in ${l.zip} ${l.city}. Aus Datenschutzgründen laden wir die interaktive Karte erst, wenn du sie brauchst – oder du öffnest direkt die Route.</p>
      <div class="loc-meta" style="margin-top:1.5rem">
        <a href="tel:${l.phoneTel}">${icon.phone} ${l.phoneDisplay}</a>
        <span>${icon.clock} ${hoursNote}</span>
      </div>
    </div>
    <div class="reveal" data-delay="1">${mapCard(l)}</div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      ${eyebrow("Vor Ort für dich")}
      <h2 class="h-xl">Das bieten wir in ${l.city}.</h2>
      <p class="lead measure">Für Damen, Herren und Kinder – vom Schnitt über Farbe bis zum Anlasslook. Was genau du dir wünschst, besprechen wir am besten persönlich.</p>
    </div>
    <div class="career-teaser__list" style="margin-top:1.75rem">${serviceChips}</div>
    <div class="cards cards--3 reveal" style="margin-top:2.5rem">
      ${[services[0], services[3], services[4]]
        .map(
          (s) => `<article class="card">
        <div class="card__media">${img(s.image, s.alt, { sizes: "(max-width:560px) 90vw, (max-width:960px) 45vw, 380px" })}</div>
        <div class="card__body">
          <p class="card__eyebrow">${s.short}</p>
          <h3>${s.title}</h3>
          <p class="card__text">${s.text}</p>
          <div class="card__link"><a href="leistungen.html#${s.id}">Mehr erfahren ${icon.arrow}</a></div>
        </div>
      </article>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section section--paper2">
  <div class="wrap">
    <div class="proof" style="max-width:none">
      <div class="proof-card reveal">
        <div class="proof-card__top">
          <span class="proof-card__score">${l.rating.score}</span>
          <div><span class="proof-stars" aria-hidden="true">${icon.star.repeat(5)}</span><div class="proof-card__meta">von 5 · ${l.rating.count} Bewertungen</div></div>
        </div>
        <p class="proof-card__loc">${l.label}</p>
        <p class="proof-card__meta">Bewertungen von unseren Kundinnen und Kunden auf Google.</p>
        <div class="proof-card__link"><a href="${l.maps}" target="_blank" rel="noopener">Alle Bewertungen ansehen ${icon.arrow}</a></div>
      </div>
      <div class="proof-card reveal" data-delay="1" style="justify-content:center">
        ${eyebrow("Auch in der Nähe")}
        <h3 class="h-md">Lieber nach ${other.city}?</h3>
        <p class="muted">Unser zweiter Salon liegt in der ${other.street}, ${other.zip} ${other.city}.</p>
        <div class="btn-group" style="margin-top:1rem">
          ${btn(`Salon ${other.city}`, other.slug, { variant: "ghost" })}
          ${btn(`${other.phoneDisplay}`, `tel:${other.phoneTel}`, { variant: "ghost", icon: "phone", arrow: false })}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap cta-band reveal">
    ${eyebrow(`Termin in ${l.city}`)}
    <h2>Wir freuen uns auf dich.</h2>
    <p>Ruf einfach an oder schreib uns kurz per WhatsApp – wir finden einen Termin, der passt.</p>
    <div class="btn-group">
      ${btn(`${l.city} anrufen`, `tel:${l.phoneTel}`, { variant: "light", icon: "phone", arrow: false })}
      ${btn("Termin per WhatsApp", wa.appointment, { variant: "gold", icon: "whatsapp", external: true })}
      ${btn("Route öffnen", l.directions, { variant: "outline-light", icon: "route", external: true })}
    </div>
  </div>
</section>
`;

  return page({
    title: `Friseur ${l.city} – Suzana's Haardesign, ${l.street}`,
    description: `Suzana's Haardesign in ${l.city}: Friseur für Damen, Herren & Kinder – Schnitt, Farbe, Strähnen, Braut- & Hochsteckfrisuren. ${l.street}, ${l.zip} ${l.city}. Termin: ${l.phoneDisplay}.`,
    path: l.slug,
    active: "standorte.html",
    ogImage: `assets/img/${l.image}-1200.webp`,
    jsonld: [locationJsonLd(l)],
    body,
  });
}
