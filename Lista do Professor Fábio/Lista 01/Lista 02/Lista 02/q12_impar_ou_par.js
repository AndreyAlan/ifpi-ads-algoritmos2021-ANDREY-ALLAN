const prompt = require('prompt-sync')()

function main(){
   
    // Entrada
  
    const numero = Number(prompt('Insira um número: '))

    // Processamento e saida dos dados recebidos

    if(numero%2 == 0){
        console.log('O número', numero, 'é um número par')
    }else{
        console.log('O número', numero, 'é um número impar')
    }
}
main()