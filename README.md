# gym notes

A workout log that feels like a plain notes app. Last session's numbers sit faded under every set, so you type over them.

- **App:** `gym-notes.html`, a single file with no build step. Double-click it to open it in a browser.
- **Live link:** https://claude.ai/code/artifact/cbf8d7e8-028c-462e-9284-e275318de5c6

## Updating the live link

Edit `gym-notes.html`, then ask Claude Code, including the link:

> Publish gym-notes.html to https://claude.ai/code/artifact/cbf8d7e8-028c-462e-9284-e275318de5c6

Without the link, Claude creates a new, separate URL.

## Do not change

`var KEY = "tmn.v1"` is the storage key. If it changes, the app can no longer read notes already saved on your devices.
