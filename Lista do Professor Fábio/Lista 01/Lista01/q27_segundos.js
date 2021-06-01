const prompt = require('prompt-sync')();

// Entrada
const segundos = Number(prompt('Insira a quantia de segundos: '))

// Processamento
const horas = Math.trunc(segundos / 3600)
const minutos = Math.trunc((segundos - (horas * 3600)) / 60)
const s_rest = segundos - (horas * 3600) - (minutos * 60)

// Saida
console.log(segundos, 'segundos, equivalem a: ', horas, 'horas', minutos, 'minutos', s_rest, 'segundos')