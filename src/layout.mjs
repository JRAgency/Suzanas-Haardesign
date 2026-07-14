import { site, wa, locations, nav, hoursNote } from "./data.mjs";

const YEAR = 2026;

// ---- Inline-Icons (dezent, einheitlicher Strich) ---------------------------
export const icon = {
  phone: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1z" fill="currentColor"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 0 1 6.9 12l-.3.5.6 2.1-2.2-.6-.5.3A8 8 0 1 1 12 4zm-3.3 3.9c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.7 4.2 3.7 2.1.8 2.5.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3l-1.5-.7c-.2-.1-.4-.1-.5.1l-.6.8c-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2.1-1.4-.5-.6-.9-1.2-1-1.4-.1-.2 0-.3.1-.4l.4-.4c.1-.2.2-.3.2-.5s0-.3-.1-.4l-.7-1.7c-.2-.4-.4-.4-.6-.4z" fill="currentColor"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.4V5.6c-.7-.1-1.4-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2H8.3V14h2.3v7z" fill="currentColor"/></svg>`,
  route: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a7 7 0 0 0-7 7c0 4.6 6.2 12.2 6.5 12.5a.7.7 0 0 0 1 0C12.8 21.2 19 13.6 19 9a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" fill="currentColor"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  star: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m12 3 2.6 5.3 5.9.8-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8-4.3-4.1 5.9-.8z" fill="currentColor"/></svg>`,
  scissors: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="6" cy="6" r="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="6" cy="18" r="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 7.5 20 18M8 16.5 20 6M8.2 7.4 13 11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  close: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
};

// ---- Bild-Helfer (responsive WebP mit srcset) ------------------------------
// kind: "content" (460/760/1200) | "hero" (760/1200/1920)
export function img(name, alt, { kind = "content", sizes = "100vw", cls = "", eager = false, ratio = "" } = {}) {
  const widths = kind === "hero" ? [760, 1200, 1920] : [460, 760, 1200];
  const srcset = widths.map((w) => `assets/img/${name}-${w}.webp ${w}w`).join(", ");
  const fallback = `assets/img/${name}-${kind === "hero" ? 1200 : 760}.webp`;
  const loading = eager ? "" : ' loading="lazy"';
  const fetch = eager ? ' fetchpriority="high"' : "";
  const style = ratio ? ` style="aspect-ratio:${ratio}"` : "";
  return `<img src="${fallback}" srcset="${srcset}" sizes="${sizes}" alt="${alt}" decoding="async"${loading}${fetch} class="${cls}"${style}>`;
}

// ---- Buttons ---------------------------------------------------------------
export function btn(label, href, { variant = "primary", icon: ic = "", external = false, ariaLabel = "", sm = false, arrow: withArrow } = {}) {
  const rel = external ? ' target="_blank" rel="noopener"' : "";
  const aria = ariaLabel ? ` aria-label="${ariaLabel}"` : "";
  const iconHtml = ic ? `<span class="btn__icon">${icon[ic] || ""}</span>` : "";
  const showArrow = withArrow !== undefined ? withArrow : variant === "primary";
  const arrow = showArrow ? `<span class="btn__arrow">${icon.arrow}</span>` : "";
  return `<a class="btn btn--${variant}${sm ? " btn--sm" : ""}" href="${href}"${rel}${aria}>${iconHtml}<span>${label}</span>${arrow}</a>`;
}

// ---- Eyebrow / Section-Titel ----------------------------------------------
export function eyebrow(text, light = false) {
  return `<p class="eyebrow${light ? " eyebrow--light" : ""}"><span class="eyebrow__mark" aria-hidden="true"></span>${text}</p>`;
}

// ---- <head> ----------------------------------------------------------------
export function head({ title, description, path, ogImage = "assets/img/hero-salon-1200.webp", jsonld = [] }) {
  const url = `${site.domain}/${path}`;
  const ld = jsonld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("\n");
  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#171310">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.name}">
<meta property="og:locale" content="de_DE">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${site.domain}/${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="assets/logo/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="assets/logo/apple-touch-icon.png">
<link rel="preload" as="font" type="font/woff2" href="assets/fonts/cormorant-garamond-600.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="assets/fonts/inter-400.woff2" crossorigin>
<link rel="stylesheet" href="css/styles.css">
${ld}
</head>`;
}

