const prompt = require('prompt-sync')()

function main() {

    let numero = Number(prompt('Informe um número: '))

    let num1 = 0
    let num2 = 0

    while (num1 + num2 != numero) {

        num1 = Number(prompt('Número 1: '))
        num2 = Number(prompt('Número 2: '))
    }

    console.log('A soma de',num1 , " + " , num2 , " é igual a: " , numero)
}
main()