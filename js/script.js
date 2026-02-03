let mapLoaded = false;

/* -----------------------------
   READ URL PARAMS
------------------------------*/
const params = new URLSearchParams(window.location.search);

function detectLocation(){
  return params.get("loc") || "start";
}

function detectLanguage(){

  // 1️⃣ URL lang ima najveći prioritet
  const urlLang = params.get("lang");
  if(urlLang && LOCATIONS[CURRENT_LOCATION][urlLang]){
    localStorage.setItem("lang", urlLang);
    return urlLang;
  }

  // 2️⃣ zapamćeni jezik
  const savedLang = localStorage.getItem("lang");
  if(savedLang && LOCATIONS[CURRENT_LOCATION][savedLang]){
    return savedLang;
  }

  // 3️⃣ browser jezik
  const browserLang = navigator.language.slice(0,2).toLowerCase();
  if(LOCATIONS[CURRENT_LOCATION][browserLang]){
    return browserLang;
  }

  // 4️⃣ fallback
  return "en";
}

const CURRENT_LOCATION = detectLocation();

function getTexts(lang){
  const locationData = LOCATIONS[CURRENT_LOCATION];
  if(!locationData) return null;

  return locationData[lang] || locationData["en"];
}


function setLang(lang){

  const t = getTexts(lang);
  if(!t) return;

  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  mapLoaded = false;

  document.getElementById("title").innerHTML = t.title;
  document.getElementById("location").innerHTML = t.location;
  document.getElementById("mapLocation").innerHTML = t.mapLocation;

  document.getElementById("mapContainer").innerHTML = "";
  document.getElementById("mapContainer").classList.remove("show");

  document.getElementById("mapLoading").innerHTML = t.mapLoading;
}


function toggleHint() {
  const hint = document.getElementById("hintText");
  if (!hint) return;
  hint.classList.toggle("show");
}

function toggleMap(){

  const map = document.getElementById("mapContainer");
  const loader = document.getElementById("mapLoader");
  const loadingText = document.getElementById("mapLoading");
  const btn = document.getElementById("mapBtn");
  const title = document.getElementById("mapLocation");

  const lang = document.documentElement.lang || "en";
  const t = getTexts(lang);

  if(!mapLoaded){

    btn.classList.add("loading");
    loader.classList.add("show");
    loadingText.classList.add("show");

    setTimeout(() => {

      map.innerHTML = t.map;
      mapLoaded = true;

      loader.classList.remove("show");
      loadingText.classList.remove("show");
      btn.classList.remove("loading");

      map.classList.add("show");
      title.classList.add("show");

    },800);

  }else{
    map.classList.toggle("show");
    title.classList.toggle("show");
  }
}




// default language
function detectLanguage(){
  const browserLang = navigator.language.slice(0,2).toLowerCase();
  if(getTexts(browserLang)) return browserLang;
  return "en";
}

setLang(detectLanguage());


