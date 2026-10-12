/* ==========================================================================
   UB Academy — scripts du site
   ========================================================================== */

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>  À REMPLIR  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
   Clé du formulaire de contact (service gratuit Web3Forms).
   1. Allez sur https://web3forms.com, saisissez ubacademyofficial@gmail.com
   2. Vous recevez une « Access Key » par e-mail.
   3. Collez-la entre les guillemets ci-dessous, à la place de A_REMPLIR.
   Tant que la clé n'est pas remplie, le formulaire ouvre WhatsApp avec le
   message du visiteur déjà rédigé : aucune demande n'est perdue.
   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
var WEB3FORMS_CLE = "A_REMPLIR";

/* Numéro WhatsApp utilisé par le formulaire (sans +, sans espaces). */
var WHATSAPP_NUMERO = "212602431299";

(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var langue = document.documentElement.lang === "en" ? "en" : "fr";
  var TEXTES = {
    fr: {
      envoi: "Envoi en cours…",
      ok: "Merci ! Votre demande est bien envoyée. Je vous réponds sous 24 h (lundi–samedi).",
      erreur: "L'envoi n'a pas fonctionné. Envoyez-moi plutôt votre message, déjà rédigé, sur",
      sansCle: "Je vous ouvre WhatsApp avec votre message déjà rédigé : il ne reste qu'à l'envoyer.",
      entete: "Bonjour Ulysse, je vous écris depuis le site UB Academy.",
      nom: "Nom", tel: "Téléphone", email: "E-mail", sujet: "Sujet", message: "Message"
    },
    en: {
      envoi: "Sending…",
      ok: "Thank you! Your request has been sent. I'll reply within 24 hours (Monday–Saturday).",
      erreur: "Sending failed. Please send me your message, already written, on",
      sansCle: "I'm opening WhatsApp with your message already written — just press send.",
      entete: "Hi Ulysse, I'm writing from the UB Academy website.",
      nom: "Name", tel: "Phone", email: "Email", sujet: "Subject", message: "Message"
    }
  }[langue];

  /* ----- Aperçu local (fichier ouvert par double-clic, sans serveur) :
     les liens vers un dossier (« en/ », « ../ ») doivent viser index.html ----- */
  if (location.protocol === "file:") {
    document.querySelectorAll('a[href$="/"]').forEach(function (a) {
      var href = a.getAttribute("href");
      if (!/^[a-z]+:/i.test(href)) a.setAttribute("href", href + "index.html");
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
  var video = document.querySelector(".video-cadre video");
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
    donnees.subject = "UB Academy — " + (sujetSel ? sujetSel.options[sujetSel.selectedIndex].text : "Nouvelle demande");
    donnees.from_name = "Site UB Academy (" + langue.toUpperCase() + ")";
    if (donnees.email) donnees.replyto = donnees.email;

    envoyer.disabled = true;
    afficher(TEXTES.envoi, "ok");
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(donnees)
    })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        if (r && r.success) { afficher(TEXTES.ok, "ok"); form.reset(); }
        else { throw new Error("échec"); }
      })
      .catch(function () { afficher(TEXTES.erreur, "erreur", lienWhatsApp()); })
      .then(function () { envoyer.disabled = false; });
  });
})();
