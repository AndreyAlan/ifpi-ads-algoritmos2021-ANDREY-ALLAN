const prompt = require('prompt-sync')()

//Entrada
const funcao1 = Number(prompt('Insira o numerador da primeira função: '))
const denominador1 = Number(prompt('Insira o denominador da primeira fração: '))
const funcao2 = Number(prompt('Insira o numerador da segunda função: '))
const denominador2 = Number(prompt("Insira o denominador da segunda função: "))

//Processamento
const denominador = denominador1 * denominador2
const numerador = (funcao1 * denominador2) + (funcao2 * denominador1)

//Saída
console.log(funcao1, '/', denominador1, '+', funcao2, '/', denominador2, '=', numerador, '/', denominador)