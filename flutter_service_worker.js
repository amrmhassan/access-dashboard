'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "98efe6ac6348218e51c983c9fca4e78c",
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
".git/index": "bdd4444e66861b6d43ef1efabcb6af38",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "950fa3a441c9fe3319677c98f1194d9f",
".git/logs/refs/heads/main": "325fcc371eed36fa5a8f3305cd4a6e33",
".git/logs/refs/remotes/origin/main": "f6c82ef778c876be8fb10ae70c29e7a5",
".git/objects/00/8f1badb7d471263b9ab9b98db5e887bedf1446": "91f3751a3c14f7feaf5fc5cfde00a752",
".git/objects/00/bce8f251e86c28621dc5664ca61796c209fd3d": "b05b73709c21bb7468eb91e312cc40ca",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/dd07f4a4eb1fdce31759e6a43c0e1c67dffaed": "c593eb6a0219cb3e1c5df2f9f78bef82",
".git/objects/04/3f368c1c4f9b10f9f369aa5466fac1eb048be8": "aa15c991610f6c0ebc5fdebb407fb0ea",
".git/objects/07/608ed02672a6ed92ba7b032ccf926a6dc150c2": "9d612b25703b25fbb9d1773f8fc081bf",
".git/objects/0a/7a3ade154684d6cb2cfe70c484459e5df5db01": "64dcb5d3b4aec4d0982700b6e0a131ff",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0d/95ed8c2fedf3c4de09ddad24a6ec995e73cd85": "ff4f589f8df4138b1987105b97153cc1",
".git/objects/11/3286f38b0b54d077764a1aedcefd3b0a612e07": "8555b35ac646ff2eb413e8abf8cca7b7",
".git/objects/14/32b676864fd059201f2a295040896addaf0a3c": "c5e6ff1150a6bc0e47beb9e25a4e4514",
".git/objects/16/6c9ebf693752a3d7d80a67a700120059b6c79d": "3e223e8b68fe5332a54c8ceccad72725",
".git/objects/19/20af1e526a255ee2c70c5c4fe6eca54e768f0e": "eba684fae2f6d88d01f1c37af7c7d306",
".git/objects/1d/48284e5e68fd72c6a84de22773d52aa82d3396": "36feb144b673dbb4caf1900c1c37bd92",
".git/objects/1e/7b2ab3c8358818262e93042f5e0a238040116f": "6d7bafc288131cdda9398396999bf8e2",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/20/1cc58b85387a7c15ca41662393dbd53e9c600f": "0250a4f0eb6d058379358ed628505414",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/180ac9b9909f67f74c154ba91204449151ff86": "011b133f3602d29c73d2bfcea7d6d593",
".git/objects/29/7f7d5b1dc26420e440f5f904f55f3e34f03eff": "3fd4fb92bbc3179ab21accfd6b4bef14",
".git/objects/2c/481d106f1e64335300fc5d2041d77ed37f092f": "8feb61b982ae58e55296b75b47d565f1",
".git/objects/2c/a4adff5c0ed0332f69d135884e51ec64f391a6": "84091a7c5be3652a880811cb79e69993",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/31/17b2a0949bf04509afc6cffe13bfd21c536bdc": "fb7e46c3652df07be868e02cd52980ee",
".git/objects/35/30675434323c4cfe904fccc6a3fb2210423e8f": "aaa798784a2e8db66dbc239395d314f3",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/3c/1a9c961fe8f6e883a90749354ea6621da015f5": "359f5fcb4cd34f87b7540de751b8ced5",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/40/187c399cf6c3f4bf308e3197380eb4b61e60db": "884202a64e8a2e3d897bae2684bd981b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/0e9232ef198aeff7cf615d2508d4681075a359": "a8e7179210e72214c7cff3ad3ad5217c",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/47/d39d43b4c0281f64d2ad52bb8b06d6156c251f": "48e176c8e100b7ba9bd2b5d8b0e76ec3",
".git/objects/4a/1fb2467b72ecdff8b16723f1a56f548aaa797a": "78aea8d6d2504e12f6628e02401a439e",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/28d653eeb28284762d227bb49ea4a0785443ac": "a81b95fe42ab24ba07acbdaf75d4b683",
".git/objects/53/00217d1ed7f87ac56b0678e308fefc18032330": "0655439d5332fda529c1718e6ef38835",
".git/objects/53/313894efebf3d83b05e0acc8396d87b9e06c15": "8ce3230073faee4eca1c7a0a36b97235",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/099e822b86c848fc2f9ebf038e88c37f240fc5": "db88dba498015f73b9b3d2f99f769667",
".git/objects/55/4b09f2a787e93456bc4909a5ff160b80c0a83e": "0fffdbf3b9d92f1cef7061ea0cb98032",
".git/objects/59/c35f261ffba250fc09dfc1a5e60f14f47a2cbb": "8d9b57f4c118d1c7bfdef8e3c9f75209",
".git/objects/5a/63ca18cda70e0a985cb47b851bad84594ff94a": "b6736969aba6cc18401433ac449fc3fa",
".git/objects/5b/d673208fec4cd48c7576118240e9edcaca0f61": "5f56136c53f69e14916a53c21213f92b",
".git/objects/5b/e805c9bb2f0d8409fb7c264be2e2b3f747f5ce": "c66030384d8e5550ad58e100b18ea807",
".git/objects/5f/16e5e2774b41a708c471fb00e0eb28079b8de1": "313ebba637fa8f059fdc09ac736ac203",
".git/objects/63/968d595cca81cbc638e9e85c6d83e13c92fabc": "7eabd9a965697576b6c28375fcc5436d",
".git/objects/64/86a203d88755989f915943fbd753e5486018e6": "a910f052f5dc9ed446aa9cea4ea57910",
".git/objects/65/adf8f73674937ef4312f2989efe5970adadc1b": "ef620aedac83f3d3027ac4f3e935c135",
".git/objects/68/a3c20014da2a5faf1f195943c9ac7fb4715599": "a326db5077f8575c85ca5f4dfac1d95d",
".git/objects/6a/b63c37e4d13a37671d219f8bf218ceb85e8d82": "0f6544d6dd4d3069e7324dbea8d1ebdb",
".git/objects/6c/367df820ade8a7c365c59b97cf08b8257261ce": "6d8fbabe0fc13297dc8a78f95b2f5a92",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/76/1f3f37e3e95c4ef3032807c6a25e7e0619e542": "0b5ba2b7095e0660575a96c1feb579ba",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/6a4299d38345709650fc98b1e10bd056139d1f": "4e414a74eae6b5d554f3f0f23a77ec88",
".git/objects/7d/1bf6bf641edf2292e21b2cfa1d0c9da476df7e": "b360818a490124524ea26515b55da48e",
".git/objects/81/89863e3562684724983e537bd69b016a74af23": "fb67d9a5ecb66eab4b6633f6c781fcc0",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/7953a0356f7b791ce6b30fa9378e98c7fe4925": "a772a1a50f182ed7d4af06110913491c",
".git/objects/86/478aadb887bff690dbc46453ae08d31b533235": "a1f1a7363538fd3688b2b41f0bb79b38",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bdf5a029b0dbdf7333e3713e1e02d19a82c4d1": "6b83fa3056237a140423efbbcdea41e4",
".git/objects/8b/4387d5d98cf3969b52f98d8082e7b5df850933": "0c1566278dfb283bbbb102dd8d43bb42",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/91/55430baedad44085038f2372d4161b924aec2f": "33fd78dbd818b31a273602b44c56dfe8",
".git/objects/94/4061b07b5d7e8d174fec792e735662d2239490": "c4dc5ef1a4f2739d26afae22e887bccd",
".git/objects/96/563ef639fb9000f8d237b61933723339e12eed": "6a9c28edd78d942e30ab7e02acd8ebb0",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/1f02aa037514fb46bad3c5788893e10df28e77": "66397be3908cf2252aafea24cc184271",
".git/objects/98/84581fcbd951a84d2a88e91ff7ba069d61c706": "7d8b7addac7be4ce6700412f6643de75",
".git/objects/98/9f323b1e32b3522c404c91818fb9b67a5e76c0": "40621651a2d95c3406fd94d623dfce09",
".git/objects/9c/982a3266b61eb1b9db4c15387d49fd3a9dfa8b": "c80dc794a485b812601bdc1779e3e71b",
".git/objects/9c/aaf935d731641f1bf4b86bcc82a9de8f43f631": "2166b77950718994912f5f4150f2209e",
".git/objects/9c/e33a3fbc302cc72f83dbf8ded306ef4d07dfe7": "04707249082146b6a5852fd29efce24d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/8722922adbdd67e735fb8e3baa3db6aa6663ad": "aa8f9d9bf5a2622aa34e24f0db577696",
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
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/cd/321f16f887845a6c6caec5916c1953c0de8650": "c47cd7ed293bbe18670f51f018a7c2d0",
".git/objects/d2/1ef95d08cecf0d0f7fc141889498d2c064307a": "b1d7ab52786dcc855dc5f3f1bb0841db",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/c1902cc31f7485db110359283f32c23855bf20": "bf4c3b6fff2b7bf3fa5b5c83a45ecbe5",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/1271b935ba81812dc2af79d01aa5c2b19a02f0": "0e28745aac7011906e64fbb6914400e7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/bb76f319d8ee69665429597d1e5aba47fadc79": "3395724b9c6232ad76153ebfc71800d7",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/bce0959ae3b7ecb028855a615409ca75792b27": "95c5adf44c9973eafdbdd44f1edaf518",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0f31cf8816c14414bd8bd62a378c340b658bb1": "a5748f8ba06aa7c6bf9b025aeefe3ec9",
".git/objects/ef/6d6c04bcc3cf446048c79279d36100ec755ad1": "f252e3ca7ccd0d7d3d24e5c7c02554c6",
".git/objects/fa/c246a4faa988e196b95cbdf289b5d2b0b913f1": "5fb122b3dde8bbf0336810a7028fa6b6",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fc/28356910f193560a2f3db6a6feac15cec4eac1": "0a9e16e5804729dee7a729db78882423",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/8f5b910598477415fb622e3021ee1a63db0b64": "a451aa6056b89f8ff994526010af19e2",
".git/ORIG_HEAD": "a4ab490e276d9c4264a09b0efefea9bb",
".git/refs/heads/main": "8687ad2cb78b7d469f2c50d46faceb2a",
".git/refs/remotes/origin/main": "8687ad2cb78b7d469f2c50d46faceb2a",
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
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "25c489640316e199d7d64bbad22ba984",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/apple-touch-icon.png": "13ac620c8b3de66a5972e6dcbb3f04cf",
"icons/favicon-16x16.png": "25c489640316e199d7d64bbad22ba984",
"icons/favicon-32x32.png": "d4f99193dbaf3239ae1d7d8149b98494",
"icons/favicon.ico": "df43a701851d9c0a3402c881c167efbb",
"icons/Icon-192.png": "dda3b296f5e100337f1eebd246b3c78f",
"icons/Icon-512.png": "375aa8d226d71eb5aacc1346e153e428",
"icons/Icon-maskable-192.png": "dda3b296f5e100337f1eebd246b3c78f",
"icons/Icon-maskable-512.png": "375aa8d226d71eb5aacc1346e153e428",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"index.html": "ee6e616fa3e1c18d284ff2ea71d8eeff",
"/": "ee6e616fa3e1c18d284ff2ea71d8eeff",
"main.dart.js": "36e29f9885db34ec1bee260ca0143f0f",
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
