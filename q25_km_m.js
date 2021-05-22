const prompt = require('prompt-sync')();

// Entrada
const metros = Number(prompt('Insira a quantia metros: '))

// Processamento
const km = Math.trunc(metros / 1000)
const mr = metros - (km * 1000)

// Saida
console.log(metros, 'metros, equivalem a', km, 'km', mr , 'metros')