#!/bin/bash
# Double-click this file to open Study Buddy in Chrome

cd "$(dirname "$0")"

# Kill any old server on port 8080
lsof -ti:8080 | xargs kill -9 2>/dev/null

# Start local server in background
python3 -m http.server 8080 &
SERVER_PID=$!

# Wait a moment for server to start
sleep 0.8

# Open in Chrome
open -a "Google Chrome" "http://localhost:8080/index.html"

echo "Study Buddy running at http://localhost:8080/index.html"
echo "Press Ctrl+C to stop the server."

# Keep running until user stops it
wait $SERVER_PID
