#!/usr/bin/env sh
# Progrije keš optimiziranih slika — zatraži svaku sliku u svim veličinama
# koje stranica koristi, pa se WebP verzije generiraju i keširaju unaprijed.
# Pokreće se automatski iz scripts/start.sh nakon što se server digne.
set -u

BASE_URL="${1:-http://127.0.0.1:3000}"
DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "[warm] grijem keš slika na $BASE_URL ..."
START=$(date +%s)

{
  for img in $(ls "$DIR"/public/img/palme/*.jpg | sed "s|$DIR/public||"); do
    for q in 70 80; do
      for w in 640 750 828 1080 1200 1920; do
        echo "$BASE_URL/_next/image?url=$(echo "$img" | sed 's|/|%2F|g')&w=$w&q=$q"
      done
    done
  done
  for img in /img/palme.jpeg /img/hero.jpeg; do
    for q in 70 75 80; do
      for w in 640 750 828 1080 1200 1920; do
        echo "$BASE_URL/_next/image?url=$(echo "$img" | sed 's|/|%2F|g')&w=$w&q=$q"
      done
    done
  done
} | xargs -P 2 -I{} curl -s -o /dev/null -m 60 -H "Accept: image/webp" "{}"

echo "[warm] gotovo u $(( $(date +%s) - START ))s"
