const prompt = require('prompt-sync')();

// Entrada
const elementos = prompt('Insira um número de 4 digitos: ')

// Processamento
const soma = (parseInt(elementos[0])) + parseInt(elementos[1]) + parseInt(elementos[2]) + parseInt(elementos[3])

// Saida
console.log('A soma dessa 4 digitos correspondem a: ', soma)