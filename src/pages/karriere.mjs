import { site, wa, careerFaq, locations } from "../data.mjs";
import { page, img, btn, eyebrow, icon, pageHero, breadcrumb, teamPhoto } from "../layout.mjs";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: careerFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const body = `
${pageHero({
  eyebrow: "Karriere",
  title: "Werde Teil unseres Teams.",
  sub: "Du suchst einen Salon, in dem dein Handwerk und deine Persönlichkeit zählen – und in dem man dich beim Namen kennt? Dann sollten wir uns kennenlernen.",
  image: "herren-barber",
  imageAlt: "Friseur bei der Arbeit im Salon",
})}
${breadcrumb([{ label: "Start", href: "index.html" }, { label: "Karriere" }])}

<section class="section">
  <div class="wrap split">
    <div class="split__body reveal">
      ${eyebrow("Warum wir")}
      <h2 class="h-xl">Kein Konzern. Ein Team.</h2>
      <p class="lead" style="margin-top:.75rem">Bei uns bist du keine Nummer im Schichtplan. Wir sind ein kleines, eingespieltes Team an zwei Standorten – und suchen Menschen, die mit Herz am Handwerk sind.</p>
      <p class="muted" style="margin-top:1rem">Ob erfahrene Friseurin, Wiedereinsteiger oder motivierter Nachwuchs: Wenn du gerne mit Menschen arbeitest und gute Arbeit abliefern willst, freuen wir uns über deine Nachricht.</p>
      <div class="career-teaser__list" style="margin-top:1.5rem">
        <span class="chip" style="border-color:var(--line-2);color:var(--ink-2)">Familiäres Team</span>
        <span class="chip" style="border-color:var(--line-2);color:var(--ink-2)">Zwei Standorte</span>
        <span class="chip" style="border-color:var(--line-2);color:var(--ink-2)">Feste Stammkundschaft</span>
        <span class="chip" style="border-color:var(--line-2);color:var(--ink-2)">Unkomplizierter Einstieg</span>
      </div>
    </div>
    <div class="split__media reveal" data-delay="1">
      <figure class="team-photo team-photo--split">
        ${teamPhoto("Team von Suzana's Haardesign", { sizes: "(max-width:760px) calc(100vw - 3rem), 540px" })}
      </figure>
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="wrap">
    <div class="career-teaser reveal">
      <div class="career-teaser__grid">
        <div class="career-teaser__body">
          ${eyebrow("Bewerbung – ganz einfach")}
          <h2>Ein kurzer Gruß genügt.</h2>
          <p>Kein langes Anschreiben, kein komplizierter Prozess. Schreib uns eine Nachricht per WhatsApp oder ruf an – den Rest besprechen wir persönlich und in Ruhe.</p>
          <div class="career-teaser__list">
            <span class="chip">Antwort meist schnell</span>
            <span class="chip">Persönlich statt Formular</span>
          </div>
          <div class="career-teaser__cta">
            ${btn("Jetzt per WhatsApp bewerben", wa.career, { variant: "gold", icon: "whatsapp", external: true })}
            ${btn("Lieber anrufen", `tel:${locations[0].phoneTel}`, { variant: "outline-light", icon: "phone", arrow: false })}
          </div>
          <p class="muted" style="margin-top:1.25rem;font-size:.85rem;color:#b6ac9a">Deine WhatsApp-Nachricht ist bereits vorbereitet – du musst sie nur noch abschicken.</p>
        </div>
        <div class="career-teaser__media">${img("detail-werkzeuge-holz", "Friseurwerkzeug auf warmem Holz", { sizes: "(max-width:960px) 100vw, 500px" })}</div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      ${eyebrow("Offene Stellen")}
      <h2 class="h-xl">Aktuell &amp; auf Initiative.</h2>
      <p class="lead measure">Konkrete offene Stellen stimmen wir gemeinsam mit dem Salon ab. Unabhängig davon freuen wir uns immer über eine Initiativbewerbung.</p>
    </div>
    <div class="cards cards--2 reveal" style="margin-top:2.5rem">
      <article class="card"><div class="card__body">
        <p class="card__eyebrow">Initiativbewerbung</p>
        <h3>Friseurin / Friseur</h3>
        <p class="card__text">Du bist ausgebildet und möchtest in einem familiären Salon arbeiten? Melde dich – wir schauen gemeinsam, ob es passt, in Brackenheim oder Güglingen.</p>
        <div class="card__link"><a href="${wa.career}" target="_blank" rel="noopener">Per WhatsApp melden ${icon.arrow}</a></div>
      </div></article>
      <article class="card"><div class="card__body">
        <p class="card__eyebrow">Nachwuchs &amp; Wiedereinstieg</p>
        <h3>Du willst ins Handwerk?</h3>
        <p class="card__text">Ob nach der Schule, nach einer Pause oder auf dem Weg zurück in den Beruf: Erzähl uns von dir. Uns zählt, wie du arbeitest – nicht der perfekte Lebenslauf.</p>
        <div class="card__link"><a href="${wa.career}" target="_blank" rel="noopener">Unkompliziert anfragen ${icon.arrow}</a></div>
      </div></article>
    </div>
    <div class="note-box reveal" style="margin-top:1.75rem">Aktuell offene Positionen und Ausbildungsplätze ergänzen wir gerne, sobald sie mit dem Salon abgestimmt sind. So steht hier nur, was auch wirklich stimmt.</div>
  </div>
</section>

<section class="section section--paper2">
  <div class="wrap">
    <div class="section-head reveal">
      ${eyebrow("Häufige Fragen")}
      <h2 class="h-xl">Gut zu wissen.</h2>
    </div>
    <div class="faq reveal" style="margin-top:2rem">
      ${careerFaq
        .map(
          (f, i) => `<div class="faq__item">
        <button class="faq__q" aria-expanded="false" aria-controls="cfaq-${i}">
          <span>${f.q}</span><span class="faq__icon" aria-hidden="true"></span>
        </button>
        <div class="faq__a" id="cfaq-${i}"><div class="faq__a-inner">${f.a}</div></div>
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap cta-band reveal">
    ${eyebrow("Klingt gut?")}
    <h2>Dann lern uns kennen.</h2>
    <p>Ein kurzer Gruß per WhatsApp reicht – wir melden uns und finden heraus, ob es passt.</p>
    <div class="btn-group">
      ${btn("Jetzt per WhatsApp bewerben", wa.career, { variant: "gold", icon: "whatsapp", external: true })}
      ${btn("Auf Instagram reinschauen", site.social.instagram, { variant: "outline-light", icon: "instagram", external: true })}
    </div>
  </div>
</section>
`;

export default page({
  title: "Karriere – Jobs bei Suzana's Haardesign in Brackenheim & Güglingen",
  description:
    "Werde Teil des Teams von Suzana's Haardesign in Brackenheim oder Güglingen. Unkomplizierte Bewerbung per WhatsApp – für Friseurinnen, Wiedereinsteiger und Nachwuchs.",
  path: "karriere.html",
  active: "karriere.html",
  jsonld: [faqLd],
  ogImage: "assets/img/herren-barber-1200.webp",
  body,
});
