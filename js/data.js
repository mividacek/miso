const LOCATIONS = {
  start: {
    hr: {
      title: "Šišmiš Mišo i izgubljeni",
      location: `<p>📍 Trg prijateljstva</p>
      <img src="images/Šišmiš_Mišo.png" alt="Slika šišmiša Miša" class="hero-image">`,
      story: `

        <p>Ja sam Mišo, šišmiš s Brijuna.<br>
        Ovdje živim već godinama, zajedno s mnogim drugim zanimljivim stvorenjima.<br>
        No ove noći moji prijatelji se ne javljaju…<br>
        Krenuo sam ih potražiti, ali na otoku susrećem i čudna, nepoznata bića.<br>
        Hoćeš li mi pomoći pronaći tko još pripada Brijunima?</p>

        <p><strong>Za one koji žele znati više</strong></p>
        <p>Šišmiši se na Brijunima istražuju i prate od 2010. godine. Izoliranost ovog otočja i ograničenja koja nalažu pravila ponašanja u Nacionalnom parku učinili su Brijune izrazito pogodnim mjestom za život odnosno povremeno obitavanje različitih vrsta šišmiša. Mir i neometanje od ljudi, dovoljna količina hrane (noćnih kukaca) te širok izbor različitih staništa za dnevni odmor razlozi su zbog kojih se na ovom relativno malom području može susresti čak 18 različitih vrsta ovih korisnih i ugroženih životinjica. Sve su vrste šišmiša u Europi zaštićene međunarodnim konvencijama. Mnoge vrste koje obitavaju na Brijunima na popisu su ugroženih vrsta. Tijekom istraživanja 2014. godine utvrđeno je da su Brijuni lokacija važna za razmnožavanje vrste veliki večernjak (<i>Nyctalus lasiopterus</i>), koja je prije toga smatrana gotovo izumrlom za područje RH. </p>
      `,
      //https://www.np-brijuni.hr/hr/brijuni/prirodna-bastina/otocna-fauna
      riddleTitle: "🔍 Zagonetka",
      riddleText: `
        Letim noću, prijatelje tražim uz vodu.<br>
        Gdje se mlade ribe skrivaju, a ljudi se ne kupaju?<br>
        Odvojeno od mora, iako su nekada bili jedno.<br>
        Nije jezero, ali mirno diše.<br>
        Most dijeli, a pogled s njega vodi dalje.<br>
        <p><strong>Gdje će Miško pronaći prijatelje?</strong></p>
      `,
      hintBtn: "Trebam pomoć",
      hint: "⛳ Blizu golfereske ⑫.",
      mapBtn: "Stvarno ne znam gdje ići, treba mi mapa s lokacijom",
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
      title: "Misho the Bat and the Lost Ones",
      location: `<p>📍 Friendship Square</p>
            <img src="images/Šišmiš_Mišo.png" alt="Imahe of the bat Misho" class="hero-image">`,
      story: `
        <p>I am Misho, a bat from Brijuni.<br>
        I've been living here for years, along with many other interesting creatures.<br>
        But tonight my friends are not coming...<br>
        I set out to look for them, but on the island I also encounter strange, unknown creatures.<br>
        Will you help me find who else belongs to Brijuni?</p>

        <p><strong>For those who want to know more</strong></p>
        <p>Bats have been researched and monitored on Brijuni since 2010. The isolation of this archipelago and the restrictions imposed by the rules of conduct in the National Park have made Brijuni an extremely suitable place for the life or occasional residence of various species of bats. Peace and freedom from human interference, a sufficient amount of food (nocturnal insects) and a wide variety of different habitats for daytime rest are the reasons why as many as 18 different species of these useful and endangered animals can be found in this relatively small area. All species of bats in Europe are protected by international conventions. Many species that live on Brijuni are on the list of endangered species. During research in 2014, it was determined that Brijuni is an important location for the reproduction of the large night bat (<i>Nyctalus lasiopterus</i>), which was previously considered almost extinct in the Republic of Croatia. </p>
      `,
      riddleTitle: "🔍 Riddle",
      riddleText: `
        I fly at night by the water, looking for my friends.<br>
        Where do young fish hide, and people never swim?<br>
        Separated from the sea, although they were once one.<br>
        It's not a lake, but it breathes peacefully.<br>
        The bridge divides, and the view from it leads further.<br>
        <p><strong>Where will Miško find friends?</strong></p>
      `,
      hintBtn: "I need a hint",
      hint: "⛳ Near the golf hole number ⑫.",
      mapBtn: "I really don't know where to go, I need a map with the location",
      mapLoading: "⏳ Loading map...",
      mapOpened: "Map opened ✓",
      mapLocation: "Fishpond",
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
      title: "Il pipistrello Misho e gli scomparsi",
      location: `<p>📍 Piazza dell'amicizia</p>
                  <img src="images/Šišmiš_Mišo.png" alt="Slika šišmiša Miša" class="hero-image">`,
      story: `
        <p>Sono Mišo, un pipistrello di Brioni.<br>
        Vivo qui da anni, insieme a molte altre creature interessanti.<br>
        Ma stasera i miei amici non si trovano...<br>
        Sono partito alla loro ricerca, ma sull'isola incontro anche strane creature sconosciute.<br>
        Mi aiuteresti a scoprire chi altro appartiene a Brioni?</p>

        <p><strong>Per chi vuole saperne di più</strong></p>
        <p>I pipistrelli sono oggetto di studio e monitoraggio a Brioni dal 2010. L'isolamento di questo arcipelago e le restrizioni imposte dalle regole di comportamento del Parco Nazionale hanno reso Brioni un luogo estremamente adatto alla vita o alla residenza occasionale di diverse specie di pipistrelli. La pace e la libertà dall'interferenza umana, una quantità sufficiente di cibo (insetti notturni) e un'ampia varietà di habitat per il riposo diurno sono le ragioni per cui in quest'area relativamente piccola si possono trovare ben 18 specie diverse di questi animali utili e in via di estinzione. Tutte le specie di pipistrelli in Europa sono protette da convenzioni internazionali. Molte specie che vivono a Brioni sono nell'elenco delle specie in via di estinzione. Durante le ricerche del 2014, è stato stabilito che Brioni è un sito importante per la riproduzione del grande pipistrello notturno (<i>Nyctalus lasiopterus</i>), che in precedenza era considerato quasi estinto nella Repubblica di Croazia. </p>
      `,
      riddleTitle: "🔍 Indovinello",
      riddleText: `
        Volo di notte sopra l'acqua, alla ricerca dei miei amici.<br>
        Dove si nascondono i giovani pesci e la gente non nuota mai?<br>
        Separati dal mare, anche se un tempo erano un tutt'uno.<br>
        Non è un lago, ma respira pacificamente.<br>
        Il ponte lo divide e la vista da lì si estende oltre.<br>
        <p><strong>Dove troverà amici Miško?</strong></p>
      `,
      hintBtn: "Ho bisogno di un aiuto",
      hint: "⛳ Vicino alla buca numero ⑫ del golf.",
      mapBtn: "Non so davvero dove andare, ho bisogno di una mappa con la posizione",
      mapLoading: "⏳ Caricamento mappa...",
      mapOpened: "Mappa aperta ✓",
      mapLocation: "Peschiera",
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
      title: "Die Fledermaus Misho und die Vermissten",
      location: `<p>📍 Platz der Freundschaft</p>
                        <img src="images/Šišmiš_Mišo.png" alt="Slika šišmiša Miša" class="hero-image">`,
      story: `
        <p>Ich bin Mišo, eine Fledermaus von Brijuni.<br>
        Ich lebe schon seit Jahren hier, zusammen mit vielen anderen interessanten Geschöpfen.<br>
        Aber heute Abend kommen meine Freunde nicht...<br>
        Ich mache mich auf die Suche nach ihnen, doch auf der Insel begegne ich auch seltsamen, unbekannten Kreaturen.<br>
        Hilfst du mir herauszufinden, wer sonst noch zu Brijuni gehört?</p>

        <p><strong>Für alle, die mehr wissen möchten</strong></p>
        <p>Seit 2010 werden Fledermäuse auf Brijuni erforscht und beobachtet. Die Isolation dieses Archipels und die im Nationalpark geltenden Verhaltensregeln machen Brijuni zu einem äußerst geeigneten Lebensraum für verschiedene Fledermausarten. Ruhe und ungestörte Natur, ein ausreichendes Nahrungsangebot (nachtaktive Insekten) und eine große Vielfalt an Lebensräumen für die Tagesruhe sind die Gründe, warum auf diesem relativ kleinen Gebiet bis zu 18 verschiedene Arten dieser nützlichen und bedrohten Tiere vorkommen. Alle Fledermausarten Europas sind durch internationale Übereinkommen geschützt. Viele der auf Brijuni lebenden Arten stehen auf der Liste der gefährdeten Arten. Untersuchungen im Jahr 2014 ergaben, dass Brijuni ein wichtiger Brutplatz für die Große Nachtfledermaus (Nyctalus lasiopterus) ist, die in Kroatien zuvor als fast ausgestorben galt.</p>
      `,
      riddleTitle: "🔍 Rätsel",
      riddleText: `
        Nachts fliege ich übers Wasser und suche meine Freunde.<br>
        Wo verstecken sich die jungen Fische, und wo schwimmen die Menschen nie?<br>
        Vom Meer getrennt, obwohl sie einst eins waren.<br>
        Es ist kein See, doch er atmet friedlich.<br>
        Die Brücke teilt den Weg, und der Blick von ihr führt weiter.<br>
        <p><strong>Wo wird Miško Freunde finden?</strong></p>
      `,
      hintBtn: "Ich brauche einen Hinweis",
      hint: "⛳ In der Nähe von Golfbahn Nummer ⑫.",
      mapBtn: "Ich weiß wirklich nicht, wohin ich gehen soll, ich brauche eine Karte mit dem Standort.",
      mapLoading: "⏳ Karte wird geladen...",
      mapOpened: "Karte geöffnet ✓",
      mapLocation: "Fischteich",
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
    }
  },

  ribnjak: {
    hr: {
      title: "Šišmiš Mišo i izgubljeni",
      location: `<p>📍 Ribnjak</p>
            <img src="images/Plavi_rak.png" alt="Slika plavog raka" class="hero-image">`,
      story: `<p>Mišo je stigao do Ribnjaka.</p>
              <p><strong>Za one koji žele znati više</strong></p>
              Nitko još ništa ne zna ...
        `,
      riddleTitle: "🔍 Zagonetka",
      riddleText: `Smisli tekst...`,
      hintBtn: "Trebam pomoć",
      hint: "Smisli hint...",
      mapBtn: "Stvarno ne znam gdje ići, treba mi mapa s lokacijom",
      mapLoading: "⏳ Učitavanje karte...",
      mapOpened: "Mapa otvorena ✓",
      mapLocation: "Nepoznato",
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
      title: "Misho the Bat and the Lost Ones",
      location: `<p>📍 Fishpond</p>
            <img src="images/Plavi_rak.png" alt="Slika plavog raka" class="hero-image">`,
      story: `<p>Misho arrived at the Fishpond.</p>
              <p><strong>For those who want to know more</strong></p>
              <p>Nobody knows...</p>
      `,
      riddleTitle: "🔍 Riddle",
      riddleText: `Make up a riddle...`,
      hintBtn: "I need a hint",
      hint: "Make up a hint...",
      mapBtn: "I really don't know where to go, I need a map with the location",
      mapLoading: "⏳ Loading map...",
      mapOpened: "Map opened ✓",
      mapLocation: "Unknown",
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
      title: "Il pipistrello Misho e gli scomparsi",
      location: `<p>📍 Peschiera</p>
            <img src="images/Plavi_rak.png" alt="Slika plavog raka" class="hero-image">`,
      story: `
        <p>Misho arrivò alla Peschiera.</p>

        <p><strong>Per chi vuole saperne di più</strong></p>
        <p>Non si sà</p>
      `,
      riddleTitle: "🔍 Indovinello",
      riddleText: `
        Inventa un indovinello.
        <p><strong>Dove troverà amici Miško?</strong></p>
      `,
      hintBtn: "Ho bisogno di un aiuto",
      hint: "Inventa un suggerimento...",
      mapBtn: "Non so davvero dove andare, ho bisogno di una mappa con la posizione",
      mapLoading: "⏳ Caricamento mappa...",
      mapOpened: "Mappa aperta ✓",
      mapLocation: "Sconosciuto",
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
      title: "Die Fledermaus Misho und die Vermissten",
      location: `<p>📍 Fischteich</p>
            <img src="images/Plavi_rak.png" alt="Slika plavog raka" class="hero-image">`,
      story: `
        <p>Misho kam am Fischteich an.</p>

        <p><strong>Für alle, die mehr wissen möchten</strong></p>
        <p>Niemand weiß es …</p>
      `,
      riddleTitle: "🔍 Rätsel",
      riddleText: `Erfinde ein Rätsel...`,
      hintBtn: "Ich brauche einen Hinweis",
      hint: "Erfinde einen Hinweis...",
      mapBtn: "Ich weiß wirklich nicht, wohin ich gehen soll, ich brauche eine Karte mit dem Standort.",
      mapLoading: "⏳ Karte wird geladen...",
      mapOpened: "Karte geöffnet ✓",
      mapLocation: "Unbekannt",
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
    }
  }
};





