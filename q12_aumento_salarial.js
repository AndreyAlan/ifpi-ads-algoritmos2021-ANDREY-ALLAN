const prompt = require('prompt-sync')();

// Entrada
const salario = Number(prompt('Salario (R$): '))

//Processamento
const aumento = salario * 25/100
const novo_slario = salario + aumento

//Saida
console.log('O seu novo salario é:', novo_slario)