if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let n={};const d=e=>s(e,c),f={module:{uri:c},exports:n,require:d};a[c]=Promise.all(i.map((e=>f[e]||d(e)))).then((e=>(t(...e),n)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"87efb6ffbb0f1613ab2bb84feee887c1"},{url:"/_next/static/chunks/23-e853318ec178eb90.js",revision:"upF9Q4dfFSipz4C03EjBS"},{url:"/_next/static/chunks/595-bebf6cab1872f3f4.js",revision:"upF9Q4dfFSipz4C03EjBS"},{url:"/_next/static/chunks/app/_not-found/page-a289c4e442782567.js",revision:"upF9Q4dfFSipz4C03EjBS"},{url:"/_next/static/chunks/app/layout-039eb8e3d4c05582.js",revision:"upF9Q4dfFSipz4C03EjBS"},{url:"/_next/static/chunks/app/page-9ecd2c4ad6a47955.js",revision:"upF9Q4dfFSipz4C03EjBS"},{url:"/_next/static/chunks/app/verbs/page-3f258393cd119c1c.js",revision:"upF9Q4dfFSipz4C03EjBS"},{url:"/_next/static/chunks/fd9d1056-bebb72b69bb0c1a5.js",revision:"upF9Q4dfFSipz4C03EjBS"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"upF9Q4dfFSipz4C03EjBS"},{url:"/_next/static/chunks/main-13f74932e073cafd.js",revision:"upF9Q4dfFSipz4C03EjBS"},{url:"/_next/static/chunks/main-app-987c0adbec5b2aad.js",revision:"upF9Q4dfFSipz4C03EjBS"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"upF9Q4dfFSipz4C03EjBS"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"upF9Q4dfFSipz4C03EjBS"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-4084e686546bde45.js",revision:"upF9Q4dfFSipz4C03EjBS"},{url:"/_next/static/css/5a56e3c1761e58ad.css",revision:"5a56e3c1761e58ad"},{url:"/_next/static/css/aabfa190b234ad49.css",revision:"aabfa190b234ad49"},{url:"/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/_next/static/media/0a03a6d30c07af2e-s.woff2",revision:"79da53ebaf3308c806394df4882b343d"},{url:"/_next/static/media/30cd8f99d32fa6e8-s.woff2",revision:"e5c1b944d9e3380a062bf911e26728a3"},{url:"/_next/static/media/3f9466fc53690ba7-s.woff2",revision:"173212bc7f69965527b29df7419d615c"},{url:"/_next/static/media/46c21389e888bf13-s.woff2",revision:"272930c09ba14c81bb294be1fe18b049"},{url:"/_next/static/media/47f2b17825899446-s.p.ttf",revision:"54cc2fb9aeecccedde96c183678cbdd8"},{url:"/_next/static/media/4c285fdca692ea22-s.p.woff2",revision:"42d3308e3aca8742731f63154187bdd7"},{url:"/_next/static/media/6245472ced48d3be-s.p.woff2",revision:"335da181ffc3c425a4abf0e8fc0f1e42"},{url:"/_next/static/media/7108afb8b1381ad1-s.p.woff2",revision:"d5a9cbc34d22ffd5c4eb636dcca02f5d"},{url:"/_next/static/media/7db6c35d839a711c-s.p.woff2",revision:"de2b6fe4e663c0669007e5b501c2026b"},{url:"/_next/static/media/8888a3826f4a3af4-s.p.woff2",revision:"792477d09826b11d1e5a611162c9797a"},{url:"/_next/static/media/8d346445d24062b5-s.woff2",revision:"c965abed1310982a4d2148cb81765b56"},{url:"/_next/static/media/94575ae3783e7c88-s.woff2",revision:"a56bc9adab4ad49a6e6d19f72ac23bc0"},{url:"/_next/static/media/9e82d62334b205f4-s.p.woff2",revision:"1c2ea932e7620e3a752301d0e54d3d91"},{url:"/_next/static/media/arrow.37a1157b.svg",revision:"06920ebd2b20ed74871c9117d3b5b56a"},{url:"/_next/static/media/b957ea75a84b6ea7-s.p.woff2",revision:"0bd523f6049956faaf43c254a719d06a"},{url:"/_next/static/media/dfa2ccbeca9e77a8-s.woff2",revision:"4d88c8f550833714f8721257780b9000"},{url:"/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/_next/static/media/enne-code-dark.56fc32bd.svg",revision:"6390cbbd5b4ad6094694f54667cdef2d"},{url:"/_next/static/media/ennecode.7d81cd61.svg",revision:"2e47d3b13eaf5a64b5afb939ebe4fbe0"},{url:"/_next/static/media/f5767adec246cdc1-s.woff2",revision:"7a1c6501aa2b3327c1cf556362a851cb"},{url:"/_next/static/media/f7099cae2a5aa83f-s.woff2",revision:"8717ab2d20ae5ec51c6ac277e0331511"},{url:"/_next/static/media/star.ab351987.svg",revision:"1d9a8bc4b1eebd9e0326f9ab5b7277b9"},{url:"/_next/static/media/star2.b9931e87.svg",revision:"1b901d33bd83fd1de69aa01d5983c84b"},{url:"/_next/static/media/stars.35ba6d04.svg",revision:"c56dbcb81f31a61b297b4bd7c7241cfa"},{url:"/_next/static/upF9Q4dfFSipz4C03EjBS/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/upF9Q4dfFSipz4C03EjBS/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/image/icon-192x192.png",revision:"e1142081268ea703751a14f9fd973227"},{url:"/image/icon-512x512.png",revision:"cb6162734c0ea10841bfa8a8e0e1aa08"},{url:"/image/verbify.png",revision:"ad531d42a76b82ea5f30016b48cdd747"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
