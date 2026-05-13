const { useState, useEffect } = React;

const heroPoppies = "papaveri.png";
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

function Thumb({ type }) {
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

const POSTS = [
  {
    slug: "papaveri",
    date: "2026-05-08",
    title: "Papaveri",
    excerpt: "Sono uscito dall'ospedale in primavera. Il primo posto dove sono andato è questo campo. Non c'erano ancora le foto, c'ero solo io e tutto questo rosso.",
    tag: "fuori",
    accent: "var(--orange)",
    thumb: "papaveri",
    body: [
      "Sono uscito dall'ospedale il 30 aprile. Avevo in tasca le chiavi di casa, una scatola di compresse, e un foglio piegato male con su scritto cosa devo mangiare e cosa no.",
      "Mio fratello mi ha chiesto dove volevo andare. Mi aspettavo di rispondere a casa. Invece mi è uscito: portami in mezzo a qualcosa di vivo.",
      "Abbiamo guidato fino a un campo che conoscevo da bambino. Era esploso di papaveri, di quel rosso che non riesco a guardare in foto senza pensare che qualcuno l'abbia ritoccato.",
      "Sono sceso dalla macchina. Ho aperto le braccia. Non perché volessi fare la foto - quella è venuta dopo - ma perché il petto mi tirava a stare così.",
      "Mi sono accorto che era la prima volta in mesi che respiravo davvero a fondo senza che mi facesse paura."
    ]
  },
  {
    slug: "il-giorno-della-diagnosi",
    date: "2025-11-12",
    title: "Il giorno della diagnosi",
    excerpt: "Era un martedì. Mi ricordo perché avevo in agenda \"comprare il caffè\" e non l'ho comprato.",
    tag: "dentro",
    accent: "var(--slate)",
    thumb: "diagnosi",
    body: [
      "Era un martedì. Mi ricordo perché avevo in agenda \"comprare il caffè\" e non l'ho comprato.",
      "L'ematologa mi ha detto la parola e poi è rimasta zitta. Per dare tempo a me, immagino. Io ho dato tempo a lei. Per un attimo l'ho guardata come si guarda qualcuno che ha sbagliato strada.",
      "Poi mi ha spiegato. Acuta. Linfoblastica. Si cura. Si può curare. Ha detto più volte si cura prima di dirmi quanto sarebbe stato lungo.",
      "Sono uscito, ho ripreso la macchina, e per due ore ho guidato senza una meta. Non ho pianto. Ho fatto la spesa. Mi sono accorto a casa che non avevo comprato il caffè.",
      "Quella sera ho scritto la prima riga di quello che adesso è questo blog. Non sapevo ancora che sarebbe diventato un blog. Sapevo solo che dovevo scrivere qualcosa, altrimenti la testa mi si rompeva."
    ]
  },
  {
    slug: "la-barba",
    date: "2025-12-04",
    title: "Una volta avevo la barba",
    excerpt: "Il nome del sito viene da qui. Tre settimane dopo l'inizio della chemio, ho preso la decisione di farlo io prima che lo facesse lei.",
    tag: "corpo",
    accent: "var(--mint)",
    thumb: "barba",
    body: [
      "Il nome del sito viene da qui. Una volta avevo la barba. Tipica barba folta, di chi non la cura ma se la tiene perché gli sta bene così.",
      "Tre settimane dopo l'inizio della chemio, una mattina, mi sono passato la mano sul mento e mi sono rimasti tre peli in palmo. Tre, contati. Allora ho preso la decisione di farlo io prima che lo facesse lei.",
      "Tagliarsi la barba da soli con un rasoio elettrico mentre piangi non è dignitoso come ce lo immaginiamo nei film. È ridicolo. Il bagno era pieno di peli. Mio fratello è entrato, ha visto la scena, e mi ha aiutato a finire. Non ha detto niente.",
      "Dopo, mi sono guardato allo specchio e per la prima volta in vita mia ho visto la forma esatta della mia mascella.",
      "Mi sono detto: ok. Adesso sei diverso. Va bene."
    ]
  },
  {
    slug: "cose-imparate-in-ospedale",
    date: "2026-01-22",
    title: "Cose che ho imparato in ospedale",
    excerpt: "Una lista lunga, scritta a pezzi in tre mesi. Niente di profondo. Solo cose che servono.",
    tag: "appunti",
    accent: "var(--slate)",
    thumb: "appunti",
    body: [
      "Una lista lunga, scritta a pezzi in tre mesi. Niente di profondo. Solo cose che servono.",
      "1. Porta sempre le ciabatte tue. Quelle dell'ospedale fanno male alle dita.",
      "2. Le tisane buone non esistono nelle macchinette. Falle portare da qualcuno.",
      "3. Il dolore della puntura la trentesima volta non è minore della prima. Bugia che ti raccontano.",
      "4. I medici di guardia dei weekend sono i più umani. Probabilmente perché non hanno fretta.",
      "5. Le persone che ti scrivono ogni giorno per i primi quindici giorni e poi spariscono non sono cattive persone. Sono solo persone.",
      "6. Le persone che non ti scrivono mai e poi un giorno si presentano con un libro sono il tuo nuovo metro di misura.",
      "7. Più è lungo il corridoio del reparto, più è facile contare i passi al ritorno.",
      "8. Il primo giorno in cui ti viene voglia di cucinare è il primo giorno in cui stai tornando."
    ]
  },
  {
    slug: "il-rumore-della-macchina",
    date: "2026-02-18",
    title: "Il rumore della macchina",
    excerpt: "Sei ore di trasfusione. Tre tubi. Una pompa che fa un click ogni dodici secondi. Li ho contati.",
    tag: "dentro",
    accent: "var(--slate)",
    thumb: "macchina",
    body: [
      "Sei ore di trasfusione. Tre tubi. Una pompa che fa un click ogni dodici secondi. Li ho contati.",
      "All'inizio il click ti dà fastidio. Poi non lo senti più. Poi, verso la quinta ora, ricomincia a darti fastidio e capisci che hai finito la batteria della pazienza.",
      "Ho provato a leggere. Ho provato a guardare un film. Alla fine ho solo guardato fuori dalla finestra. C'è un cortile interno con un albero che non so come si chiama, ma a metà marzo aveva fatto delle gemme rosa che mi sembravano un'esagerazione.",
      "Sto cercando di dire che a un certo punto, in mezzo a tutto questo macchinario, ho solo guardato un albero. E mi è bastato."
    ]
  }
];

const MONTHS = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];

