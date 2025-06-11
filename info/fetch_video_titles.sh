#!/bin/bash

# Ensure yt-dlp is installed
command -v yt-dlp >/dev/null 2>&1 || { echo >&2 "yt-dlp not found. Install with: pip install yt-dlp"; exit 1; }

# Output directory
OUTPUT_DIR="youtube_video_refs"
mkdir -p "$OUTPUT_DIR"

# Array of videos (format: Title ::: URL)
videos=(
  "A* Search: How Your Map Applications Find Shortest Routes ::: https://www.youtube.com/watch?v=88I6IidylGc"
  "The Discrete Fourier Transform: Most Important Algorithm Ever? ::: https://www.youtube.com/watch?v=yYEMxqreA10"
  "The Traveling Salesman Problem: When Good Enough Beats Perfect ::: https://www.youtube.com/watch?v=GiDsjIBOVoA"
  "PageRank: A Trillion Dollar Algorithm ::: https://www.youtube.com/watch?v=JGQe4kiPnrU"
  "How PNG Works: Compromising Speed for Quality ::: https://www.youtube.com/watch?v=EFUYNoFRHQI"
  "The Unreasonable Effectiveness of JPEG: A Signal Processing Approach ::: https://www.youtube.com/watch?v=0me3guauqOU"
  "How Computers Draw Weird Shapes (Marching Squares) ::: https://www.youtube.com/watch?v=6oMZb3yP_H8"
  "Huffman Codes: An Information Theory Perspective ::: https://www.youtube.com/watch?v=B3y0RsVCyrw"
  "A Strange But Elegant Approach to a Surprisingly Hard Problem (GJK Algorithm) ::: https://www.youtube.com/watch?v=ajv46BSqcK4"
  "Building Collision Simulations: An Introduction to Computer Graphics ::: https://www.youtube.com/watch?v=eED4bSkYCB8"
  "FFT Example: Unraveling the Recursion ::: https://www.youtube.com/watch?v=Ty0JcR6Dvis"
  "The Fast Fourier Transform (FFT): Most Ingenious Algorithm Ever? ::: https://www.youtube.com/watch?v=h7apO7q16V0"
  "Breadth First Search (BFS): Visualized and Explained ::: https://www.youtube.com/watch?v=xlVX7dXLS64"
  "5 Simple Steps for Solving Dynamic Programming Problems ::: https://www.youtube.com/watch?v=aPQY__2H3tE"
  "Depth First Search (DFS) Explained: Algorithm, Examples, and Code ::: https://www.youtube.com/watch?v=PMMc4VsIacU"
  "Introduction to Graph Theory: A Computer Science Perspective ::: https://www.youtube.com/watch?v=LFKZLXVO-Dg"
  "Towers of Hanoi: A Complete Recursive Visualization ::: https://www.youtube.com/watch?v=rf6uf3jNjbo"
  "What Is Big O Notation? ::: https://www.youtube.com/watch?v=Q_1M2JaijjQ"
  "5 Simple Steps for Solving Any Recursive Problem ::: https://www.youtube.com/watch?v=ngCos392W4w"
  "The Simple and Elegant Idea behind Efficient Dynamic Arrays ::: https://www.youtube.com/watch?v=Ij7NQ-0mIVA"
  "What if you had to invent a dynamic array? ::: https://www.youtube.com/watch?v=5AllG-i_yto"
  "What Actually Is a Data Structure? ::: https://www.youtube.com/watch?v=VAt2mR7gY0k"
  "A Preview for Data Structures and Algorithms ::: https://www.youtube.com/watch?v=FtwF6cmzamo"
)

echo "[+] Starting video metadata fetch..."

for entry in "${videos[@]}"; do
  TITLE="${entry%% ::: *}"
  URL="${entry##*::: }"
  SAFE_NAME=$(echo "$TITLE" | tr '[:space:]' '_' | tr -cd '[:alnum:]_-')
  echo "[*] Fetching: $TITLE"
  yt-dlp --skip-download --print "%(title)s — %(upload_date)s — %(duration_string)s — %(view_count)s views" "$URL" > "$OUTPUT_DIR/${SAFE_NAME}.txt"
done

echo "[✔] Done. Output saved in: $OUTPUT_DIR/"

