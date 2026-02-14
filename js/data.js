// Location order (redoslijed rute)
const ROUTE = [
  "start",
  "ribnjak",
  "safaripark",
  "morskiVranac",
  "paunovoPero",
  "kastrum",
  "penedaCrnika",
  "uvalaJavorika",
  "jeleniLivada",
  "bara",
  "kucazabrodice",
];

const LOCATIONS = {
  // ------------------------------------------------------------
  // START
  // ------------------------------------------------------------
  start: {
    hr: {
      title: "Mišo i izgubljeni",
      location: `<p>📍 Trg prijateljstva</p>
      <img src="images/Šišmiš_Mišo.png" alt="Slika šišmiša Miša" class="hero-image">`,
      story: `
        <p>Ja sam Mišo, šišmiš s Brijuna.<br>
        Ovdje živim već godinama, zajedno s mnogim drugim zanimljivim stvorenjima.<br>
        No ove noći moji prijatelji se ne javljaju…<br>
        Krenuo sam ih potražiti, ali na otoku susrećem i čudna, nepoznata bića.<br>
        Hoćeš li mi pomoći pronaći tko još pripada Brijunima?</p>
      `,
      infoTitle: "Za one koji žele znati više",
      infoText: `
        Šišmiši se na Brijunima istražuju i prate od 2010. godine. Izoliranost ovog otočja i ograničenja koja nalažu pravila ponašanja u Nacionalnom parku učinili su Brijune izrazito pogodnim mjestom za život odnosno povremeno obitavanje različitih vrsta šišmiša. Mir i neometanje od ljudi, dovoljna količina hrane (noćnih kukaca) te širok izbor različitih staništa za dnevni odmor razlozi su zbog kojih se na ovom relativno malom području može susresti čak 18 različitih vrsta ovih korisnih i ugroženih životinjica. Sve su vrste šišmiša u Europi zaštićene međunarodnim konvencijama. Mnoge vrste koje obitavaju na Brijunima na popisu su ugroženih vrsta. Tijekom istraživanja 2014. godine utvrđeno je da su Brijuni lokacija važna za razmnožavanje vrste veliki večernjak (<i>Nyctalus lasiopterus</i>), koja je prije toga smatrana gotovo izumrlom za područje RH.
        <!-- Izvor: https://www.np-brijuni.hr/hr/brijuni/prirodna-bastina/otocna-fauna -->
      `,
      riddleTitle: "🔍 Zagonetka",
      riddleText: `
        Letim noću, prijatelje tražim uz vodu.<br>
        Gdje se mlade ribe skrivaju, a ljudi se ne kupaju?<br>
        Odvojeno od mora, iako su nekada bili jedno.<br>
        Nije jezero, ali mirno diše.<br>
        Most dijeli, a pogled s njega vodi dalje.<br>
        <p><strong>Gdje će Mišo pronaći prijatelje?</strong></p>
      `,
      hintBtn: "Trebam pomoć",
      hint: "⛳ Blizu golferske ⑫.",
      mapBtn: "Stvarno ne znam gdje ići, treba mi mapa s lokacijom",
      mapLoading: "⏳ Učitavanje karte...",
      mapOpened: "Mapa otvorena ✓",
      mapLocation: "Ribnjak",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d653.8395698089157!2d13.758904269615494!3d44.922758947773865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzIxLjkiTiAxM8KwNDUnMzQuNCJF!5e1!3m2!1shr!2shr!4v1771074164501!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    en: {
      title: "Misho and the Lost Ones",
      location: `<p>📍 Friendship Square</p>
      <img src="images/Šišmiš_Mišo.png" alt="Image of Misho the bat" class="hero-image">`,
      story: `
        <p>I’m Misho, a bat from Brijuni.<br>
        I’ve lived here for years, along with many other fascinating creatures.<br>
        But tonight my friends aren’t answering…<br>
        I set out to find them, yet on the island I keep meeting strange, unfamiliar beings.<br>
        Will you help me discover who truly belongs to Brijuni?</p>
      `,
      infoTitle: "For those who want to know more",
      infoText: `
        Bats have been researched and monitored on Brijuni since 2010. The isolation of the archipelago and the restrictions of the National Park rules have made Brijuni a very suitable place for bats to live or occasionally stay. Peace and limited disturbance by people, enough food (nocturnal insects), and a wide range of habitats for daytime resting are the reasons why up to 18 different species can be found in this relatively small area. All bat species in Europe are protected by international conventions, and many species recorded on Brijuni are considered threatened. Research in 2014 confirmed Brijuni as an important breeding area for the greater noctule bat (<i>Nyctalus lasiopterus</i>), a species previously thought to be nearly extinct in Croatia.
        <!-- Izvor (HR): https://www.np-brijuni.hr/hr/brijuni/prirodna-bastina/otocna-fauna -->
      `,
      riddleTitle: "🔍 Riddle",
      riddleText: `
        I fly at night, searching for friends by the water.<br>
        Where do young fish hide, and people never swim?<br>
        Separated from the sea, though once they were one.<br>
        Not a lake, yet it breathes in calm silence.<br>
        A bridge divides it, and from there your view goes on.<br>
        <p><strong>Where will Misho find his friends?</strong></p>
      `,
      hintBtn: "I need a hint",
      hint: "⛳ Near golf hole ⑫.",
      mapBtn: "I really don’t know where to go — I need a map",
      mapLoading: "⏳ Loading map...",
      mapOpened: "Map opened ✓",
      mapLocation: "Fishpond",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1307.6791384290677!2d13.758904!3d44.922759!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzIxLjkiTiAxM8KwNDUnMzQuNCJF!5e1!3m2!1sen!2shr!4v1771074916538!5m2!1sen!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    it: {
      title: "Misho e gli scomparsi",
      location: `<p>📍 Piazza dell’Amicizia</p>
      <img src="images/Šišmiš_Mišo.png" alt="Immagine del pipistrello Misho" class="hero-image">`,
      story: `
        <p>Sono Misho, un pipistrello di Brioni.<br>
        Vivo qui da anni, insieme a molte altre creature sorprendenti.<br>
        Ma stanotte i miei amici non rispondono…<br>
        Sono partito per cercarli, e sull’isola incontro anche esseri strani e sconosciuti.<br>
        Mi aiuterai a scoprire chi appartiene davvero a Brioni?</p>
      `,
      infoTitle: "Per chi vuole saperne di più",
      infoText: `
        I pipistrelli a Brioni vengono studiati e monitorati dal 2010. L’isolamento dell’arcipelago e le regole del Parco Nazionale hanno reso Brioni un luogo particolarmente adatto alla vita (o alla presenza periodica) di molte specie. La tranquillità, la scarsa interferenza umana, una buona disponibilità di cibo (insetti notturni) e la varietà di rifugi per il riposo diurno spiegano perché in un’area relativamente piccola si possano trovare fino a 18 specie diverse. Tutti i pipistrelli europei sono protetti da convenzioni internazionali e molte specie presenti a Brioni rientrano tra quelle minacciate. Nel 2014 le ricerche hanno confermato Brioni come area importante per la riproduzione del grande nottolo (<i>Nyctalus lasiopterus</i>), specie che prima era considerata quasi scomparsa in Croazia.
        <!-- Izvor (HR): https://www.np-brijuni.hr/hr/brijuni/prirodna-bastina/otocna-fauna -->
      `,
      riddleTitle: "🔍 Indovinello",
      riddleText: `
        Volo di notte, cerco amici vicino all’acqua.<br>
        Dove si nascondono i piccoli pesci e nessuno fa il bagno?<br>
        Separato dal mare, anche se un tempo erano un tutt’uno.<br>
        Non è un lago, ma respira in silenzio.<br>
        Un ponte lo divide e da lì lo sguardo va oltre.<br>
        <p><strong>Dove troverà amici Misho?</strong></p>
      `,
      hintBtn: "Ho bisogno di un aiuto",
      hint: "⛳ Vicino alla buca da golf ⑫.",
      mapBtn: "Non so davvero dove andare — mi serve una mappa",
      mapLoading: "⏳ Caricamento mappa...",
      mapOpened: "Mappa aperta ✓",
      mapLocation: "Peschiera",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1307.6791384290677!2d13.758904!3d44.92275899999999!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzIxLjkiTiAxM8KwNDUnMzQuNCJF!5e1!3m2!1sit!2shr!4v1771074986279!5m2!1sit!2shr"          width="600"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    de: {
      title: "Misho und die Vermissten",
      location: `<p>📍 Platz der Freundschaft</p>
      <img src="images/Šišmiš_Mišo.png" alt="Bild der Fledermaus Misho" class="hero-image">`,
      story: `
        <p>Ich bin Misho, eine Fledermaus von Brijuni.<br>
        Seit Jahren lebe ich hier – zusammen mit vielen anderen spannenden Lebewesen.<br>
        Doch heute Nacht melden sich meine Freunde nicht…<br>
        Ich mache mich auf die Suche, aber auf der Insel begegne ich auch seltsamen, unbekannten Wesen.<br>
        Hilfst du mir herauszufinden, wer wirklich zu Brijuni gehört?</p>
      `,
      infoTitle: "Für alle, die mehr wissen möchten",
      infoText: `
        Fledermäuse werden auf Brijuni seit 2010 erforscht und überwacht. Die Isolation des Archipels und die Verhaltensregeln im Nationalpark machen Brijuni zu einem besonders geeigneten Ort, an dem verschiedene Fledermausarten dauerhaft oder zeitweise leben können. Ruhe, geringe Störung durch Menschen, ausreichend Nahrung (nachtaktive Insekten) und viele unterschiedliche Ruheplätze am Tag sind Gründe dafür, dass man auf diesem relativ kleinen Gebiet bis zu 18 Arten finden kann. Alle Fledermausarten Europas sind durch internationale Abkommen geschützt, und viele der auf Brijuni vorkommenden Arten gelten als bedroht. Untersuchungen im Jahr 2014 bestätigten Brijuni als wichtigen Fortpflanzungsraum für den Riesenabendsegler (<i>Nyctalus lasiopterus</i>), der zuvor in Kroatien als nahezu verschwunden galt.
        <!-- Izvor (HR): https://www.np-brijuni.hr/hr/brijuni/prirodna-bastina/otocna-fauna -->
      `,
      riddleTitle: "🔍 Rätsel",
      riddleText: `
        Nachts fliege ich und suche Freunde am Wasser.<br>
        Wo versteckt sich die Fischbrut – und wo schwimmt niemand?<br>
        Vom Meer getrennt, obwohl es einst eins war.<br>
        Kein See, und doch atmet es ruhig.<br>
        Eine Brücke teilt es – und von dort führt der Blick weiter.<br>
        <p><strong>Wo wird Misho seine Freunde finden?</strong></p>
      `,
      hintBtn: "Ich brauche einen Hinweis",
      hint: "⛳ In der Nähe von Golfbahn ⑫.",
      mapBtn: "Ich weiß wirklich nicht, wohin — ich brauche eine Karte",
      mapLoading: "⏳ Karte wird geladen...",
      mapOpened: "Karte geöffnet ✓",
      mapLocation: "Fischteich",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d872.7683230471293!2d13.759033093703119!3d44.922943586720756!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzIxLjkiTiAxM8KwNDUnMzQuNCJF!5e1!3m2!1sde!2shr!4v1771075156018!5m2!1sde!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },
  },

  // ------------------------------------------------------------
  // #1 RIBNJAK
  // ------------------------------------------------------------
  ribnjak: {
    hr: {
      title: "Mišo i izgubljeni",
      location: `<p>📍 Ribnjak</p>
      <img src="images/Plavi_rak.png" alt="Slika plavog raka" class="hero-image">`,
      story: `
        <p>Mišo je stigao do Ribnjaka.</p>
        <p>Ovdje još od daleke prošlosti ribe rastu u zaklonu, ptice dolaze po hranu, a danas mi ovo područje štitimo.<br>
        No među ribama se skriva plavi rak – stranac koji je ovamo stigao iz toplijih krajeva.<br>
        Brzo se razmnožava, prilagođava i jede više nego što ribnjak može podnijeti.<br>
        Zbog njega domaći stanovnici imaju manje hrane i prostora.</p>

        <p>Mišo ovdje nije pronašao prijatelja.<br>
        Pronašao je prijetnju prirodnoj ravnoteži.</p>

        <p>Zato mora nastaviti potragu – jer pravi prijatelji pomažu, a ne uzimaju.</p>
      `,
      infoTitle: "Za one koji žele znati više",
      infoText: `
        <p>Područje Ribnjaka (uvala Turanj, Val Torre) je jedno od područja najstrože zaštite na Velikom Brijunu, na tom području nalaze se ostaci zidova rimskih struktura koje je prvi puta uočio i zabilježio Anton Gnirs. Ovaj lokalitet još uvijek nije istražen, međutim pretpostavka je da se radi o rustičnoj vili vezanoj za ribnjak. Uvala Turanj u rimsko je doba bila plića za oko jedan metar, imala prirodni ribnjak kojega se moglo vrlo lako zatvoriti i koji je imao kontrolirani dotok svježe morske vode. Danas je važno stanište za ribu, zaklonjeno stanište za morske alge, ali i važno područje za ptice, npr. hranjenje vodomara. Na tom području i danas ima puno mlađi koja se tu hrani i odrasta da bi onda zaplivala u dublje more. Kako bi zaštitili povijest i ne uznemiravali ribu unutar tog područja kupanje je strogo zabranjeno.</p>

        <p><strong>Plavi rak</strong> (<i>Callinectes sapidus</i>) prepoznatljiv je po plavim kliještima i smećkasto-maslinastom oklopu, dok ženke imaju crvene vrhove kliješta. Izvrstan je plivač jer mu je zadnji par nogu oblikovan poput vesla. Njegovo ime znači „ukusan lijepi plivač“.<br>
        Potječe s atlantske obale Amerike, a u Sredozemno more stigao je nenamjerno, najvjerojatnije balastnim vodama brodova. Zbog velike prilagodljivosti i brzog razmnožavanja brzo se proširio i postao invazivna vrsta.<br>
        Hrani se školjkašima, puževima, ribama i drugim morskim organizmima, čime smanjuje brojnost domaćih vrsta. Natječe se za hranu i prostor te narušava ravnotežu morskog ekosustava, a može uzrokovati štetu i ribarstvu.<br>
        Zbog svoje pokretljivosti, prilagodljivosti i velikog reproduktivnog potencijala, plavi rak predstavlja ozbiljan izazov za očuvanje ravnoteže morskih ekosustava.</p>

        <!-- Izvori:
        https://www.np-brijuni.hr/hr/aktivnosti-parka/podrucja-na-velikom-brijunu-gdje-kupanje-nije-dozvoljeno
        https://www.nationalgeographic.com/animals/invertebrates/facts/blue-crab
        https://animaldiversity.org/accounts/Callinectes_sapidus/
        Zacchetti et al. (2026) https://www.sciencedirect.com/science/article/pii/S2352485526000186
        -->
      `,
      riddleTitle: "🔍 Zagonetka",
      riddleText: `
        <p>Nisam konj, iako mi sliče.<br>
        Tvrdoglav sam, kažu ljudi,<br>
        ali ja samo stojim čvrsto na svome.</p>

        <p>Ovi krajevi su moj dom,<br>
        nosio sam teret zemlje i ljudi.</p>

        <p>Ovdje se susreću svjetovi –<br>
        oni koji su došli<br>
        i oni koji su oduvijek ostali.</p>

        <p><strong>Gdje Mišo može pronaći prijatelja?</strong></p>
      `,
      hintBtn: "Trebam pomoć",
      hint: "Ovdje živi i najveća stanovnica otoka 🐘",
      mapBtn: "Stvarno ne znam gdje ići, treba mi mapa s lokacijom",
      mapLoading: "⏳ Učitavanje karte...",
      mapOpened: "Mapa otvorena ✓",
      mapLocation: "Safari park",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1307.6556237756504!2d13.74133843699756!3d44.923792063572634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzI1LjciTiAxM8KwNDQnMzEuNCJF!5e1!3m2!1shr!2shr!4v1771075434417!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    en: {
      title: "Misho and the Lost Ones",
      location: `<p>📍 Fishpond</p>
      <img src="images/Plavi_rak.png" alt="Picture of the blue crab" class="hero-image">`,
      story: `
        <p>Misho arrived at the Fishpond.</p>
        <p>Since long ago, fish have grown here in shelter, birds have come to feed, and today we protect this area.<br>
        But among the fish hides a blue crab — a newcomer that arrived from warmer regions.<br>
        It reproduces quickly, adapts fast, and eats more than the pond can handle.<br>
        Because of it, the native residents have less food and less space.</p>

        <p>Misho did not find a friend here.<br>
        He found a threat to nature’s balance.</p>

        <p>So he must continue the search — because true friends help, they don’t take.</p>
      `,
      infoTitle: "For those who want to know more",
      infoText: `
        <p>The Fishpond area (Turanj Bay, Val Torre) is one of the most strictly protected zones on Veliki Brijuni. Here you can see remains of walls from Roman structures, first noticed and recorded by Anton Gnirs. The site has not yet been excavated, but it is believed to have been a rustic villa connected to the pond. In Roman times Turanj Bay was about one meter shallower and had a natural fishpond that could easily be closed, with a controlled inflow of fresh seawater. Today it is an important habitat for fish and seaweeds, and also a key area for birds (for example, kingfishers feeding). Many young fish still grow here before they swim out to deeper waters. To protect both history and wildlife, swimming is strictly forbidden.</p>

        <p><strong>Blue crab</strong> (<i>Callinectes sapidus</i>) is recognizable by its blue claws and brownish-olive shell, while females have red-tipped claws. It is an excellent swimmer — its last pair of legs is shaped like paddles. Its name literally means “savory beautiful swimmer.”<br>
        It originates from the Atlantic coast of the Americas and most likely entered the Mediterranean accidentally, via ships’ ballast water. Because it is highly adaptable and reproduces quickly, it has spread fast and become invasive.<br>
        It feeds on shellfish, snails, fish, and other marine organisms, reducing native populations. It competes for food and space, disrupts ecosystem balance, and can also cause damage to fisheries.<br>
        With its mobility, adaptability, and high reproductive potential, the blue crab is a serious challenge for preserving marine ecosystem balance.</p>

        <!-- Izvori (HR):
        https://www.np-brijuni.hr/hr/aktivnosti-parka/podrucja-na-velikom-brijunu-gdje-kupanje-nije-dozvoljeno
        https://www.nationalgeographic.com/animals/invertebrates/facts/blue-crab
        https://animaldiversity.org/accounts/Callinectes_sapidus/
        Zacchetti et al. (2026) https://www.sciencedirect.com/science/article/pii/S2352485526000186
        -->
      `,
      riddleTitle: "🔍 Riddle",
      riddleText: `
        <p>I am not a horse, though I may look like one.<br>
        People call me stubborn,<br>
        but I simply stand my ground.</p>

        <p>These fields are my home;<br>
        I carried the weight of land and people.</p>

        <p>Here, worlds meet —<br>
        those who arrived,<br>
        and those who have always belonged.</p>

        <p><strong>Where can Misho find a friend?</strong></p>
      `,
      hintBtn: "I need a hint",
      hint: "The island’s largest resident lives here too 🐘",
      mapBtn: "I really don’t know where to go — I need a map",
      mapLoading: "⏳ Loading map...",
      mapOpened: "Map opened ✓",
      mapLocation: "Safari Park",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1307.6553156558778!2d13.7420556!3d44.9238056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzI1LjciTiAxM8KwNDQnMzEuNCJF!5e1!3m2!1sen!2shr!4v1771075544562!5m2!1sen!2shr"          width="600"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    it: {
      title: "Misho e gli scomparsi",
      location: `<p>📍 Peschiera</p>
      <img src="images/Plavi_rak.png" alt="Immagine del granchio blu" class="hero-image">`,
      story: `
        <p>Misho arrivò alla Peschiera.</p>
        <p>Da tempi lontani, qui i pesci crescono al riparo, gli uccelli vengono a nutrirsi e oggi noi proteggiamo quest’area.<br>
        Ma tra i pesci si nasconde un granchio blu — uno straniero arrivato da regioni più calde.<br>
        Si riproduce in fretta, si adatta rapidamente e mangia più di quanto la peschiera possa sopportare.<br>
        Per colpa sua, gli abitanti originari hanno meno cibo e meno spazio.</p>

        <p>Qui Misho non ha trovato un amico.<br>
        Ha trovato una minaccia all’equilibrio della natura.</p>

        <p>Per questo deve continuare la ricerca — perché i veri amici aiutano, non prendono.</p>
      `,
      infoTitle: "Per chi vuole saperne di più",
      infoText: `
        <p>L’area della Peschiera (baia di Turanj, Val Torre) è una delle zone più rigorosamente protette delle Brioni Maggiori. Qui si trovano resti di muri di strutture romane, notati e registrati per la prima volta da Anton Gnirs. Il sito non è ancora stato scavato, ma si presume fosse una villa rustica collegata allo stagno. In epoca romana la baia di Turanj era più bassa di circa un metro e aveva una peschiera naturale che si poteva chiudere facilmente, con un afflusso controllato di acqua di mare. Oggi è un habitat importante per i pesci e le alghe e un’area fondamentale per gli uccelli (ad esempio, per il martin pescatore). Molti giovani pesci crescono qui prima di nuotare verso il mare più profondo. Per proteggere storia e fauna, la balneazione è severamente vietata.</p>

        <p><strong>Granchio blu</strong> (<i>Callinectes sapidus</i>) si riconosce per le chele blu e il carapace bruno-olivastro; le femmine hanno le punte delle chele rosse. È un ottimo nuotatore: l’ultimo paio di zampe è a forma di pagaia. Il suo nome significa “delizioso bel nuotatore”.<br>
        Proviene dalla costa atlantica delle Americhe e con ogni probabilità è arrivato nel Mediterraneo accidentalmente, tramite le acque di zavorra delle navi. Grazie alla grande adattabilità e alla rapida riproduzione si è diffuso velocemente ed è diventato invasivo.<br>
        Si nutre di molluschi, lumache, pesci e altri organismi marini, riducendo le popolazioni autoctone. Compete per cibo e spazio, altera l’equilibrio dell’ecosistema e può causare danni anche alla pesca.<br>
        Con mobilità, adattabilità e alto potenziale riproduttivo, il granchio blu è una sfida seria per la conservazione dell’equilibrio dei mari.</p>

        <!-- Izvori (HR): isti kao u HR -->
      `,
      riddleTitle: "🔍 Indovinello",
      riddleText: `
        <p>Non sono un cavallo, anche se gli assomiglio.<br>
        Dicono che sono testardo,<br>
        ma io resto fermo nelle mie scelte.</p>

        <p>Questi campi sono la mia casa;<br>
        ho portato il peso della terra e delle persone.</p>

        <p>Qui si incontrano mondi diversi —<br>
        chi è arrivato,<br>
        e chi è sempre appartenuto.</p>

        <p><strong>Dove può trovare un’amica Misho?</strong></p>
      `,
      hintBtn: "Ho bisogno di un aiuto",
      hint: "Qui vive anche l’abitante più grande dell’isola 🐘",
      mapBtn: "Non so davvero dove andare — mi serve una mappa",
      mapLoading: "⏳ Caricamento mappa...",
      mapOpened: "Mappa aperta ✓",
      mapLocation: "Parco safari",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1307.6553156558778!2d13.7420556!3d44.9238056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzI1LjciTiAxM8KwNDQnMzEuNCJF!5e1!3m2!1sit!2shr!4v1771075617831!5m2!1sit!2shr"          width="600"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    de: {
      title: "Misho und die Vermissten",
      location: `<p>📍 Fischteich</p>
      <img src="images/Plavi_rak.png" alt="Bild der Blauen Krabbe" class="hero-image">`,
      story: `
        <p>Misho kam am Fischteich an.</p>
        <p>Seit längst vergangenen Zeiten wachsen Fische hier im Schutz heran, Vögel kommen zum Fressen – und heute schützen wir dieses Gebiet.<br>
        Doch zwischen den Fischen versteckt sich eine Blaue Krabbe – ein Neuankömmling aus wärmeren Regionen.<br>
        Sie vermehrt sich schnell, passt sich rasch an und frisst mehr, als der Teich verkraften kann.<br>
        Dadurch haben die einheimischen Bewohner weniger Nahrung und weniger Platz.</p>

        <p>Misho hat hier keinen Freund gefunden.<br>
        Er hat eine Gefahr für das natürliche Gleichgewicht entdeckt.</p>

        <p>Darum muss er weiterziehen – denn wahre Freunde helfen, sie nehmen nicht.</p>
      `,
      infoTitle: "Für alle, die mehr wissen möchten",
      infoText: `
        <p>Das Gebiet am Fischteich (Bucht Turanj, Val Torre) zählt zu den am strengsten geschützten Zonen auf Veliki Brijuni. Hier finden sich Mauerreste römischer Strukturen, die Anton Gnirs erstmals bemerkte und dokumentierte. Die Stätte ist noch nicht erforscht; man vermutet eine rustikale Villa in Verbindung mit dem Teich. In römischer Zeit war die Bucht Turanj etwa einen Meter flacher und besaß einen natürlichen Fischteich, der leicht geschlossen werden konnte und einen kontrollierten Zufluss von Meerwasser hatte. Heute ist es ein wichtiger Lebensraum für Fische und Algen sowie ein bedeutendes Gebiet für Vögel (z. B. Eisvögel bei der Nahrungssuche). Viele Jungfische wachsen hier heran, bevor sie ins tiefere Meer abwandern. Um Geschichte und Natur zu schützen, ist Baden streng verboten.</p>

        <p><strong>Blaue Krabbe</strong> (<i>Callinectes sapidus</i>) erkennt man an den blauen Scheren und dem bräunlich-oliven Panzer; Weibchen haben rot gefärbte Scherenspitzen. Sie ist eine hervorragende Schwimmerin, denn das letzte Beinpaar ist wie ein Paddel geformt. Ihr Name bedeutet wörtlich „schmackhafter schöner Schwimmer“. <br>
        Ursprünglich stammt sie von der Atlantikküste Amerikas und gelangte vermutlich unbeabsichtigt – etwa über Ballastwasser – ins Mittelmeer. Durch hohe Anpassungsfähigkeit und schnelle Vermehrung breitete sie sich rasch aus und wurde invasiv.<br>
        Sie frisst Muscheln, Schnecken, Fische und andere Meeresorganismen, verringert so die Bestände heimischer Arten, konkurriert um Nahrung und Raum und kann auch die Fischerei beeinträchtigen.<br>
        Mit ihrer Beweglichkeit, Anpassungsfähigkeit und dem hohen Fortpflanzungspotenzial ist die Blaue Krabbe eine ernsthafte Herausforderung für das Gleichgewicht mariner Ökosysteme.</p>

        <!-- Izvori (HR): isti kao u HR -->
      `,
      riddleTitle: "🔍 Rätsel",
      riddleText: `
        <p>Ich bin kein Pferd, auch wenn ich ihm ähnele.<br>
        Die Menschen nennen mich stur,<br>
        doch ich stehe einfach fest zu mir.</p>

        <p>Diese Gegend ist mein Zuhause;<br>
        ich trug die Last von Land und Menschen.</p>

        <p>Hier treffen Welten aufeinander —<br>
        die, die gekommen sind,<br>
        und die, die schon immer geblieben sind.</p>

        <p><strong>Wo kann Misho einen Freund finden?</strong></p>
      `,
      hintBtn: "Ich brauche einen Hinweis",
      hint: "Der größte Bewohner der Insel lebt auch hier 🐘",
      mapBtn: "Ich weiß wirklich nicht, wohin — ich brauche eine Karte",
      mapLoading: "⏳ Karte wird geladen...",
      mapOpened: "Karte geöffnet ✓",
      mapLocation: "Safari-Park",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1307.6553156558778!2d13.7420556!3d44.9238056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzI1LjciTiAxM8KwNDQnMzEuNCJF!5e1!3m2!1sde!2shr!4v1771075701147!5m2!1sde!2shr"          width="600"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },
  },

  // ------------------------------------------------------------
  // #2 SAFARI PARK
  // ------------------------------------------------------------
  safaripark: {
    hr: {
      title: "Mišo i izgubljeni",
      location: `<p>📍 Safari park</p>
      <img src="images/Magarica_Mara_i_Zebra_Berta.png" alt="Slika istarskog magarca Mare" class="hero-image">`,
      story: `
        <p>U Safari parku živi Mišina prijateljica Mara, istarski magarac. Snažna je i mirna, navikla na kamen i sunce. Njezina obitelj stoljećima je pomagala ljudima i naučila živjeti uz njih.</p>

        <p>Mara ovdje živi već dugo i dobro poznaje ove livade i putove. Kaže Miši da je nekad bilo puno više tovara, ali su s vremenom nestajali jer su ljudi mijenjali zemlju i više nije bilo mjesta za njih.</p>

        <p>Nedaleko od Mare živi i njezina rođakinja Berta, zebra. Imaju istog davnog pretka, ali su im se putevi razdvojili.</p>

        <p>Magarac je postao čovjekov pomagač, a zebra je ostala divlja stanovnica afričkih ravnica.</p>

        <p>Danas je na tim ravnicama sve manje mjesta. Ljudi grade naselja, obrađuju zemlju i ograđuju prostore kroz koje su zebre nekad slobodno prolazile. Bez dovoljno prostora i sigurnih putova, njihov je život sve teži.</p>

        <p>Ovdje, u Safari parku, Berta ima sigurno utočište. Zoološki vrtovi pomažu očuvati vrste, uče ljude zašto je važno čuvati prirodna staništa i sudjeluju u programima zaštite ugroženih životinja.</p>

        <p>Mišo tako shvaća:<br>
        nije dovoljno voljeti životinje —<br>
        treba čuvati i mjesta na kojima žive.</p>
      `,
      infoTitle: "Za one koji žele znati više",
      infoText: `
        <p><strong>Magarac</strong> (<i>Equus asinus</i>) pripada rodu <i>Equus</i>, zajedno s konjima i zebrama. Domaći magarac je domestificirani oblik afričkog divljeg magarca, čije je izvorno stanište sjeveroistočna Afrika i Arapski poluotok.</p>

        <p>Zahvaljujući pripitomljavanju, magarci su se proširili diljem svijeta. Posebno su cijenjeni u sušnim i krškim krajevima jer su iznimno izdržljivi i prilagodljivi.</p>

        <p>U Hrvatskoj postoje tri autohtone pasmine:</p>
        <ul>
          <li><strong>Istarski magarac</strong> je najveći i najkrupniji, snažne građe i tamne boje, prilagođen teškim poljoprivrednim poslovima.</li>
          <li><strong>Primorsko-dinarski magarac</strong> manji je i lakše građe, idealan za kamenita i krška područja Dalmacije, uglavnom sive boje s tamnom prugom duž leđa.</li>
          <li><strong>Sjevernojadranski magarac</strong> najmanji je i najugroženiji, također prilagođen suhim i kamenitim područjima.</li>
        </ul>

        <p><strong>Zebre</strong> su bliske rođakinje magarca i konja te dijele zajedničkog pretka koji je živio prije 4 do 4,5 milijuna godina. Postoje tri vrste zebri:</p>
        <ul>
          <li>stepska zebra (<i>Equus quagga</i>) – koja živi i u našem Safari parku</li>
          <li>planinska zebra (<i>Equus zebra</i>)</li>
          <li>Grévyjeva zebra (<i>Equus grevyi</i>)</li>
        </ul>

        <p>Zebre potječu iz Afrike i prepoznatljive su po svojim crno-bijelim prugama. Zapravo su crne životinje s bijelim prugama, a svaki primjerak ima jedinstven uzorak. U prirodi redovito putuju i tijekom godišnjih migracija prelaze velike udaljenosti u potrazi za hranom i vodom. Ove migracije izlažu ih brojnim opasnostima.</p>

        <p>Zebre imaju važnu ulogu u očuvanju bioraznolikosti savana. Nisu izbirljive u prehrani te pasu različite vrste trava, pa se smatraju „pionirskim ispašivačima“ jer pripremaju travnjake za druge biljojede.</p>

        <p>Danas su zebre suočene s problemom smanjivanja staništa. Širenje naselja, poljoprivreda i ispaša stoke smanjuju prostor kojim se mogu kretati, osobito u južnom dijelu njihova rasprostranjenja. To je jedan od glavnih razloga smanjenja brojnosti populacija.</p>

        <p>Magarci i zebre obje ovise o očuvanju, ali na različit način.<br>
        Magarci, kao pripitomljene životinje, ovise o odgovornom uzgoju i zaštiti domaćih pasmina.<br>
        Zebre, kao divlje životinje, ovise o očuvanju prirodnih staništa i slobodnih prostora za kretanje.</p>

        <p>U Safari parku magarci predstavljaju autohtonu domaću pasminu prilagođenu krškom području, dok zebre imaju sigurno okruženje u kojem se posjetitelji mogu upoznati s njihovom biologijom i ugrozama. Zoološki vrtovi i safari parkovi tako imaju važnu ulogu u edukaciji i očuvanju vrsta.</p>

        <!-- Izvori:
        https://www.np-brijuni.hr/hr/aktivnosti-parka/dan-zebri-2025-godine
        https://www.awf.org/wildlife-conservation/zebra
        https://animaldiversity.org/accounts/Equus_asinus/
        (Paula - tekst o magarcu)
        -->
      `,
      riddleTitle: "🔍 Zagonetka",
      riddleText: `<p><em>TODO: Smisliti zagonetku (Safari park → sljedeća lokacija)</em></p>`,
      hintBtn: "Trebam pomoć",
      hint: `<em>TODO: Smisliti hint</em>`,
      mapBtn: "Stvarno ne znam gdje ići, treba mi mapa s lokacijom",
      mapLoading: "⏳ Učitavanje karte...",
      mapOpened: "Mapa otvorena ✓",
      mapLocation: "Sljedeća lokacija",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d653.8841815091041!2d13.75376926961547!3d44.918838947838665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzA3LjgiTiAxM8KwNDUnMTUuOSJF!5e1!3m2!1shr!2shr!4v1771076081613!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    en: {
      title: "Misho and the Lost Ones",
      location: `<p>📍 Safari Park</p>
      <img src="images/Magarica_Mara_i_Zebra_Berta.png" alt="Picture of Mara the Istrian donkey" class="hero-image">`,
      story: `
        <p>In the Safari Park lives Misho’s friend Mara — an Istrian donkey. She is strong and calm, used to stone and sun. For centuries, her family helped people and learned to live beside them.</p>

        <p>Mara has lived here a long time and knows these meadows and paths well. She tells Misho there used to be many more donkeys, but over time they disappeared as people changed the land and there was less space for them.</p>

        <p>Not far from Mara lives her relative Berta — a zebra. They share a distant ancestor, but their paths separated long ago.</p>

        <p>The donkey became a helper of people, while the zebra remained a wild resident of Africa’s plains.</p>

        <p>Today those plains have less and less room. People build settlements, farm the land, and fence off areas zebras once crossed freely. Without enough space and safe routes, their lives become harder.</p>

        <p>Here in the Safari Park, Berta has a safe refuge. Zoos and safari parks help conserve species, teach people why natural habitats matter, and take part in programs that protect endangered animals.</p>

        <p>Misho understands:<br>
        it’s not enough to love animals —<br>
        we must protect the places where they live.</p>
      `,
      infoTitle: "For those who want to know more",
      infoText: `
        <p><strong>The donkey</strong> (<i>Equus asinus</i>) belongs to the genus <i>Equus</i>, together with horses and zebras. The domestic donkey is a domesticated form of the African wild donkey, originally from northeastern Africa and the Arabian Peninsula.</p>

        <p>Because of domestication, donkeys spread around the world. They are especially valued in dry, rocky regions because they are hardy and highly adaptable.</p>

        <p>In Croatia there are three native breeds:</p>
        <ul>
          <li><strong>Istrian donkey</strong> — the largest and strongest, dark in color, adapted to heavy agricultural work.</li>
          <li><strong>Coastal-Dinaric donkey</strong> — smaller and lighter, ideal for rocky Dalmatian terrain, usually gray with a dark stripe along the back.</li>
          <li><strong>Northern Adriatic donkey</strong> — the smallest and the most endangered, also adapted to dry and stony areas.</li>
        </ul>

        <p><strong>Zebras</strong> are close relatives of donkeys and horses. They share a common ancestor that lived about 4–4.5 million years ago. There are three zebra species:</p>
        <ul>
          <li>Plains zebra (<i>Equus quagga</i>) — the one you can also see in our Safari Park</li>
          <li>Mountain zebra (<i>Equus zebra</i>)</li>
          <li>Grévy’s zebra (<i>Equus grevyi</i>)</li>
        </ul>

        <p>Zebras are African animals, famous for black-and-white stripes. In fact, they are black with white stripes — and every individual has a unique pattern. In the wild they travel regularly and migrate long distances in search of food and water, facing many dangers along the way.</p>

        <p>Zebras play an important role in savanna biodiversity. They graze many different grasses and are often called “pioneer grazers” because they prepare grasslands for other herbivores.</p>

        <p>Today zebras face habitat loss. Expanding settlements, agriculture, and livestock grazing reduce the space they can move through, especially in the southern parts of their range — one of the main reasons populations decline.</p>

        <p>Donkeys and zebras both depend on conservation, but in different ways.<br>
        Donkeys, as domesticated animals, depend on responsible breeding and protection of native breeds.<br>
        Zebras, as wild animals, depend on protecting habitats and keeping open routes for movement.</p>

        <p>In the Safari Park, donkeys represent a native domestic breed adapted to karst landscapes, while zebras have a safe environment where visitors can learn about their biology and threats. Zoos and safari parks play an important role in education and species conservation.</p>

        <!-- Izvori (HR): isti kao u HR -->
      `,
      riddleTitle: "🔍 Riddle",
      riddleText: `<p><em>TODO</em></p>`,
      hintBtn: "I need a hint",
      hint: `<em>TODO</em>`,
      mapBtn: "I really don’t know where to go — I need a map",
      mapLoading: "⏳ Loading map...",
      mapOpened: "Map opened ✓",
      mapLocation: "Next location",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d653.8842457823272!2d13.7544167!3d44.9188333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzA3LjgiTiAxM8KwNDUnMTUuOSJF!5e1!3m2!1sen!2shr!4v1771076217847!5m2!1sen!2shr"          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    it: {
      title: "Misho e gli scomparsi",
      location: `<p>📍 Parco safari</p>
      <img src="images/Magarica_Mara_i_Zebra_Berta.png" alt="Immagine dell’asino istriano Mara" class="hero-image">`,
      story: `
        <p>Nel Parco safari vive l’amica di Misho, Mara — un asino istriano. È forte e tranquilla, abituata alla pietra e al sole. La sua famiglia, per secoli, ha aiutato le persone e ha imparato a vivere accanto a loro.</p>

        <p>Mara vive qui da molto tempo e conosce bene questi prati e questi sentieri. Dice a Misho che un tempo c’erano molti più “tovari”, ma col tempo sono scomparsi: gli uomini hanno cambiato la terra e non c’era più spazio per loro.</p>

        <p>Poco lontano vive anche la sua parente Berta — una zebra. Hanno un antenato lontano in comune, ma le loro strade si sono divise molto tempo fa.</p>

        <p>L’asino è diventato un aiutante dell’uomo, mentre la zebra è rimasta una selvaggia abitante delle pianure africane.</p>

        <p>Oggi però quelle pianure hanno sempre meno spazio. Le persone costruiscono insediamenti, coltivano la terra e recintano zone che le zebre un tempo attraversavano liberamente. Senza abbastanza spazio e corridoi sicuri, la vita diventa sempre più difficile.</p>

        <p>Qui, nel Parco safari, Berta ha un rifugio sicuro. Zoo e parchi safari aiutano a conservare le specie, insegnano perché è importante proteggere gli habitat naturali e partecipano a programmi per la tutela degli animali minacciati.</p>

        <p>Misho capisce:<br>
        non basta amare gli animali —<br>
        bisogna proteggere anche i luoghi in cui vivono.</p>
      `,
      infoTitle: "Per chi vuole saperne di più",
      infoText: `
        <p><strong>L’asino</strong> (<i>Equus asinus</i>) appartiene al genere <i>Equus</i>, insieme a cavalli e zebre. L’asino domestico è la forma addomesticata dell’asino selvatico africano, originario dell’Africa nordorientale e della Penisola Arabica.</p>

        <p>Con l’addomesticamento gli asini si sono diffusi in tutto il mondo. Sono particolarmente apprezzati nelle zone aride e rocciose perché sono resistenti e molto adattabili.</p>

        <p>In Croazia esistono tre razze autoctone:</p>
        <ul>
          <li><strong>Asino istriano</strong> — il più grande e robusto, di colore scuro, adatto ai lavori agricoli pesanti.</li>
          <li><strong>Asino litoraneo-dinarico</strong> — più piccolo e leggero, ideale per i terreni pietrosi della Dalmazia, spesso grigio con una striscia scura lungo la schiena.</li>
          <li><strong>Asino nordadriatico</strong> — il più piccolo e il più minacciato, anch’esso adattato alle aree secche e sassose.</li>
        </ul>

        <p><strong>Le zebre</strong> sono parenti strette di asini e cavalli e condividono un antenato comune vissuto circa 4–4,5 milioni di anni fa. Le specie di zebra sono tre:</p>
        <ul>
          <li>zebra delle pianure (<i>Equus quagga</i>) — presente anche nel nostro Parco safari</li>
          <li>zebra di montagna (<i>Equus zebra</i>)</li>
          <li>zebra di Grévy (<i>Equus grevyi</i>)</li>
        </ul>

        <p>Le zebre provengono dall’Africa e sono riconoscibili per le strisce bianche e nere. In realtà sono animali neri con strisce bianche, e ogni individuo ha un disegno unico. In natura viaggiano spesso e durante le migrazioni percorrono grandi distanze alla ricerca di cibo e acqua, affrontando molti rischi.</p>

        <p>Le zebre hanno un ruolo importante nella biodiversità delle savane: brucano diverse specie di erbe e sono considerate “pascolatrici pioniere” perché preparano i prati per altri erbivori.</p>

        <p>Oggi il problema principale è la perdita di habitat. L’espansione degli insediamenti, l’agricoltura e il pascolo del bestiame riducono gli spazi di movimento, soprattutto nella parte meridionale dell’areale — una delle cause principali del calo delle popolazioni.</p>

        <p>Asini e zebre dipendono entrambi dalla tutela, ma in modo diverso:<br>
        gli asini dipendono dall’allevamento responsabile e dalla protezione delle razze autoctone;<br>
        le zebre dipendono dalla conservazione degli habitat e di spazi aperti per muoversi.</p>

        <p>Nel Parco safari gli asini rappresentano una razza domestica autoctona adattata al paesaggio carsico, mentre le zebre hanno un ambiente sicuro in cui i visitatori possono conoscere biologia e minacce. Zoo e parchi safari hanno un ruolo importante nell’educazione e nella conservazione delle specie.</p>

        <!-- Izvori (HR): isti kao u HR -->
      `,
      riddleTitle: "🔍 Indovinello",
      riddleText: `<p><em>TODO</em></p>`,
      hintBtn: "Ho bisogno di un aiuto",
      hint: `<em>TODO</em>`,
      mapBtn: "Non so davvero dove andare — mi serve una mappa",
      mapLoading: "⏳ Caricamento mappa...",
      mapOpened: "Mappa aperta ✓",
      mapLocation: "Prossima tappa",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d653.8842457823272!2d13.7544167!3d44.9188333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzA3LjgiTiAxM8KwNDUnMTUuOSJF!5e1!3m2!1sit!2shr!4v1771076322710!5m2!1sit!2shr"          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    de: {
      title: "Misho und die Vermissten",
      location: `<p>📍 Safari-Park</p>
      <img src="images/Magarica_Mara_i_Zebra_Berta.png" alt="Bild des Istrischen Esels Mara" class="hero-image">`,
      story: `
        <p>Im Safari-Park lebt Mishos Freundin Mara – ein Istrischer Esel. Sie ist stark und ruhig, an Stein und Sonne gewöhnt. Ihre Familie hat den Menschen jahrhundertelang geholfen und gelernt, mit ihnen zu leben.</p>

        <p>Mara lebt schon lange hier und kennt diese Wiesen und Wege. Sie erzählt Misho, dass es früher viel mehr Esel gab, doch mit der Zeit verschwanden sie, weil Menschen die Landschaft veränderten und weniger Platz blieb.</p>

        <p>Nicht weit von Mara lebt auch ihre Verwandte Berta – ein Zebra. Sie teilen einen sehr alten gemeinsamen Vorfahren, aber ihre Wege trennten sich vor langer Zeit.</p>

        <p>Der Esel wurde zum Helfer des Menschen, das Zebra blieb ein wildes Tier der afrikanischen Ebenen.</p>

        <p>Heute jedoch haben diese Ebenen immer weniger Raum. Menschen bauen Siedlungen, bewirtschaften Land und zäunen Flächen ein, die Zebras früher frei durchquerten. Ohne genügend Platz und sichere Korridore wird ihr Leben zunehmend schwer.</p>

        <p>Hier im Safari-Park hat Berta einen sicheren Zufluchtsort. Zoos und Safari-Parks helfen Arten zu erhalten, erklären, warum natürliche Lebensräume wichtig sind, und beteiligen sich an Programmen zum Schutz gefährdeter Tiere.</p>

        <p>Misho versteht:<br>
        Es reicht nicht, Tiere zu lieben —<br>
        wir müssen auch die Orte schützen, an denen sie leben.</p>
      `,
      infoTitle: "Für alle, die mehr wissen möchten",
      infoText: `
        <p><strong>Der Esel</strong> (<i>Equus asinus</i>) gehört zur Gattung <i>Equus</i>, gemeinsam mit Pferden und Zebras. Der Hausesel ist die domestizierte Form des Afrikanischen Wildesels, ursprünglich aus Nordostafrika und der Arabischen Halbinsel.</p>

        <p>Durch die Domestikation verbreiteten sich Esel weltweit. Besonders in trockenen, steinigen Regionen sind sie geschätzt, weil sie sehr robust und anpassungsfähig sind.</p>

        <p>In Kroatien gibt es drei autochthone Rassen:</p>
        <ul>
          <li><strong>Istrischer Esel</strong> — der größte und kräftigste, dunkel gefärbt, für schwere landwirtschaftliche Arbeit geeignet.</li>
          <li><strong>Küsten-Dinarischer Esel</strong> — kleiner und leichter, ideal für das felsige Dalmatien, meist grau mit dunklem Rückenstreifen.</li>
          <li><strong>Nördlicher Adriatischer Esel</strong> — der kleinste und am stärksten bedrohte, ebenfalls an trockene, steinige Gebiete angepasst.</li>
        </ul>

        <p><strong>Zebras</strong> sind nahe Verwandte von Eseln und Pferden. Sie teilen einen gemeinsamen Vorfahren, der vor etwa 4–4,5 Millionen Jahren lebte. Es gibt drei Zebraarten:</p>
        <ul>
          <li>Steppenzebra (<i>Equus quagga</i>) — diese Art lebt auch in unserem Safari-Park</li>
          <li>Bergzebra (<i>Equus zebra</i>)</li>
          <li>Grévyzebra (<i>Equus grevyi</i>)</li>
        </ul>

        <p>Zebras stammen aus Afrika und sind an ihren schwarzen und weißen Streifen zu erkennen. Tatsächlich sind sie schwarze Tiere mit weißen Streifen — und jedes Tier hat ein einzigartiges Muster. In freier Wildbahn wandern sie oft und legen während der jährlichen Migration große Strecken zurück, um Nahrung und Wasser zu finden. Dabei sind sie vielen Gefahren ausgesetzt.</p>

        <p>Zebras spielen eine wichtige Rolle für die Biodiversität der Savannen. Sie fressen verschiedene Gräser und gelten als „Pionier-Weider“, weil sie Graslandschaften für andere Pflanzenfresser vorbereiten.</p>

        <p>Heute leiden Zebras vor allem unter Lebensraumverlust. Siedlungen, Landwirtschaft und Viehweiden verkleinern die Flächen, in denen sie sich bewegen können, besonders im Süden ihres Verbreitungsgebietes — ein Hauptgrund für den Rückgang der Bestände.</p>

        <p>Esel und Zebras sind beide auf Schutz angewiesen, aber auf unterschiedliche Weise:<br>
        Esel als Haustiere brauchen verantwortungsvolle Zucht und den Erhalt heimischer Rassen;<br>
        Zebras als Wildtiere brauchen geschützte Lebensräume und offene Wege zum Wandern.</p>

        <p>Im Safari-Park stehen Esel als heimische, an Karstlandschaften angepasste Rasse, während Zebras eine sichere Umgebung haben, in der Besucher ihre Biologie und Gefährdungen kennenlernen. Zoos und Safari-Parks erfüllen damit eine wichtige Bildungs- und Schutzfunktion.</p>

        <!-- Izvori (HR): isti kao u HR -->
      `,
      riddleTitle: "🔍 Rätsel",
      riddleText: `<p><em>TODO</em></p>`,
      hintBtn: "Ich brauche einen Hinweis",
      hint: `<em>TODO</em>`,
      mapBtn: "Ich weiß wirklich nicht, wohin — ich brauche eine Karte",
      mapLoading: "⏳ Karte wird geladen...",
      mapOpened: "Karte geöffnet ✓",
      mapLocation: "Nächster Ort",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d653.8842457823272!2d13.7544167!3d44.9188333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzA3LjgiTiAxM8KwNDUnMTUuOSJF!5e1!3m2!1sde!2shr!4v1771076407840!5m2!1sde!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },
  },

  // ------------------------------------------------------------
  // #3 MORSKI VRANAC (lokacija TBD)
  // ------------------------------------------------------------
  morskiVranac: {
    hr: {
      title: "Mišo i izgubljeni",
      location: `<p>📍 (lokacija po mapi)</p>
      <img src="images/Morski_vranac.png" alt="Slika morskog vranca" class="hero-image">`,
      story: `
        <p>Mišo je promatrajući more ugledao crnu pticu kako zaranja.</p>
        <p>„Gnjurac!“, netko je šapnuo.</p>
        <p>Ali Mišo je odmahnuo glavom.<br>
        „Ne, to je morski vranac. Gnjurac je druga ptica.“</p>

        <p>Morski vranac cijeli je život vezan uz more. Gnijezdi se na liticama i vanjskim otočićima brijunskog arhipelaga, na mjestima zatvorenima za javnost, gdje je pristup ljudima i brodicama zabranjen.<br>
        Tamo ima ono što mu je najvažnije — mir.</p>

        <p>Mišo shvaća da neka mjesta nisu zatvorena zato da bi nas udaljila, nego da bi nekome drugome omogućila život.<br>
        Kad znamo tko živi oko nas, lakše odlučujemo kako se ponašati.</p>
      `,
      infoTitle: "Za one koji žele znati više",
      infoText: `
        <p><strong>Morski vranac</strong> (<i>Phalacrocorax aristotelis desmarestii</i>) ptica je koja je čitav život vezana uz more i obalu. Gnijezdi se na liticama, u škrapama ili gustom obalnom grmlju, na osamljenim mjestima daleko od ljudi. Mlade ptice su smeđe boje s bijelim trbuhom, dok su odrasle jedinke potpuno crne.</p>

        <p>U Nacionalnom parku Brijuni morski je vranac prisutan tijekom cijele godine. Otočići na koje posjetiteljima nije dopušten pristup pružaju mu sigurna mjesta za gniježđenje i podizanje mladih.</p>

        <p>Morski vranac je u Hrvatskoj strogo zaštićena vrsta, a njegova sredozemna podvrsta ugrožena je na europskoj razini te je uključena u mrežu NATURA 2000. Ugrožavaju ga uznemiravanje, onečišćenje mora, smanjenje količine ribe zbog prelova te stradavanje u ribarskim alatima. Kao vršni predator ima važnu ulogu u održavanju ravnoteže morskog ekosustava.</p>

        <!-- Izvor:
        https://www.np-brijuni.hr/hr/aktivnosti-parka/dani-morskog-vranca-medunarodni-monitoring
        -->
      `,
      riddleTitle: "🔍 Zagonetka",
      riddleText: `<p><em>TODO: Smisliti zagonetku (Morski vranac → sljedeća lokacija)</em></p>`,
      hintBtn: "Trebam pomoć",
      hint: `<em>TODO: Smisliti hint</em>`,
      mapBtn: "Stvarno ne znam gdje ići, treba mi mapa s lokacijom",
      mapLoading: "⏳ Učitavanje karte...",
      mapOpened: "Mapa otvorena ✓",
      mapLocation: "Sljedeća lokacija",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5231.410380080189!2d13.754844447810704!3d44.91514155776675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060067602!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    en: {
      title: "Misho and the Lost Ones",
      location: `<p>📍 (location on the map)</p>
      <img src="images/Morski_vranac.png" alt="Picture of the European shag" class="hero-image">`,
      story: `
        <p>While watching the sea, Misho spotted a dark bird diving beneath the surface.</p>
        <p>“A grebe!”, someone whispered.</p>
        <p>But Misho shook his head.<br>
        “No — that’s a shag. A grebe is a different bird.”</p>

        <p>The shag belongs to the sea. It spends its life along the coast, nesting on cliffs and the outer islets of the Brijuni archipelago — in places closed to visitors, where people and boats are not allowed.<br>
        There it has what matters most: peace.</p>

        <p>Misho understands that some places aren’t closed to push us away, but to give someone else a chance to live.<br>
        When we know who lives around us, it’s easier to choose how we behave.</p>
      `,
      infoTitle: "For those who want to know more",
      infoText: `
        <p><strong>The European shag</strong> (<i>Phalacrocorax aristotelis desmarestii</i>) is a bird closely tied to the sea and coastline. It nests on cliffs, in rock crevices, or in dense coastal shrubs, choosing secluded places far from people. Juveniles are brownish with a pale belly, while adults are entirely dark.</p>

        <p>In Brijuni National Park, the shag is present year-round. The islets where visitors are not allowed provide safe nesting sites and places to raise chicks.</p>

        <p>The shag is strictly protected in Croatia, and its Mediterranean subspecies is considered threatened at the European level and included in the NATURA 2000 network. Major threats include disturbance, marine pollution, reduced fish stocks due to overfishing, and accidental capture in fishing gear. As a top predator, it plays an important role in keeping the marine ecosystem in balance.</p>

        <!-- Izvor (HR):
        https://www.np-brijuni.hr/hr/aktivnosti-parka/dani-morskog-vranca-medunarodni-monitoring
        -->
      `,
      riddleTitle: "🔍 Riddle",
      riddleText: `<p><em>TODO</em></p>`,
      hintBtn: "I need a hint",
      hint: `<em>TODO</em>`,
      mapBtn: "I really don’t know where to go — I need a map",
      mapLoading: "⏳ Loading map...",
      mapOpened: "Map opened ✓",
      mapLocation: "Next location",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5231.410380080189!2d13.754844447810704!3d44.91514155776675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060067602!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    it: {
      title: "Misho e gli scomparsi",
      location: `<p>📍 (posizione sulla mappa)</p>
      <img src="images/Morski_vranac.png" alt="Immagine del marangone dal ciuffo" class="hero-image">`,
      story: `
        <p>Osservando il mare, Misho vide un uccello scuro tuffarsi sott’acqua.</p>
        <p>“Uno svasso!”, sussurrò qualcuno.</p>
        <p>Ma Misho scosse la testa.<br>
        “No — quello è un marangone. Lo svasso è un altro uccello.”</p>

        <p>Il marangone vive legato al mare. Nidifica sulle scogliere e sugli isolotti più esterni dell’arcipelago di Brioni — in luoghi chiusi al pubblico, dove l’accesso a persone e barche è vietato.<br>
        Lì ha ciò che gli serve più di tutto: la quiete.</p>

        <p>Misho capisce che certi luoghi non sono chiusi per allontanarci, ma per permettere a qualcun altro di vivere.<br>
        Quando sappiamo chi abita accanto a noi, è più facile scegliere come comportarci.</p>
      `,
      infoTitle: "Per chi vuole saperne di più",
      infoText: `
        <p><strong>Il marangone dal ciuffo</strong> (<i>Phalacrocorax aristotelis desmarestii</i>) è un uccello legato al mare e alla costa. Nidifica su scogliere, nelle spaccature della roccia o tra la fitta vegetazione costiera, in luoghi isolati e lontani dalle persone. I giovani sono bruni con il ventre chiaro, mentre gli adulti sono completamente scuri.</p>

        <p>Nel Parco Nazionale di Brioni è presente tutto l’anno. Gli isolotti dove i visitatori non possono accedere offrono siti sicuri per nidificare e allevare i piccoli.</p>

        <p>In Croazia è una specie rigorosamente protetta e la sottospecie mediterranea è considerata minacciata a livello europeo ed è inclusa nella rete NATURA 2000. È minacciata dal disturbo, dall’inquinamento del mare, dalla riduzione dei pesci dovuta alla pesca eccessiva e dagli incidenti con gli attrezzi da pesca. Come predatore apicale, ha un ruolo importante nell’equilibrio dell’ecosistema marino.</p>

        <!-- Izvor (HR):
        https://www.np-brijuni.hr/hr/aktivnosti-parka/dani-morskog-vranca-medunarodni-monitoring
        -->
      `,
      riddleTitle: "🔍 Indovinello",
      riddleText: `<p><em>TODO</em></p>`,
      hintBtn: "Ho bisogno di un aiuto",
      hint: `<em>TODO</em>`,
      mapBtn: "Non so davvero dove andare — mi serve una mappa",
      mapLoading: "⏳ Caricamento mappa...",
      mapOpened: "Mappa aperta ✓",
      mapLocation: "Prossima tappa",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5231.410380080189!2d13.754844447810704!3d44.91514155776675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060067602!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    de: {
      title: "Misho und die Vermissten",
      location: `<p>📍 (Ort laut Karte)</p>
      <img src="images/Morski_vranac.png" alt="Bild des Krähenscharben" class="hero-image">`,
      story: `
        <p>Während Misho aufs Meer blickte, sah er einen dunklen Vogel abtauchen.</p>
        <p>„Ein Taucher!“, flüsterte jemand.</p>
        <p>Doch Misho schüttelte den Kopf.<br>
        „Nein — das ist ein Krähenscharbe. Ein Taucher ist ein anderer Vogel.“</p>

        <p>Der Krähenscharbe ist sein ganzes Leben ans Meer gebunden. Er brütet an Klippen und auf den äußeren Inselchen des Brijuni-Archipels — an Orten, die für Besucher geschlossen sind, wo Menschen und Boote keinen Zugang haben.<br>
        Dort hat er das Wichtigste: Ruhe.</p>

        <p>Misho versteht, dass manche Orte nicht geschlossen sind, um uns fernzuhalten, sondern um jemand anderem Leben zu ermöglichen.<br>
        Wenn wir wissen, wer um uns herum lebt, fällt es leichter zu entscheiden, wie wir uns verhalten.</p>
      `,
      infoTitle: "Für alle, die mehr wissen möchten",
      infoText: `
        <p><strong>Der Krähenscharbe</strong> (<i>Phalacrocorax aristotelis desmarestii</i>) ist ein Vogel, der eng an Meer und Küste gebunden ist. Er brütet an Klippen, in Felsspalten oder in dichtem Küstengebüsch und wählt abgeschiedene Plätze fern von Menschen. Junge Vögel sind bräunlich mit hellem Bauch, adulte Tiere dagegen vollständig dunkel.</p>

        <p>Im Nationalpark Brijuni ist der Krähenscharbe das ganze Jahr über präsent. Inselchen, die für Besucher gesperrt sind, bieten sichere Brutplätze und Gebiete zur Aufzucht der Jungen.</p>

        <p>In Kroatien ist er streng geschützt, und die mediterrane Unterart gilt europaweit als bedroht und ist Teil des NATURA-2000-Netzwerks. Bedrohungen sind Störungen, Meeresverschmutzung, weniger Fisch durch Überfischung sowie Verletzungen in Fischereigeräten. Als Spitzenprädator trägt er wesentlich zum Gleichgewicht des marinen Ökosystems bei.</p>

        <!-- Izvor (HR):
        https://www.np-brijuni.hr/hr/aktivnosti-parka/dani-morskog-vranca-medunarodni-monitoring
        -->
      `,
      riddleTitle: "🔍 Rätsel",
      riddleText: `<p><em>TODO</em></p>`,
      hintBtn: "Ich brauche einen Hinweis",
      hint: `<em>TODO</em>`,
      mapBtn: "Ich weiß wirklich nicht, wohin — ich brauche eine Karte",
      mapLoading: "⏳ Karte wird geladen...",
      mapOpened: "Karte geöffnet ✓",
      mapLocation: "Nächster Ort",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5231.410380080189!2d13.754844447810704!3d44.91514155776675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060067602!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },
  },

  // ------------------------------------------------------------
  // #4 PAUNOVO PERO (lokacija TBD, vodi na Kastrum)
  // ------------------------------------------------------------
  paunovoPero: {
    hr: {
      title: "Mišo i izgubljeni",
      location: `<p>📍 (livada / staza)</p>
      <img src="images/Paun.png" alt="Slika pauna" class="hero-image">`,
      story: `
        <p>Mišo je na livadi ugledao mužjaka pauna kako stoji pred ženkom. Odjednom je raširio svoj golemi rep u lepezu. Pera su zasjala u plavim i zelenim nijansama, a zatim ih je počeo brzo tresti.</p>

        <p>Zujalo je i šuštalo — rep je podrhtavao brzinom od više zamaha u sekundi, stvarajući tihi val zraka i zvuk koji se gotovo osjetio u tlu.</p>

        <p>Tako se paun udvara. Pokazuje snagu, zdravlje i raskoš svoga perja.</p>

        <p>Paunovi su na Brijune uneseni prije mnogo godina. Nisu invazivni, ali nisu ni domaća vrsta — oni su ovdje poznanici prirode, ne njezini izvorni stanovnici.</p>

        <p>Nastavljajući svojim putem, Mišo je na stazi je ugledao jedno od paunovih pera. Bilo je predivno.</p>
        <p>„Ponijet ću ga sa sobom“, pomislio je.</p>
        <p>Ali zastao je.</p>

        <p>Pera nakon sezone parenja otpadaju i svake godine ponovno izrastu. Otpala pera s vremenom se razgrade, postanu dio tla i vrate hranjive tvari prirodi.</p>

        <p>„Ako svatko uzme samo jedno pero, što će ostati prirodi?“</p>

        <p>Mišo je shvatio:<br>
        „Nije sve što je lijepo stvoreno da bude moje.“</p>

        <p>Ostavio je pero ondje gdje je palo i nastavio dalje.</p>
      `,
      infoTitle: "Za one koji žele znati više",
      infoText: `
        <p>Na Velom Brijunu živi indijski paun (<i>Pavo cristatus</i>), vrsta unesena prije mnogo godina kao egzotična životinja. Danas se slobodno kreće otokom i postao je prepoznatljiv dio njegova krajobraza.</p>

        <p>Mužjak pauna poznat je po svojim dugim repnim perima. Tijekom sezone parenja širi ih u veliku lepezu i brzo ih podrhtava. Time stvara vizualni dojam veličine i raskoši, ali i sitne vibracije zraka koje ženka može osjetiti. Što su pera gušća, pravilnija i sjajnija, to mužjak pokazuje da je zdrav i snažan. Tako ženka odabire partnera.</p>

        <p>Nakon sezone parenja mužjak odbacuje ta duga pera. Taj prirodni proces naziva se mitarenje. Pera potom ostaju na tlu gdje postupno propadaju i razgrađuju se. Razgradnjom vraćaju hranjive tvari u tlo, sudjeluju u kruženju tvari u prirodi i postaju dio šumskog tla. Mogu poslužiti i kao materijal drugim životinjama za gnijezda ili zaklon.</p>

        <p>Iako se pero može činiti kao bezazlen suvenir, ono je dio prirodnog ciklusa. Zato je u Nacionalnom parku zabranjeno iznositi bilo koji dio prirode — sve pripada ekosustavu kojem služi.<br>
        Prirodu čuvamo tako da je promatramo, a ne da je odnosimo sa sobom.</p>

        <!-- Izvori:
        https://www.np-brijuni.hr/hr/aktivnosti-parka/paunova-perja-pripadaju-prirodi
        https://www.np-brijuni.hr/hr/novosti/postovani-posjetitelji-molimo-vas-da-ne-uzimate-paunova-pera
        -->
      `,
      riddleTitle: "🔍 Zagonetka",
      riddleText: `
        Dugo sam bio naseljen, ovdje je prošlo mnogo naroda.<br>
        Od Rimljana do Mlečana su ljudi živjeli iza mojih zidina.<br>
        Letim iznad kamenja koje pamti vrijeme.<br>
        Rimljani, seljaci, more i vjetar<br>
        ostavili su trag u zidovima što šapuću noću.<br>
        Masline su se ovdje drobile, vino je teklo,<br>
        zidovi su čuvali dom i zajednicu.<br>
        Nije dvorac, a ima bedeme,<br>
        nije grad, a ima povijest tisuću koraka.<br>
        U prostoru omeđenom kamenom i pričama,<br>
        u uvali gdje se prošlost složila u slojeve –<br>
        <p><strong>gdje će šišmiš Mišo pronaći prijatelje?</strong></p>
      `,
      hintBtn: "Trebam pomoć",
      hint: "Stari kameni zidovi uz more, gledaju prema otoku koji je najbliže Velom Brijunu.",
      mapBtn: "Stvarno ne znam gdje ići, treba mi mapa s lokacijom",
      mapLoading: "⏳ Učitavanje karte...",
      mapOpened: "Mapa otvorena ✓",
      mapLocation: "Kastrum",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5232.024569649276!2d13.757869979766994!3d44.90839443889913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060138830!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    en: {
      title: "Misho and the Lost Ones",
      location: `<p>📍 (meadow / path)</p>
      <img src="images/Paun.png" alt="Picture of a peacock" class="hero-image">`,
      story: `
        <p>On a meadow, Misho saw a peacock standing in front of a peahen. Suddenly he opened his huge tail into a fan. The feathers flashed in blue and green, and then he began to shake them quickly.</p>

        <p>It buzzed and rustled — the tail trembled several times per second, creating a soft wave of air and a sound you could almost feel in the ground.</p>

        <p>This is how a peacock courts. He shows strength, health, and the splendour of his feathers.</p>

        <p>Peacocks were brought to Brijuni many years ago. They are not invasive, but they are not native either — they are guests of nature here, not its original residents.</p>

        <p>As he continued, Misho noticed a peacock feather on the path. It was beautiful.</p>
        <p>“I’ll take it with me,” he thought.</p>
        <p>But he stopped.</p>

        <p>After the breeding season, the long feathers fall out and grow back each year. Fallen feathers slowly break down, become part of the soil, and return nutrients to nature.</p>

        <p>“If everyone takes just one feather, what will be left for nature?”</p>

        <p>Misho understood:<br>
        “Not everything beautiful was made to be mine.”</p>

        <p>He left the feather where it had fallen and flew on.</p>
      `,
      infoTitle: "For those who want to know more",
      infoText: `
        <p>On Veliki Brijun lives the Indian peafowl (<i>Pavo cristatus</i>), a species introduced many years ago as an exotic animal. Today it moves freely across the island and has become a recognizable part of the landscape.</p>

        <p>The male is famous for his long tail coverts. During the breeding season he spreads them into a large fan and vibrates them rapidly. This creates a striking visual display — and subtle air vibrations the female can sense. The denser, more symmetrical, and shinier the feathers, the more the male signals health and strength. That is how the female chooses a partner.</p>

        <p>After the breeding season, the male sheds those long feathers. This natural process is called moulting. The feathers remain on the ground and gradually decay. As they break down, they return nutrients to the soil, take part in nature’s cycles, and become part of the forest floor. They can also serve as nesting material or shelter for other animals.</p>

        <p>Even if a feather seems like a harmless souvenir, it is part of a natural cycle. That is why it is forbidden to take any part of nature out of the National Park — everything belongs to the ecosystem it serves.<br>
        We protect nature by observing it, not by carrying it away.</p>

        <!-- Izvori (HR): isti kao u HR -->
      `,
      riddleTitle: "🔍 Riddle",
      riddleText: `
        I have been inhabited for a long time; many peoples have passed through here.<br>
        From Romans to Venetians, lives were once held behind my walls.<br>
        I fly above stone that remembers time.<br>
        Romans, farmers, sea, and wind<br>
        left their mark in walls that whisper at night.<br>
        Olives were crushed here, wine once flowed,<br>
        and the walls guarded a home and a community.<br>
        Not a castle, yet it has ramparts,<br>
        not a city, yet it holds a thousand steps of history.<br>
        In a space bounded by stone and stories,<br>
        in a bay where the past settled in layers —<br>
        <p><strong>where will Misho the bat find friends?</strong></p>
      `,
      hintBtn: "I need a hint",
      hint: "Old stone walls by the sea, facing the island closest to Veliki Brijun.",
      mapBtn: "I really don’t know where to go — I need a map",
      mapLoading: "⏳ Loading map...",
      mapOpened: "Map opened ✓",
      mapLocation: "Castrum",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5232.024569649276!2d13.757869979766994!3d44.90839443889913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47632c06e163c079%3A0x1533528d6827eeea!2sBizantski%20kastrum!5e1!3m2!1shr!2shr!4v1771060138830!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    it: {
      title: "Misho e gli scomparsi",
      location: `<p>📍 (prato / sentiero)</p>
      <img src="images/Paun.png" alt="Immagine di un pavone" class="hero-image">`,
      story: `
        <p>Su un prato, Misho vide un maschio di pavone fermo davanti a una femmina. All’improvviso aprì la sua enorme coda a ventaglio. Le piume brillarono in tonalità di blu e verde, poi iniziò a scuoterle velocemente.</p>

        <p>Si sentiva un fruscio e un ronzio — la coda tremava più volte al secondo, creando una lieve onda d’aria e un suono che sembrava quasi vibrare nel terreno.</p>

        <p>Così il pavone corteggia. Mostra forza, salute e lo splendore del suo piumaggio.</p>

        <p>I pavoni sono stati introdotti a Brioni molti anni fa. Non sono invasivi, ma non sono nemmeno una specie autoctona — qui sono ospiti della natura, non i suoi abitanti originari.</p>

        <p>Proseguendo, Misho vide sul sentiero una piuma di pavone. Era bellissima.</p>
        <p>“La porterò con me,” pensò.</p>
        <p>Ma si fermò.</p>

        <p>Dopo la stagione degli amori le piume cadono e ricrescono ogni anno. Le piume a terra col tempo si degradano, diventano parte del suolo e restituiscono nutrienti alla natura.</p>

        <p>“Se ognuno prende solo una piuma, cosa resterà alla natura?”</p>

        <p>Misho capì:<br>
        “Non tutto ciò che è bello è fatto per essere mio.”</p>

        <p>Lasciò la piuma dov’era caduta e continuò.</p>
      `,
      infoTitle: "Per chi vuole saperne di più",
      infoText: `
        <p>Sull’isola di Brioni Maggiore vive il pavone indiano (<i>Pavo cristatus</i>), una specie introdotta molti anni fa come animale esotico. Oggi si muove liberamente sull’isola ed è diventato parte riconoscibile del paesaggio.</p>

        <p>Il maschio è famoso per le lunghe piume della coda. Durante la stagione riproduttiva le apre a ventaglio e le fa vibrare rapidamente. Questo crea un effetto visivo di grandezza e splendore, ma anche piccole vibrazioni d’aria che la femmina può percepire. Più le piume sono fitte, regolari e luminose, più il maschio mostra di essere sano e forte. Così la femmina sceglie il partner.</p>

        <p>Dopo la stagione, il maschio perde quelle piume lunghe: è la muta. Le piume rimangono sul terreno e gradualmente si decompongono. Restituiscono nutrienti al suolo, partecipano ai cicli della natura e diventano parte del “tappeto” del bosco. Possono anche servire come materiale per nidi o ripari di altri animali.</p>

        <p>Anche se una piuma sembra un souvenir innocuo, è parte di un ciclo naturale. Per questo nel Parco Nazionale è vietato portare via qualsiasi parte della natura — tutto appartiene all’ecosistema che lo utilizza.<br>
        Proteggiamo la natura osservandola, non portandola via con noi.</p>

        <!-- Izvori (HR): isti kao u HR -->
      `,
      riddleTitle: "🔍 Indovinello",
      riddleText: `
        Sono stato abitato a lungo: qui sono passati molti popoli.<br>
        Dai Romani ai Veneziani, la vita è scorsa dietro le mie mura.<br>
        Io volo sopra la pietra che ricorda il tempo.<br>
        Romani, contadini, mare e vento<br>
        hanno lasciato segni in muri che sussurrano di notte.<br>
        Qui si frantumavano olive, qui scorreva il vino,<br>
        e le mura custodivano una casa e una comunità.<br>
        Non sono un castello, ma ho bastioni,<br>
        non sono una città, ma ho mille passi di storia.<br>
        In uno spazio di pietra e racconti,<br>
        in una baia dove il passato si è posato a strati —<br>
        <p><strong>dove troverà amici Misho?</strong></p>
      `,
      hintBtn: "Ho bisogno di un aiuto",
      hint: "Vecchie mura di pietra sul mare, rivolte verso l’isola più vicina a Brioni Maggiore.",
      mapBtn: "Non so davvero dove andare — mi serve una mappa",
      mapLoading: "⏳ Caricamento mappa...",
      mapOpened: "Mappa aperta ✓",
      mapLocation: "Castrum",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5232.024569649276!2d13.757869979766994!3d44.90839443889913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47632c06e163c079%3A0x1533528d6827eeea!2sBizantski%20kastrum!5e1!3m2!1shr!2shr!4v1771060138830!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

    de: {
      title: "Misho und die Vermissten",
      location: `<p>📍 (Wiese / Weg)</p>
      <img src="images/Paun.png" alt="Bild eines Pfaus" class="hero-image">`,
      story: `
        <p>Auf einer Wiese sah Misho einen Pfauenhahn vor einer Pfauenhenne stehen. Plötzlich spreizte er seinen riesigen Schwanz zu einem Fächer. Die Federn leuchteten in Blau- und Grüntönen, dann begann er, sie schnell zu schütteln.</p>

        <p>Es summte und raschelte — der Schwanz vibrierte mehrmals pro Sekunde und erzeugte eine feine Luftwelle und einen Klang, den man fast im Boden spüren konnte.</p>

        <p>So wirbt ein Pfau. Er zeigt Kraft, Gesundheit und den Glanz seines Gefieders.</p>

        <p>Pfauen wurden vor vielen Jahren nach Brijuni gebracht. Sie sind nicht invasiv, aber sie sind auch keine heimische Art — hier sind sie Gäste der Natur, nicht ihre ursprünglichen Bewohner.</p>

        <p>Als Misho weiterflog, entdeckte er auf dem Weg eine Pfauenfeder. Sie war wunderschön.</p>
        <p>„Die nehme ich mit“, dachte er.</p>
        <p>Doch er hielt inne.</p>

        <p>Nach der Balzzeit fallen die langen Federn aus und wachsen jedes Jahr neu. Am Boden werden sie mit der Zeit zersetzt, werden Teil des Bodens und geben Nährstoffe an die Natur zurück.</p>

        <p>„Wenn jeder nur eine Feder mitnimmt — was bleibt dann der Natur?“</p>

        <p>Misho verstand:<br>
        „Nicht alles, was schön ist, wurde dafür geschaffen, mir zu gehören.“</p>

        <p>Er ließ die Feder liegen und zog weiter.</p>
      `,
      infoTitle: "Für alle, die mehr wissen möchten",
      infoText: `
        <p>Auf Veliki Brijun lebt der Indische Pfau (<i>Pavo cristatus</i>), eine Art, die vor vielen Jahren als exotisches Tier eingeführt wurde. Heute bewegt er sich frei über die Insel und ist zu einem charakteristischen Teil der Landschaft geworden.</p>

        <p>Der Pfauenhahn ist für seine langen Schwanzfedern bekannt. In der Balzzeit spreizt er sie zu einem großen Fächer und lässt sie schnell vibrieren. So entsteht ein eindrucksvoller Anblick — und feine Luftschwingungen, die das Weibchen spüren kann. Je dichter, symmetrischer und glänzender die Federn, desto stärker signalisiert der Hahn Gesundheit und Kraft. So wählt das Weibchen den Partner.</p>

        <p>Nach der Balzzeit wirft der Hahn diese langen Federn ab. Dieser natürliche Vorgang heißt Mauser. Die Federn bleiben am Boden und zerfallen langsam. Dabei geben sie Nährstoffe an den Boden zurück, sind Teil der Stoffkreisläufe und werden zum Waldboden. Sie können auch als Material für Nester oder als Schutz für andere Tiere dienen.</p>

        <p>Auch wenn eine Feder wie ein harmloses Souvenir wirkt, ist sie Teil eines natürlichen Kreislaufs. Darum ist es im Nationalpark verboten, irgendeinen Teil der Natur mitzunehmen — alles gehört zu dem Ökosystem, dem es dient.<br>
        Wir schützen die Natur, indem wir sie beobachten — nicht indem wir sie mitnehmen.</p>

        <!-- Izvori (HR): isti kao u HR -->
      `,
      riddleTitle: "🔍 Rätsel",
      riddleText: `
        Lange war ich bewohnt — viele Völker gingen hier ein und aus.<br>
        Von Römern bis Venezianern lebten Menschen hinter meinen Mauern.<br>
        Ich fliege über Stein, der Zeit erinnert.<br>
        Römer, Bauern, Meer und Wind<br>
        hinterließen Spuren in Mauern, die nachts flüstern.<br>
        Hier wurden Oliven zermahlen, hier floss einst Wein,<br>
        und die Mauern bewahrten ein Zuhause und eine Gemeinschaft.<br>
        Kein Schloss, und doch mit Wehrmauern,<br>
        keine Stadt, und doch mit tausend Schritten Geschichte.<br>
        In einem Raum aus Stein und Geschichten,<br>
        in einer Bucht, in der die Vergangenheit Schicht um Schicht liegt —<br>
        <p><strong>wo wird Misho seine Freunde finden?</strong></p>
      `,
      hintBtn: "Ich brauche einen Hinweis",
      hint: "Alte Steinmauern am Meer, mit Blick auf die Insel, die Veliki Brijun am nächsten liegt.",
      mapBtn: "Ich weiß wirklich nicht, wohin — ich brauche eine Karte",
      mapLoading: "⏳ Karte wird geladen...",
      mapOpened: "Karte geöffnet ✓",
      mapLocation: "Kastrum",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5232.024569649276!2d13.757869979766994!3d44.90839443889913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47632c06e163c079%3A0x1533528d6827eeea!2sBizantski%20kastrum!5e1!3m2!1shr!2shr!4v1771060138830!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },
  },

// ------------------------------------------------------------
// #5 KASTRUM
// ------------------------------------------------------------
kastrum: {
  hr: {
      title: "Mišo i izgubljeni",
      location: `<p>📍 Kastrum</p>
      <img src="images/Zelena_zaba.png" alt="Slika zelene žabe" class="hero-image">`,
      story: `
        <p>Mišo je stigao do Kastruma. Među starim zidovima, tamo gdje se skuplja slatka voda, život se budi čim zatopli.</p>
        <p>Uz vodu je ugledao zelenu žabu. Sjajna koža, snažne stražnje noge, mirne oči. Baš kao i njegova prijateljica Lota koju je već susretao na otoku.</p>

        <p>Ali ovdje žive dvije gotovo iste vrste zelene žabe. Neke su oduvijek ovdje, a neke su stigle izdaleka. Izgledaju potpuno isto. Ali strana ima prednost – brže dobije puno mladih. Zato uzima više prostora i hrane, a našim prijateljicama ostavlja manje.</p>

        <p>Mišo ne zna koga je susreo – staru prijateljicu ili stranca. Zato uči da nije sve opasno zato što izgleda drukčije, nego zato što prebrzo uzima više nego što priroda može dati.</p>

        <p>S tom mišlju nastavlja svoju potragu.</p>
      `,
      infoTitle: "Za one koji žele znati više",
      infoText: `
        <p>Na Velikom Brijunu uz slatkovodna staništa kao što su Brijunska bara, bazen u povrtnjaku i Bizantski kastrum, pronađena je velika zelena žaba (<i>Pelophylax ridibundus</i>) i strana, invazivna vrsta: balkanska zelena žaba (<i>Pelophylax kurtmuelleri</i>) koja je nakon unosa na područje Italije 40-ih godina 20. st., ubrzo proširila svoje područje rasprostranjenosti. Osim toga, balkanska zelena žaba ima produljenu sezonu parenja i može polagati jaja čak tri puta godišnje, što je značajna prednost naspram domaće vrste. Obje vrste mogu biti različitih boja i veličina, stoga je njihovo razlikovanje trebalo potvrditi genetičkim analizama. Velike zelene žabe prezimljavaju ukopane u mulj, a izlaze u rano proljeće. Nakon tjedana grijanja i obilnog hranjenja, počinje razmnožavanje kada mužjaci kreću s glasnim kreketanjem koje se najbolje može čuti u okolici Brijunske bare.</p>

        <!-- Izvor:
        Stručni priručnik NP Brijuni, str. 72
        -->
      `,
      riddleTitle: "🔍 Zagonetka",
      riddleText: `<p><em>TODO: Smisliti zagonetku (Kastrum → Peneda crnika)</em></p>`,
      hintBtn: "Trebam pomoć",
      hint: `<em>TODO: Smisliti hint</em>`,
      mapBtn: "Stvarno ne znam gdje ići, treba mi mapa s lokacijom",
      mapLoading: "⏳ Učitavanje karte...",
      mapOpened: "Mapa otvorena ✓",
      mapLocation: "Peneda",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5232.500427918057!2d13.750917693569539!3d44.90316639681382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060175099!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

  en: {
    title: "Misho and the Lost Ones",
    location: `<p>📍 Castrum</p>
      <img src="images/Zelena_zaba.png" alt="Image of a green frog" class="hero-image">`,
    story: `
      <p>Misho reached the Castrum. Between old stone walls, where fresh water gathers, life wakes up as soon as the air turns warm.</p>
      <p>By the water he spotted a green frog. Shiny skin, strong hind legs, calm eyes — just like his friend Lota whom he has met on the island before.</p>

      <p>But here, two almost identical green frogs live side by side. Some have been here for a long time, and some arrived from far away. They look the same. Yet the newcomer has an advantage — it can produce many young faster. So it takes more space and food, leaving less for the native frogs.</p>

      <p>Misho can’t be sure whom he just met — an old friend or a stranger. And he learns that danger isn’t always about looking different… but about taking too much, too quickly, from what nature can give.</p>

      <p>With that thought, he continues his search.</p>
    `,
    infoTitle: "For those who want to know more",
    infoText: `
      <p>On Veliki Brijun, near freshwater habitats such as the Brijuni Pond, the vegetable-garden pool, and the Byzantine Castrum, researchers recorded the marsh frog (<i>Pelophylax ridibundus</i>) and a non-native invasive species: the Balkan water frog (<i>Pelophylax kurtmuelleri</i>). After being introduced to Italy in the 1940s, the Balkan water frog soon expanded its range.</p>

      <p>It also has a longer breeding season and can lay eggs up to three times per year — a significant advantage over the native species. Because both species can vary in color and size, their identification had to be confirmed by genetic analyses.</p>

      <p>Green frogs overwinter buried in mud and emerge in early spring. After weeks of warming up and feeding, breeding begins, and males start loud chorusing — best heard around the Brijuni Pond.</p>

      <!-- Source (HR): Stručni priručnik NP Brijuni, str. 72 -->
    `,
    riddleTitle: "🔍 Riddle",
    riddleText: `<p><em>TODO: Riddle (Castrum → Peneda holm oak)</em></p>`,
    hintBtn: "I need a hint",
    hint: `<em>TODO</em>`,
    mapBtn: "I really don't know where to go — I need a map",
    mapLoading: "⏳ Loading map...",
    mapOpened: "Map opened ✓",
    mapLocation: "Peneda",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5232.500427918057!2d13.750917693569539!3d44.90316639681382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060175099!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },

  it: {
    title: "Misho e gli scomparsi",
    location: `<p>📍 Castrum</p>
      <img src="images/Zelena_zaba.png" alt="Immagine di una rana verde" class="hero-image">`,
    story: `
      <p>Misho arrivò al Castrum. Tra i vecchi muri di pietra, dove si raccoglie l’acqua dolce, la vita si risveglia appena torna il caldo.</p>
      <p>Vicino all’acqua vide una rana verde. Pelle lucida, forti zampe posteriori, occhi tranquilli — proprio come la sua amica Lota che ha già incontrato sull’isola.</p>

      <p>Ma qui vivono due specie di rane verdi quasi identiche. Alcune sono qui da sempre, altre sono arrivate da lontano. Sembrano uguali. Eppure la specie “ospite” ha un vantaggio: fa più piccoli, più in fretta. Così prende più spazio e più cibo, lasciandone meno alle rane autoctone.</p>

      <p>Misho non sa chi ha incontrato — un’amica di sempre o una straniera. E capisce che il pericolo non è sempre in ciò che appare diverso… ma in ciò che cresce troppo e prende più di quanto la natura possa offrire.</p>

      <p>Con questo pensiero continua la sua ricerca.</p>
    `,
    infoTitle: "Per chi vuole saperne di più",
    infoText: `
      <p>Su Veliki Brijun, presso habitat d’acqua dolce come la Bara di Brioni, la vasca nell’orto e il Castrum bizantino, sono state registrate la rana verde maggiore (<i>Pelophylax ridibundus</i>) e una specie non autoctona invasiva: la rana verde balcanica (<i>Pelophylax kurtmuelleri</i>).</p>

      <p>Dopo l’introduzione in Italia negli anni ’40 del XX secolo, la rana balcanica ha ampliato rapidamente la sua distribuzione. Ha una stagione riproduttiva più lunga e può deporre uova fino a tre volte l’anno, un vantaggio importante rispetto alla specie autoctona. Poiché entrambe le specie possono variare per colore e dimensioni, la distinzione è stata confermata con analisi genetiche.</p>

      <p>Le rane verdi svernano interrate nel fango e riemergono all’inizio della primavera. Dopo settimane di riscaldamento e alimentazione, inizia la riproduzione e i maschi cantano forte — soprattutto intorno alla Bara di Brioni.</p>

      <!-- Fonte (HR): Stručni priručnik NP Brijuni, str. 72 -->
    `,
    riddleTitle: "🔍 Indovinello",
    riddleText: `<p><em>TODO: Indovinello (Castrum → Peneda)</em></p>`,
    hintBtn: "Ho bisogno di un aiuto",
    hint: `<em>TODO</em>`,
    mapBtn: "Non so davvero dove andare — mi serve una mappa",
    mapLoading: "⏳ Caricamento mappa...",
    mapOpened: "Mappa aperta ✓",
    mapLocation: "Peneda",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5232.500427918057!2d13.750917693569539!3d44.90316639681382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060175099!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },

  de: {
    title: "Misho und die Vermissten",
    location: `<p>📍 Kastrum</p>
      <img src="images/Zelena_zaba.png" alt="Bild eines Grünen Frosches" class="hero-image">`,
    story: `
      <p>Misho erreichte das Kastrum. Zwischen alten Steinmauern, dort wo sich Süßwasser sammelt, erwacht das Leben, sobald es wärmer wird.</p>
      <p>Am Wasser entdeckte er einen grünen Frosch. Glänzende Haut, kräftige Hinterbeine, ruhige Augen — genau wie seine Freundin Lota, der er auf der Insel schon begegnet ist.</p>

      <p>Doch hier leben zwei fast identische Arten grüner Frösche. Manche waren schon immer hier, andere kamen von weit her. Sie sehen gleich aus. Aber der Neuankömmling hat einen Vorteil: Er bekommt schneller viele Junge. So nimmt er mehr Platz und Nahrung ein — und für die heimischen Frösche bleibt weniger.</p>

      <p>Misho weiß nicht, wen er getroffen hat — eine alte Freundin oder einen Fremden. Und er lernt: Gefahr bedeutet nicht immer „anders aussehen“, sondern manchmal „zu schnell zu viel nehmen“.</p>

      <p>Mit diesem Gedanken fliegt er weiter.</p>
    `,
    infoTitle: "Für alle, die mehr wissen möchten",
    infoText: `
      <p>Auf Veliki Brijun wurden an Süßwasser-Lebensräumen wie der Brijuni-Bara, dem Becken im Gemüsegarten und dem Byzantinischen Kastrum der Seefrosch (<i>Pelophylax ridibundus</i>) sowie eine nicht-heimische invasive Art nachgewiesen: der Balkan-Wasserfrosch (<i>Pelophylax kurtmuelleri</i>).</p>

      <p>Nach einer Einführung nach Italien in den 1940er Jahren breitete sich der Balkan-Wasserfrosch rasch aus. Er hat eine verlängerte Fortpflanzungszeit und kann bis zu dreimal pro Jahr Laich absetzen — ein deutlicher Vorteil gegenüber der heimischen Art. Da beide Arten in Farbe und Größe variieren können, wurde die Unterscheidung durch genetische Analysen bestätigt.</p>

      <p>Grüne Frösche überwintern im Schlamm eingegraben und erscheinen im frühen Frühjahr wieder. Nach Wochen des Aufwärmens und Fressens beginnt die Fortpflanzung; die Männchen rufen dann laut — am besten rund um die Brijuni-Bara zu hören.</p>

      <!-- Quelle (HR): Stručni priručnik NP Brijuni, str. 72 -->
    `,
    riddleTitle: "🔍 Rätsel",
    riddleText: `<p><em>TODO: Rätsel (Kastrum → Peneda)</em></p>`,
    hintBtn: "Ich brauche einen Hinweis",
    hint: `<em>TODO</em>`,
    mapBtn: "Ich weiß wirklich nicht wohin — ich brauche eine Karte",
    mapLoading: "⏳ Karte wird geladen...",
    mapOpened: "Karte geöffnet ✓",
    mapLocation: "Peneda",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5232.500427918057!2d13.750917693569539!3d44.90316639681382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060175099!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },
},

// ------------------------------------------------------------
// #6 PENEDA – CRNIKA
// ------------------------------------------------------------
penedaCrnika: {
  hr: {
      title: "Mišo i izgubljeni",
      location: `<p>📍 Crnika na poluotoku Peneda</p>
      <img src="images/Crnika.png" alt="Slika hrasta crnike" class="hero-image">`,
      story: `
        <p>Mišo je doletio do velikog, samotnog stabla hrasta crnike i spustio se na jednu čvrstu granu. Krošnja se širila poput zelenog kišobrana, a deblo je bilo široko i snažno.</p>
        <p>„Koliko si ti star?“ šapnuo je.</p>

        <p>Hrast crnika ovdje stoji desetljećima — možda i stoljećima. Njegovo lišće ostaje zeleno cijele godine, čak i kad druga stabla ogole svoje grane. U jesen daje žireve koji su hrana mnogim životinjama.</p>

        <p>Nekada su šume crnike bile visoke i guste. No zbog prekomjerne sječe mnoga su stabla posječena. Iz njihovih panjeva izrasli su novi izboji, ali oni često ostaju niži i razgranati. Umjesto visokih stabala danas na mnogim mjestima raste makija. Priroda pokušava ponovno rasti, ali ne može uvijek biti onakva kakva je nekad bila. Treba joj mnogo više vremena nego čovjeku da je posiječe.</p>

        <p>Mišo se zatim objesio naglavačke za granu na kojoj je sletio. Svijet je sada gledao naopako, ali hrast je i dalje stajao uspravno — čvrst, tih i strpljiv.</p>

        <p>„Ako želimo velike šume“, pomislio je, „moramo ih čuvati danas — da bi ih djeca sutra mogla vidjeti visoke i snažne. Možda je svijet naopako samo kad zaboravimo čuvati prirodu.“</p>

        <p>Lagano se zaljuljao na grani, a krošnja iznad njega šaptala je priču o vremenu, strpljenju i brizi.</p>
      `,
      infoTitle: "Za one koji žele znati više",
      infoText: `
        <p><strong>Hrast crnika</strong> (<i>Quercus ilex</i>) rasprostranjen je duž cijelog Sredozemlja, a u Hrvatskoj raste u Istri te uz obalu i na otocima Dalmacije. To je vazdazeleno drvo koje tijekom cijele godine ima lišće, iako ga stalno obnavlja.</p>

        <p>Crnika se može razmnožavati na dva načina: iz sjemena (žira) ili iz panja.<br>
        Ako novo stablo izraste iz sjemena, nastaje šuma sjemenjača.<br>
        Ako izraste iz panja nakon sječe, nastaje panjača.</p>

        <p>Stabla koja rastu iz panja obično su manjeg rasta i češće tvore guste, niže sastojine — makiju. Ipak, i iz panja može ponovno izrasti pravo stablo ako ima dovoljno vremena i povoljnih uvjeta.</p>

        <p>Prosječna visina crnika na Velikom Brijunu iznosi 10–15 metara, a prsni promjer (mjeri se na visini od 1,3 m od tla) 20–30 cm. U usporedbi s drugim vrstama u šumi, crnika je veličinom dominantna vrsta na otoku.</p>

        <p>Crnika može živjeti više od tisuću godina.<br>
        Simbol je otpornosti, prilagodbe i dugovječnosti mediteranskog krajolika.</p>

        <!-- Izvor:
        Stručni priručnik, str 57, 58
        -->
      `,
      riddleTitle: "🔍 Zagonetka",
      riddleText: `
        Do mene se ide uz mjesto gdje ptice imaju mir,<br>
        iza ograde koja govori: ne ulazi.<br>
        Staza te vodi do uvale koja je tiha i plitka,<br>
        skrivena od žurbe i buke.<br>
        S lijeve strane stoji zeleni poluotok,<br>
        po biljci je dobio ime.<br>
        U toj tišini Mišo traži prijateljicu<br>
        u travi koja raste pod morem.
      `,
      hintBtn: "Trebam pomoć",
      hint: "🌳 Zelenika je biljka srodnica masline",
      mapBtn: "Stvarno ne znam gdje ići, treba mi mapa s lokacijom",
      mapLoading: "⏳ Učitavanje karte...",
      mapOpened: "Mapa otvorena ✓",
      mapLocation: "Uvala Javorika",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5232.053619144725!2d13.758170387195271!3d44.908075298794266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060245298!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

  en: {
    title: "Misho and the Lost Ones",
    location: `<p>📍 Holm oak on the Peneda peninsula</p>
      <img src="images/Crnika.png" alt="Image of a holm oak" class="hero-image">`,
    story: `
      <p>Misho flew to a large, solitary holm oak and landed on a sturdy branch. Its crown spread like a green umbrella, and the trunk looked wide and strong.</p>
      <p>“How old are you?” he whispered.</p>

      <p>This holm oak has stood here for decades — maybe even centuries. Its leaves stay green all year, even when other trees stand bare. In autumn it drops acorns that feed many animals.</p>

      <p>Once, holm-oak forests were tall and dense. But heavy cutting removed many trees. New shoots grew from the stumps, yet they often stayed lower and more branched. Instead of high woodland, many places turned into Mediterranean scrub. Nature tries to grow back — but it can’t always become what it once was. It needs far more time to rebuild than a person needs to cut.</p>

      <p>Misho then hung upside down from the branch he had chosen. The world looked upside down — but the oak still stood upright: firm, quiet, and patient.</p>

      <p>“If we want great forests,” he thought, “we must protect them today — so children can see them tall and strong tomorrow. Maybe the world only turns upside down when we forget to care for nature.”</p>

      <p>He swayed gently, while the crown above him whispered a story about time, patience, and care.</p>
    `,
    infoTitle: "For those who want to know more",
    infoText: `
      <p><strong>Holm oak</strong> (<i>Quercus ilex</i>) grows throughout the Mediterranean. In Croatia it occurs in Istria and along the coast and islands of Dalmatia. It is an evergreen tree: it keeps leaves year-round, although it constantly renews them.</p>

      <p>Holm oak can regenerate in two ways: from seed (acorns) or from a stump.<br>
      If a new tree grows from seed, it forms a seed-origin forest.<br>
      If it grows from a stump after cutting, it forms coppice.</p>

      <p>Coppice stands are usually lower and denser and often look like scrub. Still, true trees can regrow from stumps if there is enough time and good conditions.</p>

      <p>On Veliki Brijun, holm oaks commonly reach 10–15 meters in height, with a trunk diameter of 20–30 cm (measured at 1.3 m). Compared with other species, holm oak is a dominant tree on the island.</p>

      <p>Holm oaks can live for more than a thousand years — a symbol of resilience and longevity in Mediterranean landscapes.</p>

      <!-- Source (HR): Stručni priručnik, str. 57–58 -->
    `,
    riddleTitle: "🔍 Riddle",
    riddleText: `
      To reach me, you pass a place where birds must have peace,<br>
      behind a fence that says: do not enter.<br>
      A path leads you to a quiet, shallow bay,<br>
      hidden from rush and noise.<br>
      On the left, a green peninsula stands,<br>
      named after a plant.<br>
      In that silence, Misho searches for a friend<br>
      in grass that grows beneath the sea.
    `,
    hintBtn: "I need a hint",
    hint: "🌳 Holm oak is related to the olive.",
    mapBtn: "I really don't know where to go — I need a map",
    mapLoading: "⏳ Loading map...",
    mapOpened: "Map opened ✓",
    mapLocation: "Javorika Bay",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5232.053619144725!2d13.758170387195271!3d44.908075298794266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060245298!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },

  it: {
    title: "Misho e gli scomparsi",
    location: `<p>📍 Leccio nella penisola di Peneda</p>
      <img src="images/Crnika.png" alt="Immagine del leccio" class="hero-image">`,
    story: `
      <p>Misho volò fino a un grande leccio solitario e si posò su un ramo robusto. La chioma si apriva come un ombrello verde e il tronco era largo e forte.</p>
      <p>«Quanti anni hai?» sussurrò.</p>

      <p>Questo leccio è qui da decenni — forse da secoli. Le sue foglie restano verdi tutto l’anno, anche quando altri alberi perdono le fronde. In autunno produce ghiande che nutrono molti animali.</p>

      <p>Un tempo i boschi di leccio erano alti e fitti. Ma i tagli eccessivi hanno abbattuto molti alberi. Dai ceppi sono spuntati nuovi getti, spesso più bassi e ramificati. Così, al posto di alberi alti, in molti luoghi cresce la macchia. La natura prova a ricrescere — ma non può tornare com’era in poco tempo. Le serve molto più tempo di quanto ne basti all’uomo per tagliare.</p>

      <p>Misho poi si appese a testa in giù al ramo su cui era atterrato. Il mondo sembrava capovolto, ma il leccio restava dritto: saldo, silenzioso e paziente.</p>

      <p>«Se vogliamo grandi foreste», pensò, «dobbiamo proteggerle oggi — perché domani i bambini possano vederle alte e forti. Forse il mondo è davvero sottosopra solo quando dimentichiamo di prenderci cura della natura».</p>

      <p>Si dondolò piano, mentre la chioma sopra di lui sussurrava una storia di tempo, pazienza e cura.</p>
    `,
    infoTitle: "Per chi vuole saperne di più",
    infoText: `
      <p><strong>Il leccio</strong> (<i>Quercus ilex</i>) è diffuso in tutto il Mediterraneo. In Croazia cresce in Istria e lungo la costa e le isole della Dalmazia. È un albero sempreverde: mantiene le foglie tutto l’anno, pur rinnovandole continuamente.</p>

      <p>Può rigenerarsi in due modi: da seme (ghianda) oppure dal ceppo.<br>
      Se un nuovo albero nasce dal seme, si forma un bosco da seme.<br>
      Se nasce dal ceppo dopo il taglio, si forma un ceduo.</p>

      <p>I cedui sono spesso più bassi e più densi e possono assumere l’aspetto della macchia mediterranea. Tuttavia, anche dai ceppi può ricrescere un vero albero se c’è abbastanza tempo e condizioni favorevoli.</p>

      <p>Sull’isola di Veliki Brijun, l’altezza media del leccio è di 10–15 metri, con diametro del tronco di 20–30 cm (misurato a 1,3 m). Rispetto ad altre specie, il leccio è una delle piante dominanti.</p>

      <p>Il leccio può vivere oltre mille anni: simbolo di resistenza e longevità del paesaggio mediterraneo.</p>

      <!-- Fonte (HR): Stručni priručnik, str. 57–58 -->
    `,
    riddleTitle: "🔍 Indovinello",
    riddleText: `
      Per arrivare da me passi vicino a un luogo dove gli uccelli hanno bisogno di pace,<br>
      dietro una recinzione che dice: non entrare.<br>
      Il sentiero conduce a una baia quieta e poco profonda,<br>
      nascosta dalla fretta e dal rumore.<br>
      A sinistra c’è una penisola verde,<br>
      che porta il nome di una pianta.<br>
      In quel silenzio Misho cerca un’amica<br>
      nell’erba che cresce sotto il mare.
    `,
    hintBtn: "Ho bisogno di un aiuto",
    hint: "🌿 Il leccio è parente dell’ulivo.",
    mapBtn: "Non so davvero dove andare — mi serve una mappa",
    mapLoading: "⏳ Caricamento mappa...",
    mapOpened: "Mappa aperta ✓",
    mapLocation: "Baia Javorika",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5232.053619144725!2d13.758170387195271!3d44.908075298794266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060245298!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },

  de: {
    title: "Misho und die Vermissten",
    location: `<p>📍 Steineiche auf der Halbinsel Peneda</p>
      <img src="images/Crnika.png" alt="Bild der Steineiche" class="hero-image">`,
    story: `
      <p>Misho flog zu einer großen, einsamen Steineiche und landete auf einem kräftigen Ast. Die Krone breitete sich wie ein grüner Schirm aus, und der Stamm wirkte breit und stark.</p>
      <p>„Wie alt bist du?“ flüsterte er.</p>

      <p>Diese Steineiche steht hier seit Jahrzehnten — vielleicht sogar seit Jahrhunderten. Ihre Blätter bleiben das ganze Jahr über grün, selbst wenn andere Bäume kahl werden. Im Herbst fallen Eicheln, die vielen Tieren Nahrung geben.</p>

      <p>Früher waren Steineichenwälder hoch und dicht. Doch durch starke Nutzung wurden viele Bäume gefällt. Aus den Stümpfen trieben neue Schösslinge aus, die oft niedriger und stärker verzweigt blieben. Statt hoher Wälder wächst an vielen Stellen heute Macchie. Die Natur versucht zurückzukehren — aber sie kann nicht immer wieder so werden wie früher. Sie braucht viel mehr Zeit zum Wiederaufbau, als ein Mensch zum Fällen braucht.</p>

      <p>Dann hing Misho kopfüber an dem Ast. Die Welt stand auf dem Kopf — doch der Baum blieb aufrecht: fest, still und geduldig.</p>

      <p>„Wenn wir große Wälder wollen“, dachte er, „müssen wir sie heute schützen — damit Kinder sie morgen hoch und stark sehen können. Vielleicht ist die Welt nur dann wirklich verkehrt, wenn wir vergessen, die Natur zu bewahren.“</p>

      <p>Er schaukelte sanft, während die Krone über ihm eine Geschichte von Zeit, Geduld und Fürsorge flüsterte.</p>
    `,
    infoTitle: "Für alle, die mehr wissen möchten",
    infoText: `
      <p><strong>Die Steineiche</strong> (<i>Quercus ilex</i>) ist im gesamten Mittelmeerraum verbreitet. In Kroatien wächst sie in Istrien sowie entlang der Küste und auf den dalmatinischen Inseln. Sie ist immergrün: Sie trägt das ganze Jahr Blätter, erneuert diese aber ständig.</p>

      <p>Die Steineiche kann sich auf zwei Arten verjüngen: aus Samen (Eicheln) oder aus Stockausschlag.<br>
      Wächst ein Baum aus Samen, spricht man von einem Samenwald.<br>
      Wächst er nach dem Schnitt aus dem Stock, entsteht ein Niederwald (Koppe).</p>

      <p>Stockausschläge bleiben meist niedriger und bilden dichte Bestände, die als Macchie erscheinen. Dennoch kann auch aus dem Stock wieder ein richtiger Baum wachsen — wenn genug Zeit und gute Bedingungen vorhanden sind.</p>

      <p>Auf Veliki Brijun erreicht die Steineiche im Schnitt 10–15 m Höhe; der Stammdurchmesser liegt bei 20–30 cm (gemessen in 1,3 m Höhe). Im Vergleich zu anderen Waldarten ist sie eine dominierende Baumart der Insel.</p>

      <p>Steineichen können über tausend Jahre alt werden — ein Symbol für Widerstandskraft und Langlebigkeit mediterraner Landschaften.</p>

      <!-- Quelle (HR): Stručni priručnik, str. 57–58 -->
    `,
    riddleTitle: "🔍 Rätsel",
    riddleText: `
      Zu mir gelangst du an einem Ort vorbei, an dem Vögel Ruhe brauchen,<br>
      hinter einem Zaun, der sagt: nicht hinein.<br>
      Ein Weg führt dich zu einer stillen, flachen Bucht,<br>
      verborgen vor Eile und Lärm.<br>
      Links steht eine grüne Halbinsel,<br>
      nach einer Pflanze benannt.<br>
      In dieser Stille sucht Misho eine Freundin<br>
      im Gras, das unter dem Meer wächst.
    `,
    hintBtn: "Ich brauche einen Hinweis",
    hint: "🌿 Die Steineiche ist mit dem Olivenbaum verwandt.",
    mapBtn: "Ich weiß wirklich nicht wohin — ich brauche eine Karte",
    mapLoading: "⏳ Karte wird geladen...",
    mapOpened: "Karte geöffnet ✓",
    mapLocation: "Bucht Javorika",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5232.053619144725!2d13.758170387195271!3d44.908075298794266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060245298!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },
},

// ------------------------------------------------------------
// #7 UVALA JAVORIKA
// ------------------------------------------------------------
uvalaJavorika: {
  hr: {
      title: "Mišo i izgubljeni",
      location: `<p>📍 Uvala Javorika</p>
      <img src="images/Periska.png" alt="Slika plemenite periske" class="hero-image">`,
      story: `
        <p>Spuštam se nad more tihe uvale i tražim staru prijateljicu…</p>

        <p>Ispod mirne površine mora nekad su se prostirala raskošna zelena livada posidonije. U njima se skrivalo mnogo života – male ribe, školjke i druga morska bića.</p>

        <p>Danas su te livade manje i rjeđe. Lako se oštete kada ljudi plivaju iznad njih ili bacaju sidra u more. Sporo se oporavljaju, zato ih treba čuvati i ostaviti na miru, jer samo tako more može ponovno postati dom za sve koji u njemu žive.</p>

        <p>Ovdje je nekad živjela i moja prijateljica Pina, plemenita periska — visoka školjka koja je ponosno rasla među morskom travom. Tražim je, ali se nitko ne javlja. Ostale su samo prazne ljušture i tišina.</p>

        <p>More se polako mijenjalo — voda više nije bila jednako čista, a temperatura se mijenjala. Periske su oslabile i postale osjetljive. Kad je bolest stigla, nisu imale snage oduprijeti se.</p>

        <p>Mišo ostaje na trenutak u tišini, nadajući se da će se jednog dana Pina vratiti.</p>

        <p>Priroda pamti i, uz brigu i zaštitu, neki stanovnici se mogu ponovno vratiti. Zato tiho letim dalje, noseći sa sobom nadu da će periska jednog dana opet rasti u ovim livadama.</p>
      `,
      infoTitle: "Za one koji žele znati više",
      infoText: `
        <p>Uvala Javorika je važno mrjestilište riba i dom strogo zaštićenih vrsta. To je jedna od najstrože zaštićenih zona NP Brijuni. Ovdje su dopušteni samo znanstvena istraživanja i praćenje prirode.</p>

        <p><strong>Plemenita periska</strong> (<i>Pinna nobilis</i>) najveći je školjkaš Sredozemnog mora, već je dugo vremena ugrožena i zaštićena, ali je posljednjih godina gotovo nestala zbog smrtonosne bolesti. Danas se često vide samo prazne ljušture, koje mogu ostati uspravne i nakon uginuća.</p>

        <p><strong>Posidonija</strong> (<i>Posidonia oceanica</i>) je morska cvjetnica koja stvara podvodne livade pune života. Ovdje žive i skrivaju se mlade ribe i mnogi morski organizmi, među kojima su spužve, prstaci i nekad brojne plemenite periske. One su danas sve manje i rjeđe zbog ljudskih aktivnosti, posebno sidrenja i boravka kupača.</p>

        <p>Zato je mir ove uvale važan — samo tako se život može vratiti.</p>

        <!-- Izvori:
        https://www.np-brijuni.hr/hr/aktivnosti-parka/podrucja-na-velikom-brijunu-gdje-kupanje-nije-dozvoljeno
        https://www.np-brijuni.hr/hr/novosti/poziv-na-akciju-jeste-li-vidjeli-plemenitu-perisku
        https://www.np-brijuni.hr/hr/aktivnosti-parka/livade-pod-morem
        -->
      `,
      riddleTitle: "🔍 Zagonetka",
      riddleText: `<p><em>TODO: Smisliti zagonetku (Javorika → jeleni livada)</em></p>`,
      hintBtn: "Trebam pomoć",
      hint: `<em>TODO: Smisliti hint</em>`,
      mapBtn: "Stvarno ne znam gdje ići, treba mi mapa s lokacijom",
      mapLoading: "⏳ Učitavanje karte...",
      mapOpened: "Mapa otvorena ✓",
      mapLocation: "Sljedeća lokacija",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3491.785728567262!2d13.766869739263106!3d44.91122188872903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060281223!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

  en: {
    title: "Misho and the Lost Ones",
    location: `<p>📍 Javorika Bay</p>
      <img src="images/Periska.png" alt="Image of the noble pen shell" class="hero-image">`,
    story: `
      <p>I glide above the sea of a quiet bay, searching for an old friend…</p>

      <p>Below the calm surface, rich seagrass meadows of posidonia once spread wide. They sheltered life — small fish, shells, and many other sea creatures.</p>

      <p>Today those meadows are smaller and thinner. They can be damaged easily when people swim above them or drop anchors into the seabed. They recover slowly, so they must be protected and left in peace — because only then can the sea become a home again for all who live in it.</p>

      <p>My friend Pina once lived here too — the noble pen shell, a tall mollusk that proudly rose among the underwater grass. I look for her, but no one answers. Only empty shells and silence remain.</p>

      <p>The sea has been changing — the water was no longer the same, and temperatures shifted. Pen shells weakened and became sensitive. When disease arrived, they did not have the strength to resist.</p>

      <p>Misho stays quiet for a moment, hoping that one day Pina will return.</p>

      <p>Nature remembers — and with care and protection, some residents can come back. So I fly on, carrying hope that the pen shell will one day grow here again, among these meadows.</p>
    `,
    infoTitle: "For those who want to know more",
    infoText: `
      <p>Javorika Bay is an important fish spawning and nursery area and a home to strictly protected species. It is one of the most strictly protected zones of Brijuni National Park, where only scientific research and nature monitoring are allowed.</p>

      <p><strong>Noble pen shell</strong> (<i>Pinna nobilis</i>) is the largest bivalve in the Mediterranean. It has long been threatened and protected, but in recent years it has nearly disappeared due to a deadly disease. Today, people often see only empty shells, which can remain upright even after the animal dies.</p>

      <p><strong>Posidonia</strong> (<i>Posidonia oceanica</i>) is a flowering marine plant that forms underwater meadows full of life. Young fish hide here, along with many marine organisms — sponges, date mussels, and once numerous noble pen shells. These meadows are now smaller and rarer because of human activities, especially anchoring and heavy bathing.</p>

      <p>That is why the peace of this bay matters — only in calm can life return.</p>

      <!-- Sources (HR): NP Brijuni pages in your HR block -->
    `,
    riddleTitle: "🔍 Riddle",
    riddleText: `<p><em>TODO: Riddle (Javorika → deer meadow)</em></p>`,
    hintBtn: "I need a hint",
    hint: `<em>TODO</em>`,
    mapBtn: "I really don't know where to go — I need a map",
    mapLoading: "⏳ Loading map...",
    mapOpened: "Map opened ✓",
    mapLocation: "Next location",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3491.785728567262!2d13.766869739263106!3d44.91122188872903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060281223!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },

  it: {
    title: "Misho e gli scomparsi",
    location: `<p>📍 Baia Javorika</p>
      <img src="images/Periska.png" alt="Immagine della pinna nobile" class="hero-image">`,
    story: `
      <p>Scendo sopra il mare di una baia silenziosa, cercando un’amica di un tempo…</p>

      <p>Sotto la superficie calma, un tempo si estendevano ricche praterie di posidonia. Tra quei fili verdi si nascondeva tanta vita — piccoli pesci, conchiglie e molte altre creature marine.</p>

      <p>Oggi quelle praterie sono più piccole e più rade. Si danneggiano facilmente quando le persone nuotano sopra di esse o gettano ancore sul fondale. Si riprendono lentamente: per questo vanno protette e lasciate in pace, perché solo così il mare può tornare a essere casa per chi lo abita.</p>

      <p>Qui viveva anche la mia amica Pina, la pinna nobile — un grande mollusco che cresceva fiera tra l’erba marina. La cerco, ma nessuno risponde. Restano solo conchiglie vuote e silenzio.</p>

      <p>Il mare è cambiato lentamente: l’acqua non era più la stessa, le temperature si sono spostate. Le pinne si sono indebolite e sono diventate più vulnerabili. Quando è arrivata la malattia, non hanno avuto la forza di resistere.</p>

      <p>Misho resta un attimo in silenzio, sperando che un giorno Pina torni.</p>

      <p>La natura ricorda — e con cura e protezione, alcuni abitanti possono tornare. Così volo oltre, portando con me la speranza che un giorno la pinna nobile ricresca qui, tra queste praterie.</p>
    `,
    infoTitle: "Per chi vuole saperne di più",
    infoText: `
      <p>La baia di Javorika è un’importante area di riproduzione e crescita per i pesci e ospita specie rigorosamente protette. È una delle zone più strettamente protette del Parco Nazionale di Brioni: qui sono consentiti solo ricerca scientifica e monitoraggio della natura.</p>

      <p><strong>Pinna nobile</strong> (<i>Pinna nobilis</i>) è il più grande bivalve del Mediterraneo. È da tempo minacciata e protetta, ma negli ultimi anni è quasi scomparsa a causa di una malattia letale. Spesso si vedono solo conchiglie vuote, che possono restare dritte anche dopo la morte dell’animale.</p>

      <p><strong>Posidonia</strong> (<i>Posidonia oceanica</i>) è una pianta marina fiorita che forma praterie sottomarine ricchissime di vita. Qui si nascondono i giovani pesci e molti organismi marini — spugne, datteri di mare, e un tempo numerose pinne nobili. Oggi le praterie sono più piccole e rare per attività umane, soprattutto ancoraggi e intensa presenza di bagnanti.</p>

      <p>Per questo la tranquillità di questa baia è fondamentale: solo così la vita può tornare.</p>
    `,
    riddleTitle: "🔍 Indovinello",
    riddleText: `<p><em>TODO: Indovinello (Javorika → prato dei cervi)</em></p>`,
    hintBtn: "Ho bisogno di un aiuto",
    hint: `<em>TODO</em>`,
    mapBtn: "Non so davvero dove andare — mi serve una mappa",
    mapLoading: "⏳ Caricamento mappa...",
    mapOpened: "Mappa aperta ✓",
    mapLocation: "Prossima tappa",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3491.785728567262!2d13.766869739263106!3d44.91122188872903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060281223!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },

  de: {
    title: "Misho und die Vermissten",
    location: `<p>📍 Bucht Javorika</p>
      <img src="images/Periska.png" alt="Bild der Edlen Steckmuschel" class="hero-image">`,
    story: `
      <p>Ich gleite über das Meer einer stillen Bucht und suche eine alte Freundin…</p>

      <p>Unter der ruhigen Oberfläche breiteten sich früher üppige Posidonia-Seegraswiesen aus. In ihnen versteckte sich viel Leben — kleine Fische, Muscheln und viele andere Meeresbewohner.</p>

      <p>Heute sind diese Wiesen kleiner und lichter. Sie werden leicht beschädigt, wenn Menschen darüber schwimmen oder Anker in den Meeresboden werfen. Sie erholen sich nur langsam, deshalb müssen sie geschützt und in Ruhe gelassen werden — denn nur so kann das Meer wieder Heimat für alle werden, die in ihm leben.</p>

      <p>Auch meine Freundin Pina lebte einst hier: die Edle Steckmuschel — eine große Muschel, die stolz zwischen dem Seegras stand. Ich suche sie, doch niemand antwortet. Übrig bleiben nur leere Schalen und Stille.</p>

      <p>Das Meer hat sich langsam verändert: Das Wasser war nicht mehr gleich, und die Temperaturen verschoben sich. Die Steckmuscheln wurden schwächer und empfindlicher. Als die Krankheit kam, hatten sie nicht genug Kraft, um zu widerstehen.</p>

      <p>Misho bleibt einen Moment still und hofft, dass Pina eines Tages zurückkehrt.</p>

      <p>Die Natur erinnert sich — und mit Pflege und Schutz können manche Bewohner zurückkehren. So fliege ich weiter und trage die Hoffnung mit mir, dass die Steckmuschel eines Tages wieder hier wachsen wird, zwischen diesen Wiesen.</p>
    `,
    infoTitle: "Für alle, die mehr wissen möchten",
    infoText: `
      <p>Die Bucht Javorika ist ein wichtiges Laich- und Aufwuchsgebiet für Fische und Heimat streng geschützter Arten. Sie gehört zu den am stärksten geschützten Zonen des Nationalparks Brijuni, in denen nur Forschung und Naturbeobachtung erlaubt sind.</p>

      <p><strong>Edle Steckmuschel</strong> (<i>Pinna nobilis</i>) ist die größte Muschel des Mittelmeers. Sie war schon lange bedroht und geschützt, ist aber in den letzten Jahren durch eine tödliche Krankheit fast verschwunden. Oft sieht man nur noch leere Schalen, die sogar nach dem Absterben aufrecht stehen können.</p>

      <p><strong>Posidonia</strong> (<i>Posidonia oceanica</i>) ist eine blühende Meerespflanze, die Unterwasserwiesen bildet — voller Leben. Hier verstecken sich Jungfische und viele andere Organismen; früher auch zahlreiche Edle Steckmuscheln. Heute sind diese Wiesen wegen menschlicher Einflüsse kleiner und seltener, besonders durch Ankern und starke Nutzung durch Badegäste.</p>

      <p>Darum ist die Ruhe dieser Bucht so wichtig — nur so kann Leben zurückkehren.</p>
    `,
    riddleTitle: "🔍 Rätsel",
    riddleText: `<p><em>TODO: Rätsel (Javorika → Hirschwiese)</em></p>`,
    hintBtn: "Ich brauche einen Hinweis",
    hint: `<em>TODO</em>`,
    mapBtn: "Ich weiß wirklich nicht wohin — ich brauche eine Karte",
    mapLoading: "⏳ Karte wird geladen...",
    mapOpened: "Karte geöffnet ✓",
    mapLocation: "Nächster Ort",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3491.785728567262!2d13.766869739263106!3d44.91122188872903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1771060281223!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },
},

// ------------------------------------------------------------
// #8 JELENI LIVADA
// ------------------------------------------------------------
jeleniLivada: {
  hr: {
      title: "Mišo i izgubljeni",
      location: `<p>📍 (livada s jelenima)</p>
      <img src="images/Jeleni.png" alt="Slika jelena lopatara" class="hero-image">`,
      story: `
        <p>Mišo je doletio do prostrane livade na kojoj su pasli jeleni. Na sredini je stajao snažan mužjak sa širokim rogovima koji su se širili poput pravih lopata.</p>
        <p>„To je moj prijatelj Luka Lopatko“, pomislio je Mišo. „Jelen lopatar.“</p>

        <p>Luka je stajao mirno i ponosno, s rogovima širokim i plosnatim poput lopate. Njegovo svijetlo krzno bilo je prošarano bijelim pjegama, a držao se samouvjereno na otvorenoj livadi.</p>

        <p>Malo dalje, uz rub, stajao je drugi jelen — vitkiji i toplije, crvenkaste boje.</p>
        <p>„A poznajem ga, to je Lukin rođak Arun Aksis.“</p>

        <p>Arunovi rogovi nisu bili široki poput Lukinih. Bili su uži i razgranati u tri šiljka sa svake strane. Dok je Luka stajao na sredini livade, Arun je oprezno promatrao sa strane. Ako bi se lopatar uznemirio, Arun bi odmah krenuo za njim.</p>

        <p>Iz trave je tada izašla jedna nježna ženka.</p>
        <p>„Gle srne“, pomislio je Mišo.</p>
        <p>Ali odmah je zastao. Srne više ne žive na Brijunima.</p>

        <p>Ovo nije srna — ovo je košuta. Ženka jelena lopatara. A i ženka jelena aksisa također se zove košuta.</p>

        <p>„Srna je samo ženka srndaća“, prisjetio se Mišo. „Nije svaka ženka papkara srna.“</p>

        <p>Ovo nije srna — ovo je košuta, ženka jelena. Veća je i snažnije građe od srne. Srne su ženke njihovog rođaka srndaća, manje vrste jelena koja danas nije prisutna na otoku.</p>

        <p>Mišo se blago nasmiješio. Nisu sve ženke srne, a nisu ni svi jeleni isti. Kad pažljivo promatraš, razlike postanu jasne. I nastavio je dalje, zadovoljan što svakome zna pravo ime.</p>
      `,
      infoTitle: "Za one koji žele znati više",
      infoText: `
        <p>Krupna divljač — jelen lopatar (<i>Dama dama</i>), jelen aksis (<i>Axis axis</i>), muflon (<i>Ovis aries musimon</i>) i srna (<i>Capreolus capreolus</i>) — unesena je na Brijunsko otočje početkom 20. stoljeća zbog lova. Sve su se vrste, osim srne, zadržale na otoku do danas.</p>

        <p><strong>Jelen lopatar</strong> (<i>Dama dama</i>) najbrojnija je brijunska divljač. Lako je prepoznatljiv po širokim, lopatasto proširenim rogovima mužjaka, koji se razvijaju od treće godine života. Krzno mu je najčešće svjetlosmeđe s bijelim pjegama, a zimi postaje sivkasto.</p>

        <p>Lopatar nastanjuje starije listopadne i crnogorične šume te otvorene livade i poljoprivredna područja. Ujesen, od kraja rujna do početka prosinca, mužjaci stvaraju rikališta i glasnom rikom privlače košute. U tom razdoblju dolazi do odmjeravanja snaga i ponekad do borbi među mužjacima.</p>

        <p><strong>Jelen aksis</strong> (<i>Axis axis</i>) podrijetlom je iz Azije i prirodno živi u šumovitim područjima tropske klime. Na Brijunima se prilagodio blagoj mediteranskoj klimi. Vitkije je građe i crvenkastosmeđe boje s bijelim pjegama koje su vidljive tijekom cijele godine. Rogovlje mužjaka sastoji se od dvije glavne grane s po tri paroška (šesterac).</p>

        <p>Za razliku od lopatara, ciklus rasta rogovlja kod aksisa nije strogo vezan uz godišnje doba. Jednako tako, ni razdoblje parenja i donošenja mladunaca nije vremenski precizno određeno. Aksisi su plahiji i često koriste lopatare kao zaštitu na otvorenim livadama.</p>

        <p><strong>Važno je znati</strong><br>
        Ženke jelena — i lopatara i aksisa — zovu se košute.<br>
        Srna je ženka srndaća (<i>Capreolus capreolus</i>), manje vrste jelena koja danas ne živi na Brijunima.<br>
        Razlikovati vrste znači bolje razumjeti prirodu — a razumijevanje je prvi korak prema njezinu očuvanju.</p>

        <!-- Izvori:
        Stručni priručnik, str. 68, 69
        Šprem et al. (2008) https://hrcak.srce.hr/27174
        https://biologer.hr/hr/groups/20/species/2680
        https://biologer.hr/hr/groups/20/species/2676
        -->
      `,
      riddleTitle: "🔍 Zagonetka",
      riddleText: `
        Nisam more, a imam vodu,<br>
        nisam rijeka, a ipak živim.<br>
        Ljeti sam tiha i plitka,<br>
        zimi čuvam blato i san.<br>
        Oko mene su staze i mir,<br>
        a u meni se skriva mnogo života.<br>
        Gdje žabe glasno krekeću,<br>
        ptice se kriju u trstici,<br>
        a kornjače mirno upijaju sunce?
      `,
      hintBtn: "Trebam pomoć",
      hint: `Prođi grbavim putem gdje pinije stoje u dva jednaka reda. 🌲/ \\🌲 Kad taj zeleni hodnik završi, skreni desno. 👉🏽`,
      mapBtn: "Stvarno ne znam gdje ići, treba mi mapa s lokacijom",
      mapLoading: "⏳ Učitavanje karte...",
      mapOpened: "Mapa otvorena ✓",
      mapLocation: "Bara",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.353066363535!2d13.769282521538532!3d44.91453488712471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd100076ac979%3A0xa5351584a419e962!2sBara%20na%20Brijunima!5e1!3m2!1shr!2shr!4v1771060306964!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },

  en: {
    title: "Misho and the Lost Ones",
    location: `<p>📍 Deer meadow</p>
      <img src="images/Jeleni.png" alt="Image of a fallow deer" class="hero-image">`,
    story: `
      <p>Misho flew to a wide meadow where deer were grazing. In the middle stood a strong male with broad antlers shaped like real shovels.</p>
      <p>“That’s my friend Luka Lopatko,” Misho thought. “A fallow deer.”</p>

      <p>Luka stood calm and proud, his antlers wide and flat. His light coat was dotted with white spots, and he looked confident on the open grass.</p>

      <p>Farther away, near the edge, another deer waited — slimmer, with a warmer, reddish coat.</p>
      <p>“And I know him too: Luka’s cousin, Arun Axis.”</p>

      <p>Arun’s antlers were not broad like Luka’s. They were narrower, branching into three points on each side. While Luka stayed in the center, Arun watched carefully from the side. If the fallow deer moved, Arun would quickly follow.</p>

      <p>Then a gentle female stepped out of the grass.</p>
      <p>“A doe,” Misho thought — and then he stopped. Roe deer no longer live on Brijuni.</p>

      <p>This is not a roe deer. This is a doe — a female fallow deer. And the female axis deer is also called a doe.</p>

      <p>“A ‘roe doe’ is only the female of a roe deer,” Misho reminded himself. “Not every female hoofed animal is a roe deer.”</p>

      <p>Misho smiled softly. Not every female is a “roe doe,” and not every deer is the same. When you watch carefully, the differences become clear. And he moved on, happy that he could call each one by the right name.</p>
    `,
    infoTitle: "For those who want to know more",
    infoText: `
      <p>Large game — fallow deer (<i>Dama dama</i>), axis deer (<i>Axis axis</i>), mouflon (<i>Ovis aries musimon</i>) and roe deer (<i>Capreolus capreolus</i>) — were introduced to the Brijuni Islands in the early 20th century for hunting. All species except the roe deer have remained on the island to this day.</p>

      <p><strong>Fallow deer</strong> (<i>Dama dama</i>) is the most numerous deer on Brijuni. Males are easy to recognize by their wide, shovel-like antlers, which develop from the third year. Their coat is often light brown with white spots, turning more grayish in winter.</p>

      <p>Fallow deer live in older deciduous and conifer forests, as well as open meadows and agricultural areas. In autumn (late September to early December), males establish rutting stands and call loudly to attract does. In this period, males may test strength and sometimes fight.</p>

      <p><strong>Axis deer</strong> (<i>Axis axis</i>) originates from Asia and naturally lives in tropical woodland. On Brijuni it adapted well to the mild Mediterranean climate. It is slimmer, reddish-brown, with white spots visible all year. The antlers typically have three tines per side.</p>

      <p>Unlike fallow deer, axis antler growth is not strictly seasonal, and breeding and fawning are not tightly fixed to a single time of year. Axis deer are shyer and often use fallow deer as “cover” in open meadows.</p>

      <p><strong>Good to know</strong><br>
      Female deer (both fallow and axis) are does.<br>
      A roe doe is the female of a roe deer (<i>Capreolus capreolus</i>) — a smaller deer species no longer present on Brijuni.<br>
      Knowing species means understanding nature better — and understanding is the first step to protecting it.</p>

      <!-- Sources (HR): Stručni priručnik 68–69 + links in your HR block -->
    `,
    riddleTitle: "🔍 Riddle",
    riddleText: `
      I’m not the sea, yet I hold water,<br>
      I’m not a river, yet I live.<br>
      In summer I’m quiet and shallow,<br>
      in winter I keep mud and sleep.<br>
      Around me there are paths and peace,<br>
      and inside me hides a lot of life.<br>
      Where frogs call loudly,<br>
      birds hide in reeds,<br>
      and turtles soak up the sun?
    `,
    hintBtn: "I need a hint",
    hint: `Walk along the bumpy path where pines stand in two equal rows. 🌲/ \\🌲 When the green corridor ends, turn right. 👉🏽`,
    mapBtn: "I really don't know where to go — I need a map",
    mapLoading: "⏳ Loading map...",
    mapOpened: "Map opened ✓",
    mapLocation: "Pond",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.353066363535!2d13.769282521538532!3d44.91453488712471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd100076ac979%3A0xa5351584a419e962!2sBara%20na%20Brijunima!5e1!3m2!1shr!2shr!4v1771060306964!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },

  it: {
    title: "Misho e gli scomparsi",
    location: `<p>📍 Prato dei cervi</p>
      <img src="images/Jeleni.png" alt="Immagine del daino" class="hero-image">`,
    story: `
      <p>Misho volò fino a un grande prato dove pascolavano i cervi. Al centro stava un maschio forte con palchi larghi come vere pale.</p>
      <p>«Quello è il mio amico Luka Lopatko», pensò Misho. «Un daino.»</p>

      <p>Luka stava calmo e fiero, con palchi larghi e appiattiti. Il suo mantello chiaro era punteggiato di macchie bianche e, sul prato aperto, sembrava sicuro di sé.</p>

      <p>Poco più in là, vicino al bordo, c’era un altro cervide — più snello, di un colore più caldo e rossiccio.</p>
      <p>«E lo conosco: è Arun Axis, il cugino di Luka.»</p>

      <p>I palchi di Arun non erano larghi come quelli di Luka: erano più stretti e si dividevano in tre punte per lato. Mentre Luka restava al centro, Arun osservava con cautela dal margine. Se il daino si muoveva, Arun lo seguiva subito.</p>

      <p>Dall’erba uscì poi una femmina delicata.</p>
      <p>«Una capriola», pensò Misho — ma si fermò subito. A Brioni i caprioli non vivono più.</p>

      <p>Questa non è una capriola: è una femmina di daino. E anche la femmina del cervo axis si chiama allo stesso modo: una femmina.</p>

      <p>«La “capriola” è la femmina del capriolo», si ricordò Misho. «Non tutte le femmine degli ungulati sono capriole.»</p>

      <p>Misho sorrise piano. Non tutte sono capriole e non tutti i cervi sono uguali. Quando osservi bene, le differenze diventano chiare. E proseguì, felice di saper chiamare ciascuno con il nome giusto.</p>
    `,
    infoTitle: "Per chi vuole saperne di più",
    infoText: `
      <p>La grande selvaggina — daino (<i>Dama dama</i>), cervo axis (<i>Axis axis</i>), muflone (<i>Ovis aries musimon</i>) e capriolo (<i>Capreolus capreolus</i>) — è stata introdotta nell’arcipelago di Brioni all’inizio del XX secolo per la caccia. Tutte le specie, tranne il capriolo, sono rimaste sull’isola fino a oggi.</p>

      <p><strong>Daino</strong> (<i>Dama dama</i>) è il più numeroso. Il maschio si riconosce dai palchi larghi “a pala”, che si sviluppano dal terzo anno. Il mantello è spesso marrone chiaro con macchie bianche e in inverno diventa più grigiastro.</p>

      <p>Il daino vive in boschi maturi e in spazi aperti come prati e aree agricole. In autunno (da fine settembre a inizio dicembre) i maschi si radunano nei siti di bramito e chiamano forte per attirare le femmine; in questo periodo possono anche scontrarsi.</p>

      <p><strong>Cervo axis</strong> (<i>Axis axis</i>) proviene dall’Asia e vive naturalmente in aree boschive tropicali. A Brioni si è adattato al clima mediterraneo. È più snello, rossiccio, con macchie bianche visibili tutto l’anno; i palchi hanno in genere tre punte per lato.</p>

      <p>A differenza del daino, la crescita dei palchi nell’axis non è strettamente stagionale, e anche accoppiamento e nascite non sono fissati a un solo periodo. Gli axis sono più timidi e spesso usano i daini come “protezione” nei prati aperti.</p>

      <p><strong>Da ricordare</strong><br>
      Le femmine di cervidi (daino e axis) sono femmine (“dame”).<br>
      La capriola è la femmina del capriolo (<i>Capreolus capreolus</i>), specie che oggi non vive più a Brioni.<br>
      Saper distinguere le specie significa capire meglio la natura — e capire è il primo passo per proteggerla.</p>
    `,
    riddleTitle: "🔍 Indovinello",
    riddleText: `
      Non sono mare, ma ho acqua,<br>
      non sono fiume, eppure vivo.<br>
      D’estate sono quieta e poco profonda,<br>
      d’inverno custodisco fango e sonno.<br>
      Attorno a me ci sono sentieri e pace,<br>
      e dentro di me si nasconde tanta vita.<br>
      Dove le rane gracidano forte,<br>
      gli uccelli si nascondono tra le canne,<br>
      e le tartarughe prendono il sole?
    `,
    hintBtn: "Ho bisogno di un aiuto",
    hint: `Segui il sentiero sconnesso dove i pini stanno in due file uguali. 🌲/ \\🌲 Quando finisce il corridoio verde, gira a destra. 👉🏽`,
    mapBtn: "Non so davvero dove andare — mi serve una mappa",
    mapLoading: "⏳ Caricamento mappa...",
    mapOpened: "Mappa aperta ✓",
    mapLocation: "Bara",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.353066363535!2d13.769282521538532!3d44.91453488712471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd100076ac979%3A0xa5351584a419e962!2sBara%20na%20Brijunima!5e1!3m2!1shr!2shr!4v1771060306964!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },

  de: {
    title: "Misho und die Vermissten",
    location: `<p>📍 Hirschwiese</p>
      <img src="images/Jeleni.png" alt="Bild eines Damhirsches" class="hero-image">`,
    story: `
      <p>Misho flog zu einer weiten Wiese, auf der Hirsche grasten. In der Mitte stand ein kräftiger Hirsch mit breiten Geweihschaufeln.</p>
      <p>„Das ist mein Freund Luka Lopatko“, dachte Misho. „Ein Damhirsch.“</p>

      <p>Luka stand ruhig und stolz, sein Geweih breit und flach wie eine Schaufel. Sein helles Fell war mit weißen Punkten übersät, und auf der offenen Wiese wirkte er selbstsicher.</p>

      <p>Weiter hinten, am Rand, stand ein anderer Hirsch — schlanker, mit wärmerem, rötlichem Fell.</p>
      <p>„Den kenne ich auch: Aruns Axis, Lukas Verwandter.“</p>

      <p>Aruns Geweih war nicht so breit wie Lukas. Es war schmaler und verzweigte sich in drei Enden pro Seite. Während Luka in der Mitte blieb, beobachtete Arun vorsichtig vom Rand. Wenn der Damhirsch sich bewegte, folgte Arun sofort.</p>

      <p>Aus dem Gras trat dann eine zarte Hirschkuh hervor.</p>
      <p>„Ein Reh“, dachte Misho — und stoppte. Rehe leben auf Brijuni nicht mehr.</p>

      <p>Das ist kein Reh. Das ist eine Hirschkuh — die weibliche Damhirsch. Und auch das weibliche Axishirsch heißt Hirschkuh.</p>

      <p>„Eine Ricke ist nur das Weibchen des Rehs“, erinnerte sich Misho. „Nicht jedes weibliche Huftier ist ein Reh.“</p>

      <p>Misho lächelte. Nicht alle sind Rehe, und nicht alle Hirsche sind gleich. Wenn man genau hinsieht, werden die Unterschiede klar. Und er flog weiter — zufrieden, weil er jedem den richtigen Namen geben konnte.</p>
    `,
    infoTitle: "Für alle, die mehr wissen möchten",
    infoText: `
      <p>Großwild — Damhirsch (<i>Dama dama</i>), Axishirsch (<i>Axis axis</i>), Mufflon (<i>Ovis aries musimon</i>) und Reh (<i>Capreolus capreolus</i>) — wurde Anfang des 20. Jahrhunderts zu Jagdzwecken auf die Brijuni-Inseln gebracht. Alle Arten außer dem Reh sind bis heute geblieben.</p>

      <p><strong>Damhirsch</strong> (<i>Dama dama</i>) ist am häufigsten. Männchen erkennt man an den breiten, schaufelartigen Geweihen, die sich ab dem dritten Lebensjahr entwickeln. Das Fell ist meist hellbraun mit weißen Flecken und wird im Winter grauer.</p>

      <p>Damhirsche leben in älteren Laub- und Nadelwäldern sowie auf offenen Wiesen und in landwirtschaftlichen Bereichen. Im Herbst (Ende September bis Anfang Dezember) richten Männchen Brunftplätze ein und rufen laut, um Hirschkühe anzulocken; manchmal kommt es auch zu Kämpfen.</p>

      <p><strong>Axishirsch</strong> (<i>Axis axis</i>) stammt aus Asien und lebt natürlicherweise in tropischen Waldgebieten. Auf Brijuni hat er sich an das milde Mittelmeerklima angepasst. Er ist schlanker, rötlich-braun, mit weißen Punkten das ganze Jahr über; das Geweih hat typischerweise drei Enden pro Seite.</p>

      <p>Im Gegensatz zum Damhirsch ist der Geweihzyklus beim Axishirsch nicht strikt saisonal. Auch Paarung und Geburten sind nicht auf einen festen Zeitraum beschränkt. Axishirsche sind scheuer und nutzen Damhirsche oft als „Schutz“ auf offenen Wiesen.</p>

      <p><strong>Wichtig</strong><br>
      Weibliche Tiere von Dam- und Axishirsch heißen Hirschkuh.<br>
      Eine Ricke ist das Weibchen des Rehs (<i>Capreolus capreolus</i>), einer kleineren Hirschart, die heute auf Brijuni nicht mehr vorkommt.<br>
      Arten zu unterscheiden heißt, Natur besser zu verstehen — und Verstehen ist der erste Schritt zum Schutz.</p>
    `,
    riddleTitle: "🔍 Rätsel",
    riddleText: `
      Ich bin nicht das Meer, doch ich habe Wasser,<br>
      ich bin kein Fluss, und doch lebe ich.<br>
      Im Sommer bin ich still und flach,<br>
      im Winter bewahre ich Schlamm und Schlaf.<br>
      Um mich herum sind Wege und Ruhe,<br>
      und in mir verbirgt sich viel Leben.<br>
      Wo Frösche laut rufen,<br>
      Vögel sich im Schilf verstecken,<br>
      und Schildkröten die Sonne trinken?
    `,
    hintBtn: "Ich brauche einen Hinweis",
    hint: `Geh den holprigen Weg entlang, wo Pinien in zwei gleichen Reihen stehen. 🌲/ \\🌲 Wenn der grüne Korridor endet, rechts abbiegen. 👉🏽`,
    mapBtn: "Ich weiß wirklich nicht wohin — ich brauche eine Karte",
    mapLoading: "⏳ Karte wird geladen...",
    mapOpened: "Karte geöffnet ✓",
    mapLocation: "Bara",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.353066363535!2d13.769282521538532!3d44.91453488712471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd100076ac979%3A0xa5351584a419e962!2sBara%20na%20Brijunima!5e1!3m2!1shr!2shr!4v1771060306964!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },
},

// ------------------------------------------------------------
// #9 BARA
// ------------------------------------------------------------
bara: {
  hr: {
      title: "Mišo i izgubljeni",
      location: `<p>📍 Bara</p>
      <img src="images/Kornjaca_i_gambuzija.png" alt="Slika barske kornjače" class="hero-image">`,
      story: `
        <p>Mišo je stigao do mirne bare okružene trskom. Na kamenu se sunčala njegova prijateljica — barska kornjača. Bila je oprezna i tiha. Čim je začula šum, brzo je zaronila u vodu. Sunce joj daje snagu, pa ga rado upija na toplom kamenu. Put do ovdje nije pronašla sama — ljudi su je ovamo doveli. Ali ona se dobro snalazi, pripada ovom kraju i dio je njegove prirode.</p>

        <p>U plitkoj vodi Mišo je primijetio i malenu, brzu ribicu. To je gambuzija — došla je ovamo dobrom namjerom. Ljudi su je donijeli kako bi pojela ličinke komaraca i pomogla u borbi protiv malarije.</p>

        <p>Ali dogodilo se nešto drugo. Gambuzija jede mnogo više od ličinki — hrani se ribljom mlađi i jajima vodozemaca. Brzo se razmnožava i potiskuje domaće vrste.</p>

        <p>Tako je gost, koji je trebao pomoći, postao prijetnja ravnoteži bare.</p>

        <p>Mišo shvaća da i dobre namjere ponekad mogu imati neočekivane posljedice. Pozdravlja kornjaču i nastavlja dalje, razmišljajući kako je prirodu najbolje čuvati pažljivo i promišljeno.</p>
      `,
      infoTitle: "Za one koji žele znati više",
      infoText: `
        <p>Brijunska bara prirodna je depresija ispunjena oborinskom vodom. U ovom je području nekada bilo više bara u kojima su se razmnožavali komarci prijenosnici malarije (Anopheles).</p>

        <p>Prema preporuci dr. Kocha, krajem 19. stoljeća Paul Kupelwieser odlučuje isušiti gotovo sve bare kako bi se suzbila malarija. Samo je jedna bara ostavljena, a u nju je uvedena ribica gambuzija (<i>Gambusia holbrooki</i>), koja se hrani ličinkama komaraca. Ideja se pokazala neučinkovitom, a gambuzija je s vremenom postala invazivna vrsta. Danas je ta mala ribica široko rasprostranjena i poznata po izrazito agresivnom ponašanju. Jede sve, od ličinki komaraca do riblje mlađi i jaja vodozemaca te je ozbiljna prijetnja domaćim stanovnicima naših močvarica.</p>

        <p>U Titovo doba bara se ograđuje, unose se kornjače te se gradi nadstrešnica od kamena, trske i bambusa.</p>

        <p><strong>Barska kornjača</strong> (<i>Emys orbicularis</i>) je autohtona vrsta slatkovodnih kornjača u Hrvatskoj. Plašljiva je i pri najmanjoj prijetnji brzo zaranja i skriva se. Mlade su jedinke mesojedi, no s godinama postaju svejedi i hrane se vodenim biljkama, algama, kukcima, ribama, žabama te drugim sitnim životinjama.</p>

        <p>Budući da su hladnokrvne životinje, obožavaju sunce. Satima se sunčaju na kamenju i starim stablima iznad vode upijajući toplinu. S dolaskom hladnijih dana, povlače se u zimski san, te skrivene u blatu ili ispod lišća spavaju od kasne jeseni do ranoga proljeća. U proljeće se bude i brzo kreću u potragu za partnerom. Mužjaci tada dobivaju crvene oči i grickanjem pokazuju svoju zainteresiranost.</p>

        <p>Danas bara predstavlja vrijedno stanište brojnih biljnih i životinjskih vrsta te važno odmorište ptica močvarica i selica.</p>

        <!-- Izvori:
        Brijuni pocket guide - 15 Bara na Brijunima
        Bačić, Morana. Mediteranske močvare i lokve: Kapljice vode, kozmos života. Brijuni: JU NP Brijuni, 2025. (Brošura)
        -->
      `,
      riddleTitle: "🔍 Zagonetka",
      riddleText: `
        Na samom ulazu u luku stojim,<br>
        Moji su temelji u vodi,<br>
        a ispod mene su se nekad skrivali čamci.<br>
        Nekad je ovdje liječnik pomagao otočanima,<br>
        a danas se u meni otkrivaju priče o moru i kopnu,<br>
        o prošlosti, životinjama i vremenu.<br>
        Tko želi otkriti sve njihove tajne,<br>
        mora zakoračiti pod moj krov.<br>
        <p><strong>Gdje Mišo završava svoju potragu?</strong></p>
      `,
      hintBtn: "Trebam pomoć",
      hint: "Sjeti se dolazak s brodom, pogleda ulijevo krije odgovor ⛴️🏠",
      mapBtn: "Stvarno ne znam gdje ići, treba mi mapa s lokacijom",
      mapLoading: "⏳ Učitavanje karte...",
      mapOpened: "Mapa otvorena ✓",
      mapLocation: "Kuća za brodice",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.7949871954884!2d13.7700979083602!3d44.916455333873444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd1f18750e90d%3A0xffbfe03a96415f2c!2sKu%C4%87a%20za%20brodice%20-%20Boothaus!5e1!3m2!1shr!2shr!4v1771060338356!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `,
    },
  en: {
    title: "Misho and the Lost Ones",
    location: `<p>📍 Pond</p>
      <img src="images/Kornjaca_i_gambuzija.png" alt="Image of the European pond turtle" class="hero-image">`,
    story: `
      <p>Misho reached a calm pond surrounded by reeds. On a stone, his friend was basking — the European pond turtle. She was careful and quiet. At the slightest sound, she slipped quickly into the water. The sun gives her strength, so she gladly soaks it up on a warm rock. She did not find her way here on her own — people brought her. But she copes well, belongs to this region, and is part of its nature.</p>

      <p>In the shallow water, Misho noticed a tiny, quick fish. That is gambusia — it arrived with a good intention. People brought it to eat mosquito larvae and help fight malaria.</p>

      <p>But something else happened. Gambusia eats far more than larvae — it also feeds on fish fry and amphibian eggs. It multiplies fast and pushes out native species.</p>

      <p>So a guest meant to help became a threat to the pond’s balance.</p>

      <p>Misho learns that even good intentions can bring unexpected consequences. He greets the turtle and moves on, thinking how nature is best protected with care and thoughtfulness.</p>
    `,
    infoTitle: "For those who want to know more",
    infoText: `
      <p>The Brijuni Pond is a natural depression filled with rainwater. In the past, there were more ponds here where malaria-carrying mosquitoes (Anopheles) bred.</p>

      <p>Following Dr. Koch’s recommendations, in the late 19th century Paul Kupelwieser decided to drain almost all ponds to suppress malaria. Only one pond was left, and a small fish — gambusia (<i>Gambusia holbrooki</i>) — was introduced to eat mosquito larvae. The idea proved ineffective, and over time gambusia became invasive. Today this fish is widespread and known for very aggressive behavior. It eats everything — from mosquito larvae to fish fry and amphibian eggs — and is a serious threat to native wetland residents.</p>

      <p>In Tito’s time, the pond was fenced, turtles were introduced, and a shelter made of stone, reeds, and bamboo was built.</p>

      <p><strong>European pond turtle</strong> (<i>Emys orbicularis</i>) is a native freshwater turtle species in Croatia. It is shy and dives quickly at the slightest threat. Young individuals are carnivores, but with age they become omnivores, feeding on aquatic plants, algae, insects, fish, frogs, and other small animals.</p>

      <p>Because they are cold-blooded, turtles love the sun. They bask for hours on stones and old logs above the water, soaking up warmth. When colder days come, they enter winter dormancy, hidden in mud or under leaves, sleeping from late autumn to early spring. In spring they wake and quickly search for mates. Males then develop reddish eyes and show interest by gentle nibbling.</p>

      <p>Today the pond is a valuable habitat for many plants and animals and an important resting place for wetland birds and migrants.</p>

      <!-- Sources (HR): your HR block (Pocket guide + Bačić 2025 brochure) -->
    `,
    riddleTitle: "🔍 Riddle",
    riddleText: `
      At the very entrance to the harbor I stand,<br>
      my foundations are in the sea,<br>
      and boats once hid beneath me.<br>
      A doctor once helped islanders upstairs,<br>
      and today stories of sea and land are revealed inside me —<br>
      of the past, of animals, of time.<br>
      Whoever wants to uncover their secrets,<br>
      must step under my roof.<br>
      <p><strong>Where does Misho end his search?</strong></p>
    `,
    hintBtn: "I need a hint",
    hint: "Remember arriving by boat — a glance to the left holds the answer ⛴️🏠",
    mapBtn: "I really don't know where to go — I need a map",
    mapLoading: "⏳ Loading map...",
    mapOpened: "Map opened ✓",
    mapLocation: "Boat House",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.7949871954884!2d13.7700979083602!3d44.916455333873444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd1f18750e90d%3A0xffbfe03a96415f2c!2sKu%C4%87a%20za%20brodice%20-%20Boothaus!5e1!3m2!1shr!2shr!4v1771060338356!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },

  it: {
    title: "Misho e gli scomparsi",
    location: `<p>📍 La Bara</p>
      <img src="images/Kornjaca_i_gambuzija.png" alt="Immagine della tartaruga palustre europea" class="hero-image">`,
    story: `
      <p>Misho arrivò a una bara tranquilla circondata da canne. Su una pietra, al sole, c’era la sua amica — la tartaruga palustre europea. Era prudente e silenziosa: al minimo rumore scivolò subito in acqua. Il sole le dà energia, perciò ama scaldarsi su una pietra tiepida. Non è arrivata qui da sola — sono stati gli uomini a portarla. Ma se la cava bene, appartiene a questa regione ed è parte della sua natura.</p>

      <p>Nell’acqua bassa Misho notò anche un pesciolino veloce. È la gambusia — arrivata con una buona intenzione. Le persone l’hanno introdotta per mangiare le larve di zanzara e combattere la malaria.</p>

      <p>Ma è successo altro. La gambusia mangia molto più delle larve: si nutre anche di avannotti e uova di anfibi. Si riproduce rapidamente e mette in difficoltà le specie autoctone.</p>

      <p>Così un ospite che doveva aiutare è diventato una minaccia per l’equilibrio della bara.</p>

      <p>Misho capisce che anche le buone intenzioni possono avere conseguenze inattese. Saluta la tartaruga e prosegue, pensando che la natura si protegge meglio con attenzione e buon senso.</p>
    `,
    infoTitle: "Per chi vuole saperne di più",
    infoText: `
      <p>La Bara di Brioni è una depressione naturale riempita dall’acqua piovana. In passato qui c’erano più bare in cui si riproducevano zanzare portatrici di malaria (Anopheles).</p>

      <p>Seguendo le raccomandazioni del dott. Koch, alla fine del XIX secolo Paul Kupelwieser decise di prosciugare quasi tutte le bare per ridurre la malaria. Ne rimase solo una, nella quale venne introdotto il pesciolino gambusia (<i>Gambusia holbrooki</i>), che si nutre di larve di zanzara. L’idea si rivelò poco efficace e, col tempo, la gambusia divenne una specie invasiva. Oggi è diffusa e nota per il comportamento aggressivo: mangia di tutto, dalle larve agli avannotti e alle uova degli anfibi, rappresentando una seria minaccia per gli abitanti autoctoni delle zone umide.</p>

      <p>Ai tempi di Tito la bara venne recintata, furono introdotte tartarughe e costruita una tettoia con pietra, canne e bambù.</p>

      <p><strong>Tartaruga palustre europea</strong> (<i>Emys orbicularis</i>) è una specie autoctona in Croazia. È timida e al minimo pericolo si tuffa e si nasconde. I giovani sono carnivori, ma con l’età diventano onnivori e mangiano piante acquatiche, alghe, insetti, pesci, rane e altri piccoli animali.</p>

      <p>Essendo animali a sangue freddo, amano il sole. Restano per ore su pietre e tronchi sopra l’acqua per assorbire calore. Con l’arrivo del freddo entrano in letargo, nascosti nel fango o sotto le foglie, dalla tarda autunno alla prima primavera. In primavera si risvegliano e cercano subito un partner. I maschi possono avere occhi rossastri e mostrano interesse con piccoli morsi.</p>

      <p>Oggi la bara è un habitat prezioso per molte specie e un importante punto di sosta per gli uccelli delle zone umide e per i migratori.</p>
    `,
    riddleTitle: "🔍 Indovinello",
    riddleText: `
      Proprio all’ingresso del porto io sto,<br>
      le mie fondamenta sono nell’acqua,<br>
      e sotto di me un tempo si nascondevano le barche.<br>
      Un tempo al piano di sopra un medico aiutava gli isolani,<br>
      e oggi dentro di me si scoprono storie di mare e di terra,<br>
      di passato, di animali, di tempo.<br>
      Chi vuole conoscerne i segreti,<br>
      deve entrare sotto il mio tetto.<br>
      <p><strong>Dove finisce la ricerca di Misho?</strong></p>
    `,
    hintBtn: "Ho bisogno di un aiuto",
    hint: "Ricorda l’arrivo in barca: uno sguardo a sinistra nasconde la risposta ⛴️🏠",
    mapBtn: "Non so davvero dove andare — mi serve una mappa",
    mapLoading: "⏳ Caricamento mappa...",
    mapOpened: "Mappa aperta ✓",
    mapLocation: "Casa per le barche",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.7949871954884!2d13.7700979083602!3d44.916455333873444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd1f18750e90d%3A0xffbfe03a96415f2c!2sKu%C4%87a%20za%20brodice%20-%20Boothaus!5e1!3m2!1shr!2shr!4v1771060338356!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },

  de: {
    title: "Misho und die Vermissten",
    location: `<p>📍 Bara</p>
      <img src="images/Kornjaca_i_gambuzija.png" alt="Bild der Europäischen Sumpfschildkröte" class="hero-image">`,
    story: `
      <p>Misho kam an eine ruhige Bara, umgeben von Schilf. Auf einem Stein sonnte sich seine Freundin — die Europäische Sumpfschildkröte. Sie war vorsichtig und still: Beim kleinsten Geräusch tauchte sie schnell ins Wasser. Die Sonne gibt ihr Kraft, deshalb wärmt sie sich gern auf einem warmen Stein. Sie ist nicht von selbst hierher gekommen — Menschen haben sie hergebracht. Aber sie kommt gut zurecht, gehört zu dieser Region und ist Teil ihrer Natur.</p>

      <p>Im flachen Wasser bemerkte Misho auch einen winzigen, schnellen Fisch. Das ist die Gambusie — sie kam mit guter Absicht. Menschen setzten sie aus, damit sie Mückenlarven frisst und gegen Malaria hilft.</p>

      <p>Doch es kam anders. Die Gambusie frisst viel mehr als Larven: auch Fischbrut und Amphibieneier. Sie vermehrt sich schnell und verdrängt heimische Arten.</p>

      <p>So wurde ein Gast, der helfen sollte, zu einer Gefahr für das Gleichgewicht der Bara.</p>

      <p>Misho versteht, dass selbst gute Absichten unerwartete Folgen haben können. Er verabschiedet sich von der Schildkröte und fliegt weiter — und denkt darüber nach, wie man Natur am besten mit Sorgfalt und Bedacht schützt.</p>
    `,
    infoTitle: "Für alle, die mehr wissen möchten",
    infoText: `
      <p>Die Brijuni-Bara ist eine natürliche Senke, die sich mit Regenwasser füllt. Früher gab es hier mehrere Tümpel, in denen Malaria übertragende Mücken (Anopheles) brüteten.</p>

      <p>Nach Empfehlungen von Dr. Koch ließ Paul Kupelwieser Ende des 19. Jahrhunderts fast alle Tümpel trockenlegen, um Malaria zu bekämpfen. Ein Tümpel blieb erhalten und dort wurde die Gambusie (<i>Gambusia holbrooki</i>) eingesetzt, die Mückenlarven frisst. Das erwies sich als wenig wirksam; mit der Zeit wurde die Gambusie invasiv. Heute ist sie weit verbreitet und für aggressives Verhalten bekannt. Sie frisst alles — von Larven bis zu Fischbrut und Amphibieneiern — und ist eine ernsthafte Bedrohung für heimische Bewohner von Feuchtgebieten.</p>

      <p>Zu Titos Zeiten wurde die Bara eingezäunt, Schildkröten wurden eingesetzt und ein Unterstand aus Stein, Schilf und Bambus gebaut.</p>

      <p><strong>Europäische Sumpfschildkröte</strong> (<i>Emys orbicularis</i>) ist eine in Kroatien heimische Süßwasserschildkröte. Sie ist scheu und taucht bei Gefahr schnell ab. Jungtiere sind Fleischfresser, später werden sie Allesfresser und ernähren sich von Wasserpflanzen, Algen, Insekten, Fischen, Fröschen und anderen kleinen Tieren.</p>

      <p>Als wechselwarme Tiere lieben sie die Sonne. Stundenlang liegen sie auf Steinen und alten Stämmen über dem Wasser und nehmen Wärme auf. Bei Kälte halten sie Winterruhe, versteckt im Schlamm oder unter Laub, von Spätherbst bis Frühling. Im Frühling werden sie aktiv und suchen Partner; Männchen können dann rötliche Augen bekommen und zeigen Interesse durch sanftes Knabbern.</p>

      <p>Heute ist die Bara ein wertvoller Lebensraum für viele Arten und ein wichtiger Rastplatz für Sumpfvögel und Zugvögel.</p>
    `,
    riddleTitle: "🔍 Rätsel",
    riddleText: `
      Direkt am Hafeneingang stehe ich,<br>
      meine Fundamente liegen im Meer,<br>
      und unter mir versteckten sich einst Boote.<br>
      Früher half oben ein Arzt den Inselbewohnern,<br>
      und heute entdeckt man in mir Geschichten von Meer und Land,<br>
      von Vergangenheit, Tieren und Zeit.<br>
      Wer ihre Geheimnisse erfahren will,<br>
      muss unter mein Dach treten.<br>
      <p><strong>Wo endet Mishos Suche?</strong></p>
    `,
    hintBtn: "Ich brauche einen Hinweis",
    hint: "Denk an die Ankunft mit dem Boot — ein Blick nach links verrät die Antwort ⛴️🏠",
    mapBtn: "Ich weiß wirklich nicht wohin — ich brauche eine Karte",
    mapLoading: "⏳ Karte wird geladen...",
    mapOpened: "Karte geöffnet ✓",
    mapLocation: "Bootshaus",
    map: `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.7949871954884!2d13.7700979083602!3d44.916455333873444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd1f18750e90d%3A0xffbfe03a96415f2c!2sKu%C4%87a%20za%20brodice%20-%20Boothaus!5e1!3m2!1shr!2shr!4v1771060338356!5m2!1shr!2shr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
  },
},

// ------------------------------------------------------------
// #KRAJ KUĆA ZA BRODICE
// ------------------------------------------------------------

kucazabrodice: {
  hr: {
    title: "Mišo i izgubljeni",
    location:` <p>📍 Kuća za brodice</p> 
      <img src="images/Moruzgva_i_Rebras.png" alt="Slika crvene moruzgve" class="hero-image">`,
    story: `
      <p>Mišo je stigao do neobične kućice na samom ulazu u luku. Građevina izgleda kao da ne stoji posve na kopnu — njezini temelji spuštaju se ravno u more, a ispod nje su se nekoć sklanjali i vezali čamci. Nekada su ljudi dolazili na kat kako bi se liječili kod otočnog liječnika, a danas ovdje uče o prirodi i povijesti otoka.</p>
      
      <p>Znatiželjan, Mišo je doletio do prizemlja i lagano otvorio bijela vrata. Iza njih se osjetio miris mora i vlaga stijena koje zapljuskuju valovi. Približio se samoj vodi, ondje gdje more dodiruje kamen.</p>
      
      <p>U vodi je vidio mnogo rebraša, bjelkasto prozirnih poput mekanih balončića. Zbog njih Mišo nije mogao jasno vidjeti dno ni stijene ispod površine. Znao je da rebraši ne peku poput meduza, ali i da, kad ih ima mnogo, mogu pojesti velik dio planktona, ličinki i jajašaca riba te tako utjecati na život u moru.</p>
      
      <p>Podigao je pogled prema stijeni iznad vode. Tamo je ugledao nekoliko sjajnih crvenih kuglica čvrsto priljubljenih uz kamen. Među njima je bio i njegov prijatelj Žarko.</p> <p>More se povuklo i ostavilo ga izvan vode. Zatvoren u sebe, skupljen poput kapljice crvene smole, čekao je povratak plime. Kad more ponovno naraste i prekrije stijene, Žarko će otvoriti svoje lovke. Tada može loviti sitan plijen — ali i opeći neoprezne prste, jer na lovkama ima žarne stanice. Rebraši, premda ih se često zamijeni s meduzama, to ne mogu.</p>
      
      <p>Mišo je na trenutak utihnuo. More je bilo isto, ali više nije bilo jednako. Njegovi morski prijatelji sada svoj dom dijele s bezbrojnim strancima. Neki su stigli slučajno, neki ljudskom nepažnjom, a svi zajedno mijenjaju ravnotežu koju je more gradilo stoljećima.</p>
      `,
      
      infoTitle: "Za one koji žele znati više", 
      infoText: `
        <p>Na ulazu u luku Veliki Brijun nalazi se Kuća za brodice, izgrađena 1902. godine u secesijskom stilu. Nekada je na katu kuće živio otočni liječnik Otto Lenz, a danas je interpretacijsko-edukacijski centar Nacionalnog parka Brijuni. Stalni postav podijeljen u šest tematskih cjelina: Brijunski vremeplov, Brijunski arhipelag, Kopneni svijet, Podmorje, Ugroze i Svijest. Posjetitelji ondje mogu na interaktivan način upoznati prirodnu i kulturnu baštinu otočja.</p>
        
        <p>U prizemlju kuće, gdje su se nekada vezali čamci, more dopire do stijena. Ondje se mogu vidjeti crvene moruzgve (<i>Actinia equina</i>), pričvršćene za kamen u zoni plime i oseke.</p>
        
        <p>Moruzgva se hrani svime što može uloviti — sitnim rakovima, mekušcima i drugim morskim beskralježnjacima. Plijen hvata lovkama raspoređenima oko usnog otvora. Na lovkama se nalaze žarne stanice (nematociste) koje pri dodiru izbacuju otrov, paraliziraju plijen i omogućuju mu da ga privuče u središnji otvor.</p>
        
        <p>Ako je čovjek dodirne dok je pod vodom i s otvorenim lovkama, može izazvati bol i peckanje jer žarne stanice reagiraju obrambeno. Kada je izvan vode, moruzgva je skupljena i zatvorena, ali pod vodom otvara lovke i aktivno lovi.</p>
        
        <p>Rebraš <i>Mnemiopsis leidyi</i> je invazivna vrsta koje se lako može zamijeniti za meduzu, ali kako to nije žarnjak, ne može uzrokovati opekline. Izvorno stanište ove vrste je u umjerenim i suptropskim područjima uz atlantsku obalu Sjeverne i Južne Amerike. <i>M. leidyi</i> podnosi veliki raspon saliniteta, temperature i kakvoće vode. Nakon što je slučajno unesen u Crno more, Mnemiopsis se počeo širiti u susjedne vode i trenutačno je prisutan na Brijunima. On je predator koji jede plankton, rakove, ličinke mekušaca, jajašca i ribe, što negativno utječe na hranidbeni lanac.</p>
        
        <!-- Izvori: https://www.np-brijuni.hr/hr/istrazi-brijune/znamenitosti/kuca-za-brodice-1 Černi, Mirka; Buršić, Moira; Sprčić, Alena. Što bi trebali znati o klimatskim promjenama. (Brošura) https://animaldiversity.org/accounts/Actinia_equina/ -->  
        `,
      endTitle: "Kraj potrage",
      endText: `
      <p>Mišo zna da priroda može biti snažna, ali i krhka.<br>
      Nisu svi gosti loši — ali priroda pamti ravnotežu.</p>
      
      <p> Svima je najbolje doma. No i domovi životinja često su ugroženi — zbog sječe, onečišćenja, prekomjernog lova i nestanka staništa. Zato dom ne treba samo imati. Dom treba čuvati.</p>
      
      <p> Mišo je odlučio: želi pamtiti, učiti i pričati njihove priče — jer dom se čuva znanjem i brigom, prije nego što postane prekasno.</p>
      
      <p>Ti sada znaš razliku.<br>
      Hvala što si pomogao Miši i njegovim prijateljima čuvati Brijune.</p>
      ` 
      },

  en: {
    title: "Misho and the Lost Ones",
    location: `<p>📍 Boat House</p>
      <img src="images/Moruzgva_i_Rebras.png" alt="Image of the beadlet anemone" class="hero-image">`,
    story: `
      <p>Misho arrived at a curious little house at the very entrance to the harbor. It looks as if it doesn’t stand fully on land — its foundations drop straight into the sea, and boats once sheltered and tied up beneath it. Long ago, people went upstairs to see the island doctor; today, they come here to learn about nature and the island’s past.</p>

      <p>Curious, Misho fluttered down to the ground floor and gently pushed open the white door. Inside, he felt the scent of salt and the damp breath of rocks washed by waves. He moved closer to the water, where the sea touches stone.</p>

      <p>In the water he saw many comb jellies, pale and transparent like soft little balloons. Because of them he couldn’t clearly see the bottom or the rocks below the surface. He knew comb jellies don’t sting like jellyfish — but when they appear in great numbers, they can eat a large share of plankton, fish larvae, and eggs, and change life in the sea.</p>

      <p>He lifted his gaze to the rock above the waterline. There he spotted several glossy red beads pressed tightly to the stone. Among them was his friend Žarko.</p>

      <p>The sea had pulled back and left him out of the water. Closed in on himself, gathered like a drop of red resin, he waited for the tide to return. When the water rises and covers the rocks again, Žarko will open his tentacles. Then he can catch tiny prey — and sting careless fingers too, because his tentacles carry stinging cells. Comb jellies, though often mistaken for jellyfish, cannot do that.</p>

      <p>Misho fell silent for a moment. The sea was the same — and yet it was not. His sea friends now share their home with countless newcomers. Some arrived by accident, some through human carelessness, and together they shift a balance the sea built over centuries.</p>
    `,
    infoTitle: "For those who want to know more",
    infoText: `
      <p>At the entrance to Veliki Brijun harbor stands the Boat House, built in 1902 in Secession style. The island doctor Otto Lenz once lived upstairs; today it is an interpretation and education center of Brijuni National Park. The permanent exhibition is divided into six themes: Brijuni Time Machine, Brijuni Archipelago, The Land World, Underwater World, Threats, and Awareness.</p>

      <p>On the ground floor, where boats were once tied, the sea reaches the rocks. There you can see beadlet anemones (<i>Actinia equina</i>) attached to stone in the tidal zone.</p>

      <p>Anemones feed on whatever they can catch — small crustaceans, mollusks, and other invertebrates. They seize prey with tentacles around the mouth. The tentacles carry stinging cells (nematocysts) that release toxin on contact, paralyzing prey and pulling it inward.</p>

      <p>If a person touches an anemone underwater while the tentacles are open, it can cause pain and a burning sensation. Out of water, the anemone is closed and looks like a red bead; underwater it opens and actively feeds.</p>

      <p>The comb jelly <i>Mnemiopsis leidyi</i> is an invasive species often mistaken for a jellyfish. But it is not a stinging cnidarian and cannot cause burns. It originates from temperate and subtropical waters along the Atlantic coasts of North and South America. It tolerates a wide range of salinity, temperature, and water quality. After accidental introduction into the Black Sea, it spread into nearby waters and is now present around Brijuni. It is a predator that eats plankton, small crustaceans, mollusk larvae, fish eggs, and fish larvae, negatively affecting the food web.</p>
    `,
    endTitle: "The end of the search",
    endText: `
      <p>Misho knows nature can be strong — and fragile.<br>
      Not every guest is bad — but nature remembers balance.</p>

      <p>Everyone belongs best at home. Yet animals’ homes are often threatened — by cutting, pollution, overhunting, and the loss of habitats. So it is not enough to have a home. A home must be protected.</p>

      <p>Misho decided: he wants to remember, to learn, and to tell their stories — because we protect home with knowledge and care, before it becomes too late.</p>

      <p>Now you know the difference.<br>
      Thank you for helping Misho and his friends protect Brijuni.</p>
    `
  },

  it: {
    title: "Misho e gli scomparsi",
    location: `<p>📍 Casa per le barche</p>
      <img src="images/Moruzgva_i_Rebras.png" alt="Immagine dell’anemone rosso" class="hero-image">`,
    story: `
      <p>Misho arrivò a una piccola casa insolita proprio all’ingresso del porto. Sembra non poggiare del tutto sulla terra: le fondamenta scendono direttamente nel mare e, un tempo, sotto di essa si riparavano e si legavano le barche. Una volta la gente saliva al piano di sopra per farsi curare dal medico dell’isola; oggi qui si imparano la natura e la storia del luogo.</p>

      <p>Curioso, Misho volò al piano terra e aprì piano la porta bianca. Dentro sentì odore di sale e l’umidità delle rocce bagnate dalle onde. Si avvicinò all’acqua, dove il mare tocca la pietra.</p>

      <p>Nell’acqua vide molti ctenofori, biancastri e trasparenti come piccoli palloncini morbidi. A causa loro non riusciva a vedere bene il fondo. Sapeva che non pungono come le meduse, ma anche che, quando sono tantissimi, possono divorare gran parte del plancton, delle larve e delle uova di pesce, influenzando la vita del mare.</p>

      <p>Alzò lo sguardo verso la roccia sopra il livello dell’acqua. Lì vide alcune sfere rosso lucido, attaccate alla pietra. Tra loro c’era anche il suo amico Žarko.</p>

      <p>Il mare si era ritirato e lo aveva lasciato fuori dall’acqua. Chiuso su se stesso, raccolto come una goccia di resina rossa, aspettava il ritorno della marea. Quando l’acqua risalirà e coprirà di nuovo le rocce, Žarko aprirà i tentacoli. Allora potrà catturare piccole prede — e anche pungere dita distratte, perché sui tentacoli ha cellule urticanti. I ctenofori, anche se spesso confusi con le meduse, non possono farlo.</p>

      <p>Misho rimase in silenzio per un momento. Il mare era lo stesso — eppure non era più uguale. I suoi amici marini condividono ora la casa con innumerevoli nuovi arrivati. Alcuni sono giunti per caso, altri per disattenzione umana, e insieme spostano un equilibrio costruito in secoli.</p>
    `,
    infoTitle: "Per chi vuole saperne di più",
    infoText: `
      <p>All’ingresso del porto di Veliki Brijun si trova la Casa per le barche, costruita nel 1902 in stile Secessione. Un tempo al piano superiore viveva il medico dell’isola Otto Lenz; oggi è un centro interpretativo ed educativo del Parco Nazionale di Brioni. L’esposizione permanente è divisa in sei temi: Macchina del tempo di Brioni, Arcipelago di Brioni, Mondo terrestre, Mondo sottomarino, Minacce e Consapevolezza.</p>

      <p>Al piano terra, dove un tempo si legavano le barche, il mare arriva alle rocce. Qui si possono vedere gli anemoni rossi (<i>Actinia equina</i>) attaccati alla pietra nella zona di marea.</p>

      <p>Gli anemoni si nutrono di ciò che riescono a catturare: piccoli crostacei, molluschi e altri invertebrati. Afferra la preda con i tentacoli attorno alla bocca. Sui tentacoli ci sono cellule urticanti (nematocisti) che rilasciano tossina al contatto, paralizzano la preda e la portano verso l’apertura centrale.</p>

      <p>Se una persona tocca un anemone sott’acqua, con i tentacoli aperti, può provare dolore e bruciore. Fuori dall’acqua l’anemone è chiuso e sembra una “perla” rossa; sott’acqua si apre e caccia attivamente.</p>

      <p>Il ctenoforo <i>Mnemiopsis leidyi</i> è una specie invasiva spesso scambiata per una medusa, ma non essendo un cnidario non può causare ustioni. È originario delle coste atlantiche delle Americhe e tollera ampi intervalli di salinità, temperatura e qualità dell’acqua. Dopo l’introduzione accidentale nel Mar Nero si è diffuso nelle acque vicine ed è oggi presente anche a Brioni. Preda plancton, piccoli crostacei, larve di molluschi, uova e larve di pesce, con effetti negativi sulla catena alimentare.</p>
    `,
    endTitle: "Fine della ricerca",
    endText: `
      <p>Misho sa che la natura può essere forte, ma anche fragile.<br>
      Non tutti gli ospiti sono cattivi — ma la natura ricorda l’equilibrio.</p>

      <p>Tutti stanno meglio a casa propria. Eppure le case degli animali sono spesso minacciate: disboscamento, inquinamento, caccia eccessiva, perdita di habitat. Perciò non basta avere una casa: una casa va protetta.</p>

      <p>Misho ha deciso: vuole ricordare, imparare e raccontare le loro storie — perché la casa si protegge con conoscenza e cura, prima che sia troppo tardi.</p>

      <p>Ora anche tu conosci la differenza.<br>
      Grazie per aver aiutato Misho e i suoi amici a proteggere Brioni.</p>
    `
  },

  de: {
    title: "Misho und die Vermissten",
    location: `<p>📍 Bootshaus</p>
      <img src="images/Moruzgva_i_Rebras.png" alt="Bild der Roten Seeanemone" class="hero-image">`,
    story: `
      <p>Misho erreichte ein ungewöhnliches kleines Haus direkt am Hafeneingang. Es wirkt, als stünde es nicht ganz auf dem Land — seine Fundamente reichen direkt ins Meer, und darunter wurden früher Boote geschützt und festgemacht. Früher gingen Menschen in den oberen Stock, um sich beim Inselarzt behandeln zu lassen; heute lernen sie hier über Natur und Geschichte der Insel.</p>

      <p>Neugierig flog Misho ins Erdgeschoss und öffnete vorsichtig die weiße Tür. Dahinter lagen Salzgeruch und die feuchte Kühle von Felsen, die von Wellen umspült werden. Er näherte sich dem Wasser, dort wo das Meer den Stein berührt.</p>

      <p>Im Wasser sah er viele Rippenquallen, blass und durchsichtig wie weiche kleine Ballons. Wegen ihnen konnte er den Grund kaum erkennen. Er wusste: Rippenquallen brennen nicht wie Quallen — aber wenn sie in großer Zahl auftreten, können sie viel Plankton, Fischlarven und Eier fressen und so das Leben im Meer verändern.</p>

      <p>Er hob den Blick zur Felswand über der Wasserlinie. Dort entdeckte er mehrere glänzende rote Kügelchen, fest an den Stein gedrückt. Unter ihnen war auch sein Freund Žarko.</p>

      <p>Das Meer hatte sich zurückgezogen und ihn außerhalb des Wassers gelassen. Zusammengezogen wie ein Tropfen roter Harz wartete er auf die nächste Flut. Wenn das Wasser wieder steigt und die Felsen bedeckt, öffnet Žarko seine Tentakel. Dann kann er winzige Beute fangen — und auch unvorsichtige Finger brennen, denn seine Tentakel tragen Nesselkapseln. Rippenquallen, obwohl oft mit Quallen verwechselt, können das nicht.</p>

      <p>Misho wurde einen Moment still. Das Meer war dasselbe — und doch nicht mehr gleich. Seine Meeresfreunde teilen ihr Zuhause nun mit unzähligen Neuankömmlingen. Manche kamen zufällig, manche durch menschliche Unachtsamkeit — und gemeinsam verschieben sie ein Gleichgewicht, das das Meer über Jahrhunderte aufgebaut hat.</p>
    `,
    infoTitle: "Für alle, die mehr wissen möchten",
    infoText: `
      <p>Am Eingang des Hafens von Veliki Brijun steht das Bootshaus, gebaut 1902 im Jugendstil. Früher wohnte im Obergeschoss der Inselarzt Otto Lenz; heute ist es ein Interpretations- und Bildungszentrum des Nationalparks Brijuni. Die Dauerausstellung ist in sechs Themen gegliedert: Brijuni-Zeitmaschine, Brijuni-Archipel, Welt an Land, Unterwasserwelt, Bedrohungen und Bewusstsein.</p>

      <p>Im Erdgeschoss, wo früher Boote festgemacht wurden, reicht das Meer bis an die Felsen. Dort kann man die Rote Seeanemone (<i>Actinia equina</i>) sehen, die in der Gezeitenzone am Stein haftet.</p>

      <p>Seeanemonen fressen alles, was sie fangen können — kleine Krebstiere, Weichtiere und andere Wirbellose. Sie packen Beute mit Tentakeln rund um die Mundöffnung. In den Tentakeln sitzen Nesselkapseln (Nematocysten), die bei Berührung Gift abgeben, Beute lähmen und in die Öffnung ziehen.</p>

      <p>Wer eine Anemone unter Wasser mit geöffneten Tentakeln berührt, kann Schmerz und Brennen spüren. Außerhalb des Wassers ist sie geschlossen und wirkt wie eine rote Kugel; unter Wasser öffnet sie sich und jagt aktiv.</p>

      <p>Die Rippenqualle <i>Mnemiopsis leidyi</i> ist eine invasive Art, die leicht mit einer Qualle verwechselt wird, aber nicht brennen kann. Sie stammt von den Atlantikküsten Nord- und Südamerikas, toleriert große Schwankungen von Salzgehalt, Temperatur und Wasserqualität und ist heute auch bei Brijuni nachgewiesen. Sie frisst Plankton, kleine Krebstiere, Weichtierlarven, Fischeier und Fischlarven und beeinflusst damit die Nahrungskette.</p>
    `,
    endTitle: "Ende der Suche",
    endText: `
      <p>Misho weiß: Natur kann stark sein — und zerbrechlich.<br>
      Nicht jeder Gast ist schlecht — aber die Natur erinnert sich an Balance.</p>

      <p>Am besten ist es für alle zu Hause. Doch die Lebensräume der Tiere sind oft bedroht — durch Abholzung, Verschmutzung, Überjagung und den Verlust von Lebensräumen. Darum reicht es nicht, ein Zuhause zu haben. Ein Zuhause muss geschützt werden.</p>

      <p>Misho hat beschlossen: Er will sich erinnern, lernen und ihre Geschichten erzählen — denn wir schützen Zuhause mit Wissen und Fürsorge, bevor es zu spät ist.</p>

      <p>Jetzt kennst du den Unterschied.<br>
      Danke, dass du Misho und seinen Freunden geholfen hast, Brijuni zu schützen.</p>
    `
  }
},
};

window.ROUTE = ROUTE; 
window.LOCATIONS = LOCATION

