const prompt = require('prompt-sync')();

// Entrada
const numeros_3dig = Number(prompt('Digite um número inteiro composto por 3 digitos: ')) // Recebendo dados

// Processamento
const dig1_uni = Math.trunc(numeros_3dig / 100)
const dig2_deze = Math.trunc((numeros_3dig - (dig1_uni * 100)) / 10)
const dig3_cent = numeros_3dig - ((dig1_uni * 100) + (dig2_deze * 10))
const soma = dig1_uni + dig2_deze + dig3_cent

// Saida
console.log('O número informado por você foi: ', numeros_3dig)
console.log('A soma do', dig1_uni, '+', dig2_deze, '+', dig3_cent, 'digito é igual a: ', soma)