'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f20e0e552d2d716cd0a1dc7ce3df1edf",
".git/config": "d75f5665e3f3783c40dec4571cb67cf6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8d35ac71ef05c86ece2eedfd478b7fda",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9afda7a56091dc09c03c99cbd6f49b1d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c42794fb487ac8db2697b6d41edd81bd",
".git/logs/refs/heads/master": "c42794fb487ac8db2697b6d41edd81bd",
".git/logs/refs/remotes/origin/HEAD": "982947692b2bea80cb9fe8edf04ac3d3",
".git/logs/refs/remotes/origin/master": "d2f132f5eb6b9ba8906481d53e8d6354",
".git/objects/27/80d99101aeaddbf0220db3a58c493e16167738": "fba985208bbf2b1af1651c5e2ec64be9",
".git/objects/29/07685be0e46d4ede4a32f9bf362472400c08d1": "9107a47f2f18cb9a357d4bb842e6ede8",
".git/objects/36/7723ae1de5627ea26c77c2c56b2af1d493e276": "f659b54d87d3480650339927d75b972d",
".git/objects/57/170b5ac973ec0162f58aa06670bd9237d2b518": "5c4b87a819d398542d177448abe147df",
".git/objects/81/32b227b640a022c65cfde77e760331dcf18822": "fa9004985193539a39e7157c3de3dd50",
".git/objects/8d/ed4b673870f324bd02b46b1cb57b428c95ae2e": "9cd85cd0ddd887ae6fe8fb8ee9788a46",
".git/objects/a0/c6a52a6b519d1150779dc178bd131915081633": "036c0783615f8f60b1e4229ccc41ebb3",
".git/objects/aa/9ca05a7efd6f4f36f320f380b6bd684795c30e": "0819b3007e5dc26768973527d11230fb",
".git/objects/cf/8bf100727c0825733121ebe19d5c3dd074e8e3": "b4127bd4d3418ef06d0887ec240a508d",
".git/objects/d1/10c05f6101900f379d84f97c0a0a5226fd5325": "caac157277fc2b11693b24368289b1f5",
".git/objects/pack/pack-a0bc1b91591baaddb1886e89b03db978d4c11d9b.idx": "2fb2ddac71362bb7c3778e0ffafebf00",
".git/objects/pack/pack-a0bc1b91591baaddb1886e89b03db978d4c11d9b.pack": "22b2e2443c2c37ce25d9d3ad15166862",
".git/packed-refs": "f932264184a55102341fea9996631354",
".git/refs/heads/master": "a0ec75f8aef9328ed25c844f9df14182",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "a0ec75f8aef9328ed25c844f9df14182",
"assets/AssetManifest.json": "6453662937e20247f5740e2c88b94ecf",
"assets/assets/images/ar-en.svg": "15779608e14e22dd4a2c73cbc21b9b76",
"assets/assets/images/facebook.svg": "1e80416aa91f53526b9135b7fbcb8474",
"assets/assets/images/google.svg": "419c131b3daf232021c56ae4efbef6e5",
"assets/assets/images/LOGO.ico": "9a7ed1f1a2130a44022f1ecaaa2bb5a8",
"assets/assets/images/logo.png": "947524b7fc8c03384c122c96eddc5784",
"assets/assets/images/LOGO.svg": "e3272648dca9fd47561f106222c6daf1",
"assets/assets/images/twitter.svg": "7137286db3c9254ace982646907e65a3",
"assets/assets/locales/ar.json": "b895bdeb3bfd582687b4b59eff6a2cf7",
"assets/assets/locales/en.json": "5bbe7336027d256b226ea9ef9a7a6362",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b25234b03058aa6bcf836bea4300a73d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"CNAME": "8ee2184b50773c8af11f0363b99e8911",
"favicon.ico": "9a7ed1f1a2130a44022f1ecaaa2bb5a8",
"icons/Icon-192.png": "bd7b672c8c1b46d97c521d312356af49",
"icons/Icon-512.png": "1207715d5b09377a17651eefb4347887",
"index.html": "f099108ef1ace91453e1e66c6a5ef9c2",
"/": "f099108ef1ace91453e1e66c6a5ef9c2",
"main.dart.js": "77e4a8eeed43819d81d98d1ffb98744d",
"manifest.json": "1a2ead918ed9cd3f589a10f64c0c433d",
"version.json": "b1ff2f34dd0d1624947652b0dde66514"
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
