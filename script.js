const { useState, useEffect } = React;

const heroPoppies = "assets/optimized/papaveri-hero.jpg";
const COLORS = {
  slate: "var(--slate)",
  mint: "var(--mint)",
  orange: "var(--orange)",
  cream: "var(--cream)",
  ink: "var(--ink)",
  muted: "var(--muted)",
  softMuted: "var(--soft-muted)",
  line: "var(--line)",
  body: "var(--body)"
};

function Thumb({ type, image, imagePosition, imageScale }) {
  if (image) {
    const scale = imageScale || 1;
    const pct = `${(100 / scale).toFixed(2)}%`;
    return (
      <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
        <img src={image} alt="" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: pct, height: pct, objectFit: "cover", objectPosition: imagePosition || "center center", display: "block" }} />
      </div>
    );
  }
  if (type === "diagnosi") {
    return (
      <svg viewBox="0 0 80 56" preserveAspectRatio="xMidYMid slice">
        <rect width="80" height="56" fill={COLORS.slate} />
        <rect x="4" y="10" width="72" height="2" fill={COLORS.cream} />
        <rect x="4" y="16" width="48" height="2" fill={COLORS.cream} />
        <rect x="4" y="22" width="64" height="2" fill={COLORS.cream} />
        <rect x="4" y="28" width="40" height="2" fill={COLORS.cream} />
        <rect x="4" y="40" width="20" height="6" fill={COLORS.orange} />
      </svg>
    );
  }

  if (type === "barba") {
    return (
      <svg viewBox="0 0 80 56" preserveAspectRatio="xMidYMid slice">
        <rect width="80" height="56" fill={COLORS.cream} />
        <circle cx="40" cy="26" r="14" fill={COLORS.mint} />
        <rect x="32" y="38" width="16" height="10" fill={COLORS.mint} />
        <rect x="30" y="14" width="20" height="2" fill={COLORS.orange} />
        <rect x="34" y="22" width="3" height="3" fill={COLORS.ink} />
        <rect x="43" y="22" width="3" height="3" fill={COLORS.ink} />
      </svg>
    );
  }

  if (type === "appunti") {
    return (
      <svg viewBox="0 0 80 56" preserveAspectRatio="xMidYMid slice">
        <rect width="80" height="56" fill={COLORS.cream} />
        <rect x="10" y="8" width="60" height="40" fill={COLORS.mint} stroke={COLORS.line} />
        {[14, 22, 30, 38].map((y, i) => (
          <React.Fragment key={y}>
            <rect x="14" y={y} width="3" height="3" fill={COLORS.ink} />
            <rect x="20" y={y} width={[40, 36, 30, 42][i]} height="2" fill={COLORS.ink} />
          </React.Fragment>
        ))}
      </svg>
    );
  }

  if (type === "macchina") {
    return (
      <svg viewBox="0 0 80 56" preserveAspectRatio="xMidYMid slice">
        <rect width="80" height="56" fill={COLORS.slate} />
        <rect x="20" y="12" width="40" height="30" fill={COLORS.cream} stroke={COLORS.muted} />
        <rect x="26" y="18" width="28" height="6" fill={COLORS.ink} />
        <circle cx="30" cy="34" r="2" fill={COLORS.orange} />
        <rect x="36" y="33" width="20" height="2" fill={COLORS.muted} />
        <line x1="40" y1="42" x2="40" y2="56" stroke={COLORS.muted} strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 80 56" preserveAspectRatio="xMidYMid slice">
      <rect width="80" height="56" fill={COLORS.slate} />
      <rect y="34" width="80" height="22" fill={COLORS.orange} />
      <rect y="48" width="80" height="8" fill={COLORS.mint} />
      <circle cx="14" cy="40" r="2.5" fill={COLORS.cream} />
      <circle cx="32" cy="44" r="2" fill={COLORS.cream} />
      <circle cx="52" cy="38" r="2.5" fill={COLORS.cream} />
      <circle cx="68" cy="46" r="2" fill={COLORS.cream} />
    </svg>
  );
}

