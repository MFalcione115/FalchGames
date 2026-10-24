(function () {
  "use strict";

  var SITE = window.SITE, GAMES = window.GAMES, STATUS = window.STATUS, NOTES = window.NOTES || [];
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (id) { return document.getElementById(id); };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // Each game carries its own hue: --game is the bright colour, --game-deep a darker shade safe for text on white.
  function tint(node, g) {
    node.style.setProperty("--game", g.color);
    node.style.setProperty("--game-deep", g.accent);
  }

  function chip(status) {
    var s = STATUS[status] || { label: status, tone: "accent" };
    return el("p", "chip" + (s.tone === "warm" ? " chip--warm" : ""), s.label);
  }

  function image(media) {
    var img = new Image();
    img.src = media.src;
    img.alt = media.alt || "";
    img.decoding = "async";
    if (media.pixel) img.className = "px";
    if (media.pos) img.style.objectPosition = media.pos;
    return img;
  }

  function longDate(iso) {
    var d = new Date(iso + "T12:00:00");
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }

  // A game with no screenshot yet gets a few plain 2D shapes in its own color.
  var SVGNS = "http://www.w3.org/2000/svg";
  function shapeTile(g) {
    var wrap = el("span", "mark-tile");
    var svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("viewBox", "0 0 240 160");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.setAttribute("aria-hidden", "true");
    var add = function (tag, attrs, opacity) {
      var n = document.createElementNS(SVGNS, tag);
      Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
      n.setAttribute("fill", "#fff");
      n.setAttribute("fill-opacity", opacity);
      svg.appendChild(n);
    };
    switch (g.shape) {
      case "circles":
        add("circle", { cx: 98, cy: 82, r: 52 }, .92);
        add("circle", { cx: 150, cy: 82, r: 52 }, .5);
        add("circle", { cx: 124, cy: 82, r: 18 }, .95);
        break;
      case "squares":
        add("rect", { x: 66, y: 34, width: 92, height: 92, rx: 6 }, .92);
        add("rect", { x: 100, y: 52, width: 92, height: 92, rx: 6 }, .45);
        break;
      case "bars":
        add("rect", { x: 56, y: 36, width: 36, height: 88, rx: 5 }, .92);
        add("rect", { x: 102, y: 36, width: 36, height: 88, rx: 5 }, .65);
        add("rect", { x: 148, y: 36, width: 36, height: 88, rx: 5 }, .38);
        break;
      case "diamonds":
        add("polygon", { points: "92,80 130,36 168,80 130,124" }, .92);
        add("polygon", { points: "132,80 158,50 184,80 158,110" }, .45);
        break;
      default: // triangles
        add("polygon", { points: "74,126 120,40 166,126" }, .92);
        add("polygon", { points: "112,126 154,52 196,126" }, .45);
    }
    wrap.appendChild(svg);
    return wrap;
  }

  /* ---------- details shared by every page ---------- */
  ["mail", "press-mail"].forEach(function (id) {
    var a = $(id); if (a) a.href = "mailto:" + SITE.email;
  });
  if ($("year")) $("year").textContent = SITE.year;

  // social links appear once you add a url in games.js
  var social = (SITE.social || []).filter(function (s) { return s.url; });
  var footNav = $("foot-nav");
  if (footNav && social.length) {
    social.forEach(function (s) {
      var a = el("a", null, s.label);
      a.href = s.url; a.rel = "noopener"; a.target = "_blank";
      footNav.appendChild(a);
    });
  }

  /* ================= HOME PAGE ================= */
  var grid = $("grid");
  var byId = {};
  GAMES.forEach(function (g) { byId[g.id] = g; });

  if (grid) {
    GAMES.forEach(function (g, i) {
      var li = el("article", "card card--" + g.size);
      tint(li, g);
      var btn = el("a", "card__btn");
      btn.href = "game-" + g.id + ".html";

      var media = el("div", "card__media");
      if (g.media) {
        var img = image(g.media);
        img.alt = "";            // the title already names it; the detail view carries the full description
        if (i > 1) img.loading = "lazy";
        media.appendChild(img);
      } else {
        media.classList.add("is-mark");
        media.appendChild(shapeTile(g));
      }

      var text = el("div", "card__text");
      var row = el("div", "card__row");
      row.appendChild(chip(g.status));
      row.appendChild(el("span", "card__plat", g.platforms));
      text.appendChild(row);
      text.appendChild(el("h3", null, g.name));
      text.appendChild(el("p", "card__tag", g.tagline));

      btn.appendChild(media);
      btn.appendChild(text);
      li.appendChild(btn);
      grid.appendChild(li);
    });

    /* ---------- jump pills in the hero ---------- */
    var jump = $("jump");
    if (jump) {
      GAMES.forEach(function (g) {
        var a = el("a", "pill", g.name);
        a.href = "#" + g.id;
        a.style.setProperty("--game", g.color);
        jump.appendChild(a);
      });
      $("jump-wrap").hidden = false;
    }

    /* ---------- dev notes ---------- */
    var notes = $("notes-list");
    if (notes) {
      NOTES.slice(0, 3).forEach(function (n) {
        var a = el("article", "note");
        var match = GAMES.filter(function (g) { return g.name === n.game; })[0];
        if (match) tint(a, match);
        var meta = el("p", "note__meta");
        var t = el("time", null, longDate(n.date));
        t.dateTime = n.date;
        meta.appendChild(t);
        meta.appendChild(el("span", "note__game", n.game));
        a.appendChild(meta);
        a.appendChild(el("h3", null, n.title));
        a.appendChild(el("p", null, n.body));
        notes.appendChild(a);
      });
    }

    // Opening the sign-up from a link puts the cursor in the email box.
    window.addEventListener("hashchange", function () {
      if (location.hash === "#signup" && $("signup-email")) setTimeout(function () { $("signup-email").focus({ preventScroll: true }); }, 400);
    });

    /* ---------- newsletter ---------- */
    var form = $("signup");
    var msg = $("signup-msg");
    if (form) {
      if (SITE.newsletterAction) form.action = SITE.newsletterAction;
      form.addEventListener("submit", function (e) {
        if (SITE.newsletterAction) return;          // a real endpoint handles it
        e.preventDefault();
        var addr = $("signup-email").value.trim();
        if (!addr) return;
        location.href = "mailto:" + SITE.email +
          "?subject=" + encodeURIComponent("Keep me posted") +
          "&body=" + encodeURIComponent("Please add " + addr + " to the Falch Games launch list.");
        msg.textContent = "Your email app should open with a message ready to send. Send it to finish signing up.";
      });
    }

    /* ---------- the fold demo ---------- */
    var duo = $("duo");
    var caption = $("duo-caption");
    var buttons = document.querySelectorAll(".hero__demo .seg__btn");
    var CAPTIONS = {
      folded: "Hatch & Smash, folded. Hatch eggs and check in on your kaiju on the cover screen.",
      unfolded: "Hatch & Smash, unfolded. Your kaiju takes on a whole city.",
    };
    var autoTimer = null;

    var setState = function (state, instant) {
      if (instant) duo.classList.add("no-anim");
      duo.dataset.state = state;
      if (instant) { void duo.offsetWidth; duo.classList.remove("no-anim"); }
      caption.textContent = CAPTIONS[state];
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.set === state)); });
    };

    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        clearTimeout(autoTimer);                 // a person took over; stop the intro
        setState(b.dataset.set, reduceMotion);
      });
    });

    // Intro: start folded, then open once. With reduced motion, just show it open.
    if (!reduceMotion) {
      setState("folded", true);
      autoTimer = setTimeout(function () { setState("unfolded"); }, 900);
    }
  }

  /* ================= PRESS KIT ================= */
  var facts = $("fact-sheet");
  if (facts) {
    var rows = [
      ["Game studio", SITE.name + ", the game studio of " + SITE.legalName],
      ["Owner", SITE.legalName + ", a limited liability company registered in " + SITE.state],
      ["Website", SITE.domain],
      ["Platforms", "iPhone Duo, iPhone, iPad"],
      ["Games in development", String(GAMES.length)],
      ["Business model", "Free to download, with optional upgrades"],
      ["Press contact", SITE.email],
    ];
    social.forEach(function (s) { rows.push([s.label, s.url.replace(/^https?:\/\//, "")]); });
    rows.forEach(function (r) {
      var d = el("div");
      d.appendChild(el("dt", null, r[0]));
      d.appendChild(el("dd", null, r[1]));
      facts.appendChild(d);
    });

    var names = GAMES.map(function (g) { return g.name; });
    var list = names.slice(0, -1).join(", ") + ", and " + names[names.length - 1];
    $("copy-short").textContent =
      SITE.name + " is the game studio of " + SITE.legalName + ", making games built around the fold of the iPhone Duo. Every game is designed for two screens and is also complete on regular iPhones.";
    var long = $("copy-long");
    [
      SITE.name + " is the game studio of " + SITE.legalName + ", a limited liability company registered in " + SITE.state + ". This website is owned and operated by " + SITE.legalName + ". The studio makes games for the iPhone Duo, Apple's foldable, and designs each one around the fold: a quick, one-handed experience on the cover screen, and a deeper one on the large inner display. Every game also runs well on an ordinary iPhone or iPad.",
      "The studio builds its games from scratch, including custom audio engines and hand-made pixel and vector art. Games are free to download. Optional purchases sell time, convenience and style, never progress or exclusive power, and being away from a game never takes anything from the player.",
      "Games in development: " + list + ". For review access, interviews or higher-resolution art, contact " + SITE.email + ".",
    ].forEach(function (t) { long.appendChild(el("p", null, t)); });

    document.querySelectorAll(".copy__btn").forEach(function (b) {
      b.addEventListener("click", function () {
        var text = $(b.dataset.copy).innerText.trim();
        var done = function () {
          b.textContent = "Copied";
          setTimeout(function () { b.textContent = "Copy"; }, 1800);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, function () { b.textContent = "Select and copy"; });
        } else {
          b.textContent = "Select and copy";
        }
      });
    });

    var kit = $("kit-games");
    GAMES.forEach(function (g) {
      var a = el("article", "kit");
      a.id = "kit-" + g.id;
      tint(a, g);
      var thumb = el("div", "kit__thumb");
      if (g.media) {
        thumb.appendChild(Object.assign(image(g.media), { alt: g.media.alt, loading: "lazy" }));
      } else {
        thumb.classList.add("is-mark");
        thumb.appendChild(shapeTile(g));
      }
      var body = el("div", "kit__body");
      var head = el("div", "kit__head");
      head.appendChild(el("h3", null, g.name));
      head.appendChild(chip(g.status));
      body.appendChild(head);
      body.appendChild(el("p", "kit__tag", g.tagline));
      body.appendChild(el("p", null, g.summary));
      var meta = el("p", "kit__meta", g.genre + ". " + g.platforms + ".");
      body.appendChild(meta);

      var dl = el("p", "kit__dl");
      var files = g.gallery
        ? [["Folded screenshot", g.gallery.folded], ["Unfolded screenshot", g.gallery.unfolded]]
        : (g.media ? [["Key art", g.media.src]] : []);
      files.forEach(function (f) {
        var d = el("a", "kit__link", f[0] + " (" + f[1].split(".").pop().toUpperCase() + ")");
        d.href = f[1]; d.download = "";
        dl.appendChild(d);
      });
      var page = el("a", "kit__link", "Game page");
      page.href = "game-" + g.id + ".html";
      dl.appendChild(page);
      body.appendChild(dl);

      a.appendChild(thumb);
      a.appendChild(body);
      kit.appendChild(a);
    });
  }
})();
