self.addEventListener("install", function (event) {
  console.log("ServiceWorker: Installed!", event);
  console.log("Cache Criada");
});

self.addEventListener("activate", function (event) {
  console.log("SW:: Activated", event);
});

self.addEventListener("fetch", function (event) {
  if (event.request.url.endsWith("/conteudoHome")) {
    var htmlTable = '<table class="rTable">'; //< -- INICIO TABELA MONT
    htmlTable += "<thead><tr><th>ID</th><th>NOME</th><th>PRECO</th><th>EXCLUIR</th></tr></thead>"; //
    htmlTable += "<tbody>";
    htmlTable += "<tr><td>1</td><td>TESTE</td><td>12.50</td><td>X</td></tr>";
    htmlTable += "<tr><td>2</td><td>TESTE</td><td>12.50</td><td>X</td></tr>";

    htmlTable += "</tbody>";
    htmlTable += "</table>"; //< -- FIM TABLE

    let respostaFinal = new Response(htmlTable);
    event.respondWith(respostaFinal);
  }
});
