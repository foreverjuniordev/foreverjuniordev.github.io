"use strict";var precacheConfig=[["/index.html","4429c83a3f77440b90fa976fcfce5203"],["/static/css/main.cf122344.css","2b570f8d9a2e13b8b411cd5c25d97d69"],["/static/js/0.4f6707a5.chunk.js","f657f7ca3d09a2db1bfb767b50f6b096"],["/static/js/1.ff5b993e.chunk.js","2234851d1e70af8be2e6bbbbfe5459de"],["/static/js/2.fb27a128.chunk.js","0db3dfb52785d442a72165ab2df59ef6"],["/static/js/3.d9ae5bfc.chunk.js","6e23c9671a3521d9cf6051154880dc26"],["/static/js/4.6196bb99.chunk.js","ea75dac3d0cabf71582e559ea2906353"],["/static/js/5.59c196da.chunk.js","e73e9f3a0c36c18c3502937967bb7588"],["/static/js/6.41ae4dda.chunk.js","d490bdf2b2bad88139dc3a59d099e5cf"],["/static/js/main.42e58402.js","3504df278c39c7a5afd3182d78c7837a"],["/static/media/OpenSans-Regular.629a55a7.ttf","629a55a7e793da068dc580d184cc0e31"],["/static/media/baseline-4k-24px.86c60220.svg","86c60220684e0e08a0aaf311f74778e6"],["/static/media/baseline-arrow_upward-24px.2261ca9a.svg","2261ca9a6cdd6d80fd4912f30e326a6d"],["/static/media/baseline-arrow_upward-24px_black.cc188416.svg","cc188416e46080b6550c5287c505afc6"],["/static/media/baseline-audiotrack-24px.16130e8c.svg","16130e8c33e21552bb5812a399257e7c"],["/static/media/baseline-color_lens-24px.a08425e5.svg","a08425e51947c5bb52870a05ef27c18f"],["/static/media/baseline-movie-24px.724a6628.svg","724a6628f34abcca0cecba6dff026b63"],["/static/media/baseline-open_in_new-24px.3e3533dd.svg","3e3533ddeb202359f1b33d4310d20f6b"],["/static/media/baseline-sd_card-24px.627616a8.svg","627616a84706e35e489b21cd16ecafc9"],["/static/media/baseline-settings_input_svideo-24px.2c559e17.svg","2c559e17eed3a661211e3267b934393e"],["/static/media/baseline-view_column-24px.a5ec8164.svg","a5ec81646d992d77fd1cfe2c5bb04fc4"],["/static/media/baseline-view_column-24px_black.68ca7c80.svg","68ca7c806ec20059ce9f02f71c43eb03"],["/static/media/baseline-view_module-24px.5f517486.svg","5f5174861673b246e7c4e9e2f24fdeac"],["/static/media/baseline-view_module-24px_black.5e471541.svg","5e47154134eb9dd68bcd53913bf94d9e"],["/static/media/brand.28745bed.png","28745bedd440f0f597ca57a9ac06aae8"],["/static/media/ic_account_circle_white_24px.4675d4dc.svg","4675d4dc7f340b5ec27f96d7422215e3"],["/static/media/ic_add_box_white_24px.a8dce648.svg","a8dce648c980bb06ee56464c23d54b23"],["/static/media/ic_cast_white_24px.d55f112c.svg","d55f112c6c44f93e7bcec2177139327f"],["/static/media/ic_closed_caption_white_24px.52184cab.svg","52184cabb451be85306f1d4b184a8dd7"],["/static/media/ic_delete_forever_white_24px.4a8cf01a.svg","4a8cf01a596f08ab58ab0f58170dda86"],["/static/media/ic_edit_white_24px.73003794.svg","73003794bf204257e25ae020dd26bc28"],["/static/media/ic_home_white_24px.5359baff.svg","5359baff3cc05eb69c843e9baec9347f"],["/static/media/ic_keyboard_arrow_down_black_24px.c014c41f.svg","c014c41f7d9e95ce4d7e7e77555e46c1"],["/static/media/ic_message_white_24px.b2f26e87.svg","b2f26e875779e8fffc94ea877ae218b4"],["/static/media/ic_notifications_none_white_24px.eb225ac0.svg","eb225ac0a334dfb24bf558cdf199498e"],["/static/media/ic_search_black_24px.46a97de5.svg","46a97de5d8c0d86fb3362515efd81495"],["/static/media/ic_thumb_up_white_24px.9fc7cbdb.svg","9fc7cbdbd8c760194aeb5d2f68c77485"],["/static/media/ic_watch_later_white_24px.4c4ba723.svg","4c4ba723f1582cd844f75f032babe5a0"],["/static/media/imdb.6cedff70.svg","6cedff709bf3a885fcdd31421ade8e6d"],["/static/media/login_bg.fbe234df.jpg","fbe234df85b5682051e364b55cc01180"],["/static/media/main_bg.a5e4507a.png","a5e4507a10c11d9a49b8dcd7774bc0f7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var s="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});