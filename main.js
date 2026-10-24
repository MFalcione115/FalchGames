(function () {
  "use strict";

  // Everything the pages say is written into the HTML by tools/build_game_pages.py, so it works without
  // JavaScript. This file only adds the fold demo on the home page and the Copy buttons on the press page.
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (id) { return document.getElementById(id); };

  /* ---------- the fold demo ---------- */
  var duo = $("duo");
  if (duo) {
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
      if (!instant && !reduceMotion) {            // restart the lean-and-shadow move
        duo.classList.remove("is-moving");
        void duo.offsetWidth;
        duo.classList.add("is-moving");
        setTimeout(function () { duo.classList.remove("is-moving"); }, 1800);
      }
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
