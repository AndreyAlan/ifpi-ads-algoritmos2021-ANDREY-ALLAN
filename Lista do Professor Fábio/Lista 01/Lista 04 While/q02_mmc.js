const prompt = require('prompt-sync')()

function main () {

    const num1 = Number(prompt('Informe o primeiro número: '))
   
    const num2 = Number(prompt('Informe o segundo número: '))

    let i = 1

    while (!(i % num1 == 0 && i % num2 == 0)) {
        
        i++
    }
    
    console.log('O MMC é igual a: ', i )
}
main()