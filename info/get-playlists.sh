#!/bin/bash

# Replace with the channel URL (e.g., https://www.youtube.com/@channelname or channel ID)
CHANNEL_URL="$1"

if [ -z "$CHANNEL_URL" ]; then
  echo "Usage: $0 <YouTube Channel URL>"
  exit 1
fi

# Create output directory
mkdir -p playlists_metadata
cd playlists_metadata

# Step 1: Download all playlists
echo "[+] Fetching playlists from: $CHANNEL_URL"
yt-dlp --flat-playlist --skip-download --print "%(title)s ::: %(url)s" "$CHANNEL_URL/playlists" > playlists.txt

# Step 2: Loop through each playlist and get video titles
echo "[+] Fetching video metadata from each playlist..."
while IFS=" ::: " read -r PL_TITLE PL_URL; do
  SAFE_TITLE=$(echo "$PL_TITLE" | tr -dc '[:alnum:]._-' | cut -c1-50)
  echo "[*] Processing: $PL_TITLE"

  yt-dlp --flat-playlist --skip-download --print "%(title)s" "$PL_URL" > "${SAFE_TITLE}_videos.txt"
done < playlists.txt

echo "[✔] Done. All playlist video titles saved in 'playlists_metadata/'"

