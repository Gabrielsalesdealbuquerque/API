// Cria uma instância do objeto XMLHttpRequest para fazer uma requisição AJAX
var xhr = new XMLHttpRequest();

// Define a chave da API do Pixabay
var apiKey = '36686045-038d147d9d8df3214fb23ece0';

// Abre uma conexão para fazer uma requisição GET para a API do Pixabay
xhr.open('GET', 'https://pixabay.com/api/?key=' + apiKey + '&q=random', true);

// Define a função que será executada quando a requisição for concluída
xhr.onload = function() {
  // Verifica se o status da resposta é 200 (OK)
  if (xhr.status === 200) {
    // Converte o texto da resposta em formato JSON para um objeto JavaScript
    var response = JSON.parse(xhr.responseText);
    
    // Verifica se a resposta possui alguma foto (hits) disponível
    if (response.hits.length > 0) {
      // Obtém a URL da primeira foto (hits[0]) da resposta
      var photoUrl = response.hits[0].largeImageURL;
      
      // Atualiza o atributo src da imagem com a URL da foto aleatória
      document.getElementById('random-photo').src = photoUrl;
    }
    else {
      console.log('Nenhuma foto encontrada.');
    }
  }
  else {
    console.log('Erro ao obter a foto aleatória.');
  }
};

// Envie a requisição para a API do Pixabay
xhr.send();