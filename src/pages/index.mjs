import { site, wa, locations, services, hoursNote } from "../data.mjs";
import { page, img, btn, eyebrow, icon } from "../layout.mjs";

const stars = (n = 5) => `<span class="proof-stars" aria-hidden="true">${icon.star.repeat(n)}</span>`;

function serviceCard(s, delay) {
  return `<article class="card reveal" data-delay="${delay}">
    <div class="card__media">${img(s.image, s.alt, { sizes: "(max-width:560px) 90vw, (max-width:960px) 45vw, 380px" })}</div>
    <div class="card__body">
      <p class="card__eyebrow">${s.short}</p>
      <h3>${s.title}</h3>
      <p class="card__text">${s.text}</p>
      <div class="card__link"><a href="leistungen.html#${s.id}">Mehr erfahren ${icon.arrow}</a></div>
    </div>
  </article>`;
}

function locCard(l) {
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
        ${btn("Route öffnen", l.directions, { variant: "ghost", icon: "route", external: true })}
        ${btn("Zum Salon", l.slug, { variant: "primary" })}
      </div>
    </div>
  </article>`;
}

const jsonld = [
  {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: site.name,
    url: site.domain,
    image: `${site.domain}/assets/img/hero-salon-1200.webp`,
    founder: { "@type": "Person", name: site.owner },
    sameAs: [site.social.instagram, site.social.facebook],
    location: locations.map((l) => ({
      "@type": "HairSalon",
      name: l.label,
      address: { "@type": "PostalAddress", streetAddress: l.street, postalCode: l.zip, addressLocality: l.city, addressCountry: "DE" },
      telephone: l.phoneTel,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.domain,
    inLanguage: "de-DE",
  },
];

const body = `
<section class="hero" aria-label="Willkommen">
  <div class="hero__media">${img("hero-salon", "Eleganter Friseursalon mit warmem Licht und großem Spiegel", { kind: "hero", eager: true, sizes: "100vw" })}</div>
  <div class="wrap hero__inner">
    <div class="hero__content">
      ${eyebrow("Friseur in Brackenheim & Güglingen", true)}
      <h1>Dein Haar in <em>guten Händen</em> – seit über 30 Jahren.</h1>
      <p class="hero__sub">Zwei Salons, ein Anspruch: ehrliche Beratung, sauberes Handwerk und ein Ergebnis, mit dem du gerne aus der Tür gehst.</p>
      <div class="hero__cta btn-group">
        ${btn("Termin per WhatsApp", wa.appointment, { variant: "gold", icon: "whatsapp", external: true })}
        ${btn("Standort wählen", "standorte.html", { variant: "outline-light" })}
      </div>
      <div class="hero__trust">
        <div class="hero__trust-item">
          <span class="hero__stars" aria-hidden="true">${icon.star.repeat(5)}</span>
          <span>Sehr gut auf Google bewertet</span>
        </div>
        <div class="hero__trust-item">
          <strong>2</strong>
          <span>Salons in der Region</span>
        </div>
        <div class="hero__trust-item">
          <strong>1993</strong>
          <span>gegründet in Brackenheim</span>
        </div>
      </div>
    </div>
  </div>
  <div class="scroll-cue" aria-hidden="true"><span>Entdecken</span><span class="scroll-cue__line"></span></div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="split__media reveal">
      ${img("hero-salon-natural", "Warmer, moderner Salonbereich mit Holzelementen", { sizes: "(max-width:760px) 90vw, 560px" })}
      <div class="tag"><strong>Suzana Hoti</strong><span>Inhaberin & Gründerin</span></div>
    </div>
    <div class="split__body reveal" data-delay="1">
      ${eyebrow("Willkommen bei Suzana's")}
      <h2 class="h-xl">Ein Salon, in dem man dich kennt.</h2>
      <p class="lead">Was 1993 in Brackenheim als kleiner Salon begann, sind heute zwei feste Adressen für gutes Friseurhandwerk in Brackenheim und Güglingen.</p>
      <p class="muted" style="margin-top:1rem">Bei uns bekommst du keine Fließband-Behandlung. Wir hören zu, beraten ehrlich und nehmen uns die Zeit, die dein Haar braucht – ob schneller Nachschnitt oder große Veränderung.</p>
      <div class="stat-row">
        <div class="stat"><b>30+</b><span>Jahre Erfahrung</span></div>
        <div class="stat"><b>2</b><span>Salons in der Region</span></div>
        <div class="stat"><b>5</b><span>Hände im Team</span></div>
      </div>
      <div class="mt-cta">${btn("Lern uns kennen", "ueber-uns.html", { variant: "ghost" })}</div>
    </div>
  </div>
</section>

<section class="section section--paper2" aria-labelledby="leistungen-title">
  <div class="wrap">
    <div class="section-head reveal">
      ${eyebrow("Was wir machen")}
      <h2 class="h-xl" id="leistungen-title">Leistungen, die zu dir passen.</h2>
      <p class="lead measure">Vom klassischen Schnitt bis zum großen Auftritt – hier ein Auszug. Was genau du dir wünschst, klären wir am besten persönlich.</p>
    </div>
    <div class="cards cards--3" style="margin-top:clamp(2rem,4vw,3rem)">
      ${serviceCard(services[0], 0)}
      ${serviceCard(services[3], 1)}
      ${serviceCard(services[4], 2)}
    </div>
    <div class="center mt-cta reveal">${btn("Alle Leistungen ansehen", "leistungen.html", { variant: "primary" })}</div>
  </div>
</section>

<section class="section" aria-labelledby="warum-title">
  <div class="wrap">
    <div class="section-head reveal">
      ${eyebrow("Warum Suzana's")}
      <h2 class="h-xl" id="warum-title">Handwerk mit Haltung.</h2>
    </div>
    <div class="features" style="margin-top:clamp(2rem,4vw,3rem)">
      <div class="feature reveal"><span class="feature__no">01</span><h3>Ehrliche Beratung</h3><p>Wir empfehlen, was zu dir und deinem Haar passt – nicht das teuerste Paket. Auch mal ein klares „das lassen wir lieber“.</p></div>
      <div class="feature reveal" data-delay="1"><span class="feature__no">02</span><h3>Erfahrenes Team</h3><p>Gewachsen über viele Jahre, in Brackenheim und Güglingen. Menschen, die ihr Handwerk verstehen und gern machen.</p></div>
      <div class="feature reveal" data-delay="2"><span class="feature__no">03</span><h3>Zeit für dich</h3><p>Kein Durchschleusen. Wir planen so, dass du dich in Ruhe hinsetzen und einfach mal abschalten kannst.</p></div>
    </div>
  </div>
</section>

<section class="section section--paper2" aria-labelledby="standorte-title">
  <div class="wrap">
    <div class="section-head reveal">
      ${eyebrow("Zwei Salons")}
      <h2 class="h-xl" id="standorte-title">Finde deinen Salon.</h2>
      <p class="lead measure">Beide Salons sind gut erreichbar. Wähle einfach den, der näher liegt – oder ruf kurz an, wenn du unsicher bist.</p>
    </div>
    <div class="loc-cards" style="margin-top:clamp(2rem,4vw,3rem)">
      ${locations.map(locCard).join("")}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="bewertungen-title">
  <div class="wrap">
    <div class="section-head reveal">
      ${eyebrow("Was andere sagen")}
      <h2 class="h-xl" id="bewertungen-title">Gut bewertet – da, wo es zählt.</h2>
      <p class="lead measure">Die ehrlichste Rückmeldung kommt von unseren Kundinnen und Kunden auf Google.</p>
    </div>
    <div class="proof" style="margin-top:clamp(2rem,4vw,3rem)">
      ${locations
        .map(
          (l) => `<div class="proof-card reveal">
        <div class="proof-card__top">
          <span class="proof-card__score">${l.rating.score}</span>
          <div>${stars(5)}<div class="proof-card__meta">von 5 · ${l.rating.count} Bewertungen</div></div>
        </div>
        <p class="proof-card__loc">${l.label}</p>
        <p class="proof-card__meta">Bewertungen auf Google – Stand wird regelmäßig aktualisiert.</p>
        <div class="proof-card__link"><a href="${l.maps}" target="_blank" rel="noopener">Alle Bewertungen auf Google lesen ${icon.arrow}</a></div>
      </div>`
        )
        .join("")}
    </div>
    <p class="proof-note reveal" style="margin-top:1.25rem">Bewertungsdaten stammen von öffentlichen Google-Unternehmensprofilen und werden nicht per Tracking eingebunden.</p>
  </div>
</section>

<section class="section section--tight">
  <div class="wrap">
    <div class="career-teaser reveal">
      <div class="career-teaser__grid">
        <div class="career-teaser__body">
          ${eyebrow("Karriere bei Suzana's")}
          <h2>Werde Teil unseres Teams.</h2>
          <p>Du suchst einen Salon, in dem dein Handwerk und deine Persönlichkeit zählen? Bei dem man dich beim Namen kennt und nicht als Nummer behandelt? Dann lern uns unkompliziert kennen.</p>
          <div class="career-teaser__list">
            <span class="chip">Zwei Standorte</span>
            <span class="chip">Eingespieltes Team</span>
            <span class="chip">Bewerbung per WhatsApp</span>
          </div>
          <div class="career-teaser__cta">
            ${btn("Jetzt per WhatsApp bewerben", wa.career, { variant: "gold", icon: "whatsapp", external: true })}
            ${btn("Zur Karriere-Seite", "karriere.html", { variant: "outline-light" })}
          </div>
        </div>
        <div class="career-teaser__media">${img("herren-barber", "Friseur bei der Arbeit im Salon", { sizes: "(max-width:960px) 100vw, 500px" })}</div>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper2" aria-labelledby="social-title">
  <div class="wrap">
    <div class="section-head section-head--center reveal">
      ${eyebrow("Auf Instagram")}
      <h2 class="h-xl" id="social-title">Einblicke aus dem Salon.</h2>
      <p class="lead measure" style="margin-inline:auto">Aktuelle Looks und Momente teilen wir auf Instagram. Schau vorbei – ein Klick öffnet Instagram in einem neuen Tab.</p>
    </div>
    <div class="social-grid reveal" style="margin-top:clamp(2rem,4vw,3rem)">
      ${["balayage-blond", "hochsteck-blond", "herren-styling", "detail-werkzeuge-holz"]
        .map(
          (n) => `<a class="social-tile" href="${site.social.instagram}" target="_blank" rel="noopener" aria-label="Suzana's Haardesign auf Instagram ansehen (öffnet extern)">
        ${img(n, "", { sizes: "(max-width:560px) 45vw, 280px" })}
        <span class="social-tile__ig" aria-hidden="true">${icon.instagram}</span>
      </a>`
        )
        .join("")}
    </div>
    <div class="center mt-cta reveal">${btn("Auf Instagram entdecken", site.social.instagram, { variant: "ghost", icon: "instagram", external: true })}</div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap cta-band reveal">
    ${eyebrow("Bereit für den nächsten Termin?")}
    <h2>Wir freuen uns auf dich.</h2>
    <p>Schreib uns kurz per WhatsApp oder ruf direkt in deinem Salon an – wir finden gemeinsam einen passenden Termin.</p>
    <div class="btn-group">
      ${btn("Termin per WhatsApp", wa.appointment, { variant: "gold", icon: "whatsapp", external: true })}
      ${btn("Standort & Kontakt", "kontakt.html", { variant: "outline-light" })}
    </div>
  </div>
</section>
`;

export default page({
  title: "Suzana's Haardesign – Friseur in Brackenheim & Güglingen",
  description:
    "Friseursalon Suzana's Haardesign in Brackenheim und Güglingen: Schnitt, Farbe, Strähnen, Braut- & Hochsteckfrisuren. Ehrliche Beratung, erfahrenes Team. Termin per WhatsApp oder Telefon.",
  path: "index.html",
  active: "index.html",
  jsonld,
  body,
});
