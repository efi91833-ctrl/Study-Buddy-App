#!/usr/bin/env python3
"""
Study Buddy local server.
- Serves all static files (HTML, images, JS)
- POST /save-labels  → writes labels.json to disk
- GET  /labels.json  → served as a normal static file
- Adds correct headers for PWA / service-worker (sw.js served with no-cache)
"""

import os, json
from http.server import SimpleHTTPRequestHandler, HTTPServer

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        # Service worker must not be cached by the browser
        if self.path in ('/sw.js', '/manifest.json'):
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        # Allow the page to be served to iPad on local network
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def do_POST(self):
        if self.path == '/save-labels':
            try:
                length = int(self.headers.get('Content-Length', 0))
                body   = self.rfile.read(length)
                # Validate it's real JSON before writing
                json.loads(body)
                dest = os.path.join(BASE_DIR, 'labels.json')
                with open(dest, 'wb') as f:
                    f.write(body)
                self._ok('{"ok":true}')
            except Exception as e:
                self._err(str(e))
        else:
            self.send_response(404)
            self.end_headers()

    def _ok(self, body=''):
        b = body.encode()
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', len(b))
        self.end_headers()
        self.wfile.write(b)

    def _err(self, msg):
        b = json.dumps({'error': msg}).encode()
        self.send_response(500)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', len(b))
        self.end_headers()
        self.wfile.write(b)

    def log_message(self, fmt, *args):
        # Only log errors, not every GET request
        if args and str(args[1]) not in ('200', '304'):
            super().log_message(fmt, *args)

if __name__ == '__main__':
    os.chdir(BASE_DIR)
    port = 8080
    httpd = HTTPServer(('', port), Handler)
    print(f'Study Buddy running at http://localhost:{port}/index.html')
    print('Press Ctrl+C to stop.\n')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
