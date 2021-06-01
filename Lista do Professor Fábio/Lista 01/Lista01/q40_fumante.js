const prompt = require('prompt-sync')()

// Entrada
const anos = prompt('A quantos anos você fuma? ')
const cigarros_por_dia = prompt('Quantos cigarros você fuma por dia? ')
const valor_do_cigarro = prompt('Qual o valor de uma carteira de cigarros?')

// Processamento
const gastos = (((cigarros_por_dia * (anos*365))/20) * valor_do_cigarro).toFixed(2)

// Saída
console.log('O valor gasto por você em carteiras de cigarros é de:', 'R$ ', gastos)