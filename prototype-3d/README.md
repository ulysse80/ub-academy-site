# Prototype 3D UB Academy : « Trois langues, une direction »

**Statut : rendu et vérifié.** Rendu réalisé dans le cloud avec **Blender 5.2.3 LTS** (module officiel `bpy`, la même version que sur le Mac d'Ulysse), moteur **Cycles** sur processeur. Ce n'est ni une animation CSS ni une imitation 2D : chaque image sort de Blender.

Rien n'est publié, rien n'est branché sur le site. Les deux vidéos actuelles ne sont pas touchées.

## Voir le résultat

- **Le plus simple :** ouvrir `rendu/ub-academy-trois-langues.mp4` (8 secondes, en boucle).
- **Comparaison avec l'animation actuelle :** ouvrir `comparaison.html` dans le dossier du site téléchargé (bouton vert **Code** → **Download ZIP** sur github.com, puis double-clic sur `prototype-3d/comparaison.html`).
- **Images clés :** `rendu/planche-images-cles.webp`.

## L'idée

Trois tuiles de céramique crème, **FR**, **EN** et **中文**, arrivent de la profondeur dans le désordre. Chaque mot se termine par le point orange du site, comme « UB Academy. ». Les tuiles s'alignent en colonne, le vrai logo UB Academy descend au-dessus, puis un fil orange monte du bas de l'image, traverse les trois points et rejoint le logo. Trois langues, une direction.

| Temps | Images | Ce qui se passe |
|---|---|---|
| 0 à 0,4 s | 1 à 13 | Ouverture depuis le bleu marine |
| 0,4 à 2,1 s | 1 à 64 | Les tuiles arrivent de la profondeur et se tournent vers nous : FR, puis EN, puis 中文 |
| 2,1 à 3,3 s | 64 à 98 | Pause de lecture, légère dérive |
| 2,7 à 4,3 s | 82 à 130 | Alignement en colonne : 中文 d'abord, puis EN, puis FR (les tuiles ne se croisent jamais) |
| 3,6 à 5,2 s | 108 à 156 | Le logo descend et se pose, avec un léger rebond |
| 4,6 à 5,9 s | 138 à 178 | Le fil orange monte et « allume » chaque point au passage |
| 6,1 à 7,1 s | 184 à 214 | Un éclat de lumière remonte le fil vers le logo |
| 7,5 à 8 s | 224 à 240 | Retour au bleu marine : la boucle est invisible |

Direction artistique : fond marine avec le halo bleu de l'animation actuelle (`#04142e` → `#112e67`), crème `#f6f0e6`, orange `#ff8114`, lettres marine. Le logo est le fichier d'origine (`medias/logo/logo-ub-academy.png`, simplement recadré), ni redessiné ni recoloré. Aucun chiffre, prix, promesse, témoignage, photo de tiers ou personnage généré.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `ub-academy-trois-langues.blend` | Scène Blender modifiable (logo et polices intégrés au fichier) |
| `scene_trois_langues.py` | Script qui reconstruit toute la scène et lance le rendu |
| `encoder_web.sh` | Transforme les images rendues en MP4, WebM et image fixe pour le web |
| `ressources/logo-ub-academy-recadre.png` | Logo d'origine, recadré sans retouche |
| `ressources/polices/` | Inter ExtraBold et Noto Sans SC ExtraBold (licence libre OFL, textes joints) |
| `rendu/ub-academy-trois-langues.mp4` | Vidéo finale H.264 |
| `rendu/ub-academy-trois-langues.webm` | Version de secours VP9 |
| `rendu/ub-academy-trois-langues-affiche.webp` | Image fixe (avant lecture, et pour les visiteurs qui préfèrent moins d'animations) |
| `rendu/planche-images-cles.webp` | Neuf images clés côte à côte |
| `comparaison.html` | Page de comparaison avec l'animation actuelle (non publiée) |
| `integration/` | Proposition d'intégration au site, **non activée** |

## Refaire le rendu sur le Mac

Blender 5.2.3 LTS est installé dans `/Applications/Blender.app`. Dans le Terminal, depuis ce dossier `prototype-3d` :

```sh
# Recrée la scène et produit directement un MP4 (dossier rendu/)
/Applications/Blender.app/Contents/MacOS/Blender -b -P scene_trois_langues.py -- --rendu video

# Ou : images PNG (meilleure qualité finale), puis encodage web avec ffmpeg
/Applications/Blender.app/Contents/MacOS/Blender -b -P scene_trois_langues.py -- --rendu sequence
sh encoder_web.sh rendu/images rendu
```

Options utiles après `--` : `--echantillons 48` (qualité), `--pourcentage 50` (aperçu rapide), `--rendu images-cles --images 1,120,200` (quelques images seulement), `--moteur eevee` (plus rapide sur Mac).

Sur un Mac à puce Apple, le script utilise automatiquement la carte graphique (Metal). Le rendu devrait donc être nettement plus rapide que dans le cloud. Il n'a pas été mesuré, puisque je n'ai pas accès au Mac.

Pour retoucher à la main : ouvrir `ub-academy-trois-langues.blend` dans Blender. Attention : relancer le script recrée la scène et remplace ce fichier.

## Vérifications

RESULTATS_VERIFICATION

## Recommandation

RECOMMANDATION

## Limites connues

- Le rendu Cycles sur processeur prend environ 14 s par image dans le cloud, soit près d'une heure pour les 240 images. EEVEE fonctionnait aussi, mais il était plus lent sur cette machine sans carte graphique.
- Le MP4 produit directement par Blender (`--rendu video`) n'a pas l'option « faststart ». Pour le site, utiliser plutôt `encoder_web.sh`, qui la règle, ou demander à Claude.
- Le mot 中文 utilise un sous-ensemble de police limité à ces deux caractères. Pour écrire un autre mot chinois, il faut une police Noto Sans SC complète.
