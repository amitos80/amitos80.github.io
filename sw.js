/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1bfc9850-428de7500226c97e035c.js"
  },
  {
    "url": "1bfc9850-428de7500226c97e035c.js.map",
    "revision": "2bbf051287986b3f89f32fb7bced3e24"
  },
  {
    "url": "1bfc9850-674029a6970ab3fbeb64.js"
  },
  {
    "url": "1bfc9850-674029a6970ab3fbeb64.js.map",
    "revision": "e1ca078b1d20c649264983cc10081ef0"
  },
  {
    "url": "252f366e-36b492e5794f9d1e61c1.js"
  },
  {
    "url": "252f366e-36b492e5794f9d1e61c1.js.map",
    "revision": "2b7af209568896d43ae1fcf6195d532e"
  },
  {
    "url": "252f366e-ad73d70f8db7a56222f6.js"
  },
  {
    "url": "252f366e-ad73d70f8db7a56222f6.js.map",
    "revision": "4c9bc74fba7f4a70c80774bc6a7778ef"
  },
  {
    "url": "404.html",
    "revision": "694401872c92e1bf9418f478b6758a35"
  },
  {
    "url": "404/index.html",
    "revision": "752d0ec5ba155678093c12ae6efa4585"
  },
  {
    "url": "95b64a6e-4c55d2ad6966a19db6f8.js"
  },
  {
    "url": "95b64a6e-4c55d2ad6966a19db6f8.js.map",
    "revision": "dc949b33cf6a7f4fd16962be0b1876c0"
  },
  {
    "url": "95b64a6e-7df4b477ec432349209d.js"
  },
  {
    "url": "95b64a6e-7df4b477ec432349209d.js.map",
    "revision": "d6c63b2ca14736c51bb6d230c2300200"
  },
  {
    "url": "app-442a1ff55740aeceb8c7.js"
  },
  {
    "url": "app-442a1ff55740aeceb8c7.js.map",
    "revision": "a76e843f9c9bf347916af9daeab3087b"
  },
  {
    "url": "app-b6d9b872b7c7fc24fdc6.js"
  },
  {
    "url": "app-b6d9b872b7c7fc24fdc6.js.map",
    "revision": "13c44d3e8fba5d8b94336613bfe7d34a"
  },
  {
    "url": "app-ea7b3337942065ff9b6a.js"
  },
  {
    "url": "app-ea7b3337942065ff9b6a.js.map",
    "revision": "8082eb83672c03ff68dc7c54712537d3"
  },
  {
    "url": "chunk-map.json",
    "revision": "2804db77ab0977c5a827a20d75dc6329"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-18b9bd78e89bbe4752a5.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-18b9bd78e89bbe4752a5.js.map",
    "revision": "62178bfc944a09db661e9157ace17cbe"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-42a1327fe593cdfd1ee6.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-42a1327fe593cdfd1ee6.js.map",
    "revision": "f778585a9e15c9c79fba791033a9958a"
  },
  {
    "url": "component---src-pages-404-js-7e615cc3a32c1f4e5dcb.js"
  },
  {
    "url": "component---src-pages-404-js-7e615cc3a32c1f4e5dcb.js.map",
    "revision": "6ff1e8bdbb93126e854c0600e57e36d3"
  },
  {
    "url": "component---src-pages-404-js-f041753f241893c6a803.js"
  },
  {
    "url": "component---src-pages-404-js-f041753f241893c6a803.js.map",
    "revision": "f3c2f59e70f621e379afc2ba8eb4fea1"
  },
  {
    "url": "component---src-pages-index-js-30d46823bbf9562d01e6.js"
  },
  {
    "url": "component---src-pages-index-js-30d46823bbf9562d01e6.js.map",
    "revision": "a06aca3db8ffa650dc3ad20745d9dd9d"
  },
  {
    "url": "component---src-pages-index-js-7bb1c4ce1ad50b17ccb3.js"
  },
  {
    "url": "component---src-pages-index-js-7bb1c4ce1ad50b17ccb3.js.map",
    "revision": "99605f16e490212b538f73180adaf383"
  },
  {
    "url": "component---src-pages-index-js-ae9a33b4e7948c690744.js"
  },
  {
    "url": "component---src-pages-index-js-ae9a33b4e7948c690744.js.map",
    "revision": "2023f643e121e97af901304528d2dd2c"
  },
  {
    "url": "component---src-pages-index-js-b3a2058925519ba838a5.js"
  },
  {
    "url": "component---src-pages-index-js-b3a2058925519ba838a5.js.map",
    "revision": "dcdfaef06061b836f86f2196abb57ec5"
  },
  {
    "url": "component---src-pages-index-js-f934a5a708ce6282b4ea.js"
  },
  {
    "url": "component---src-pages-index-js-f934a5a708ce6282b4ea.js.map",
    "revision": "00d716a4ef0d1bc595fda1a085c216da"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "60e4e9c72296b98f6d366846eb00660d"
  },
  {
    "url": "framework-972833c791692296cdd7.js"
  },
  {
    "url": "framework-972833c791692296cdd7.js.map",
    "revision": "f85b605096898e9453bfc50ac66c3f90"
  },
  {
    "url": "framework-a98752ec6c5dd0a6d705.js"
  },
  {
    "url": "framework-a98752ec6c5dd0a6d705.js.map",
    "revision": "8af0760eb51638da0949345206760fb9"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "aa6736162640665185e1d71965f6e8b7"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "f4dd8f0401ff0562d771e6e87189d0a3"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "6708fea9cdf67b642b1c0c8012eac416"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "c30ec65a9f6e9069a17760cf750cda9f"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "b285aa0999af991ce831684181618730"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "83803c6f96711ef00e791c4cbdc9c70a"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "79331da520575a9372537d87a292ac7e"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "1a909eb19bf2f185dc432889061c56c6"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "fbf38b0ad4558a5ffde0c7648b6559bd"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "02157cf8fbe8eb42f010605ea91ccf8e"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "10160f724950ad6f6745cf0680572279"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "70f734b5b47ea9ad6353c2a25c85b2fd"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "ab935f94fe76bebdaa856ee7a3b135f1"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7ccb1677a3924eb7498e27ccb409e361"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "static/03e555e6336ea52b8c891210a52be761/aff39/mta.png"
  },
  {
    "url": "static/03e555e6336ea52b8c891210a52be761/c1598/mta.png"
  },
  {
    "url": "static/03e555e6336ea52b8c891210a52be761/ea22a/mta.png"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/1f5c5/ffm-player.webp"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/2a4de/ffm-player.png"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/497c6/ffm-player.png"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/58556/ffm-player.webp"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/61e93/ffm-player.webp"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/65e33/ffm-player.png"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/69585/ffm-player.png"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/a03f0/ffm-player.png"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/ad85c/ffm-player.webp"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/d1f52/ffm-player.webp"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/d891e/ffm-player.webp"
  },
  {
    "url": "static/0c1935335c89dc37774e49a4c69bfd41/ee604/ffm-player.png"
  },
  {
    "url": "static/22e64392a10cfd10c255f3d5f77438ae/0d3d9/grover.webp"
  },
  {
    "url": "static/22e64392a10cfd10c255f3d5f77438ae/b1497/grover.png"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/0aa94/angular.webp"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/4c427/angular.png"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/91664/angular.png"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/c05ea/angular.webp"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/e711a/angular.webp"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/ff4be/angular.png"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/1d3f3/lnrd.png"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/1f5c5/lnrd.webp"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/2a4de/lnrd.png"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/497c6/lnrd.png"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/58556/lnrd.webp"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/61e93/lnrd.webp"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/65e33/lnrd.png"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/69585/lnrd.png"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/a3b1c/lnrd.webp"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/ad85c/lnrd.webp"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/d1f52/lnrd.webp"
  },
  {
    "url": "static/3474bed81a25ff7ab8d0206e2b60ca3f/ee604/lnrd.png"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/0aa94/web.webp"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/4c427/web.png"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/91664/web.png"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/c05ea/web.webp"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/e711a/web.webp"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/ff4be/web.png"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/0aa94/seo.webp"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/4c427/seo.png"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/91664/seo.png"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/c05ea/seo.webp"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/e711a/seo.webp"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/ff4be/seo.png"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/0aa94/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/4c427/nodejs.png"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/91664/nodejs.png"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/c05ea/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/e711a/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/ff4be/nodejs.png"
  },
  {
    "url": "static/3c83348a77862d65a2b007affa5435f8/403a4/cv.webp"
  },
  {
    "url": "static/3c83348a77862d65a2b007affa5435f8/630fb/cv.png"
  },
  {
    "url": "static/3c83348a77862d65a2b007affa5435f8/6d161/cv.png"
  },
  {
    "url": "static/3c83348a77862d65a2b007affa5435f8/c8132/cv.webp"
  },
  {
    "url": "static/3c83348a77862d65a2b007affa5435f8/e7487/cv.webp"
  },
  {
    "url": "static/3c83348a77862d65a2b007affa5435f8/ecb77/cv.png"
  },
  {
    "url": "static/44ba7bff257c526a3f455f6292a1add0/403a4/cv.webp"
  },
  {
    "url": "static/44ba7bff257c526a3f455f6292a1add0/630fb/cv.png"
  },
  {
    "url": "static/44ba7bff257c526a3f455f6292a1add0/6d161/cv.png"
  },
  {
    "url": "static/44ba7bff257c526a3f455f6292a1add0/c8132/cv.webp"
  },
  {
    "url": "static/44ba7bff257c526a3f455f6292a1add0/e7487/cv.webp"
  },
  {
    "url": "static/44ba7bff257c526a3f455f6292a1add0/ecb77/cv.png"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/1f5c5/fxempire.webp"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/2a4de/fxempire.png"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/30c3d/fxempire.png"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/497c6/fxempire.png"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/58556/fxempire.webp"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/61e93/fxempire.webp"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/65e33/fxempire.png"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/69585/fxempire.png"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/86eac/fxempire.webp"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/ad85c/fxempire.webp"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/d1f52/fxempire.webp"
  },
  {
    "url": "static/6cf8cfb9054331b03758031de453a9ef/ee604/fxempire.png"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/0aa94/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/4c427/database.png"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/91664/database.png"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/c05ea/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/e711a/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/ff4be/database.png"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/0aa94/android.webp"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/4c427/android.png"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/91664/android.png"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/c05ea/android.webp"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/e711a/android.webp"
  },
  {
    "url": "static/8e0b048da80c2cdab277bc72f5448b46/ff4be/android.png"
  },
  {
    "url": "static/a0fd8243139181c9f9d2127821062cf1/0d3d9/fxempirenew.webp"
  },
  {
    "url": "static/a0fd8243139181c9f9d2127821062cf1/159a2/fxempirenew.png"
  },
  {
    "url": "static/a0fd8243139181c9f9d2127821062cf1/2ac84/fxempirenew.png"
  },
  {
    "url": "static/a0fd8243139181c9f9d2127821062cf1/4e805/fxempirenew.webp"
  },
  {
    "url": "static/a0fd8243139181c9f9d2127821062cf1/6258c/fxempirenew.webp"
  },
  {
    "url": "static/a0fd8243139181c9f9d2127821062cf1/b1497/fxempirenew.png"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/1f5c5/ciyot.webp"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/2a4de/ciyot.png"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/46f63/ciyot.png"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/497c6/ciyot.png"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/53690/ciyot.webp"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/58556/ciyot.webp"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/61e93/ciyot.webp"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/65e33/ciyot.png"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/69585/ciyot.png"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/ad85c/ciyot.webp"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/d1f52/ciyot.webp"
  },
  {
    "url": "static/ab327704e52525135a3694a8a432c6db/ee604/ciyot.png"
  },
  {
    "url": "static/aec40c5d062faba36e6e805e0c1a7dd6/b3a76/photo.png"
  },
  {
    "url": "static/d/1013331041.json"
  },
  {
    "url": "static/d/1163432668.json"
  },
  {
    "url": "static/d/1281174074.json"
  },
  {
    "url": "static/d/2594087537.json"
  },
  {
    "url": "static/d/297506416.json"
  },
  {
    "url": "static/d/3208941252.json"
  },
  {
    "url": "static/d/353842809.json"
  },
  {
    "url": "static/d/3731995382.json"
  },
  {
    "url": "static/d/765055119.json"
  },
  {
    "url": "static/dedb287aa00d0d1b9774f50a82613374/0d3d9/equala.webp"
  },
  {
    "url": "static/dedb287aa00d0d1b9774f50a82613374/159a2/equala.png"
  },
  {
    "url": "static/dedb287aa00d0d1b9774f50a82613374/2ac84/equala.png"
  },
  {
    "url": "static/dedb287aa00d0d1b9774f50a82613374/4e805/equala.webp"
  },
  {
    "url": "static/dedb287aa00d0d1b9774f50a82613374/6258c/equala.webp"
  },
  {
    "url": "static/dedb287aa00d0d1b9774f50a82613374/b1497/equala.png"
  },
  {
    "url": "static/f8da7516563c19701a34da618d2c6cee/0d3d9/featurefm.webp"
  },
  {
    "url": "static/f8da7516563c19701a34da618d2c6cee/159a2/featurefm.png"
  },
  {
    "url": "static/f8da7516563c19701a34da618d2c6cee/2ac84/featurefm.png"
  },
  {
    "url": "static/f8da7516563c19701a34da618d2c6cee/4e805/featurefm.webp"
  },
  {
    "url": "static/f8da7516563c19701a34da618d2c6cee/6258c/featurefm.webp"
  },
  {
    "url": "static/f8da7516563c19701a34da618d2c6cee/b1497/featurefm.png"
  },
  {
    "url": "static/fef12faa4a12d201337972388d74b821/0b7e8/icon.webp"
  },
  {
    "url": "static/fef12faa4a12d201337972388d74b821/62cc5/icon.webp"
  },
  {
    "url": "static/fef12faa4a12d201337972388d74b821/adbdf/icon.webp"
  },
  {
    "url": "static/fef12faa4a12d201337972388d74b821/aff39/icon.png"
  },
  {
    "url": "static/fef12faa4a12d201337972388d74b821/c1598/icon.png"
  },
  {
    "url": "static/fef12faa4a12d201337972388d74b821/ea22a/icon.png"
  },
  {
    "url": "styles-6b8affa5cc22cb60670e.js"
  },
  {
    "url": "styles-6b8affa5cc22cb60670e.js.map",
    "revision": "1720725fc6619054e7d1014b20e71571"
  },
  {
    "url": "styles-bad75b3672de5a2c433d.js"
  },
  {
    "url": "styles-bad75b3672de5a2c433d.js.map",
    "revision": "0815679baae415a141054a8f7e6332b6"
  },
  {
    "url": "styles.de1006431c2b91f83875.css"
  },
  {
    "url": "webpack-runtime-43708387bcd2aa3ec1d3.js"
  },
  {
    "url": "webpack-runtime-43708387bcd2aa3ec1d3.js.map",
    "revision": "9b2554e04c6dd26c9bc2208bbeed1131"
  },
  {
    "url": "webpack-runtime-8e0f3ef796fff9f50c7d.js"
  },
  {
    "url": "webpack-runtime-8e0f3ef796fff9f50c7d.js.map",
    "revision": "2c5d2c9b5984bdf63f0a4290995da50a"
  },
  {
    "url": "webpack-runtime-bb7935e0f8ccee6ee6ae.js"
  },
  {
    "url": "webpack-runtime-bb7935e0f8ccee6ee6ae.js.map",
    "revision": "66c5e6b2183cbe5b469c19c5100fc4e9"
  },
  {
    "url": "webpack-runtime-bff891dd6747651686a4.js"
  },
  {
    "url": "webpack-runtime-bff891dd6747651686a4.js.map",
    "revision": "c1266141dc181b8a5bb431b88772e96b"
  },
  {
    "url": "webpack-runtime-cba55fa4659aa759e058.js"
  },
  {
    "url": "webpack-runtime-cba55fa4659aa759e058.js.map",
    "revision": "f3763168122fa5b7e9d39d786d8f31ee"
  },
  {
    "url": "webpack.stats.json",
    "revision": "ca9dfeeace72db88a9f62cf8c71f2d7f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-ea7b3337942065ff9b6a.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
