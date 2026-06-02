/* Copo Studio — contact form submission + success / error states.
 *
 * Submissions are delivered by Web3Forms (https://web3forms.com), a
 * lightweight, no-backend form service that works on any static host
 * (Vercel, GitHub Pages, etc.).
 *
 * SETUP — one step only:
 *   1. Go to https://web3forms.com and enter:  kaylapiscopo@gmail.com
 *   2. Copy the Access Key it gives you.
 *   3. Paste it into ACCESS_KEY below (replacing the placeholder).
 *
 * The Access Key is designed to live in client-side code — it is not a
 * secret and is safe to commit. The recipient email is bound to the key
 * on Web3Forms' side, so messages always go to kaylapiscopo@gmail.com.
 */
(function () {
  "use strict";

  var ACCESS_KEY = "038e131f-d724-48ee-a57b-deb4f84c7c45";
  var ENDPOINT = "https://api.web3forms.com/submit";
  var CONTACT_EMAIL = "kaylapiscopo@gmail.com";

  function buildResultPanel() {
    var panel = document.createElement("div");
    panel.className = "contact__result";
    panel.setAttribute("role", "status");
    panel.setAttribute("aria-live", "polite");
    panel.innerHTML =
      '<span class="contact__result-mark" aria-hidden="true">' +
        '<svg viewBox="0 0 32 32" fill="none"><path d="M5 17.5 12.5 25 27 7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      "</span>" +
      '<h3 class="contact__result-h">Message received<span class="contact__result-stop">.</span></h3>' +
      '<p class="contact__result-p">Thanks &mdash; I&rsquo;ll review your project personally and get back to you soon.</p>' +
      '<button type="button" class="contact__reset"><span class="contact__reset-label">Send another enquiry</span>' +
        '<svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      "</button>";
    return panel;
  }

  function initForm(form) {
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalBtnHTML = submitBtn ? submitBtn.innerHTML : "";

    var errorEl = document.createElement("p");
    errorEl.className = "contact__error";
    errorEl.setAttribute("role", "alert");
    errorEl.hidden = true;
    form.appendChild(errorEl);

    var resultPanel = buildResultPanel();
    form.appendChild(resultPanel);

    function showError(msg) {
      errorEl.textContent = msg;
      errorEl.hidden = false;
    }
    function clearError() {
      errorEl.hidden = true;
      errorEl.textContent = "";
    }
    function setLoading(on) {
      if (!submitBtn) return;
      submitBtn.disabled = on;
      submitBtn.setAttribute("aria-busy", on ? "true" : "false");
      if (on) {
        submitBtn.textContent = "Sending…";
      } else {
        submitBtn.innerHTML = originalBtnHTML;
      }
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearError();

      if (typeof form.reportValidity === "function" && !form.reportValidity()) {
        return;
      }

      var nameEl = form.querySelector("#f-name");
      var emailEl = form.querySelector("#f-email");
      var goalEl = form.querySelector("#f-goal");

      var payload = {
        access_key: ACCESS_KEY,
        subject: "New enquiry from the Copo Studio website",
        from_name: "Copo Studio website",
        name: nameEl ? nameEl.value.trim() : "",
        email: emailEl ? emailEl.value.trim() : "",
        message: goalEl ? goalEl.value.trim() : ""
      };

      setLoading(true);

      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          return res
            .json()
            .catch(function () { return null; })
            .then(function (data) { return { ok: res.ok, status: res.status, data: data }; });
        })
        .then(function (r) {
          setLoading(false);
          if (r.ok && r.data && r.data.success) {
            form.classList.add("is-sent");
            var heading = resultPanel.querySelector(".contact__result-h");
            if (heading && typeof heading.focus === "function") {
              heading.setAttribute("tabindex", "-1");
              heading.focus();
            }
            return;
          }

          // Surface the real cause for debugging.
          console.error("[contact] Web3Forms rejected the submission:", r);

          if (r.data === null) {
            // Got a response with no/blocked JSON body — typically an ad/privacy
            // blocker or proxy neutralising the request.
            showError(
              "Couldn’t reach the form service — a browser extension or network filter may be blocking it. Please disable blockers and retry, or email " +
                CONTACT_EMAIL +
                " directly."
            );
          } else {
            showError(
              (r.data && r.data.message ? r.data.message + " " : "Something went wrong. ") +
                "Please try again, or email " +
                CONTACT_EMAIL +
                " directly."
            );
          }
        })
        .catch(function (err) {
          setLoading(false);
          console.error("[contact] Submission request failed:", err);
          showError(
            "Couldn’t send right now — please check your connection and try again, or email " +
              CONTACT_EMAIL +
              " directly."
          );
        });
    });

    resultPanel
      .querySelector(".contact__reset")
      .addEventListener("click", function () {
        form.reset();
        clearError();
        form.classList.remove("is-sent");
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;
        }
        var firstField = form.querySelector("#f-name");
        if (firstField) firstField.focus();
      });
  }

  function init() {
    var forms = document.querySelectorAll(".contact form");
    for (var i = 0; i < forms.length; i++) initForm(forms[i]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
