/* Suzana's Haardesign – Interaktionen (vanilla, ohne Abhängigkeiten) */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---- Dynamisches Jahr ------------------------------------------------- */
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---- Header: Schatten beim Scrollen ---------------------------------- */
  var header = $("[data-header]");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 12); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile Navigation ----------------------------------------------- */
  var toggle = $("[data-nav-toggle]");
  var mobileNav = $("[data-mobile-nav]");
  if (toggle && mobileNav) {
    var setNav = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
      toggle.classList.toggle("is-open", open);
      document.documentElement.style.overflow = open ? "hidden" : "";
      if (open) {
        mobileNav.hidden = false;
        requestAnimationFrame(function () { mobileNav.classList.add("is-open"); });
      } else {
        mobileNav.classList.remove("is-open");
        setTimeout(function () { if (toggle.getAttribute("aria-expanded") === "false") mobileNav.hidden = true; }, 300);
      }
    };
    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });
    $$("a", mobileNav).forEach(function (a) { a.addEventListener("click", function () { setNav(false); }); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setNav(false); toggle.focus(); }
    });
  }

  /* ---- Toggle-Icon (open/close) ---------------------------------------- */
  var style = document.createElement("style");
  style.textContent = ".nav-toggle.is-open .nav-toggle__open{display:none}.nav-toggle.is-open .nav-toggle__close{display:inline-flex}";
  document.head.appendChild(style);

  /* ---- Reveal beim Scrollen -------------------------------------------- */
  var reveals = $$(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- FAQ / Accordion ------------------------------------------------- */
  $$(".faq__q").forEach(function (q) {
    q.addEventListener("click", function () {
      var expanded = q.getAttribute("aria-expanded") === "true";
      q.setAttribute("aria-expanded", String(!expanded));
      var panel = document.getElementById(q.getAttribute("aria-controls"));
      if (panel) panel.style.maxHeight = expanded ? "0px" : panel.scrollHeight + "px";
    });
  });

  /* ---- WhatsApp-Float am Footer ausblenden ----------------------------- */
  var waFloat = $(".wa-float");
  var footer = $(".site-footer");
  if (waFloat && footer && "IntersectionObserver" in window) {
    var fo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { waFloat.classList.toggle("is-hidden", en.isIntersecting); });
    }, { threshold: 0.05 });
    fo.observe(footer);
  }

  /* ---- Consent (technisch notwendig + externe Medien) ------------------ */
  var KEY = "suzanas-consent";
  var CONSENT_VERSION = 1;
  var consent = $("[data-consent]");
  var consentBox = consent ? consent.querySelector(".consent__box") : null;
  var extBox = $("[data-consent-external]");
  var lastTrigger = null;

  function readConsent() {
    try {
      var d = JSON.parse(localStorage.getItem(KEY) || "null");
      return d && d.version === CONSENT_VERSION ? d : null;
    } catch (e) { return null; }
  }
  function applyConsent(d) {
    document.documentElement.dataset.consentMedia = d && d.externalMedia ? "1" : "0";
  }
  function saveConsent(externalMedia) {
    var d = { version: CONSENT_VERSION, necessary: true, externalMedia: !!externalMedia, timestamp: new Date().toISOString() };
    try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {}
    applyConsent(d);
    document.dispatchEvent(new CustomEvent("consentchange", { detail: d }));
    return d;
  }
  function syncCheckbox() {
    var cur = readConsent();
    if (extBox) extBox.checked = !!(cur && cur.externalMedia);
  }
  function openConsent(trigger) {
    if (!consent) return;
    lastTrigger = trigger || document.activeElement;
    syncCheckbox();               // zuvor gespeicherte Auswahl anzeigen
    consent.hidden = false;
    if (consentBox) { try { consentBox.focus({ preventScroll: true }); } catch (e) { consentBox.focus(); } }
  }
  function closeConsent() {
    if (!consent) return;
    consent.hidden = true;
    if (lastTrigger && typeof lastTrigger.focus === "function") { lastTrigger.focus(); }
    lastTrigger = null;
  }

  if (consent) {
    var current = readConsent();
    if (current) {
      applyConsent(current);      // Entscheidung liegt vor -> Banner bleibt zu
    } else {
      setTimeout(function () { openConsent(null); }, 600);
    }
    var acceptAll = $("[data-consent-accept-all]");
    var save = $("[data-consent-save]");
    var reject = $("[data-consent-reject]");
    if (acceptAll) acceptAll.addEventListener("click", function () { saveConsent(true); closeConsent(); });
    if (reject) reject.addEventListener("click", function () { saveConsent(false); closeConsent(); });
    if (save) save.addEventListener("click", function () { saveConsent(!!(extBox && extBox.checked)); closeConsent(); });
    // Escape schließt nur, wenn bereits eine Entscheidung existiert (Wieder-Öffnen-Fall)
    consent.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && readConsent()) { closeConsent(); }
    });
  }
  $$("[data-open-consent]").forEach(function (b) {
    b.addEventListener("click", function (e) { e.preventDefault(); openConsent(b); });
  });

  /* ---- Zwei-Klick externe Medien (Karten/Embeds) ----------------------- */
  function activatePlaceholders() {
    $$("[data-embed]").forEach(function (ph) {
      if (ph.dataset.loaded) return;
      ph.dataset.loaded = "1";
      var url = ph.getAttribute("data-embed");
      var frame = document.createElement("iframe");
      frame.src = url;
      frame.loading = "lazy";
      frame.title = ph.getAttribute("data-embed-title") || "Karte";
      frame.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      frame.style.cssText = "width:100%;height:100%;border:0;position:absolute;inset:0";
      ph.innerHTML = "";
      ph.appendChild(frame);
    });
  }
  document.addEventListener("consentchange", function (e) { if (e.detail && e.detail.externalMedia) activatePlaceholders(); });
  if (document.documentElement.dataset.consentMedia === "1") activatePlaceholders();
})();
