const prompt = require('prompt-sync')()

function main() {
    
    let numero = Number(prompt('Informe um nuúmero: '))

    let digitos = 0
    
    if (numero == 0) {
        digitos = 1
    }
    else
        while (numero >= 1) {
            
            numero = numero / 10
            digitos++
        }
    console.log('O número de digitos é igual: ', digitos)

}
main()