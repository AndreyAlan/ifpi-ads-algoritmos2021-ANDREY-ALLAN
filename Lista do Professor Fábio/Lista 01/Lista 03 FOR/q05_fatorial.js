const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let i, numero
    
    numero = Number(prompt('Informe um número: '))


    for (i = numero - 1; i > 1; i--) {
        numero = numero * i
        
        if (i != 2) {
            
            continue

        }
        console.log('É igual a: ', numero.toFixed(2))
    }
}
main()