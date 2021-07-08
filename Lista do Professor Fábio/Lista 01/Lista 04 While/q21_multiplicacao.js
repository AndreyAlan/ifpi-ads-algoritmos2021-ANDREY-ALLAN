const prompt = require('prompt-sync')({
    sigint: true
})

function main() {


    let numero, numero2
    let i = 1, i2 = 0
    
    numero = Number(prompt('Informe um número:'))
    numero2 = Number(prompt('Esse número vai ser multiplicado por quanto? '))

    while (i >= 1) {
        i++

        if (numero == 0) {
            
            console.log(numero, "x", numero2, "= 0")
            return
        }
        else if (numero == 1) {
            
            console.log(numero, "x", numero2, "=", numero2)
            return
        }
        else if (i % numero == 0) {
            
            i2++
        }
        if (i2 == numero2) {
            break
        }
    }
    console.log(numero, "x", numero2, "=", i)
}
main()