"use strict";
const CACHE_NAME = "MemeDex-V1"
const CACHE_URLS = [
    "/",
    "index.html",
    "collection.html",
    "card.html",
    "assets/css/index.css",
    "assets/css/collection.css",
    "assets/css/card.css",
    "assets/css/reset.css",
    "assets/js/util/swUtil.js",
    "assets/js/util/offUtil.js",
    "assets/js/util/wrappers.js",
    "assets/js/util/formatter.js",
    "assets/js/util/clickable.js",
    "assets/js/lib/localforage.min.js",
    "assets/js/collection.js",
    "assets/js/config/config.js",
    "assets/js/api.js",
    "assets/js/index.js",
    "sw.js",
    "manifest.json",
    "favicon.png"
]

self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(CACHE_URLS);
        })
    )
});

self.addEventListener("fetch", function (e) {
    e.respondWith(fetch(e.request)
        .catch(f => {
            return caches.open(CACHE_NAME).then(cache => {
                return cache.match(e.request);
            })
        })
    );
});

self.addEventListener("push", e => {
    const data = e.data.json();
    const title = data.msg;
    const text = `You (${data.user.username}) have just received a new "${data.card.name}" card!`
    self.registration.showNotification(title, {body: text, icon: "/assets/icons/icons-192x192.png"})
})
