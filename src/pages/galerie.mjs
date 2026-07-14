import { site, wa } from "../data.mjs";
import { page, img, btn, eyebrow, icon, pageHero, breadcrumb } from "../layout.mjs";

// Kuratierte Auswahl (lokale, lizenzierte Bilder – siehe BILDNACHWEIS.md)
const shots = [
  ["balayage-braun", "Weicher, natürlicher Farbverlauf in langem Haar"],
  ["hochsteck-blond", "Elegante Hochsteckfrisur von hinten"],
  ["herren-bart", "Präziser Herrenschnitt mit sauberer Kontur"],
  ["damen-foehnen", "Föhnen und Styling von langem, blondem Haar"],
  ["braut-hochsteckfrisur", "Verspielte Hochsteckfrisur für den großen Tag"],
  ["balayage-blond", "Blonder Balayage-Look mit weichen Übergängen"],
  ["detail-scheren", "Handwerkzeug – Scheren und Kämme"],
  ["braut-styling", "Anlassfrisur mit dezentem Haarschmuck"],
  ["damen-styling", "Styling im Salon"],
  ["detail-werkzeuge-holz", "Werkzeug auf warmem Holz"],
  ["herren-styling", "Moderner Salon von innen"],
  ["detail-pflegeprodukte", "Pflegeprodukte in warmem Licht"],
];

const body = `
${pageHero({
  eyebrow: "Galerie & Inspiration",
  title: "Ein Blick in unsere Arbeit.",
  sub: "Ein paar Eindrücke rund um Schnitt, Farbe und Styling. Aktuelle Looks aus dem Salon teilen wir regelmäßig auf Instagram.",
})}
${breadcrumb([{ label: "Start", href: "index.html" }, { label: "Galerie" }])}

<section class="section">
  <div class="wrap">
    <div class="note-box reveal" style="margin-bottom:2rem">Die folgenden Aufnahmen sind hochwertige, lizenzierte Beispielbilder, die den Stil unserer Arbeit vermitteln. Sehr gerne ersetzen wir sie durch echte Fotos aus deinem Salon – das wirkt am Ende am authentischsten.</div>
    <div class="gallery reveal">
      ${shots
        .map(
          ([name, alt]) => `<figure>
        ${img(name, alt, { sizes: "(max-width:560px) 100vw, (max-width:960px) 50vw, 380px" })}
        <figcaption>${alt}</figcaption>
      </figure>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap cta-band reveal">
    ${eyebrow("Mehr sehen?")}
    <h2>Folge uns auf Instagram.</h2>
    <p>Dort zeigen wir aktuelle Arbeiten und Momente aus dem Salonalltag. Ein Klick öffnet Instagram in einem neuen Tab.</p>
    <div class="btn-group">
      ${btn("Auf Instagram entdecken", site.social.instagram, { variant: "gold", icon: "instagram", external: true })}
      ${btn("Termin per WhatsApp", wa.appointment, { variant: "outline-light", icon: "whatsapp", external: true })}
    </div>
  </div>
</section>
`;

export default page({
  title: "Galerie – Eindrücke aus dem Salon | Suzana's Haardesign",
  description:
    "Galerie von Suzana's Haardesign: Eindrücke rund um Schnitt, Farbe, Braut- und Hochsteckfrisuren. Aktuelle Looks findest du auf unserem Instagram-Profil.",
  path: "galerie.html",
  active: "galerie.html",
  body,
});
