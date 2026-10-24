#!/bin/sh
# Assemble les images PNG en vidéo MP4 pour les réseaux sociaux
# (H.264 High, yuv420p, 1080 × 1920, 30 i/s, sans son, « faststart »).
# Usage : sh outils/encoder.sh DOSSIER_IMAGES FICHIER.mp4
set -e
IMAGES="${1:-rendu/images-fr}"
SORTIE="${2:-rendu/ub-academy-reseaux-fr.mp4}"
ffmpeg -y -loglevel error -framerate 30 -i "$IMAGES/%04d.png" \
  -vf setsar=1 -c:v libx264 -preset slow -crf "${CRF:-21}" -profile:v high -level 4.2 -pix_fmt yuv420p \
  -movflags +faststart -an "$SORTIE"
ls -l "$SORTIE"
