const prompt = require('prompt-sync')();

// Entrada
const velocidade_km = Number(prompt('Velocidade (km/h): ')) // Recebendo dados em km/h

// Processamento
const velocidade_ms = velocidade_km / 3.6 // Convertendo dados recebidos em m/s

//Saida
console.log('A velocidade', velocidade_km, 'km/h')
console.log('é igual a', velocidade_ms.toFixed(2), 'm/s')