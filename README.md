# gym notes

A workout log that feels like a plain notes app. Last session's numbers sit faded under every set, so you type over them.

- **App:** `index.html`, a single file with no build step. Double-click it to open it in a browser.
- **Live link:** GitHub Pages address, added after the first deploy.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app: markup, styles and script |
| `manifest.webmanifest` | Name, colours and icons used when the app is added to a home screen |
| `sw.js` | Keeps the app opening with no connection |
| `icon.svg`, `icon-*.png`, `apple-touch-icon.png` | App icons |

## Updating the live link

Edit, commit, push. GitHub Pages publishes the new version within a minute or two, at the same address.

```
git add -A
git commit -m "describe the change"
git push
```

Phones that already have the app pick up the new version the next time they open it with a connection.

## Do not change

`var KEY = "tmn.v1"` in `index.html` is the storage key. If it changes, the app can no longer read notes already saved on people's phones.

## Where the data lives

Each person's notes are stored only in their own browser (`localStorage`). Nothing is sent to a server. Clearing browser data or switching phones loses the notes; use **export as markdown** to keep a copy.

The old Claude artifact link (https://claude.ai/code/artifact/cbf8d7e8-028c-462e-9284-e275318de5c6) is a separate address, so notes saved there do not appear here.
