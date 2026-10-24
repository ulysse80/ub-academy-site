# Proposition d'intégration (NON activée)

Rien de ce dossier n'est branché sur le site. Le site actuel reste identique tant qu'Ulysse n'a pas dit oui.

## Ce que la proposition ferait

- Elle ajouterait l'animation 3D (8 s, en boucle, sans son) **à droite du titre de la section « Les cours »**, en version française et anglaise.
- Le cadre serait petit, 230 × 409 px, au format 9:16, sans déformation ni recadrage.
- Elle serait visible **sur ordinateur uniquement** (écran de 900 px de large ou plus). Sur téléphone, elle n'est ni affichée ni téléchargée. Ainsi, le chemin vers les cours et WhatsApp reste aussi court qu'aujourd'hui.
- La lecture se lance sans le son, seulement quand l'animation est à l'écran. Un petit bouton rond permet de la mettre en pause.
- Si le visiteur a demandé moins d'animations sur son appareil (réglage « Réduire les animations »), seule l'image fixe s'affiche. Rien n'est téléchargé.
- Si la vidéo ne se charge pas, l'image fixe reste en place, sans lecteur cassé.
- Les deux vidéos actuelles, le haut de page, WhatsApp et le formulaire ne sont pas modifiés.
- Aucune phrase n'est ajoutée au site : le titre et le texte d'introduction de la section restent ceux d'aujourd'hui. Seul le bouton pause porte un libellé pour les lecteurs d'écran : « Mettre l'animation en pause » / « Pause the animation ».

## Fichiers

| Fichier | Rôle |
|---|---|
| `integration-section-cours.patch` | Les modifications exactes de `index.html`, `en/index.html`, `assets/css/style.css` et `assets/js/main.js` |
| `../rendu/ub-academy-trois-langues.mp4` | Vidéo principale (iPhone, Safari, tous navigateurs) |
| `../rendu/ub-academy-trois-langues.webm` | Version de secours |
| `../rendu/ub-academy-trois-langues-affiche.webp` | Image fixe (avant lecture et en mode « moins d'animations ») |

## Pour l'activer (après accord d'Ulysse seulement)

Le plus simple : dire à Claude « active l'animation 3D dans la section Cours ». Il fera les trois étapes suivantes, vérifiera le site et montrera le résultat avant toute mise en ligne.

1. Copier les trois fichiers de `prototype-3d/rendu/` dans `assets/video/` en les renommant :
   - `ub-academy-trois-langues.mp4` → `ub-academy-3d-langues.mp4`
   - `ub-academy-trois-langues.webm` → `ub-academy-3d-langues.webm`
   - `ub-academy-trois-langues-affiche.webp` → `ub-academy-3d-langues-affiche.webp`
2. Depuis la racine du dépôt : `git apply prototype-3d/integration/integration-section-cours.patch`
3. Refaire l'archive Hostinger (`outils/preparer-archive-hostinger.py`) : les nouveaux fichiers de `assets/video/` y sont repris automatiquement, avec des chemins relatifs.

L'afficher aussi sur téléphone est possible (quelques lignes de CSS en plus), mais ce n'est pas conseillé : même en petit, un cadre vertical ajouterait une hauteur d'écran presque entière à faire défiler avant d'arriver aux cours.

## Ce qui a été testé (sur une copie du site, pas sur le site)

Les résultats sont dans le `README.md` du dossier `prototype-3d`, partie « Vérifications ».
