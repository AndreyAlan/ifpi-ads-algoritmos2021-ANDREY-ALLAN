const prompt = require('prompt-sync')()

function main(){

    // Entrada
    const opcao = Number(prompt('Escolha uma das opções (1, 2, ou 3): '))
    const num1 = Number(prompt('Informe o primeiro número: '))
    const num2 = Number(prompt('Informe o segundo número: '))
    const num3 = Number(prompt('Informe o terceiro número: '))

    // Processamento e saida dos dados recebidos
    
   if (opcao === 1){
       console.log(num1)
   }else if (opcao === 2){
       console.log(num2)
   }else if (opcao === 3){
       console.log(num3)
   }else{
       console.log('A opção é inválida')
   }
}
main()