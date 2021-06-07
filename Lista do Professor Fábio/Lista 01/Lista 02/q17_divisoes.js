const prompt = require('prompt-sync')()

function main(){

    // Entrada

    const numero1 = Number(prompt('Informe um número: '))
    const numero2 = Number(prompt('Informe mais um número: '))

    const resto = numero1 % numero2
    
    // Processamento e saída dso dados recebidos

    if (numero1 % numero2 == 1){
        const condicao = numero1 + numero2 + resto 
        console.log('A soma dos valores mais o resto da divisão é igual a: ', condicao)

    }else if (numero1 % numero2 == 2){
        if (numero1 % 2 == 0){
            console.log(numero1,' é um número par.')

        }else{
            console.log(numero1,' é um número impar.')
            
        }
        if (numero2 % 2 == 0){
            console.log(numero1,' é um número par.')

        }else{
            console.log(numero1,' é um número impar.')
        }

        console.log('menor: ',numero1)

    }else if(numero1 % numero2 == 3){
        console.log((numero1 + numero2) * numero1)

    }else if(numero1 % numero2 == 4){
        if(numero2 != 0){}
        console.log((numero1 + numero2)/numero2)

    }else{
        console.log('O quadrado de', numero1, 'é igual a: ', Math.pow(numero1,2))
        console.log('O quadrado de', numero2, 'é igual a: ', Math.pow(numero2,2))
    }
}
main()