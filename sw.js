const CACHE_NAME = 'my-app-cache-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icon.png' // Добавьте сюда названия своих CSS или JS файлов, если они есть
];

// Установка: кешируем файлы
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Работа в офлайне: берем файлы из кеша
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
