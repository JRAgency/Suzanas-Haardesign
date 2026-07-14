import { site, locations } from "../data.mjs";
import { page, pageHero, breadcrumb } from "../layout.mjs";

const ph = (t) => `<span class="placeholder">${t}</span>`;

const body = `
${pageHero({ eyebrow: "Rechtliches", title: "Datenschutzerklärung" })}
${breadcrumb([{ label: "Start", href: "index.html" }, { label: "Datenschutz" }])}

<section class="section">
  <div class="wrap prose">
    <div class="note-box">Diese Datenschutzerklärung beschreibt die Technik dieser Demo-Website (datensparsam, ohne Tracking). Gelb markierte Felder sowie die konkreten Angaben zum Hosting sind vor der Veröffentlichung zu ergänzen. Eine abschließende rechtliche Prüfung sollte durch eine fachkundige Stelle erfolgen.</div>

    <h2>1. Verantwortlicher</h2>
    <p>
      Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br>
      ${ph("Vollständiger Name / Firma – siehe Impressum")}<br>
      ${locations[0].street}, ${locations[0].zip} ${locations[0].city}<br>
      Telefon: <a href="tel:${locations[0].phoneTel}">${locations[0].phoneDisplay}</a><br>
      E-Mail: ${ph("E-Mail-Adresse eintragen")}
    </p>

    <h2>2. Überblick: datensparsam gedacht</h2>
    <p>Diese Website ist bewusst datenschutzfreundlich aufgebaut. Sie verzichtet auf Tracking, Analyse-Werkzeuge und Marketing-Cookies. Schriften werden lokal vom eigenen Server geladen, es findet keine automatische Verbindung zu externen Anbietern beim reinen Aufruf der Seite statt. Ein Kontaktformular gibt es nicht – die Kontaktaufnahme erfolgt ausschließlich über die von dir gewählten Kanäle (Telefon, WhatsApp, soziale Netzwerke).</p>

    <h2>3. Hosting und Server-Logfiles</h2>
    <p>Diese Website wird bei einem Hosting-Dienstleister betrieben: ${ph("Name und Anschrift des Hosters eintragen; ggf. Auftragsverarbeitungsvertrag (AVV) abschließen")}. Beim Aufruf der Seite verarbeitet der Server technisch notwendige Daten, die dein Browser automatisch übermittelt (sogenannte Server-Logfiles):</p>
    <ul class="bullets">
      <li>anonymisierte oder gekürzte IP-Adresse ${ph("Kürzung/Aufbewahrung mit Hoster klären")}</li>
      <li>Datum und Uhrzeit des Zugriffs</li>
      <li>aufgerufene Seite/Datei sowie übertragene Datenmenge</li>
      <li>verwendeter Browser und Betriebssystem</li>
      <li>Referrer-URL (die zuvor besuchte Seite)</li>
    </ul>
    <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website). Die Logfiles werden nach ${ph("Speicherdauer eintragen, z. B. 7 Tage")} gelöscht.</p>

    <h2>4. Cookies und lokale Speicherung</h2>
    <p>Es werden keine Tracking- oder Marketing-Cookies gesetzt. Lediglich deine Auswahl in den Datenschutz-Einstellungen (Einwilligung in externe Medien) wird technisch notwendig im lokalen Speicher deines Browsers (localStorage) abgelegt, damit die Seite deine Entscheidung merkt. Diese Information verlässt dein Gerät nicht und kann von dir jederzeit über „Datenschutzeinstellungen“ im Seitenfuß geändert oder durch Leeren des Browserspeichers gelöscht werden.</p>

    <h2>5. Schriftarten (lokal)</h2>
    <p>Die verwendeten Schriftarten werden lokal von unserem Server ausgeliefert. Es besteht keine Verbindung zu Google Fonts oder anderen externen Schrift-Diensten. Es werden dabei keine personenbezogenen Daten an Dritte übertragen.</p>

    <h2>6. Kontaktaufnahme (Telefon &amp; WhatsApp)</h2>
    <p>Wenn du uns anrufst oder per WhatsApp schreibst, verarbeiten wir die von dir mitgeteilten Daten, um deine Anfrage zu beantworten (Art. 6 Abs. 1 lit. b und f DSGVO).</p>
    <p><strong>Wichtig zu WhatsApp:</strong> WhatsApp ist ein Dienst der Meta Platforms Ireland Ltd. Wenn du auf einen WhatsApp-Button klickst, wird WhatsApp geöffnet und es gelten die Datenschutzbestimmungen von WhatsApp/Meta. Dabei können Daten (u. a. deine Telefonnummer) an Meta übertragen und teils in Drittländer wie die USA übermittelt werden. Die Nutzung erfolgt auf deine eigene Entscheidung hin. ${ph("Nutzung von WhatsApp Business und Datenübermittlung datenschutzrechtlich prüfen")} Wenn du das vermeiden möchtest, erreichst du uns jederzeit telefonisch.</p>

    <h2>7. Externe Links: Instagram &amp; Facebook</h2>
    <p>Auf unserer Website befinden sich verlinkte Verweise auf unsere Profile bei Instagram und Facebook (Meta Platforms Ireland Ltd.). Es werden keine Social-Media-Plugins oder Zählpixel eingebunden, die bereits beim Laden der Seite Daten übertragen. Erst wenn du auf einen dieser Links klickst, wirst du zum jeweiligen Dienst weitergeleitet, für den dessen eigene Datenschutzbestimmungen gelten.</p>

    <h2>8. Karten / Google Maps (Zwei-Klick-Lösung)</h2>
    <p>Wir binden Google Maps nicht automatisch ein. Statt einer Karte zeigen wir zunächst einen datenschutzfreundlichen Platzhalter bzw. einen Link „Route öffnen“. Eine Verbindung zu Google (Google Ireland Ltd.) wird erst hergestellt, wenn du dies aktiv auswählst bzw. den Kartendienst öffnest. Dann gelten die Datenschutzbestimmungen von Google. ${ph("Falls später eine eingebettete Karte gewünscht ist, hier ergänzen")}</p>

    <h2>9. Deine Rechte</h2>
    <p>Du hast im Rahmen der gesetzlichen Vorgaben jederzeit das Recht auf:</p>
    <ul class="bullets">
      <li>Auskunft über die zu deiner Person gespeicherten Daten (Art. 15 DSGVO)</li>
      <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
      <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
      <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
      <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
      <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft</li>
    </ul>
    <p>Zudem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist u. a. der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg.</p>

    <h2>10. Änderungen</h2>
    <p>Wir passen diese Datenschutzerklärung an, sobald sich die eingesetzte Technik oder die rechtlichen Rahmenbedingungen ändern. Stand: ${ph("Datum bei Live-Schaltung eintragen")}.</p>
  </div>
</section>
`;

export default page({
  title: "Datenschutz – Suzana's Haardesign",
  description: "Datenschutzerklärung von Suzana's Haardesign: datensparsam, ohne Tracking, mit lokal geladenen Schriften und Zwei-Klick-Lösung für externe Dienste.",
  path: "datenschutz.html",
  active: "",
  body,
});
