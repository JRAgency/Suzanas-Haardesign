# Prüfliste vor Veröffentlichung – Suzana's Haardesign

Diese Website ist eine **Demo**. Sie enthält bewusst **keine erfundenen** Pflicht- oder
Geschäftsangaben. Die folgenden Punkte müssen vor einer echten Live-Schaltung vom Verantwortlichen
bestätigt bzw. ergänzt werden. Alle im Code mit `// [PRÜFEN]` und auf den Rechtsseiten mit
**gelber Markierung** gekennzeichneten Stellen entsprechen dieser Liste.

Zentrale Datenquelle für Änderungen: **`src/data.mjs`** (danach `node build.mjs` ausführen).

## 1. Unternehmens- & Kontaktdaten
- [ ] Vollständiger Firmenname und **Rechtsform** (Verzeichnisse nennen „Suzanas Haardesign GmbH“ – bestätigen)
- [ ] Inhaberin / vertretungsberechtigte Person (recherchiert: **Suzana Hoti** – bestätigen)
- [ ] **E-Mail-Adresse** (öffentlich nicht auffindbar – muss ergänzt werden)
- [ ] Telefon Brackenheim **07135 6145** und Güglingen **07135 12511** (Zuordnung bestätigen)
- [ ] WhatsApp-Nummer **+49 153 3901963** – korrekt und für Anfragen/Bewerbungen gewünscht?

## 2. Öffnungszeiten
- [ ] **Konkrete Öffnungszeiten je Standort** (öffentliche Quellen widersprechen sich; aktuell steht neutral „Termine nach telefonischer Vereinbarung“). Bei festen Zeiten: in `src/data.mjs` `hoursNote` ersetzen bzw. Zeiten je Standort ergänzen.

## 3. Leistungen & Preise
- [ ] Leistungsumfang bestätigen (verifiziert: Damen, Herren, Kinder, Coloration, Strähnen, Braut-/Hochsteckfrisuren)
- [ ] Bezeichnung **„Balayage“** als angebotene Technik bestätigen (nicht ausdrücklich belegt)
- [ ] Falls Preise veröffentlicht werden sollen: Preisliste bereitstellen (aktuell bewusst keine Preise)

## 4. Geschichte & Team
- [ ] Gründungsjahr **1993** (Brackenheim) und **2009** (Güglingen) bestätigen
- [ ] Teamgröße **„fünfköpfig“** bestätigen
- [ ] Persönliche Team-Vorstellung mit Namen/Fotos gewünscht? (nur mit echten Bildern & Einverständnis)

## 5. Bewertungen (Social Proof)
- [ ] Aktuelle Google-Werte prüfen (angezeigt: Brackenheim **4,9 / 48**, Güglingen **4,7 / 23** – Stand aus Verzeichnissen). Werte in `src/data.mjs` unter `rating` aktualisierbar.
- [ ] Es werden **keine** einzelnen Rezensionstexte gezeigt (keine echten Zitate belegbar). Bei Wunsch: echte, freigegebene Zitate liefern.

## 6. Bilder & Rechte
- [ ] Beispiel-/Stockbilder möglichst durch **echte Salonfotos** ersetzen (siehe `BILDNACHWEIS.md`)
- [ ] Nutzungsrechte für echte Fotos klären; Personen nur mit Einverständnis
- [ ] Social-Media-Beiträge: aktuell nur Verlinkung (keine Einbettung) – gewünschte Darstellung bestätigen

## 7. Karriere
- [ ] **Konkret offene Stellen / Ausbildungsplätze** benennen (aktuell nur allgemeine Initiativbewerbung)
- [ ] Beschäftigungsarten / Benefits nur mit Bestätigung ergänzen

## 8. Recht (Impressum & Datenschutz)
- [ ] **Impressum** vollständig ausfüllen: Firma, Rechtsform, Register/HRB, USt-IdNr., Vertretung, E-Mail
- [ ] **Datenschutz**: Hosting-Anbieter + ggf. AVV, IP-/Log-Speicherdauer, Stand-Datum ergänzen
- [ ] Einsatz von **WhatsApp Business** datenschutzrechtlich bewerten
- [ ] Finale rechtliche Prüfung durch fachkundige Stelle (Anwalt/Datenschutzbeauftragte)

## 9. Technik & Betrieb
- [ ] **Domain** festlegen (Platzhalter: `https://www.suzanas-haardesign.de`) – in `src/data.mjs` `domain` + danach neu bauen (aktualisiert Canonical, OG-Tags, Sitemap, robots.txt, strukturierte Daten)
- [ ] Hosting & SSL einrichten
- [ ] Google Unternehmensprofil verknüpfen; ggf. Terminbuchungssystem gewünscht?
- [ ] Optional: Wenn Statistik/Analyse gewünscht → über das vorhandene Consent-Banner sauber nachrüsten

---

### Was ist bereits umgesetzt und geprüft?
Responsives Layout (Mobile-First), Barrierefreiheit-Grundlagen (Fokuszustände, Tastaturbedienung,
semantisches HTML, `prefers-reduced-motion`), lokale Schriften ohne externe Aufrufe, kein Tracking,
Zwei-Klick-Lösung für Karten/Social, WhatsApp-Deeplinks, klickbare Telefonnummern, Route-Links,
strukturierte Daten (HairSalon/LocalBusiness/BreadcrumbList/FAQ – **ohne** AggregateRating),
Sitemap & robots.txt, WebP-Bilder mit `srcset`, keine Konsolenfehler, kein horizontaler Überlauf.
