# Mettre en ligne le site UB Academy sur Hostinger

Guide pour la personne qui héberge le site. Durée : environ 30 minutes.

Le site est **statique** : des pages HTML, une feuille de style, un petit script, des images et des vidéos. Il n'y a ni PHP, ni base de données, ni WordPress. Aucune installation n'est nécessaire.

---

## 1. Ce que tu reçois

- **`ub-academy-site-hostinger.zip`** (environ 10 Mo, 28 fichiers) : le site complet, prêt à envoyer. N'y ajoute rien.
- Ce guide.

Contenu de l'archive (à retrouver tel quel dans `public_html`) :

```
.htaccess               réglages du serveur (fichier caché)
index.html              page d'accueil en français
confidentialite.html    page Confidentialité
en/index.html           page d'accueil en anglais
en/privacy.html         page Confidentialité en anglais
robots.txt              consignes pour Google
sitemap.xml             plan du site pour Google
assets/css/             mise en page
assets/js/              formulaire, menu, vidéos
assets/img/             photos, logo, image de partage
assets/video/           les 2 vidéos (MP4 + WebM) et leurs images d'attente
```

---

## 2. La seule information qui manque : l'adresse du site

C'est Ulysse qui choisit le nom de domaine. Toi, tu le relies à l'hébergement.

Le site contient un repère **`https://domaine-a-renseigner.invalid`** (39 fois, dans 6 fichiers). Il faudra le remplacer par l'adresse définitive du site.

Le site fonctionne sans ce remplacement : pages, boutons, vidéos et formulaire marchent. Mais le repère sert à quatre choses :
- l'adresse officielle de chaque page pour Google ;
- le lien entre la version française et la version anglaise ;
- **l'image d'aperçu** quand quelqu'un partage le lien sur WhatsApp ou Facebook ;
- le plan du site.

Deux façons de faire :

- **Option A, la plus simple.** Une fois le domaine relié, dis à Ulysse l'adresse exacte qui s'affiche dans le navigateur, avec ou sans `www` (par exemple `https://ubacademy.ma`). Il te renvoie une archive finale déjà corrigée. Tu sautes alors l'étape 4.3.
- **Option B.** Tu envoies l'archive actuelle, puis tu fais le remplacement toi-même (étape 4.3).

---

## 3. Envoyer les fichiers sur Hostinger

Les noms des menus peuvent varier légèrement selon la version de hPanel.

1. Dans **hPanel**, ouvre le site lié au domaine, puis le **Gestionnaire de fichiers** (File Manager).
2. Ouvre le dossier **`public_html`** de ce domaine.
3. S'il contient une page par défaut de Hostinger (souvent `default.php`, parfois `index.php`), **supprime-la** : sinon elle s'affichera à la place du site.
4. Si un fichier `.htaccess` existe déjà, renomme-le `htaccess-ancien.txt` pour le garder de côté.
5. **Envoie le fichier ZIP tel quel** dans `public_html` (bouton « Upload » / « Téléverser »).
6. Clic droit sur le ZIP → **Extraire** (Extract), **dans `public_html` lui-même**.
7. Vérifie que `index.html` se trouve **directement** dans `public_html`. Il ne doit pas être dans un sous-dossier comme `public_html/ub-academy-site-hostinger/index.html`.
8. Supprime le fichier ZIP du serveur.

Pourquoi extraire sur le serveur et pas sur ton ordinateur : l'archive contient un fichier caché, `.htaccess`. Un Mac ou un PC peut l'oublier quand on glisse les fichiers à la main.

Ne renomme aucun fichier ni dossier : le serveur fait la différence entre majuscules et minuscules.

---

## 4. Ce qu'il faut configurer une fois le domaine connu

1. **Domaine et DNS.** Relie le domaine à cet hébergement, comme d'habitude chez Hostinger.
2. **HTTPS.** Active le certificat SSL gratuit proposé par Hostinger, puis l'option qui **force le HTTPS**. Le cadenas doit apparaître dans le navigateur.
3. **Adresse principale et repère** (option B seulement).
    - Choisis **une seule** adresse principale, avec ou sans `www`. L'autre doit rediriger vers elle.
    - Dans le Gestionnaire de fichiers, ouvre chacun de ces **6 fichiers** avec l'éditeur :
      `index.html`, `en/index.html`, `confidentialite.html`, `en/privacy.html`, `sitemap.xml`, `robots.txt`.
    - Dans chacun, cherche `https://domaine-a-renseigner.invalid` et remplace **toutes** les occurrences par l'adresse principale, **sans `/` à la fin** (par exemple `https://www.ubacademy.ma`). Enregistre.
    - Vérifie qu'il ne reste aucune occurrence du repère.
4. **Formulaire Web3Forms.** C'est Ulysse qui gère le compte : préviens-le de l'adresse définitive. S'il a limité son formulaire à un domaine précis dans Web3Forms, il doit y ajouter le nouveau. La clé du formulaire est déjà dans `assets/js/main.js` : **ne la modifie pas**.
5. **Facultatif, conseillé :** dans Google Search Console, ajoute le domaine et envoie le plan du site : `https://TON-ADRESSE/sitemap.xml`.

