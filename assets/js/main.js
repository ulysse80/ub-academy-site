/* ==========================================================================
   UB Academy — scripts du site
   ========================================================================== */

/* Clé du formulaire de contact (service gratuit Web3Forms, formulaire
   « Site UB Academy » sur https://app.web3forms.com → « Access Key »).
   Les messages arrivent sur ubacademyofficial@gmail.com.
   Si l'envoi échoue, le visiteur peut envoyer son message, déjà rédigé,
   sur WhatsApp : aucune demande n'est perdue. */
var WEB3FORMS_CLE = "73d8fc14-1df1-42e3-92a5-11368d6ae859";

/* Numéro WhatsApp utilisé par le formulaire (sans +, sans espaces). */
var WHATSAPP_NUMERO = "212602431299";

(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var langue = document.documentElement.lang === "en" ? "en" : "fr";
  var TEXTES = {
    fr: {
      envoi: "Envoi en cours…",
      ok: "Merci ! Votre demande est bien envoyée. Je vous réponds sous 24 h, du lundi au samedi.",
      erreur: "L'envoi n'a pas fonctionné. Envoyez-moi plutôt votre message, déjà rédigé, sur",
      sansCle: "Je vous ouvre WhatsApp avec votre message déjà rédigé : il ne reste qu'à l'envoyer.",
      entete: "Bonjour Ulysse, je vous écris depuis le site UB Academy.",
      nom: "Nom", tel: "Téléphone", email: "E-mail", sujet: "Sujet", message: "Message",
      videoKO: "La vidéo ne peut pas être lue pour le moment. Vous pouvez m'écrire directement sur WhatsApp."
    },
    en: {
      envoi: "Sending…",
      ok: "Thank you! Your request has been sent. I'll reply within 24 hours, Monday to Saturday.",
      erreur: "Sending failed. Please send me your message, already written, on",
      sansCle: "I'm opening WhatsApp with your message already written. Just press send.",
      entete: "Hi Ulysse, I'm writing from the UB Academy website.",
      nom: "Name", tel: "Phone", email: "Email", sujet: "Subject", message: "Message",
      videoKO: "The video can't be played right now. You can message me directly on WhatsApp."
    }
  }[langue];

  /* ----- Aperçu local (fichier ouvert par double-clic, sans serveur) :
     les liens vers un dossier (« en/ », « ../ ») doivent viser index.html ----- */
  if (location.protocol === "file:") {
    document.querySelectorAll("a[href]").forEach(function (a) {
      // « en/ », « ../ », « ./#faq » → « en/index.html », « ../index.html », « ./index.html#faq »
      var m = a.getAttribute("href").match(/^([^:#?]*\/)(#.*)?$/);
      if (m) a.setAttribute("href", m[1] + "index.html" + (m[2] || ""));
    });
  }

  var annee = document.getElementById("annee");
  if (annee) annee.textContent = new Date().getFullYear();

  /* ----- Menu mobile ----- */
  var bouton = document.querySelector(".menu-bouton");
  var menu = document.getElementById("menu-mobile");
  if (bouton && menu) {
    bouton.addEventListener("click", function () {
      var ouvert = menu.classList.toggle("est-ouvert");
      bouton.setAttribute("aria-expanded", ouvert ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        menu.classList.remove("est-ouvert");
        bouton.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ----- Apparition douce des sections ----- */
  var aReveler = document.querySelectorAll(".revele");
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("est-visible"); obs.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    aReveler.forEach(function (el) { obs.observe(el); });
  } else {
    aReveler.forEach(function (el) { el.classList.add("est-visible"); });
  }

  /* ----- Vidéo : chargée et lancée (sans le son) seulement quand elle est visible ----- */
  var video = document.querySelector(".video-cadre:not(.video-parle) video");
  var mouvementReduit = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (video && "IntersectionObserver" in window && !mouvementReduit) {
    var lanceeParVisiteur = false;
    video.addEventListener("play", function () { if (!video.muted) lanceeParVisiteur = true; });
    new IntersectionObserver(function (entrees) {
      entrees.forEach(function (en) {
        if (en.isIntersecting) {
          var p = video.play();
          if (p && p.catch) p.catch(function () {});
        } else if (!lanceeParVisiteur) {
          video.pause();
        }
      });
    }, { threshold: 0.5 }).observe(video);
  }

  /* ----- Vidéo qui ne se charge pas : on garde l'image d'attente, sans lecteur cassé ----- */
  function siVideoIndisponible(v, action) {
    var sources = v.querySelectorAll("source");
    var derniere = sources[sources.length - 1];
    function echec() { v.controls = false; if (action) action(); }
    if (derniere) derniere.addEventListener("error", echec);
    v.addEventListener("error", echec);
  }
  document.querySelectorAll(".video-cadre:not(.video-parle) video").forEach(function (v) { siVideoIndisponible(v); });

  /* ----- Vidéo de présentation : lancée avec le son quand le visiteur le demande ----- */
  document.querySelectorAll(".video-parle").forEach(function (cadre) {
    var v = cadre.querySelector("video");
    var bouton = cadre.querySelector(".video-parle__lecture");
    if (!v || !bouton) return;
    v.controls = false;
    bouton.hidden = false;
    function afficherCommandes() { bouton.hidden = true; v.controls = true; }
    bouton.addEventListener("click", function () {
      afficherCommandes();
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    });
    v.addEventListener("play", afficherCommandes);
    siVideoIndisponible(v, function () {
      bouton.hidden = true;
      if (!cadre.parentNode.querySelector(".video-indisponible")) {
        var info = document.createElement("p");
        info.className = "video-indisponible";
        info.setAttribute("role", "status");
        info.textContent = TEXTES.videoKO;
        cadre.insertAdjacentElement("afterend", info);
      }
    });
  });

  /* ----- Formulaire de contact ----- */
  var form = document.getElementById("formulaire-contact");
  if (!form) return;
  var statut = form.querySelector(".form-statut");
  var envoyer = form.querySelector("button[type=submit]");

  function afficher(texte, type, lien) {
    statut.textContent = texte;
    if (lien) {
      var a = document.createElement("a");
      a.href = lien; a.target = "_blank"; a.rel = "noopener";
      a.textContent = " WhatsApp →";
      statut.appendChild(a);
    }
    statut.className = "form-statut est-visible form-statut--" + type;
  }

  function lienWhatsApp() {
    var d = new FormData(form);
    var sujet = form.querySelector("#sujet");
    var lignes = [
      TEXTES.entete, "",
      TEXTES.nom + " : " + (d.get("nom") || ""),
      TEXTES.tel + " : " + (d.get("telephone") || ""),
      TEXTES.email + " : " + (d.get("email") || ""),
      TEXTES.sujet + " : " + (sujet ? sujet.options[sujet.selectedIndex].text : ""),
      TEXTES.message + " : " + (d.get("message") || "")
    ];
    return "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(lignes.join("\n"));
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    if (form.botcheck && form.botcheck.checked) return; // robot

    if (!WEB3FORMS_CLE || WEB3FORMS_CLE === "A_REMPLIR") {
      var lien = lienWhatsApp();
      afficher(TEXTES.sansCle, "ok", lien);
      window.open(lien, "_blank", "noopener");
      return;
    }

    var donnees = Object.fromEntries(new FormData(form));
    donnees.access_key = WEB3FORMS_CLE;
    var sujetSel = form.querySelector("#sujet");
    donnees.subject = "UB Academy | " + (sujetSel ? sujetSel.options[sujetSel.selectedIndex].text : "Nouvelle demande");
    donnees.from_name = "Site UB Academy (" + langue.toUpperCase() + ")";
    if (donnees.email) donnees.replyto = donnees.email;

    envoyer.disabled = true;
    afficher(TEXTES.envoi, "ok");
    // Si le service ne répond pas en 15 secondes, on abandonne et on propose WhatsApp
    var controle = window.AbortController ? new AbortController() : null;
    var minuterie = setTimeout(function () { if (controle) controle.abort(); }, 15000);
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(donnees),
      signal: controle ? controle.signal : undefined
    })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        if (r && r.success) { afficher(TEXTES.ok, "ok"); form.reset(); }
        else { throw new Error("échec"); }
      })
      .catch(function () { afficher(TEXTES.erreur, "erreur", lienWhatsApp()); })
      .then(function () { clearTimeout(minuterie); envoyer.disabled = false; });
  });
})();