const BLOG_POSTS = [
  {
    slug: "i-libri-che-non-ho-ancora-letto",
    date: "2026-06-05",
    title: "I libri che non ho ancora letto",
    excerpt: "Una lista infinita di libri da leggere come promemoria gentile di tutto quello che resta da scoprire.",
    tag: "mente",
    accent: "var(--cream)",
    thumb: "appunti",
    image: "assets/optimized/i-libri-che-non-ho-ancora-letto.svg",
    body: [
      "Ho una lista di libri da leggere che non finisce mai.",
      "Non perché non legga. Ma perché ogni volta che finisco un libro, ne aggiungo tre. È una matematica che non torna, e non ci tengo che torni.",
      "Sul comodino ho Shantaram. Ci sono 944 pagine. Lo guardo ogni sera prima di spegnere la luce, gli dico che è per domani, e spengo la luce.",
      "Domani non arriva mai, per Shantaram.",
      "Ho letto da qualche parte che Umberto Eco chiamava la sua biblioteca personale un'antibiblioteca: non un archivio di ciò che sai, ma un promemoria di ciò che non sai ancora. I libri non letti non sono un fallimento. Sono una forma di ottimismo.",
      "Mi è piaciuta quella cosa.",
      "Perché una lista lunga significa che ci aspetti qualcosa dal futuro. Significa che hai ancora voglia di essere sorpreso, cambiato, spostato da qualche parte che ancora non conosci. Significa che credi di avere tempo.",
      "La lista dei libri da leggere è, in fondo, un atto di fede.",
      "Io la mia ce l'ho. È lunga. Disordinata. Piena di titoli che non ricordo più perché li ho aggiunti.",
      "E ogni tanto la guardo, e mi sembra una cosa bella avere ancora così tanta roba da scoprire.",
      "Forse il libro migliore è sempre quello che non hai ancora aperto."
    ]
  },
  {
    slug: "la-serenita-non-e-un-pronto-soccorso",
    date: "2026-05-30",
    title: "La serenità non è un pronto soccorso",
    excerpt: "Quando sei in crisi trovi le risorse, ma la serenità non dovrebbe arrivare solo in emergenza.",
    tag: "mente",
    accent: "var(--mint)",
    thumb: "appunti",
    image: "assets/optimized/la-serenita-non-e-un-pronto-soccorso.jpg",
    body: [
      "C'è una cosa che ho imparato stando male: quando sei in crisi, trovi le risorse. Le cerchi, le scavi, le costruisci. Improvvisamente mediti, leggi, scrivi, respiri. Ti alleni a stare bene perché non hai altra scelta.",
      "Poi la tempesta passa.",
      "E smetti.",
      "Torni alla vita normale, quella in cui non hai bisogno di stare bene attivamente, perché stare bene sembra lo stato di default. Abbandoni la ricerca. Ti adagi. Ce la fai andare così.",
      "Ho pensato a lungo perché succede. E ho capito che trattiamo la serenità come un pronto soccorso: la chiami solo quando hai un'emergenza. Nel frattempo, aspetta seduta in sala d'attesa.",
      "Ma la mente non funziona così. Non è un sistema di emergenza. È un muscolo.",
      "E i muscoli si allenano tutti i giorni, anche, specialmente nei giorni in cui non hai un motivo urgente per farlo. Non perché qualcosa stia andando storto. Perché vuoi che qualcosa vada bene. Sempre. Non solo quando sei costretto.",
      "La leucemia mi ha insegnato questa cosa nel modo più rumoroso possibile. Ma non volevo che fosse l'unica maestra.",
      "Così ho smesso di aspettare la prossima tempesta per tornare a cercarmi.",
      "Quanto sono belli i giorni in cui non hai bisogno di coraggio, ma lo alleni lo stesso."
    ]
  },
  {
    slug: "sopravvissuto-rileggendo-la-scalata",
    date: "2026-05-20",
    title: "Sopravvissuto: rileggendo la scalata",
    excerpt: "Appunti su cosa significa rileggere la scalata dopo essere sopravvissuti.",
    tag: "dentro",
    accent: "var(--slate)",
    thumb: "papaveri",
    image: "assets/optimized/dallafinestradisegno.jpg",
    body: [
      "Qualche giorno fa ho ripreso in mano un file che non aprivo da un po'. Si chiama Sopravvissuto: La scalata. È un diario che ho tenuto durante i primi 47 giorni di ricovero in ospedale nell'estate del 2021, quando mi hanno diagnosticato una malattia che non avevo chiesto e che non avevo nessuna intenzione di accettare in silenzio.",
      "L'ho riletto tutto d'un fiato.",
      "La prima cosa che mi ha colpito è quanto fossi onesto con me stesso. Non nel senso buono e rassicurante, nel senso che non mi risparmiavo niente. Scrivevo di notte, con il telefono in mano mentre il compagno di stanza russava, e tiravo fuori tutto: la rabbia, la noia, la paura, i momenti in cui avrei voluto spegnere tutto.",
      "Non è il diario di un eroe. È il diario di uno che cercava di non annegare e appuntava ogni cosa per non perdere il filo.",
      "Una delle prime cose che ho scritto è che volevo dare un nome alla malattia. L'ho chiamata Lia. Non so bene perché, forse perché dare un nome a qualcosa lo rende meno informe, meno enorme. Lo rende qualcosa con cui puoi parlare, o almeno qualcosa che puoi fissare negli occhi.",
      "Rileggendo, mi rendo conto che quella mossa strana, nominare il nemico, era già un modo per prendere il controllo di quello che non potevo controllare. Non la malattia in sé. Ma il rapporto che avevo con lei.",
      "La parola che torna di più nel diario non è \"coraggio\" né \"speranza\". È noia.",
      "La strada è lunga e aggiungerei noiosa. L'ho scritto così, quasi di passaggio, il mattino in cui iniziava la chemioterapia. E rileggendo adesso quella parola mi sembra la più vera di tutte. Perché tutti si aspettano che chi affronta una cosa del genere viva in uno stato di tensione permanente, di lotta epica contro il tempo. In realtà stai soprattutto ad aspettare. Aspetti le visite, aspetti i risultati, aspetti che passi la nausea, aspetti che arrivi qualcuno. E nel mezzo c'è una noia che ti pesa addosso come qualcosa di fisico.",
      "Avrei potuto non scriverlo. Avrei potuto tenere solo le parti \"presentabili\". Ma era la verità, e la verità mi teneva in piedi.",
      "C'è una frase che mi ha insegnato Lorenzo, il mio compagno di stanza, un uomo che era già più avanti di me nel percorso di cura e che osservavo come si osserva qualcuno che ha già attraversato il posto dove stai per andare tu. La frase era semplice:",
      "è passato un altro giorno.",
      "Non \"ce l'ho fatta\", non \"sono più forte\". Solo: è passato un altro giorno. All'inizio mi sembrava quasi nichilista. Col tempo ho capito che era l'unica unità di misura che aveva senso usare lì dentro.",
      "Rileggere questo diario non è stato nostalgico. È stato strano, come guardare una versione di te stesso che riconosci ma che non sei più del tutto. Quella persona stava imparando, in tempo reale e senza manuale, come si sta dentro una cosa enorme senza farsi divorare.",
      "Alcune cose le ho capite solo adesso, a distanza. Come il fatto che tenere su il morale non è uno stato d'animo, è un lavoro. Un lavoro continuo, che richiede sforzo e attenzione, e che come tutti i lavori migliora con la pratica.",
      "O come il fatto che la rassegnazione, quella vera, non è arrendersi. È capire dove finisce il tuo controllo e smettere di sprecare energia a spingersi oltre quel confine. Non è debolezza, è precisione.",
      "Ho deciso di pubblicare queste pagine perché penso che possano essere utili. Non come manuale, non come storia di redenzione. Ma come documento onesto di com'è stare dentro una cosa difficile senza edulcorarla.",
      "Se stai attraversando qualcosa di simile, o se conosci qualcuno che ci sta passando, forse troverai qualcosa che riconosci. Forse no. In ogni caso, era troppo reale per tenerlo solo per me.",
      "La scalata oggi non è ancora finita. Ma vale la pena raccontare com'erano e come sono i gradini, uno per uno."
    ]
  },
  {
    slug: "un-giorno-qualunque-parte-1",
    date: "2024-11-14",
    title: "Un giorno qualunque (Parte 1)",
    excerpt: "Quel sabato per me era un sabato qualunque, un giorno qualunque o così credevo.",
    tag: "dentro",
    accent: "var(--orange)",
    thumb: "papaveri",
    image: "assets/optimized/lancia.jpg",
    body: [
      "«Ricordate i poster con la frase “Oggi è il primo giorno del resto della tua vita”? È vero per tutti i giorni tranne uno: il giorno della tua morte!»",
      "Lester Burnham",
      "Quel sabato per me era un sabato qualunque, un giorno qualunque o così credevo, ero completamente ignaro che da lì a qualche ora, quel sabato sarebbe diventato il primo giorno del resto della mia vita.",
      "Era giugno, l'estate stava per cominciare e io non sono un grande fan dell'estate ma ero comunque pronto a prendere tutto ciò che aveva da offrirmi.",
      "La giornata era iniziata perfettamente. Sveglia presto ma non troppo, le mattine preferivo essere attivo anziché passarle a letto. Feci una buona colazione, una buona colazione per me consisteva nell'andare nel solito bar di fiducia e fare il tris: Bombolone con la crema, Cappuccino Bollente, Sigaretta.",
      "Lo standard, che vi aspettavate?",
      "Dopo la routine della colazione del sabato andai in fumetteria dove il titolare vestito quasi da Dragon Ball, dopo avermi offerto il caffè e una bella chiacchierata mi consegnò i numeri usciti in settimana: «Francesco! Ecco i tuoi fumetti» disse come ogni settimana!",
      "Prossima tappa era il centro commerciale, lungo giro, guardavo ogni vetrina, ogni negozio e mentalmente preparavo le prossime cose da fare all'interno di quel via vai di persone. Prima di fare la spesa mi fermavo sempre sullo stesso ristorante, si spendeva un po' di più ma era il più buono e salutare e io ci tenevo. Avevo fatto amicizia con cuochi e camerieri e nei piatti venivo coccolato fino al momento di pagare, salutare e tornare alle mie mansioni, spesa per tutta la settimana, rifornimento tabacco cartine e filtri e poi dritto a casa.",
      "Una volta tornato a casa era il momento del caffè.",
      "Preparare il caffè richiede il suo tempo, richiede calma perché per me è come un rituale. Tutto inizia dall'apertura del barattolo, mentre svito il tappo ogni pensiero scompare e avvicino lentamente il barattolo al naso per assaporarne l'aroma. Tutte le volte che lo faccio automaticamente nel viso mi si stampa un sorriso. Mentre preparavo la Moka i miei movimenti erano accompagnati dalla musica dei Creedence Clearwater Revival, mi sedetti sul divano e mi gustai la mia tazzina fumante di caffè e poco dopo mi rollai una sigaretta canticchiando Fortunate Son.",
      "Iniziai a controllare i manga che avevo acquistato il mattino e passai un'ora a leggere One Punch Man.",
      "Era ora di uscire e incontrarsi con la mia compagna, in quel periodo ancora non convivevamo, dopo un pomeriggio di passeggiate girando per negozi andammo a cena in un bellissimo pub all'aperto. I tavoli erano distanti tra loro quindi non ci si dava fastidio a vicenda, l'aria del mare risaliva e veniva a salutarci dato che era neanche a venti metri da noi. Ordinammo una porzione di Jalapeños fritti, due hamburger e due birre. Dopo cena passeggiata, sì, eravamo grandi passeggiatori.",
      "Ci ritrovammo seduti su una panchina a programmare le cose che avremmo voluto fare, dalle più fattibili alle più “mettiamo in programma”. Volevamo andare a Firenze, a Roma per poi uscire dall'Italia e andare a vedere la bellezza di Edimburgo fino ad arrivare alle mete più lontane e difficili: il Giappone e la Nuova Zelanda.",
      "La notte di quel tredici giugno mi svegliai alle due con un forte dolore alla schiena. Capii subito che non sarebbe bastato un oki per farmelo passare, la mia compagna non c'era, decisi di prendere la macchina e di andare al pronto soccorso.",
      "Urlavo dal dolore alla schiena, analisi del sangue, antidolorifico, ancora antidolorifico, più antidolorifico per favore, responso analisi: Leucemia."
    ]
  },
  {
    slug: "settantadue-ore-parte-2",
    date: "2024-11-23",
    title: "Settantadue ore (Parte 2)",
    excerpt: "Mi ritrovai ricoverato e tutto ciò che ricordo era l’infermiera che mi somministrava la morfina.",
    tag: "dentro",
    accent: "var(--orange)",
    thumb: "macchina",
    image: "assets/optimized/chemio.jpg",
    body: [
      "Settantadue ore.",
      "Io non sapevo nulla.",
      "Mi ritrovai ricoverato e tutto ciò che ricordo era l’infermiera che mi somministrava la morfina e io con gli occhi semichiusi sentivo dirmi: «...». Erano delle pillole rosse e nere almeno da quel che ricordo. Un giorno fui svegliato dalle infermiere che parlavano, io sentivo rumore, la dottoressa dava disposizioni, poi percepii quattro mani che mi afferravano e mi posizionavano lungo, a pancia in giù. Non sapevo neanche se tutto questo fosse reale, una fitta dietro la schiena mi risvegliò per un attimo dal torpore, il rumore si era trasformato in dolore, sentivo parlare ma non capivo una singola parola di quello che veniva detto.",
      "«Cosa state facendo alla mia schiena?»",
      "Giorni dopo capii che avevo fatto il mio primo prelievo aspirato del midollo e biopsia ossea.",
      "Con una siringa ti fanno l’anestesia, poi ti inseriscono un ago che arriva fino al midollo. Arriva la parte dove con uno strumento medico la dottoressa torna a bucarti ma questa volta è più uno scavare, arrivano fino all’osso e ne prelevano una piccola parte.",
      "Mi è stato detto che questo è stato il racconto delle prime settantadue ore, dove io la maggior parte le ho passate a dormire mentre la mia famiglia aspettava che passassero perché a detta dei medici avrei potuto non superarle.",
      "Dopo i tre giorni fui spostato e mi ritrovai in una stanza a due letti, ero confuso, spaesato, arrabbiato, mi sentivo intrappolato. Da solo in quella stanza cercavo solo di far passare il tempo ma non passava. “Il tempo è amico di chi lo rispetta” scrive Gianluca Gotto in “Profondo come il mare leggero come il cielo” ma io ancora non lo sapevo.",
      "Una mattina entrò il primario, mi disse che sarei dovuto restare in ospedale sei mesi. Alle parole sei mesi mi sentii demolito. La mia mente non poteva credere a quelle parole. Rinchiuso e gettato in una gabbia cercavo di capire, di venirne a capo. Ieri ero al lungomare a passeggiare e ora sono dentro una stanza d’ospedale con una malattia terribile.",
      "Le dottoresse man mano che i giorni passavano entravano nella mia stanza ogni giorno, la dottoressa che scoprì che ero malato di leucemia era il mio solo punto di riferimento fin quando non conobbi meglio il resto dello staff e infermiere e dottoresse riuscirono a farmi sentire meglio.",
      "Mi dissero che avrei dovuto fare chemioterapia e che appena mi sarebbe passato il riversamento nei polmoni sarei stato trasferito in una stanza bassa carica microbica (BCM).",
      "Elaborai e mi feci forza. Scoprii la potente “arma” della consapevolezza e accettai il tutto. Questa sarebbe stata la mia vita per un po’, tanto vale non remarle contro.",
      "Una delle dottoresse entrò nella mia stanza per dirmi che mi avrebbero affiancato un altro paziente ma io la presi male, ero convinto che da solo sarei stato più forte, invece grazie a L. lo scorrere del tempo era più piacevole.",
      "L. era più grande di me di cinque anni, si presentò sorridendo dicendomi che era al decimo giorno post chemio, gli avevano cambiato stanza, da lì a qualche giorno saremmo stati spostati entrambi sull’unica stanza BCM doppia. Ebbi tempo di parlare con lui, avevamo la stessa malattia, dovevamo fare esattamente le stesse cure, il protocollo di Roma lo chiamavano. Lo presi come esempio, mi faceva sentire meno solo.",
      "Nella stanza BCM doppia non si stava male, imparai ad apprezzare le piccole cose, quel trasferimento lo avevo preso come un evento positivo, potevo essere felice.",
      "Passavamo, le giornate a chiacchierare e a guardare la TV. Arrivò il giorno in cui dovevo iniziare la chemioterapia, mi domandavo «Proprio a me?». Erano cose che leggevi sul giornale, di sfuggita su internet e in TV, non avrei mai immaginato che un giorno sarebbe capitato proprio a me. L. era ormai un amico, un punto di forza, si parlava del più e del meno e di svariati argomenti, insieme affrontavamo la malattia, le cure, la nausea che fare la chemio comportava, il pessimo cibo dell’ospedale, il fatto che eravamo malati. Le chemioterapie mi diedero febbre oltre i trentotto, ogni giorno febbre, flebo, pillole, il senso del gusto se ne andò la febbre no. Non sono mai stato tollerante verso la febbre, basta poco sopra i trentasette per mettermi KO. Dopo tre settimane con la temperatura costante sopra i trentotto decisero di somministrarmi il cortisone. Finalmente avevo ore in cui potevo ascoltare la musica o leggere qualche libro. Il cortisone aveva i suoi effetti, febbre giù, effetto caffeina e tante, tante sudate.",
      "Erano ormai quasi cinquanta giorni che ero chiuso in BCM, dopo aver fatto il mio primo ciclo di chemioterapia i valori del sangue scendevano e il sistema immunitario veniva pesantemente abbassato. Avevo capito che dovevo aspettare circa tre settimane prima che i valori sarebbero tornati a un valore sufficiente per uscire un po’ dalla stanza e magari qualche giorno dopo tornare a casa per essere poi ricoverati di nuovo quando sarebbe stato il momento del secondo ciclo di chemio.",
      "Infatti, essendo dieci giorni avanti L. era tornato a casa, ero rimasto da solo con la febbre e il cortisone.",
      "Dopo circa cinquanta giorni implorai di poter tornare a casa anche io ma la febbre me lo impediva. Mi sentivo di nuovo imprigionato, la mia mente cambiò di nuovo il modo di approccio. Arrivò il primario insieme ad una dottoressa, nel mentre in quei cinquanta giorni avevo fatto altri prelievi del midollo ma stavolta ero sveglio e vigile, dai risultati di quei prelievi mi fu detto che il midollo non funzionava come avrebbe dovuto, per poi essere smentito il giorno dopo.",
      "Paura.",
      "Ci avevo capito poco ma ebbi paura della malattia per la prima volta, ingenuamente e da una parte fortunatamente avevo impostato un timer nel cervello, come se dopo sei mesi avrei scontato la pena e sarei potuto tornare alla mia vita normale.",
      "Dopo quattro giorni a casa, un ciambellone da mangiare e una pizza, dovevo già essere ricoverato di nuovo per fare il secondo ciclo di chemioterapia, tornai dentro la stanza doppia e dentro ci trovai L., ero molto felice di vederlo, mi sbrigai a mettere le mie cose nell’armadietto per tornare allo stato di ricoverato in ospedale, il secondo ricovero tornai armato di più passatempi che tra visite, controlli, L. che mi aggiornava sulla sua situazione, le ore scorrevano con me nella giornata fin quando la terapia mi riportò la febbre. L. vomitava e io avevo questa tortura della febbre e insieme facendoci forza e coraggio a vicenda di nuovo giorno dopo giorno affrontavamo tutto insieme.",
      "Eravamo arrivati ad agosto, controllavo il mio timer nel cervello di tanto in tanto.",
      "Un giorno L. fu portato in sala operatoria e tornò in stanza con un CVC al collo, un accesso a doppia via, un tubo fastidioso a detta di L. Qualche giorno dopo fu portato in un altro ospedale per la raccolta di cellule staminali, questo tubo serviva a questo e ad altre cose che la mia mente ha rimosso. Sapevo che da lì a qualche giorno mi sarebbe toccato lo stesso percorso. Finii in un altro ospedale per cinque ore attaccato ad una macchina che mi estraeva le cellule staminali che poi avrei reinfuso giorni dopo. Trapianto autologo.",
      "Così fu. L. come il ricovero precedente era tornato a casa prima di me, a settembre tornai a casa anche io per tre settimane. Pizza a volontà.",
      "Ad ottobre fui richiamato per il terzo ricovero, il timer nel mio cervello era quasi arrivato alla sua fine. Questa volta ero stato ricoverato prima io di L. e fui sistemato in una stanza BCM singola.",
      "Dopo qualche giorno, iniziai il terzo ciclo di chemio, ormai le infermiere e le dottoresse erano amiche, splendide persone che avevo vicine ogni giorno insieme alle costanti visite della mia compagna e della mia famiglia mi sentivo forte, pronto ad affrontare tutto come un toro in corsa. Così feci, chemio pre-trapianto e reinfusione di cellule staminali. Nel mentre L. era stato ricoverato in una stanza singola BCM anche lui. Ci tenevamo frequentemente in contatto, ci dissero che da lì a qualche giorno saremmo di nuovo tornati nella nostra stanza BCM doppia.",
      "Il trapianto autologo mi fece star male febbre e intestino impazziti, il purificatore sopra al letto mi sputava il getto d’aria fredda in faccia, mi sembrava di impazzire finché le cose non iniziarono a stabilizzarsi, tornai nella doppia insieme a L.; era novembre, sarei tornato a casa da lì a qualche giorno. Non mi sentivo più malato, nonostante il mio corpo dicesse il contrario, avevo perso la mia barba, i capelli erano già rasati e non c’era nulla che potesse cadere. Il mio corpo era privo di peluria, il mio colorito era cambiato il mio corpo era cambiato e da lì iniziai a fare i conti con i cambiamenti.",
      "Tornai a casa ad inizio novembre, prima di andarmene abbracciai forte L. con la promessa di andarci a mangiare qualcosa insieme non appena anche lui fosse uscito.",
      "Nonostante controlli, analisi del sangue e visite potevo pian piano tornare ad una vita quasi normale. La mia compagna si trasferì da me, imparai a vedere il lato positivo in ogni cosa, avevo la leucemia, mi aveva portato via tante cose ma aveva fatto venire la mia compagna a vivere con me, ero stanco ma contento e facevo i miei controlli, acquistai uno strumento musicale, suonavo, leggevo e giocavo con i videogiochi. Debole ma felice.",
      "L. poco dopo il mio ritorno a casa fu trasferito in un altro ospedale per altre cure. I mesi passavano e io pian piano recuperavo, L. da qualche giorno rispondeva ai miei messaggi sempre più di raro, arrivò febbraio, io stavo recuperando, L. morì."
    ]
  },
  {
    slug: "l-anno-piu-bello-della-mia-vita-parte-3",
    date: "2025-02-20",
    title: "L'anno più bello della mia vita (Parte 3)",
    excerpt: "Il 2022 era appena iniziato. Dopo Natale e Capodanno vivevo la mia vita insieme alla mia compagna.",
    tag: "dentro",
    accent: "var(--mint)",
    thumb: "papaveri",
    image: "assets/optimized/offagna.jpg",
    body: [
      "Il 2022 era appena iniziato. Dopo aver trascorso un Natale e un Capodanno sereni, vivevo la mia vita insieme alla mia compagna, che nel frattempo si era trasferita a casa mia. Suonavo i miei strumenti musicali, giocavo ai videogiochi, leggevo libri e, ovviamente, ascoltavo musica. Facevo regolarmente controlli e visite in ospedale: analisi del sangue a domicilio, visite settimanali e prelievi del midollo a cadenza mensile, che poi sarebbero diventati trimestrali. Pensavo solo a restare tranquillo. Onestamente, credo che senza di lei non ce l’avrei mai fatta ad affrontare la convalescenza.",
      "Uscivo poco. Tra il Covid che circolava e il freddo, mi rintanavo in casa, al caldo. Di tanto in tanto, nei giorni feriali e di prima mattina, andavamo a passeggiare al centro commerciale; se c’era il sole, ci limitavamo alla stradina sotto casa. Era meraviglioso sentire il calore della luce sul viso. Seguivo la dieta con tutte le restrizioni del caso: niente cibi crudi, verdure solo surgelate, quelle fresche avrei dovuto lavarle con l’Amuchina, col rischio di rovinarne il sapore. Mi nutrivo di pizza surgelata, Sofficini, minestroni pronti. Era limitante, ma non mi importava: ero felice di aver fatto il trapianto autologo e mi godevo la vita giorno per giorno. Avevo perso il senso del gusto per via di una pillola di mantenimento che dovevo prendere quotidianamente per tenere a bada la malattia che avevo sconfitto, ma nonostante questo tornai a giocare online con i miei amici e a comprare vestiti per prepararmi alla primavera e all’estate.",
      "Arrivò la primavera. Le passeggiate aumentavano, il mio corpo rispondeva e mi sentivo sempre meglio. I muscoli delle gambe si rigeneravano. Ero senza barba, cosa che mi pesava: l’ho sempre adorata e mi piaceva prendermene cura. Mi mancava, ma con pazienza aspettavo che ricrescesse. Il mio corpo era cambiato: niente peluria, unghie delle mani fragili e spezzate. Mi era difficile abituarmi a quelle trasformazioni. La parte migliore, però, doveva ancora arrivare.",
      "Maggio. Ero debole e spesso stanco, ma nel complesso stavo bene. Gli esami confermavano che il midollo funzionava e l’emocromo era buono. La mia compagna, Francesca, mi propose di andare qualche giorno a Firenze per svagarci un po’. Suo fratello si era offerto di regalarci il viaggio. L’idea di girare per la città e rivedere i miei amici toscani mi attirava, ma titubavo: non mi sentivo pronto. Alla fine, la determinazione di Francesca ebbe la meglio e accettai.",
      "Firenze era bellissima, come sempre. Rivedere l’Arno distendersi e far apparire Ponte Vecchio in lontananza è una magia che non mi stancherò mai di contemplare. Io e Francesca passeggiammo per la città: Piazza della Signoria, Ponte Vecchio e altri luoghi che Leonardo ci fece visitare. Andammo a cena da Diego: ricordo ancora il sapore della pappa al pomodoro di quella sera. Il giorno dopo incontrai Simone e Mattia, venuti apposta per salutarmi. Ero felice, anche quando, a malincuore, lasciammo Firenze per tornare a casa.",
      "In un paesino non molto lontano da casa, ogni estate a luglio si svolgono le feste medievali. Francesca, che realizza gioielli fatti a mano, mi propose di esporre la sua bancarella. Io, come al solito, protestai: «Non so se ce la faccio… ho paura di stancarmi.» Ma, come per Firenze, la sua determinazione mi convinse.",
      "Luglio. Indossavo i miei adorati harem pants, una t-shirt, e mi godevo la vita giorno per giorno. Senza barba, con qualche acciacco fisico, ma felice. Arrivò il giorno delle feste medievali. Presi Francesca con l’auto già caricata da lei con tutto l’occorrente e raggiungemmo il borgo di Offagna. Montammo la bancarella: il tavolo, il telo nero per coprirlo e i gioielli. Io mi occupavo delle luci, che sistemavo su piccoli tronchi di legno, mentre lei disponeva con cura ciondoli, anelli e bracciali. Erano circa le quattro del pomeriggio. Una musica medievale si diffondeva dalle casse appese ai muri della città. L’aria era piena di profumi: arrosti, spezie, incenso. Tutte le bancarelle erano pronte; la festa stava per iniziare e sarebbe durata una settimana.",
      "Mi allontanai per curiosare tra le altre bancarelle. In un vicolo pieno di luci e costumi medievali, conobbi Dino: un uomo sulla settantina che, dopo aver elogiato i gioielli di Francesca, iniziò a parlare con la naturalezza di chi ti conosce da vent’anni. In pochi minuti ci aveva già donato simpatia e affetto. Ci regalò alcuni oggetti e ci parlò del suo amore per l’India, dove trascorreva lunghi periodi, era affascinato dalla figura di Ganesh e ci raccontò la sua storia. Quella sera nacque una splendida amicizia che ancora oggi ci accompagna.",
      "Tra le vie del borgo, un giullare con accento spagnolo attirava l’attenzione. Quando lo avvicinai, confessò di venire da Madrid, ci avevo azzeccato. Iniziai a dargli una mano ad attirare pubblico per i suoi spettacoli fatti di musica, fuoco e risate. Ci sentivamo due giullari di strada: il mondo era un palcoscenico e noi non potevamo far altro che improvvisare.",
      "Verso metà settimana, la piazza accanto alla nostra bancarella si riempì. Dall’alto della scalinata comparvero i Daridel: cornamuse, ghironda e tamburi che intonavano melodie celtiche. Erano a pochi passi da me: sentirli suonare da così vicino fu magico. Quella musica entrò a far parte di me, un nuovo genere da alternare al mio amato heavy metal.",
      "La settimana delle feste volò via troppo in fretta, si sa, il tempo accelera quando stai bene.",
      "Il resto dell’estate trascorse tra gite e altre città. Francesca mi regalò un paio di pantaloni e una camicia tibetana: pantaloni color borgogna, camicia bianco panna. Ancora oggi, non appena le temperature salgono, non perdo occasione per indossarli.",
      "L’autunno arrivò dolce e colorato. Ripensavo al viaggio a Firenze, alle feste medievali, alle passeggiate. La malattia mi aveva tolto tanto, ma mi aveva anche insegnato a vedere. Anche un fiore sembrava diverso. In ospedale avevo fissato i muri per mesi, imparando a osservare dettagli che prima ignoravo, persino per strada.",
      "Ero cambiato. La mia mente era cambiata.",
      "Gli ultimi mesi dell’anno passarono sereni. A settembre andammo a una festa celtica in Abruzzo: musica dal vivo, cibo, artisti, bancarelle. Ci perdemmo tra le note e i profumi, assaporando quell’atmosfera inebriante.",
      "Di nuovo Natale. E arrivò il 2023."
    ]
  },
  {
    slug: "ricominciamo-parte-4",
    date: "2025-05-03",
    title: "Ricominciamo (Parte 4)",
    excerpt: "Il 2023 era iniziato bene, vivevo la mia conquistata serenità apparente.",
    tag: "dentro",
    accent: "var(--slate)",
    thumb: "diagnosi",
    image: "assets/optimized/stanza.jpg",
    body: [
      "Il 2023 era iniziato bene, vivevo la mia conquistata serenità apparente. Man mano che l’estate si avvicinava, mi piaceva andare con Francesca in qualche negozio a comprare vestiti in vista della bella stagione. Le visite in ospedale erano sempre meno frequenti, e le analisi del sangue andavano bene.",
      "Un giovedì di metà febbraio, verso le undici del mattino, ricevetti una telefonata dall’infermiera dell’ospedale: «La dottoressa vuole vederti, puoi passare verso le dodici e trenta.» «Certo!» risposi. Il mio presentimento, però, non era dei migliori.",
      "Aspettai il mio turno nella sala d’attesa. «Vieni, Francesco.» Ciò che mi aspettava era terribile: «Purtroppo la malattia è tornata. Domani faremo una BOM per valutarne lo stato. Da lunedì inizierai una cura chemioterapica qui in Day Hospital per cercare di mandarla di nuovo in remissione.»",
      "Mi tolsi occhiali e mascherina, li appoggiai sulla scrivania della dottoressa e, cambiando completamente espressione e respiro, rimasi senza parole. Mi sentivo distrutto, disorientato, disarmato. «Qui, purtroppo, non possiamo più fare nulla. Faremo la terapia che ti ho detto e sarai preso in carico dall’ospedale regionale di Ancona.» Quello dove erano morti mia madre e L.",
      "Fui chiamato di nuovo a combattere la malattia, come se tutta la sofferenza del mondo mi si fosse riversata addosso come un fiume in piena. Ancora incredulo, guidavo verso casa: ogni curva sembrava un ostacolo, ogni semaforo rosso un invito a fermarmi a riflettere su ciò che avevo appena appreso. Ma la mia mente rifiutava il confronto, cercava solo la sicurezza familiare delle quattro mura.",
      "Quando finalmente svoltai l’angolo e vidi la mia via, un senso di sollievo misto a crescente ansia mi avvolse. Parcheggiai distrattamente, nemmeno ricordando di aver spento il motore. Aprii la porta di casa e l’odore familiare mi colpì; ma anche quel profumo sembrava diverso, quasi come se la casa stessa sapesse del cambiamento. Non persi tempo a raccontare tutto a Francesca, che aveva già intuito.",
      "Il lunedì successivo ero di nuovo in ospedale, mi fecero accomodare sulle poltrone per la terapia, mi inserirono l’ago e iniziai le cure: una settimana al mese, proseguendo poi con le pillole a casa.",
      "Intorno all’anno 2009 ebbi dei problemi: smisi di suonare con la band musicale, abitudine che mi accompagnava costantemente da circa il 1997, persi il lavoro e in poco tempo mi ritrovai sperduto. Trovai conforto nei libri, dai classici ai romanzi più contemporanei.",
      "Un giorno mi ricapitò tra le mani Siddharta di Hermann Hesse, un libro che avevo amato e che decisi di rileggere. Le pagine, già conosciute, mi sembrarono nuove, come se volessero comunicarmi qualcosa di potente, un aiuto nascosto da scoprire. Iniziai a informarmi sul Buddhismo, ne rimasi affascinato: nessun dogma, nessuna verità imposta, solo un invito a indagare la realtà per raggiungere pace e liberazione.",
      "Lessi della vera storia di Siddharta Gautama: cresciuto tra palazzi dorati, aveva tutto, ma il padre gli aveva nascosto la sofferenza del mondo. Un giorno, curioso, uscì dal palazzo e vide un vecchio fragile, un uomo malato, un corteo funebre e un saggio sereno. Capì che ricchezza e piacere non proteggevano da vecchiaia, malattia e morte. Decise così di lasciare tutto per cercare la pace.",
      "Vagò per anni come asceta, ma nemmeno quelle pratiche estreme lo portarono alla verità. Una notte, sotto un grande albero di fico, l’albero della Bodhi, Siddharta si sedette in meditazione. All’alba raggiunse il risveglio: comprese le leggi della vita, le cause della sofferenza e la via per superarla. Era diventato il Buddha, il “Risvegliato”. Da allora, viaggiò per insegnare a tutti, offrendo non un dogma, ma un sentiero verso la libertà interiore.",
      "E io, in quel momento, ero decisamente in cerca di pace. Iniziai a divorare libri sull’argomento, praticare yoga e meditazione. Tutti e tre questi mondi si fusero, ascoltai esperienze altrui, incontrai maestri, meditavo.",
      "All’inizio di marzo 2023, applicai uno degli insegnamenti del Buddhismo: la sofferenza può essere un punto di partenza. Affrontavo le chemio, leggevo, riposavo ed ero felice di avere Francesca accanto a me. Intanto, facevo visite all’ospedale di Ancona, incontravo medici, venivo preparato per un nuovo ricovero, altre chemio e il trapianto allogenico, quello da donatore.",
      "Arrivò giugno: aspettavo di essere chiamato per il ricovero. Grazie al Buddhismo, mi ero rasserenato. Anche se tutto stava andando male, ero tranquillo, vivevo giorno per giorno, avevo imparato a non preoccuparmi di ciò che sarà e a concentrarmi su ciò che è. Non vivevo nel passato, perché pensarci porta solo tristezza o malinconia; né mi preoccupavo del futuro, che genera solo ansia. Lasciavo andare i pensieri senza cercare di sostituirli.",
      "E in un batter d’occhio arrivò la telefonata: a metà luglio sarei stato ricoverato per il trapianto. Mi presentai puntuale nel reparto di ematologia di Ancona, feci tutte le procedure di ricovero e la nuova avventura ebbe inizio.",
      "Il protocollo prevedeva un ciclo di chemio per “pulire” il midollo, poi, dopo circa un mese, un altro ciclo e infine il trapianto. I medici erano meravigliosi, proprio come quelli di Civitanova Marche, la mia città. La stanza BCM era diventata una cella d’isolamento. Fui travolto da nuova sofferenza, pensieri cupi, febbre, freddo, solitudine.",
      "Per fortuna avevo accesso alle piattaforme di streaming, trovai il modo di far passare il tempo, sostenuto dal mio Buddhismo Zen e dall’amore di Francesca e della mia famiglia. Fui dimesso a settembre. Tornavo spesso in ospedale per controlli, ma avevo riconquistato la mia meritata serenità: la quiete dopo la tempesta. Dovevo solo riposarmi, riprendere le forze, prendere tante medicine… ed essere felice."
    ]
  },
  {
    slug: "la-disciplina-dell-ospedale-parte-5",
    date: "2025-05-04",
    title: "La disciplina dell'ospedale (Parte 5)",
    excerpt: "Erano passati sei mesi dal trapianto allogenico. Febbraio 2024, e la comunicazione di recidiva sembrava lontana.",
    tag: "dentro",
    accent: "var(--slate)",
    image: "assets/optimized/torrette.jpg",
    imagePosition: "center 25%",
    imageScale: 0.88,
    thumb: "macchina",
    body: [
      "Erano passati sei mesi dal trapianto allogenico. Febbraio 2024, e la comunicazione di recidiva dell’anno precedente sembrava ormai così lontana.",
      "«Quest’anno torno alle feste medievali,» dissi a Francesca. Non mi importava se fosse faticoso, volevo riprendermi la mia vita, fare ciò che amavo. «A fine settembre torniamo a Firenze.» Questi erano i programmi. Volevamo rivivere il 2022 e ci stavamo preparando per quello.",
      "Tutto procedeva per il meglio, finché ad aprile arrivò un “intoppo”. Mi fu diagnosticata la GVHD, malattia del trapianto contro l’ospite), una complicanza che può verificarsi dopo un trapianto di cellule staminali o di midollo osseo. Si manifesta quando le cellule immunitarie del donatore attaccano i tessuti del ricevente, considerandoli “estranei”. Cortisone, pazienza, che ormai avevo imparato ad avere in abbondanza e arrivò giugno.",
      "Sembrava un déjà-vu quando mi chiamarono dall’ospedale di Ancona. «Dovresti ripetere il prelievo del midollo.» Lo feci e, dopo qualche giorno, scoprii il WT1, un marcatore che i medici usano per monitorare la risposta alle cure o individuare una possibile recidiva. Sì, ero di nuovo in recidiva. Tutta la fatica e la sofferenza dell’anno precedente non erano servite a nulla. Ero di nuovo al punto di partenza, solo che questa volta avevo finito le frecce al mio arco.",
      "Non starò a descrivere il mio stato d’animo: era lo stesso della recidiva precedente, ma moltiplicato per cento. «Alle feste medievali ci vengo lo stesso,» dissi a Francesca. Iniziavano il venti luglio.",
      "Non ci crederete, ma il diciotto mi venne la febbre, con un rossore dietro al collo. Le analisi del sangue indicarono trentamila globuli bianchi, un valore ben oltre la norma; avevo blasti nel sangue e non mi sentivo bene. Tachipirina per il weekend, sembra il titolo di un film, e invece era solo l’anticipo del peggio. Il lunedì mi fu diagnosticato l’herpes zoster, comunemente conosciuto come fuoco di Sant’Antonio, che si stava diffondendo sulla parte destra della testa.",
      "Una visita di controllo il ventidue si trasformò in un ricovero urgente: febbre alta, zoster, freddo, brividi. In venti minuti mi rimisero il PICC e mi ritrovai nella stanza BCM del reparto di ematologia, febbre a 40,7, allucinazioni e un fastidio atroce alla testa. Avevo centodiecimila globuli bianchi. Il mio corpo, già provato da tutte le terapie precedenti, fu sottoposto a un nuovo tentativo per abbassare quei globuli bianchi impazziti che volevano uccidermi.",
      "Due settimane e mezzo dopo fui dimesso dall’ospedale. I mesi seguenti furono segnati, oltre che dal caldo infernale di agosto, dalla neuropatia post-zoster. Dolori atroci, mai provati prima, partivano dai nervi e si diffondevano su viso e testa, facendomi urlare come un pazzo, tanto che dovetti prendere antidolorifici pesanti che mi intontivano. Quello che pensavo non corrispondeva più a ciò che riuscivo a dire. Giramenti di testa, perdita di equilibrio, fino a cadere e rompermi una costola. Questo mi costrinse a letto, portandomi a perdere tono muscolare.",
      "Nel frattempo, i medici di Ancona mi parlarono di una cura sperimentale che avrebbe potuto aiutarmi, forse perfino dare una svolta positiva alla leucemia. Una nuova freccia all’arco.",
      "Camminavo male, riuscivo a malapena ad alzarmi per andare in bagno. Un lunedì di fine settembre, subito dopo colazione, tornai a letto come al solito... ma stavolta sentii di nuovo freddo. Insufficienza respiratoria. Non respiravo, avevo fame d’aria. Francesca non esitò a chiamare l’ambulanza, che mi portò d’urgenza in ospedale. Questa volta, almeno, ero a Civitanova. La diagnosi fu polmonite: maschere, caschi per l’ossigeno,“bellissimi gadget” come li chiamavo io, con un filo d’ironia.",
      "Passai quattro settimane in ospedale con una sorprendente tranquillità, anche se avevo perso l’uso delle gambe. Non potevo più camminare, non riuscivo a muovermi, non ero più autosufficiente. Mio padre veniva all’ora di pranzo per aiutarmi a mangiare, Francesca arrivava per la cena. Fisioterapia e musica: questo era il mio mondo.",
      "Quando tornai a casa, ero in sedia a rotelle, ma almeno senza febbre. Iniziarono i giri di analisi e trasfusioni che ancora oggi continuano. Mi fu prescritta la pillola sperimentale di cui vi avevo parlato e cominciai le visite all’ospedale di Bologna. Due pillole al giorno, e persi di nuovo i sapori in bocca: anche l’acqua prese il sapore della medicina.",
      "Fu proprio in quel periodo che smisi di preoccuparmi della malattia. Volevo vivere normalmente, come se la malattia non fosse mai esistita. A dicembre 2024, Francesca diventò mia moglie. Volevo essere felice. Volevo che Francesca fosse felice. Volevo quello stato interiore di calma, equilibrio e pace, anche quando intorno a noi le cose non erano perfette.",
      "Ma un lunedì mattina di marzo non mi sentii bene. Di nuovo ambulanza, terzo ricovero in otto mesi. Diagnosi: Endocardite.",
      "Oggi, quando mi guardo allo specchio, non vedo solo cicatrici, capelli mancanti, o un corpo cambiato. Vedo un ragazzo che ha attraversato l’inferno e ne è uscito con il cuore ancora aperto alla vita. Ho imparato che la felicità non è un premio da conquistare alla fine del viaggio, ma qualcosa che coltiviamo, giorno per giorno, anche mentre camminiamo nel buio.",
      "Francesca, gli amici, i medici, i piccoli momenti di musica, le passeggiate lente, i profumi delle feste medievali, un sorriso inatteso in corsia, tutto questo mi ha insegnato che la vita non è fatta di anni o di traguardi, ma di attimi. Attimi che diventano eterni se li sappiamo abbracciare.",
      "Forse non so cosa mi riserverà il domani. Ma so che, qualunque cosa accada, io continuerò a scegliere di vivere, con la stessa intensità con cui si affronta un concerto, una risata, un abbraccio. Perché la verità è semplice: finché posso amare, finché posso stupirmi, finché posso dire “grazie”, io sono vivo. E questa, per me, è la vittoria più grande."
    ]
  }
].sort((a, b) => new Date(b.date) - new Date(a.date));

