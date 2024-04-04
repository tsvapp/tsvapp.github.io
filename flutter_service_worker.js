'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ec4281d0a8a4d5da0a0dd6df46a1c461",
"index.html": "59ba0efa0ba7897959aa358cd403ccc2",
"/": "59ba0efa0ba7897959aa358cd403ccc2",
"main.dart.js": "f57959a52fcbb1d56f949e3f5b4f20e3",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b5605d23c86006843065c0abd402de6b",
".git/ORIG_HEAD": "4cbda60dcf67a907773ad39f3aa3ca31",
".git/config": "83ac09a55320fb8e383955a3dd813191",
".git/objects/61/936cb93251b0c3d87fa51d2bc4d84aa590ea95": "0f0ffc3dde447bffdcc3f780d38eaf9c",
".git/objects/50/63a3cd10ef4330ee92e3498ad94ea04ccc33af": "f4019e9fa97ad085410443aaf09eb8b7",
".git/objects/6f/7e1e552aac36abbf0b5bddf1242c0f18f2b4c6": "4300980adde3aff4cbd431e6035904cc",
".git/objects/04/888e171c3e285c1fe200f2e497f76bb91332fc": "168a41daf5b6a0c2440d528fb173e82a",
".git/objects/04/1a7021a54b0bb565364e118589a07f49ef642b": "5a66402146edc95fa78e69b65fdb850b",
".git/objects/6a/f29a3cf1b85e42097b72fedae3ff940750407a": "49562d01815fe1407f7c1d07c8e5d874",
".git/objects/51/c4495e8a8759cedd692573ac4f889af0e09f5b": "695db87336176bc17c71bb9cbbce8461",
".git/objects/67/33ea34a7aba5f45e9a381ab4f78e7e1fca6d2b": "3ca7c824c5afe3140f8eb39b1e8c1cbe",
".git/objects/67/0ecdefd61b08c386a533c257223a2fe93c18fa": "009c3ea347d4e5a47af79724d1f0f455",
".git/objects/0e/b1960125873d8db930870a9b6c44e7951b8a12": "8efeec6890db3e6e635503b1caf83837",
".git/objects/34/7ecd46a8001114b6086a69840bd4699f8c16ea": "e148aef3afb397a69322d00c8aafff26",
".git/objects/5f/83c7e4a47ce9cf71b7ead2e39acdf0fcd1433b": "a52536b7935fd1107c7e1e78a4734af8",
".git/objects/9d/be9523cc6370811a0882b97681b60859c3ef2a": "9ea51ac544696c7326e142268955f929",
".git/objects/ad/559d696e71e0e2271dcf4423b67e03df233b7d": "a5f8b107954f9d2fb0651958f49fad36",
".git/objects/d0/16f64fbf21282876f4c644cabaee2f24e0aead": "c33773d4ba02cb2d378b42370db2bd30",
".git/objects/a2/1da620ff51f13de3867b73b7502bc3737c2eac": "5a7bd92ead5357ac5e3748458ac92bdc",
".git/objects/d1/84233bb6c56ffd1d7fbf86afcd627a0c4e39e4": "66969ce2b79e2f827f6339bb2184afff",
".git/objects/e2/8f6e089691acde5fdd94a252553ac82ccc9586": "a3e116a5397b785a576f419c82a93327",
".git/objects/e2/0c830f7c9d22871678d4f91538068a6316da75": "af9038d4860c56ecdb710e1f4ab85d39",
".git/objects/fc/93c9ca04ee631ff599c496c12beba8fce3bc0b": "f918c13281c5fbb56a3dbb88fa9adfe0",
".git/objects/ca/3974a6ec0d9bdddf7e7b85173283b89010894d": "d340796a79b0bbef730d845c6598d475",
".git/objects/18/f769b1decd239e7bfe03fe238c8e35bde611d9": "c69fd9a0bd31c4ffb4fdd3ef0e3dd5db",
".git/objects/4b/21eb0146f3439cb96b284a8b5992d98b67fb1b": "23159af0332becef8ee37d199a2e7491",
".git/objects/pack/pack-a616cb9676c5643dc61ebd74df009c4b8c40846c.pack": "f5e54196e9d8718000a798f00acd6a9a",
".git/objects/pack/pack-a616cb9676c5643dc61ebd74df009c4b8c40846c.rev": "b31317f5699a45cd093d3fd5196576d2",
".git/objects/pack/pack-a616cb9676c5643dc61ebd74df009c4b8c40846c.idx": "05be45f1b1f344b33452f7f6a710ab0e",
".git/objects/11/557202e3e5f2641e340736148b99a6a9d64b8f": "937422fc43759a0b620d0c85ac3dace1",
".git/objects/42/f4bd6b522d4d66218c808b332bd9582f2fba7e": "ba0870ee9447b0ab3c73d70aff0c2818",
".git/objects/45/12ef6c7c5286a781e5293586307b00be990adb": "9842645580c1cc847d3524057f3c2e27",
".git/objects/87/485fb5ac5859b3199e2ece1426450dc0abe9d7": "f7ebecf19788b5145b7d67fa34444c23",
".git/objects/1a/9acf63c3786a04bb1369d014d7e976aad4b120": "158dc2ed02fcdeacc524d4039a056102",
".git/objects/21/114fdad27012d1f587df07b5984bc2045c5214": "0a601917667e6c7fda00359af828aa59",
".git/objects/72/2e7784fd31e87c9bd45891e638dacf3c3a3077": "c66ffeb8d2471e2664e5a4980f3f3012",
".git/objects/44/3c912eeb8496917a4acd5959084598526e6788": "74631b74031f9554c8aa66935bf74035",
".git/objects/43/ce526ad9623ef96aa790bb28298edf77eda9b2": "18876d9f40ffcb2c4c11388b365bbf0a",
".git/objects/6e/63777fc2b4161013b23eefe1253888d1267946": "42a37baa6c6b74d6519804935ddf8fca",
".git/objects/54/abe67ff0035847fce21df8c0142c0bfa18d5b6": "f1146e4c75df6047a112d26b764b7978",
".git/objects/54/2f40ce64bec0d1ddfd219947ccddb063d5d5fd": "035dd9455b42b497d7e2a792382bcec5",
".git/objects/98/2459f1b97d79e90915f6245e9d3a3e8e2519f9": "ef9e6eecdd1885112396324415dbeb58",
".git/objects/30/59d42149899ca9c717bcbf9de195ce39540098": "1f51257893d1cb10acf339b847f7f7fa",
".git/objects/5b/3b736a4fdb5d7bc0429f6ed9f79487f51c702b": "490bda82d63b15c424889419946863e2",
".git/objects/08/2087ebd0481dde75e130844d5eb92a8d940f66": "8a315170b634373fa26ce79054fa25be",
".git/objects/d3/0709b18fb7ebab30213ac2d6e954a2b2efee6d": "f95d0414ac2e964d8ac5ab6e3bc28bd1",
".git/objects/ba/0f3d7aad89130fa4881644b04bf2b78a59f4ca": "dbe0398370892be785da12585ed120c8",
".git/objects/dc/d087fdf44d9377116ee418bad25f6259bf338f": "6404f1794304ea507131d8a0db9c3d25",
".git/objects/f9/649db0b879f013435d843a31d6fa74a64e1be4": "79254a6aa6261951da6f650bd6c3d748",
".git/objects/fa/c27bfbc21342eed6a14cdf2542e1765d74f32e": "821b6cccaf11f6d7f088e6dba161fd94",
".git/objects/c2/a7d29d428e399b9ddbbb30b420314bd915dfc4": "6e6aee7d940b14ed09fa89a50e1ad000",
".git/objects/e7/5b1e71be9d91793b1f4a9bfb2845d9d1771e59": "9fff3055b0940831eb50b7c541a6c4ed",
".git/objects/f8/5ef960de0a882441bf44211ca8cba8f6f4e416": "bbf30b2b29c85f7babf647288ce803bf",
".git/objects/79/6f273b2b00052756808e529de8861538847b70": "97b0096135f04076cb752f2eb1f92460",
".git/objects/79/6e0d54af3aba79816b9a17adc9255daeac0ebf": "5e96d58ca5e21388c8b508dab8415b27",
".git/objects/1b/f1423a3a4f9f341b9bde643d9a2aac6092685a": "f3ea0f14cdf4d316da2b9679ef5031d0",
".git/objects/4a/3980a302a9997da4232c1faef80977085d7b65": "207f2746a67a4a87db5e7daa4e846902",
".git/objects/4a/b40bcb76964554121cb26d505631d022276e40": "327f622f00184088594eb962dc5e1d8e",
".git/objects/23/b7861187de0011af7c22d858068e1a72ebe1c6": "723734f2420ad733c1d3bba500fb051c",
".git/objects/23/80a90290818d0a81e5afc22cc29970a942134e": "9fe8d947e907ad13c5483912bb798bf3",
".git/objects/76/dda216e91a9d481ddb6ad340169c849343cf09": "8413d7916cbd04d6180259e1c1b13852",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "69ed841765cee6f9b3afbccc0803a87b",
".git/logs/refs/heads/main": "69ed841765cee6f9b3afbccc0803a87b",
".git/logs/refs/remotes/origin/HEAD": "049142f8cfc3d1a6d037384d5544f44e",
".git/logs/refs/remotes/origin/main": "f2ba73c80bcd21e567f233472fc1e9a9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "30d31a7e44dbb053744e77a8e0d101fa",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "30d31a7e44dbb053744e77a8e0d101fa",
".git/index": "205de609606bd2044f9adb39b952d476",
".git/packed-refs": "c87450b69feb4458341576edfd37f4f8",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "415937db4879e0c50bbac1d7779ed101",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "2ed0cd80c44950c2ecb5f5bb1ac36beb",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/fonts/MaterialIcons-Regular.otf": "1942ccd93e9a9df0564f8222497acf8d",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
