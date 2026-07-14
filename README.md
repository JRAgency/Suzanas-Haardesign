# Suzana's Haardesign – Website (Demo)

Hochwertige, mehrseitige Demo-Website für den Friseursalon **Suzana's Haardesign**
(Standorte Brackenheim & Güglingen). Statisch, schnell, datenschutzfreundlich, ohne Tracking.

## Technik
- **Statische HTML-Seiten** – kein Framework nötig, überall hostbar, offline im Browser öffenbar.
- Erzeugt aus einem kleinen, DRY-Build (zentrale Daten + Layout-Bausteine) → `node build.mjs`.
- Vanilla CSS & JavaScript (keine Laufzeit-Abhängigkeiten).
- Schriften & Bilder **lokal** eingebunden (keine externen Aufrufe beim Seitenaufruf).

## Projektstruktur
```
build.mjs              → baut alle Seiten + sitemap.xml + robots.txt
src/
  data.mjs             → ZENTRALE Daten (Adressen, Telefon, Leistungen, Bewertungen …)
  layout.mjs           → Header, Footer, Buttons, Icons, Meta, Consent, Bausteine
  standort.mjs         → gemeinsamer Generator für die zwei Standortseiten
  pages/*.mjs          → je eine Datei pro Seite
css/styles.css         → Design-System
js/main.js             → Interaktionen (Menü, Reveal, FAQ, Consent, WhatsApp-Float)
assets/
  logo/ fonts/ img/    → optimierte Assets
images/                → Original-Logo (unverändert)
*.html                 → generierte Seiten (nicht direkt bearbeiten)
```

## Bauen & Vorschau
```bash
node build.mjs                 # generiert alle .html-Dateien neu
npx --yes serve -l 5055 .      # lokale Vorschau auf http://localhost:5055
```

> **Wichtig:** Inhalte immer in `src/` ändern und danach `node build.mjs` ausführen –
> die `*.html`-Dateien im Wurzelverzeichnis werden dabei überschrieben.

## Seiten
Start · Leistungen · Über uns · Standorte · Standort Brackenheim · Standort Güglingen ·
Galerie · Karriere · Kontakt · Impressum · Datenschutz

## Vor der Live-Schaltung
Siehe **`PRUEFLISTE.md`** (offene/zu bestätigende Angaben) und **`BILDNACHWEIS.md`** (Bildquellen).
Kein Punkt in der Website ist erfunden – fehlende Pflichtangaben sind klar als Platzhalter markiert.
