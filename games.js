/*
  Falch Games: site content.
  Edit this file to change what the site says. Nothing else needs touching.

  To add a game: copy one object in GAMES, change the fields, save.
  Optional fields: gallery { folded, unfolded } shows a fold viewer in the detail view;
  video is a YouTube embed URL and adds a "Watch the trailer" button.
  - size:   "wide" (7 columns), "narrow" (5 columns) or "third" (4 columns)
  - status: "development" or "prototype" (add more in STATUS below)
  - folded / unfolded: optional. The "Folded / Unfolded" block in the detail view only shows when at least one is set.
  - released: the release date once there is one, as YYYY-MM-DD (2026-11-12). appStore: the App Store link once it is live.
  - updates: a list of { date, title, body } shown under Recent updates on the game's page.
  - legal:  { privacy, terms } page names if the game has its own; otherwise the site-wide ones are linked.
  - media:  an image in . Set pixel: true for pixel art so it stays crisp. Leave it out and the game gets a
            clean tile in its own color with a few plain 2D shapes (set shape: "circles", "squares", "bars", "diamonds"
            or "triangles") until it has a real screenshot.
*/

window.SITE = {
  name: "Falch Games",
  // The company that owns this website. Falch Games is its game studio. Shown in the hero, Studio section,
  // press kit and footer.
  legalName: "Falcione Productions, LLC",
  state: "Pennsylvania",
  // The one contact address used everywhere on the site.
  email: "support@falchgames.com",
  domain: "falchgames.com",
  year: 2026,
  // Newsletter: paste a form endpoint (Buttondown, Formspree, Mailchimp...) to collect
  // sign-ups for real. Leave empty and the form opens an email to you instead.
  newsletterAction: "",
  // Social links appear in the footer and press kit once you add a url.
  social: [
    // { label: "YouTube", url: "https://youtube.com/@falchgames" },
    // { label: "Instagram", url: "https://instagram.com/falchgames" },
  ],
};

window.STATUS = {
  development: { label: "In development", tone: "accent" },
  prototype: { label: "Early prototype", tone: "warm" },
};

/*
  The Studio page. Every statement here comes from the project documents or from facts the owner has confirmed.
  Leave something out rather than guess. Things still to add when the owner provides them: when the company was
  formed, which city it is based in, and the goals in the owner's own words.
*/
window.STUDIO = {
  intro: "Falch Games is the game studio of Falcione Productions, LLC. We make games for iPhone, iPad and iPhone Duo, and we publish every one of them under one name and one set of standards.",
  goals: [
    { title: "Games that feel at home on Apple devices", text: "Every game is designed for the screens it runs on: a quick, one-handed layout on iPhone, more room on iPad, and two screens working together on the iPhone Duo." },
    { title: "Fair to the people who play", text: "We say what each app costs and what its optional purchases include. Paid items never gate the core game, and where a game shows ads, rewarded ads are always your choice." },
    { title: "Made with care, from scratch", text: "We make our own code, art and audio, so each game has a consistent look, a small download and nothing borrowed that we cannot explain." },
    { title: "Honest about what exists", text: "A page says In development or Early prototype until a game is ready, and we do not show screenshots or features that are not real." },
  ],
  background: [
    "Falcione Productions, LLC is a limited liability company registered in the Commonwealth of Pennsylvania. It owns and operates this website and publishes games under the Falch Games name.",
    "The studio is currently developing five titles: Hatch & Smash, a kaiju collector; Cold Case, a detective roguelike; GameFold, a collection of eighteen classic board, card and casino games; Void Chain, a roguelike marble shooter; and Wavefold, a synthesizer. Each title's page lists the devices it supports and what stage it has reached.",
  ],
  organization: {
    intro: "The company is small and its structure is simple, so it is clear who is responsible for what.",
    levels: [
      { name: "Falcione Productions, LLC", text: "The company. A single-member limited liability company registered in Pennsylvania. It owns and operates this website and the apps." },
      { name: "Falch Games", text: "The game studio. This is the name players see on the App Store and on this website." },
      { name: "Each game", text: "Every game has its own written specification, automated tests, release checklist, privacy policy and support page." },
    ],
    responsibility: "Because the company has a single member, one person is accountable for product decisions, support replies, privacy requests and legal compliance. Everything sent to the support address is read by that person.",
  },
  howWeWork: [
    { title: "Specification first", text: "Each game starts as a written specification: its rules, its screens for every device size, its accessibility needs and what it will and will not do." },
    { title: "Tested rules and layouts", text: "Game rules and economies are covered by automated tests, and layouts are checked in Apple's simulators, including the iPhone Duo's folded and unfolded displays." },
    { title: "A release checklist", text: "Before a game is submitted we work through a checklist: store listing, age rating, privacy details, purchases, and the support and legal links." },
    { title: "Accessibility", text: "We design for Reduce Motion, Dynamic Type and VoiceOver, and treat accessibility as part of launching a game." },
    { title: "Privacy", text: "Each app has a privacy policy that says what it collects and why. This website has no accounts, no analytics and no advertising." },
    { title: "One place for help", text: "support@falchgames.com is the single address for every game, for purchases, privacy requests, press and partnerships." },
  ],
  intent: [
    "Our intent is to build a small catalogue of well-made games that people can trust: clear about what they cost, clear about what they collect, and clear about who makes them.",
    "This website is the public home of Falcione Productions, LLC. The Terms of Service, the Privacy Policy and Support are linked from every page and from every game.",
  ],
  details: [
    ["Legal name", "Falcione Productions, LLC"],
    ["Business type", "Single-member limited liability company"],
    ["Registered in", "Pennsylvania"],
    ["Game studio", "Falch Games"],
    ["Website", "falchgames.com"],
    ["Contact", "support@falchgames.com"],
    ["Devices", "iPhone, iPad and iPhone Duo"],
  ],
};

