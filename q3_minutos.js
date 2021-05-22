const prompt = require('prompt-sync')();

// Entrada
const minutos = Number(prompt('O numero de minutos: ')) // Recebendo dados

// Processamentos
const conversao_horas = Math.trunc(minutos/60) // Processando dados recebidos
const minutos_restantes = minutos - (conversao_horas*60) //Processando dados após a conversão para horas

// Saida
console.log(minutos, 'Correspondem a:', conversao_horas,'horas e', minutos_restantes, 'minutos!')