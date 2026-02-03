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
  const infoBlockEl = document.getElementById("infoBlock");
  const hasInfo = (t.infoTitle || t.infoText);

  if (infoBlockEl) infoBlockEl.style.display = hasInfo ? "block" : "none";


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

  // reset UI states on language change
  closeHintUI();
  closeMapUI();
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


