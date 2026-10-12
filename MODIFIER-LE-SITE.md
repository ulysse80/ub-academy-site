# Modifier le site UB Academy — mode d'emploi

> **Le plus simple :** demandez à Claude (« change tel texte », « remplace telle photo »). Il fait la modification et vous montre le résultat. Ce guide sert si vous voulez le faire vous-même.

Ce guide explique comment changer vous-même un texte, une photo, la vidéo ou un numéro, **directement sur github.com**, sans rien installer.

Chaque modification enregistrée est mise en ligne automatiquement en 1 à 2 minutes (une fois GitHub Pages activé — voir la dernière partie).

---

## 1. Où se trouve quoi ?

| Ce que vous voulez changer | Fichier à ouvrir |
|---|---|
| Textes de la version **française** | `index.html` |
| Textes de la version **anglaise** | `en/index.html` |
| Clé du formulaire de contact | `assets/js/main.js` (tout en haut) |
| Couleurs du site | `assets/css/style.css` (tout en haut) |
| Photos | dossier `assets/img/` |
| Vidéo | dossier `assets/video/` |

> Important : une modification de texte faite dans `index.html` ne change **que** la version française. Pensez à faire la même modification dans `en/index.html` pour la version anglaise.

---

## 2. Changer un texte

1. Sur github.com, ouvrez le dépôt **ub-academy-site**.
2. Cliquez sur le fichier `index.html` (ou `en/index.html`).
3. Cliquez sur l'icône **crayon** ✏️ en haut à droite du fichier (« Edit this file »).
4. Pour trouver votre texte : cliquez dans la zone de texte, puis appuyez sur **Ctrl + F** (ou **Cmd + F** sur Mac) et tapez quelques mots de la phrase à changer.
5. Modifiez **uniquement le texte visible**, c'est-à-dire ce qui se trouve entre `>` et `<`.
   - Exemple : `<h2 id="titre-faq">Vos questions, mes réponses</h2>`
   - Vous pouvez changer *Vos questions, mes réponses*, mais ne touchez pas à `<h2 id="titre-faq">` ni à `</h2>`.
6. En haut à droite, cliquez sur le bouton vert **Commit changes…**, écrivez une courte phrase (ex. « Change le titre FAQ »), puis cliquez à nouveau sur **Commit changes**.

Les lignes qui commencent par `<!--` et finissent par `-->` sont des **notes invisibles** pour vous : elles n'apparaissent pas sur le site.

**Si vous vous trompez :** ouvrez le fichier, cliquez sur **History** (Historique), choisissez la version d'avant et copiez-la. Ou demandez simplement à Claude de revenir en arrière.

---

## 3. Modifier ou ajouter un témoignage

Dans `index.html`, cherchez (Ctrl + F) le prénom de l'élève, par exemple `Yasmine`. Vous trouverez un bloc comme celui-ci :

```html
<figure class="temoignage revele">
  <figcaption class="temoignage__auteur">
    <span class="temoignage__initiales" aria-hidden="true">YK</span>
    <span><strong>Yasmine K.</strong><span>Mandarin débutant</span></span>
  </figcaption>
  <blockquote><p>« J'ai pu commencer le mandarin … »</p></blockquote>
</figure>
```

- Le texte de l'avis est entre « ».
- `Yasmine K.` est le prénom + l'initiale du nom ; `Mandarin débutant` est l'objectif.
- `YK` sont les initiales affichées dans le rond.

