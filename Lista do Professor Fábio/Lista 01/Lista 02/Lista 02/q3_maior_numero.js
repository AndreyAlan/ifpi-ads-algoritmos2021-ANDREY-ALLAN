const prompt = require('prompt-sync')();

// Entrada
function main (){
    const numero1 = Number(prompt('Insira o primeiro número: '))
    const numero2 = Number(prompt('Insira o segundo número: '))
    const numero3 = Number(prompt('Insira o terceiro número: '))

    // Processamento
    const maior_numero = verifica_maior_numero(numero1, numero2, numero3)
    console.log('O maior número é o: ', maior_numero)
}

function verifica_maior_numero (numero1, numero2, numero3){
    if(numero1 > numero2 && numero1 > numero3){
        return numero1

    }else if(numero2 > numero1 && numero2 > numero3){
        return numero2

    }else if(numero3 > numero1 && numero3 > numero1){
        return numero3

    }else{
        return ('Nenhum, os números são iguais!')
    }
}
main()