//script.js

let mapLoaded = false;

/* -----------------------------
   READ URL PARAMS
------------------------------*/
function getParams() {
  return new URLSearchParams(window.location.search);
}

function detectLocation() {
  const params = getParams();
  return params.get("loc") || "start";
}

const CURRENT_LOCATION = detectLocation();

function getTexts(lang) {
  const locationData = LOCATIONS[CURRENT_LOCATION];
  if (!locationData) return null;
  return locationData[lang] || locationData["en"];
}

/* -----------------------------
   LANGUAGE DETECTION
------------------------------*/
function detectLanguage() {
  const locationData = LOCATIONS[CURRENT_LOCATION] || {};
  const params = getParams();

  // 1) URL lang
  const urlLang = (params.get("lang") || "").toLowerCase();
  if (urlLang && locationData[urlLang]) {
    localStorage.setItem("lang", urlLang);
    return urlLang;
  }

  // 2) saved
  const savedLang = (localStorage.getItem("lang") || "").toLowerCase();
  if (savedLang && locationData[savedLang]) return savedLang;

  // 3) browser
  const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
  if (locationData[browserLang]) return browserLang;

  // 4) fallback
  return "en";
}

/* -----------------------------
   UI HELPERS
------------------------------*/


function closeMapUI() {
  const map = document.getElementById("mapContainer");
  const loader = document.getElementById("mapLoader");
  const loadingText = document.getElementById("mapLoading");
  const title = document.getElementById("mapLocation");
  const btn = document.getElementById("mapBtn");

  mapLoaded = false;

  if (map) {
    map.innerHTML = "";
    map.classList.remove("show");
  }
  if (loader) loader.classList.remove("show");
  if (loadingText) loadingText.classList.remove("show");
  if (title) title.classList.remove("show");
  if (btn) {
    btn.classList.remove("loading");
    btn.classList.remove("opened");
  }
}

function closeHintUI() {
  const hint = document.getElementById("hintText");
  if (hint) hint.classList.remove("show");
}

function isNonEmptyHtml(value) {
  if (!value) return false;
  // ukloni HTML i whitespace da ne prođe "<p><br></p>"
  const tmp = document.createElement("div");
  tmp.innerHTML = String(value);
  const text = (tmp.textContent || "").replace(/\u00A0/g, " ").trim();
  return text.length > 0;
}


function setVisible(el, shouldShow, displayType = "block") {
  if (!el) return;
  el.style.display = shouldShow ? displayType : "none";
}

/* -----------------------------
   LOCATION PROGRESS
------------------------------*/

const PROGRESS_KEY = "miso_progress_v1";

function loadProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return { maxStep: 0, visited: { start: true } };
    const p = JSON.parse(raw);
    if (typeof p.maxStep !== "number") p.maxStep = 0;
    if (!p.visited || typeof p.visited !== "object") p.visited = {};
    if (!p.visited.start) p.visited.start = true;
    return p;
  } catch {
    return { maxStep: 0, visited: { start: true } };
  }
}

function saveProgress(p) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}

function stepIndex(loc) {
  return (typeof ROUTE !== "undefined") ? ROUTE.indexOf(loc) : -1;
}

function markVisited(loc) {
  const p = loadProgress();
  const idx = stepIndex(loc);
  if (idx >= 0) p.maxStep = Math.max(p.maxStep, idx);
  p.visited[loc] = true;
  saveProgress(p);
}



function canOpenLocation(loc) {
  if (loc === "start") return true;
  const idx = stepIndex(loc);
  if (idx === -1) return false;
  const p = loadProgress();
  return p.maxStep >= (idx - 1);
}

/* -----------------------------
   GATE (lock screen)
------------------------------*/


if (CURRENT_LOCATION !== "start" && !canOpenLocation(CURRENT_LOCATION)) {
  console.log("GATE BLOCKED", {
    CURRENT_LOCATION,
    idx: stepIndex(CURRENT_LOCATION),
    progress: loadProgress(),
  });

  const lang = (getParams().get("lang") || "en").toLowerCase();
  window.location.replace(
  `locked.html?loc=${encodeURIComponent(CURRENT_LOCATION)}&lang=${encodeURIComponent(lang)}`
);
throw new Error("Redirecting to locked.html");

}


