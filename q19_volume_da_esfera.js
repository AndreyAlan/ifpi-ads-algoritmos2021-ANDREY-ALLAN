const prompt = require('prompt-sync')();

// Entrada
const raio = Number(prompt('Informe o valor do raio: '))

// Processamento
const pi = 3.14
const volume = ((4 * pi * raio) / 3).toFixed(1)

// Saida
console.log('O volume da esfera é: ', volume)