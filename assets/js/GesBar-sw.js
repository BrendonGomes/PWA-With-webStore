
self.addEventListener('install', function(event){
    console.log('ServiceWorker: Installed!', event);
    
      caches.open('cache-gesbar');
      console.log('Cache Criada');
    
    
});

self.addEventListener('activate', function(event){
    console.log('SW:: Activated', event);
});

self.addEventListener('fetch', function(e){
  if(e.request.url.endsWith('/getPrudutos')){
    let res = new Response('Olas');
    e.respondWith(res);
  }
});
