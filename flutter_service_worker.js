'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "618d85a4f958d5c0eeed95aeb4817dd4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "98c1efd22d17df3ad0f634a4159eacbc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e42891ac24e5cef27efd7aa19db0e15d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "806cb91d61a4e59719cb8cbe8429a027",
".git/logs/refs/heads/main": "d593d324a82608092626d81f9d9e6f4a",
".git/logs/refs/remotes/origin/main": "f2a7cfa5a23c4796bedbfbd32f729fe0",
".git/objects/00/8f1badb7d471263b9ab9b98db5e887bedf1446": "91f3751a3c14f7feaf5fc5cfde00a752",
".git/objects/01/dd07f4a4eb1fdce31759e6a43c0e1c67dffaed": "c593eb6a0219cb3e1c5df2f9f78bef82",
".git/objects/07/608ed02672a6ed92ba7b032ccf926a6dc150c2": "9d612b25703b25fbb9d1773f8fc081bf",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0d/95ed8c2fedf3c4de09ddad24a6ec995e73cd85": "ff4f589f8df4138b1987105b97153cc1",
".git/objects/16/6c9ebf693752a3d7d80a67a700120059b6c79d": "3e223e8b68fe5332a54c8ceccad72725",
".git/objects/19/20af1e526a255ee2c70c5c4fe6eca54e768f0e": "eba684fae2f6d88d01f1c37af7c7d306",
".git/objects/1d/48284e5e68fd72c6a84de22773d52aa82d3396": "36feb144b673dbb4caf1900c1c37bd92",
".git/objects/20/1cc58b85387a7c15ca41662393dbd53e9c600f": "0250a4f0eb6d058379358ed628505414",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/29/7f7d5b1dc26420e440f5f904f55f3e34f03eff": "3fd4fb92bbc3179ab21accfd6b4bef14",
".git/objects/2c/481d106f1e64335300fc5d2041d77ed37f092f": "8feb61b982ae58e55296b75b47d565f1",
".git/objects/2c/a4adff5c0ed0332f69d135884e51ec64f391a6": "84091a7c5be3652a880811cb79e69993",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/3c/1a9c961fe8f6e883a90749354ea6621da015f5": "359f5fcb4cd34f87b7540de751b8ced5",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/0e9232ef198aeff7cf615d2508d4681075a359": "a8e7179210e72214c7cff3ad3ad5217c",
".git/objects/47/d39d43b4c0281f64d2ad52bb8b06d6156c251f": "48e176c8e100b7ba9bd2b5d8b0e76ec3",
".git/objects/4d/28d653eeb28284762d227bb49ea4a0785443ac": "a81b95fe42ab24ba07acbdaf75d4b683",
".git/objects/55/099e822b86c848fc2f9ebf038e88c37f240fc5": "db88dba498015f73b9b3d2f99f769667",
".git/objects/59/c35f261ffba250fc09dfc1a5e60f14f47a2cbb": "8d9b57f4c118d1c7bfdef8e3c9f75209",
".git/objects/5a/63ca18cda70e0a985cb47b851bad84594ff94a": "b6736969aba6cc18401433ac449fc3fa",
".git/objects/5b/d673208fec4cd48c7576118240e9edcaca0f61": "5f56136c53f69e14916a53c21213f92b",
".git/objects/5b/e805c9bb2f0d8409fb7c264be2e2b3f747f5ce": "c66030384d8e5550ad58e100b18ea807",
".git/objects/5f/16e5e2774b41a708c471fb00e0eb28079b8de1": "313ebba637fa8f059fdc09ac736ac203",
".git/objects/63/968d595cca81cbc638e9e85c6d83e13c92fabc": "7eabd9a965697576b6c28375fcc5436d",
".git/objects/65/adf8f73674937ef4312f2989efe5970adadc1b": "ef620aedac83f3d3027ac4f3e935c135",
".git/objects/68/a3c20014da2a5faf1f195943c9ac7fb4715599": "a326db5077f8575c85ca5f4dfac1d95d",
".git/objects/6a/b63c37e4d13a37671d219f8bf218ceb85e8d82": "0f6544d6dd4d3069e7324dbea8d1ebdb",
".git/objects/76/1f3f37e3e95c4ef3032807c6a25e7e0619e542": "0b5ba2b7095e0660575a96c1feb579ba",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/6a4299d38345709650fc98b1e10bd056139d1f": "4e414a74eae6b5d554f3f0f23a77ec88",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/7953a0356f7b791ce6b30fa9378e98c7fe4925": "a772a1a50f182ed7d4af06110913491c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/4387d5d98cf3969b52f98d8082e7b5df850933": "0c1566278dfb283bbbb102dd8d43bb42",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/96/563ef639fb9000f8d237b61933723339e12eed": "6a9c28edd78d942e30ab7e02acd8ebb0",
".git/objects/98/84581fcbd951a84d2a88e91ff7ba069d61c706": "7d8b7addac7be4ce6700412f6643de75",
".git/objects/98/9f323b1e32b3522c404c91818fb9b67a5e76c0": "40621651a2d95c3406fd94d623dfce09",
".git/objects/9c/aaf935d731641f1bf4b86bcc82a9de8f43f631": "2166b77950718994912f5f4150f2209e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b0/30bd5e955c6e4d734e58f7635694d09a513856": "a9b246f71e76bb20faa5ac64fdaaedd2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/dc4d3c207c1d526e20455b734ec0a0be698df2": "6e404fab619913b8cdd8a456d3828809",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/c53d700304cb4dba75f0f6306bafdd42813e87": "cd67b73b58f22e1706db398a4f19985c",
".git/objects/bf/22f8b7b74e683e6144281de470920d48cedf8a": "20143b1de8af4098e769460b75b19f4d",
".git/objects/c1/8600c1f91f94305cc189fc0c58e56621882e86": "a93798282c5eae76e2fc4f2fe68162d9",
".git/objects/c3/51f7deeda468257dfdb45ae308726dcbc28042": "19890c75a8ba27275c57431bd95e370e",
".git/objects/c6/d4552d688b8c4f29630c8c1121dc25e02f103e": "a20ab62257aca4d868744e46aeab9df2",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/c1902cc31f7485db110359283f32c23855bf20": "bf4c3b6fff2b7bf3fa5b5c83a45ecbe5",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/1271b935ba81812dc2af79d01aa5c2b19a02f0": "0e28745aac7011906e64fbb6914400e7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/c246a4faa988e196b95cbdf289b5d2b0b913f1": "5fb122b3dde8bbf0336810a7028fa6b6",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/ORIG_HEAD": "a4ab490e276d9c4264a09b0efefea9bb",
".git/refs/heads/main": "be588f2e430392026a23262b171d8e0e",
".git/refs/remotes/origin/main": "be588f2e430392026a23262b171d8e0e",
"assets/AssetManifest.bin": "34a8dad024322a3b9b8356ba25ccadbb",
"assets/AssetManifest.json": "a123cb81e7f0b5bb7a484a2fc11ec8ad",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "409498fcc7319fd865c0af6cb0252e47",
"assets/icons/menu.png": "f7d52f077cd38ceb3a960375c1a01aa9",
"assets/images/access-logo.png": "9b279f9aebad1a414750bd6c2e3cdf60",
"assets/NOTICES": "a0e3a08ed7ae97503d8d5c4ff78321d9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/shared_code/assets/icons/push.txt": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/shared_code/assets/svg/eye-closed.svg": "04aeebc66f85e729b233953362515949",
"assets/packages/shared_code/assets/svg/eye-open.svg": "1fb248fb908a50b57f0a8c889c6979e1",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/svgs/add-circle.svg": "da846b21b3922f8895bd958eaa2cd7b4",
"assets/svgs/eye-closed.svg": "04aeebc66f85e729b233953362515949",
"assets/svgs/eye-open.svg": "1fb248fb908a50b57f0a8c889c6979e1",
"assets/svgs/login.svg": "87ff9bb2e5f57830c103488caa33b5d7",
"assets/svgs/person-add.svg": "8d021f79fcfd2e16cff6d3adbbe0ff20",
"assets/web/assets/icons/menu.png": "f7d52f077cd38ceb3a960375c1a01aa9",
"assets/web/assets/images/access-logo.png": "9b279f9aebad1a414750bd6c2e3cdf60",
"assets/web/assets/svgs/add-circle.svg": "da846b21b3922f8895bd958eaa2cd7b4",
"assets/web/assets/svgs/eye-closed.svg": "04aeebc66f85e729b233953362515949",
"assets/web/assets/svgs/eye-open.svg": "1fb248fb908a50b57f0a8c889c6979e1",
"assets/web/assets/svgs/login.svg": "87ff9bb2e5f57830c103488caa33b5d7",
"assets/web/assets/svgs/person-add.svg": "8d021f79fcfd2e16cff6d3adbbe0ff20",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4b175c57c8ae7a687ac04d44c48ece17",
"/": "4b175c57c8ae7a687ac04d44c48ece17",
"main.dart.js": "3144005ed6fa522f1e3aa80c1d10e050",
"manifest.json": "d2600c77094cdfa19c8a2c560f1f53f9",
"version.json": "da33004edde5daa9612f26a0bc7fd5e2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
