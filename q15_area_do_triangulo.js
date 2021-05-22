const prompt = require('prompt-sync')();

// Entrada
const base = Number(prompt('Informe a base do triângulo: '))
const altura = Number(prompt('Informe a altura do triângulo: '))

// Processamento
const area = ((base * altura) / 2).toFixed(1)

// Saida
console.log('A área do triângulo é igual a: ', area)