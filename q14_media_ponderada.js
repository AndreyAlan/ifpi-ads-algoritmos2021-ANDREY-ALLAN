const prompt = require('prompt-sync')();

// Entrada

const media = Number(prompt('Informe a nota 1: ')) // Recebendo dados
const peso = Number(prompt('Imforme o peso da nota 1: ')) // Recebendo dados
const media2 = Number(prompt('Informe a nota 2: ')) // Recebendo dados
const peso2 = Number(prompt('Informe o peso da nota 2: ')) // Recebendo dados
const media3 = Number(prompt('Informe a nota 3: ')) // Recebendo dados
const peso3 = Number(prompt('Informe o peso da nota 3: ')) // Recebendo dados

// Processamento
const media_ponderada = ((media * peso) + (media2 * peso2) + (media3 * peso3) / (peso) + (peso2) + (peso3)).toFixed(2) // Calculo da media ponderda

// Saida
console.log('A sua media ponderada é; ',  media_ponderada) // Resultado final, depois do calculo da media ponderada