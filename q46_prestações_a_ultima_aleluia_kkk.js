const prompt = require('prompt-sync')()

//Entrada
const custo_mercadoria = Number(prompt('Insira o valor do produto: R$'))

//Processamento
const custo_de_entrada = (Math.trunc(custo_mercadoria / 3) + (custo_mercadoria % 3)).toFixed(2)
const valor_da_prestacao = ((custo_mercadoria - custo_de_entrada) / 2).toFixed(2)

//Saída
console.log('Se sua mercadoria custar ', 'R$', custo_mercadoria, 'o valor da entrada vai ser de', 'R$', custo_de_entrada, 'e no total de duas prestações de', 'R$', valor_da_prestacao, 'cada')