---

## 5. Les tests après la mise en ligne

**C'est Ulysse qui fait ces tests.** De ton côté, vérifie seulement que les pages s'affichent avec le cadenas HTTPS (test 1), puis préviens-le que le site est en ligne. S'il signale un problème lié à l'hébergement, la partie 6 indique quoi faire.

Les tests se font sur un ordinateur **et** sur un téléphone, de préférence un **iPhone avec Safari**.

| # | Test | Comment | Résultat attendu |
|---|------|---------|------------------|
| 1 | Pages | Ouvre l'adresse du site, puis `/en/`, `/confidentialite.html` et `/en/privacy.html` | Les 4 pages s'affichent, avec le cadenas HTTPS |
| 2 | Langue | Bouton **FR / EN** en haut à droite | On passe d'une langue à l'autre, sur l'accueil comme sur Confidentialité |
| 3 | Menu | Sur téléphone, bouton ☰, puis « FAQ » | Le menu s'ouvre, mène à la FAQ et se referme |
| 4 | Images | Fais défiler toute la page | Photos d'Ulysse, drapeaux, logo et illustration visibles, aucune image cassée |
| 5 | Vidéo animée (20 s) | Descends jusqu'à « UB Academy en 20 secondes » | Elle se lance **seule, sans le son**, et tourne en boucle |
| 6 | **Vidéo de présentation sur iPhone** | Section « Qui suis-je ? », bouton orange **« Voir ma présentation · 1 min »** | Elle démarre **avec le son**, dans la page. On peut la mettre en plein écran et elle se lit jusqu'à la fin (1 min 13) |
| 7 | **WhatsApp** | Sur téléphone, appuie sur « Discuter sur WhatsApp » (haut de page), « Commencer le chinois » (bloc chinois) et le rond vert en bas à droite | WhatsApp s'ouvre sur la conversation avec **+212 602 431 299**, avec un **message déjà écrit**, différent selon le bouton. Pas besoin d'envoyer le message |
| 8 | **Formulaire Web3Forms** | En bas de page. Nom : `TEST Hostinger`, téléphone : `+212 600 000 000`, e-mail : **une adresse personnelle**, message : `Test de mise en ligne, ne pas traiter`. Puis « Envoyer ma demande ». Refais-le sur `/en/` | Un message vert « Merci ! … » s'affiche et le formulaire se vide. **Ulysse reçoit un e-mail** dans la boîte liée à son formulaire Web3Forms (normalement ubacademyofficial@gmail.com, spams compris), avec l'objet « UB Academy \| … ». En répondant à cet e-mail, on écrit à l'adresse saisie dans le formulaire |
| 9 | Aperçu du lien | Colle l'adresse du site dans une conversation WhatsApp | Un aperçu apparaît avec la photo d'Ulysse et le titre. Cela ne marche qu'après le remplacement du repère, et WhatsApp peut mettre quelques heures à le rafraîchir |
| 10 | Fichiers Google | Ouvre `/robots.txt` et `/sitemap.xml` | Les deux s'affichent avec la bonne adresse, sans le repère `domaine-a-renseigner` |

Les plus importants sont les tests 6, 7 et 8.

---

## 6. En cas de problème

| Ce que tu vois | Cause probable | Solution |
|---|---|---|
| « Internal Server Error » | Le serveur refuse un réglage du `.htaccess` | Renomme `.htaccess` en `htaccess-desactive.txt`, recharge la page et préviens Ulysse |
| La page par défaut de Hostinger | Un `default.php` ou `index.php` est resté dans `public_html` | Supprime-le |
| Une liste de fichiers ou une erreur 404 | Le site a été extrait dans un sous-dossier | Déplace le contenu pour que `index.html` soit directement dans `public_html` |
| Formulaire : « L'envoi n'a pas fonctionné » | Le domaine n'est pas autorisé dans Web3Forms | Préviens Ulysse. En attendant, le visiteur reçoit un lien WhatsApp avec son message déjà écrit, rien n'est perdu |
| La présentation ne se lance pas sur iPhone | Fichier vidéo absent ou mal servi | Ouvre directement `https://TON-ADRESSE/assets/video/ulysse-presentation.mp4` : la vidéo doit se lire. Vérifie aussi que le `.htaccess` est présent |
| L'animation reste une image fixe sur iPhone | L'iPhone est en mode Économie d'énergie | C'est normal : Safari bloque alors la lecture automatique. Le bouton de lecture fonctionne toujours |

---

## 7. À ne pas faire

- Ne pas installer WordPress ni utiliser le créateur de site Hostinger sur ce domaine : cela remplacerait le site.
- Ne pas modifier la clé du formulaire dans `assets/js/main.js`.
- Ne pas renommer les fichiers ou les dossiers.

## 8. Mises à jour plus tard

Quand Ulysse modifie le site, il t'envoie les fichiers modifiés ou une nouvelle archive. Remplace-les au même endroit dans `public_html`.
