import { site, wa } from "../data.mjs";
import { page, img, btn, eyebrow, icon, pageHero, breadcrumb } from "../layout.mjs";

const jsonld = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Über Suzana's Haardesign",
    url: `${site.domain}/ueber-uns.html`,
  },
];

const body = `
${pageHero({
  eyebrow: "Über uns",
  title: "Zwei Salons, ein Handschlag-Versprechen.",
  sub: "Seit 1993 stehen wir für ehrliches Friseurhandwerk in Brackenheim – seit 2009 auch in Güglingen. Kein Konzern, keine Kette: einfach Menschen, die ihr Handwerk lieben.",
  image: "atmosphaere-spiegel",
  imageAlt: "Heller Salonbereich mit runden, beleuchteten Spiegeln",
})}
${breadcrumb([{ label: "Start", href: "index.html" }, { label: "Über uns" }])}

<section class="section">
  <div class="wrap split">
    <div class="split__media reveal">
      ${img("hero-salon-natural", "Warmer, moderner Salonbereich mit Holzelementen", { sizes: "(max-width:760px) 90vw, 560px" })}
    </div>
    <div class="split__body reveal" data-delay="1">
      ${eyebrow("Unsere Geschichte")}
      <h2 class="h-xl">Angefangen hat alles in Brackenheim.</h2>
      <p class="lead" style="margin-top:.75rem">1993 eröffnete Suzana Hoti ihren Salon in der Theodor-Heuss-Straße. Aus einer Idee wurde über die Jahre eine feste Größe im Ort – und 2009 kam der zweite Salon in Güglingen dazu.</p>
      <p class="muted" style="margin-top:1rem">Was sich in all der Zeit nicht geändert hat: der Anspruch, jeden Menschen so zu beraten, wie wir selbst beraten werden möchten. Ehrlich, geduldig und mit Blick auf das, was wirklich passt.</p>
      <div class="stat-row">
        <div class="stat"><b>1993</b><span>Gründung Brackenheim</span></div>
        <div class="stat"><b>2009</b><span>Zweiter Salon Güglingen</span></div>
        <div class="stat"><b>5</b><span>Hände im Team</span></div>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper2">
  <div class="wrap">
    <div class="section-head reveal">
      ${eyebrow("Wie wir arbeiten")}
      <h2 class="h-xl">Worauf du dich verlassen kannst.</h2>
    </div>
    <div class="steps" style="margin-top:clamp(2rem,4vw,3rem)">
      <div class="step reveal"><div class="step__no">01</div><h3>Zuhören</h3><p>Bevor wir loslegen, fragen wir nach – nach deinem Alltag, deinen Wünschen und was bisher gut oder weniger gut lief.</p></div>
      <div class="step reveal" data-delay="1"><div class="step__no">02</div><h3>Beraten</h3><p>Wir sagen dir ehrlich, was möglich ist und was zu deinem Haar passt. Auch, wenn das mal weniger ist als gedacht.</p></div>
      <div class="step reveal" data-delay="2"><div class="step__no">03</div><h3>Umsetzen</h3><p>Mit ruhiger Hand und sauberem Handwerk. In einer Atmosphäre, in der du dich fallen lassen kannst.</p></div>
      <div class="step reveal" data-delay="3"><div class="step__no">04</div><h3>Mitgeben</h3><p>Damit dein Look auch zu Hause funktioniert, bekommst du ehrliche Pflegetipps – ohne Verkaufsdruck.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap split split--reverse">
    <div class="split__media reveal">
      ${img("detail-werkzeuge-holz", "Friseurwerkzeug auf warmem Holz", { sizes: "(max-width:760px) 90vw, 560px" })}
    </div>
    <div class="split__body reveal" data-delay="1">
      ${eyebrow("Unser Team")}
      <h2 class="h-xl">Ein eingespieltes Team.</h2>
      <p class="lead" style="margin-top:.75rem">Hinter Suzana's Haardesign steht ein kleines, erfahrenes Team, das über Jahre zusammengewachsen ist – verteilt auf unsere Salons in Brackenheim und Güglingen.</p>
      <p class="muted" style="margin-top:1rem">Gerade weil wir überschaubar sind, kennt man dich bei uns. Du sitzt nicht bei „irgendwem“ auf dem Stuhl, sondern bei jemandem, der weiß, was dir steht.</p>
      <div class="note-box" style="margin-top:1.5rem">Eine persönliche Vorstellung des Teams mit Namen und Fotos ergänzen wir gerne gemeinsam mit dem Salon – mit echten Bildern und dem Einverständnis aller Mitarbeiterinnen.</div>
      <div class="mt-cta">${btn("Team kennenlernen? Schreib uns", wa.general, { variant: "ghost", icon: "whatsapp", external: true })}</div>
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap cta-band reveal">
    ${eyebrow("Neugierig geworden?")}
    <h2>Komm vorbei – wir freuen uns.</h2>
    <p>Ob fester Termin oder erstmal eine Frage: Melde dich einfach, wie es dir am liebsten ist.</p>
    <div class="btn-group">
      ${btn("Termin per WhatsApp", wa.appointment, { variant: "gold", icon: "whatsapp", external: true })}
      ${btn("Zu den Standorten", "standorte.html", { variant: "outline-light" })}
    </div>
  </div>
</section>
`;

export default page({
  title: "Über uns – Suzana's Haardesign in Brackenheim & Güglingen",
  description:
    "Seit 1993 steht Suzana's Haardesign für ehrliches Friseurhandwerk in Brackenheim, seit 2009 auch in Güglingen. Lerne unser erfahrenes Team und unsere Arbeitsweise kennen.",
  path: "ueber-uns.html",
  active: "ueber-uns.html",
  jsonld,
  body,
});
