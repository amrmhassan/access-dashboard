'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "04b238cbfdae09c955d6677fc33db030",
"assets/AssetManifest.bin.json": "e4943cd483eabd2d9d5171f635d6e1bc",
"assets/AssetManifest.json": "259ca14ab9e90d7c51fad2e569375d87",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "56ba2751853a0cb8740c1cefe20dc218",
"assets/icons/menu.png": "f7d52f077cd38ceb3a960375c1a01aa9",
"assets/images/access-logo.png": "9b279f9aebad1a414750bd6c2e3cdf60",
"assets/NOTICES": "b8508672142a887bb0f6c11f722a06d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "384b3fccbaadbcb3a7c1c718851e0048",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "cdb0e7002c6b6293b7a5c1a3e85ad4bb",
"assets/packages/shared_code/assets/icons/push.txt": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/shared_code/assets/svg/eye-closed.svg": "04aeebc66f85e729b233953362515949",
"assets/packages/shared_code/assets/svg/eye-open.svg": "1fb248fb908a50b57f0a8c889c6979e1",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/svgs/add-circle.svg": "1f03c585a4c5cc6e744e14fc7637302d",
"assets/svgs/eye-closed.svg": "04aeebc66f85e729b233953362515949",
"assets/svgs/eye-open.svg": "1fb248fb908a50b57f0a8c889c6979e1",
"assets/svgs/login.svg": "639a0c3863ea7d7970616e48a07aac57",
"assets/svgs/person-add.svg": "d50025c8bb1393d83856a42b91dc7036",
"assets/web/assets/icons/menu.png": "f7d52f077cd38ceb3a960375c1a01aa9",
"assets/web/assets/images/access-logo.png": "9b279f9aebad1a414750bd6c2e3cdf60",
"assets/web/assets/svgs/add-circle.svg": "1f03c585a4c5cc6e744e14fc7637302d",
"assets/web/assets/svgs/eye-closed.svg": "04aeebc66f85e729b233953362515949",
"assets/web/assets/svgs/eye-open.svg": "1fb248fb908a50b57f0a8c889c6979e1",
"assets/web/assets/svgs/login.svg": "639a0c3863ea7d7970616e48a07aac57",
"assets/web/assets/svgs/person-add.svg": "d50025c8bb1393d83856a42b91dc7036",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "25c489640316e199d7d64bbad22ba984",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "8f699bbeec969bb4487dec6c0a510f52",
"icons/apple-touch-icon.png": "13ac620c8b3de66a5972e6dcbb3f04cf",
"icons/favicon-16x16.png": "25c489640316e199d7d64bbad22ba984",
"icons/favicon-32x32.png": "d4f99193dbaf3239ae1d7d8149b98494",
"icons/favicon.ico": "df43a701851d9c0a3402c881c167efbb",
"icons/Icon-192.png": "dda3b296f5e100337f1eebd246b3c78f",
"icons/Icon-512.png": "375aa8d226d71eb5aacc1346e153e428",
"icons/Icon-maskable-192.png": "dda3b296f5e100337f1eebd246b3c78f",
"icons/Icon-maskable-512.png": "375aa8d226d71eb5aacc1346e153e428",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"index.html": "6fed5aa2246b70619a87322c989f56ac",
"/": "6fed5aa2246b70619a87322c989f56ac",
"main.dart.js": "d22b89705e84d9fecce12f06a4887f51",
"manifest.json": "d2600c77094cdfa19c8a2c560f1f53f9",
"version.json": "da33004edde5daa9612f26a0bc7fd5e2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
