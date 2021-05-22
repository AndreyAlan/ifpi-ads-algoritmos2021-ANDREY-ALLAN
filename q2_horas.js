const prompt = require('prompt-sync')();

// Entrada
const horas = Number(prompt('O numero de horas: ')) // Recebendo dados
const minutos = Number(prompt('O numero de minutos: ')) // Recebendo dados

//Processamentos
const conversao_minutos = (horas*60) + minutos // Processando dados recebidos

// Saida
console.log(horas, 'Horas e', minutos, 'minutos correspondem a:', conversao_minutos, 'minutos')