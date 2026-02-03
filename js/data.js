const LOCATIONS = {

  start:{
    hr: {
    title: "Šišmiš Mišo i izgubljeni",
    location: "📍 Trg prijateljstva",
    story: `
        <p>Na Brijunima živi šišmiš Mišo. Ovo mirno otočje idealno je mjesto za život
        čak <strong>18 različitih vrsta šišmiša</strong>.</p>

        <p>Mir, obilje noćnih kukaca i raznolika staništa čine Brijune sigurnim
        utočištem. Sve europske vrste šišmiša su strogo zaštićene.</p>

        <p>No Mišo je zabrinut – neki njegovi prijatelji nestaju, a na otoku se
        pojavljuju i nepoznati organizmi, <strong>invazivne vrste</strong>.</p>

        <p>Kreni s Mišom i pomozi mu pronaći odgovore.</p>
         `,
    riddleTitle: "🔍 Zagonetka",
  riddleText: `
    Nisam more, iako sam to nekad bio.<br>
    Nisam jezero, ali mirno dišem.<br>
    Most me dijeli, a pogled s njega vodi dalje.<br>
    <p><strong>Gdje će Miško pronaći prijatelje?</strong></p>
  `,
  hintBtn: "Trebam pomoć",
  hint: "⛳ Blizu golfereske sedmice.",
  mapBtn: "Treba mi točna lokacija",
  mapLoading: "⏳ Učitavanje karte...",
  mapOpened: "Mapa otvorena ✓",
  mapLocation: "Ribnjak",
  map: `
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4721.586348162404!2d13.759664249657359!3d44.92232712443851!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1770045670226!5m2!1sen!2sus"
      width="600"
      height="650"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  `
},


  en: {
    title: "Miso the Bat and the Lost Ones",
    location: "📍 Friendship Square",
    story: `
      <p>Miso the bat lives on the Brijuni Islands, home to
      <strong>18 bat species</strong>.</p>

      <p>Silence, insects and safe shelters make this place ideal.</p>

      <p>But something is wrong — friends are disappearing and
      <strong>invasive species</strong> appear.</p>

      <p>Join Miso and help uncover the mystery.</p>
    `,
    riddleTitle: "🔍 Riddle",
    riddleText: `
      I am not the sea, although I once was.<br>
      I am not a lake, yet I breathe calmly.<br>
      A bridge divides me, and the view from it leads onward.<br>
      <strong>What is the next location?</strong>
    `,
    hintBtn: "I need a hint",
    hint: "⛳ Near the golf hole number seven.",
    mapBtn: "I need the correct location",
    mapLoading: "⏳ Loading map...",
    mapOpened: "Map opened ✓",
    mapLocation: "📍 Fishpond",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4721.586348162404!2d13.759664249657359!3d44.92232712443851!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1770045670226!5m2!1sen!2sus"
        width="600"
        height="650"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        `
  },

  it: {
    title: "Il pipistrello Miso e gli scomparsi",
    location: "📍 Piazza dell'amicizia",
    story: `
      <p>Miso vive alle Brioni, un luogo ideale per
      <strong>18 specie di pipistrelli</strong>.</p>

      <p>Silenzio e natura offrono rifugio sicuro.</p>

      <p>Ma qualcosa non va: compaiono specie invasive.</p>

      <p>Aiuta Miso a scoprire cosa sta succedendo.</p>
    `,
    riddleTitle: "🔍 Indovinello",
    riddleText: `
      Non sono il mare, anche se un tempo lo ero.<br>
      Non sono un lago, ma respiro tranquillo.<br>
      Un ponte mi divide e lo sguardo da lì conduce oltre.<br>
      <strong>Qual è la prossima tappa?</strong>
    `,
    hintBtn: "Ho bisogno di un aiuto",
    hint: "⛳ Vicino alla buca numero sette del golf.",
    mapBtn: "Ho bisogno del luogo esatto",
    mapLoading: "⏳ Caricamento mappa...",
    mapOpened: "Mappa aperta ✓",
    mapLocation: "📍 Peschiera",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4721.586348162404!2d13.759664249657359!3d44.92232712443851!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1770045670226!5m2!1sen!2sus"
        width="600"
        height="650"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        `
  },

  de: {
    title: "Die Fledermaus Miso und die Vermissten",
    location: "📍 Platz der Freundschaft",
    story: `
      <p>Miso lebt auf den Brijuni-Inseln, Heimat von
      <strong>18 Fledermausarten</strong>.</p>

      <p>Ruhe und Natur bieten ideale Lebensbedingungen.</p>

      <p>Doch invasive Arten bedrohen das Gleichgewicht.</p>

      <p>Hilf Miso, die Wahrheit zu finden.</p>
    `,
    riddleTitle: "🔍 Rätsel",
    riddleText: `
      Ich bin nicht das Meer, obwohl ich es einst war.<br>
      Ich bin kein See, doch ich atme ruhig.<br>
      Eine Brücke teilt mich, und der Blick von ihr führt weiter.<br>
      <strong>Was ist der nächste Ort?</strong>
    `,
    hintBtn: "Ich brauche einen Hinweis",
    hint: "⛳ In der Nähe von Golfbahn Nummer sieben.",
    mapBtn: "Ich brauche den richtigen Standort.",
    mapLoading: "⏳ Karte wird geladen...",
    mapOpened: "Karte geöffnet ✓",
    mapLocation: "📍 Fischteich",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4721.586348162404!2d13.759664249657359!3d44.92232712443851!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1770045670226!5m2!1sen!2sus"
        width="600"
        height="650"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        `
  },
}
/*
  ribnjak:{
    hr:{ title:"Ribnjak", location:"📍 Ribnjak", mapLocation:"Sljedeća točka", map:`...` },
    en:{ title:"Fishpond", location:"📍 Fishpond", mapLocation:"Next spot", map:`...` }
  }
*/
};
