const prompt = require('prompt-sync')();

// Entrada
const raio = Number(prompt('Informe o raio da circunferêcia: '))

// Processamento
const comprimento = (2 * 3.14 * raio).toFixed(1)

// Saida
console.log('A circunfeência é igual a: ', comprimento)