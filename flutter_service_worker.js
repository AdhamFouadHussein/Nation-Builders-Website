'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "android-icon-144x144.png": "967ef6fa88718b6f2ce4c7c0608771cc",
"android-icon-192x192.png": "28b7852b9fdc0af95e9299fc648978fa",
"android-icon-36x36.png": "869e7a8c2ba7890146f85edb4761420d",
"android-icon-48x48.png": "3d3880898838ef6f538c82220c56991c",
"android-icon-72x72.png": "a10ae46529716a717847cadedb41d14f",
"android-icon-96x96.png": "219844b7a740419b9e67f3fd651a601d",
"apple-icon-114x114.png": "b57b14c41eb1ba6e952c5251559407ea",
"apple-icon-120x120.png": "21ecdefb1c8eab3474f624d2e6b3b249",
"apple-icon-144x144.png": "967ef6fa88718b6f2ce4c7c0608771cc",
"apple-icon-152x152.png": "7d10e03b1a4a255b1b81de0987e86e95",
"apple-icon-180x180.png": "60accd96944036c502c106eee30bc519",
"apple-icon-57x57.png": "fe541cc87088465479ddc1ea5e31a3f8",
"apple-icon-60x60.png": "cf1f8f2ce6de96d490f6aee80f34f00a",
"apple-icon-72x72.png": "a10ae46529716a717847cadedb41d14f",
"apple-icon-76x76.png": "cf9f1598fc09564697fdfd114e5b863f",
"apple-icon-precomposed.png": "2c0ca37288ed3148423dbd8f38ac266e",
"apple-icon.png": "2c0ca37288ed3148423dbd8f38ac266e",
"assets/AssetManifest.json": "6ea6731ee1e77aca37e6fde25b1dc25f",
"assets/assets/fonts/BoxIcons.ttf": "63d9b68d0060d07090cbefe159714a83",
"assets/assets/fonts/RedHatDisplay-Black.ttf": "9e894d6447ebd8b4d5d5afbc888f1a02",
"assets/assets/fonts/RedHatDisplay-BlackItalic.ttf": "088b56cbd33df63adf01cc44e5e2c7ff",
"assets/assets/fonts/RedHatDisplay-Bold.ttf": "b1c152bb20fffab8db5551832d2c48f2",
"assets/assets/fonts/RedHatDisplay-BoldItalic.ttf": "23415323a3d5443844fc5e6361a33e7c",
"assets/assets/fonts/RedHatDisplay-Italic.ttf": "2745b121792c68a8cc5da573fd6bc2f1",
"assets/assets/fonts/RedHatDisplay-Medium.ttf": "ece83a2583223497d95d1195546b170b",
"assets/assets/fonts/RedHatDisplay-MediumItalic.ttf": "90e4820018aad5bcae12bb731de8b612",
"assets/assets/fonts/RedHatDisplay-Regular.ttf": "e4690c0771f951cf1a0efa6ab8d01ec1",
"assets/assets/images/1.png": "a9f0b7d3905d43cf1f26fb024075b374",
"assets/assets/images/2.png": "f417b2116070b47685402ac1091e7490",
"assets/assets/images/ar-en.svg": "b99f8044825b72ff28d5ad0592398829",
"assets/assets/images/Coin.png": "22f6cda0f37b18a229611bcd6a7f4b25",
"assets/assets/images/CoinSmall.png": "fdcbab7eb09cdc6f0115c93cdbdebc23",
"assets/assets/images/crown.png": "9c1e57ff83fba53737669428c00613c6",
"assets/assets/images/facebook.svg": "1e80416aa91f53526b9135b7fbcb8474",
"assets/assets/images/google.svg": "419c131b3daf232021c56ae4efbef6e5",
"assets/assets/images/LOGO.ico": "9a7ed1f1a2130a44022f1ecaaa2bb5a8",
"assets/assets/images/logo.png": "0b884a2367b9fd6a9351f37b84405bdd",
"assets/assets/images/LOGO.svg": "e3272648dca9fd47561f106222c6daf1",
"assets/assets/images/navwave.png": "2a05b6f7ee865b76f78a1f708ca45daa",
"assets/assets/images/twitter.svg": "7137286db3c9254ace982646907e65a3",
"assets/assets/images/user.jpg": "bd71b044eb55108f22c6af49ca87e901",
"assets/assets/images/user.png": "80d35342c6c643d92900c004f26b69fa",
"assets/assets/images/video.jpg": "7bfbd751769c2ba6f63f68298f035b6b",
"assets/assets/images/wave.png": "8dc7edb0f89699f945b57c850ec6d1cd",
"assets/assets/locales/ar.json": "2f763b3035f1dea82415af9c1ed981ae",
"assets/assets/locales/en.json": "2303c5274574cc341b880b5a28f21884",
"assets/FontManifest.json": "56aac3159d60acc48f69a11bca9a8efc",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e20aa95e10462c9ae6d0f4ed30ea176c",
"assets/packages/country_state_city_picker/lib/assets/country.json": "f5386896e847173e0a31b7bbc6890c5a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"favicon-16x16.png": "899da8abf09e523393352dd4685f88a8",
"favicon-32x32.png": "b0e95fcfbc8e86aa9821e34cb5a5095d",
"favicon-96x96.png": "219844b7a740419b9e67f3fd651a601d",
"favicon.ico": "2c0caa321d9dd52f77a22c46446e4139",
"icons/Icon-192.png": "bd7b672c8c1b46d97c521d312356af49",
"icons/Icon-512.png": "1207715d5b09377a17651eefb4347887",
"index.html": "be85f57a1e0189bf5f466c23d9b0ed4a",
"/": "1f24a23955d8351907194708719b7e33",
"main.dart.js": "b01287427ac87017e0393e013d95e564",
"manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"ms-icon-144x144.png": "967ef6fa88718b6f2ce4c7c0608771cc",
"ms-icon-150x150.png": "2ca24726c17018dcf5afb5be275af38b",
"ms-icon-310x310.png": "d90eeff5a00976b22edbd2635e82a418",
"ms-icon-70x70.png": "ceb45eac6627f689cddd4c6a8a06923f",
"Privacy/index.html": "1f24a23955d8351907194708719b7e33",
"version.json": "9fda295cf6eade64a4960208387fb432"
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
