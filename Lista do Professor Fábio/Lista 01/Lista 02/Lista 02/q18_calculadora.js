const prompt = require('prompt-sync')()

function main(){
    
    // Entrada

    const numero1 = Number(prompt('Informe o primeiro número inteiro: '))
    const numero2 = Number(prompt('Informe o segundo número inteiro: '))
    const operacao = Number(prompt('Informe a operação que deseja realizar (1 (Adição), 2 (Subtração), 3 (Muçltiplicação), 4 (Divisão): '))
    
    //Processamento
    if (operacao == 1){
        resultado = numero1 + numero2
        console.log(numero1, '+', numero2, '=', resultado)
    }else if(operacao == 2){
        resultado = numero1 - numero2
        console.log(numero1, '-', numero2, '=', resultado)
    }else if(operacao == 3){
        resultado = numero1 * numero2
        console.log(numero1, 'x', numero2, '=', resultado)
    }else if(operacao == 4){
        resultado = numero1 / numero2
        console.log(numero1, '/', numero2, '=', resultado)
    }else{
        console.log('Por favor, selecione uma opção válida')
    }
}
main()