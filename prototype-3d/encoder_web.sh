#!/bin/sh
# Transforme les images PNG rendues par Blender en fichiers légers pour le web :
# MP4 H.264 (iPhone, Safari, tous navigateurs), WebM VP9 (secours) et image d'attente WebP.
# Usage : sh encoder_web.sh [DOSSIER_IMAGES] [DOSSIER_SORTIE]
# Exemple : sh encoder_web.sh rendu/images rendu
set -e
IMAGES="${1:-rendu/images}"
SORTIE="${2:-rendu}"
NOM="ub-academy-trois-langues"
mkdir -p "$SORTIE"

# MP4 : H.264 High, yuv420p, sans piste son, « faststart » (lecture avant la fin du téléchargement)
ffmpeg -y -loglevel error -framerate 30 -i "$IMAGES/%04d.png" \
  -c:v libx264 -preset veryslow -crf "${CRF:-20}" -profile:v high -level 4.0 -pix_fmt yuv420p \
  -movflags +faststart -an "$SORTIE/$NOM.mp4"

# WebM : VP9, sans piste son
ffmpeg -y -loglevel error -framerate 30 -i "$IMAGES/%04d.png" \
  -c:v libvpx-vp9 -b:v 0 -crf "${CRF_VP9:-30}" -row-mt 1 -deadline good -cpu-used 1 -pix_fmt yuv420p \
  -an "$SORTIE/$NOM.webm"

# Image d'attente : la composition finale complète (logo, colonne, fil), avant l'éclat lumineux
ffmpeg -y -loglevel error -i "$IMAGES/0186.png" -c:v libwebp -quality 82 "$SORTIE/$NOM-affiche.webp"

ls -l "$SORTIE/$NOM.mp4" "$SORTIE/$NOM.webm" "$SORTIE/$NOM-affiche.webp"
