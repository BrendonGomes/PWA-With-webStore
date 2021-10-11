self.addEventListener("install", function (event) {
  console.log("ServiceWorker: Installed!", event);
  console.log("Cache Criada");
});

self.addEventListener("activate", function (event) {
  console.log("SW:: Activated", event);
});

self.addEventListener("fetch", function (event) {
  if (event.request.url.endsWith("/conteudoHome")) {
    console.log('ola')
    let respostaFinal = new Response(htmlTable);
    event.respondWith(respostaFinal);
  }
});
