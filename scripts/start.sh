#!/usr/bin/env sh
# Produkcijski start: pokrene Next server, pa u pozadini automatski
# progrije keš slika da posjetitelji nikad ne čekaju generiranje.
set -u

PORT="${PORT:-3000}"

node_modules/.bin/next start -p "$PORT" &
SERVER_PID=$!

(
  # pričekaj da server počne odgovarati (max 60 s)
  i=0
  while [ $i -lt 60 ]; do
    if curl -sf -o /dev/null "http://127.0.0.1:$PORT/"; then break; fi
    i=$((i + 1))
    sleep 1
  done
  sh "$(dirname "$0")/warm-image-cache.sh" "http://127.0.0.1:$PORT"
) &

wait $SERVER_PID
