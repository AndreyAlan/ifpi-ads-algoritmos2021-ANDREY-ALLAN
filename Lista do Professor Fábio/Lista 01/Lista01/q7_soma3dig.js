const prompt = require('prompt-sync')();

// Entrada
const dig1 = Number(prompt('Insira o primeiro digito: ')) // Recebendo o primeiro digito do número de 3 algorismo
const dig2 = Number(prompt('Insira o segundo digito: ')) // Recebendo o segundo digito do número de 3 algorismo
const dig3 = Number(prompt('Insira o terceiro digito: ')) // Recebendo o terceiro digito do número de 3 algorismo

// Processamento
const soma = dig1 + dig2
const subtraçao = dig2 - dig3

// Saida
console.log(dig1, '+', dig2, '=', soma)
console.log(dig2, '-', dig3, '=', subtraçao)