#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo "📂 Serving from: $DIR"

# Kill any old server on port 8080
lsof -ti:8080 | xargs kill -9 2>/dev/null
sleep 0.3

# Start custom server (handles save-labels endpoint)
python3 "$DIR/server.py" &
SERVER_PID=$!
sleep 1

open -a "Google Chrome" "http://localhost:8080/index.html"

wait $SERVER_PID
