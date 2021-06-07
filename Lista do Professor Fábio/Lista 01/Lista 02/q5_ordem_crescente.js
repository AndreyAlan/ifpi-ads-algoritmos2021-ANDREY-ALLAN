const prompt = require('prompt-sync')();

function main(){
    // Entrada
    const numero1 = Number(prompt('Insira o primeiro digito: '))
    const numero2 = Number(prompt('Insira o segundo digito: '))
    const numero3 = Number(prompt('Insira o terceiro digito: '))

    let maior, meio, menor

    // Processamento

    if (numero1 > numero2 && numero1 > numero3){
        maior = numero1
        
        if (numero2 < numero3){
            menor = numero2
            meio = numero3
        }else{
            menor = numero3
            meio = numero2
        }
    }else if (numero1 < numero2 && numero1 < numero3){
        menor = numero1
        if (numero2 < numero3){
            maior = numero3
            meio = numero2
        }else{
            maior = numero2
            meio = numero3
        }
    }else{
        meio = numero1
        if (numero2 < numero3){
            maior = numero3
            menor = numero2
        }else{
            maior = numero2
            menor = numero3
        }

        console.log('O maior o número é o: ', maior)
        console.log('O número do meio é o: ', meio)
        console.log('O menor o número é o: ', menor)
        console.log('A ordem crescente é: ', menor, meio, maior)
    }
}
main()