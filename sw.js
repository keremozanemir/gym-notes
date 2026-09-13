/* Offline support.
   App files: network first, so a new version shows up the next time the app
   is opened with a connection; the cached copy is used only when offline.
   Fonts: cache first, since they never change.
   Notes themselves are not here — they live in localStorage on the device. */

var CACHE = "gym-notes-v1";
var CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(CORE); }));
  self.skipWaiting();
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

function put(req, res){
  var copy = res.clone();
  caches.open(CACHE).then(function(c){ c.put(req, copy); });
  return res;
}

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;
  var url = new URL(req.url);

  if(url.origin === self.location.origin){
    e.respondWith(
      fetch(req).then(function(res){ return res.ok ? put(req, res) : res; }).catch(function(){
        return caches.match(req).then(function(hit){
          return hit || (req.mode === "navigate" ? caches.match("./index.html") : Response.error());
        });
      })
    );
    return;
  }

  if(url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com"){
    e.respondWith(
      caches.match(req).then(function(hit){
        return hit || fetch(req).then(function(res){ return put(req, res); });
      })
    );
  }
});
