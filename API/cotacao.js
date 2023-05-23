// Obtém uma referência ao elemento HTML com o ID "cotacao"
const cotacao = document.getElementById('cotacao');

// URL da API para obter a cotação do dólar
var url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='05-09-2023'&$format=json";

// Cria uma instância do objeto XMLHttpRequest para fazer uma requisição AJAX
let request = new XMLHttpRequest();

// Abre uma conexão para fazer uma requisição GET para a API do Banco Central
request.open('GET', url, true);

// Define a função que será executada quando a requisição for concluída
request.onload = function() {
  // Verifica se o estado da requisição é 4 (concluída) e o status é 200 (OK)
  if (request.readyState == 4 && request.status == 200) {
    // Converte o texto da resposta em formato JSON para um objeto JavaScript
    var resposta = JSON.parse(request.responseText);
    
    // Obtém os valores da cotação do dólar da resposta
    var valores = resposta.value[0];
    
    // Exibe o valor da cotação de compra do dólar no console
    console.log(valores.cotacaoCompra);
    
    // Atualiza o conteúdo do elemento HTML "cotacao" com o valor da cotação de compra do dólar formatado
    cotacao.innerHTML = valores.cotacaoCompra.toFixed(2);
  } 
};

// Define a função que será executada em caso de erro na requisição
request.onerror = function() {
  console.log("Erro:" + request);
};

// Envie a requisição para a API do Banco Central
request.send();