const ARGOMENTI_POSTS = [
  {
    slug: "perche-ho-deciso-di-scrivere",
    date: "2025-05-09",
    title: "Perché ho deciso di scrivere di questo",
    excerpt: "Quello che cercavo era qualcuno che mi spiegasse cosa stava succedendo nel mio corpo, senza laurea in medicina come prerequisito.",
    tag: "iniziare",
    accent: "var(--orange)",
    thumb: "appunti",
    image: "assets/optimized/argomenti/iniziare.jpg",
    body: [
      "Quello che cercavo era semplice: qualcuno che mi spiegasse cosa stava succedendo nel mio corpo, senza laurea in medicina come prerequisito. Non l'ho trovato, quindi ho deciso di scriverlo io.",
      "Non sono un medico e non voglio esserlo. Sono una persona che ha ricevuto una diagnosi di leucemia mieloide acuta e ha dovuto imparare in fretta un sacco di cose che non aveva mai voluto sapere. Quello che scrivo qui viene da quella esperienza: libri, conversazioni con i medici, domande fatte e rifatte, notti a capire cosa significava un termine che aveva sentito la mattina.",
      "L'obiettivo non è sostituire il tuo oncologo. L'obiettivo è farti arrivare alla visita con qualche domanda in più e un po' meno disorientamento.",
      "Se sei qui perché stai attraversando qualcosa di simile, spero che trovi quello che non ho trovato io."
    ]
  },
  {
    slug: "la-diagnosi-spiegata",
    date: "2025-05-10",
    title: "La diagnosi spiegata a chi come me non capisce la medicina",
    excerpt: "Un modo più umano per capire leucemia mieloide acuta, midollo, blasti, esami e primi giorni dopo la diagnosi.",
    tag: "capire",
    accent: "var(--slate)",
    thumb: "diagnosi",
    image: "assets/optimized/argomenti/capire.jpg",
    body: [
      "Questo non è un articolo scientifico. È quello che avrei voluto leggere io il giorno della diagnosi.",
      "## Cos'è, in parole normali",
      "Il sangue è fatto di cellule: globuli rossi, globuli bianchi e piastrine. Ognuna ha un compito preciso. I globuli bianchi, in particolare, sono il sistema di difesa del corpo e combattono le infezioni.",
      "Nel midollo osseo, la fabbrica dentro le ossa, queste cellule vengono prodotte continuamente. In condizioni normali, nascono, maturano, fanno il loro lavoro e muoiono.",
      "Con la leucemia mieloide acuta succede qualcosa di diverso: alcune cellule smettono di maturare e iniziano a moltiplicarsi in modo incontrollato, ancora immature e inutili. Queste cellule, chiamate blasti, invadono il midollo, poi il sangue, e progressivamente impediscono alle cellule sane di fare il loro lavoro.",
      "Il termine acuta non significa gravissima, anche se la malattia è seria: significa che si sviluppa velocemente, nell'arco di settimane. Mieloide indica da quale linea di cellule origina il problema.",
      "## Come viene scoperta",
      "Spesso la diagnosi arriva quasi per caso, dopo esami del sangue fatti per tutt'altro, stanchezza persistente, un'infezione che non passa, lividi che compaiono senza motivo.",
      "L'emocromo mostra qualcosa che non torna: globuli bianchi troppo alti o troppo bassi, globuli rossi scarsi, piastrine basse. Il medico a quel punto manda in ematologia.",
      "Aspirato midollare, biopsia osteomidollare e analisi citogenetica o molecolare servono a capire quanti blasti ci sono, di che tipo sono e quali mutazioni guidano la malattia. Questo è fondamentale perché la LMA non è una sola malattia: ci sono varianti diverse e il trattamento cambia di conseguenza.",
      "## Cosa aspettarsi nei giorni che seguono",
      "I primi giorni dopo la diagnosi sono disorientanti. Arrivano informazioni in quantità, in un linguaggio che non è il tuo, mentre sei emotivamente a pezzi.",
      "Il ricovero è quasi immediato. La LMA si tratta in ospedale, almeno nella fase iniziale. Non c'è tempo da perdere, e questo può sembrare brutale, ma è proprio perché la malattia si muove in fretta che i medici si muovono in fretta.",
      "Il catetere venoso centrale diventa presto familiare: permette di fare chemioterapia, prelievi e trasfusioni senza bucare un braccio ogni volta. All'inizio sembra invasivo, poi non ci pensi più.",
      "La chemioterapia di induzione è la prima fase: dura circa una settimana di infusioni, poi seguono settimane di attesa mentre il midollo cerca di riprendersi. In quel periodo le difese immunitarie sono praticamente a zero, si sta in camera quasi isolati, si fa attenzione a tutto.",
      "La stanchezza è reale. Non è mi sento un po' giù, è un'altra cosa. Il corpo sta combattendo su più fronti contemporaneamente. Darsi il permesso di riposare non è debolezza."
    ]
  },
  {
    slug: "guida-turistica-al-reparto-di-ematologia",
    date: "2025-05-11",
    title: "Guida turistica al reparto di ematologia",
    excerpt: "Una destinazione che non avresti scelto, tra stanze, cicli di terapia, aria filtrata, vassoi e persone che diventano casa.",
    tag: "ospedale",
    accent: "var(--mint)",
    thumb: "macchina",
    image: "assets/optimized/argomenti/ospedale.jpg",
    body: [
      "Una destinazione che non avreste scelto, ma che vi cambierà comunque la vita.",
      "## Come si arriva",
      "A differenza di qualsiasi altra meta turistica, qui non esistono voli low cost né pacchetti last minute. L'accesso è riservato, e il biglietto d'ingresso arriva sotto forma di esame del sangue con valori che non tornano.",
      "Nessuno prenota questo viaggio con entusiasmo. Eppure ci si ritrova qui, con una valigia fatta in fretta e un referto in mano che recita parole come leucemia mieloide acuta, tre parole che cambiano il significato di tutte le altre.",
      "## Il territorio",
      "L'ematologia non è un posto solo. È una rete di luoghi collegati da corridoi e carrelli porta farmaci.",
      "Le camere, chiamarle stanze è un eufemismo nobile, sono il cuore della permanenza. Piccole, funzionali, con una finestra che diventa il vostro rapporto principale con il mondo esterno. Il tempo qui si misura in cicli di chemioterapia, non in giorni della settimana.",
      "Il lunedì e il giovedì perdono significato. Quello che conta è: primo giorno di ciclo, o ultimo?",
      "## Clima e stagioni",
      "Il microclima del reparto è una costante: aria filtrata, temperatura controllata, silenzio intervallato da bip. Le stagioni esterne diventano un concetto astratto. Si intuiscono dal cambio del pigiama dei visitatori, cappotto pesante, poi giacca leggera, ma rimangono fuori dalla porta, insieme al resto del mondo normale.",
      "Consiglio pratico: portate oggetti da casa. Un cuscino, una coperta, qualcosa che odori di familiare. L'olfatto è il senso che il reparto non riesce a standardizzare.",
      "## La gastronomia locale",
      "Il cibo ospedaliero merita una menzione speciale, nel senso in cui si menziona qualcosa che ha provato a fare del suo meglio. I vassoi arrivano puntuali, coperti da pellicola, con una silenziosa dignità.",
      "Nei giorni di chemioterapia intensa, l'appetito è un ospite assente e il rapporto con il cibo diventa un negoziato quotidiano tra quello che il corpo vuole e quello che riesce a tollerare.",
      "## La gente del posto",
      "Gli abitanti fissi del reparto, medici, infermieri, OSS, sono la vera attrattiva di questa destinazione. Sono persone che hanno scelto di stare in un posto difficile ogni giorno, e che imparano i vostri nomi, i vostri valori del sangue, le vostre paure.",
      "E poi ci sono gli altri pazienti, i vicini di viaggio, quelli che si incrociano in corridoio trascinando la sacca della flebo. Con loro si stabilisce una solidarietà silenziosa, fatta di sguardi e di capire senza dover spiegare.",
      "Nessuno vuole stare qui. Ma stranamente, non ci si sente soli.",
      "## Cosa portare",
      "Qualcosa da leggere, qualcosa da ascoltare, qualcosa da guardare. Il tempo nel reparto è abbondante e strano, lungo nei momenti di attesa, vorticoso nelle crisi.",
      "Da non dimenticare: la pazienza. Non come virtù astratta, ma come muscolo concreto da allenare ogni giorno. E un caricabatterie lungo.",
      "## Quando si parte",
      "La dimissione è il momento più strano di tutto il viaggio. Si esce con le gambe che ricordano appena il pavimento, con una cartella clinica che pesa più di una valigia, e con una versione di sé stessi che non esisteva prima di entrare."
    ]
  },
  {
    slug: "vademecum-anti-nausea-da-chemioterapia",
    date: "2025-05-12",
    title: "Vademecum anti-nausea da chemioterapia",
    excerpt: "Farmaci, zenzero, braccialetti, cibo semplice e piccoli trucchi per una nausea che si può trattare.",
    tag: "sopravvivere",
    accent: "var(--cream)",
    thumb: "appunti",
    image: "assets/optimized/argomenti/sopravvivere.jpg",
    body: [
      "Ho provato zenzero, meditazione e minacciare il mio stomaco. Il mio stomaco non negozia.",
      "La nausea da chemioterapia è uno degli effetti collaterali più odiati, non perché sia il più grave, ma perché non smette mai al momento giusto.",
      "Quello che ho trovato, tra studi e consigli pratici, è che alcune cose aiutano davvero. Altre funzionano abbastanza da valere comunque la pena. Le metto qui tutte insieme.",
      "## Prima cosa: dillo al medico",
      "Se la nausea è forte e non stai prendendo nulla di specifico, ci sono farmaci che funzionano bene. Non è una resa chiedere un aggiustamento della terapia. È l'unica cosa sensata.",
      "## Lo zenzero funziona, ma come supporto",
      "Lo zenzero può aiutare come supporto agli antiemetici. In pratica: tisana con zenzero fresco, limone e menta, oppure zenzero candito da tenere a portata di mano. Non esagerare con le dosi: dosi eccessive irritano lo stomaco, il che sarebbe controproducente.",
      "## Il braccialetto sul polso",
      "C'è un punto di agopressione sul polso interno, tre dita sopra la piega, chiamato P6. I braccialetti anti-nausea da viaggio lo stimolano. Costano poco, non fanno male, vale la pena provarli.",
      "## Mangiare: le regole che nessuno vuole sentire",
      "Pasti piccoli e frequenti: lo stomaco vuoto peggiora tutto. Cibi asciutti e insipidi: crackers, fette biscottate, gallette di riso. Temperatura ambiente o fredda, perché il caldo esalta gli odori.",
      "Un consiglio che mi ha colpito: non mangiare il tuo piatto preferito nei giorni della chemio. Il cervello rischia di associarlo alla nausea e di rifiutarlo a lungo. Difendi i tuoi comfort food.",
      "## La nausea che arriva prima",
      "C'è una forma di nausea anticipatoria che compare prima della seduta: il corpo ha imparato ad associare certi ambienti o odori alla nausea precedente e parte in anticipo.",
      "Musica o podcast durante il tragitto aiutano, così come un odore diverso che spezzi l'associazione. Nei casi seri, il medico può valutare un ansiolitico.",
      "La nausea da chemio non è una tassa obbligatoria. È un sintomo trattabile. Se quello che stai usando non basta, ci sono ancora cose da provare, vale la pena insistere."
    ]
  },
  {
    slug: "libri-che-mi-stanno-salvando-la-mente",
    date: "2025-05-13",
    title: "Libri che salvano la mente",
    excerpt: "Quattro libri per mettere la testa da qualche parte che non sia il soffitto della stanza d'ospedale.",
    tag: "mente",
    accent: "var(--slate)",
    thumb: "appunti",
    image: "assets/optimized/argomenti/mente.jpg",
    body: [
      "Non ho iniziato a leggere di più perché sono diventato più saggio. Ho iniziato perché avevo bisogno di mettere la testa da qualche parte che non fosse il soffitto della stanza d'ospedale.",
      "Questi quattro libri, in momenti diversi, hanno fatto esattamente questo.",
      "## Uno psicologo nei lager di Viktor Frankl",
      "Frankl era uno psichiatra austriaco sopravvissuto ai campi di concentramento nazisti. Il libro racconta quella esperienza, ma non è un libro sulla Shoah: è un libro sul senso.",
      "Non lo consiglio perché c'è chi sta peggio, ragionamento inutile e fastidioso. Lo consiglio perché insegna a trovare un perché, e quando hai un perché riesci a sopportare quasi qualsiasi come.",
      "## Profondo come il mare, leggero come il cielo di Gianluca Gotto",
      "Gotto racconta una trasformazione personale profonda attraverso la filosofia buddhista e la meditazione, con uno stile diretto e senza pretese spirituali.",
      "Quello che mi ha colpito è l'idea che sia possibile cambiare il proprio rapporto con la realtà senza aspettare che la realtà cambi per prima.",
      "## 101 storie zen",
      "È una raccolta di aneddoti brevi della tradizione zen, senza autore singolo, tramandati per secoli. Non si legge dall'inizio alla fine: si apre a caso, si legge una storia di mezza pagina, ci si pensa su.",
      "È il tipo di libro perfetto per un posto come l'ospedale, dove la concentrazione dura poco e il tempo si dilata in modo strano.",
      "## La città dei ladri di David Benioff",
      "È l'unico romanzo della lista, e c'è un motivo. A volte la mente ha bisogno di staccare del tutto, non di essere illuminata.",
      "Ambientato nell'assedio di Leningrado, è una storia di sopravvivenza, amicizia e umorismo nero in condizioni impossibili. Si legge in un respiro e lascia addosso qualcosa di difficile da spiegare: una specie di calore, nonostante tutto.",
      "Aggiornerò questa lista man mano. Se hai letto qualcuno di questi e vuoi parlarne, scrivimi."
    ]
  }
].sort((a, b) => new Date(b.date) - new Date(a.date));

