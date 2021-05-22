const prompt = require('prompt-sync')();

// Entrada
const numero = Number(prompt('Insira o valor: R$ ')) // Recebendo o valor em reais

// Processamento
const num = (numero * (70 / 100)).toFixed(2) // Processando os dadso recebidos

// Saida
console.log('70% de R$ ', numero, 'é igual a: R$ ', num) // Resultado final, após o calculo