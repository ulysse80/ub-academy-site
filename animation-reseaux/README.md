# Animation 3D UB Academy pour les réseaux sociaux

**Statut : rendu et vérifié.** 10 secondes, format vertical 1080 × 1920 (Reels, TikTok, Stories, statut WhatsApp), en français et en anglais. Rien n'est publié.

## Voir le résultat

| Fichier | Usage |
|---|---|
| `rendu/ub-academy-reseaux-fr.mp4` | Version française, qualité maximale (17,5 Mo), pour Instagram ou TikTok |
| `rendu/ub-academy-reseaux-en.mp4` | Version anglaise, même qualité |
| `rendu/ub-academy-reseaux-fr-leger.mp4` et `-en-leger.mp4` | 720 × 1280, 6,4 Mo : pour WhatsApp ou un envoi rapide |
| `rendu/couverture-fr.jpg` et `couverture-en.jpg` | Image de couverture (la dernière image) |
| `rendu/planche-images-cles.webp` | Neuf images clés côte à côte |
| `index.html` | L'animation **en direct**, calculée par la carte graphique : double-clic pour l'ouvrir dans Chrome ou Safari, elle tourne en boucle. Ajouter `?langue=en` à l'adresse pour l'anglais |

## Ce que montre l'animation

| Temps | Ce qui se passe |
|---|---|
| 0 à 0,3 s | Une étincelle orange, avec un reflet horizontal, sur le fond marine |
| 0,3 à 1,2 s | Elle explose en 70 000 particules : traînées lumineuses, onde de choc, la caméra fonce dedans |
| 0,8 à 3,2 s | Les particules tourbillonnent et écrivent **« Bonjour »** en lettres de lumière en volume, pendant que la caméra tourne autour |
| 3,2 à 5 s | Un coup de vent balaie le mot de gauche à droite et le transforme en **« Hello »** |
| 5 à 6,9 s | Une tornade fait tourner les lettres autour de l'axe vertical : **« 你好 »** |
| 6,9 à 8,2 s | Tout s'effondre en un point, éclair, onde de choc, et les particules dessinent le **logo UB Academy** |
| 8,1 à 10 s | Le vrai logo se pose sur une carte crème. Les particules partent en anneau en orbite autour d'elle. Puis apparaissent « FRANÇAIS · ANGLAIS · CHINOIS » et « En ligne, où que vous soyez. » |

Couleurs du site : marine `#04142e`, halo `#112e67`, crème `#f6f0e6`, orange `#ff8114`. Le logo final est le fichier d'origine, au pixel près. Les particules qui le dessinent juste avant sont tirées de ses vrais pixels et de ses vraies couleurs. La seule phrase, « En ligne, où que vous soyez », est celle validée pour le site. Aucun chiffre, prix, promesse ni témoignage.

## L'outil, et pourquoi

**Three.js** (WebGL) : de la 3D calculée par la carte graphique, dans un navigateur. Pour les rendus, Chromium calcule l'animation image par image, sans s'occuper du temps réel, puis ffmpeg assemble la vidéo.

Pour ce style (particules, lumière, traînées, halo), c'est plus adapté que Blender : un rendu complet prend **3,5 minutes ici au lieu de 71**, donc chaque correction se voit presque tout de suite. Ce rendu a demandé quatre allers-retours de corrections.

## Vérifications

| Contrôle | Résultat |
|---|---|
| Durée, cadence | 10,000 s, 30 images/s, 300 images |
| Taille | 1080 × 1920, pixels carrés, 9:16 |
| Format | H.264 High 4.2, yuv420p, « faststart », sans piste son |
| Fidélité d'encodage | SSIM 0,983 par rapport aux images d'origine (1 = identique). Les grains de lumière sont conservés |
| Image par image | Planche toutes les 10 images relue : pas de saut, pas de tache, textes lisibles |
| Version en direct (`index.html`) | Ouverte dans Chromium en français et en anglais : aucune erreur, format 9:16 respecté |
| Textes | Aucun grand tiret ; zones des boutons Instagram (bord droit, bas de l'écran) laissées libres |

Non vérifié : l'affichage réel dans l'application Instagram ou TikTok, qui réencode toujours les vidéos.

## Pour publier (plus tard, quand vous le décidez)

- Instagram Reels ou TikTok : envoyer `ub-academy-reseaux-fr.mp4`, choisir une musique dans l'application (la vidéo n'a pas de son), et utiliser `couverture-fr.jpg` comme couverture.
- Statut WhatsApp : la version `-leger.mp4`.

## Modifier

Le plus simple : demander à Claude (« change Bonjour par Salut », « mets la phrase en arabe », « fais une version de 15 s »).

Pour info technique :
- **Code source :** `src/animation.js`.
- **Construire :** `npm install`, puis `npm run construire` produit `animation.js`.
- **Rendre les images :** `node outils/capture.cjs --langue fr`. Il faut Node.js et Playwright.
- **Faire la vidéo :** `sh outils/encoder.sh rendu/images-fr rendu/ub-academy-reseaux-fr.mp4`.
- **Polices :** ce sont des sous-ensembles qui ne contiennent que les lettres utilisées. Un nouveau mot demande d'en télécharger une version plus complète.

## Licences

- Three.js : licence MIT (`src/ressources/LICENCE-three.txt`). La mention est aussi incluse dans `animation.js`.
- Polices Inter, Fraunces et Noto Sans SC : licence libre OFL (`src/ressources/polices/`), utilisables commercialement.