const POSTS = [...BLOG_POSTS, ...ARGOMENTI_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));

const MONTHS = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];

const SOCIAL_LINKS = [
  ["Instagram", "https://instagram.com/frank_pw", "fa-brands fa-instagram"],
  ["X", "https://x.com/frank_pw", "fa-brands fa-x-twitter"],
  ["Facebook", "https://facebook.com/frank_pw", "fa-brands fa-facebook"],
  ["Threads", "https://threads.net/@frank_pw", "fa-brands fa-threads"],
  ["Telegram", "https://t.me/frank_pw1", "fa-brands fa-telegram"],
];

function fmtDate(iso) {
  const d = new Date(`${iso}T00:00:00`);
  return `${String(d.getDate()).padStart(2, "0")} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function tagColor() {
  return "var(--orange)";
}

function SocialLinks({ className = "", buttonClassName = "" }) {
  return (
    <div className={`contacts-icons flex flex-wrap items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map(([label, url, icon]) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-btn flex h-9 w-9 items-center justify-center border no-underline ${buttonClassName}`}
          aria-label={label}
        >
          <i className={`${icon} text-[17px]`} />
        </a>
      ))}
    </div>
  );
}

function ShareButton({ post }) {
  const [status, setStatus] = useState("");

  const copyLink = async (url) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = url;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  const onShare = async () => {
    const shareUrl = window.location.href;
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: shareUrl
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await copyLink(shareUrl);
      setStatus("link copiato");
      window.setTimeout(() => setStatus(""), 1800);
    } catch (error) {
      if (error?.name === "AbortError") return;

      await copyLink(shareUrl);
      setStatus("link copiato");
      window.setTimeout(() => setStatus(""), 1800);
    }
  };

  return (
    <div className="mb-9 flex items-center gap-3 sm:mb-10">
      <button
        type="button"
        className="share-btn font-display inline-flex items-center gap-2 border border-[var(--line)] bg-transparent px-4 py-2 text-[15px] text-[var(--ink)] transition hover:bg-[rgba(20,20,20,0.04)]"
        onClick={onShare}
      >
        <i className="fa-solid fa-share-nodes text-[14px]" />
        <span>Condividi</span>
      </button>
      <span className={`share-status text-[13px] text-[var(--muted)] ${status ? "is-visible" : ""}`} aria-live="polite">
        {status}
      </span>
    </div>
  );
}

function parseHash() {
  const parts = (window.location.hash || "#/").replace(/^#/, "").split("/").filter(Boolean);
  if (parts.length === 0) return { route: "home" };
  if (parts[0] === "blog" && parts[1]) return { route: "post", slug: parts[1] };
  if (parts[0] === "blog") return { route: "blog" };
  if (parts[0] === "argomenti" && parts[1]) return { route: "post", slug: parts[1] };
  if (parts[0] === "argomenti") return { route: "blog" };
  if (parts[0] === "chi-sono" || parts[0] === "info") return { route: "chi-sono" };
  if (parts[0] === "contact") return { route: "contact" };
  return { route: "home" };
}

function useRoute() {
  const [route, setRoute] = useState(parseHash());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

function NavBar({ route, theme }) {
  const dark = theme === "dark";
  const linkClass = `font-display no-underline transition-colors ${
    dark ? "text-white/95 drop-shadow" : "text-[var(--muted)]"
  }`;
  const activeClass = dark ? "text-white underline underline-offset-4 decoration-1" : "text-[var(--ink)] underline underline-offset-4 decoration-1";
  const isActive = (name) => route === name || (name === "blog" && route === "post");

  return (
    <header className={`fixed left-0 right-0 top-0 z-10 flex flex-col items-start gap-3 px-4 py-4 pointer-events-none sm:flex-row sm:items-center sm:justify-between sm:px-9 sm:py-7 ${dark ? "" : "bg-[rgba(250,248,239,0.96)] backdrop-blur-sm"}`}>
      <a href="#/" className={`font-datatype ${linkClass} pointer-events-auto max-w-full break-words text-[clamp(18px,6vw,22px)] leading-none sm:text-[26px] ${dark ? "text-white" : "text-[var(--ink)]"}`}>
        unavoltavevolabarba
      </a>
      <nav className="flex flex-wrap gap-x-4 gap-y-2 pointer-events-auto sm:gap-7">
        {[
          ["#/", "Home", "home"],
          ["#/blog", "Blog", "blog"],
          ["#/chi-sono", "Chi Sono", "chi-sono"]
        ].map(([href, label, name]) => (
          <a key={href} href={href} className={`font-datatype ${linkClass} text-[14px] leading-none sm:text-[22px] ${isActive(name) ? activeClass : ""}`}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Home() {
  const contactsRef = React.useRef(null);
  const heroImageRef = React.useRef(null);
  const homePosts = POSTS.slice(0, 5);

  React.useEffect(() => {
    const el = contactsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("is-visible"); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const image = heroImageRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!image || reduceMotion) return;

    let pointerX = 0;
    let scrollY = window.scrollY;
    let rafId = null;

    const render = () => {
      const scrollShift = Math.min(scrollY * 0.12, 42);
      image.style.setProperty("--home-hero-x", `${pointerX * 10}px`);
      image.style.setProperty("--home-hero-y", `${scrollShift}px`);
      rafId = null;
    };

    const requestRender = () => {
      if (rafId === null) rafId = window.requestAnimationFrame(render);
    };

    const onPointerMove = (event) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      requestRender();
    };

    const onScroll = () => {
      scrollY = window.scrollY;
      requestRender();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    requestRender();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main className="page-fade min-h-screen">
      <div className="fixed inset-0 -z-10">
        <img
          ref={heroImageRef}
          className="hero-image home-hero-image h-full w-full object-cover"
          src={heroPoppies}
          alt=""
          fetchPriority="high"
        />
      </div>

      <section className="home-hero relative min-h-[100svh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[220px] bg-gradient-to-b from-transparent to-[#141414]" />

        <section className="home-post-area absolute bottom-8 left-0 right-0 z-10 sm:bottom-12">
          <div className="home-post-grid mx-auto flex max-h-[38svh] w-full max-w-[560px] flex-col gap-3 overflow-x-hidden overflow-y-auto p-3 md:max-h-none md:max-w-full md:snap-x md:snap-mandatory md:flex-row md:overflow-x-auto md:overflow-y-hidden md:p-6">
          
         {homePosts.map((post) => (
            <a
              key={post.slug}
              href={`#/blog/${post.slug}`}
              className="post-card glass-card flex min-h-[88px] w-full flex-none items-stretch gap-3 p-3 text-white no-underline sm:min-h-24 md:w-[360px] md:snap-start lg:w-[calc((100vw-96px)/5)]"
            >
              <div
                className="h-16 w-16 flex-shrink-0 overflow-hidden sm:h-[72px] sm:w-[72px]"
                style={{ background: post.accent }}
              >
                <Thumb type={post.thumb} image={post.image} imagePosition={post.imagePosition} imageScale={post.imageScale} />
              </div>
              <div className="font-display flex min-w-0 flex-1 flex-col justify-between">
                <div className="line-clamp-2 text-[15px] leading-tight drop-shadow sm:line-clamp-none sm:truncate sm:whitespace-nowrap sm:text-base">
                  {post.title}
                </div>
                <div className="flex flex-wrap justify-between gap-x-2 gap-y-1 text-[12px] opacity-85 sm:text-[13px]">
                  <span>LEGGI &rarr;</span>
                  <span>{fmtDate(post.date)}</span>
                </div>
              </div>
            </a>
          ))}
          </div>
          {POSTS.length > homePosts.length && (
            <div className="flex justify-center px-3 sm:px-6">
              <a
                href="#/blog"
                className="home-show-more font-display border border-white/30 bg-black/30 px-4 py-2 text-sm text-white no-underline backdrop-blur transition hover:bg-white/20"
              >
                Mostra altri
              </a>
            </div>
          )}
        </section>
      </section>

      <section ref={contactsRef} className="contacts-section relative bg-[var(--ink)] px-4 py-10 text-white sm:px-9 sm:py-12">
        <div className="mx-auto flex max-w-[980px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="contacts-title font-display mb-1 text-[clamp(30px,9vw,40px)] leading-none">Contatti</h2>
            <p className="contacts-desc max-w-xl text-[13px] leading-relaxed text-white/70">
              mi trovi qui, senza moduli e senza passaggi intermedi.
            </p>
          </div>
          <SocialLinks className="sm:justify-end" buttonClassName="border-white/25 text-white" />
        </div>
      </section>
    </main>
  );
}

