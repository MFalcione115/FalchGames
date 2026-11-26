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
  - privacy: each game's privacy policy is written from window.PRIVACY at the bottom of this file (privacy-<id>.html).
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
  domain: "www.falchgames.com",
  year: 2026,
  // Social links appear in the footer and press kit once you add a url.
  social: [
    // { label: "YouTube", url: "https://youtube.com/@falchgames" },
    // { label: "Instagram", url: "https://instagram.com/falchgames" },
  ],
};

window.STATUS = {
  live: { label: "On the App Store", tone: "accent" },
  soon: { label: "Coming soon", tone: "warm" },
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
    "The studio is working on six titles: Hatch & Smash, a kaiju collector; Dungeon Crawler, a first-person pixel roguelike; Cold Case, a detective roguelike; GameFold, a collection of eighteen classic board, card and casino games; Void Chain, a roguelike marble shooter; and Wavefold, a synthesizer. Each title's page lists the devices it supports and what stage it has reached.",
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
    ["Trade name", "Falch Games, a fictitious name registered in Pennsylvania"],
    ["Game studio", "Falch Games"],
    ["Website", "www.falchgames.com"],
    ["Contact", "support@falchgames.com"],
    ["Devices", "iPhone, iPad and iPhone Duo"],
  ],
};

window.GAMES = [
  {
    id: "hatch-and-smash",
    released: "2026-11-17",   // write it as YYYY-MM-DD, e.g. "2026-11-12". Leave empty until it has a date: the page says "To be announced".
    appStore: "https://apps.apple.com/us/app/hatch-smash/id6833575147",   // the App Store link. Leave empty until the game is live: the page says "Coming to the App Store".
    updates: [
      { date: "2026-11-17", title: "Now on the App Store", body: "Hatch & Smash is available to download on the App Store in the United States." },
      { date: "2026-10-16", title: "Daily missions", body: "Three missions a day, one each for destroying, skill and combat, drawn from a pool of 28. Finish them for rewards, and a fresh set arrives the next day." },
      { date: "2026-10-14", title: "Ten kaiju at launch", body: "The launch roster is ten kaiju, all of them hatching from eggs, each with its own moves." },
      { date: "2026-10-13", title: "Three cities to smash", body: "Downtown, the snowy Frostmoor and the desert Sunscar Basin. Only Downtown is open at first, and beating a city's boss opens the next." },
      { date: "2026-10-10", title: "Feeding and cleaning are gone", body: "There's no hunger, cleaning or starving in Hatch & Smash. Your kaiju simply looks a bit sadder the longer you're away, and a single visit cheers it up. Nothing you've earned is ever taken back." },
    ],
    upcoming: {
      version: "1.0.2",
      label: "Coming soon",
      note: "Version 1.0.2 is not on the App Store yet. These changes and screenshots are a preview of it.",
      items: [
        "New Smash menus: a side bar with Missions, Style, Store and Options, a cleaner Kaiju panel and a big Start Smashing key.",
        "Switch Kaiju from the cage or the Smash menu.",
        "Fold toggle for foldable iPhones: folding switches the game, or the phone plays like a regular iPhone.",
        "Blast-door transition between the two modes.",
        "Move and resize the Smash controls with a layout editor.",
        "New pink Kitty Parlor room with a matching HUD, frame and heart tap effect.",
        "Two new eggs, Scout and Warden, with updated egg prices and odds.",
        "New Opal rarity, for 14 tiers.",
        "Prices on every shop tile, fewer pop-ups, one-tap vault upgrades.",
        "Cleaner landscape layouts on iPhone, iPad and iPhone Duo.",
        "One leaderboard set for everyone.",
        "Bug fixes and polish.",
      ],
      shots: [
        ["media/hatch-and-smash-1.0.2/iphone_duo-01_fold_hatch.webp", 619, 900, "Fold it, hatch it: a golden Kaiju in a wooden lab room on the folded screen."],
        ["media/hatch-and-smash-1.0.2/iphone_duo-02_unfold_smash.webp", 1279, 900, "Unfold it, smash it: an ice-blue Kaiju firing beams across the desert city."],
        ["media/hatch-and-smash-1.0.2/iphone_duo-03_giant_bosses.webp", 1279, 900, "Beat giant bosses: a Kaiju facing the Wrecking Titan by the water."],
        ["media/hatch-and-smash-1.0.2/iphone_duo-04_grow.webp", 619, 900, "Grow your Kaiju: an ice-blue Kaiju in a steel containment lab."],
        ["media/hatch-and-smash-1.0.2/iphone_duo-05_three_cities.webp", 1279, 900, "Three cities to flatten: a Kaiju smashing through the snowy city."],
        ["media/hatch-and-smash-1.0.2/iphone_duo-06_pick_your_room.webp", 619, 900, "Pick your room: a Kaiju in the pink Kitty Parlor room."],
        ["media/hatch-and-smash-1.0.2/iphone_duo-07_combos.webp", 1279, 900, "Chain huge combos: a Legend combo in the desert city."],
        ["media/hatch-and-smash-1.0.2/iphone_duo-08_idle.webp", 619, 900, "Coins while you're away: a purple Kaiju in a furnace room."],
        ["media/hatch-and-smash-1.0.2/iphone_duo-09_pick_your_kaiju.webp", 1279, 900, "Pick your Kaiju: the new Smash menu with side bar and Start Smashing key."],
        ["media/hatch-and-smash-1.0.2/iphone_duo-10_rare.webp", 619, 900, "Collect rare Kaiju: a gold and black Kaiju in a dark lab."],
        ["media/hatch-and-smash-1.0.2/ipad_13-01_hatch_it.webp", 675, 900, "iPad: Hatch it, grow it."],
        ["media/hatch-and-smash-1.0.2/ipad_13-04_grow.webp", 675, 900, "iPad: Grow your Kaiju."],
        ["media/hatch-and-smash-1.0.2/ipad_13-06_pick_your_room.webp", 675, 900, "iPad: Pick your room."],
        ["media/hatch-and-smash-1.0.2/ipad_13-08_idle.webp", 675, 900, "iPad: Coins while you're away."],
        ["media/hatch-and-smash-1.0.2/ipad_13-10_rare.webp", 675, 900, "iPad: Collect rare Kaiju."],
      ],
    },
    faq: [
      ["What is Hatch & Smash?", "A free pixel-art Kaiju pet, idle economy and city destruction game with two modes. In Hatch mode you hatch eggs, tap for coins and raise your Kaiju. In Smash mode you send it rampaging through an isometric city against the clock."],
      ["What devices does it run on?", "iPhone and iPad, including foldable iPhones such as the iPhone Duo. On a foldable iPhone, folded is Hatch mode and unfolded is Smash mode. Other iPhones and iPad switch with one key."],
      ["Is it free? Do I have to watch ads?", "It is free to download and play, and nothing you can buy is required to progress. There are no forced ads. Rewarded videos are optional, and declining never takes anything away. In-app purchases are optional too."],
      ["What happens while I'm away?", "Your contracts keep earning coins up to your vault's limit, which you can upgrade. Your Kaiju may look sad, but that never costs you coins, XP, levels or Kaiju."],
      ["How do I restore purchases or move to a new phone?", "Tap RESTORE PURCHASES in the store or in the game's settings. If iCloud backup is on, the game offers to restore your progress on a new device."],
      ["How do I get help?", "Email support@falchgames.com with your device, iOS version and what happened."],
    ],
    color: "#f5b921",
    accent: "#8a5a00",
    gallery: { folded: "hatch-folded.png", unfolded: "hatch-unfolded.png" },
    name: "Hatch & Smash",
    tagline: "Hatch it. Grow it. Smash it.",
    status: "live",
    genre: "Kaiju pet, idle economy and city destruction",
    platforms: "iPhone Duo, iPhone, iPad",
    size: "third",
    media: { src: "hatch-unfolded.png", alt: "A giant armored kaiju, Ferrox, smashing through an isometric city at dusk in Hatch & Smash.", pixel: true },
    summary:
      "A free pixel-art Kaiju pet, idle economy and city destruction game. On a foldable iPhone, folded is Hatch mode and unfolded is Smash mode; other iPhones and iPad switch with one key. Designed for the iPhone Duo, and it also runs on iPhone and iPad.",
    features: [
      "Free to download, with optional in-app purchases (gems, boosts and cosmetics). Optional rewarded videos only, no forced ads.",
      "10 Kaiju: Carapex, Gorrok, Arachnyx, Hydrake, Serpexa, Mammorex, Vespera, Ignarex, Ferrox and Geodrax.",
      "A free starter egg and 10 eggs to buy, hatching in 30 minutes to 7 days. Odds are shown before you buy.",
      "14 rarity tiers and 24 contracts.",
      "Three cities, Downtown, Frostmoor and Sunscar Basin, each with a boss.",
      "Daily missions, goals, a login streak, the Kaiju-dex and room decorating.",
      "Game Center leaderboards and achievements, with controller and keyboard support.",
      "Neglect never takes anything away.",
    ],
    folded: "Hatch mode: hatch eggs, tap for coins and raise your Kaiju in its lab.",
    unfolded: "Smash mode: send your Kaiju through a city against the clock.",
  },
  {
    id: "dungeon-crawler",
    path: "dungeon-crawler",   // this game has its own pages at /dungeon-crawler/ (see tools/dungeon_crawler.py)
    released: "", updates: [],
    appStore: "",   // paste the App Store link here once the game is live
    // News for /dungeon-crawler/updates, newest first. To add one, copy a block to the top of this list.
    posts: [
      {
        label: "1.0, at launch",
        title: "The whole dungeon",
        body: [
          "Five acts, with Vorrakesh the Eclipse King at the end of them.",
          "Six heroes, the camp and its expeditions, and travellers who come to trade.",
          "And an ending that hints at what comes next: a red planet drifting toward the Earth.",
        ],
      },
    ],
    later: ["The game coming to more devices."],
    color: "#c8921f",
    accent: "#7a0f22",
    shape: "diamonds",
    media: { src: "media/dungeon-crawler/card.webp", alt: "Dungeon Crawler: the title over the Eclipse King's hall.", pixel: true },
    name: "Dungeon Crawler",
    storeName: "Dungeon Crawler: Offline RPG",
    tagline: "Swipe Combat Pixel Roguelike",
    status: "soon",
    genre: "First-person pixel roguelike",
    platforms: "iPhone Duo, iPhone, iPad",
    size: "third",
    summary:
      "A retro first-person dungeon crawler with fast swipe combat. The Eclipse King has bound the moon before the sun, and six heroes go down into his dungeon to end it. Free, with ads, and it plays offline. Made for the iPhone Duo, where you unfold to fight and fold to rest at camp, and it also runs on iPhone and iPad.",
    features: [],
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
    platforms: "iPhone Duo, iPhone",
    size: "third",
    summary:
      "A chain of planets spirals toward a black hole, and you are the last probe in orbit. Fire planets into the chain, match three or more, and clear it before the void feeds. Every run is built from the relics you find along the way. Designed for the iPhone Duo, and it also runs on iPhone.",
    features: [
      "A roguelike run across eight sectors, from Mercury to Neptune, with boss fights on the way.",
      "Relics that change the rules: 33 of them, many built to work together.",
      "A comet shop between sectors for relics, upgrades and one-sector buffs, with rerolls.",
      "Gravity levels from calm to Event Horizon, and a seeded daily run with its own rule of the day.",
      "An archive that remembers your collection and best builds, and starlight to spend on permanent perks.",
      "Painterly art, haptics, controller support, a home-screen widget and iCloud sync.",
      "Free to play. Ads between runs can be removed with an optional monthly subscription ($2.99 a month in the US, renews automatically, cancel any time in your Apple Account settings), and rewarded ads are always your choice.",
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
    size: "third",
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

/*
  Per-game privacy policies (written into privacy-<id>.html by the build).
  Drafted from each game's own project documents. Every statement must stay true to what the app does:
  re-check these against the app, its privacy manifest and its App Store privacy answers before each release.
  Each entry: short (the short version), sections [{ h, p: [paragraphs], ul: [bullets] }].
*/
window.PRIVACY = {
  "hatch-and-smash": {
    updated: "November 18, 2026",
    note: "Hatch & Smash is available on the App Store in the United States.",
    short: "Hatch & Smash has no account system and no servers of ours, and we do not sell your data. The only third party that collects data for its own purposes is Google AdMob, which runs the optional rewarded videos.",
    sections: [
      { h: "What stays on your device", p: ["Your game progress (coins, gems, Kaiju, eggs, missions, settings and purchase records) is saved on your device. We never receive it."] },
      { h: "iCloud backup", p: ["If you are signed in to iCloud and leave iCloud backup switched on in the game, a compact copy of your progress is stored in your own iCloud account using Apple's iCloud key-value storage, so you can restore it on a new device. We cannot see or access it. You can turn it off in the game's settings and delete it in iOS Settings under your name, iCloud, Manage Storage."] },
      { h: "Game Center", p: ["If you are signed in to Game Center, the game submits your scores and statistics to Apple's Game Center leaderboards and shows your Game Center alias and avatar in the game. This is handled by Apple under Apple's privacy policy, and we do not receive your name or contact details. You can sign out of Game Center in iOS Settings."] },
      { h: "Purchases", p: ["Gems, a starter bundle and an Auto-Tapper can be bought through the App Store. Apple processes the payment and we never see your card or Apple Account details. The game receives a verified record that a purchase was made so it can deliver your items. The odds of random eggs are shown before you buy."] },
      { h: "Notifications", p: ["The game can send local notifications, for example when an egg is ready or your energy is full. They are scheduled on your device, not sent from a server, and you can turn them off in the game or in iOS Settings."] },
      { h: "Advertising (Google AdMob)", p: [
        "The game offers optional rewarded videos, shown only when you choose to watch one. They are provided by Google AdMob. When ads are loaded or shown, Google and its partners may collect and use data such as your device's advertising identifier (only if you allow tracking), IP address, approximate location, device and app information, ad interactions and diagnostics, to deliver, measure and personalise ads and to prevent fraud. This can include tracking across apps and websites owned by other companies.",
        "Where Google requires it, the game shows Google's consent form before any ads are used, and you can change your choice in the game's ad privacy choices. On iOS you are asked whether the app may track you. If you say no, ads can still appear but are less personalised, and the game plays and rewards exactly the same. You can change this in iOS Settings under Privacy & Security, Tracking."] },
      { h: "Where the game is available", p: ["Hatch & Smash is available in the United States only, and this policy is written for US law."] },
      { h: "How long we keep data", p: ["We do not keep data about you. Data on your device stays until you delete the game. iCloud backups stay until you delete them in iOS Settings. Apple and Google keep the data they handle under their own policies."] },
      { h: "Children", p: ["Hatch & Smash is not directed at children under 13, and we do not knowingly collect personal information from them."] },
    ],
  },

  "cold-case": {
    short: "Cold Case does not collect, store on a server, share or sell any personal information. It has no accounts, no advertising, no analytics, no tracking and no in-app purchases, and it needs no internet connection.",
    sections: [
      { h: "What the app stores on your device", p: ["To let you continue playing, the app saves the following only on your device:"], ul: [
        "Your game progress: rank and experience, seasons won, banked gold, tools you bought, unlocked difficulty and themes, daily case results and streak, and which tips you have seen.",
        "Your settings: theme, sound, music, haptics and accessibility choices.",
        "A saved run in progress, so you can leave and come back.",
        "How long your recent cases took, a number shown in the app's settings and never sent anywhere."],
        after: "This data stays in the app's private storage and is not sent to us or to anyone else. If you back up your device with iCloud or your computer, Apple may include this app data in that backup under Apple's own privacy terms. Deleting the app deletes this data." },
      { h: "What the app does not do", ul: [
        "It does not connect to the internet.",
        "It does not ask for or use your name, email, contacts, photos, microphone, camera, location or advertising identifier.",
        "It does not use third-party code, analytics, crash reporters or advertising networks.",
        "It does not track you across other companies' apps or websites."] },
      { h: "Sharing your daily result", p: ["The daily case has a Share Result button. When you tap it, iOS shows its standard share sheet with a short text result (day number, grade, confidence and streak). Where that text goes is decided by you and the app you choose to share with. We never receive it."] },
      { h: "Children", p: ["Cold Case is not directed at children under 13 and collects no information from anyone, including children."] },
    ],
  },

  "gamefold": {
    short: "GameFold collects no data and makes no network connections. It has no accounts, ads, analytics, tracking or in-app purchases.",
    sections: [
      { h: "What stays on your device", p: ["GameFold keeps your chip balance and your appearance choice on your device, in the app's own storage. We never receive them. Deleting the app deletes them."] },
      { h: "What the app does not do", ul: [
        "It has no accounts or sign-in.",
        "It does not connect to the internet or load anything from a server.",
        "It has no ads, analytics or tracking tools, and it reads no advertising identifier.",
        "It has no in-app purchases and no way to pay for anything.",
        "Its sound and music are generated on your device. It does not record audio."] },
      { h: "Virtual chips", p: ["The casino-style games use virtual play-money chips only. Chips cannot be bought, have no cash value and cannot be redeemed for anything. Because these games simulate gambling, GameFold is expected to be rated 18+."] },
      { h: "Children", p: ["GameFold is not made for children, is expected to carry an 18+ age rating, and collects no information from anyone."] },
    ],
  },

  "void-chain": {
    updated: "November 18, 2026",
    short: "Void Chain has no account system and no servers of ours, and we do not sell your data. The ads in the game are provided by Google, which collects some data to show and measure them.",
    sections: [
      { h: "What stays on your device", p: ["Your progress (your archive, relic collection, best builds, logbook, starlight and settings) is saved on your device. A home-screen widget reads a few details, such as the daily rule, on your device only. We never receive any of it."] },
      { h: "iCloud sync", p: ["If you are signed in to iCloud, the game syncs your progress between your devices using Apple's iCloud key-value storage, in your own iCloud account. We cannot see or access it. You can turn sync off in the game and delete the data in iOS Settings under your name, iCloud, Manage Storage."] },
      { h: "Game Center", p: ["If you are signed in to Game Center, the game submits your best scores to Apple's Game Center leaderboards. This is handled by Apple under Apple's privacy policy, and we do not receive your name or contact details."] },
      { h: "Advertising (Google Mobile Ads)", p: [
        "Void Chain is free to play and shows ads between runs, plus rewarded ads that you always choose to watch. The ads are provided by Google. When ads are loaded or shown, Google may collect data such as your device identifier, advertising data, how you interact with ads, your approximate location (worked out from your IP address), and crash and performance data about the ad software, to deliver and measure ads, to keep the ad software working and to prevent fraud. We do not link that data to you. Google describes what it collects in its Mobile Ads data disclosure and its own privacy policy.",
        "Where the law requires it, the game shows Google's consent form before any ads are used. As designed, the game does not ask to track you across other companies' apps and websites. If that changes, we will update this policy first."] },
      { h: "Purchases", p: ["An optional subscription, Remove ads, stops the between-run ads for as long as it is active. It costs $2.99 a month in the United States (the price may differ in other countries) and renews automatically each month until you cancel it. It is made through the App Store: Apple processes the payment and we never see your card or Apple Account details. All the app learns from Apple is whether the subscription is active. You can cancel or manage it at any time in your Apple Account settings (Settings, your name, Subscriptions), or from the Manage subscription link in the game's Settings."] },
      { h: "How long we keep data", p: ["We do not keep data about you. Data on your device stays until you delete the game. iCloud data stays until you delete it. Apple and Google keep the data they handle under their own policies."] },
      { h: "Children", p: ["Void Chain is not directed at children under 13, and we do not knowingly collect personal information from them."] },
    ],
  },

  "wavefold": {
    short: "Wavefold does not collect, store on a server, share or sell any personal information. It has no accounts, no ads, no analytics and no tracking.",
    sections: [
      { h: "What stays on your device", p: ["Your projects, patterns, voice recordings, sounds, effects settings and options are saved only on your device, in the app's own storage. We cannot see them. If you delete the app, they are deleted with it, unless you exported them first."] },
      { h: "MIDI and Bluetooth", p: ["If you connect a MIDI keyboard, controller or another app, Wavefold exchanges MIDI notes and clock signals with it on your device. If you connect a Bluetooth MIDI device, the app uses Bluetooth only for that. None of this is sent to us or anyone else."] },
      { h: "iCloud", p: ["If you are signed in to iCloud, Wavefold keeps your projects and voice recordings in your own iCloud Drive, so they are on all your devices. They are stored in your private iCloud account, under Apple's terms and privacy policy, and we cannot see or access them. You can turn this off in the app's settings, and your projects then stay on the device only."] },
      { h: "What we do not collect", ul: [
        "No account or sign-in is needed, and none exists.",
        "No analytics, advertising or tracking tools are used, and no advertising identifier is read.",
        "The app does not use your camera, contacts, photos or location.",
        "The microphone is used only while you record onto a voice track, and only after you allow it. The sound is saved on your device as part of your project and is never sent to us or anyone else. You can turn the permission off at any time in iOS Settings.",
        "The app does not connect to any server run by us."] },
      { h: "Files you export", p: ["When you export audio or MIDI, the file is made on your device and handed to the iOS share sheet. Where it goes next (Files, AirDrop, Messages or another app) is your choice and is governed by that app's own policy."] },
      { h: "Wavefold Pro subscriptions", p: ["Subscriptions are sold and managed by Apple through the App Store. Apple handles your payment and billing details, and we never receive your name, card or Apple Account details. The app only asks the App Store whether a subscription is active on your Apple Account."] },
      { h: "Children", p: ["Wavefold collects no personal information from anyone, including children."] },
    ],
  },
};
