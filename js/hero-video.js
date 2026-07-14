/* Hero → stats interstitial video:
 *  - plays when scrolled into view, pauses when scrolled away
 *  - click to play / pause (respects a manual pause)
 *  - muted + loop + playsinline so it autoplays and loops seamlessly
 */
(function () {
  "use strict";

  var wrap = document.querySelector("[data-hero-video]");
  if (!wrap) return;
  var video = wrap.querySelector("video");
  if (!video) return;

  // Ensure programmatic autoplay is allowed (iOS needs the property, not just the attribute).
  video.muted = true;

  var userPaused = false;

  function tryPlay() {
    var p = video.play();
    if (p && typeof p.catch === "function") p.catch(function () {});
  }

  wrap.addEventListener("click", function () {
    if (video.paused) {
      userPaused = false;
      tryPlay();
    } else {
      userPaused = true;
      video.pause();
    }
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (!userPaused) tryPlay();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(wrap);
  } else {
    tryPlay();
  }
})();
