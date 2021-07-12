const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    
    let frase = prompt('Informe uma frase: '), substituir = prompt('Sub-cadeia para substituir: '),
    sub_cadeia = prompt('Informe a nova sub-cadeia: ')

    let frase2 = frase.replace(substituir, sub_cadeia)

    console.log('A nova frase é: ')
    console.log(frase2)
}
main()