Pour **ajouter** un avis : copiez un bloc entier (de `<figure` jusqu'à `</figure>`), collez-le juste en dessous, puis changez les textes.

Faites de même dans `en/index.html`, avec la traduction anglaise.

> Ne publiez jamais un témoignage inventé ou sans l'accord de l'élève.

---

## 4. Changer une photo

Les photos sont dans `assets/img/`. Le plus simple est de **remplacer une photo par une autre portant exactement le même nom** :

1. Préparez votre nouvelle photo au format **.webp** (vous pouvez convertir une photo .jpg gratuitement sur [squoosh.app](https://squoosh.app) : glissez la photo, choisissez « WebP », qualité 75, puis téléchargez).
2. Renommez-la exactement comme l'ancienne, par exemple `ulysse-portrait-800.webp`.
3. Sur github.com, ouvrez le dossier `assets/img/`, cliquez sur **Add file → Upload files**, glissez votre photo, puis **Commit changes**. L'ancienne est remplacée.

Photos utilisées :

| Fichier | Où elle apparaît | Taille conseillée |
|---|---|---|
| `ulysse-portrait-800.webp` et `ulysse-portrait-480.webp` | Haut de page | 800 × 1000 px et 480 × 600 px (format portrait 4:5) |
| `ulysse-cours-en-ligne-1000.webp` et `-600.webp` | « Comment ça se passe » | 1000 px et 600 px de large |
| `ulysse-noir-blanc-700.webp` et `-480.webp` | « Qui suis-je ? » | 700 px et 480 px de large |
| `illustration-communication.webp` | Bloc communication professionnelle | 900 px de large |
| `og-ub-academy.jpg` | Image affichée quand on partage le lien (WhatsApp, Facebook…) | 1200 × 630 px |

Chaque photo existe en deux tailles (une petite pour les téléphones, une grande pour les ordinateurs) : remplacez **les deux**.

> N'utilisez que vos propres photos, ou des photos d'élèves avec leur accord écrit.

---

## 5. Changer la vidéo

1. Votre vidéo doit être **verticale (9:16)**, au format **.mp4**, idéalement moins de 5 Mo.
2. Renommez-la exactement : `ub-academy-20s-vertical.mp4`.
3. Ouvrez le dossier `assets/video/`, **Add file → Upload files**, glissez la vidéo, **Commit changes**.
4. Supprimez ensuite l'ancienne copie de secours `ub-academy-20s-vertical.webm` (ouvrez-la, menu **…** → **Delete file**) : sinon quelques rares navigateurs afficheraient encore l'ancienne vidéo.
5. L'image affichée avant la lecture est `ub-academy-affiche.webp` (même dossier) : remplacez-la par une image de votre nouvelle vidéo si besoin.

La vidéo n'est jamais déformée ni coupée : elle s'adapte toute seule aux téléphones.

---

## 6. Changer le numéro WhatsApp ou l'e-mail

Le numéro apparaît dans de nombreux liens. Utilisez la fonction **Rechercher / Remplacer** :

1. Ouvrez `index.html`, cliquez sur le crayon ✏️.
2. Cliquez dans le texte et appuyez sur **Ctrl + H** (ou **Cmd + Option + F** sur Mac) pour « Rechercher et remplacer ».
3. Cherchez `212602431299` et remplacez **tout** par le nouveau numéro, **sans le +, sans espaces** (ex. `212612345678`).
4. Cherchez aussi `+212 602 431 299` (numéro affiché avec espaces) et remplacez-le.
5. Enregistrez (**Commit changes**).
6. Refaites la même chose dans `en/index.html` **et** dans `assets/js/main.js` (ligne `WHATSAPP_NUMERO`).

Pour l'e-mail : même méthode, en cherchant `ubacademyofficial@gmail.com`.

Pour les horaires : cherchez `10:00–12:00`.

---

## 7. Activer le formulaire de contact (une seule fois)

Le formulaire utilise un service gratuit, **Web3Forms**, qui envoie chaque demande sur ubacademyofficial@gmail.com.

1. Allez sur [web3forms.com](https://web3forms.com), cliquez sur **Create your Access Key**, entrez `ubacademyofficial@gmail.com`.
2. Vous recevez par e-mail une clé qui ressemble à `a1b2c3d4-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.
3. Ouvrez `assets/js/main.js`, cliquez sur le crayon ✏️, et tout en haut remplacez :
   `var WEB3FORMS_CLE = "A_REMPLIR";`
   par
   `var WEB3FORMS_CLE = "votre-clé-reçue";`
4. **Commit changes**. Faites un essai depuis le site : vous devez recevoir l'e-mail.

Tant que la clé n'est pas remplie, le formulaire n'est pas perdu : il ouvre WhatsApp avec le message du visiteur déjà rédigé.

---

## 8. Voir le site sur votre ordinateur, sans le mettre en ligne

1. Ouvrez la page de la branche de travail sur github.com (lien donné dans la pull request).
2. Cliquez sur le bouton vert **Code**, puis **Download ZIP**.
3. Ouvrez le fichier téléchargé : double-clic sur Mac ; sur Windows, clic droit → **Extraire tout**.
4. Dans le dossier obtenu, double-cliquez sur **index.html** : le site s'ouvre dans votre navigateur, comme en ligne (version anglaise via le bouton EN).
5. Pour voir la version téléphone dans Chrome : clic droit sur la page → **Inspecter**, puis l'icône téléphone/tablette en haut à gauche du panneau (ou **Ctrl + Maj + M**, **Cmd + Maj + M** sur Mac) et choisissez un iPhone dans la liste.

Personne d'autre que vous ne voit cette copie. Il faut une connexion internet pour les polices d'écriture ; les boutons WhatsApp fonctionnent normalement.

---

## 9. Mettre le site en ligne (GitHub Pages)

À faire une seule fois, après avoir validé la pull request :

1. Sur la page du dépôt, cliquez sur **Settings** (Paramètres).
2. Dans le menu de gauche, cliquez sur **Pages**.
3. Sous **Build and deployment** → **Source**, choisissez **Deploy from a branch**.
4. Sous **Branch**, choisissez **main** et le dossier **/ (root)**, puis **Save**.
5. Attendez 1 à 2 minutes et rechargez la page : l'adresse du site s'affiche en haut (`https://ulysse80.github.io/ub-academy-site/`).

Si vous prenez plus tard un nom de domaine (ex. `ubacademy.com`), demandez à Claude de mettre à jour les adresses dans `index.html`, `en/index.html`, `sitemap.xml` et `robots.txt`.
