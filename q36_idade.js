const prompt = require('prompt-sync')();

// Entrada
const anos = Number(prompt('Insira a quantidade de anos: '))
const meses = Number(prompt('Insira a quantidade de meses: '))
const dias = Number(prompt('Insira a quantidade de dias: '))

// Processamento
const idade = (anos * 365) + (meses * 30) + dias

// Saida
console.log('A sua idade em dias é aproximadamente: ', idade)