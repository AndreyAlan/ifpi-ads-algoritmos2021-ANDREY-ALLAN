const prompt = require('prompt-sync')();

// Entrada
const numero = prompt('Insira o número inteiro composto por 3 algarismos: ')

// Processamneto
const inverso = numero[2] + numero[1] + numero[0]

// Saida
console.log('O inverso de', numero, 'é', inverso)