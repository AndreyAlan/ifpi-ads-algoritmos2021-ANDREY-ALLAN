const prompt = require('prompt-sync')()

function main () {

    var num1 = Number(prompt('Informe um número:'))
    var num2 = Number(prompt('Informe mais um número:'))

    let resto = 1

    let a = num1
    let b = num2
    
    if(num1 > 0 && num2 > 0) {
       
        while(b != 0) {
            let resto = a % b 
            a = b
            b = resto
        
        }
        var mdc = a

        console.log('O MDC é igual : ', mdc)
    }
}
main()