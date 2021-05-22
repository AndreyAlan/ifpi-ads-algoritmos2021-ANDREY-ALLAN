const prompt = require('prompt-sync')();

// Entrada
const dias = Number(prompt('Insira a sua idade em dias: '))

// Processamento
const anos = Math.trunc(dias / 365)
const meses = Math.trunc((dias - (anos * 365)) / 30)
const dias1 = dias - (anos * 365) - (meses * 30)

// Saida
console.log('Você possui: ',anos,'anos', meses, 'mês/meses', 'e', dias1 )