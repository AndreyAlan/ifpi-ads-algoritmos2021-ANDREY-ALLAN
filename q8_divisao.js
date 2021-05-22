const prompt = require('prompt-sync')();

// Entrada
const numero1 = Number(prompt('Insira o primeiro número: '))
const numero2 = Number(prompt('Insira o segundo número: '))

// Processamento
const soma = numero1 + numero2
const subtraçao = numero1 - numero2
const divisão = (soma / subtraçao).toFixed(1)

// Saida
console.log('A soma do 1° com 2° digito divido pela subtração dos mesmos, é igual a: ', divisão)