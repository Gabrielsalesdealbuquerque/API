apiKey = 'e866ac8f08c08e2e6c8f10eef88d0f30';
//define uma constante que armazena a sua chave de API

const temperature = document.getElementById('temperature');

// Define as informaçoes que queremos trazer

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=sao paulo&appid=' + apiKey;

fetch()
fetch(apiUrl)
.then(Response => Response.json())//converte a resposta em javascript
.then(data=>{
    console.log(data);
    city.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp - 273.15) + '°C';
    
});

fetch()
fetch(apiUrl)
.then(Response => Response.json())
.then(data =>{
    console.log(data);

});