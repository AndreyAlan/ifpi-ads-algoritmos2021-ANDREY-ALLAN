const prompt = require('prompt-sync')();

// Entrada
const kg = Number(prompt('Informe a quantia em kg(quilogramas): '))

// Processamento
const gramas = kg * 1000

// Saida
console.log(kg, 'kg, equivalem a: ', gramas, 'gramas')