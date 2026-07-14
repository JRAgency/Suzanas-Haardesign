import { site, locations } from "../data.mjs";
import { page, pageHero, breadcrumb } from "../layout.mjs";

const ph = (t) => `<span class="placeholder">${t}</span>`;

const body = `
${pageHero({ eyebrow: "Rechtliches", title: "Impressum" })}
${breadcrumb([{ label: "Start", href: "index.html" }, { label: "Impressum" }])}

<section class="section">
  <div class="wrap prose">
    <div class="note-box">Hinweis (nicht Teil des Impressums): Die mit gelber Markierung versehenen Felder sind vor der Veröffentlichung durch die tatsächlichen, rechtsverbindlichen Angaben zu ersetzen. Wir empfehlen zusätzlich eine Prüfung durch eine fachkundige Stelle.</div>

    <h2>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</h2>
    <p>
      ${ph("Vollständiger Firmenname – z. B. Suzanas Haardesign GmbH")}<br>
      ${ph("Rechtsform bestätigen")}<br>
      ${locations[0].street}<br>
      ${locations[0].zip} ${locations[0].city}
    </p>

    <h3>Vertreten durch</h3>
    <p>${site.owner} ${ph("Funktion / vertretungsberechtigte Person bestätigen")}</p>

    <h3>Kontakt</h3>
    <p>
      Telefon Brackenheim: <a href="tel:${locations[0].phoneTel}">${locations[0].phoneDisplay}</a><br>
      Telefon Güglingen: <a href="tel:${locations[1].phoneTel}">${locations[1].phoneDisplay}</a><br>
      E-Mail: ${ph("E-Mail-Adresse eintragen")}
    </p>

    <h3>Registereintrag</h3>
    <p>
      ${ph("Registergericht (z. B. Amtsgericht Stuttgart)")}<br>
      ${ph("Registernummer (z. B. HRB …) – nur falls GmbH/HR-Eintrag")}
    </p>

    <h3>Umsatzsteuer-Identifikationsnummer</h3>
    <p>${ph("USt-IdNr. gemäß § 27 a UStG – falls vorhanden")}</p>

    <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
    <p>
      ${site.owner} ${ph("ggf. anpassen")}<br>
      ${locations[0].street}, ${locations[0].zip} ${locations[0].city}
    </p>

    <h2>Streitschlichtung</h2>
    <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a>. Unsere E-Mail-Adresse findest du oben.</p>
    <p>Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. ${ph("Aussage bestätigen oder anpassen")}</p>

    <h2>Haftung für Inhalte</h2>
    <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

    <h2>Haftung für Links</h2>
    <p>Unser Angebot enthält Links zu externen Websites Dritter (z. B. Instagram, Facebook, Google Maps), auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

    <h2>Urheberrecht</h2>
    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die verwendeten Beispiel-/Stockbilder werden gemäß der jeweiligen Lizenz genutzt; die Nachweise sind projektintern dokumentiert.</p>

    <h2>Bildnachweise</h2>
    <p>Die auf dieser Demo-Website verwendeten Beispielbilder stammen von Pexels und Unsplash und werden unter der jeweiligen kostenlosen Lizenz (kommerzielle Nutzung, ohne Namensnennungspflicht) verwendet. Eine vollständige Auflistung liegt dem Salon vor. ${ph("Vor Live-Schaltung finale Bildquellen bestätigen / durch eigene Fotos ersetzen")}</p>
  </div>
</section>
`;

export default page({
  title: "Impressum – Suzana's Haardesign",
  description: "Impressum von Suzana's Haardesign, Brackenheim und Güglingen.",
  path: "impressum.html",
  active: "",
  body,
});
