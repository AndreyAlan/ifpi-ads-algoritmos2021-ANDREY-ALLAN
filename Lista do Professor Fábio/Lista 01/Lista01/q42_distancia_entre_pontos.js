const prompt = require('prompt-sync')()

// Entrada
const ponto_x = prompt('ponto 1(x):')
const ponto_y = prompt('ponto 1(y):')

const ponto_x1 = prompt('ponto 2(x):')
const ponto_y2 = prompt('ponto 2(y):')

// Processamento
const distancia = Math.sqrt((ponto_x1 - ponto_x)**2 + (ponto_y2 - ponto_y)**2).toFixed(2)

// Saída
console.log('A distância entre os pontos é de:  ', distancia)