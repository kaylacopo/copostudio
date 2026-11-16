/* Copo Studio — "Request a project estimate" funnel (/estimate).
 *
 * One question per screen, always inside the viewport. Each question is a
 * <section class="ef__q"> in estimate.html:
 *   data-required  must be answered before moving on (no Skip button)
 *   data-auto      single-choice: picking an option moves on by itself
 *   data-last      the final screen (button becomes "Send request")
 *
 * Categories and services come from js/services-data.js (same source as
 * /services). Submissions go to the same Web3Forms inbox as the contact form.
 * No prices are calculated or shown.
 *
 * Reliability: answers are kept in sessionStorage until sent, so Back, a
 * refresh or an accidental close doesn't lose them. If sending fails, the
 * visitor can retry, email the answers or copy them.
 */
(function () {
  "use strict";

  var ACCESS_KEY = "038e131f-d724-48ee-a57b-deb4f84c7c45"; // same key as js/contact.js
  var ENDPOINT = "https://api.web3forms.com/submit";
  var CONTACT_EMAIL = "kaylapiscopo@gmail.com";
  var STORE_KEY = "copo-estimate-v2";
  var MIN_FILL_MS = 4000; // faster than this is a bot

  var DATA = window.COPO_SERVICES;
  var form = document.getElementById("estForm");
  if (!DATA || !form) return;

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (t) {
    return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  };
  var CAT = {};
  DATA.categories.forEach(function (c) { CAT[c.id] = c; });

  var screens = Array.prototype.slice.call(form.querySelectorAll(".ef__q"));
  var TOTAL = screens.length;
  var startedAt = Date.now();
  var idx = 0;
  var savedSvcs = []; // service picks survive a category being unticked for a moment
  var sending = false;

  /* ---------- categories + services ---------- */
  $("estCats").innerHTML = DATA.categories.map(function (c) {
    return '<label class="ef__chip"><input type="checkbox" name="cats" value="' + c.id + '"><span>' + esc(c.title) + "</span></label>";
  }).join("");

  function renderServices() {
    var chosen = values("cats");
    if (!chosen.length) {
      $("estSvcs").innerHTML = '<p class="ef__empty">You didn\'t pick an area, so there\'s nothing to choose from here. Skip this, or describe what you need below.</p>';
      return;
    }
    var seen = {};
    $("estSvcs").innerHTML = chosen.map(function (cid) {
      var list = DATA.services.filter(function (s) { return s.categories.indexOf(cid) !== -1 && !seen[s.id]; });
      list.forEach(function (s) { seen[s.id] = true; });
      if (!list.length) return "";
      return '<div class="ef__group"><h3 class="ef__group-h">' + esc(CAT[cid].title) + '</h3><div class="ef__chips">' +
        list.map(function (s) {
          return '<label class="ef__chip"><input type="checkbox" name="svcs" value="' + esc(s.title) + '"' +
            (savedSvcs.indexOf(s.title) !== -1 ? " checked" : "") + "><span>" + esc(s.title) + "</span></label>";
        }).join("") + "</div></div>";
    }).join("");
  }

  // fade the bottom of the services list while there's more to scroll
  function updateFade() {
    var box = $("estScroll");
    box.classList.toggle("has-more", box.scrollHeight - box.scrollTop - box.clientHeight > 4);
  }
  $("estScroll").addEventListener("scroll", updateFade, { passive: true });
  window.addEventListener("resize", updateFade);

  /* ---------- team roles (step "Do you have any of these on your team?") ----------
     Only roles that affect the chosen areas are shown; with no areas picked, all of them.
     "Nope, just me" and "Other" are always there. */
  var ROLES = [
    { v: "Developer, CTO or development team", cats: ["product-strategy", "ux-ui", "web-conversion", "development"] },
    { v: "UX/UI or product designer", cats: ["product-strategy", "ux-ui", "web-conversion", "development"] },
    { v: "Product owner or product manager", cats: ["product-strategy", "ux-ui", "development"] },
    { v: "Graphic or brand designer", cats: ["brand-identity", "graphic-design", "launch-marketing", "business-events"] },
    { v: "Marketer or marketing team", cats: ["product-strategy", "web-conversion", "brand-identity", "launch-marketing", "business-events"] },
    { v: "Copywriter or content creator", cats: ["brand-identity", "launch-marketing", "web-conversion"] },
    { v: "Video editor or motion designer", cats: ["graphic-design", "launch-marketing"] }
  ];
  var JUST_ME = "Nope, just me";
  var OTHER = "Other";
  var savedTeam = [];

  function visibleRoles() {
    var chosen = values("cats");
    return ROLES.filter(function (ro) {
      return !chosen.length || ro.cats.some(function (c) { return chosen.indexOf(c) !== -1; });
    }).map(function (ro) { return ro.v; }).concat([OTHER, JUST_ME]);
  }

  function renderTeam() {
    var chosen = values("cats");
    var roles = visibleRoles();
    $("estTeam").innerHTML = roles.map(function (v) {
      return '<label class="ef__chip"><input type="checkbox" name="team" value="' + esc(v) + '"' +
        (savedTeam.indexOf(v) !== -1 ? " checked" : "") + "><span>" + esc(v) + "</span></label>";
    }).join("");
    $("estTeamHint").textContent = (chosen.length ? "Only roles that affect the areas you picked are shown. " : "") +
      "Copo Studio can work alongside your existing team or fill the gaps.";
    $("estTeamOtherWrap").hidden = savedTeam.indexOf(OTHER) === -1;
  }

  /* ---------- links: only ask for what's relevant to the chosen areas ----------
     With no areas picked, every field shows. "Anything else?" always shows. */
  var LINK_FIELDS = {
    website: ["web-conversion", "brand-identity", "launch-marketing", "development", "product-strategy", "ux-ui"],
    figma: ["ux-ui", "web-conversion", "development", "brand-identity", "product-strategy"],
    drive: null, // always useful: decks, docs, briefs, files
    social: ["launch-marketing", "brand-identity", "graphic-design", "business-events"]
  };
  function renderLinks() {
    var chosen = values("cats");
    Object.keys(LINK_FIELDS).forEach(function (k) {
      var cats = LINK_FIELDS[k];
      var show = !chosen.length || !cats || cats.some(function (c) { return chosen.indexOf(c) !== -1; });
      form.querySelector('[data-for="' + k + '"]').hidden = !show;
    });
  }

  /* ---------- helpers ---------- */
  function values(name) {
    return Array.prototype.map.call(form.querySelectorAll('[name="' + name + '"]:checked'), function (i) { return i.value; });
  }
  function value(name) {
    var el = form.querySelector('[name="' + name + '"]:checked') ||
      form.querySelector('textarea[name="' + name + '"], input[type="text"][name="' + name + '"], input[type="email"][name="' + name + '"]');
    return el ? String(el.value || "").trim() : "";
  }
  function screenAnswered(s) {
    var inputs = s.querySelectorAll("input:not(.ef__hp), textarea");
    for (var i = 0; i < inputs.length; i++) {
      var el = inputs[i];
      if ((el.type === "checkbox" || el.type === "radio") ? el.checked : el.value.trim()) return true;
    }
    return false;
  }

  /* ---------- save / restore ---------- */
  function save() {
    var state = { idx: idx, fields: { svcs: savedSvcs, team: savedTeam } };
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || el.name === "botcheck" || el.name === "svcs" || el.name === "team") return;
      if (el.type === "checkbox" || el.type === "radio") {
        if (el.checked) (state.fields[el.name] = state.fields[el.name] || []).push(el.value);
      } else {
        state.fields[el.name] = el.value;
      }
    });
    try { sessionStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
  }
  function restore() {
    var state = null;
    try { state = JSON.parse(sessionStorage.getItem(STORE_KEY) || "null"); } catch (e) {}
    if (!state || !state.fields) return 0;
    var f = state.fields;
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || !(el.name in f) || el.name === "svcs" || el.name === "team") return;
      if (el.type === "checkbox" || el.type === "radio") el.checked = (f[el.name] || []).indexOf(el.value) !== -1;
      else el.value = f[el.name];
    });
    savedSvcs = f.svcs || [];
    savedTeam = f.team || [];
    return Math.min(Math.max(parseInt(state.idx, 10) || 0, 0), TOTAL - 1);
  }

  /* ---------- validation ---------- */
  function showError(msg) {
    $("estError").textContent = msg;
    $("estError").hidden = !msg;
  }
  function validate(s) {
    // every question can be skipped; the one thing needed is an email to reply to
    if (s.querySelector('[name="email"]') && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value("email"))) {
      return value("email") ? "That email doesn't look quite right. Please check it so I can reply." : "Please add your email so I can reply.";
    }
    return "";
  }

  /* ---------- navigation ---------- */
  function show(n, dir) {
    idx = n;
    var s = screens[n];
    if (s.querySelector("#estSvcs")) { renderServices(); requestAnimationFrame(updateFade); }
    if (s.querySelector("#estTeam")) renderTeam();
    if (s.querySelector("#estLinksBox")) renderLinks();
    screens.forEach(function (el, i) {
      el.hidden = i !== n;
      el.classList.remove("is-in", "is-back");
    });
    void s.offsetWidth;
    s.classList.add(dir < 0 ? "is-back" : "is-in");

    var num = function (x) { return (x < 10 ? "0" : "") + x; };
    $("efCount").textContent = num(n + 1) + " / " + num(TOTAL);
    $("efFill").style.width = ((n + 1) / TOTAL * 100) + "%";
    $("estBack").style.visibility = n === 0 ? "hidden" : "visible";
    var required = s.hasAttribute("data-required");
    var last = s.hasAttribute("data-last");
    $("estSkip").hidden = required || screenAnswered(s);
    $("estNextLabel").textContent = last ? "Send request" : "Continue";
    showError("");
    save();

    var target = Array.prototype.filter.call(s.querySelectorAll("textarea, input[type=text], input[type=email]"), function (el) { return !el.closest("[hidden]"); })[0];
    var title = s.querySelector(".ef__title");
    // don't pop the keyboard open on phones; on desktop, go straight to typing
    if (target && window.matchMedia("(hover: hover)").matches) target.focus({ preventScroll: true });
    else if (title) title.focus({ preventScroll: true });
  }

  function next() {
    var s = screens[idx];
    var err = validate(s);
    if (err) { showError(err); return; }
    if (s.hasAttribute("data-last")) { send(); return; }
    show(idx + 1, 1);
  }
  function back() { if (idx > 0) show(idx - 1, -1); }

  form.addEventListener("submit", function (e) { e.preventDefault(); if (!sending) next(); });
  $("estBack").addEventListener("click", back);
  $("estSkip").addEventListener("click", function () { show(idx + 1, 1); });

  // Enter moves on from text fields; Shift+Enter keeps a new line (the links box keeps plain Enter for one-per-line)
  form.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && e.target.tagName === "TEXTAREA" && e.target.id !== "estLinks" && !e.shiftKey) { e.preventDefault(); next(); }
  });

  var autoTimer = null;
  form.addEventListener("change", function (e) {
    var t = e.target;
    if (t.name === "svcs") {
      savedSvcs = savedSvcs.filter(function (v) { return v !== t.value; });
      if (t.checked) savedSvcs.push(t.value);
    }
    if (t.name === "timeline") $("estAsap").hidden = value("timeline") !== "As soon as possible";
    if (t.name === "team") {
      // "Nope, just me" can't sit alongside roles (Other is allowed with either)
      if (t.checked && t.value !== OTHER) {
        form.querySelectorAll('[name="team"]').forEach(function (i) {
          if (i.value === OTHER) return;
          if (t.value === JUST_ME ? i.value !== JUST_ME : i.value === JUST_ME) i.checked = false;
        });
      }
      // remember picks individually, so roles hidden by an area change come back if the area does
      var shown = values("team");
      form.querySelectorAll('[name="team"]').forEach(function (i) {
        savedTeam = savedTeam.filter(function (v) { return v !== i.value; });
      });
      savedTeam = savedTeam.concat(shown);
      if (savedTeam.indexOf(JUST_ME) !== -1 && shown.indexOf(JUST_ME) !== -1) {
        savedTeam = savedTeam.filter(function (v) { return v === JUST_ME || v === OTHER; });
      }
      $("estTeamOtherWrap").hidden = savedTeam.indexOf(OTHER) === -1;
      if (t.value === OTHER && t.checked) $("estTeamOther").focus();
    }
    var s = screens[idx];
    $("estSkip").hidden = s.hasAttribute("data-required") || screenAnswered(s);
    showError("");
    save();
    // single-choice questions move on by themselves (except ASAP, so its note can be read)
    if (t.type === "radio" && s.hasAttribute("data-auto") && !(t.name === "timeline" && t.value === "As soon as possible")) {
      clearTimeout(autoTimer);
      autoTimer = setTimeout(function () { if (screens[idx] === s) next(); }, 320);
    }
  });
  form.addEventListener("input", function () {
    var s = screens[idx];
    $("estSkip").hidden = s.hasAttribute("data-required") || screenAnswered(s);
    save();
  });

  /* ---------- answers for the notification ---------- */
  function answers() {
    var chosen = values("cats");
    var svcs = savedSvcs.filter(function (title) {
      return DATA.services.some(function (sv) {
        return sv.title === title && sv.categories.some(function (c) { return chosen.indexOf(c) !== -1; });
      });
    });
    var none = "Not specified";
    return [
      ["Engagement", value("engagement") || none],
      ["Categories", chosen.map(function (id) { return CAT[id] ? CAT[id].title : id; }).join(", ") || none],
      ["Services", svcs.join(", ") || "Skipped"],
      ["Not listed", value("other") || "None"],
      ["Project stage", value("stage") || none],
      ["What they're building", value("goal") || none],
      ["Existing team", savedTeam.filter(function (v) { return visibleRoles().indexOf(v) !== -1; }).map(function (v) {
        return v === OTHER ? "Other" + (value("teamOther") ? ": " + value("teamOther") : "") : v;
      }).join(", ") || none],
      ["Timeline", value("timeline") || none],
      ["Website", value("website") || "None"],
      ["Figma", value("figma") || "None"],
      ["Google Drive / Docs", value("drive") || "None"],
      ["Social media", value("social") || "None"],
      ["Anything else", value("links") || "None"]
    ];
  }
  function plainText() {
    return ["Name: " + value("name"), "Email: " + value("email"), "Next step: " + value("next")]
      .concat(answers().map(function (a) { return a[0] + ": " + a[1]; })).join("\n");
  }

  /* ---------- send ---------- */
  var btn = $("estNext");
  function send() {
    var name = value("name"), email = value("email");
    var who = name || email;
    var isCall = value("next") === "Free discovery call";

    // spam: honeypot ticked or impossibly fast. Pretend it worked, send nothing.
    if ($("estBot").checked || Date.now() - startedAt < MIN_FILL_MS) { done(name, isCall, sparse()); return; }

    var payload = {
      access_key: ACCESS_KEY,
      subject: (isCall ? "Discovery call request: " : "Estimate request: ") + who,
      from_name: "Copo Studio website · Project estimate",
      replyto: email,
      botcheck: false,
      "Name": name || "Not given",
      "Email": email,
      "Next step": isCall ? "Free discovery call (booking via Google Calendar)" : "Send an initial estimate by email"
    };
    answers().forEach(function (a) { payload[a[0]] = a[1]; });

    sending = true;
    btn.disabled = true;
    btn.setAttribute("aria-busy", "true");
    $("estNextLabel").textContent = "Sending…";

    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (res) { return res.json().catch(function () { return null; }).then(function (d) { return { ok: res.ok, data: d }; }); })
      .then(function (r) {
        if (r.ok && r.data && r.data.success) { done(name, isCall, sparse()); return; }
        console.error("[estimate] Web3Forms rejected the submission:", r);
        failed();
      })
      .catch(function (err) { console.error("[estimate] Request failed:", err); failed(); });
  }

  function failed() {
    sending = false;
    btn.disabled = false;
    btn.removeAttribute("aria-busy");
    $("estNextLabel").textContent = "Try again";
    var mail = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Project estimate request") + "&body=" + encodeURIComponent(plainText());
    $("estError").hidden = false;
    $("estError").innerHTML = "Couldn't send just now. Your answers are saved: try again, " +
      '<a href="' + mail + '">send them by email</a> or <button type="button" class="ef__copy" id="estCopy">copy them</button>.';
    var copy = $("estCopy");
    copy.addEventListener("click", function () {
      var t = plainText();
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () { copy.textContent = "copied"; }, function () { window.prompt("Copy your answers:", t); });
    });
  }

  // they skipped everything that describes the project
  function sparse() {
    return !value("goal") && !values("cats").length && !savedSvcs.length && !value("other") &&
      !value("links") && !value("website") && !value("figma") && !value("drive") && !value("social");
  }

  function done(name, isCall, little) {
    try { sessionStorage.removeItem(STORE_KEY); } catch (e) {}
    screens.forEach(function (el) { el.hidden = true; });
    $("efFoot").hidden = true;
    $("efFill").style.width = "100%";
    $("efCount").textContent = "Sent";
    var alt = document.querySelector(".ef__alt");
    if (alt) alt.hidden = true; // already sent; the booking calendar (if any) is right below
    var first = (name || "").split(/\s+/)[0];
    var bookingUrl = ($("estBook").getAttribute("data-url") || "").trim();

    if (isCall && bookingUrl) {
      // answers are in: now they pick a Google Meet slot. Earliest 10:00 and 24h notice are
      // enforced by the Google Calendar schedule; the 48h note is only a suggestion.
      $("estDone").classList.add("is-booking");
      $("estDoneH").textContent = "Pick a time for your call" + (first ? ", " + first : "") + ".";
      $("estDoneP").textContent = "Your answers are in. Choose a time below for a free 30-minute Google Meet, and you'll get a calendar invite with the link.";
      $("estBookNote").hidden = !!little; // nothing to review, so no reason to wait
      $("estBookFrame").src = bookingUrl;
      $("estBook").hidden = false;
    } else {
      $("estDoneH").textContent = "Request received" + (first ? ", " + first : "") + ".";
      $("estDoneP").textContent = isCall
        ? "Thanks. I'll be in touch by email to set up your free 30-minute call."
        : little
          ? "Thanks. I'll reach out by email to learn a bit more about your project, then follow up with an initial estimate."
          : "Thanks for the details. I'll review your answers personally and reply by email with an initial estimate and suggested next steps.";
    }
    $("estDone").hidden = false;
    $("estDone").classList.add("is-in");
    $("estDone").focus({ preventScroll: true });
  }

  /* ---------- start ---------- */
  var start = restore();
  $("estAsap").hidden = value("timeline") !== "As soon as possible";
  show(start, 1);
})();