window.GAMES = [
  {
    id: "hatch-and-smash",
    released: "",   // write it as YYYY-MM-DD, e.g. "2026-11-12". Leave empty until it has a date: the page says "To be announced".
    appStore: "",   // the App Store link. Leave empty until the game is live: the page says "Coming to the App Store".
    updates: [
      { date: "2026-10-16", title: "Daily missions", body: "Three missions a day, one each for destroying, skill and combat, drawn from a pool of 28. Finish them for rewards, and a fresh set arrives the next day." },
      { date: "2026-10-14", title: "Ten kaiju at launch", body: "The launch roster is ten kaiju, all of them hatching from eggs, each with its own moves and forms." },
      { date: "2026-10-13", title: "Three cities to smash", body: "Downtown, the snowy Frostmoor and the desert Sunscar Basin. Only Downtown is open at first, and beating a city's boss opens the next." },
      { date: "2026-10-10", title: "Feeding and cleaning are gone", body: "There's no hunger, cleaning or starving in Hatch & Smash. Your kaiju simply looks a bit sadder the longer you're away, and a single visit cheers it up. Nothing you've earned is ever taken back." },
    ],
    color: "#f5b921",
    accent: "#8a5a00",
    gallery: { folded: "hatch-folded.png", unfolded: "hatch-unfolded.png" },
    name: "Hatch & Smash",
    tagline: "Raise a kaiju folded. Wreck a city unfolded.",
    status: "development",
    genre: "Kaiju collector and idle lab",
    platforms: "iPhone Duo, iPhone, iPad",
    size: "third",
    media: { src: "hatch-unfolded.png", alt: "A giant armored kaiju, Ferrox, smashing through an isometric city at dusk in Hatch & Smash.", pixel: true },
    summary:
      "A pixel-art kaiju collector. Hatch monsters from eggs and build up an idle lab on the folded screen, then unfold the phone, or tap SMASH, to send a kaiju through a city and flatten as much of it as it can. Designed for the iPhone Duo, and it also runs on iPhone and iPad.",
    features: [
      "Free to download. Paid items never gate core progress.",
      "Being away never removes coins, levels or kaiju. Your kaiju just gets lonely.",
      "Kaiju come in rarities, from Grey up to Galaxy, each with its own forms.",
      "Daily missions and Game Center leaderboards, with separate divisions per rarity.",
      "Hand-drawn pixel art in the style of a kaiju containment terminal.",
    ],
    folded: "Hatch eggs, collect earnings and check on your kaiju in a riveted isometric lab.",
    unfolded: "Take a kaiju into a city for a timed smash round on the full display.",
  },
  {
    id: "cold-case",
    pixelArt: true,
    released: "", appStore: "", updates: [
      { date: "2026-10-21", title: "Ten cases make a season", body: "A run is now a season of ten cases that ends in a finale boss. Higher Heat levels add harder rules for the whole season, and the daily case has a spoiler-free share card with streak freezes." },
      { date: "2026-10-21", title: "A cork board for big screens", body: "On a wide display such as the unfolded Duo or an iPad, evidence goes on a cork board. Drag a clue onto a suspect to pin it, and a note hangs from a string." },
      { date: "2026-10-21", title: "Pick your edge after every case", body: "After each case you choose one of three instincts, perks that last the rest of your run, or cash in for gold. There are 15 across three rarities, and owning three of one type switches on a bonus." },
    ],
    color: "#3d7bff",
    accent: "#1f5fd6",
    shape: "squares",
    name: "Cold Case",
    tagline: "Work the evidence. Break the suspect.",
    status: "development",
    genre: "Detective roguelike",
    platforms: "iPhone Duo, iPhone, iPad",
    size: "third",
    summary:
      "A detective roguelike where every case is procedurally generated. Work through evidence minigames to build your case, then face an interrogation boss round to close it. Designed for the iPhone Duo, and it also runs on iPhone and iPad.",
    features: [
      "Procedurally generated cases.",
      "Evidence minigames.",
      "Interrogation boss rounds.",
    ],
  },
  {
    id: "gamefold",
    released: "", appStore: "", updates: [],
    color: "#ff6a2b",
    accent: "#b8400f",
    shape: "diamonds",
    pixelArt: true,
    name: "GameFold",
    tagline: "Eighteen classic games for one foldable.",
    status: "development",
    genre: "Classic board, card and casino games",
    platforms: "iPhone Duo",
    size: "third",
    summary:
      "A collection of eighteen classic games for the iPhone Duo: six board games, six card games and six casino-style games. Play alone against the computer on the cover display, or open the phone and share the inner display with a second player. Because the casino games simulate gambling, GameFold is expected to be rated 18+. It is made for the iPhone Duo only.",
    features: [
      "Board: chess, checkers, go, backgammon, nine men's morris and mancala.",
      "Cards: gin rummy, cribbage, war, solitaire, hearts and euchre.",
      "Casino: slots, roulette, craps, video poker, baccarat and blackjack, with virtual chips only. There is no real money, nothing to buy and nothing to cash out.",
      "Play solo against the computer, or share the open display with a second player.",
      "Works offline, with no accounts, no ads, no tracking and no in-app purchases.",
      "Sound and music are made on the device and follow the silent switch.",
    ],
    folded: "Play alone against the computer on the cover display.",
    unfolded: "Share the large inner display with a second player, or sit facing each other.",
  },
  {
    id: "void-chain",
    released: "", appStore: "", updates: [],
    color: "#b26bff",
    accent: "#6d3fd1",
    shape: "circles",
    name: "Void Chain",
    tagline: "Clear the chain before it reaches the black hole.",
    status: "development",
    genre: "Roguelike marble shooter",
    platforms: "iPhone Duo, iPhone, iPad",
    size: "half",
    summary:
      "A chain of planets spirals toward a black hole, and you are the last probe in orbit. Fire planets into the chain, match three or more, and clear it before the void feeds. Every run is built from the relics you find along the way. Designed for the iPhone Duo, and it also runs on iPhone and iPad.",
    features: [
      "A roguelike run across eight sectors, from Mercury to Neptune, with boss fights on the way.",
      "Relics that change the rules: 33 of them, many built to work together.",
      "A comet shop between sectors for relics, upgrades and one-sector buffs, with rerolls.",
      "Gravity levels from calm to Event Horizon, and a seeded daily run with its own rule of the day.",
      "An archive that remembers your collection and best builds, and starlight to spend on permanent perks.",
      "Painterly art, haptics, controller support, a home-screen widget and iCloud sync.",
      "Free to play. Ads between runs can be removed with a one-time purchase, and rewarded ads are always your choice.",
    ],
    folded: "Play on the cover display.",
    unfolded: "Unfold it and the board spreads across both halves, even in the middle of a run.",
  },
  {
    id: "wavefold",
    released: "", appStore: "", updates: [],
    color: "#17c3b2",
    accent: "#00746d",
    shape: "bars",
    name: "Wavefold",
    tagline: "A synthesizer you can jam on, made for the fold.",
    status: "development",
    genre: "Synthesizer and music app",
    platforms: "iPhone Duo, iPhone, iPad",
    size: "half",
    summary:
      "A synthesizer for iPhone, iPad and the iPhone Duo that is fun to jam on and deep enough for producers. It has its own audio engine, a piano roll, a MIDI looper and a set of effects. It is made for the iPhone Duo's two displays, and it also runs on iPhone and iPad.",
    features: [
      "A piano roll with recording and a MIDI looper.",
      "An arpeggiator, delay and reverb, with a bitcrusher and flanger available in Pro.",
      "Its own audio engine, written from scratch with no third-party audio library.",
      "MIDI export is free. WAV export is part of Pro.",
      "Free to download, with an optional Pro subscription (monthly or yearly) for more sounds, extra effects and patterns, and unlimited saved sounds.",
    ],
    folded: "A compact layout made for the cover display and quick jamming.",
    unfolded: "The piano roll comes first, with Sound, FX, Arp and Loop windows opening beside it.",
  },
];