function PostRow({ post, index, href }) {
  return (
    <a
      href={href}
      className={`blog-row block py-5 text-[var(--ink)] no-underline md:py-7 ${
        index === 0 ? "border-t border-[var(--ink)]" : "border-t border-[var(--line)]"
      }`}
    >
      {/* Mobile */}
      <div className="flex items-start gap-3 md:hidden">
        <div className="h-16 w-16 flex-shrink-0 overflow-hidden" style={{ background: post.accent }}>
          <Thumb type={post.thumb} image={post.image} imagePosition={post.imagePosition} imageScale={post.imageScale} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 text-[11px] text-[var(--muted)]">
            {fmtDate(post.date)} · <span style={{ color: tagColor(post.tag) }}>{post.tag}</span>
          </div>
          <h2 className={`font-display mb-1 leading-tight ${post.slug === "un-giorno-qualunque-parte-1" ? "post-title-single-line" : "text-[clamp(19px,6vw,24px)]"}`}>{post.title}</h2>
          <p className="font-article line-clamp-2 text-[13px] leading-relaxed text-[var(--body)]">{post.excerpt}</p>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-[120px_110px_1fr_80px] md:items-start md:gap-5">
        <div className="h-[76px] w-[120px] overflow-hidden" style={{ background: post.accent }}>
          <Thumb type={post.thumb} image={post.image} imagePosition={post.imagePosition} imageScale={post.imageScale} />
        </div>
        <div className="pt-1 text-[13px] text-[var(--muted)]">
          {fmtDate(post.date)}
          <div className="mt-1 lowercase" style={{ color: tagColor(post.tag) }}>// {post.tag}</div>
        </div>
        <div>
          <h2 className={`font-display mb-2 leading-tight ${post.slug === "un-giorno-qualunque-parte-1" ? "post-title-single-line" : "text-3xl"}`}>{post.title}</h2>
          <p className="font-article max-w-xl text-sm leading-relaxed text-[var(--body)]">{post.excerpt}</p>
        </div>
        <div className="font-display pt-2 text-right text-sm">LEGGI &rarr;</div>
      </div>
    </a>
  );
}

