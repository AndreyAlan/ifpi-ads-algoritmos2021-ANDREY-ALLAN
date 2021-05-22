const prompt = require('prompt-sync')();

// Entrada
const base = Number(prompt('Informe a base do retângulo: '))
const altura = Number(prompt('Informe a altura do retângulo: '))

// Processamneto
const area = (base * altura).toFixed(1)

// Saida
console.log('A área do retângulo é igual a: ', area)