(function () {
  "use strict";

  // Everything the pages say is written into the HTML by tools/build_game_pages.py, so it works without
  // JavaScript. This file only adds the self-playing fold demo on the home page and the Copy buttons on the press page.
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (id) { return document.getElementById(id); };

  /* ---------- the fold demo ---------- */
  // The phone folds and unfolds by itself and steps through the games listed in data-games. Each game shows its inner
  // screenshot unfolded and its cover screenshot folded. A screen is only swapped while it is out of sight.
  var duo = $("duo");
  if (duo) {
    var games = [];
    try { games = JSON.parse(duo.dataset.games || "[]"); } catch (err) { games = []; }
    var caption = $("duo-caption");
    var pauseBtn = $("duo-pause");
    var buttons = document.querySelectorAll(".hero__demo .seg__btn[data-set]");
    var HOLD_OPEN = 4200, HOLD_CLOSED = 3600;
    var cur = 0, state = "unfolded", timer = null, paused = false, inView = true, holdGame = false;

    games.forEach(function (g) {                    // warm the cache so a swap never flashes
      [g.unfolded, g.folded].forEach(function (src) {
        var im = new Image();
        im.src = src;
        if (im.decode) im.decode().catch(function () {});
      });
    });

    var say = function () {
      var g = games[cur];
      caption.textContent = "";
      var a = document.createElement("a");
      a.href = "game-" + g.id;
      a.textContent = g.name;
      caption.appendChild(a);
      caption.appendChild(document.createTextNode(state === "folded" ? ", folded: the cover display." : ", unfolded: the inner display."));
    };
    var showInner = function () {
      duo.style.setProperty("--inner", "url('" + games[cur].unfolded + "')");
      duo.dataset.px = games[cur].px ? "1" : "0";
    };
    var showCover = function () {
      duo.style.setProperty("--cover", "url('" + games[cur].folded + "')");
      duo.dataset.pxCover = games[cur].px ? "1" : "0";
    };
    var setState = function (next, instant) {
      if (instant) duo.classList.add("no-anim");
      duo.dataset.state = next;
      state = next;
      if (!instant && !reduceMotion) {            // restart the lean-and-shadow move
        duo.classList.remove("is-moving");
        void duo.offsetWidth;
        duo.classList.add("is-moving");
        setTimeout(function () { duo.classList.remove("is-moving"); }, 1800);
      }
      if (instant) { void duo.offsetWidth; duo.classList.remove("no-anim"); }
      say();
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.set === next)); });
    };

    var stop = function () { clearTimeout(timer); timer = null; };
    var schedule = function (ms) {
      stop();
      if (paused || !inView || document.hidden || reduceMotion || games.length < 1) return;
      timer = setTimeout(step, ms);
    };
    // One step of the loop: open phone folds (showing its cover), closed phone opens on the next game.
    var step = function () {
      if (state === "unfolded") {
        showCover();
        setState("folded");
        schedule(HOLD_CLOSED);
      } else {
        if (!holdGame) cur = (cur + 1) % games.length;   // the intro opens on the first game, not the second
        holdGame = false;
        showInner();
        setState("unfolded");
        schedule(HOLD_OPEN);
      }
    };

    var setPaused = function (p) {
      paused = p;
      if (pauseBtn) { pauseBtn.textContent = p ? "Play" : "Pause"; pauseBtn.setAttribute("aria-pressed", String(p)); }
      if (p) stop(); else schedule(600);
    };
    if (pauseBtn) {
      if (reduceMotion || games.length < 1) pauseBtn.parentNode.hidden = true;
      pauseBtn.addEventListener("click", function () { setPaused(!paused); });
    }
    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        setPaused(true);                         // a person took over; stop the loop
        if (b.dataset.set === "folded") showCover(); else showInner();
        setState(b.dataset.set, reduceMotion);
      });
    });
    document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else schedule(600); });
    if ("IntersectionObserver" in window) {      // no point animating off screen
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        if (inView) schedule(600); else stop();
      }, { threshold: 0.15 }).observe(duo);
    }

    // Intro: start closed, then open on the first game. With reduced motion, just show it open.
    if (!reduceMotion && games.length) {
      showCover();
      setState("folded", true);
      holdGame = true;
      schedule(900);
    }
  }

  /* ---------- press kit: copy buttons ---------- */
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
})();
