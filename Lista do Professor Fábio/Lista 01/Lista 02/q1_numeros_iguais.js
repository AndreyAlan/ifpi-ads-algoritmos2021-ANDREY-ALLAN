const prompt = require('prompt-sync')();

function main () {

    // Entrada

    const numero1 = Number(prompt('Insira o primeiro número: '))
    const numero2 = Number(prompt('Insira o sengundo número: '))
    const numero3 = Number(prompt('Insira o terceiro número: '))

    const numeros_iguais = Number(verificar_os_numeros_iguais(numero1, numero2, numero3))

    if (numeros_iguais > 0) {
    console.log('Existem, ', numeros_iguais, 'números iguais')
    }else{
        console.log('Não existem números iguais')
    }

}

    // Processamento
function verificar_os_numeros_iguais(numero1, numero2, numero3){
    if ((numero1 === numero2) && (numero1 === numero3)) {
        return 3

    }else if ((numero1 === numero2) && (numero1 !== numero3)) {
        return 2

    }else if ((numero1 === numero3) && (numero1!== numero2)) {
        return 2

    }else if ((numero2 === numero3) && (numero2!== numero1)) {
        return 2

    }else{
        return 0
    }
}   
main()