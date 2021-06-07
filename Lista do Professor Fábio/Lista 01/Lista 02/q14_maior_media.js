const prompt = require('prompt-sync')()

function main(){
    
    // Entrada

    const num1 = Number(prompt('Informe o primeiro número: '))
    const num2 = Number(prompt('Informe o segundo número: '))
    const num3 = Number(prompt('Informe o terceiro número: '))
    const num4 = Number(prompt('Informe o quarto número: '))
    const num5 = Number(prompt('Informe o quinto número: '))
    
    // Processamento e saida dos dados recebidos

    const media = (num1 + num2 + num3 + num4 + num5) / 5
        console.log('A média é: ', media)
        console.log('Os números com as maiores medias são: ')
       
    if (num1 > media){
       console.log(num1)
    }
    if (num2 > media){
       console.log(num2)
    }
    if (num3 > media){
       console.log(num3)
    }
    if (num4 > media){
       console.log(num4)
    }
    if (num5 > media){
       console.log(num5)
    }
}
main()