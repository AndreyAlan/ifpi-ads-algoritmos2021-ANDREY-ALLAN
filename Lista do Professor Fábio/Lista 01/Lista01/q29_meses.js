const prompt = require('prompt-sync')();

// Entrada
const meses = Number(prompt('Informe a quantia de meses: '))

// Processamento
const anos = Math.trunc(meses / 12)
const meses_rest = meses - (anos * 12)

// Saida
console.log(meses, "meses, equivalem a: ", anos, 'anos e', meses_rest, 'meses')