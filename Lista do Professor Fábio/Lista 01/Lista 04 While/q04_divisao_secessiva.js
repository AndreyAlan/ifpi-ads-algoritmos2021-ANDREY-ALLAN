const prompt = require('prompt-sync')()

function main () {

    let numero = Number(prompt('Informe o número que deseja dividir: '))

    while (numero >= 1) {
        numero = numero / 2 

        console.log('O resutado da última divisão é: ', numero.toFixed(2))

    }

}
main()