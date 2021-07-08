const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let numero = 1

    while (numero >= 0 && numero <= 255) {
        numero = Number(prompt('Informe o número decimal (0 a 255): '))
        
        if (numero >= 0 && numero <= 255) {
            hex = numero.toString(16);
            
            console.log(numero, ' em binario é: ', dec_bin(numero))
            console.log(numero, 'em hexadecimal é: ', hex)
        
        }
    }
}

function dec_bin(decimal) {
    return (decimal >>> 0).toString(2);
}
main()