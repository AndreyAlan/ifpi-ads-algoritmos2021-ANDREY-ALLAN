const prompt = require('prompt-sync')({
    sigint: true
})

function main() {

    let operacao, numero, resultado

    do {

    if (operacao > 4 || operacao < 1) {
        console.log('O número que você informou não é válido')

    }
    
    console.log('        %x-+ CALCULADORA +-x%        ')
    console.log('1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n: ')
    operacao = Number(prompt('Escolha uma das operações (1, 2, 3 ou 4):'))

    } while (operacao > 4 || operacao < 1)


    for (numero = 1; numero < 11; numero++) {
        console.log('Número escolhido por você foi: ', numero)
        
        if (operacao == 1) {
            soma(numero);
        
        } else if (operacao == 2) {
            subtracao(numero)
        
        } else if (operacao == 3) {
            multiplicacao(numero)
        
        } else if (operacao == 4) {
            divisao(numero)
        }
    }
}
main()

function soma(numero) {
    
    for (let i = 1; i <= 10; i++) {
        resultado = numero + i
        console.log(numero, "+", i, "=", resultado)
    }
}

function subtracao(numero) {
    for (let i = 1; i <= 10; i++) {
        res = i - num
        console.log(i, "-", numero, "=", resultado)
    }
}

function multiplicacao(numero) {
    for (let i = 1; i <= 10; i++) {
        resultado = numero * i
        console.log(numero, "*", i, "=", resultado)
    }
}

function divisao(numero) {
    for (let i = 1; i <= 10; i++) {
        resultado = i / numero
        console.log(i, "/", numero, "=", resultado.toFixed(2))
    }
}