/* -----------------------------
   SET LANGUAGE (MAIN RENDER)
------------------------------*/
function setLang(lang) {
  const t = getTexts(lang);
  if (!t) return;

  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  // Fill ALL content
  const titleEl = document.getElementById("title");
  const locationEl = document.getElementById("location");
  const storyEl = document.getElementById("story");
  const riddleTitleEl = document.getElementById("riddleTitle");
  const riddleTextEl = document.getElementById("riddleText");
  const hintBtnEl = document.getElementById("hintBtn");
  const hintTextEl = document.getElementById("hintText");
  const mapBtnEl = document.getElementById("mapBtn");
  const mapLoadingEl = document.getElementById("mapLoading");
  const mapLocationEl = document.getElementById("mapLocation");
  const infoBlockEl = document.getElementById("infoBlock");
  const infoTitleEl = document.getElementById("infoTitle");
  const infoTextEl = document.getElementById("infoText");

  const endCardEl = document.getElementById("endCard");
  const endTitleEl = document.getElementById("endTitle");
  const endTextEl  = document.getElementById("endText");

  if (titleEl) titleEl.innerHTML = t.title || "";
  if (locationEl) locationEl.innerHTML = t.location || "";
  if (storyEl) storyEl.innerHTML = t.story || "";
  if (riddleTitleEl) riddleTitleEl.innerHTML = t.riddleTitle || "";
  if (riddleTextEl) riddleTextEl.innerHTML = t.riddleText || "";

  if (hintBtnEl) hintBtnEl.innerHTML = t.hintBtn || "";
  if (hintTextEl) hintTextEl.innerHTML = t.hint || "";

  if (mapBtnEl) mapBtnEl.innerHTML = t.mapBtn || "";
  if (mapLoadingEl) mapLoadingEl.innerHTML = t.mapLoading || "";
  if (mapLocationEl) mapLocationEl.innerHTML = t.mapLocation || "";

  if (infoTitleEl) infoTitleEl.innerHTML = t.infoTitle || "";
  if (infoTextEl) infoTextEl.innerHTML = t.infoText || "";

  // INFO block (otvoren po defaultu)
  const hasInfo = isNonEmptyHtml(t.infoTitle) || isNonEmptyHtml(t.infoText);
  if (infoBlockEl) {
    infoBlockEl.style.display = hasInfo ? "block" : "none";
    infoBlockEl.open = true;
  }

  // END card (fallback na ENG)
  const locationData = LOCATIONS[CURRENT_LOCATION] || {};
  const enFallback = locationData.en || {};

  const endTitle = t.endTitle || enFallback.endTitle || "";
  const endText  = t.endText  || enFallback.endText  || "";

  if (endTitleEl) endTitleEl.innerHTML = endTitle;
  if (endTextEl)  endTextEl.innerHTML  = endText;

  const hasEnd = isNonEmptyHtml(endTitle) || isNonEmptyHtml(endText);
  setVisible(endCardEl, hasEnd, "block");



  // reset UI states on language change
  closeHintUI();
  closeMapUI();

  // --- VISIBILITY RULES (hide empty sections) ---
  const hintWrap = document.querySelector(".hint-container");
  const mapWrap = document.querySelector(".map-container");
  const riddleWrap = document.querySelector(".riddle");

  const hasHint = isNonEmptyHtml(t.hintBtn) && isNonEmptyHtml(t.hint);
  const hasMap  = isNonEmptyHtml(t.mapBtn) && isNonEmptyHtml(t.map);
  const hasRiddle = isNonEmptyHtml(t.riddleTitle) || isNonEmptyHtml(t.riddleText);

  setVisible(hintWrap, hasHint);
  setVisible(mapWrap, hasMap);
  setVisible(riddleWrap, hasRiddle);

  if (!hasMap) closeMapUI();
  if (!hasHint) closeHintUI();

  markVisited(CURRENT_LOCATION);

}

/* -----------------------------
   BUTTON ACTIONS
------------------------------*/
function toggleHint() {
  const hint = document.getElementById("hintText");
  if (!hint) return;
  hint.classList.toggle("show");
}

function toggleMap() {
  const map = document.getElementById("mapContainer");
  const loader = document.getElementById("mapLoader");
  const loadingText = document.getElementById("mapLoading");
  const btn = document.getElementById("mapBtn");
  const title = document.getElementById("mapLocation");

  if (!map || !loader || !loadingText || !btn || !title) return;

  const lang = document.documentElement.lang || "en";
  const t = getTexts(lang);
  if (!t) return;

  // If already loaded -> just toggle open/close
  if (mapLoaded) {
    const willShow = !map.classList.contains("show");
    map.classList.toggle("show", willShow);
    title.classList.toggle("show", willShow);
    btn.classList.toggle("opened", willShow);
    return;
  }

  // First time: show loader + text, then inject iframe
  btn.classList.add("loading");
  loader.classList.add("show");
  loadingText.classList.add("show");

  // ensure closed state before opening
  map.classList.remove("show");
  title.classList.remove("show");

  setTimeout(() => {
    map.innerHTML = t.map || "";
    mapLoaded = true;

    loader.classList.remove("show");
    loadingText.classList.remove("show");
    btn.classList.remove("loading");

    map.classList.add("show");
    title.classList.add("show");
    btn.classList.add("opened");
  }, 800);
}

/* -----------------------------
   INIT
------------------------------*/
setLang(detectLanguage());