function fmtDate(iso) {
  const d = new Date(`${iso}T00:00:00`);
  return `${String(d.getDate()).padStart(2, "0")} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function parseHash() {
  const parts = (window.location.hash || "#/").replace(/^#/, "").split("/").filter(Boolean);
  if (parts.length === 0) return { route: "home" };
  if (parts[0] === "blog" && parts[1]) return { route: "post", slug: parts[1] };
  if (parts[0] === "blog") return { route: "blog" };
  if (parts[0] === "argomenti") return { route: "argomenti" };
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
    <header className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between px-5 py-5 pointer-events-none sm:px-9 sm:py-7">
      <a href="#/" className={`font-datatype ${linkClass} pointer-events-auto text-[22px] sm:text-[26px] ${dark ? "text-white" : "text-[var(--ink)]"}`}>
        unavoltavevolabarba
      </a>
      <nav className="flex gap-3 pointer-events-auto sm:gap-7">
        {[
          ["#/", "Home", "home"],
          ["#/argomenti", "Argomenti", "argomenti"],
          ["#/blog", "Blog", "blog"],
          ["#/chi-sono", "Chi Sono", "chi-sono"],
          ["#/contact", "Contatti", "contact"]
        ].map(([href, label, name]) => (
          <a key={href} href={href} className={`font-datatype ${linkClass} text-[15px] sm:text-[22px] ${isActive(name) ? activeClass : ""}`}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Home() {
  return (
    <main className="fixed inset-0 overflow-hidden">
      <img
        className="hero-image absolute inset-0 h-full w-full object-cover"
        src={heroPoppies}
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      <div className="font-display absolute bottom-56 left-6 max-w-[360px] text-[18px] leading-snug text-white drop-shadow sm:left-9">
        musica, libri, videogiochi, zen, la mia malattia
    
      </div>

      <section className="absolute bottom-0 left-0 right-0 grid gap-3 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
        {POSTS.slice(0, 4).map((post) => (
          <a
            key={post.slug}
            href={`#/blog/${post.slug}`}
            className="glass-card flex min-h-24 items-stretch gap-3 p-3 text-white no-underline"
          >
            <div
              className="h-[72px] w-[72px] flex-shrink-0 overflow-hidden"
              style={{ background: post.accent }}
            >
              <Thumb type={post.thumb} />
            </div>
            <div className="font-display flex min-w-0 flex-1 flex-col justify-between">
              <div className="text-base leading-tight drop-shadow">
                {post.title}
              </div>
              <div className="flex justify-between gap-2 text-[13px] opacity-85">
                <span>LEGGI &rarr;</span>
                <span>{fmtDate(post.date)}</span>
              </div>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}

