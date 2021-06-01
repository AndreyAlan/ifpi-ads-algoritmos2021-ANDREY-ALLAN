const prompt = require('prompt-sync')();

// Entrada
const horas = Number(prompt('Informe a quantidade de horas: '))

// Processamento
const semanas = Math.trunc(horas / 168)
const dias = Math.trunc((horas - (semanas * 168)) / 24)
const horas_rest = horas - (semanas * 168) - (dias * 24)

// Saida
console.log(horas, 'horas, equivalem a: ', semanas, 'semanas', dias, 'dias', horas_rest, 'horas')