// ---- Header ----------------------------------------------------------------
export function header(active) {
  const links = nav
    .map((n) => {
      const cur = n.href === active ? ' aria-current="page"' : "";
      return `<li><a href="${n.href}"${cur}>${n.label}</a></li>`;
    })
    .join("");
  return `<a class="skip-link" href="#main">Zum Inhalt springen</a>
<header class="site-header" data-header>
  <div class="wrap site-header__inner">
    <a class="brand" href="index.html" aria-label="${site.name} – zur Startseite">
      <img src="assets/logo/logo.webp" width="176" height="58" alt="${site.name}" class="brand__logo">
    </a>
    <nav class="site-nav" aria-label="Hauptnavigation">
      <ul>${links}</ul>
    </nav>
    <div class="site-header__actions">
      <a class="header-phone" href="tel:${locations[0].phoneTel}">
        <span class="header-phone__icon" aria-hidden="true">${icon.phone}</span>
        <span class="header-phone__text"><span class="header-phone__label">Brackenheim</span>${locations[0].phoneDisplay}</span>
      </a>
      ${btn("WhatsApp-Termin", wa.appointment, { variant: "primary", icon: "whatsapp", external: true, sm: true, arrow: false })}
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Menü öffnen" data-nav-toggle>
        <span class="nav-toggle__open" aria-hidden="true">${icon.menu}</span>
        <span class="nav-toggle__close" aria-hidden="true">${icon.close}</span>
      </button>
    </div>
  </div>
</header>
<div class="mobile-nav" id="mobile-nav" data-mobile-nav hidden>
  <nav class="mobile-nav__inner wrap" aria-label="Mobile Navigation">
    <ul>${nav.map((n) => `<li><a href="${n.href}"${n.href === active ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("")}</ul>
    <div class="mobile-nav__cta">
      ${btn("Termin per WhatsApp", wa.appointment, { variant: "primary", icon: "whatsapp", external: true })}
      <div class="mobile-nav__phones">
        ${locations
          .map(
            (l) =>
              `<a href="tel:${l.phoneTel}"><span aria-hidden="true">${icon.phone}</span> ${l.city}: ${l.phoneDisplay}</a>`
          )
          .join("")}
      </div>
      <div class="mobile-nav__social">
        <a href="${site.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram (öffnet extern)">${icon.instagram}</a>
        <a href="${site.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook (öffnet extern)">${icon.facebook}</a>
      </div>
    </div>
  </nav>
</div>`;
}

// ---- Footer ----------------------------------------------------------------
export function footer() {
  return `<footer class="site-footer">
  <div class="wrap site-footer__grid">
    <div class="site-footer__brand">
      <img src="assets/logo/logo-light.webp" width="180" height="60" alt="${site.name}" class="site-footer__logo">
      <p>Friseurhandwerk mit Herz in Brackenheim und Güglingen. Zwei Salons, ein Anspruch: dass du dich mit deinem Haar wohlfühlst.</p>
      <div class="site-footer__social">
        <a href="${site.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram (öffnet extern)">${icon.instagram}</a>
        <a href="${site.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook (öffnet extern)">${icon.facebook}</a>
      </div>
    </div>
    ${locations
      .map(
        (l) => `<div class="site-footer__col">
      <h2>${l.label}</h2>
      <address>
        ${l.street}<br>${l.zip} ${l.city}<br>
        <a href="tel:${l.phoneTel}">${l.phoneDisplay}</a><br>
        <span class="site-footer__hours">${hoursNote}</span>
      </address>
      <a class="site-footer__route" href="${l.directions}" target="_blank" rel="noopener">${icon.route}<span>Route öffnen</span></a>
    </div>`
      )
      .join("")}
    <nav class="site-footer__col" aria-label="Footer-Navigation">
      <h2>Entdecken</h2>
      <ul class="site-footer__nav">
        <li><a href="leistungen.html">Leistungen</a></li>
        <li><a href="ueber-uns.html">Über uns</a></li>
        <li><a href="standorte.html">Standorte</a></li>
        <li><a href="galerie.html">Galerie</a></li>
        <li><a href="karriere.html">Karriere</a></li>
        <li><a href="kontakt.html">Kontakt</a></li>
      </ul>
    </nav>
  </div>
  <div class="wrap site-footer__bottom">
    <p>© <span data-year>${YEAR}</span> ${site.name}. Alle Rechte vorbehalten.</p>
    <ul class="site-footer__legal">
      <li><a href="impressum.html">Impressum</a></li>
      <li><a href="datenschutz.html">Datenschutz</a></li>
      <li><button type="button" class="linklike" data-open-consent>Datenschutz&shy;einstellungen</button></li>
    </ul>
  </div>
</footer>`;
}

// ---- Schwebender WhatsApp-Button ------------------------------------------
export function whatsappFloat() {
  return `<a class="wa-float" href="${wa.general}" target="_blank" rel="noopener" aria-label="Kontakt per WhatsApp aufnehmen (öffnet WhatsApp)">
    <span class="wa-float__icon" aria-hidden="true">${icon.whatsapp}</span>
    <span class="wa-float__label">WhatsApp</span>
  </a>`;
}

// ---- Consent-Banner (nur externe Medien: Social/Karten) --------------------
export function consent() {
  return `<div class="consent" data-consent hidden role="dialog" aria-modal="false" aria-labelledby="consent-title" aria-describedby="consent-desc">
  <div class="consent__box" tabindex="-1">
    <h2 class="consent__title" id="consent-title">Datenschutz &amp; externe Inhalte</h2>
    <p class="consent__desc" id="consent-desc">Diese Website funktioniert ohne Tracking und ohne Marketing-Cookies. Nur wenn du externe Inhalte wie eine eingebettete Google-Karte oder Social-Media-Beiträge lädst, werden Daten an den jeweiligen Anbieter übertragen. Was möchtest du zulassen?</p>
    <div class="consent__row">
      <label class="consent__opt"><input type="checkbox" checked disabled> <span><strong>Notwendig</strong> – für den Betrieb der Seite (immer aktiv)</span></label>
      <label class="consent__opt"><input type="checkbox" data-consent-external> <span><strong>Externe Medien</strong> – Google Maps &amp; Social-Media-Einbettungen</span></label>
    </div>
    <div class="consent__actions">
      <button type="button" class="btn btn--primary" data-consent-accept-all>Alle akzeptieren</button>
      <button type="button" class="btn btn--ghost" data-consent-save>Auswahl speichern</button>
      <button type="button" class="btn btn--ghost" data-consent-reject>Nur notwendige</button>
    </div>
  </div>
</div>`;
}

// ---- Seitengerüst ----------------------------------------------------------
export function page({ title, description, path, active, jsonld = [], ogImage, body }) {
  return `${head({ title, description, path, jsonld, ogImage })}
<body>
${header(active)}
<main id="main">
${body}
</main>
${footer()}
${whatsappFloat()}
${consent()}
<script src="js/main.js" defer></script>
</body>
</html>`;
}

// ---- Page-Hero (Unterseiten) ----------------------------------------------
export function pageHero({ eyebrow: eb, title, sub, image, imageAlt }) {
  if (image) {
    return `<section class="page-hero page-hero--media">
      <div class="page-hero__media">${img(image, imageAlt || "", { kind: "content", eager: true, sizes: "100vw" })}</div>
      <div class="wrap">
        ${eb ? eyebrow(eb, true) : ""}
        <h1>${title}</h1>
        ${sub ? `<p class="page-hero__sub">${sub}</p>` : ""}
      </div>
    </section>`;
  }
  return `<section class="page-hero">
    <div class="wrap">
      ${eb ? eyebrow(eb).replace('class="eyebrow"', 'class="eyebrow eyebrow--light"') : ""}
      <h1>${title}</h1>
      ${sub ? `<p class="page-hero__sub">${sub}</p>` : ""}
    </div>
  </section>`;
}

// ---- Standort-Detailblock (für Standort- & Kontaktseiten) ------------------
export function locationInfo(l) {
  return `<div class="info-list">
    <div class="info-list__row">
      <span class="info-list__icon" aria-hidden="true">${icon.route}</span>
      <div><p class="info-list__label">Adresse</p><p class="info-list__value">${l.street}, ${l.zip} ${l.city}</p></div>
    </div>
    <div class="info-list__row">
      <span class="info-list__icon" aria-hidden="true">${icon.phone}</span>
      <div><p class="info-list__label">Telefon ${l.city}</p><p class="info-list__value"><a href="tel:${l.phoneTel}">${l.phoneDisplay}</a></p></div>
    </div>
    <div class="info-list__row">
      <span class="info-list__icon" aria-hidden="true">${icon.clock}</span>
      <div><p class="info-list__label">Termine</p><p class="info-list__value">${hoursNote}</p></div>
    </div>
    <div class="info-list__row">
      <span class="info-list__icon" aria-hidden="true">${icon.star}</span>
      <div><p class="info-list__label">Bewertung (Google)</p><p class="info-list__value">${l.rating.score} / 5 · ${l.rating.count} Bewertungen</p></div>
    </div>
  </div>`;
}

export function mapCard(l) {
  return `<div class="mapcard">
    <div class="mapcard__inner">
      <span class="mapcard__pin" aria-hidden="true">${icon.route}</span>
      <p class="pill-note">Datenschutzfreundlich – Karte lädt erst per Klick</p>
      <address>${site.name} ${l.city}<br>${l.street}, ${l.zip} ${l.city}</address>
      <p class="mapcard__hint">Beim Öffnen wechselst du zu Google Maps (externer Dienst).</p>
      <div>${btn("Route in Google Maps öffnen", l.directions, { variant: "primary", icon: "route", external: true })}</div>
    </div>
  </div>`;
}

export function locationJsonLd(l) {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: `${site.name} – ${l.city}`,
    image: `${site.domain}/assets/img/${l.image}-1200.webp`,
    url: `${site.domain}/${l.slug}`,
    telephone: l.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: l.street,
      postalCode: l.zip,
      addressLocality: l.city,
      addressCountry: "DE",
    },
    parentOrganization: { "@type": "Organization", name: site.legalName, founder: { "@type": "Person", name: site.owner } },
    sameAs: [site.social.instagram, site.social.facebook],
  };
}

// ---- Breadcrumb ------------------------------------------------------------
export function breadcrumb(items) {
  const parts = items
    .map((it, i) => {
      const last = i === items.length - 1;
      return last
        ? `<li aria-current="page">${it.label}</li>`
        : `<li><a href="${it.href}">${it.label}</a></li>`;
    })
    .join('<li class="crumb-sep" aria-hidden="true">/</li>');
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: `${site.domain}/${it.href || ""}`,
    })),
  };
  return `<nav class="breadcrumb wrap" aria-label="Brotkrumen"><ol>${parts}</ol></nav>
<script type="application/ld+json">${JSON.stringify(ld)}</script>`;
}
