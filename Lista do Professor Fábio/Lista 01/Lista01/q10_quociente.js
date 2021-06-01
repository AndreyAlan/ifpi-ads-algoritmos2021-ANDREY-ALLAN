const prompt = require('prompt-sync')();

// Entrada
const primeironum = Number(prompt('Insira o primeiro número: ')) // Recebendo o primeiro digito
const segundonum = Number(prompt('Insira o segundo número: ')) // Recebendo o segundo digito

// Processamento
const divisão = Math.trunc(primeironum / segundonum)
const resto = primeironum % segundonum

// Saida
console.log('A divisão do número', primeironum, 'por', segundonum, 'é igual a: ', divisão)
console.log('E o resto é igual a: ', resto)