const prompt = require('prompt-sync')()

//Entrada
const fabrica = Number(prompt('insira va lor de fábrica do veículo: R$ '))

//Processamento
const porc_distribuidor = fabrica * 0.28
const impostos = fabrica * 0.45
const v_final = (fabrica + porc_distribuidor + impostos).toFixed(2)

//Saída
console.log('O valor do veículo para o consumidor é um total de R$', v_final)