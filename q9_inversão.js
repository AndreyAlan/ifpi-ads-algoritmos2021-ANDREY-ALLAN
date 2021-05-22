const prompt = require('prompt-sync')();

// Entrada
const num = Number(prompt('Insira um número de 2 digitos: '))

// Processamento
const num1 = Math.trunc(num / 10)
const num2 = num - (num1 * 10)
const inverso = (num2 * 10) + num1

// Saida
console.log('O inverso do número', num, 'é igual a: ', inverso)