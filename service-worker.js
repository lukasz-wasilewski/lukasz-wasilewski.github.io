"use strict";var precacheConfig=[["/index.html","f079e4f6a574cdc16d4bfe1adcddd177"],["/static/css/main.3c25716c.css","4bf8b6266a139ad07de65babe91ee470"],["/static/js/main.36eb9877.js","10538824716af06a9244d9b31c6c0512"],["/static/media/arrow.b530512c.svg","b530512cf3acc402578d8f9c1128c3ea"],["/static/media/fa-brands-400.030846b7.woff","030846b7226a63373512cbd2c71ff51a"],["/static/media/fa-brands-400.3f5a250e.ttf","3f5a250e01aa2a2c757c8d8915216e0b"],["/static/media/fa-brands-400.4291d4b6.eot","4291d4b6c28b411e821a90adb4716fd7"],["/static/media/fa-brands-400.65e3be4e.woff2","65e3be4eea08191c64040fbcb8006068"],["/static/media/fa-brands-400.8e04d338.svg","8e04d338e5f3a734136e5fa058f60d0b"],["/static/media/fa-solid-900.140f4148.woff","140f41485edce6f713abe17625eba4c1"],["/static/media/fa-solid-900.4910ec73.eot","4910ec733558f59bf05834d4f831a48d"],["/static/media/fa-solid-900.813b8aee.woff2","813b8aee60f235b36887a388b70e1359"],["/static/media/fa-solid-900.e57e108a.ttf","e57e108a1ae04ca2b27cab75e4478867"],["/static/media/fa-solid-900.e98a92ac.svg","e98a92ac980c63c46a7e25c4fbcf30ef"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});