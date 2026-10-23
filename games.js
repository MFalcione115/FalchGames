/*
  Falch Games: site content.
  Edit this file to change what the site says. Nothing else needs touching.

  To add a game: copy one object in GAMES, change the fields, save.
  Optional fields: gallery { folded, unfolded } shows a fold viewer in the detail view;
  video is a YouTube embed URL and adds a "Watch the trailer" button.
  - size:   "wide" (7 columns), "narrow" (5 columns) or "third" (4 columns)
  - status: "development" or "prototype" (add more in STATUS below)
  - folded / unfolded: optional. The "Folded / Unfolded" block in the detail view only shows when at least one is set.
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

/* Short dev notes for the home page. Keep 3 fresh ones; delete old ones rather than letting them go stale. */
window.NOTES = [
  {
    date: "2026-10-22",
    game: "Film Strip",
    title: "Film Strip now makes a poster of your month",
    body: "On the first of each month Film Strip can lay out up to twenty of your frames, spread across the whole month, with your stats underneath. It's drawn at story size, so it's ready to share.",
  },
  {
    date: "2026-10-21",
    game: "Film Strip",
    title: "Film Strip is being laid out for every posture of the Duo",
    body: "Open flat, the Album shows your days beside a large photo. Half-folded like a laptop, the photo stands above the crease and your controls lie flat below it, so nothing sits on the fold.",
  },
  {
    date: "2026-10-10",
    game: "Hatch & Smash",
    title: "We removed feeding and cleaning from Hatch & Smash",
    body: "There's no hunger, cleaning or starving in Hatch & Smash. Your kaiju simply looks a bit sadder the longer you're away, and a single visit cheers it up. Nothing you've earned is ever taken back.",
  },
];

window.STATUS = {
  development: { label: "In development", tone: "accent" },
  prototype: { label: "Early prototype", tone: "warm" },
};

window.GAMES = [
  {
    id: "hatch-and-smash",
    color: "#f5b921",
    accent: "#8a5a00",
    gallery: { folded: "hatch-folded.png", unfolded: "hatch-unfolded.png" },
    name: "Hatch & Smash",
    tagline: "Raise a kaiju folded. Wreck a city unfolded.",
    status: "development",
    genre: "Kaiju collector and idle lab",
    platforms: "iPhone Duo, iPhone, iPad",
    size: "wide",
    media: { src: "hatch-unfolded.png", alt: "A small pink kaiju walking down an isometric city street in Hatch & Smash.", pixel: true },
    summary:
      "A pixel-art kaiju collector. Hatch monsters from eggs and build up an idle lab on the folded screen, then unfold the phone, or tap SMASH, to send a kaiju through a city and flatten as much of it as it can.",
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
    id: "sketch-relay",
    color: "#ff4f6d",
    accent: "#c2203f",
    shape: "circles",
    name: "Sketch Relay",
    tagline: "Pass the phone. Draw it. Shout the answer.",
    status: "prototype",
    genre: "Party drawing game",
    platforms: "iPhone Duo, iPhone, iPad",
    size: "narrow",
    summary:
      "A pass-the-phone party game in the spirit of Pictionary. One player draws a secret word against the clock while everyone else shouts guesses, then the phone moves to the next person. Propped half-folded, the Duo stands like a tiny laptop.",
    features: [
      "Pass the phone, draw, guess, score.",
      "Eight-color palette with undo and clear.",
      "Playable from setup to scoreboard in the current prototype.",
    ],
    folded: "Shows the group what's being drawn.",
    unfolded: "The drawer's screen, with the secret word and canvas.",
  },
  {
    id: "cold-case",
    color: "#3d7bff",
    accent: "#1f5fd6",
    shape: "squares",
    name: "Cold Case",
    tagline: "Work the evidence. Break the suspect.",
    status: "development",
    genre: "Detective roguelike",
    platforms: "iPhone Duo, iPhone, iPad",
    size: "narrow",
    summary:
      "A detective roguelike where every case is procedurally generated. Work through evidence minigames to build your case, then face an interrogation boss round to close it.",
    features: [
      "Procedurally generated cases.",
      "Evidence minigames.",
      "Interrogation boss rounds.",
    ],
  },
  {
    id: "film-strip",
    color: "#17c3b2",
    accent: "#00746d",
    shape: "bars",
    name: "Film Strip",
    tagline: "Six moments a day. One film strip.",
    status: "development",
    genre: "Daily photo app",
    platforms: "iPhone Duo, iPhone, iPad",
    size: "wide",
    summary:
      "A daily photo app. Six random 30-minute windows open between 7 AM and 11 PM, and you take one square photo in each, with a vintage film look built in. At midnight the day develops into a 35 mm strip in your Album.",
    features: [
      "Choose a film each morning. A free film is included, with more as one-time purchases.",
      "Review and retake before you save. A window you miss is a lost frame.",
      "Friends: share your strips with people you invite, with likes and comments.",
      "Photos stay on your device and in your own iCloud. No accounts to make.",
      "Album calendar and search, monthly recaps, and a widget for the next frame.",
    ],
    folded: "A square camera and your day's strip, in one hand.",
    unfolded: "The Album beside a large photo, and a half-folded laptop layout with the controls below the crease.",
  },
  {
    id: "comic-manga-reader",
    color: "#22d67a",
    accent: "#0c7a38",
    shape: "diamonds",
    name: "Comic & Manga Reader",
    tagline: "Two pages, side by side, like the real thing.",
    status: "development",
    genre: "Comic and manga reader (working title)",
    platforms: "iPhone Duo, iPhone, iPad",
    size: "wide",
    summary:
      "A reader built around the Duo's two-page spread, for comics and manga. Unfolded, the phone shows an open book. The name is a working title.",
    features: [
      "A true two-page spread when the Duo is open.",
      "Made for both comics and manga.",
    ],
    unfolded: "Two pages side by side across the fold, the way the book was printed.",
  },
  {
    id: "vhs-duo-player",
    color: "#b26bff",
    accent: "#6d3fd1",
    shape: "triangles",
    name: "VHS Duo Player",
    tagline: "A retro VHS-style video player for the Duo.",
    status: "development",
    genre: "Retro video player",
    platforms: "iPhone Duo",
    size: "narrow",
    summary:
      "A retro video player styled after VHS tape, made for the Duo.",
    features: [
      "VHS-style look: scanlines, tracking and an on-screen display.",
      "Designed for the Duo's two screens.",
    ],
  },
];
