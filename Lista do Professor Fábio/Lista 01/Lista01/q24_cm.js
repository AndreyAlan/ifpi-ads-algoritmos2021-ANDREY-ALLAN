const prompt = require('prompt-sync')();

// Entrada
const metros = Number(prompt('Informe o valor em metros: '))

// Processamento
const cm = metros * 100

// Saida
console.log(metros, 'metros, equivalem a ', cm, 'centímetros')