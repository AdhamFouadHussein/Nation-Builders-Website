'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c03a6d2fd123bbfaff77c7e8a9e5ed37",
".git/config": "d75f5665e3f3783c40dec4571cb67cf6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a2a4dab4ff7ab73c53c2050a1c24c0c6",
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
".git/index": "20cd4cc5a9ffc2aafd7ce0436166d926",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "156de5ed69fb6de5a88a88a7abdc8286",
".git/logs/refs/heads/master": "156de5ed69fb6de5a88a88a7abdc8286",
".git/logs/refs/remotes/origin/HEAD": "c0fcdbd7490647242cc0287999171341",
".git/logs/refs/remotes/origin/master": "0c18ced5d2a28c791b054f7bb2c99a92",
".git/objects/00/9ac4a23fc7ca6ba4e1d935f77de8fa63770be4": "492603a4244de76650cbc113011a321d",
".git/objects/03/6d86414bebd43848ef24d7ac9cf943be4d5f65": "7ec742be45e2025202c838d7ff9b0180",
".git/objects/04/0431e243ac1079ad4804dbd55ad7813b15bb6f": "9e3d58432977829fcf783e7b6f45b61b",
".git/objects/09/a52ea1f2a0934a95970cdc062484334dbb71d8": "22da8caa2a91bbde5b8cac097714f551",
".git/objects/0e/510ad3be9dec37db08175ec364f5aebff23166": "13bf8e397998f793c93894501c93b2af",
".git/objects/0e/61ec8f41f5659f6338b57abeee948d3f8794a8": "d37a1b3f0383d157531d1b29b3e40727",
".git/objects/20/66db0763d98ec1764e1fc9d79656d1e850f15f": "e7770bfb316ce17e0ddc66a8d445d2c4",
".git/objects/20/d39568d8bfe0f45496adf617a3e2915683260c": "ebe7d4e3bb3ec77ee5e2950f31c2f293",
".git/objects/23/1f04613ea28fe003f787b6606f4a4df5034324": "fe4f7b10c7270ca07dc8d7fcbe1a3866",
".git/objects/23/6ef6b9ca2632e03ea129ef0a933c350133856d": "208da53993759c32d5f53a693a188879",
".git/objects/23/73f5ab4ed5789432256a7c3d0590522bb45f6b": "e4ccc42482b8ca4be4541e1dcfe1e3d7",
".git/objects/29/9df09e2db44a842c31161c055771a37855a671": "04fd367f32c89bd100d4dd2a28f51353",
".git/objects/29/f3d15740c9eb3654fb89b83e9f7fedaec3baee": "6f5448ca231e351574b188f77abc1783",
".git/objects/2a/9d748e53151d432723a356ed8a32a949e0cb3b": "c3068a921e1a29fb5c1a53b51443136d",
".git/objects/2c/85b4f6980d4925c0c87d9e86c6cf9dbee22700": "16f193960fa18784cce2c4b3a0a9565a",
".git/objects/33/1f880fc79305bd1cb93a86f5d71e874b6b4363": "d6a098b26c967764e2f859d05ab41a4e",
".git/objects/33/34eb7f6c0d12c72cd1f5f9721a4cc82a4383f6": "c74f48b395d1f85b9670d994ed7af56f",
".git/objects/3c/ab7b2d0107e32cf162d64973c19d33f2edca1e": "7b756f516b20c4c93a127928bd52303b",
".git/objects/3d/fc1d1043bcb17951461dd4df240875c038e47e": "ad644e555035e496bab1ca7e42c6b429",
".git/objects/40/5e42187e84816a4be2ae70e765d7cd19e02b0a": "2e6f3a1361859e5062cdee92b6ce371a",
".git/objects/44/1cec79aab8e4fd577ba4478704e7b391ad4b6a": "75809ac7cc1906a990b9a93f00c76b41",
".git/objects/4a/b0b6f0c79e5647c7e28a382e228f294b1ec56f": "f80369188b4df1e82c7104a51dfbe094",
".git/objects/4c/4b4deb1c687f915c620042c5f29047c1a5e126": "eb607b2739bfe26016e9ee5d1e5bf795",
".git/objects/4c/d99092c29c58ab8bbc9319bd03956101510a81": "c4c5bddec3a2488499ec757f0f4458cc",
".git/objects/52/7ed713e982caa568c206c5e62e61a119312012": "1986b1b654158a6b80dc4403aa0666cf",
".git/objects/54/73bbbf3b9b1f8c030d0dbdf3bdd968048acdec": "0bd1ef012e09ef86b7d6b0063ac30304",
".git/objects/5d/6986c5edebbe217a942267120b984e41bac371": "5b6b001f06654c1a40af63c9d7d8afb3",
".git/objects/5f/14458b87bd4722271de4d81c78c80a7f56e7e9": "e0e269f8aa0a14d161348c83b67f7674",
".git/objects/6a/e4bf223fe7b402413e1dcbd0a244a84ffe9ba3": "e680f258d5321caea6a507604356ee8b",
".git/objects/6d/9cf395e4fbce8cacdf435df7cc4eae2769e742": "368d02eea8c54d816bc3bf83a3df3489",
".git/objects/79/c313f4c15911539e5aaab0a7e8072aec170cb9": "de9d095e3517ab11f52571be4895d303",
".git/objects/7d/267a9da408bad5df1d41fe609f1416110fad7c": "b7b732a0f3d71a22b5422bcf894d439a",
".git/objects/7e/74859509378f5edcaebdb0862043806e7cb6f5": "5e46a48bcd1eac43b5382b55951a983f",
".git/objects/7f/44d5919393fb79ca3d74fe33b16b3867a3027f": "37d9683dbd5572e9628b20868c12a959",
".git/objects/83/5592d4df5f268c440baf939bc54759bef2b333": "fccd25dee46691ce14fa913acf887ef2",
".git/objects/87/1a566f3c9352bfad3b58616bf94d159c000c6e": "bc4515d3503ac176934b9b811bb60cd9",
".git/objects/8b/49406bd5fc309933e0bacdd46d9deff4d3b9b0": "ecee908ee4f81a0811023a3642b957a2",
".git/objects/90/a030dbd4e7eb3b4c2f13b1e7921d45e7108bf4": "a21684ca9d19e53db35b9feae8198fa9",
".git/objects/90/c3bfdd6d201d70ce771dade08f1f5853201f8a": "da6aa358e17d24611b7069838ce9b393",
".git/objects/94/00eefbc24946332bf233928a0c155a87c1ac65": "4d60a175093ac6642cb16d98da9d5bb2",
".git/objects/95/e4cc62baa177ddcbc8a0fa9542905399ba4183": "70ce99aa01a160a0e9eaec0fdf323f67",
".git/objects/98/c2b2a99d297defec365b41d963ef75d5e31d1f": "77c5a576eff95fbd304a3f77704173ca",
".git/objects/9c/482227e0b34fe3f7e9f85aeb9368d9f6ffdd54": "81eb4a6f72cdf98788cc898a3a72491c",
".git/objects/9f/08a1d01b740ed99ea95930bf3f3d197a98f1d4": "5a3522c8a7803deb9f1d39e2a737891d",
".git/objects/a3/4d00220ef2bade1096760cfc503aa4305919d8": "46c0ce56ea9f94d70630e7e0edd3e5e2",
".git/objects/a4/ad3d3faf2260b3fa254f638b8882640e51d9f2": "77a28b3e4e813220b0bafb7be927a1f2",
".git/objects/ab/84e9453e33d50dac016e0c96b7531ce42c86fa": "854b4813664a813ae4f16819ec3f90cc",
".git/objects/ac/6330bff529f81c7d3bcac70dc1b2d987c5d8f0": "6c7213fe07d12604f245e61940583ffc",
".git/objects/af/5e78c65767d6578e2893fdfa123e5de3a01afe": "fe8214d6091c67927173c99e4e3c4688",
".git/objects/b8/bac81fa61b4bd7ba2f2b06dda5c1c31db075ae": "beb3a0a7817059bc2c24dadbc4285122",
".git/objects/ba/3d66d73a30e879b8dd56c4754eafde727f2b27": "7486769244cba4315c9c5c31c9ff62f1",
".git/objects/ba/9ef0b260547e7c5abeca994504e810c0f6b0c0": "640451a723c608d48ac258da6091aa87",
".git/objects/c1/3302797379e89e50a1e4e59d5a7c56af753def": "18107f322d440dc26100f0d3de8550aa",
".git/objects/c2/2e0781dffb92c567d0ba79d3199d7d1fba8134": "2e862eb327f071325492c2fdda86a42a",
".git/objects/c2/f7714e703853393eec037a1a9b4d5a71e5b5e4": "d6dd53c624806aac4a6cae6d1ca54022",
".git/objects/c4/571d2a3b9d0336da3718a72d4b418943872593": "f44b5ccf954f6b1356955b5293de6300",
".git/objects/cc/c7184339c0d58b5b5a910b4f3d84720da37df5": "c9d8b618e825723b620ac3711442a7a1",
".git/objects/e7/65422cafbffcde739faff2f82f543d406f385c": "2acb6ced930f34a0ecc30d68278766a1",
".git/objects/ea/88737b2294a55850a8379fec4683b6e7d06b58": "671d4e0cc435879f60c150d0f4d88aa9",
".git/objects/ed/8218edb88daa9e38cd8ea823ffc60ec3670c90": "978ce90170ae9a9d10a981f857aafcb6",
".git/objects/ee/2fcd30402685c827136e11a40a56894b88942e": "a6c6bc50b5792d2267b45ecb37e9cae4",
".git/objects/ee/959f58a4fbeb2c40c96a9b0f49bfc6661cbbde": "8e1429aefc4cde9ce0ce7030cd994b2e",
".git/objects/f1/b7e9be6d3f67bdd0ad208fdfe814f79c0f6c89": "684d4ad54b153f931fca4504874ca36e",
".git/objects/f3/2703db98974d720320185c6e8b96734523175f": "bc8347be2cf9fa3656db139311338605",
".git/objects/f3/8c27bd95dc4908ee64a1c8b2afcf49d09e6a1a": "4199744e6a0e93b2b61ec0757f905cdf",
".git/objects/f5/44153d30f48130a64f6739eb20cf62f521e3d4": "0042b43778cee23e391399d6bfd4e60b",
".git/objects/f5/cc5d777f8f581451423943a00455ea6121b202": "6f1f7829f2e5bea71ff1a1344a037215",
".git/objects/f9/888cc6f2ffba70872857bb7e5f09cb8f549080": "35d10fce760047fcbb62b9a9a3f936ee",
".git/objects/fd/99b1f81958fef6a18e653f97286f5ac8955c08": "83251b3bab87a4979a398f9a6bf50887",
".git/objects/pack/pack-15e71629b0c76e4aecf709c1b5f7c256abd69f78.idx": "741bd7df12b31790c0f2c505625b09c8",
".git/objects/pack/pack-15e71629b0c76e4aecf709c1b5f7c256abd69f78.pack": "cdc5960f0547462789896c963d1f14d2",
".git/ORIG_HEAD": "15306869bed8e48e6d8836a8c185c468",
".git/packed-refs": "46d854f6dfa21a55854e7355256821f3",
".git/refs/heads/master": "cb566900fe50f577cdf902eefa7e6090",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "cb566900fe50f577cdf902eefa7e6090",
"assets/AssetManifest.json": "6453662937e20247f5740e2c88b94ecf",
"assets/assets/images/ar-en.svg": "15779608e14e22dd4a2c73cbc21b9b76",
"assets/assets/images/facebook.svg": "1e80416aa91f53526b9135b7fbcb8474",
"assets/assets/images/google.svg": "419c131b3daf232021c56ae4efbef6e5",
"assets/assets/images/LOGO.ico": "9a7ed1f1a2130a44022f1ecaaa2bb5a8",
"assets/assets/images/logo.png": "947524b7fc8c03384c122c96eddc5784",
"assets/assets/images/LOGO.svg": "e3272648dca9fd47561f106222c6daf1",
"assets/assets/images/twitter.svg": "7137286db3c9254ace982646907e65a3",
"assets/assets/locales/ar.json": "9a82975109cd3c408310d81a79864898",
"assets/assets/locales/en.json": "83e894aec3872239035f7cb0a182af95",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "38d971740033cdbc3dbe02cdae9c78ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"CNAME": "8ee2184b50773c8af11f0363b99e8911",
"favicon.ico": "9a7ed1f1a2130a44022f1ecaaa2bb5a8",
"icons/Icon-192.png": "bd7b672c8c1b46d97c521d312356af49",
"icons/Icon-512.png": "1207715d5b09377a17651eefb4347887",
"index.html": "ba9945c75f60cada926405da0da3069a",
"/": "ba9945c75f60cada926405da0da3069a",
"main.dart.js": "07db0dfd5848619073acd2f01fd7276f",
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