function BlogList() {
  const [selectedTag, setSelectedTag] = useState(null);

  const allTags = [...new Set(POSTS.map((p) => p.tag))];
  const filtered = selectedTag ? POSTS.filter((p) => p.tag === selectedTag) : POSTS;

  return (
    <main className="page-fade min-h-screen bg-[var(--paper)] pt-[132px] sm:pt-[110px]">
      <div className="mx-auto max-w-[980px] px-4 pb-24 sm:px-9 sm:pb-28">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="font-display mb-2 text-[clamp(42px,14vw,56px)] leading-none">Blog</h1>
            <p className="mb-10 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:mb-14">
              appunti scritti dentro e fuori dall'ospedale.<br className="hidden sm:block" />
              niente schema. 
            </p>
          </div>

          <div className="shrink-0 pt-2 text-left sm:text-right">
            <div className="mb-3 text-[11px] uppercase tracking-widest text-[var(--soft-muted)]">Argomenti</div>
            <div className="flex flex-wrap gap-3 sm:flex-col sm:items-end sm:gap-2">
              {allTags.map((tag) => {
                const active = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(active ? null : tag)}
                    className="font-display cursor-pointer border-0 bg-transparent p-0 text-left text-[15px] lowercase transition-opacity sm:text-right"
                    style={{ color: tagColor(tag), opacity: active ? 1 : 0.7 }}
                  >
                    {active ? "→ " : ""}{tag}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <section>
          {filtered.map((post, index) => (
            <PostRow key={post.slug} post={post} index={index} href={`#/blog/${post.slug}`} />
          ))}
          <div className="border-t border-[var(--line)]" />
        </section>
      </div>
    </main>
  );
}

function BlogPost({ slug, posts = POSTS, basePath = "#/blog", backLabel = "tutti i post" }) {
  const index = posts.findIndex((post) => post.slug === slug);
  const post = posts[index];

  if (!post) {
    return (
      <main className="page-fade min-h-screen bg-[var(--paper)] pt-40">
        <div className="mx-auto max-w-3xl px-9">
          Post non trovato. <a href={basePath}>torna indietro &rarr;</a>
        </div>
      </main>
    );
  }

  const prev = posts[index + 1];
  const next = posts[index - 1];

  return (
    <main className="page-fade min-h-screen bg-[var(--paper)] pt-[132px] sm:pt-[110px]">
      <article className="mx-auto max-w-3xl px-4 pb-24 sm:px-9 sm:pb-28">
        <a href={basePath} className="mb-8 inline-block text-[13px] text-[var(--muted)] no-underline sm:mb-10">
          &larr; {backLabel}
        </a>

        <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px]">
          <span className="text-[var(--muted)]">{fmtDate(post.date)}</span>
          <span className="lowercase" style={{ color: tagColor(post.tag) }}>
            // {post.tag}
          </span>
        </div>

        <h1 className="font-display mb-6 text-[clamp(32px,10vw,56px)] leading-tight [overflow-wrap:anywhere] sm:mb-7">{post.title}</h1>

        <ShareButton post={post} />

        <div className="font-article text-[15px] leading-7 text-[var(--body)] sm:text-base sm:leading-8">
          {post.body.map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="font-display mb-4 mt-10 text-[clamp(24px,7vw,28px)] leading-tight text-[var(--ink)]">
                  {paragraph.replace(/^##\s+/, "")}
                </h2>
              );
            }

            if (i === 0 && paragraph.startsWith("«")) {
              return (
                <blockquote key={i} className="mb-8 border-l-2 border-[var(--poppy)] pl-4 text-lg leading-relaxed text-[var(--ink)] sm:pl-5 sm:text-xl">
                  <p className="mb-3">{paragraph}</p>
                  {post.body[i + 1] && <cite className="block text-sm not-italic text-[var(--muted)]">{post.body[i + 1]}</cite>}
                </blockquote>
              );
            }

            if (i === 1 && post.body[0]?.startsWith("«")) return null;

            return <p key={i} className="mb-6">{paragraph}</p>;
          })}
        </div>

        <section className="mt-14 flex flex-col gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-display text-xl leading-tight text-[var(--ink)]">Link</div>
            <div className="mt-1 text-[13px] text-[var(--muted)]">mi trovi anche qui</div>
          </div>
          <SocialLinks buttonClassName="border-[var(--line)] text-[var(--ink)]" />
        </section>

        <nav className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2">
          <div>
            {prev && <PostNav post={prev} label="← post precedente" basePath={basePath} />}
          </div>
          <div>
            {next && <PostNav post={next} label="post successivo →" align="right" basePath={basePath} />}
          </div>
        </nav>
      </article>
    </main>
  );
}

