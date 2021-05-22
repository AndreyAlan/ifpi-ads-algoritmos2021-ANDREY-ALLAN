const prompt = require('prompt-sync')();

// Entrada
const dias = Number(prompt('Informe o número de dias: '))

// Processamento
const semanas = Math.trunc(dias / 7) 
const d_rest = dias - (semanas * 7)

// Saida
console.log(dias, 'dias, correspondem a: ',semanas, 'semanas e', d_rest, 'dias')