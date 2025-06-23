self.addEventListener('install', function(e) {
  console.log('Service Worker 설치 완료');
  e.waitUntil(
    caches.open('lookbook-v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
