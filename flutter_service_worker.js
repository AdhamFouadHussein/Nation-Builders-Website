'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "36855e969288c3cb5709bb1fc3b3c084",
".git/config": "d75f5665e3f3783c40dec4571cb67cf6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ddf1b8e855d6716f6991dfdbd9caf55e",
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
".git/index": "17a6acde55464729c2b11d6ff07fc0a5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b38c2e1b8e32cf25a2952f4ee630ab4c",
".git/logs/refs/heads/master": "b38c2e1b8e32cf25a2952f4ee630ab4c",
".git/logs/refs/remotes/origin/HEAD": "c0fcdbd7490647242cc0287999171341",
".git/logs/refs/remotes/origin/master": "5b84853e7b11b367178be3d3b1592f7d",
".git/objects/29/f3d15740c9eb3654fb89b83e9f7fedaec3baee": "6f5448ca231e351574b188f77abc1783",
".git/objects/33/1f880fc79305bd1cb93a86f5d71e874b6b4363": "d6a098b26c967764e2f859d05ab41a4e",
".git/objects/33/34eb7f6c0d12c72cd1f5f9721a4cc82a4383f6": "c74f48b395d1f85b9670d994ed7af56f",
".git/objects/79/c313f4c15911539e5aaab0a7e8072aec170cb9": "de9d095e3517ab11f52571be4895d303",
".git/objects/7f/44d5919393fb79ca3d74fe33b16b3867a3027f": "37d9683dbd5572e9628b20868c12a959",
".git/objects/90/c3bfdd6d201d70ce771dade08f1f5853201f8a": "da6aa358e17d24611b7069838ce9b393",
".git/objects/ac/6330bff529f81c7d3bcac70dc1b2d987c5d8f0": "6c7213fe07d12604f245e61940583ffc",
".git/objects/af/5e78c65767d6578e2893fdfa123e5de3a01afe": "fe8214d6091c67927173c99e4e3c4688",
".git/objects/ba/9ef0b260547e7c5abeca994504e810c0f6b0c0": "640451a723c608d48ac258da6091aa87",
".git/objects/c1/3302797379e89e50a1e4e59d5a7c56af753def": "18107f322d440dc26100f0d3de8550aa",
".git/objects/cc/c7184339c0d58b5b5a910b4f3d84720da37df5": "c9d8b618e825723b620ac3711442a7a1",
".git/objects/ed/8218edb88daa9e38cd8ea823ffc60ec3670c90": "978ce90170ae9a9d10a981f857aafcb6",
".git/objects/ee/959f58a4fbeb2c40c96a9b0f49bfc6661cbbde": "8e1429aefc4cde9ce0ce7030cd994b2e",
".git/objects/f9/888cc6f2ffba70872857bb7e5f09cb8f549080": "35d10fce760047fcbb62b9a9a3f936ee",
".git/objects/pack/pack-15e71629b0c76e4aecf709c1b5f7c256abd69f78.idx": "741bd7df12b31790c0f2c505625b09c8",
".git/objects/pack/pack-15e71629b0c76e4aecf709c1b5f7c256abd69f78.pack": "cdc5960f0547462789896c963d1f14d2",
".git/packed-refs": "46d854f6dfa21a55854e7355256821f3",
".git/refs/heads/master": "0e6c2a4b02a87afb9480887f0ab4cbc3",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "0e6c2a4b02a87afb9480887f0ab4cbc3",
"assets/AssetManifest.json": "d7558941a70bd67741a80ec9b0d82836",
"assets/assets/images/ar-en.svg": "15779608e14e22dd4a2c73cbc21b9b76",
"assets/assets/images/facebook.svg": "1e80416aa91f53526b9135b7fbcb8474",
"assets/assets/images/google.svg": "419c131b3daf232021c56ae4efbef6e5",
"assets/assets/images/LOGO.svg": "e3272648dca9fd47561f106222c6daf1",
"assets/assets/images/twitter.svg": "7137286db3c9254ace982646907e65a3",
"assets/assets/locales/ar.json": "150e2d99185a6cb882ce95f5ccf23ce3",
"assets/assets/locales/en.json": "1cd4a62e2466c1eba67e4330c47badda",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "1048a23f7faf8940eb0619bece40811d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5d15641f571d0501755c6a1e262b23ce",
"/": "5d15641f571d0501755c6a1e262b23ce",
"main.dart.js": "c3f8dd49883980dc82d49cc5d1e793e7",
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
