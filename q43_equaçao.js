const prompt = require('prompt-sync')()

//Entradas
const valor_A = Number(prompt('Insira o valor de A: '))
const valor_B = Number(prompt('Insira o valor de B: '))
const valor_C = Number(prompt('Insira o valor de C: '))
const valor_D = Number(prompt('Insira o valor de D: '))
const valor_E = Number(prompt('Insira o valor de E: '))
const valor_F = Number(prompt('Insira o valor de F: '))

//Processamento
const valor_x = (((valor_C * valor_E) - (valor_B * valor_F)) / ((valor_A * valor_E) - (valor_B * valor_D))).toFixed(2)
const valor_y = (((valor_A * valor_F) - (valor_C * valor_D)) / ((valor_A * valor_E) - (valor_B * valor_D))).toFixed(2)

//Saída
console.log('O coeficiente de X é igual a: ', valor_x, 'e o de Y: ', valor_y)