const prompt = require('prompt-sync')()

function main () {

    let x = Number(prompt('Informe o X: '))
    let n = Number(prompt('Informe o N: '))

    while (n >= 2) {

        
        x = x/n
        n--

        console.log('O resultado é: ', x.toFixed(2))

    }

}
main()