function BlogList() {
  const [selectedTag, setSelectedTag] = useState(null);

  const allTags = [...new Set(POSTS.map((p) => p.tag))];
  const filtered = selectedTag ? POSTS.filter((p) => p.tag === selectedTag) : POSTS;

  return (
    <main className="page-fade min-h-screen bg-[var(--paper)] pt-[110px]">
      <div className="mx-auto max-w-[980px] px-6 pb-28 sm:px-9">
        <div className="flex items-start justify-between gap-8">
          <div>
            <h1 className="font-display mb-2 text-[56px] leading-none">Blog</h1>
            <p className="mb-14 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
              appunti scritti dentro e fuori dall'ospedale.<br />
              niente schema. l'ordine è quando li ho scritti, non quando sono successi.
            </p>
          </div>

          <div className="shrink-0 pt-2 text-right">
            <div className="mb-3 text-[11px] uppercase tracking-widest text-[var(--soft-muted)]">Argomenti</div>
            <div className="flex flex-col items-end gap-2">
              {allTags.map((tag) => {
                const accent = POSTS.find((p) => p.tag === tag)?.accent;
                const active = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(active ? null : tag)}
                    className="font-display cursor-pointer border-0 bg-transparent p-0 text-right text-[15px] lowercase transition-opacity"
                    style={{ color: active ? accent : "var(--soft-muted)", opacity: active ? 1 : 0.7 }}
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
            <a
              key={post.slug}
              href={`#/blog/${post.slug}`}
              className={`blog-row grid gap-5 py-7 text-[var(--ink)] no-underline md:grid-cols-[120px_110px_1fr_80px] ${
                index === 0 ? "border-t border-[var(--ink)]" : "border-t border-[var(--line)]"
              }`}
            >
              <div className="h-[76px] w-[120px] overflow-hidden" style={{ background: post.accent }}>
                <Thumb type={post.thumb} />
              </div>
              <div className="pt-1 text-[13px] text-[var(--muted)]">
                {fmtDate(post.date)}
                <div className="mt-1 lowercase" style={{ color: post.accent }}>
                  // {post.tag}
                </div>
              </div>
              <div>
                <h2 className="font-display mb-2 text-3xl leading-none">{post.title}</h2>
                <p className="max-w-xl text-sm leading-relaxed text-[var(--body)]">{post.excerpt}</p>
              </div>
              <div className="font-display pt-2 text-right text-sm">LEGGI &rarr;</div>
            </a>
          ))}
          <div className="border-t border-[var(--line)]" />
        </section>
      </div>
    </main>
  );
}

