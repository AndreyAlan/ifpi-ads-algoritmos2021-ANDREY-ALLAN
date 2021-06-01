const input = require('prompt-sync')()

//Entradas
const numeroA = Number(input('Informe o 1º número inteiro positivo: '))
const numeroB = Number(input('informe o 2º número inteiro positivo: '))
const numeroC = Number(input('Informe o 3º número inteiro positivo: '))

//Processamento
const calculo_r = Math.pow((numeroA + numeroB), 2)
const calculo_s = Math.pow((numeroB + numeroC), 2)
const resultado = (calculo_r + calculo_s) / 2

//Saída
console.log('O resultado dessa operação é: ', resultado)