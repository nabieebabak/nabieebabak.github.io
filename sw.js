importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2dcfd50e947f35f18891.js",
    "revision": "475793e65289570eb8f04c186bb01c87"
  },
  {
    "url": "/_nuxt/2e0bf228da3c8a80b079.js",
    "revision": "ff8c1023a0eb1b5898279b8178f9a1d3"
  },
  {
    "url": "/_nuxt/492413ec50780cb13429.js",
    "revision": "c52a449d358d79f75850d3e5734921a1"
  },
  {
    "url": "/_nuxt/5b087fa37a00659aee70.js",
    "revision": "14000b75114e854681e75f2180fad705"
  },
  {
    "url": "/_nuxt/daea466dbf69ae33319c.js",
    "revision": "1a0dae131059b567cb471a13bf4bad8d"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
