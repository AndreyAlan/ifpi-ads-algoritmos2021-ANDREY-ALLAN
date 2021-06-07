const prompt = require('prompt-sync')()

function main(){
    
    // Entrada

    const ano = Number(prompt('Informe um ano: '))
    const mes = Number(prompt('Informe um mês: '))
    const dia = Number(prompt('Informe um dia: '))
    
    // Processamento e saída dos dados
   
    console.log('É um ano válido')

    if(0 < mes && mes<= 12 ){
        console.log('É um mês válido')
    }else{
        console.log('É um mes inválido')
    }
    if(0 < dia && dia<= 31){
        console.log('É um dia válido')
    }else{
        console.log('É um dia inválido')
    }
}
main()