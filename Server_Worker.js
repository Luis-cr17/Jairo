self.addEventListener('install', function(event) {
  console.log('[Service Worker] precaching...', event);
  event.waitUntil(
    caches.open('static').then(function(cache) {
      cache.add('./src/js/App.js');
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  return self.clients.claim();
});

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push event received:', event);
  const data = event.data.json(); // Parsea los datos recibidos desde la notificación
  const options = {
    body: data.message,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1024px-Archlinux-icon-crystal-64.svg.png'
    // Puedes agregar más configuraciones de la notificación aquí si lo deseas
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetch event intercepted:', event);
  const requestUrl = new URL(event.request.url);

  if (requestUrl.origin === 'https://localhost:5001/catalog/GetProducts') {
    event.respondWith(
      caches.open('dynamic-data-cache').then(cache => {
        return fetch(event.request).then(response => {
          cache.put(event.request, response.clone());
          return response;
        }).catch(() => {
          return cache.match(event.request);
        });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          return response || fetch(event.request);
        })
    );
  }
});
