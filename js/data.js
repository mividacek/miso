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
        Hoćeš li mi pomoći pronaći tko još pripada Brijunima?</p> `,
      infoTitle: "Za one koji žele znati više",
      infoText: `Šišmiši se na Brijunima istražuju i prate od 2010. godine. Izoliranost ovog otočja i ograničenja koja nalažu pravila ponašanja u Nacionalnom parku učinili su Brijune izrazito pogodnim mjestom za život odnosno povremeno obitavanje različitih vrsta šišmiša. Mir i neometanje od ljudi, dovoljna količina hrane (noćnih kukaca) te širok izbor različitih staništa za dnevni odmor razlozi su zbog kojih se na ovom relativno malom području može susresti čak 18 različitih vrsta ovih korisnih i ugroženih životinjica. Sve su vrste šišmiša u Europi zaštićene međunarodnim konvencijama. Mnoge vrste koje obitavaju na Brijunima na popisu su ugroženih vrsta. Tijekom istraživanja 2014. godine utvrđeno je da su Brijuni lokacija važna za razmnožavanje vrste veliki večernjak (<i>Nyctalus lasiopterus</i>), koja je prije toga smatrana gotovo izumrlom za područje RH.`,
      //https://www.np-brijuni.hr/hr/brijuni/prirodna-bastina/otocna-fauna
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
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4721.586348162404!2d13.759664249657359!3d44.92232712443851!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1770045670226!5m2!1sen!2sus"
          width="600"
          height="450"
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
            <img src="images/Šišmiš_Mišo.png" alt="Image of the bat Misho" class="hero-image">`,
      story: `
        <p>I am Misho, a bat from Brijuni.<br>
        I've been living here for years, along with many other interesting creatures.<br>
        But tonight my friends are not coming...<br>
        I set out to look for them, but on the island I also encounter strange, unknown creatures.<br>
        Will you help me find who else belongs to Brijuni?</p>`,
      infoTitle: "For those who want to know more",
      infoText: "Bats have been researched and monitored on Brijuni since 2010. The isolation of this archipelago and the restrictions imposed by the rules of conduct in the National Park have made Brijuni an extremely suitable place for the life or occasional residence of various species of bats. Peace and freedom from human interference, a sufficient amount of food (nocturnal insects) and a wide variety of different habitats for daytime rest are the reasons why as many as 18 different species of these useful and endangered animals can be found in this relatively small area. All species of bats in Europe are protected by international conventions. Many species that live on Brijuni are on the list of endangered species. During research in 2014, it was determined that Brijuni is an important location for the reproduction of the large night bat (<i>Nyctalus lasiopterus</i>), which was previously considered almost extinct in the Republic of Croatia.",
      riddleTitle: "🔍 Riddle",
      riddleText: `
        I fly at night by the water, looking for my friends.<br>
        Where do young fish hide, and people never swim?<br>
        Separated from the sea, although they were once one.<br>
        It's not a lake, but it breathes peacefully.<br>
        The bridge divides, and the view from it leads further.<br>
        <p><strong>Where will Misho find friends?</strong></p>
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
          height="450"
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
                  <img src="images/Šišmiš_Mišo.png" alt="Image of the bat Misho" class="hero-image">`,
      story: `
        <p>Sono Mišo, un pipistrello di Brioni.<br>
        Vivo qui da anni, insieme a molte altre creature interessanti.<br>
        Ma stasera i miei amici non si trovano...<br>
        Sono partito alla loro ricerca, ma sull'isola incontro anche strane creature sconosciute.<br>
        Mi aiuteresti a scoprire chi altro appartiene a Brioni?</p>`,

      infoTitle: "Per chi vuole saperne di più",
      infoText: "I pipistrelli sono oggetto di studio e monitoraggio a Brioni dal 2010. L'isolamento di questo arcipelago e le restrizioni imposte dalle regole di comportamento del Parco Nazionale hanno reso Brioni un luogo estremamente adatto alla vita o alla residenza occasionale di diverse specie di pipistrelli. La pace e la libertà dall'interferenza umana, una quantità sufficiente di cibo (insetti notturni) e un'ampia varietà di habitat per il riposo diurno sono le ragioni per cui in quest'area relativamente piccola si possono trovare ben 18 specie diverse di questi animali utili e in via di estinzione. Tutte le specie di pipistrelli in Europa sono protette da convenzioni internazionali. Molte specie che vivono a Brioni sono nell'elenco delle specie in via di estinzione. Durante le ricerche del 2014, è stato stabilito che Brioni è un sito importante per la riproduzione del grande pipistrello notturno (<i>Nyctalus lasiopterus</i>), che in precedenza era considerato quasi estinto nella Repubblica di Croazia.",
  
      riddleTitle: "🔍 Indovinello",
      riddleText: `
        Volo di notte sopra l'acqua, alla ricerca dei miei amici.<br>
        Dove si nascondono i giovani pesci e la gente non nuota mai?<br>
        Separati dal mare, anche se un tempo erano un tutt'uno.<br>
        Non è un lago, ma respira pacificamente.<br>
        Il ponte lo divide e la vista da lì si estende oltre.<br>
        <p><strong>Dove troverà amici Misho?</strong></p>
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
          height="450"
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
                        <img src="images/Šišmiš_Mišo.png" alt="Bild der Fledermaus Misho" class="hero-image">`,
      story: `
        <p>Ich bin Mišo, eine Fledermaus von Brijuni.<br>
        Ich lebe schon seit Jahren hier, zusammen mit vielen anderen interessanten Geschöpfen.<br>
        Aber heute Abend kommen meine Freunde nicht...<br>
        Ich mache mich auf die Suche nach ihnen, doch auf der Insel begegne ich auch seltsamen, unbekannten Kreaturen.<br>
        Hilfst du mir herauszufinden, wer sonst noch zu Brijuni gehört?</p>`,

       infoTitle: "Für alle, die mehr wissen möchten",
       infoText: "Seit 2010 werden Fledermäuse auf Brijuni erforscht und beobachtet. Die Isolation dieses Archipels und die im Nationalpark geltenden Verhaltensregeln machen Brijuni zu einem äußerst geeigneten Lebensraum für verschiedene Fledermausarten. Ruhe und ungestörte Natur, ein ausreichendes Nahrungsangebot (nachtaktive Insekten) und eine große Vielfalt an Lebensräumen für die Tagesruhe sind die Gründe, warum auf diesem relativ kleinen Gebiet bis zu 18 verschiedene Arten dieser nützlichen und bedrohten Tiere vorkommen. Alle Fledermausarten Europas sind durch internationale Übereinkommen geschützt. Viele der auf Brijuni lebenden Arten stehen auf der Liste der gefährdeten Arten. Untersuchungen im Jahr 2014 ergaben, dass Brijuni ein wichtiger Brutplatz für die Große Nachtfledermaus (<i>Nyctalus lasiopterus</i>) ist, die in Kroatien zuvor als fast ausgestorben galt.",
  
      riddleTitle: "🔍 Rätsel",
      riddleText: `
        Nachts fliege ich übers Wasser und suche meine Freunde.<br>
        Wo verstecken sich die jungen Fische, und wo schwimmen die Menschen nie?<br>
        Vom Meer getrennt, obwohl sie einst eins waren.<br>
        Es ist kein See, doch er atmet friedlich.<br>
        Die Brücke teilt den Weg, und der Blick von ihr führt weiter.<br>
        <p><strong>Wo wird Misho Freunde finden?</strong></p>
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
          height="450"
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
              <p>Ovdje još od daleke prošlosti ribe rastu u zaklonu, ptice dolaze po hranu, a mi ovo područje štitimo.<br>
              No među ribama se skriva plavi rak – stranac koji je ovamo stigao iz toplijih krajeva.<br>
              Brzo se razmnožava, prilagođava i jede više nego što ribnjak može podnijeti.<br>
              Zbog njega domaći stanovnici imaju manje hrane i prostora.</p>

              <p>Mišo ovdje nije pronašao prijatelja.<br>
              Pronašao je prijetnju prirodnoj ravnoteži.</p>

              <p>Zato mora nastaviti potragu – jer pravi prijatelji pomažu, a ne uzimaju.</p>
        `,
      infoTitle: "Za one koji žele znati više",
      infoText: `Područje Ribnjaka (uvala Turanj, Val Torre) je jedno od područja najstrože zaštite na Velikom Brijunu, na tom području nalaze se ostaci zidova rimskih struktura koje je prvi puta uočio i zabilježio Anton Gnirs. Ovaj lokalitet još uvijek nije istražen, međutim pretpostavka je da se radi o rustičnoj vili vezanoj za ribnjak. Uvala Turanj u rimsko je doba bila plića za oko jedan metar, imala prirodni ribnjak kojega se moglo vrlo lako zatvoriti i koji je imao kontrolirani dotok svježe morske vode. Danas je važno stanište za ribu, zaklonjeno stanište za morske alge, ali i važno područje za ptice, npr. hranjenje vodomara. Na tom području i danas ima puno mlađi koja se tu hrani i odrasta da bi onda zaplivala u dublje more. Kako bi zaštitili povijest i ne uznemiravali ribu unutar tog područja kupanje je strogo zabranjeno.`,
      //https://www.np-brijuni.hr/hr/aktivnosti-parka/podrucja-na-velikom-brijunu-gdje-kupanje-nije-dozvoljeno
      
      riddleTitle: "🔍 Zagonetka",
      riddleText: 
        `<p>Nisam konj, iako mi sliče.<br>
        Tvrdoglav sam, kažu ljudi,<br>
        ali ja samo stojim čvrsto na svome.</p>

        <p>Ovi krajevi su moj dom,<br>
        nosio sam teret zemlje i ljudi.</p>

        <p>Ovdje se susreću svjetovi –<br>
        oni koji su došli<br
        i oni koji su oduvijek ostali.<p>

        <p><strong>Gdje Mišo može pronaći prijatelja?</strong><p>`,
      
      hintBtn: "Trebam pomoć",
      hint: "Ovdje živi i najveća stanovnica otoka 🐘",
      mapBtn: "Stvarno ne znam gdje ići, treba mi mapa s lokacijom",
      mapLoading: "⏳ Učitavanje karte...",
      mapOpened: "Mapa otvorena ✓",
      mapLocation: "Safari park",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2615.2983214472365!2d13.741531!3d44.924076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzI2LjciTiAxM8KwNDQnMjkuNSJF!5e1!3m2!1shr!2shr!4v1770211146667!5m2!1shr!2shr"
          width="600"
          height="450"
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
            <img src="images/Plavi_rak.png" alt="Picture of the blue crab" class="hero-image">`,
      story: `<p>Misho arrived at the Fishpond.</p>
      <p>Since ancient times, fish have grown in this sheltered area, birds have come to feed here, and we have protected it.<br>
      But among the fish is a blue crab, a stranger who arrived from warmer regions.<br>
      It reproduces and adapts quickly and eats more than the pond can handle, leaving the local inhabitants with less food and space. </p>

      <p>Misho has not found a friend here; he has found a threat to the natural balance.</p>

      <p>That is why he must continue his search – true friends help, they don't take.</p>
      `,

      infoTitle: "For those who want to know more",
      infoText: `The Fishpond area (Turanj Bay, Val Torre) is one of the most strictly protected areas on Veliki Brijuni, in this area there are remains of walls of Roman structures that were first noticed and recorded by Anton Gnirs. This site has not yet been explored, however, the assumption is that it is a rustic villa connected to the pond. Turanj Bay was shallower by about one meter in Roman times, had a natural pond that could be easily closed and which had a controlled inflow of fresh sea water. Today it is an important habitat for fish, a sheltered habitat for seaweed, but also an important area for birds, e.g. kingfishers feeding. There are still many young in this area that feed and grow there and then swim into the deeper sea. In order to protect history and not disturb the fish within this area, swimming is strictly prohibited.`,
      
      riddleTitle: "🔍 Riddle",
      riddleText: `
      <p>I am not a horse,<br>
      although I may look like one.<br>
      People say I am stubborn, but I just stand my ground.</p>

      <p>These fields are my home;<br>
      I have borne the weight of land and people.</p>

      <p>Here worlds meet – those who came<br>
      and those who have always belonged.</p>

      <p><strong>Where can Misho find a friend?</strong></p>`,
      hintBtn: "I need a hint",
      hint: "The island's largest inhabitant lives here too 🐘",
      mapBtn: "I really don't know where to go, I need a map with the location",
      mapLoading: "⏳ Loading map...",
      mapOpened: "Map opened ✓",
      mapLocation: "Safari park",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2615.2983214472365!2d13.741531!3d44.924076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzI2LjciTiAxM8KwNDQnMjkuNSJF!5e1!3m2!1shr!2shr!4v1770211146667!5m2!1shr!2shr"
          width="600"
          height="450"
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
            <img src="images/Plavi_rak.png" alt="Immagine del granchio blu" class="hero-image">`,
      story: `
        <p>Misho arrivò alla Peschiera.</p>
        <p>Sin dall'antichità, i pesci hanno prosperato in questo rifugio protetto, gli uccelli sono sopraggiunti per cibarsene e noi l'abbiamo preservata.<br>
        Ma tra i pesci c'è un granchio blu, uno straniero arrivato da regioni più calde.<br>
        Si riproduce e adatta rapidamente, divora più di quanto lo stagno possa sopportare, lasciando agli abitanti locali meno cibo e spazio.</p>

        <p>Misho non ha trovato un amico qui, ma una minaccia per l'equilibrio naturale.</p>  

        <p>Ecco perché deve continuare la sua ricerca: gli amici veri aiutano, non prendono.</p>`,
       
      infoTitle: "Per chi vuole saperne di più",
      infoText: `L'area di Ribnjak (baia di Turanj, Val Torre) è una delle aree più rigorosamente protette delle Brioni Maggiori; in quest'area si trovano resti di mura di strutture romane, notate e documentate per la prima volta da Anton Gnirs. Questo sito non è ancora stato esplorato, tuttavia si presume che si tratti di una villa rustica collegata allo stagno. In epoca romana, la baia di Turanj era meno profonda di circa un metro, aveva uno stagno naturale facilmente chiudibile e con un afflusso controllato di acqua dolce marina. Oggi è un habitat importante per i pesci e le alghe, ma anche un'area importante per gli uccelli, come ad esempio per il martin pescatore che lì si nutre. Ci sono ancora molti giovani in quest'area che si nutrono e crescono lì per poi nuotare verso le profondità marine. Per proteggere la storia e non disturbare i pesci in quest'area, la balneazione è severamente vietata.`,
       
      riddleTitle: "🔍 Indovinello",
      riddleText: `
        <p>Non sono un cavallo,<br>
        anche se potrei sembrarlo.<br>
        Dicono che sono testardo,<br> 
        ma io resto semplicemente fedele alle mie convinzioni.</p>

        <p>Questi campi sono la mia casa;<br>
        ho sopportato il peso della terra e delle persone.<p>

        <p>Qui si incontrano mondi diversi:<br> 
        quelli che sono arrivati<br> 
        e quelli che sono sempre appartenuti.</p>

        <p><strong>Dove troverà amici Misho?</strong></p>
      `,
      hintBtn: "Ho bisogno di un aiuto",
      hint: "Anche il più grande abitante dell'isola vive qui 🐘",
      mapBtn: "Non so davvero dove andare, ho bisogno di una mappa con la posizione",
      mapLoading: "⏳ Caricamento mappa...",
      mapOpened: "Mappa aperta ✓",
      mapLocation: "Parco safari",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2615.2983214472365!2d13.741531!3d44.924076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzI2LjciTiAxM8KwNDQnMjkuNSJF!5e1!3m2!1shr!2shr!4v1770211146667!5m2!1shr!2shr"
          width="600"
          height="450"
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
            <img src="images/Plavi_rak.png" alt="Bild der blauen Krabbe" class="hero-image">`,
      story: `
        <p>Misho kam am Fischteich an.</p>
        <p>Seit jeher wachsen in diesem geschützten Gebiet Fische heran, Vögel kommen hierher, um sich zu ernähren, und wir haben es geschützt.<br>
        Aber unter den Fischen befindet sich eine Blaue Krabbe, ein Fremder, der aus wärmeren Regionen hierher gekommen ist.<br>
        Sie vermehrt sich schnell, passt sich rasch an und frisst mehr, als der Teich verkraften kann, sodass den einheimischen Bewohnern weniger Nahrung und Platz zur Verfügung steht.</p>
  
        <p>Mišo hat hier keinen Freund gefunden, sondern eine Bedrohung für das natürliche Gleichgewicht.</p>

        <p>Deshalb muss er seine Suche fortsetzen – wahre Freunde helfen, sie nehmen nicht.</p>
      `,
      
       infoTitle: "Für alle, die mehr wissen möchten",
       infoText: `Das Gebiet um Ribnjak (Bucht Turanj, Val Torre) zählt zu den am strengsten geschützten Gebieten von Veliki Brijuni. Hier befinden sich Überreste römischer Mauern, die erstmals von Anton Gnirs entdeckt und dokumentiert wurden. Die Stätte ist noch nicht erforscht, man vermutet jedoch, dass es sich um eine rustikale Villa handelt, die mit dem Teich verbunden war. Die Bucht Turanj war in römischer Zeit etwa einen Meter flacher, besaß einen natürlichen Teich, der sich leicht abdichten ließ und durch den kontrolliert frisches Meerwasser zugeführt wurde. Heute ist sie ein wichtiger Lebensraum für Fische, ein geschützter Lebensraum für Algen und ein bedeutendes Jagdgebiet für Vögel, beispielsweise Eisvögel. Zahlreiche Jungfische halten sich hier auf, fressen und wachsen heran, bevor sie ins offene Meer abwandern. Um die Geschichte zu bewahren und die Fische nicht zu stören, ist das Baden in diesem Gebiet strengstens verboten.`,
      
      riddleTitle: "🔍 Rätsel",
      riddleText: `
      <p>Ich bin kein Pferd,<br>
      auch wenn ich vielleicht so aussehe.<br>
      Die Leute sagen, ich sei stur,<br>
      aber ich bleibe einfach standhaft.</p>

      <p>Diese Felder sind mein Zuhause;<br>
      ich habe die Last des Landes und der Menschen getragen.<br>

      <p>Hier treffen Welten aufeinander –<br>
      diejenigen, die gekommen sind,<br>
      und diejenigen, die schon immer hierher gehörten.</p>

Wo kann Mišo einen Freund finden?
`,
      hintBtn: "Ich brauche einen Hinweis",
      hint: "Der größte Bewohner der Insel lebt auch hier 🐘",
      mapBtn: "Ich weiß wirklich nicht, wohin ich gehen soll, ich brauche eine Karte mit dem Standort.",
      mapLoading: "⏳ Karte wird geladen...",
      mapOpened: "Karte geöffnet ✓",
      mapLocation: "Safari-Park",
      map: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2615.2983214472365!2d13.741531!3d44.924076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDU1JzI2LjciTiAxM8KwNDQnMjkuNSJF!5e1!3m2!1shr!2shr!4v1770211146667!5m2!1shr!2shr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `
    }
  }
};
















