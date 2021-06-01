const prompt = require('prompt-sync')();

// Entrada
const binario = prompt('Insira o número binário de 4 digitos (0,1): ')

// Processamento
const decimal = ((binario[0]*2**3)+(binario[1]*2**2)+(binario[2]*2**1)+(binario[3]*2**0))

 // Saida
 console.log(binario, 'em decimal é igual a: ', decimal)