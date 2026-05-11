#!/usr/bin/env python3
"""
Run this ONCE to download all CDN scripts locally.
After running, Study Buddy works 100% offline.

Usage:  python3 download-vendor.py
"""

import urllib.request, os, sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
VENDOR     = os.path.join(SCRIPT_DIR, 'vendor')
os.makedirs(VENDOR, exist_ok=True)

FILES = [
    ('https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js',       'react.min.js'),
    ('https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js','react-dom.min.js'),
    ('https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.2/babel.min.js',            'babel.min.js'),
    ('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',                      'pdf.min.js'),
    ('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',               'pdf.worker.min.js'),
]

print('Downloading vendor scripts for offline use...\n')
ok = True
for url, name in FILES:
    dest = os.path.join(VENDOR, name)
    try:
        print(f'  {name} ...', end=' ', flush=True)
        urllib.request.urlretrieve(url, dest)
        size = os.path.getsize(dest)
        print(f'OK  ({size // 1024} KB)')
    except Exception as e:
        print(f'FAILED: {e}')
        ok = False

if ok:
    print('\nAll done! Study Buddy is now fully offline.')
    print('Open the app and do one hard refresh (Cmd+Shift+R) to update the cache.')
else:
    print('\nSome downloads failed. Check your internet connection and try again.')
    sys.exit(1)
