'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "6049b11f84a586d32c5f6fd3c17527e5",
"icons/Icon-512.png": "6049b11f84a586d32c5f6fd3c17527e5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/assets/images/article.jpeg": "d1e897e836be4e3552fb9cfd2f16bfad",
"assets/assets/images/livre/editionmontblanc.png": "4e90bc654ef10f058354d2af310cc0e5",
"assets/assets/images/livre/couverture.png": "7c7a6b4ac69dbd2416dd59d4c82f8b4e",
"assets/assets/images/modestes/sylvain.jpg": "5158cae9f581b9dc3c0eb358f0838c0c",
"assets/assets/images/modestes/kilian.jpg": "240900df9f53465ac2f94a78f1bf0bb8",
"assets/assets/images/modestes/emmanuelle.jpg": "23e1ae9ba5dd152912c8397a8106cd8d",
"assets/assets/images/modestes/agnes.jpg": "eea2798ac61e0c736ebd55534babf9a5",
"assets/assets/images/onParleDeNous/outside.png": "62e538fa6553e96e35b4a2d0b946668b",
"assets/assets/images/onParleDeNous/123Savoie.jpeg": "3747246e2ce35fc20acddf1084eb91b4",
"assets/assets/images/onParleDeNous/france3.jpg": "50512d1e7755ba9cae6a0c085dda769a",
"assets/assets/images/gravirmontblanc.jpg": "0f24d182fe7ced54e1ff6352e7614383",
"assets/assets/images/presseEcrite/nationalGeo.png": "d1ee0f956d14ba1a01712ed688227f9c",
"assets/assets/images/presseEcrite/naturetrail.jpg": "e0d6be5653dd8a7c086f6d088e2ae0f6",
"assets/assets/images/presseEcrite/trekmagazine.jpg": "3734e8e7bea86bab05f838e1d1ccadc1",
"assets/assets/images/flutter.png": "cd80d077e32688494d86dec1a7be576e",
"assets/assets/images/lesmodestes.jpg": "561736b89ff5e76e821d9cdd5cd0c9e1",
"assets/assets/images/main.jpg": "b8b5c30cf1f7919ca3feabd42ff48a3a",
"assets/assets/images/article/medium2.jpeg": "8e5ea3abf4f19ad90abb9d0b266239cc",
"assets/assets/images/article/medium1.jpeg": "08ac8a6edd0dd968b088de64fdb8f516",
"assets/assets/images/article/medium0.png": "6328a6ce6f1f20a780947ff285565ca0",
"assets/assets/images/article/medium4.png": "5c3249f5d104d19ca2ba40adf5e3ccb1",
"assets/assets/images/article/liveMontBlanc.png": "6d16483a52299b0b7b0b96b10d281b13",
"assets/assets/images/article/fusalp.jpg": "c16b80bfd9f177ea043d064d09a862af",
"assets/assets/images/article/medium3.png": "1abf2928afc1554fad52c181dcd6b161",
"assets/assets/images/article/ennaturesimone0.jpg": "cb8ba1f4b1bd89f4c81703872557a6b6",
"assets/assets/images/article/medium5.png": "8aa50a7165a25acf074a4f8e9d69fa28",
"assets/NOTICES": "283ba2d03483aad177b451067bc8a946",
"assets/AssetManifest.json": "50f7e5ca6bc89962b873b5963560ccd5",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/FontManifest.json": "7c3cac6786c1665317044cfa0bf50f2e",
"manifest.json": "af55192ec7b2a3f018f62347440c5b09",
"main.dart.js": "a1c95346e7512dc226a968b0ab1f992f",
"favicon.png": "6049b11f84a586d32c5f6fd3c17527e5",
"index.html": "4d4f9089cd5c136a8264cfe8a996a962",
"/": "4d4f9089cd5c136a8264cfe8a996a962"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