function PostNav({ post, label, align = "left", basePath = "#/blog" }) {
  return (
    <a href={`${basePath}/${post.slug}`} className={`block border border-[var(--line)] p-4 text-[var(--ink)] no-underline sm:p-5 ${align === "right" ? "sm:text-right" : ""}`}>
      <div className="mb-2 text-xs text-[var(--muted)]">{label}</div>
      <div className="font-display line-clamp-2 text-xl leading-tight sm:line-clamp-none sm:truncate sm:whitespace-nowrap">{post.title}</div>
    </a>
  );
}

function ChiSono() {
  return (
    <main className="page-fade min-h-screen bg-[var(--paper-2)] pt-[132px] sm:pt-[110px]">
      <div className="mx-auto max-w-[980px] px-4 pb-24 sm:px-9 sm:pb-28">
        <section className="px-4 py-12 sm:px-14 sm:py-16">
          <div className="max-w-[620px] space-y-5 text-[15px] leading-8">
            <h1 className="font-display mb-8 text-[clamp(36px,8vw,56px)] leading-none">
              Chi Sono
            </h1>
            <p>
              Mi chiamo Francesco, pesco idee da ogni angolo: la musica, il
              codice, i film. Sono un musicista, gamer, appassionato di libri e
              manga, filosofia zen e dalla serie The Big Bang Theory che ho
              rivisto più volte di quanto voglia ammettere. Il tredici giugno
              2021 mi è stata diagnosticata la leucemia mieloide acuta e ho
              deciso si raccontare ciò che mi è successo nella speranza che
              possa essere d'aiuto a chiunque possa averne bisogno in qualche
              modo. Questo blog è dove metto tutto insieme.
            </p>
            
          </div>
        </section>
      </div>
    </main>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="page-fade min-h-screen bg-[var(--paper)] pt-[132px] sm:pt-[110px]">
      <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-9 sm:pb-28">
        <h1 className="font-display mb-2 text-[clamp(40px,13vw,56px)] leading-none">Contact</h1>
        <p className="mb-10 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:mb-12">
          se mi vuoi scrivere due righe - anche solo per dire ciao - questo è il posto.<br className="hidden sm:block" />
          rispondo a tutti, alla mia velocità, di solito entro qualche giorno.
        </p>

        {!sent ? (
          <form onSubmit={onSubmit} className="flex flex-col gap-7">
            <FormField label="il tuo nome">
              <input className="field" value={name} onChange={(e) => setName(e.target.value)} placeholder="come ti chiami" required />
            </FormField>
            <FormField label="la tua email">
              <input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="dove ti rispondo" required />
            </FormField>
            <FormField label="il messaggio">
              <textarea className="field" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="anche una riga sola va bene" rows="6" required />
            </FormField>
            <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="break-all text-[13px] text-[var(--muted)]">oppure: ciao@unavoltavevolabarba.it</div>
              <button className="font-display w-full bg-[var(--ink)] px-7 py-3 text-lg text-white sm:w-auto" type="submit">
                INVIA &rarr;
              </button>
            </div>
          </form>
        ) : (
          <div className="border border-dashed border-[var(--ink)] p-9 text-[15px] leading-8">
            grazie {name || ""}. il messaggio è partito.<br />
            ti rispondo appena posso.
            <div className="font-display mt-6 text-lg">
              <a href="#/blog">intanto leggi qualcosa &rarr;</a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function FormField({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[13px] text-[var(--muted)]">{label}</span>
      {children}
    </label>
  );
}
function App() {
  const route = useRoute();
  const theme = route.route === "home" ? "dark" : "light";
  let page = <Home />;

  if (route.route === "blog") page = <BlogList />;
  if (route.route === "post") page = <BlogPost slug={route.slug} />;
  if (route.route === "chi-sono") page = <ChiSono />;
  if (route.route === "contact") page = <Contact />;

  return (
    <div data-screen-label={`${route.route}${route.slug ? `/${route.slug}` : ""}`}>
      <NavBar route={route.route} theme={theme} />
      {page}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
