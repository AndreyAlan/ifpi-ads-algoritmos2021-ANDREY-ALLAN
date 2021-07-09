const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let i, numero
    let soma = 0

    numero = Number(prompt('Informe um número: '))


    for (i = numero - 1; i > 1; i--) {

        console.log(i)

        soma += i
}

    console.log('A soma no intervalo de 1 a: ', numero, ' é: ', soma)
}
main()