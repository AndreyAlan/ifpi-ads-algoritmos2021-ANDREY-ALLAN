const prompt = require('prompt-sync')();

// Entrada
const minutos = Number(prompt('Informe a quantia de minutos: '))

// Processamento
const dias = Math.trunc(minutos / 1440)
const horas = Math.trunc((minutos - (dias * 1440)) / 60)
const min_rest = minutos - (dias * 1440) - (horas * 60)

// Saida, 
console.log(minutos, 'minutos, correspondem a: ', dias, 'dias', horas, 'horas e', min_rest, 'minutos')