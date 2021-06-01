const prompt = require('prompt-sync')();

// Entrada
const lado = Number(prompt('Informe o comprimento do lado do quadrado: '))

// Processamento
const area = (lado * lado).toFixed(1)

// Saida
console.log('A área do quadrado é igual a: ', area)