function Argomenti() {
  const topics = [...new Set(POSTS.map((post) => post.tag))].map((tag) => {
    const posts = POSTS.filter((post) => post.tag === tag);
    return {
      tag,
      posts,
      accent: posts[0]?.accent || "var(--poppy)"
    };
  });

  return (
    <main className="page-fade min-h-screen bg-[var(--paper)] pt-[110px]">
      <div className="mx-auto max-w-[980px] px-6 pb-28 sm:px-9">
        <h1 className="font-display mb-2 text-[56px] leading-none">Argomenti</h1>
        <p className="mb-14 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
          i fili ricorrenti dei post: dentro, fuori, corpo, appunti.<br />
          scegli un argomento e riparti da lì.
        </p>

        <section className="grid gap-5 md:grid-cols-2">
          {topics.map((topic) => (
            <div key={topic.tag} className="border border-[var(--line)] p-6">
              <div className="mb-5 flex items-baseline justify-between gap-4 border-b border-[var(--line)] pb-4">
                <h2 className="font-datatype text-3xl lowercase" style={{ color: topic.accent }}>
                  {topic.tag}
                </h2>
                <span className="text-[13px] text-[var(--muted)]">
                  {topic.posts.length} {topic.posts.length === 1 ? "post" : "post"}
                </span>
              </div>

              <div className="flex flex-col">
                {topic.posts.map((post) => (
                  <a key={post.slug} href={`#/blog/${post.slug}`} className="blog-row border-b border-[var(--line)] py-4 text-[var(--ink)] no-underline last:border-b-0">
                    <div className="mb-1 text-[12px] text-[var(--muted)]">{fmtDate(post.date)}</div>
                    <div className="font-display text-2xl leading-tight">{post.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--body)]">{post.excerpt}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

function BlogPost({ slug }) {
  const index = POSTS.findIndex((post) => post.slug === slug);
  const post = POSTS[index];

  if (!post) {
    return (
      <main className="page-fade min-h-screen bg-[var(--paper)] pt-40">
        <div className="mx-auto max-w-3xl px-9">
          Post non trovato. <a href="#/blog">torna al blog &rarr;</a>
        </div>
      </main>
    );
  }

  const prev = POSTS[index + 1];
  const next = POSTS[index - 1];

  return (
    <main className="page-fade min-h-screen bg-[var(--paper)] pt-[110px]">
      <article className="mx-auto max-w-3xl px-6 pb-28 sm:px-9">
        <a href="#/blog" className="mb-10 inline-block text-[13px] text-[var(--muted)] no-underline">
          &larr; tutti i post
        </a>

        <div className="mb-5 flex items-center gap-4 text-[13px]">
          <span className="text-[var(--muted)]">{fmtDate(post.date)}</span>
          <span className="lowercase" style={{ color: post.accent }}>
            // {post.tag}
          </span>
        </div>

        <h1 className="font-display mb-10 text-[48px] leading-none sm:text-[56px]">{post.title}</h1>

        <div className="text-[15px] leading-7 text-[var(--body)]">
          {post.body.map((paragraph, i) => (
            <p key={i} className="mb-6">{paragraph}</p>
          ))}
        </div>

        <div className="mt-14 border-t border-dashed border-[var(--line)] pt-6 text-[15px]">- io</div>

        <nav className="mt-16 grid gap-4 sm:grid-cols-2">
          <div>
            {prev && <PostNav post={prev} label="← post precedente" />}
          </div>
          <div>
            {next && <PostNav post={next} label="post successivo →" align="right" />}
          </div>
        </nav>
      </article>
    </main>
  );
}

function PostNav({ post, label, align = "left" }) {
  return (
    <a href={`#/blog/${post.slug}`} className={`block border border-[var(--line)] p-5 text-[var(--ink)] no-underline ${align === "right" ? "text-right" : ""}`}>
      <div className="mb-2 text-xs text-[var(--muted)]">{label}</div>
      <div className="font-display text-xl leading-tight">{post.title}</div>
    </a>
  );
}

function ChiSono() {
  return (
    <main className="page-fade min-h-screen bg-[var(--paper-2)] pt-[110px]">
      <div className="mx-auto grid max-w-[1400px] lg:min-h-[calc(100vh-110px)] lg:grid-cols-2">
        <section className="px-6 py-14 sm:px-14 sm:py-16">
          <div className="max-w-[480px] space-y-5 text-[15px] leading-8">
            <h1 className="font-display mb-8 text-[56px] leading-none">
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
            <p className="pt-5">
              ciao<span className="text-[var(--poppy)]">@</span>
              unavoltavevolabarba<span className="text-[var(--poppy)]">.</span>
              it
            </p>
            <p className="pt-5">- io</p>
          </div>
        </section>
        <section className="relative min-h-[420px] overflow-hidden bg-[var(--slate)]">
          <img
            className="hero-image absolute inset-0 h-full w-full object-cover"
            src={heroPoppies}
            alt=""
          />
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
    <main className="page-fade min-h-screen bg-[var(--paper)] pt-[110px]">
      <div className="mx-auto max-w-3xl px-6 pb-28 sm:px-9">
        <h1 className="font-display mb-2 text-[56px] leading-none">Contact</h1>
        <p className="mb-12 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
          se mi vuoi scrivere due righe - anche solo per dire ciao - questo è il posto.<br />
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
              <div className="text-[13px] text-[var(--muted)]">oppure: ciao@unavoltavevolabarba.it</div>
              <button className="font-display bg-[var(--ink)] px-7 py-3 text-lg text-white" type="submit">
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
  if (route.route === "argomenti") page = <Argomenti />;
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
