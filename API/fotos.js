// Faz uma requisição para a API do Unsplash para obter uma foto aleatória
fetch('https://api.unsplash.com/photos/random?client_id=ngNGcR8jYcP4RRPsN62JaN4SpMEj9J_o7xLboC-oU38')
  .then(response => response.json()) // Converte a resposta em formato JSON
  .then(data => {
    // Extrai a URL da foto aleatória dos dados obtidos
    const photoUrl = data.urls.regular;
    // Atualiza o atributo src da imagem com a URL da foto aleatória
    document.getElementById('randomPhoto').src = photoUrl;
  })
  .catch(error => {
    // Em caso de erro, exibe uma mensagem de erro no console
    console.error('Erro ao obter a foto aleatória:', error);
  });

// Adiciona um ouvinte de evento para chamar a função quando o conteúdo da janela for carregado
window.addEventListener('DOMContentLoaded');