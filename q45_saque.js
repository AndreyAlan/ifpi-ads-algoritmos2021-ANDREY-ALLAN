const prompt = require('prompt-sync')()

//Entrada
const valor_sacado = Number(prompt('Insira o valor que deseja sacar: R$'))

//Processamento
const notas_50 = Math.trunc(valor_sacado / 50)
const notas_10 = Math.trunc((valor_sacado % 50) / 10)
const notas_5 = Math.trunc((valor_sacado % 10) / 5)
const notas_1 = valor_sacado % 5

//Saída
console.log('Sacando', valor_sacado, 'você ira receber', notas_50, 'notas de R$ 50,', notas_10, 'notas de R$ 10,', notas_5, 'notas de R$ 5 e', notas_1, 'de R$ 1')