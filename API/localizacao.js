// Obtém a referência ao elemento HTML com o ID "coordenadas"
var x = document.getElementById("coordenadas");

// Verifica se o navegador suporta a API de geolocalização
if (navigator.geolocation) {
  // Se suportado, chama a função getCurrentPosition passando showPosition como callback
  navigator.geolocation.getCurrentPosition(showPosition);
} else { 
  // Se não suportado, exibe uma mensagem de erro no elemento HTML
  x.innerHTML = "Geolocalização não é suportada.";
}

// Função callback que é chamada quando a posição é obtida com sucesso
function showPosition(position) {
  // Atualiza o conteúdo do elemento HTML com as coordenadas de latitude e longitude
  // utilizando a propriedade coords do objeto position
  x.innerHTML = "Latitude: " + position.coords.latitude.toFixed(2) + 
  "<br>Longitude: " + position.coords.longitude.toFixed(2);
}