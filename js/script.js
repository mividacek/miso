let mapLoaded = false;

/* -----------------------------
   FADE IN (smooth)
------------------------------*/
function initFadeIn() {
  document.body.classList.add("fade-in");
  requestAnimationFrame(() => {
    document.body.classList.add("fade-in--show");
  });
}

function fadeOutAndGo(url) {
  document.body.classList.remove("fade-in--show");
  setTimeout(() => {
    window.location.href = url;
  }, 220);
}

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

/* -----------------------------
   TEXTS
------------------------------*/
function getTexts(lang) {
  const locationData = LOCATIONS[CURRENT_LOCATION];
  if (!locationData) return null;
  return locationData[lang] || locationData["en"];
}

/* -----------------------------
   LANGUAGE DETECTION
   Priority: URL > browser > saved > fallback
------------------------------*/
function detectLanguage() {
  const locationData = LOCATIONS[CURRENT_LOCATION] || {};
  const params = getParams();

  // 1) URL lang (highest priority)
  const urlLang = (params.get("lang") || "").toLowerCase();
  if (urlLang && locationData[urlLang]) {
    localStorage.setItem("lang", urlLang);
    return urlLang;
  }

  // 2) browser default (second priority)
  const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
  if (locationData[browserLang]) return browserLang;

  // 3) last selected (third priority)
  const savedLang = (localStorage.getItem("lang") || "").toLowerCase();
  if (savedLang && locationData[savedLang]) return savedLang;

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

  // NEW: stricter unlock (so start does NOT auto-unlock ribnjak)
  return p.maxStep >= idx;
}

/* -----------------------------
   GATE (lock screen)
------------------------------*/
if (CURRENT_LOCATION !== "start" && !canOpenLocation(CURRENT_LOCATION)) {
  const lang = (getParams().get("lang") || detectLanguage() || "en").toLowerCase();
  window.location.replace(
    `locked.html?loc=${encodeURIComponent(CURRENT_LOCATION)}&lang=${encodeURIComponent(lang)}`
  );
  throw new Error("Redirecting to locked.html");
}

/* -----------------------------
   STEP NAV (← 2/4 → + skip warning)
------------------------------*/
const NAV_COPY = {
  hr: {
    warn: "Možeš preskočiti ako moraš, ali varanje nije zabavno.\n\nŽeliš nastaviti na sljedeću lokaciju?"
  },
  en: {
    warn: "You can skip if needed, but cheating is no fun.\n\nDo you want to continue to the next location?"
  },
  it: {
    warn: "Puoi saltare se necessario, ma barare non è divertente.\n\nVuoi continuare alla tappa successiva?"
  },
  de: {
    warn: "Du kannst überspringen, aber Schummeln macht keinen Spaß.\n\nMöchtest du zum nächsten Ort weitergehen?"
  }
};

function buildUrlForLoc(loc, lang) {
  return `index.html?loc=${encodeURIComponent(loc)}&lang=${encodeURIComponent(lang)}&fade=1`;
}

// unlock just enough so next location opens (skip)
function unlockForNextLocation(nextLoc) {
  const route = (typeof ROUTE !== "undefined") ? ROUTE : ["start"];
  const nextIdx = route.indexOf(nextLoc);
  if (nextIdx < 0) return;

  const p = loadProgress();

  // NEW: strict gate => need maxStep >= nextIdx
  p.maxStep = Math.max(p.maxStep, nextIdx);

  // mark all up to nextIdx as visited (optional, but keeps it consistent)
  for (let i = 0; i <= nextIdx; i++) {
    p.visited[route[i]] = true;
  }

  saveProgress(p);
}


function renderStepNav(lang) {
  const nav = document.getElementById("stepNav");
  const counter = document.getElementById("stepCounter");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  if (!nav || !counter || !prevBtn || !nextBtn) return;

  const route = (typeof ROUTE !== "undefined") ? ROUTE : ["start"];
  const idx = route.indexOf(CURRENT_LOCATION);
  const n = route.length;

  if (idx === -1 || n <= 1) {
    nav.classList.remove("show");
    nav.style.display = "none";
    return;
  }

  nav.style.display = "flex";
  requestAnimationFrame(() => nav.classList.add("show"));

  counter.textContent = `${idx + 1}/${n}`;

  prevBtn.disabled = (idx === 0);
  nextBtn.disabled = (idx === n - 1);

  prevBtn.onclick = () => {
    if (idx <= 0) return;
    const url = buildUrlForLoc(route[idx - 1], lang);
    fadeOutAndGo(url);
  };

  nextBtn.onclick = () => {
    if (idx >= n - 1) return;

    const nextLoc = route[idx + 1];

    if (!canOpenLocation(nextLoc)) {
      const c = NAV_COPY[lang] || NAV_COPY.en;
      const ok = window.confirm(c.warn);
      if (!ok) return;

      unlockForNextLocation(nextLoc);
    }

    const url = buildUrlForLoc(nextLoc, lang);
    fadeOutAndGo(url);
  };
}



/* -----------------------------
   SET LANGUAGE (MAIN RENDER)
------------------------------*/
function setLang(lang) {
  const t = getTexts(lang);
  if (!t) return;

  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

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
  const endTextEl = document.getElementById("endText");

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

  // INFO block
  const hasInfo = isNonEmptyHtml(t.infoTitle) || isNonEmptyHtml(t.infoText);
  if (infoBlockEl) {
    infoBlockEl.style.display = hasInfo ? "block" : "none";
    infoBlockEl.open = true;
  }

  // END card (fallback EN)
  const locationData = LOCATIONS[CURRENT_LOCATION] || {};
  const enFallback = locationData.en || {};
  const endTitle = t.endTitle || enFallback.endTitle || "";
  const endText = t.endText || enFallback.endText || "";

  if (endTitleEl) endTitleEl.innerHTML = endTitle;
  if (endTextEl) endTextEl.innerHTML = endText;

  const hasEnd = isNonEmptyHtml(endTitle) || isNonEmptyHtml(endText);
  setVisible(endCardEl, hasEnd, "block");

  // reset states
  closeHintUI();
  closeMapUI();

  // visibility rules
  const hintWrap = document.querySelector(".hint-container");
  const mapWrap = document.querySelector(".map-container");
  const riddleWrap = document.querySelector(".riddle");

  const hasHint = isNonEmptyHtml(t.hintBtn) && isNonEmptyHtml(t.hint);
  const hasMap  = isNonEmptyHtml(t.mapBtn) && !!(t.map && String(t.map).trim().length > 0);
  const hasRiddle = isNonEmptyHtml(t.riddleTitle) || isNonEmptyHtml(t.riddleText);

  setVisible(hintWrap, hasHint);
  setVisible(mapWrap, hasMap);
  setVisible(riddleWrap, hasRiddle);

  if (!hasMap) closeMapUI();
  if (!hasHint) closeHintUI();

  // progress + nav
  markVisited(CURRENT_LOCATION);

  renderStepNav(lang);
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

  if (mapLoaded) {
    const willShow = !map.classList.contains("show");
    map.classList.toggle("show", willShow);
    title.classList.toggle("show", willShow);
    btn.classList.toggle("opened", willShow);
    return;
  }

  btn.classList.add("loading");
  loader.classList.add("show");
  loadingText.classList.add("show");

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
initFadeIn();
setLang(detectLanguage());
