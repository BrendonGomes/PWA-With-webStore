
self.addEventListener('install', function(event){
    console.log('ServiceWorker: Installed!', event);
      //caches.open('cache-gesbar');
      console.log('Cache Criada');
});

self.addEventListener('activate', function(event){
    console.log('SW:: Activated', event);
});

self.addEventListener('fetch', function(e){
    console.log('ENTREI NO FETCH');
    console.log('SW: CARGA: ', e.request.url);

});
