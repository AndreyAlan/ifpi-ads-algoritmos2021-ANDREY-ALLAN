const prompt = require('prompt-sync')();

//Entrada
const num = Number(prompt('Insira o primeiro número: '))
const num2 = Number(prompt('Insira o segundo número: '))
const num3 = Number(prompt('Insira o terceiro número: '))

// Processamento
const media = ((num + num2 + num3) / 3).toFixed(1)

// Saida
console.log('A media dos números', num, ',', num2, ',', num3,', é igual a: ', media)