const prompt = require('prompt-sync')();

// Entrada
const km = Number(prompt('Insira o valor (em Km): '))

//Processamento
const metros = km * 1000

// Saida
console.log(km, 'km, equivalem a: ', metros, 'metros')