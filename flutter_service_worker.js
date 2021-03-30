'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d7803ce173332d8d1f276153abfd5059",
"icons/Icon-192.png": "6049b11f84a586d32c5f6fd3c17527e5",
"icons/Icon-512.png": "6049b11f84a586d32c5f6fd3c17527e5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/images/article.jpeg": "d1e897e836be4e3552fb9cfd2f16bfad",
"assets/assets/images/jeu.jpg": "e80f9f22de6de880d57c36996f675bd0",
"assets/assets/images/livre/editionmontblanc.png": "4e90bc654ef10f058354d2af310cc0e5",
"assets/assets/images/livre/couverture.png": "7c7a6b4ac69dbd2416dd59d4c82f8b4e",
"assets/assets/images/modestes/marie.png": "3901b8ad72f33dd3a5e7894e56b491b8",
"assets/assets/images/modestes/choyoupi.jpg": "5158cae9f581b9dc3c0eb358f0838c0c",
"assets/assets/images/modestes/emmalaya.png": "5c2046faf06b5769eb7a4d1fc5b8ea66",
"assets/assets/images/modestes/kilianmanjaro.png": "39ad8057232605f30ca53010e6b4b7b2",
"assets/assets/images/modestes/agnespurna.png": "47ec2273d53d4926a7098d06f8ea06f0",
"assets/assets/images/jeu/ulule.png": "7415d765491ca04b86c5f7443eebb10f",
"assets/assets/images/jeu/carteCadeau.png": "7898b50faf73a607e8338f4db1b764a4",
"assets/assets/images/jeu/display.gif": "f8b989f74c90c73531a7f4c51eaa59b2",
"assets/assets/images/gravirmontblanc.jpg": "0f24d182fe7ced54e1ff6352e7614383",
"assets/assets/images/flutter.png": "cd80d077e32688494d86dec1a7be576e",
"assets/assets/images/lesmodestes.jpg": "561736b89ff5e76e821d9cdd5cd0c9e1",
"assets/assets/images/main.jpg": "b8b5c30cf1f7919ca3feabd42ff48a3a",
"assets/assets/images/article/TVMontBlanc.png": "96dd18dd732e7a4bccc7704a055159fe",
"assets/assets/images/article/medium2.jpeg": "8e5ea3abf4f19ad90abb9d0b266239cc",
"assets/assets/images/article/medium1.jpeg": "08ac8a6edd0dd968b088de64fdb8f516",
"assets/assets/images/article/medium0.png": "6328a6ce6f1f20a780947ff285565ca0",
"assets/assets/images/article/medium4.png": "5c3249f5d104d19ca2ba40adf5e3ccb1",
"assets/assets/images/article/onParleDeNous/france3.png": "fd51d1035fbf9e097cb2bcd7d4ba6700",
"assets/assets/images/article/onParleDeNous/hebdoSavoie.png": "7c03b1f67d84cb88c72c52eb7b71469f",
"assets/assets/images/article/onParleDeNous/outside.png": "7c1f51451174c605e307c83422b513bb",
"assets/assets/images/article/onParleDeNous/arravis.png": "dfd2298010b3164b0032dce79aa9a71f",
"assets/assets/images/article/onParleDeNous/voyage.png": "dc0c3eb95a5f23b8e8352377e43ea980",
"assets/assets/images/article/onParleDeNous/ghm.png": "ec2382aadc819bb41e8ecf5146465f92",
"assets/assets/images/article/onParleDeNous/onAcheteFrancais.png": "852cae4c8b850675503de1f5bae4c410",
"assets/assets/images/article/onParleDeNous/123Savoie.png": "2950827f3f957f27b6e08d059ee74b67",
"assets/assets/images/article/onParleDeNous/sportTourisme.png": "22291a0de9855e316e2a8bfa6606b649",
"assets/assets/images/article/liveMontBlanc.png": "6d16483a52299b0b7b0b96b10d281b13",
"assets/assets/images/article/fusalp.jpg": "c16b80bfd9f177ea043d064d09a862af",
"assets/assets/images/article/presseEcrite/nationalGeo.png": "d1ee0f956d14ba1a01712ed688227f9c",
"assets/assets/images/article/presseEcrite/naturetrail.jpg": "e0d6be5653dd8a7c086f6d088e2ae0f6",
"assets/assets/images/article/presseEcrite/trekmagazine.jpg": "3734e8e7bea86bab05f838e1d1ccadc1",
"assets/assets/images/article/logo/helloways.png": "263d0e3ff1ad859ea778a920f27db6f6",
"assets/assets/images/article/logo/tv8montBlanc.png": "13c76cac012476aba1b1758d9ea2f8fd",
"assets/assets/images/article/medium3.png": "1abf2928afc1554fad52c181dcd6b161",
"assets/assets/images/article/ennaturesimone0.jpg": "cb8ba1f4b1bd89f4c81703872557a6b6",
"assets/assets/images/article/medium5.png": "8aa50a7165a25acf074a4f8e9d69fa28",
"assets/NOTICES": "ff59a344ef5aa6c991bb0904fed20fc9",
"assets/AssetManifest.json": "7a8f42a42f4444f4a15ba8e7c5fcdb37",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Adam-Medium.ttf": "113f8bcfa135c330a359a7fbe463c03a",
"assets/fonts/Karla-Regular.ttf": "1b55fee684d61bfeaa762684931b1bc9",
"assets/fonts/Larizo%2520DEMO.ttf": "9c6f920792b39143f447cb1009dc8bd6",
"assets/FontManifest.json": "912a4b9944bf0e81984de5d1363dd729",
"manifest.json": "af55192ec7b2a3f018f62347440c5b09",
"main.dart.js": "b9976a183ff5ed0c1ed3333a630cf0df",
"favicon.png": "6049b11f84a586d32c5f6fd3c17527e5",
"index.html": "51c0a92d48e36d58e30ec6ae37ad4041",
"/": "51c0a92d48e36d58e30ec6ae37ad4041"
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
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
