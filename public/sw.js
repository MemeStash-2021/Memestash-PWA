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
