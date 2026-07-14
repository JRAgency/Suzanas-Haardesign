// Build: rendert alle Seiten aus src/pages/*.mjs zu statischem HTML im Projekt-Root.
import { readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { site } from "./src/data.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const pagesDir = join(root, "src", "pages");

// Priorität für Sitemap
const prio = { "index.html": "1.0", "leistungen.html": "0.9", "standorte.html": "0.9", "standort-brackenheim.html": "0.8", "standort-gueglingen.html": "0.8", "kontakt.html": "0.8", "karriere.html": "0.8" };
const built = [];

const files = readdirSync(pagesDir).filter((f) => f.endsWith(".mjs"));
let count = 0;
for (const f of files) {
  const mod = await import("file://" + join(pagesDir, f) + `?t=${Date.now()}`);
  const html = mod.default;
  if (typeof html !== "string") {
    console.warn("!! kein String-Export in", f);
    continue;
  }
  const out = f.replace(/\.mjs$/, ".html");
  writeFileSync(join(root, out), html.trimStart() + "\n", "utf8");
  console.log("✓", out);
  built.push(out);
  count++;
}

// ---- Sitemap ----
const today = new Date().toISOString().slice(0, 10);
const urls = built
  .filter((f) => !["impressum.html", "datenschutz.html"].includes(f))
  .sort((a, b) => (a === "index.html" ? -1 : b === "index.html" ? 1 : a.localeCompare(b)))
  .map((f) => `  <url>\n    <loc>${site.domain}/${f}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${prio[f] || "0.6"}</priority>\n  </url>`)
  .join("\n");
writeFileSync(
  join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  "utf8"
);
console.log("✓ sitemap.xml");

// ---- robots.txt ----
writeFileSync(
  join(root, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`,
  "utf8"
);
console.log("✓ robots.txt");

console.log(`\n${count} Seite(n) gebaut.`);
